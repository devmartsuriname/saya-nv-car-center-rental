# Phase 9 — Implementation Blueprint

**Version**: 1.0
**Status**: Documentation Only — No Execution
**Date**: 2026-02-22

---

## 0. Purpose

This document defines the step-by-step execution plan for implementing the Saya Car Center & Rental database, storage, and RLS architecture. It is the operational guide that references Tasks.md for specific work items.

**No execution in this phase.** This is the blueprint to follow when implementation begins.

---

## 1. Supabase Project Setup Assumptions

### Connection Strategy

- **External Supabase project** — NOT Lovable Cloud DB
- Connection via environment variables:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (for admin operations and emergency RLS recovery)
- Supabase client initialized in shared utility: `src/shared/utils/supabase.ts`

### Prerequisites

- External Supabase project created and accessible
- Project URL and keys available
- SQL Editor accessible for migration execution
- At least one auth user created for super_admin role assignment

---

## 2. SQL Migration Wave Order

Execute migrations in strict order. Each migration corresponds to a Tasks.md group.

| Migration | Reference | Tasks.md Group |
|---|---|---|
| `001_enums_and_foundation` | Phase 8 §3 Wave 1 | DB Wave 1 |
| `002_vehicle_tables` | Phase 8 §3 Wave 2 | DB Wave 2 |
| `003_blog_tables` | Phase 8 §3 Wave 3 | DB Wave 3 |
| `004_frontend_modules` | Phase 8 §3 Wave 4 | DB Wave 4 |
| `005_crm_and_settings` | Phase 8 §3 Wave 5 | DB Wave 5 |
| `006_storage_buckets` | Phase 8 §4 | Storage |
| `007_enable_rls` | Phase 8 §5 Step 1 | RLS Task 7.1 |
| `008_rls_super_admin` | Phase 8 §5 Step 2 | RLS Task 7.2 |
| `009_rls_role_policies` | Phase 8 §5 Step 3 | RLS Task 7.3 |
| `010_rls_public_select` | Phase 8 §5 Step 4 | RLS Task 7.4 |

### Rules

- Execute one migration at a time
- Verify success before proceeding
- Create restore point after each wave
- Never skip a migration

---

## 3. Storage Buckets + Policy Order

### Step 1: Create Buckets (Migration 006)

```
INSERT INTO storage.buckets: vehicles, blog, frontend (all public)
```

### Step 2: Apply Storage RLS (after Migration 006)

- Public read on all buckets
- Role-based upload/delete per Phase 7 §6.2:
  - `vehicles` bucket: super_admin, rental_manager, sales_manager
  - `blog` bucket: super_admin, content_manager
  - `frontend` bucket: super_admin, content_manager

---

## 4. RLS Enablement Order + Validation Sequence

### Enablement Order

1. **Enable RLS** on all 22 tables (Migration 007)
2. **Super admin ALL policy** on all tables (Migration 008) — do NOT proceed without this
3. **Role-based policies** per domain (Migration 009)
4. **Public SELECT policies** with WHERE filters (Migration 010)

### Validation Sequence (after each step)

| After Migration | Validate |
|---|---|
| 007 (Enable RLS) | Super admin user exists in user_roles |
| 008 (Super admin policy) | Super admin can CRUD all tables; non-admin sees nothing |
| 009 (Role policies) | Each role accesses only their domain |
| 010 (Public SELECT) | Anon sees only active/published; zero write access |

### Critical Safety Rule

> **ALWAYS apply Migration 008 (super_admin ALL) immediately after 007 (enable RLS).** Never leave RLS enabled without the super_admin policy — this will lock out all users.

---

## 5. Minimal Seed Dataset Requirements

### Per Table (1-2 records each)

| Table | Records Needed |
|---|---|
| `user_roles` | 1 super_admin, 1 content_manager, 1 sales_manager, 1 rental_manager |
| `media_assets` | 2-3 test images (1 per bucket) |
| `vehicles` | 1 rental (active), 1 sale (active), 1 draft, 1 archived |
| `vehicle_rental_details` | 1 (for active rental vehicle) |
| `vehicle_sale_details` | 1 (for active sale vehicle) |
| `vehicle_media` | 1-2 (linked to test vehicle + media) |
| `blog_categories` | 1 active category |
| `blog_tags` | 2 tags |
| `blog_posts` | 1 published, 1 draft |
| `blog_post_tags` | 1-2 links |
| `hero_slides` | 1 active |
| `services` | 2 active |
| `about_content` | 1 record |
| `about_progress_items` | 2 items |
| `why_choose_items` | 2 active |
| `testimonials` | 1 active |
| `gallery_items` | 2 active |
| `brand_partners` | 2 active |
| `cta_banners` | 1 active |
| `quick_requests` | 1 new, 1 contacted |
| `site_settings` | 1 record with basic config |

### Purpose

Enable execution of all 40+ acceptance test scenarios from Phase 8 §9.

---

## 6. Rollback Checkpoint Naming

### Convention

```
RP-Phase9-Wave-{N}-{description}
```

### Checkpoints

| Checkpoint | When |
|---|---|
| `RP-Phase9-Wave-1-Foundation` | After Migration 001 |
| `RP-Phase9-Wave-2-Vehicles` | After Migration 002 |
| `RP-Phase9-Wave-3-Blog` | After Migration 003 |
| `RP-Phase9-Wave-4-Frontend` | After Migration 004 |
| `RP-Phase9-Wave-5-CRM` | After Migration 005 |
| `RP-Phase9-Wave-6-Storage` | After Migration 006 |
| `RP-Phase9-Wave-7-RLS-Enable` | After Migration 007 — CRITICAL checkpoint |
| `RP-Phase9-Wave-8-RLS-Policies` | After Migrations 008-010 |

### Emergency Recovery

If RLS policies lock out admin access:

1. Access Supabase SQL Editor (uses service role, bypasses RLS)
2. `ALTER TABLE <table> DISABLE ROW LEVEL SECURITY;` on affected tables
3. Debug and fix the offending policy
4. Re-enable RLS and reapply corrected policies
5. Document the incident

---

## 7. Go/No-Go Checklist

### Prerequisites Before ANY Code Changes

| # | Check | Required |
|---|---|---|
| 1 | Frontend parity import complete (Phase 10) | ✅ Must be approved |
| 2 | Parity Verification Gate passed | ✅ Must be approved |
| 3 | External Supabase project created | ✅ |
| 4 | Supabase URL + keys available | ✅ |
| 5 | At least 1 auth user created in Supabase | ✅ |
| 6 | Phase 5, 6, 7, 8 documents reviewed for consistency | ✅ |
| 7 | All 7 ENUMs confirmed (values finalized) | ✅ |
| 8 | All 22 tables confirmed (schema finalized) | ✅ |
| 9 | RLS policy templates confirmed | ✅ |
| 10 | Restore point naming agreed | ✅ |
| 11 | Emergency RLS recovery procedure understood | ✅ |
| 12 | Tasks.md reviewed and task order agreed | ✅ |

### Hard Blockers

- ❌ No SQL execution until frontend parity is complete and explicitly approved
- ❌ No Lovable Cloud DB — external Supabase only
- ❌ No schema changes without corresponding restore point

---

## Re-Asserted Constraints

1. **Single Vite app** — `/admin` is route-based, not a separate build
2. **Strict CSS/SCSS isolation** — `.admin-scope` vs `.public-scope`, mandatory, no leakage
3. **External Supabase** — NOT Lovable Cloud DB
4. **Deployment target** — Hostinger VPS + sayanv.com (future, not implemented now)
5. **Known issue** — apexcharts type error is pre-existing and unrelated to this work

---

**STOP — Await further instructions.**
