

# Phase 7 — RLS and Permission Matrix Documentation

## Objective

Save the complete Phase 7 RLS and Permission Matrix document as `Saya Project Docs/Phase-7-RLS-Permission-Matrix.md`. Documentation only — no code, database, or schema changes.

## Important Security Note

Per Supabase best practices, roles will be stored in a separate `user_roles` table (not on profiles) using a `has_role()` security definer function to prevent infinite recursion in RLS policies. This aligns with the provided system security guidelines.

## Deliverable

**File**: `Saya Project Docs/Phase-7-RLS-Permission-Matrix.md`

Contains the full RLS specification as provided, covering all 10 sections:

1. Role Definitions (super_admin, content_manager, sales_manager, rental_manager — stored in separate user_roles table)
2. Global Security Principles (RLS on all tables, soft-delete, media integrity)
3. Public (Anon) Access Rules (read-only for active/published content across all frontend-facing tables)
4. Admin Role Matrix (table-level RCUD permissions):
   - Frontend Modules (hero_slides, services, about_content, etc.)
   - Vehicles — Rental Domain
   - Vehicles — Sales Domain
   - CRM — Quick Requests
   - Blog (posts, categories, tags, media)
5. Field-Level Restrictions (vehicle_type immutable, slug lock after activation, CRM update limits)
6. Storage (Media) Policies (3 buckets: vehicles, blog, frontend; role-based upload/delete)
7. Status-Based Access Control (Draft/Active editable by owner role; Archived by super_admin only)
8. Policy Implementation Strategy (deferred to Phase 8)
9. Validation Checklist
10. Next Phase outputs

## Technical Details

- 1 file created
- No code modifications
- No dependencies added
- No database, schema, RLS, or backend work
- Document saved to `Saya Project Docs/`
- Stop after documentation, await further instructions

