# Phase 9 — Tasks + Implementation Blueprint (Documentation Only)

## Objective

Create four documentation files that convert Phases 5-8 into actionable implementation guidance, define the repo structure lock, and plan the frontend parity import. No code, routing, dependency, schema, RLS, or styling changes.

## Deliverables

### A) `Saya Project Docs/Tasks.md`

Actionable backlog converting Phases 5-8 into grouped tasks:

- **DB Wave 1** (Foundation): ENUMs, user_roles, has_role(), media_assets
- **DB Wave 2** (Vehicles): vehicles, vehicle_rental_details, vehicle_sale_details, vehicle_media
- **DB Wave 3** (Blog): blog_categories, blog_tags, blog_posts, blog_post_tags, blog_post_media
- **DB Wave 4** (Frontend): hero_slides, services, about_content, about_progress_items, why_choose_items, testimonials, gallery_items, brand_partners, cta_banners
- **DB Wave 5** (CRM/Settings): quick_requests, site_settings
- **Storage**: 3 buckets (vehicles, blog, frontend) + policies
- **RLS**: Enable per table, super_admin base, role-based, public SELECT
- **Seed Data**: Minimal test records per table per role
- **Admin CRUD Wiring**: Per-module Darkone admin pages/modals
- **Public Site Dynamic Reads**: Replace static data with Supabase queries
- **QA**: Acceptance testing matrix per role

Each task includes: objective, input references, output, acceptance checks, STOP note.

Out of scope items explicitly marked: shop/storefront, frontend login/registration, commerce features.

---

### B) `Saya Project Docs/Phase-9-Implementation-Blueprint.md`

Step-by-step execution blueprint (no execution now):

1. **Supabase project setup**: External Supabase (NOT Lovable Cloud DB), connection via environment variables
2. **SQL migration wave order**: Reference Phase 8 Waves 1-5 (migrations 001-005)
3. **Storage buckets + policy order**: Migration 006 (buckets) then storage RLS
4. **RLS enablement order**: Migration 007 (enable), 008 (super_admin), 009 (role-based), 010 (public SELECT)
5. **Minimal seed dataset**: 1-2 records per table for each role scenario
6. **Rollback checkpoint naming**: RP-Phase9-Wave-N convention
7. **Go/No-Go checklist**: Prerequisites before any code changes

Re-asserted constraints:

- Single Vite app, /admin is route-based
- Strict CSS/SCSS isolation mandatory
- External Supabase later (not Lovable Cloud DB)
- Deployment target: Hostinger VPS + sayanv.com (future)
- Known issue: apexcharts type error (pre-existing, unrelated)

---

### C) `Saya Project Docs/Phase-10-Frontend-Parity-Import-Plan.md`

Planning for importing Gorent Home 1 into the public site route tree:

- **KEEP vs REMOVE**: Based on Phase 1 freeze (14 sections + StrickyHeader confirmed)
- **Section-to-Component mapping** with data source designation:
  - Header -> static now, future site_settings
  - BannerOne -> static now, future hero_slides
  - SlidingTextOne -> static (no DB table)
  - ServiceOne -> static now, future services
  - AboutOne -> static now, future about_content + about_progress_items
  - ListingOne -> static now, future vehicles
  - QuickRequest -> static now, future quick_requests (write) + vehicles (read)
  - WhychooseOne -> static now, future why_choose_items
  - TestimonialOne -> static now, future testimonials
  - VideoOne -> static now, future site_settings or cta_banners
  - GalleryHomeOne -> static now, future gallery_items (limit 6)
  - BrandOne -> static now, future brand_partners
  - LetsTalk -> static now, future cta_banners
  - Footer -> static now, future site_settings
  - StrickyHeader -> static now, future site_settings
- **Asset placement rules**: All images/static files in /public; all React/TS code in /src
- **Import strategy**: Components from `gorent-car-rental-react-js-template/src/` imported into `/src/apps/public/`

---

### D) `Saya Project Docs/Phase-11-Repo-Structure-Lock.md`

Final folder boundaries for single Vite app:

```text
src/
  apps/
    public/          # Public site (/)
      components/
      layouts/
      pages/
      sections/
      assets/
        css/         # Gorent CSS scoped under .public-scope
    admin/           # Darkone admin (/admin/*)
      app/
      components/
      context/
      helpers/
      hooks/
      layouts/
      pages/
      routes/
      assets/
        scss/        # Darkone SCSS scoped under .admin-scope
  shared/            # Only truly shared utilities (no theme styling)
    utils/
    types/
    hooks/
```

- **Routing boundary**: Public router handles `/`; Admin router handles `/admin/*`
- **Styling isolation**:
  - Admin styles scoped under `.admin-scope` root class
  - Public styles scoped under `.public-scope` root class
  - No cross-imports of theme SCSS/CSS between public and admin
  - Allowed globally: CSS reset, font loading only
- **Re-asserted constraints**: Single Vite app, external Supabase, Hostinger VPS + sayanv.com (future)

EXECUTION ORDER OVERRIDE — CRITICAL

Before any database implementation begins, the following sequence is locked:

1) Phase 0 — Repo Stabilization

   - Finalize folder structure as defined in [Phase-11-Repo-Structure-Lock.md](http://Phase-11-Repo-Structure-Lock.md)

   - Enforce route-based architecture:

     Public at "/"

     Admin at "/admin/*"

   - Verify strict styling isolation (.public-scope vs .admin-scope)

   - Confirm single Vite build integrity (no CSS leakage, no routing conflicts)

2) Phase 10 — Frontend 1:1 Parity Import (PUBLIC ONLY)

   - Import Gorent Home 1 template into /src/apps/public/

   - Achieve full visual 1:1 parity

   - All sections static (no Supabase queries)

   - No database integration

   - No RLS

   - No storage buckets

   - No migrations

3) Parity Verification Gate

   - Pixel-level visual comparison completed

   - Routing verified

   - CSS isolation verified

   - Build passes without errors

Only AFTER this gate is formally approved:

4) Phase 8 Execution — Database Implementation Waves 1–5

   - Then follow [Tasks.md](http://Tasks.md) strictly in order.

Hard Rule:

No SQL.

No migrations.

No RLS.

No Supabase integration.

No storage buckets.

Until frontend parity is complete and explicitly approved.  
  
Technical Details

- 4 files created under `Saya Project Docs/`
- No code modifications
- No dependencies added
- No database, schema, RLS, or backend work
- No routing, styling, or build changes
- Known issue documented: apexcharts type error (pre-existing, unrelated)
- Stop after documentation, await further instructions