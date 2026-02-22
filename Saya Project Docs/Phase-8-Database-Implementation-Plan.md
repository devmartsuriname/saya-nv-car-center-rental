# Phase 8 — Database Implementation Plan

**Version**: 1.0
**Status**: Documentation Only — No Implementation
**Date**: 2026-02-22

---

## 0. Purpose

This document is the concrete execution blueprint for implementing the Saya Car Center & Rental database architecture. It translates:

- **Phase 5** — ERD & Database Model (table structures, relationships)
- **Phase 6** — Admin UX Flow Mapping (CRUD operations per module)
- **Phase 7** — RLS & Permission Matrix (role-based access control)

into an ordered, testable migration plan.

**No SQL is executed in this phase.** This defines the implementation sequence for Phase 9.

---

## 1. Migration Order Strategy

### Execution Sequence

```
Step 1: Create ENUMs
Step 2: Create auth helper (user_roles table + has_role() function)
Step 3: Create base tables (no FK dependencies)
Step 4: Create dependent tables (FK to base tables)
Step 5: Create join/bridge tables
Step 6: Create indexes
Step 7: Create storage buckets
Step 8: Enable RLS on all tables
Step 9: Apply RLS policies (super_admin first, then role-based, then public)
Step 10: Validate via acceptance testing matrix
```

### Rationale

- ENUMs must exist before any table references them as a column type.
- `user_roles` and `has_role()` must exist before any RLS policy references them.
- `media_assets` is a base table — referenced by `vehicle_media`, `blog_post_media`, and frontend modules.
- `vehicles` must exist before `vehicle_rental_details`, `vehicle_sale_details`, and `vehicle_media`.
- `blog_posts` must exist before `blog_post_tags` and `blog_post_media`.
- RLS is enabled AFTER all tables exist to avoid partial-policy states during creation.
- Indexes are created after table data structure is finalized.

---

## 2. ENUM Decision

### Recommendation: Postgres ENUM

Use native `CREATE TYPE ... AS ENUM` for all categorical columns.

### ENUMs to Create (7 total)

| ENUM Name | Values |
|---|---|
| `app_role` | `super_admin`, `content_manager`, `sales_manager`, `rental_manager` |
| `vehicle_type` | `rental`, `sale` |
| `record_status` | `draft`, `active`, `archived` |
| `rental_availability_status` | `available`, `rented`, `maintenance`, `unavailable` |
| `lead_status` | `new`, `contacted`, `qualified`, `converted`, `lost` |
| `blog_status` | `draft`, `published`, `archived` |
| `vehicle_condition` | `new`, `used`, `certified_pre_owned` |

### Why ENUM over TEXT + CHECK

| Factor | ENUM | TEXT + CHECK |
|---|---|---|
| Type safety | Compile-time enforcement | Runtime only |
| Storage | 4 bytes (efficient) | Variable length |
| Validation | Automatic | Requires CHECK constraint |
| Readability | Self-documenting | Must read constraint definition |
| Migration | `ALTER TYPE ADD VALUE` | `ALTER TABLE DROP/ADD CONSTRAINT` |

### Migration Risk Notes

- **Adding values**: `ALTER TYPE enum_name ADD VALUE 'new_value'` — safe, non-blocking.
- **Removing values**: Not directly supported in Postgres. Requires creating a new enum, migrating data, dropping old enum. **High risk** — plan carefully.
- **Renaming values**: `ALTER TYPE enum_name RENAME VALUE 'old' TO 'new'` — available in Postgres 10+.

### Rollback Strategy

If an ENUM value must be removed:

1. Create new ENUM without the unwanted value.
2. ALTER all columns using the old ENUM to TEXT temporarily.
3. UPDATE any rows with the removed value to a valid replacement.
4. ALTER columns to use the new ENUM.
5. DROP the old ENUM.

This is a multi-step migration — document as a known constraint.

---

## 3. Table Creation Order (SQL Sequence Plan)

### Wave 1 — Foundation (ENUMs + Auth + Base Tables)

```
Migration: 001_enums_and_foundation

1. CREATE TYPE app_role
2. CREATE TYPE vehicle_type
3. CREATE TYPE record_status
4. CREATE TYPE rental_availability_status
5. CREATE TYPE lead_status
6. CREATE TYPE blog_status
7. CREATE TYPE vehicle_condition

8. CREATE TABLE user_roles (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
     role app_role NOT NULL,
     UNIQUE(user_id, role)
   )

9. CREATE FUNCTION has_role(_user_id UUID, _role app_role)
   RETURNS BOOLEAN
   LANGUAGE SQL STABLE SECURITY DEFINER
   SET search_path = public

10. CREATE TABLE media_assets (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      file_name TEXT NOT NULL,
      file_path TEXT NOT NULL,
      file_type TEXT,
      file_size BIGINT,
      alt_text TEXT,
      bucket TEXT NOT NULL,
      uploaded_by UUID REFERENCES auth.users(id),
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    )
```

### Wave 2 — Vehicle Domain

```
Migration: 002_vehicle_tables

1. CREATE TABLE vehicles (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vehicle_type vehicle_type NOT NULL,
     make TEXT NOT NULL,
     model TEXT NOT NULL,
     year INTEGER NOT NULL,
     slug TEXT UNIQUE NOT NULL,
     description TEXT,
     status record_status DEFAULT 'draft',
     condition vehicle_condition,
     color TEXT,
     mileage INTEGER,
     vin TEXT,
     features JSONB DEFAULT '[]',
     created_by UUID REFERENCES auth.users(id),
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

2. CREATE TABLE vehicle_rental_details (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE NOT NULL,
     daily_rate DECIMAL(10,2),
     weekly_rate DECIMAL(10,2),
     monthly_rate DECIMAL(10,2),
     availability_status rental_availability_status DEFAULT 'available',
     minimum_rental_days INTEGER DEFAULT 1,
     maximum_rental_days INTEGER,
     deposit_amount DECIMAL(10,2),
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now(),
     UNIQUE(vehicle_id)
   )

3. CREATE TABLE vehicle_sale_details (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE NOT NULL,
     price DECIMAL(12,2),
     negotiable BOOLEAN DEFAULT false,
     warranty_months INTEGER,
     financing_available BOOLEAN DEFAULT false,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now(),
     UNIQUE(vehicle_id)
   )

4. CREATE TABLE vehicle_media (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     vehicle_id UUID REFERENCES vehicles(id) ON DELETE CASCADE NOT NULL,
     media_id UUID REFERENCES media_assets(id) ON DELETE CASCADE NOT NULL,
     sort_order INTEGER DEFAULT 0,
     is_primary BOOLEAN DEFAULT false,
     created_at TIMESTAMPTZ DEFAULT now()
   )
```

### Wave 3 — Blog Domain

```
Migration: 003_blog_tables

1. CREATE TABLE blog_categories (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     slug TEXT UNIQUE NOT NULL,
     description TEXT,
     status record_status DEFAULT 'active',
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

2. CREATE TABLE blog_tags (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL UNIQUE,
     created_at TIMESTAMPTZ DEFAULT now()
   )

3. CREATE TABLE blog_posts (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     slug TEXT UNIQUE NOT NULL,
     excerpt TEXT,
     content TEXT,
     category_id UUID REFERENCES blog_categories(id),
     status blog_status DEFAULT 'draft',
     featured_image UUID REFERENCES media_assets(id),
     author_id UUID REFERENCES auth.users(id),
     published_at TIMESTAMPTZ,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

4. CREATE TABLE blog_post_tags (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE NOT NULL,
     tag_id UUID REFERENCES blog_tags(id) ON DELETE CASCADE NOT NULL,
     UNIQUE(post_id, tag_id)
   )

5. CREATE TABLE blog_post_media (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE NOT NULL,
     media_id UUID REFERENCES media_assets(id) ON DELETE CASCADE NOT NULL,
     sort_order INTEGER DEFAULT 0,
     created_at TIMESTAMPTZ DEFAULT now()
   )
```

### Wave 4 — Frontend Modules

```
Migration: 004_frontend_modules

1. CREATE TABLE hero_slides (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     subtitle TEXT,
     image_id UUID REFERENCES media_assets(id),
     cta_text TEXT,
     cta_link TEXT,
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

2. CREATE TABLE services (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     description TEXT,
     icon TEXT,
     image_id UUID REFERENCES media_assets(id),
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

3. CREATE TABLE about_content (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     section_key TEXT UNIQUE NOT NULL,
     title TEXT,
     content TEXT,
     image_id UUID REFERENCES media_assets(id),
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

4. CREATE TABLE about_progress_items (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     label TEXT NOT NULL,
     percentage INTEGER NOT NULL CHECK (percentage >= 0 AND percentage <= 100),
     sort_order INTEGER DEFAULT 0,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

5. CREATE TABLE why_choose_items (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     description TEXT,
     icon TEXT,
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

6. CREATE TABLE testimonials (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     author_name TEXT NOT NULL,
     author_title TEXT,
     author_image_id UUID REFERENCES media_assets(id),
     content TEXT NOT NULL,
     rating INTEGER CHECK (rating >= 1 AND rating <= 5),
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

7. CREATE TABLE gallery_items (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT,
     media_id UUID REFERENCES media_assets(id) NOT NULL,
     category TEXT,
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

8. CREATE TABLE brand_partners (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     logo_id UUID REFERENCES media_assets(id),
     website_url TEXT,
     sort_order INTEGER DEFAULT 0,
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

9. CREATE TABLE cta_banners (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     title TEXT NOT NULL,
     subtitle TEXT,
     cta_text TEXT,
     cta_link TEXT,
     background_image_id UUID REFERENCES media_assets(id),
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )
```

### Wave 5 — CRM & Settings

```
Migration: 005_crm_and_settings

1. CREATE TABLE quick_requests (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name TEXT NOT NULL,
     email TEXT,
     phone TEXT,
     message TEXT,
     vehicle_id UUID REFERENCES vehicles(id),
     request_type vehicle_type,
     lead_status lead_status DEFAULT 'new',
     assigned_to UUID REFERENCES auth.users(id),
     notes TEXT,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )

2. CREATE TABLE site_settings (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     setting_key TEXT UNIQUE NOT NULL,
     setting_value JSONB,
     created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now()
   )
```

---

## 4. Bucket Creation Plan

### Buckets (3 total — all public)

```sql
-- Migration: 006_storage_buckets

INSERT INTO storage.buckets (id, name, public)
VALUES
  ('vehicles', 'vehicles', true),
  ('blog', 'blog', true),
  ('frontend', 'frontend', true);
```

### Bucket Purpose

| Bucket | Content | Used By |
|---|---|---|
| `vehicles` | Vehicle photos | vehicle_media → media_assets |
| `blog` | Blog post images | blog_post_media → media_assets |
| `frontend` | Hero slides, services, about, testimonials, gallery, brand logos, CTA backgrounds | All frontend module tables |

### Storage RLS Policies (per Phase 7)

**Public Read (all buckets)**:
```
Policy: "Public can view files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id IN ('vehicles', 'blog', 'frontend'))
```

**Admin Upload/Delete**:

| Bucket | Roles with Upload/Delete |
|---|---|
| `vehicles` | `super_admin`, `rental_manager`, `sales_manager` |
| `blog` | `super_admin`, `content_manager` |
| `frontend` | `super_admin`, `content_manager` |

```
Policy pattern:
ON storage.objects FOR INSERT/DELETE
TO authenticated
USING/WITH CHECK (
  bucket_id = '<bucket>'
  AND public.has_role(auth.uid(), '<allowed_role>')
)
```

---

## 5. RLS Activation Plan

### Step 1 — Enable RLS on All Tables

```
Migration: 007_enable_rls

ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_rental_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_sale_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicle_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_progress_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE why_choose_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE cta_banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE quick_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
```

### Step 2 — Super Admin Base Policy (ALL tables)

```
Migration: 008_rls_super_admin

-- Apply to every table:
CREATE POLICY "super_admin_all" ON <table>
FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'super_admin'))
WITH CHECK (public.has_role(auth.uid(), 'super_admin'));
```

### Step 3 — Role-Based Policies

```
Migration: 009_rls_role_policies

-- content_manager: Frontend modules + Blog
-- Pattern: SELECT, INSERT, UPDATE, DELETE on allowed tables

-- rental_manager: vehicles (vehicle_type='rental'), vehicle_rental_details, vehicle_media
-- Pattern: SELECT, INSERT, UPDATE on allowed tables
-- DELETE (archive only via status update)

-- sales_manager: vehicles (vehicle_type='sale'), vehicle_sale_details, vehicle_media
-- Pattern: SELECT, INSERT, UPDATE on allowed tables
-- DELETE (archive only via status update)

-- CRM: All managers get SELECT on quick_requests
-- rental_manager + sales_manager get UPDATE on quick_requests (lead_status only — enforced at app level)
```

### Step 4 — Public SELECT Policies

```
Migration: 010_rls_public_select

-- Vehicles: WHERE status = 'active'
-- Blog posts: WHERE status = 'published'
-- Frontend modules: WHERE is_active = true
-- blog_categories, blog_tags, media_assets, site_settings: unrestricted SELECT
-- vehicle_rental_details, vehicle_sale_details, vehicle_media: via JOIN to active vehicles
```

### Validation Order

1. Verify super_admin can CRUD all tables.
2. Verify each role can only access their domain.
3. Verify public can only SELECT active/published content.
4. Verify cross-domain read access (sales_manager reading rental vehicles — optional per Phase 7).
5. Verify archived content is invisible to public.

---

## 6. Slug Strategy Implementation Plan

### Unique Constraints

Applied during table creation (Wave 2 and Wave 3):

| Table | Column | Constraint |
|---|---|---|
| `vehicles` | `slug` | `UNIQUE NOT NULL` |
| `blog_posts` | `slug` | `UNIQUE NOT NULL` |
| `blog_categories` | `slug` | `UNIQUE NOT NULL` |

### Pre-Activation Locking Rule

**Application-level rule** (not enforced at database level):

> Slugs may be modified freely while `status = 'draft'`.
> Once `status` changes to `'active'` or `'published'`, slug modification is discouraged.

**Enforcement strategy**: Application code should warn or block slug changes on active records. This is NOT a database trigger — it is a UI/API validation rule to be implemented in the admin frontend.

### Slug Generation

- Auto-generated from title/make+model+year on creation.
- Must be URL-safe: lowercase, hyphens, no special characters.
- Collision handling: append `-2`, `-3`, etc. if slug already exists.
- Implementation is application-level (admin frontend or edge function).

---

## 7. Soft Delete Implementation Plan

### Status ENUM Enforcement

All content tables use `record_status` or `blog_status` ENUM:

| Tables | Status Column | ENUM |
|---|---|---|
| `vehicles` | `status` | `record_status` (draft, active, archived) |
| `blog_posts` | `status` | `blog_status` (draft, published, archived) |
| `blog_categories` | `status` | `record_status` (draft, active, archived) |

### Archive Behavior

- **Archive** = set `status` to `'archived'`.
- Archived records are excluded from public queries via RLS WHERE conditions.
- Archived records remain visible to admin roles with appropriate access.

### Archive Restrictions (per Phase 7)

| Action | Allowed Roles |
|---|---|
| Archive (set status to 'archived') | Role with UPDATE access to the table |
| Restore from archive (set status back to 'draft'/'active') | `super_admin` only (recommended) |
| Hard DELETE | `super_admin` only (if ever enabled) |

### No Hard DELETE Policies

- No RLS `DELETE` policies for non-super_admin roles.
- All "delete" actions in the admin UI perform a status update to `'archived'`.
- Hard deletion is reserved for super_admin and should be used sparingly.

---

## 8. Restore & Rollback Strategy

### Checkpoint Naming Convention

```
RP-Phase9-Wave-{N}-{description}
```

Examples:
- `RP-Phase9-Wave-1-Foundation`
- `RP-Phase9-Wave-2-Vehicles`
- `RP-Phase9-Wave-3-Blog`
- `RP-Phase9-Wave-4-Frontend`
- `RP-Phase9-Wave-5-CRM`
- `RP-Phase9-Wave-6-Storage`
- `RP-Phase9-Wave-7-RLS-Enable`
- `RP-Phase9-Wave-8-RLS-Policies`

### Backup Before RLS Activation

Before executing Migration 007 (Enable RLS):

1. Document all existing table states.
2. Confirm super_admin user exists in `user_roles`.
3. Create restore point `RP-Phase9-Wave-7-RLS-Enable`.

### Revert Strategy — If Policies Lock Out Admin Access

**Emergency Procedure**:

```sql
-- EMERGENCY: Disable RLS on all tables if admin is locked out
-- Execute via Supabase SQL Editor (bypasses RLS as service role)

ALTER TABLE <table> DISABLE ROW LEVEL SECURITY;

-- Then: Debug and fix the offending policy
-- Then: Re-enable RLS and reapply corrected policies
```

**Prevention**:
- Always apply `super_admin_all` policy FIRST before any restrictive policies.
- Test super_admin access after each policy migration.
- Keep the Supabase service role key accessible for emergency SQL execution.

---

## 9. Acceptance Testing Matrix

### 9.1 Super Admin Tests

| # | Test | Expected Result |
|---|---|---|
| SA-1 | SELECT all tables | All rows visible |
| SA-2 | INSERT into any table | Success |
| SA-3 | UPDATE any row in any table | Success |
| SA-4 | Archive any record | Success |
| SA-5 | Restore archived record | Success |
| SA-6 | Upload to any bucket | Success |
| SA-7 | Delete from any bucket | Success |

### 9.2 Content Manager Tests

| # | Test | Expected Result |
|---|---|---|
| CM-1 | SELECT frontend module tables | All rows visible |
| CM-2 | INSERT into hero_slides | Success |
| CM-3 | UPDATE blog_posts | Success |
| CM-4 | Archive gallery_items | Success |
| CM-5 | SELECT vehicles | Denied |
| CM-6 | INSERT into vehicles | Denied |
| CM-7 | Upload to blog bucket | Success |
| CM-8 | Upload to vehicles bucket | Denied |
| CM-9 | SELECT quick_requests | Read only |
| CM-10 | UPDATE quick_requests | Denied |

### 9.3 Sales Manager Tests

| # | Test | Expected Result |
|---|---|---|
| SM-1 | SELECT vehicles (type=sale) | Visible |
| SM-2 | INSERT vehicle (type=sale) | Success |
| SM-3 | UPDATE vehicle_sale_details | Success |
| SM-4 | Archive vehicle (type=sale) | Success |
| SM-5 | SELECT blog_posts | Denied |
| SM-6 | INSERT into hero_slides | Denied |
| SM-7 | Upload to vehicles bucket | Success |
| SM-8 | Upload to blog bucket | Denied |
| SM-9 | UPDATE quick_requests lead_status | Success |
| SM-10 | SELECT vehicles (type=rental) | Optional (read) |

### 9.4 Rental Manager Tests

| # | Test | Expected Result |
|---|---|---|
| RM-1 | SELECT vehicles (type=rental) | Visible |
| RM-2 | INSERT vehicle (type=rental) | Success |
| RM-3 | UPDATE vehicle_rental_details | Success |
| RM-4 | Archive vehicle (type=rental) | Success |
| RM-5 | SELECT blog_posts | Denied |
| RM-6 | INSERT into services | Denied |
| RM-7 | Upload to vehicles bucket | Success |
| RM-8 | Upload to frontend bucket | Denied |
| RM-9 | UPDATE quick_requests lead_status | Success |
| RM-10 | SELECT vehicles (type=sale) | Optional (read) |

### 9.5 Public (Anon) Tests

| # | Test | Expected Result |
|---|---|---|
| PUB-1 | SELECT vehicles WHERE status='active' | Visible |
| PUB-2 | SELECT vehicles WHERE status='draft' | Not visible |
| PUB-3 | SELECT vehicles WHERE status='archived' | Not visible |
| PUB-4 | SELECT blog_posts WHERE status='published' | Visible |
| PUB-5 | SELECT blog_posts WHERE status='draft' | Not visible |
| PUB-6 | SELECT hero_slides WHERE is_active=true | Visible |
| PUB-7 | SELECT hero_slides WHERE is_active=false | Not visible |
| PUB-8 | INSERT into any table | Denied |
| PUB-9 | UPDATE any table | Denied |
| PUB-10 | Read file from any bucket | Success (public bucket) |
| PUB-11 | Upload file to any bucket | Denied |

### 9.6 Media Access Tests

| # | Test | Expected Result |
|---|---|---|
| MA-1 | Public read vehicle image URL | Accessible |
| MA-2 | Public read blog image URL | Accessible |
| MA-3 | Public read frontend image URL | Accessible |
| MA-4 | Anon upload to any bucket | Denied |
| MA-5 | content_manager upload to frontend | Success |
| MA-6 | rental_manager upload to blog | Denied |

### 9.7 Cross-Domain Visibility Tests

| # | Test | Expected Result |
|---|---|---|
| CD-1 | sales_manager reads rental vehicles | Optional (per Phase 7 config) |
| CD-2 | rental_manager reads sale vehicles | Optional (per Phase 7 config) |
| CD-3 | content_manager reads vehicles | Denied |
| CD-4 | Public reads vehicle_rental_details for active vehicle | Visible |
| CD-5 | Public reads vehicle_sale_details for draft vehicle | Not visible |

---

## 10. Implementation Readiness Checklist

### Pre-Implementation Gates

| # | Check | Status |
|---|---|---|
| 1 | All 7 ENUMs defined and values confirmed | ⬜ Pending |
| 2 | All 22 tables mapped with columns and types | ⬜ Pending |
| 3 | FK relationships validated (no circular deps) | ⬜ Pending |
| 4 | user_roles table and has_role() function specified | ⬜ Pending |
| 5 | 3 storage buckets defined with access rules | ⬜ Pending |
| 6 | RLS policies documented for all 22 tables | ⬜ Pending |
| 7 | super_admin ALL policy template confirmed | ⬜ Pending |
| 8 | Public SELECT policies with WHERE conditions confirmed | ⬜ Pending |
| 9 | Slug uniqueness constraints confirmed | ⬜ Pending |
| 10 | Soft delete strategy confirmed | ⬜ Pending |
| 11 | Restore point naming convention agreed | ⬜ Pending |
| 12 | Emergency RLS disable procedure documented | ⬜ Pending |
| 13 | Acceptance test scenarios defined (40+ tests) | ⬜ Pending |
| 14 | Phase 5, 6, 7 documents reviewed for consistency | ⬜ Pending |
| 15 | Lovable Cloud enabled and accessible | ⬜ Pending |

### Approval Required Before Phase 9

All checklist items must be marked ✅ before SQL execution begins.

---

## STOP

Phase 8 documentation complete. Awaiting further instructions.

**Next Phase**: Phase 9 — Database Implementation (SQL Execution)
