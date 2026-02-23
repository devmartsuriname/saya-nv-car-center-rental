# Saya Car Center & Rental — Task Backlog

**Version**: 2.0
**Status**: Phase 10 Ready — Awaiting Implementation
**Date**: 2026-02-23

---

## Execution Order

Tasks must be executed in the order listed. Each group must be completed and verified before proceeding to the next.

**Current Gate**: Phase 10 must be completed and formally approved before any DB Wave begins.

---

## OUT OF SCOPE

The following are explicitly **not in scope** for any task in this backlog:

- ❌ Shop / Storefront / E-commerce
- ❌ Frontend customer login / registration
- ❌ Online payments / checkout
- ❌ Booking calendar system
- ❌ Mobile app
- ❌ Customer accounts

---

## Phase 10 — Frontend 1:1 Parity Import (NEXT)

**Prerequisite**: Phase 0 CLOSED + Admin LOCKED ✅
**Goal**: Import Gorent HomeOne template into `src/apps/public/` with full visual 1:1 parity (static data only).
**Governance**: Bootstrap/FontAwesome/Flaticon allowed inside `.public-scope` only (Delroy-approved clarification).

| Task | Scope | Gate |
|---|---|---|
| 10.1 | Create Restore Point (RP-Phase10-Step1-FrontendParityImport) | Confirm before proceeding |
| 10.2 | Install missing deps (framer-motion, react-fast-marquee, react-countup, react-intersection-observer, @ramonak/react-progress-bar) | Build compiles |
| 10.3 | Copy assets (CSS + fonts + images) to `src/apps/public/assets/` | Asset count matches template |
| 10.4 | Copy data files to `src/apps/public/data/` | No type errors |
| 10.5 | Copy context + link content to `src/apps/public/components/` | No circular imports |
| 10.6 | Copy element components to `src/apps/public/components/elements/` | No missing deps |
| 10.7 | Copy section components to `src/apps/public/sections/` | All importable |
| 10.8 | Fix all import paths (react-router v7 → v6, relative paths) | Zero unresolved imports |
| 10.9 | Create PublicLayout.tsx + HomeOne.tsx page | Components render |
| 10.10 | Wire public routes in unified router (App.tsx) | Both `/` and `/admin/*` work |
| 10.11 | CSS scoping verification (no leakage) | No style leakage |
| 10.12 | Visual parity verification (20-point checklist) | All sections render 1:1 |
| 10.13 | Final build + Phase 10 completion report | Build compiles, no new errors |

**STOP after Task 10.13**: Formal parity approval required before DB Waves.

---

## DB Wave 1 — Foundation (ENUMs + Auth + Base Tables)

### Task 1.1: Create ENUMs

- **Objective**: Create all 7 Postgres ENUM types.
- **Inputs**: Phase 5 §3.1, Phase 8 §2
- **Output**: 7 ENUMs created: `app_role`, `vehicle_type`, `record_status`, `rental_availability_status`, `lead_status`, `blog_status`, `vehicle_condition`
- **Acceptance Checks**:
  - All ENUMs exist in database
  - Values match Phase 8 §2 exactly
- **STOP**: Verify ENUMs before proceeding.

### Task 1.2: Create user_roles Table

- **Objective**: Create the `user_roles` table for RBAC.
- **Inputs**: Phase 7 §1.2, Phase 8 §3 Wave 1
- **Output**: `user_roles` table with `id`, `user_id` (FK → auth.users), `role` (app_role), unique constraint on `(user_id, role)`
- **Acceptance Checks**:
  - Table exists with correct schema
  - FK to auth.users confirmed
  - Unique constraint prevents duplicate role assignments
- **STOP**: Verify table before proceeding.

### Task 1.3: Create has_role() Function

- **Objective**: Create the `has_role()` security definer function.
- **Inputs**: Phase 7 §1.2, Phase 8 §3 Wave 1
- **Output**: `public.has_role(_user_id UUID, _role app_role)` function — STABLE, SECURITY DEFINER, search_path = public
- **Acceptance Checks**:
  - Function returns true for assigned roles
  - Function returns false for unassigned roles
  - Function bypasses RLS (security definer)
- **STOP**: Test function with manual role assignment before proceeding.

### Task 1.4: Create media_assets Table

- **Objective**: Create the central media registry table.
- **Inputs**: Phase 5 §4.1, Phase 8 §3 Wave 1
- **Output**: `media_assets` table with all fields per Phase 8
- **Acceptance Checks**:
  - Table exists with correct schema
  - Can INSERT a test record
- **STOP**: Verify table before proceeding to Wave 2.

---

## DB Wave 2 — Vehicle Domain

### Task 2.1: Create vehicles Table

- **Objective**: Create the core vehicle entity table.
- **Inputs**: Phase 5 §4.2, Phase 8 §3 Wave 2
- **Output**: `vehicles` table with all fields, `slug` UNIQUE NOT NULL, `vehicle_type` and `status` ENUMs
- **Acceptance Checks**:
  - Table exists with correct schema
  - Slug uniqueness enforced
  - ENUM columns use correct types
- **STOP**: Verify before creating dependent tables.

### Task 2.2: Create vehicle_rental_details Table

- **Objective**: Create rental-specific fields table (1:1 with vehicles).
- **Inputs**: Phase 5 §4.3, Phase 8 §3 Wave 2
- **Output**: `vehicle_rental_details` table with `vehicle_id` FK → vehicles, UNIQUE constraint on `vehicle_id`
- **Acceptance Checks**:
  - FK relationship works
  - UNIQUE constraint on vehicle_id
- **STOP**: Verify before proceeding.

### Task 2.3: Create vehicle_sale_details Table

- **Objective**: Create sale-specific fields table (1:1 with vehicles).
- **Inputs**: Phase 5 §4.4, Phase 8 §3 Wave 2
- **Output**: `vehicle_sale_details` table with `vehicle_id` FK → vehicles, UNIQUE constraint on `vehicle_id`
- **Acceptance Checks**:
  - FK relationship works
  - UNIQUE constraint on vehicle_id
- **STOP**: Verify before proceeding.

### Task 2.4: Create vehicle_media Table

- **Objective**: Create vehicle gallery join table.
- **Inputs**: Phase 5 §4.5, Phase 8 §3 Wave 2
- **Output**: `vehicle_media` table with FKs to vehicles and media_assets, sort_order, is_primary
- **Acceptance Checks**:
  - Both FK relationships work
  - Sort order and is_primary default correctly
- **STOP**: Verify Wave 2 complete before proceeding.

---

## DB Wave 3 — Blog Domain

### Task 3.1: Create blog_categories Table

- **Objective**: Create blog category taxonomy.
- **Inputs**: Phase 5 §4.7, Phase 8 §3 Wave 3
- **Output**: `blog_categories` table with `slug` UNIQUE NOT NULL
- **Acceptance Checks**: Table exists, slug uniqueness enforced
- **STOP**: Verify before proceeding.

### Task 3.2: Create blog_tags Table

- **Objective**: Create blog tag taxonomy.
- **Inputs**: Phase 5 §4.8, Phase 8 §3 Wave 3
- **Output**: `blog_tags` table with `name` UNIQUE
- **Acceptance Checks**: Table exists, name uniqueness enforced
- **STOP**: Verify before proceeding.

### Task 3.3: Create blog_posts Table

- **Objective**: Create blog content table.
- **Inputs**: Phase 5 §4.9, Phase 8 §3 Wave 3
- **Output**: `blog_posts` table with FKs to blog_categories and media_assets, `slug` UNIQUE NOT NULL
- **Acceptance Checks**: Table exists, FKs work, slug uniqueness enforced
- **STOP**: Verify before proceeding.

### Task 3.4: Create blog_post_tags Table

- **Objective**: Create many-to-many blog posts ↔ tags join table.
- **Inputs**: Phase 5 §4.10, Phase 8 §3 Wave 3
- **Output**: `blog_post_tags` table with composite unique on `(post_id, tag_id)`
- **Acceptance Checks**: Join relationship works, uniqueness enforced
- **STOP**: Verify before proceeding.

### Task 3.5: Create blog_post_media Table

- **Objective**: Create blog post additional media join table.
- **Inputs**: Phase 5 §4.11, Phase 8 §3 Wave 3
- **Output**: `blog_post_media` table with FKs to blog_posts and media_assets
- **Acceptance Checks**: Join relationship works
- **STOP**: Verify Wave 3 complete before proceeding.

---

## DB Wave 4 — Frontend Modules

### Task 4.1: Create hero_slides Table

- **Objective**: Hero slider content management.
- **Inputs**: Phase 5 §5.2, Phase 8 §3 Wave 4
- **Output**: `hero_slides` table with media FK, sort_order, is_active
- **Acceptance Checks**: Table exists, FK works, defaults correct
- **STOP**: Verify before proceeding.

### Task 4.2: Create services Table

- **Objective**: Service cards content management.
- **Inputs**: Phase 5 §5.3, Phase 8 §3 Wave 4
- **Output**: `services` table with media FK, sort_order, is_active
- **Acceptance Checks**: Table exists, defaults correct
- **STOP**: Verify before proceeding.

### Task 4.3: Create about_content Table

- **Objective**: About section single-record management.
- **Inputs**: Phase 5 §5.4, Phase 8 §3 Wave 4
- **Output**: `about_content` table with section_key UNIQUE, media FK
- **Acceptance Checks**: Table exists, section_key uniqueness enforced
- **STOP**: Verify before proceeding.

### Task 4.4: Create about_progress_items Table

- **Objective**: About section progress bars.
- **Inputs**: Phase 5 §5.5, Phase 8 §3 Wave 4
- **Output**: `about_progress_items` table with percentage CHECK (0-100), sort_order
- **Acceptance Checks**: Table exists, CHECK constraint works
- **STOP**: Verify before proceeding.

### Task 4.5: Create why_choose_items Table

- **Objective**: Why Choose section cards.
- **Inputs**: Phase 5 §5.6, Phase 8 §3 Wave 4
- **Output**: `why_choose_items` table with sort_order, is_active
- **Acceptance Checks**: Table exists, defaults correct
- **STOP**: Verify before proceeding.

### Task 4.6: Create testimonials Table

- **Objective**: Customer testimonials management.
- **Inputs**: Phase 5 §5.7, Phase 8 §3 Wave 4
- **Output**: `testimonials` table with media FK, rating CHECK (1-5), sort_order, is_active
- **Acceptance Checks**: Table exists, rating constraint works
- **STOP**: Verify before proceeding.

### Task 4.7: Create gallery_items Table

- **Objective**: Gallery image management.
- **Inputs**: Phase 5 §5.8, Phase 8 §3 Wave 4
- **Output**: `gallery_items` table with media FK NOT NULL, sort_order, is_active
- **Acceptance Checks**: Table exists, media FK enforced
- **STOP**: Verify before proceeding.

### Task 4.8: Create brand_partners Table

- **Objective**: Brand partner logos management.
- **Inputs**: Phase 5 §5.9, Phase 8 §3 Wave 4
- **Output**: `brand_partners` table with logo media FK, sort_order, is_active
- **Acceptance Checks**: Table exists, defaults correct
- **STOP**: Verify before proceeding.

### Task 4.9: Create cta_banners Table

- **Objective**: CTA banner content management.
- **Inputs**: Phase 5 §5.10, Phase 8 §3 Wave 4
- **Output**: `cta_banners` table with background media FK, is_active
- **Acceptance Checks**: Table exists, defaults correct
- **STOP**: Verify Wave 4 complete before proceeding.

---

## DB Wave 5 — CRM & Settings

### Task 5.1: Create quick_requests Table

- **Objective**: CRM lead capture storage.
- **Inputs**: Phase 5 §4.6, Phase 8 §3 Wave 5
- **Output**: `quick_requests` table with vehicle FK (nullable), lead_status ENUM, assigned_to FK
- **Acceptance Checks**: Table exists, FKs work, lead_status defaults to 'new'
- **STOP**: Verify before proceeding.

### Task 5.2: Create site_settings Table

- **Objective**: Global site configuration key-value store.
- **Inputs**: Phase 5 §5.1, Phase 8 §3 Wave 5
- **Output**: `site_settings` table with setting_key UNIQUE, setting_value JSONB
- **Acceptance Checks**: Table exists, key uniqueness enforced
- **STOP**: Verify Wave 5 complete before proceeding.

---

## Storage — Bucket Creation

### Task 6.1: Create Storage Buckets

- **Objective**: Create 3 public storage buckets.
- **Inputs**: Phase 7 §6.1, Phase 8 §4
- **Output**: Buckets created: `vehicles`, `blog`, `frontend` — all public
- **Acceptance Checks**:
  - All 3 buckets exist
  - Public read access confirmed
- **STOP**: Verify before applying storage RLS.

### Task 6.2: Apply Storage RLS Policies

- **Objective**: Apply role-based upload/delete policies per bucket.
- **Inputs**: Phase 7 §6.2, Phase 8 §4
- **Output**: Storage policies matching Phase 7 access matrix
- **Acceptance Checks**:
  - Public can read from all buckets
  - Role-based upload permissions verified per Phase 7 §6.2
  - Unauthorized uploads denied
- **STOP**: Verify storage policies before proceeding.

---

## RLS — Row Level Security

### Task 7.1: Enable RLS on All Tables

- **Objective**: Enable RLS on all 22 tables.
- **Inputs**: Phase 8 §5 Step 1
- **Output**: RLS enabled on every table (Migration 007)
- **Acceptance Checks**: `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` confirmed for all tables
- **STOP**: Create restore point RP-Phase9-Wave-7-RLS-Enable. Verify super_admin user exists in user_roles.

### Task 7.2: Apply Super Admin ALL Policy

- **Objective**: Apply `super_admin_all` policy to every table.
- **Inputs**: Phase 8 §5 Step 2
- **Output**: Super admin has full CRUD on all tables (Migration 008)
- **Acceptance Checks**:
  - Super admin can SELECT, INSERT, UPDATE, DELETE on all tables
  - Non-super_admin users see no rows (until role policies applied)
- **STOP**: Test super_admin access thoroughly before proceeding.

### Task 7.3: Apply Role-Based Policies

- **Objective**: Apply content_manager, sales_manager, rental_manager policies.
- **Inputs**: Phase 7 §4, Phase 8 §5 Step 3
- **Output**: Role-specific policies per Phase 7 matrix (Migration 009)
- **Acceptance Checks**:
  - Each role can only access their domain tables
  - Cross-domain access denied (or read-only per Phase 7 decisions)
- **STOP**: Test each role individually before proceeding.

### Task 7.4: Apply Public SELECT Policies

- **Objective**: Apply anon/public read-only policies with WHERE conditions.
- **Inputs**: Phase 7 §3, Phase 8 §5 Step 4
- **Output**: Public SELECT policies with status/is_active filters (Migration 010)
- **Acceptance Checks**:
  - Public sees only active/published/is_active=true content
  - Public cannot see draft/archived content
  - Public has zero write access
- **STOP**: Run full acceptance testing matrix (Phase 8 §9).

---

## Seed Data

### Task 8.1: Insert Minimal Test Records

- **Objective**: Create 1-2 records per table for each role scenario.
- **Inputs**: Phase 8 §9 (test matrix)
- **Output**: Seed data covering: active vehicle (rental + sale), draft vehicle, archived vehicle, published blog post, draft blog post, active frontend module items, new/contacted/closed quick requests
- **Acceptance Checks**:
  - All test scenarios from Phase 8 §9 can be executed
  - Each role has testable data
- **STOP**: Verify seed data supports full acceptance matrix.

---

## Admin CRUD Wiring

### Task 9.1: Vehicle Admin Pages (Rental + Sale)

- **Objective**: Wire Darkone admin pages for vehicle CRUD.
- **Inputs**: Phase 2 §E (Full Page), Phase 6 §4.2-4.3, DARKONE_ASSET_MAP.md
- **Output**: List view + Create/Edit full page for rental and sale vehicles, using Darkone 1:1 components
- **Acceptance Checks**:
  - CRUD operations work end-to-end
  - Status transitions enforced
  - Media upload functional
  - Darkone UI governance maintained
- **STOP**: Verify CRUD before proceeding.

### Task 9.2: Blog Admin Pages

- **Objective**: Wire Darkone admin pages for blog CRUD.
- **Inputs**: Phase 2 §E (Full Page for posts, XL Modal for categories/tags), Phase 6 §4.5-4.6
- **Output**: Blog posts list + create/edit page, categories/tags XL modals
- **Acceptance Checks**:
  - Post CRUD works with category/tag assignment
  - Featured image upload works
  - Publish/unpublish flow works
- **STOP**: Verify before proceeding.

### Task 9.3: Frontend Module Admin Pages

- **Objective**: Wire Darkone admin for all frontend content modules.
- **Inputs**: Phase 2 §E (mostly XL Modal), Phase 6 §4.1
- **Output**: List + XL Modal CRUD for: hero_slides, services, about_content, why_choose_items, testimonials, gallery_items, brand_partners, cta_banners
- **Acceptance Checks**:
  - Each module has working CRUD
  - Sort order management works
  - Active/inactive toggle works
  - Media upload functional
- **STOP**: Verify all frontend modules before proceeding.

### Task 9.4: CRM Admin Page

- **Objective**: Wire Darkone admin for Quick Requests.
- **Inputs**: Phase 2 §C (CRM group), Phase 6 §4.4
- **Output**: Quick requests list view with status filter, detail view/modal, status update capability
- **Acceptance Checks**:
  - Lead list displays correctly
  - Status updates work (New → Contacted → Closed)
  - Vehicle reference link works
- **STOP**: Verify before proceeding.

### Task 9.5: Site Settings Admin Page

- **Objective**: Wire Darkone admin for global site settings.
- **Inputs**: Phase 2 §E (Full Page), Phase 6 §4.7
- **Output**: Single-record settings page with sections for branding, header, footer, contact, social
- **Acceptance Checks**:
  - Settings save/load correctly
  - Logo upload works
  - Super admin only access enforced
- **STOP**: Verify before proceeding.

---

## Public Site Dynamic Reads

### Task 10.1: Replace Static Data with Supabase Queries

- **Objective**: Connect public site sections to database.
- **Inputs**: Phase 10 section-to-component mapping, Phase 5 tables
- **Output**: Each public section reads from its corresponding table
- **Acceptance Checks**:
  - All sections render data from database
  - Only active/published content displayed
  - Quick Request form submits to quick_requests table
  - Fallback behavior if no data
- **STOP**: Visual comparison with static version.

---

## QA — Acceptance Testing

### Task 11.1: Execute Acceptance Testing Matrix

- **Objective**: Run all test scenarios from Phase 8 §9.
- **Inputs**: Phase 8 §9 (40+ test scenarios)
- **Output**: All tests pass per expected results
- **Acceptance Checks**: 100% pass rate on all scenarios
- **STOP**: Document results. Any failures must be resolved before sign-off.

---

**END OF TASK BACKLOG**
