# Architecture

## Status: Phase 0 Complete — Phase 10 Approved

Phase 0 — Repo Stabilization is complete. Admin structure has been migrated, isolated, and locked.
Phase 10 — Frontend 1:1 Parity Import is approved and awaiting implementation.

## Project Documentation

All project-specific documentation is maintained in `/Saya Project Docs/`.

- **Phase 0 Plan**: `/Saya Project Docs/Phase-0-Repo-Structure-Plan.md`
- **Phase 10 Plan**: `/Saya Project Docs/Phase-10-Frontend-Parity-Import-Plan.md`
- **Repo Structure Lock**: `/Saya Project Docs/Phase-11-Repo-Structure-Lock.md`
- **Task Backlog**: `/Saya Project Docs/Tasks.md`

## Current Structure

```text
src/
  main.tsx                    # Single Vite entry point
  App.tsx                     # Top-level router mount
  apps/
    admin/                    # Darkone admin (route: /admin/*) — LOCKED
      app/                    # Admin app shell
      components/             # Admin UI components (Darkone 1:1)
      context/                # Auth context, theme context
      helpers/                # Admin helper utilities (fake-backend)
      hooks/                  # Admin-specific hooks
      layouts/                # AdminLayout.tsx (.admin-scope wrapper)
      routes/                 # Admin route definitions
      assets/                 # Admin SCSS + images
    public/                   # Public site (Phase 10 target — not yet imported)
      assets/                 # Will contain Gorent CSS, fonts, images
      components/             # Will contain context, elements, link-content
      data/                   # Will contain static data files
      layouts/                # Will contain PublicLayout.tsx (.public-scope wrapper)
      pages/                  # Will contain HomeOne.tsx
      sections/               # Will contain home-one/ and common/ sections
  shared/                     # Shared utilities — LOCKED
    lib/                      # utils.ts (cn helper)
    utils/                    # Shared utility functions
    types/                    # Shared TypeScript types
    hooks/                    # Shared hooks
```

- `gorent-car-rental-react-js-template/` — Gorent React template (source reference for Phase 10)

## Architecture

Single Vite app with two route trees:
- `src/apps/public/` — Car Center / Car Rental website (from Gorent React) — **Phase 10: awaiting import**
- `src/apps/admin/` — Darkone admin dashboard — **frozen**

Style isolation via wrapper classes (`.admin-scope`, `.public-scope`). Unified `react-router-dom` v6 routing.

## Phase 10 Governance

- Bootstrap/FontAwesome/Flaticon allowed ONLY inside `.public-scope` (Delroy-approved)
- No CSS cross-imports between public and admin
- No database work until frontend parity is verified

## Next Phase

Phase 10 — Frontend 1:1 Parity Import: copy Gorent HomeOne into `src/apps/public/` with static data. Awaiting implementation instruction.
