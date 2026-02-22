# Phase 7 — RLS & Permission Matrix

**Version**: 1.0
**Status**: Draft — Documentation Only (No Implementation)

---

## 0. Governance

This document translates Phase 6 Admin UX Flow Mapping into database-level security rules.

- No SQL executed in this phase.
- No Supabase configuration changes yet.
- This defines the **target** Row Level Security (RLS) architecture.
- Implementation deferred to **Phase 8**.

**Deliverable location**: `Saya Project Docs/Phase-7-RLS-Permission-Matrix.md`

---

## 1. Role Definitions (Auth Layer)

Roles are stored in a **separate `user_roles` table** (not on profiles) using a `has_role()` **security definer function** to prevent infinite recursion in RLS policies. This follows Supabase best practices.

### 1.1 System Roles

| Role | Description |
|---|---|
| `super_admin` | Full access to all modules |
| `content_manager` | Frontend modules + Blog |
| `sales_manager` | Sales listings + CRM |
| `rental_manager` | Rental listings + CRM |

### 1.2 Role Storage Architecture

```sql
-- Enum
create type public.app_role as enum ('super_admin', 'content_manager', 'sales_manager', 'rental_manager');

-- Separate roles table
create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null,
    unique (user_id, role)
);

-- Security definer function (bypasses RLS, prevents recursion)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;
```

---

## 2. Global Security Principles

- **RLS enabled on ALL tables** — no public table access except explicitly allowed read tables.
- **Public (anon) access** allowed only for frontend read queries.
- **Admin access** strictly role-based via `has_role()`.
- **Soft-delete pattern** via `status` instead of hard delete.
- **Media deletion** must respect foreign key usage (reference integrity check).

---

## 3. Public (Anon) Access Rules

Frontend may read (SELECT only):

| Table | Condition |
|---|---|
| `vehicles` | `WHERE status = 'active'` |
| `vehicle_rental_details` | JOIN active vehicles |
| `vehicle_sale_details` | JOIN active vehicles |
| `vehicle_media` | JOIN active vehicles |
| `media_assets` | Public URLs only |
| `blog_posts` | `WHERE status = 'published'` |
| `blog_categories` | All |
| `blog_tags` | All |
| `hero_slides` | `WHERE is_active = true` |
| `services` | `WHERE is_active = true` |
| `about_content` | All |
| `about_progress_items` | All |
| `why_choose_items` | `WHERE is_active = true` |
| `testimonials` | `WHERE is_active = true` |
| `gallery_items` | `WHERE is_active = true` |
| `brand_partners` | `WHERE is_active = true` |
| `cta_banners` | `WHERE is_active = true` |
| `site_settings` | All |

**Public has NO write access.**

---

## 4. Admin Role Matrix (Table-Level)

**Legend**: R = Read | C = Create | U = Update | D = Soft Delete (Archive)

### 4.1 Frontend Modules

| Table | super_admin | content_manager | sales_manager | rental_manager |
|---|---|---|---|---|
| `hero_slides` | R C U D | R C U D | — | — |
| `services` | R C U D | R C U D | — | — |
| `about_content` | R C U | R C U | — | — |
| `about_progress_items` | R C U | R C U | — | — |
| `why_choose_items` | R C U D | R C U D | — | — |
| `testimonials` | R C U D | R C U D | — | — |
| `gallery_items` | R C U D | R C U D | — | — |
| `brand_partners` | R C U D | R C U D | — | — |
| `cta_banners` | R C U D | R C U D | — | — |
| `site_settings` | R C U | — | — | — |

### 4.2 Vehicles — Rental Domain

| Table | super_admin | rental_manager | sales_manager | content_manager |
|---|---|---|---|---|
| `vehicles` (vehicle_type=rental) | R C U D | R C U D | R (optional) | — |
| `vehicle_rental_details` | R C U D | R C U D | R (optional) | — |
| `vehicle_media` | R C U D | R C U D | R (optional) | — |

### 4.3 Vehicles — Sales Domain

| Table | super_admin | sales_manager | rental_manager | content_manager |
|---|---|---|---|---|
| `vehicles` (vehicle_type=sale) | R C U D | R C U D | R (optional) | — |
| `vehicle_sale_details` | R C U D | R C U D | R (optional) | — |
| `vehicle_media` | R C U D | R C U D | R (optional) | — |

### 4.4 CRM — Quick Requests

| Table | super_admin | sales_manager | rental_manager | content_manager |
|---|---|---|---|---|
| `quick_requests` | R C U D | R U | R U | R |

**Rules:**
- Only `super_admin` may hard-delete (if ever enabled).
- Managers can update `lead_status` only.

### 4.5 Blog

| Table | super_admin | content_manager | sales_manager | rental_manager |
|---|---|---|---|---|
| `blog_posts` | R C U D | R C U D | — | — |
| `blog_categories` | R C U D | R C U D | — | — |
| `blog_tags` | R C U D | R C U D | — | — |
| `blog_post_tags` | R C U D | R C U D | — | — |
| `blog_post_media` | R C U D | R C U D | — | — |

---

## 5. Field-Level Restrictions (Logical)

### 5.1 Vehicles

Managers **cannot** change:
- `vehicle_type` (immutable after creation)
- `created_at`

**Slug modification** allowed only before activation (recommended rule).

### 5.2 Quick Requests

Managers **may** update:
- `lead_status`

Managers may **NOT** update:
- `created_at`
- `vehicle_id`

---

## 6. Storage (Media) Policies

### 6.1 Buckets

| Bucket | Purpose |
|---|---|
| `vehicles` | Vehicle images (main + gallery) |
| `blog` | Blog post featured images + content media |
| `frontend` | Hero slides, services, about, gallery, brand logos, etc. |

### 6.2 Access Rules

**Public:**
- Read access only (public URL enabled)

**Admin:**

| Role | vehicles | blog | frontend |
|---|---|---|---|
| `super_admin` | Upload / Delete | Upload / Delete | Upload / Delete |
| `content_manager` | — | Upload / Delete | Upload / Delete |
| `rental_manager` | Upload / Delete | — | — |
| `sales_manager` | Upload / Delete | — | — |

**Deletion must check reference integrity** (implementation in Phase 8).

---

## 7. Status-Based Access Control

**Vehicles and Blog:**

| Status | Editable By |
|---|---|
| `Draft` | Owner role |
| `Active` / `Published` | Owner role |
| `Archived` | `super_admin` only (recommended) |

---

## 8. Policy Implementation Strategy (For Phase 8)

1. Enable RLS on all tables.
2. Create base policy for `super_admin` (ALL access).
3. Create role-based policies per table using `has_role()`.
4. Create public SELECT policies with strict WHERE conditions.
5. Validate via test matrix (per role scenario).

---

## 9. Validation Checklist

Before implementation:

- [ ] All tables mapped to roles
- [ ] Public access defined clearly
- [ ] Media bucket separation confirmed
- [ ] Cross-domain read rules agreed (Sales/Rental visibility)
- [ ] Archive behavior confirmed
- [ ] `user_roles` table architecture confirmed (separate table, not on profiles)
- [ ] `has_role()` security definer function pattern confirmed

---

## 10. Next Phase

After Phase 7 approval, proceed to:

**Phase 8 — Database Implementation Planning**

Includes:
- Migration order
- ENUM creation decision
- Bucket creation
- RLS SQL templates (using `has_role()` pattern)
- Restore checkpoint strategy
- Acceptance testing matrix

---

**STOP — Await further instructions.**
