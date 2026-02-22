

# Phase 8 — Database Implementation Planning Documentation

## Objective

Save the complete Phase 8 Database Implementation Plan as `Saya Project Docs/Phase-8-Database-Implementation-Plan.md`. Documentation only — no code, database, or schema changes.

This document translates Phases 5 (ERD), 6 (UX Flows), and 7 (RLS) into a concrete execution blueprint for when implementation begins.

## Deliverable

**File**: `Saya Project Docs/Phase-8-Database-Implementation-Plan.md`

Contains all 10 sections as specified:

1. **Migration Order Strategy** — ENUMs first, then base tables (media_assets), then dependent tables, join tables, indexes, and finally RLS enablement. Defines the exact sequencing to avoid FK violations.

2. **ENUM Decision** — Recommends Postgres ENUM for the 6 defined types (vehicle_type, record_status, rental_availability_status, lead_status, blog_status, vehicle_condition) plus app_role. Includes migration risk notes and rollback strategy for adding/removing enum values.

3. **Table Creation Order** (exact SQL sequence plan across 5 migration waves):
   - Wave 1: ENUMs + user_roles + has_role() function + media_assets
   - Wave 2: vehicles, vehicle_rental_details, vehicle_sale_details, vehicle_media
   - Wave 3: blog_categories, blog_tags, blog_posts, blog_post_tags, blog_post_media
   - Wave 4: Frontend modules (hero_slides, services, about_content, about_progress_items, why_choose_items, testimonials, gallery_items, brand_partners, cta_banners)
   - Wave 5: quick_requests, site_settings

4. **Bucket Creation Plan** — Three public buckets (vehicles, blog, frontend) with SQL insert statements for storage.buckets and RLS policies per Phase 7 role matrix.

5. **RLS Activation Plan** — Per-table enablement, super_admin ALL policy first, then role-specific policies using has_role(), then public SELECT policies with WHERE conditions. Validation order defined.

6. **Slug Strategy Implementation Plan** — Unique constraints on vehicles.slug, blog_posts.slug, blog_categories.slug. Pre-activation locking documented as application-level rule.

7. **Soft Delete Implementation Plan** — record_status enum enforcement, archive restricted to super_admin, no hard DELETE policies for non-super roles.

8. **Restore and Rollback Strategy** — Checkpoint naming convention (RP-Phase8-Wave-N), backup before RLS activation, revert strategy if policies lock out admin access (disable RLS emergency procedure).

9. **Acceptance Testing Matrix** — Test scenarios per role (super_admin, content_manager, sales_manager, rental_manager) and public/anon, covering CRUD operations, media access, and cross-domain visibility.

10. **Implementation Readiness Checklist** — Final gate before execution.

## Technical Details

- 1 file created
- No code modifications
- No dependencies added
- No database, schema, RLS, or backend work
- No SQL executed
- Document saved to `Saya Project Docs/`
- Stop after documentation, await further instructions

