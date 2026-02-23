# Restore Point: RP-Phase0-Step1-RepoStabilization

**Created**: 2026-02-23
**Phase**: Phase 0 — Repo Stabilization
**Step**: Step 1 — Full Repo Restructure

## Pre-Change State

- All Darkone admin files live in flat `src/` structure
- Routes have no `/admin` prefix
- No `src/apps/` directory exists
- No `src/shared/` directory exists
- Demo routes (base-ui, forms, tables, icons, maps, apex-chart, layouts) are present
- Lovable placeholder pages (Index.tsx, NotFound.tsx) exist at `src/pages/`
- SCSS imports in `main.tsx` point to `./assets/scss/style.scss`
- AdminLayout has no `.admin-scope` wrapper class
- Build has pre-existing apexcharts type error (unrelated)

## Changes Planned

1. Delete all Darkone demo route directories
2. Delete Lovable placeholder pages
3. Move admin files to `src/apps/admin/`
4. Move shared files to `src/shared/`
5. Create `src/apps/public/` placeholder structure
6. Update all import paths (~86 files)
7. Add `/admin` prefix to all admin routes
8. Move admin auth routes to `/admin/auth/*`
9. Add `.admin-scope` class to AdminLayout
10. Update SCSS import path in main.tsx

## Rollback Instructions

If build breaks beyond pre-existing apexcharts issue:
1. STOP immediately
2. Revert all file moves
3. Restore original import paths
4. Report deviation

## Guardian Rules Reference

DEVMART-GUARDIAN-RULES.md — Supreme Authority
