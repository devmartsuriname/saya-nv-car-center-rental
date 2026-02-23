# Architecture

## Status: Phase 0 Complete

Phase 0 — Repo Stabilization is complete. Admin structure has been migrated, isolated, and locked.

## Project Documentation

All project-specific documentation is maintained in `/Saya Project Docs/`.

- **Phase 0 Plan**: `/Saya Project Docs/Phase-0-Repo-Structure-Plan.md`
- **Repo Structure Lock**: `/Saya Project Docs/Phase-11-Repo-Structure-Lock.md`

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
    public/                   # Public site placeholder (Phase 10 target)
  shared/                     # Shared utilities — LOCKED
    lib/                      # utils.ts (cn helper)
    utils/                    # Shared utility functions
    types/                    # Shared TypeScript types
    hooks/                    # Shared hooks
```

- `gorent-car-rental-react-js-template/` — Gorent React template (source reference for Phase 10)

## Architecture

Single Vite app with two route trees:
- `src/apps/public/` — Car Center / Car Rental website (from Gorent React) — **not yet imported**
- `src/apps/admin/` — Darkone admin dashboard — **frozen**

Style isolation via wrapper classes (`.admin-scope`, `.public-scope`). Unified `react-router-dom` v6 routing.

## Next Phase

Phase 10 — Frontend 1:1 Parity Import (Gorent static pages into `src/apps/public/`). Awaiting instruction.
