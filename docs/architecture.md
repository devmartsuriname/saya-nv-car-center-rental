# Architecture

## Status: Planning Phase

No structural changes have been implemented yet. The project is in documentation and planning mode.

## Project Documentation

All project-specific documentation is maintained in `/Saya Project Docs/`.

- **Phase 0 Plan**: `/Saya Project Docs/Phase-0-Repo-Structure-Plan.md`
  - Current repo analysis
  - Proposed dual-structure (frontend + /admin)
  - Style isolation strategy
  - Router unification approach
  - Option A vs B comparison
  - Risk matrix and recommendation

## Current Structure

- `src/` — Darkone admin template (active root app)
- `gorent-car-rental-react-js-template/` — Gorent React template (reference only)
- `archive/` — Frozen snapshots
- `docs-standard/` — Devmart global standards (frozen)

## Planned Structure

Single Vite app with two route trees:
- `src/frontend/` — Car Center / Car Rental website (from Gorent React)
- `src/admin/` — Darkone admin dashboard

Style isolation via wrapper classes (`.gorent-frontend`, `.darkone-admin`). Unified `react-router-dom` v6 routing.
