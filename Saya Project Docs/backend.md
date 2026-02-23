# Backend

## Status: Phase 0 Complete — No Backend Changes in Phase 10

No backend changes have been implemented beyond admin template migration. The project is in frontend parity stage next.

## Project Documentation

All project-specific documentation is maintained in `/Saya Project Docs/`.

## Current State

- Admin backend (fake-backend, auth context) now lives under `src/apps/admin/` (moved from flat `src/` during Phase 0).
- Frontend (Gorent) has no backend dependency yet.
- No Supabase connection established. Supabase will be external (NOT Lovable Cloud).

## Phase 10 Note

Phase 10 (Frontend 1:1 Parity Import) involves **zero backend changes**. All data will be static. No database queries, no API calls, no Supabase integration during this phase.

## Planned State

- Admin backend remains under `src/apps/admin/` (fake-backend, auth helpers, auth context).
- Frontend backend requirements TBD — no backend dependency planned until after Phase 10 parity.
- Database work begins only after Frontend 1:1 Parity is formally approved.
