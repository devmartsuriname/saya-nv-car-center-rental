# Architecture

## Status: Phase 0 Complete — Phase 10 COMPLETED (Corrections Applied)

Phase 0 — Repo Stabilization is complete. Admin structure has been migrated, isolated, and locked.
Phase 10 — Frontend 1:1 Parity Import is COMPLETED. All 13 tasks verified + parity corrections applied. Awaiting formal parity approval.

## Project Documentation

All project-specific documentation is maintained in `/Saya Project Docs/`.

- **Phase 0 Plan**: `/Saya Project Docs/Phase-0-Repo-Structure-Plan.md`
- **Phase 10 Plan**: `/Saya Project Docs/Phase-10-Frontend-Parity-Import-Plan.md`
- **Repo Structure Lock**: `/Saya Project Docs/Phase-11-Repo-Structure-Lock.md`
- **Task Backlog**: `/Saya Project Docs/Tasks.md`

## Current Structure

```text
src/
  main.tsx                    # Single Vite entry point (NO admin SCSS import)
  App.tsx                     # Top-level router mount (location-based branching)
  apps/
    admin/                    # Darkone admin (route: /admin/*) — LOCKED
      app/                    # Admin app shell
      components/             # Admin UI components (Darkone 1:1)
      context/                # Auth context, theme context
      helpers/                # Admin helper utilities (fake-backend)
      hooks/                  # Admin-specific hooks
      layouts/                # AdminLayout.tsx (.admin-scope wrapper + admin SCSS import)
      routes/                 # Admin route definitions
      assets/                 # Admin SCSS + images
    public/                   # Public site — Phase 10 IMPORTED + CORRECTED
      assets/                 # Gorent CSS, fonts, images (scoped under .public-scope)
      components/             # Context, elements, link-content (16 elements, 4 context, 2 link-content)
      data/                   # Static data files (listing, service, testimonials, gallery, why-choose)
      layouts/                # PublicLayout.tsx (.public-scope wrapper, imports style.css only)
      pages/                  # HomeOne.tsx (14 sections + StrickyHeader)
      sections/               # home-one/ (11 sections) + common/ (4 sections)
  shared/                     # Shared utilities — LOCKED
    lib/                      # utils.ts (cn helper)
    utils/                    # Shared utility functions
    types/                    # Shared TypeScript types
    hooks/                    # Shared hooks
```

- `gorent-car-rental-react-js-template/` — Gorent React template (source reference for Phase 10)

## Architecture

Single Vite app with two route trees:
- `src/apps/public/` — Car Center / Car Rental website (from Gorent React) — **Phase 10: IMPORTED + CORRECTED**
- `src/apps/admin/` — Darkone admin dashboard — **frozen, lazy-loaded**

Style isolation via wrapper classes (`.admin-scope`, `.public-scope`) + **admin lazy loading** (React.lazy). Unified `react-router-dom` v6 routing with location-based branching in `AppContent`.

## Style Isolation (Corrected — v2: Lazy Loading)

- **Admin branch**: Lazy-loaded via `React.lazy(() => import('./apps/admin/AdminApp'))` in `App.tsx`. This creates a Vite code-split boundary — admin SCSS (including "Play" font) is never loaded on public routes.
- **Admin SCSS**: Imported in `AdminLayout.tsx` — only loads when admin chunk is fetched
- **Public CSS**: `style.css` imported in `PublicLayout.tsx` (handles all sub-imports internally)
- **No cross-imports**: Admin fonts (Play) cannot leak into public; Gorent fonts (Roboto/Inter Tight) cannot leak into admin

## Phase 10 Governance

- Bootstrap/FontAwesome/Flaticon allowed ONLY inside `.public-scope` (Delroy-approved)
- No CSS cross-imports between public and admin
- No database work until frontend parity is verified

## Next Phase

Phase 10 is COMPLETE. Awaiting formal parity approval before DB Wave 1 (ENUMs + Auth + Base Tables).

## Company Details Intake (2026-02-24)

No DB/Supabase work performed. Company details intake is documentation-only (company-profile.md + content-seeding-plan.md). Content seeding is docs + static placeholders only. No code changes, no UI modifications.
