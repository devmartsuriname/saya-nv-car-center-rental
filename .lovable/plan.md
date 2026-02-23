# Phase 0 — Repo Stabilization Plan

## Objective

Restructure `src/` from the current flat Darkone layout into the target structure: `src/apps/admin/`, `src/apps/public/` (placeholder), and `src/shared/`. Update all import paths, add `/admin` route prefixes, add `.admin-scope` wrapper class, and create public placeholder structure.

**Restore Point**: RP-Phase0-Step1-RepoStabilization

## Pre-Task Compliance Checklist

- Guardian Rules referenced (DEVMART-GUARDIAN-RULES.md)
- Execution order validated (Phase 0 is step 1)
- Restore Point will be created before changes
- No duplicate code will be introduced
- No custom UI libraries added
- Darkone 1:1 confirmed (no structural deviation)
- Out-of-scope items untouched
- Build currently has pre-existing apexcharts type error only

## Scope

- Move files only (no content changes to components)
- Update import paths to match new locations
- Add `/admin` prefix to all admin routes
- Add `.admin-scope` wrapper to AdminLayout
- Create empty placeholder folders for `src/apps/public/`
- Create `src/shared/` with truly shared utilities
- NO styling changes, NO new components, NO design decisions

## File Movement Map

### To `src/apps/admin/` (Darkone admin content)


| Current Location                            | New Location                                           |
| ------------------------------------------- | ------------------------------------------------------ |
| `src/app/(admin)/`                          | `src/apps/admin/app/`                                  |
| `src/app/(other)/`                          | `src/apps/admin/app/(other)/`                          |
| `src/components/layout/`                    | `src/apps/admin/components/layout/`                    |
| `src/components/wrapper/`                   | `src/apps/admin/components/wrapper/`                   |
| `src/components/VectorMap/`                 | `src/apps/admin/components/VectorMap/`                 |
| `src/components/from/`                      | `src/apps/admin/components/from/`                      |
| `src/components/AnimationStar.tsx`          | `src/apps/admin/components/AnimationStar.tsx`          |
| `src/components/ComingSoon.tsx`             | `src/apps/admin/components/ComingSoon.tsx`             |
| `src/components/ComponentContainerCard.tsx` | `src/apps/admin/components/ComponentContainerCard.tsx` |
| `src/components/CustomFlatpickr.tsx`        | `src/apps/admin/components/CustomFlatpickr.tsx`        |
| `src/components/ErrorBoundary.tsx`          | `src/apps/admin/components/ErrorBoundary.tsx`          |
| `src/components/FallbackLoading.tsx`        | `src/apps/admin/components/FallbackLoading.tsx`        |
| `src/components/LoadingFallback.tsx`        | `src/apps/admin/components/LoadingFallback.tsx`        |
| `src/components/NavLink.tsx`                | `src/apps/admin/components/NavLink.tsx`                |
| `src/components/PageTitle.tsx`              | `src/apps/admin/components/PageTitle.tsx`              |
| `src/components/Preloader.tsx`              | `src/apps/admin/components/Preloader.tsx`              |
| `src/components/Spinner.tsx`                | `src/apps/admin/components/Spinner.tsx`                |
| `src/components/ThemeCustomizer.tsx`        | `src/apps/admin/components/ThemeCustomizer.tsx`        |
| `src/context/`                              | `src/apps/admin/context/`                              |
| `src/helpers/`                              | `src/apps/admin/helpers/`                              |
| `src/layouts/`                              | `src/apps/admin/layouts/`                              |
| `src/routes/`                               | `src/apps/admin/routes/`                               |
| `src/assets/scss/`                          | `src/apps/admin/assets/scss/`                          |
| `src/assets/images/`                        | `src/apps/admin/assets/images/`                        |
| `src/assets/data/`                          | `src/apps/admin/assets/data/`                          |


### To `src/shared/` (truly shared, no theme styling)


| Current Location               | New Location                          |
| ------------------------------ | ------------------------------------- |
| `src/components/ui/`           | `src/shared/components/ui/`           |
| `src/lib/utils.ts`             | `src/shared/lib/utils.ts`             |
| `src/types/`                   | `src/shared/types/`                   |
| `src/utils/`                   | `src/shared/utils/`                   |
| `src/hooks/use-mobile.tsx`     | `src/shared/hooks/use-mobile.tsx`     |
| `src/hooks/use-toast.ts`       | `src/shared/hooks/use-toast.ts`       |
| `src/hooks/useLocalStorage.ts` | `src/shared/hooks/useLocalStorage.ts` |
| `src/hooks/useToggle.ts`       | `src/shared/hooks/useToggle.ts`       |
| `src/hooks/useViewPort.ts`     | `src/shared/hooks/useViewPort.ts`     |


### Admin-specific hooks (to `src/apps/admin/hooks/`)


| Current Location               | New Location                              |
| ------------------------------ | ----------------------------------------- |
| `src/hooks/useFileUploader.ts` | `src/apps/admin/hooks/useFileUploader.ts` |
| `src/hooks/useModal.ts`        | `src/apps/admin/hooks/useModal.ts`        |
| `src/hooks/useQueryParams.ts`  | `src/apps/admin/hooks/useQueryParams.ts`  |


### Stays at root `src/`


| File                           | Reason                                             |
| ------------------------------ | -------------------------------------------------- |
| `src/main.tsx`                 | Single Vite entry point                            |
| `src/App.tsx`                  | Top-level router mount                             |
| `src/vite-env.d.ts`            | Vite type declarations                             |
| `src/index.css`                | Will become minimal global reset only              |
| `src/App.css`                  | Will be evaluated - may be removed if empty/unused |
| `src/tailwind.config.lov.json` | Lovable config                                     |


### Removed


| File                     | Reason                                    |
| ------------------------ | ----------------------------------------- |
| `src/pages/Index.tsx`    | Lovable placeholder, not Darkone template |
| `src/pages/NotFound.tsx` | Replaced by admin 404 at new path         |


### Public placeholder (empty structure for Phase 10)

```text
src/apps/public/
  components/
  layouts/
  pages/
  sections/
    home-one/
    common/
  assets/
    css/
  data/
```

Each folder gets a `.gitkeep` file to preserve the structure.

## Import Path Updates

The `@/` alias remains pointing to `src/`. All 86+ files with `@/` imports will be updated:

- `@/components/` becomes `@/apps/admin/components/`
- `@/context/` becomes `@/apps/admin/context/`
- `@/helpers/` becomes `@/apps/admin/helpers/`
- `@/hooks/useFileUploader` becomes `@/apps/admin/hooks/useFileUploader`
- `@/hooks/useModal` becomes `@/apps/admin/hooks/useModal`
- `@/hooks/useQueryParams` becomes `@/apps/admin/hooks/useQueryParams`
- `@/hooks/useLocalStorage` becomes `@/shared/hooks/useLocalStorage`
- `@/hooks/useViewPort` becomes `@/shared/hooks/useViewPort`
- `@/hooks/useToggle` becomes `@/shared/hooks/useToggle`
- `@/hooks/use-mobile` becomes `@/shared/hooks/use-mobile`
- `@/hooks/use-toast` becomes `@/shared/hooks/use-toast`
- `@/layouts/` becomes `@/apps/admin/layouts/`
- `@/routes/` becomes `@/apps/admin/routes/`
- `@/assets/` becomes `@/apps/admin/assets/`
- `@/types/` becomes `@/shared/types/`
- `@/utils/` becomes `@/shared/utils/`
- `@/lib/` becomes `@/shared/lib/`
- `@/app/(admin)/` becomes `@/apps/admin/app/`
- `@/app/(other)/` becomes `@/apps/admin/app/(other)/`

## Route Prefix Changes

All admin routes in `src/apps/admin/routes/index.tsx` get `/admin` prefix:


| Current Route                 | New Route                                |
| ----------------------------- | ---------------------------------------- |
| `/` (redirect to /dashboards) | `/admin` (redirect to /admin/dashboards) |
| `/dashboards`                 | `/admin/dashboards`                      |
| `/base-ui/*`                  | `/admin/base-ui/*`                       |
| `/forms/*`                    | `/admin/forms/*`                         |
| `/tables/*`                   | `/admin/tables/*`                        |
| `/icons/*`                    | `/admin/icons/*`                         |
| `/maps/*`                     | `/admin/maps/*`                          |
| `/apex-chart`                 | `/admin/apex-chart`                      |
| `/pages-404-alt`              | `/admin/pages-404-alt`                   |
| `/dark-sidenav`               | `/admin/dark-sidenav`                    |
| `/dark-topnav`                | `/admin/dark-topnav`                     |
| `/small-sidenav`              | `/admin/small-sidenav`                   |
| `/hidden-sidenav`             | `/admin/hidden-sidenav`                  |
| `/dark-mode`                  | `/admin/dark-mode`                       |


Auth routes remain unprefixed: `/auth/sign-in`, `/auth/sign-up`, etc.

## Admin Layout Scoping

`AdminLayout.tsx` wrapper `<div>` gets `.admin-scope` class:

```tsx
// Before
<div className="wrapper">

// After
<div className="admin-scope wrapper">
```

## SCSS Import Update

`src/main.tsx` import path changes:

```tsx
// Before
import './assets/scss/style.scss'

// After
import './apps/admin/assets/scss/style.scss'
```

Note: This SCSS currently loads globally. Full scoping under `.admin-scope` is a separate styling isolation task that will be addressed after structural move is verified. For Phase 0, the import path is corrected but the SCSS content is NOT modified (1:1 parity rule).

## Updated `src/App.tsx`

The top-level App component will mount the admin router. A placeholder route for `/` (public) will render a simple "Coming Soon" static page until Phase 10 import.

## Updated `src/routes/router.tsx` (now at `src/apps/admin/routes/router.tsx`)

Admin routes wrapped under `/admin/*` path segment.

## Execution Steps (in order)

1. Create Restore Point documentation: `RP-Phase0-Step1-RepoStabilization`
2. Create `src/apps/admin/` folder structure
3. Create `src/apps/public/` placeholder folders with `.gitkeep`
4. Create `src/shared/` folder structure
5. Move all admin files to `src/apps/admin/`
6. Move shared files to `src/shared/`
7. Update all import paths across 86+ files
8. Add `/admin` prefix to all admin routes
9. Add `.admin-scope` class to AdminLayout wrapper
10. Update `src/main.tsx` SCSS import path
11. Update `src/App.tsx` to mount admin router at `/admin/*`
12. Remove `src/pages/Index.tsx` and `src/pages/NotFound.tsx` (Lovable placeholders)
13. Verify build compiles
14. Verify routing works (`/admin/dashboards`, `/auth/sign-in`)
15. Confirm no console errors beyond pre-existing apexcharts issue

## Risk Notes

- **86+ files** need import path updates — high risk of missed imports causing build failure
- SCSS global loading remains temporarily until styling isolation phase
- Menu sidebar links in `src/assets/data/menu-items.ts` likely contain route paths that need `/admin` prefix
- Internal `<Link>` components and `useNavigate()` calls may reference old paths

## Out of Scope

- SCSS content modification (1:1 parity)
- Gorent template import (Phase 10)
- Database, RLS, Supabase (locked until parity gate)
- Shop, storefront, customer login

## Note this:  
NOTE — Phase 0 (Repo Stabilization) Plan Review + Required Adjustments

Status:

- Phase 0 plan is broadly aligned with our target architecture:

  - Single Vite app

  - Public site at "/" (placeholder for now)

  - Admin under "/admin" as route segment

  - Documentation-first + Restore Point + strict governance

  - No database / Supabase / RLS implementation until AFTER Public 1:1 import (Phase 10)

Required Notes / Corrections to apply to the Phase 0 execution plan BEFORE implementation:

1) Do NOT start “Admin feature work”

   - Phase 0 is FILE MOVES + IMPORT PATH UPDATES + ROUTE PREFIXING only.

   - No UI redesign, no new components, no module changes, no schema work, no Supabase, no CRUD implementation.

2) Route Prefix Coverage MUST include ALL hardcoded paths

   - In addition to routes/index.tsx, you MUST scan and update:

     - src/assets/data/menu-items.ts (and any similar menu config)

     - any <Link to="...">, navigate("..."), redirects, sidebar links, breadcrumb links

   - Goal: zero remaining admin paths that still point to old "/" routes.

3) Admin Auth path MUST be decided to avoid future collision with public

   - Current plan keeps auth routes unprefixed: /auth/sign-in, /auth/sign-up, etc.

   - Governance recommendation (safer): move admin auth under /admin/auth/*

     - Reason: public lives at "/" and will expand; /auth/* can collide later.

   - If we keep /auth/* unprefixed, document this as an explicit locked decision + rationale.

4) CSS/SCSS Isolation Gate (critical for “no leakage” requirement)

   - Phase 0 may update SCSS import paths, BUT:

     - Do NOT import any Gorent/public CSS globally until isolation is enforced.

     - Treat global SCSS import in main.tsx as TEMPORARY and flagged as “Isolation Debt”.

   - When Phase 10 begins, public CSS must be loaded in a way that prevents cross-app leakage.

   - Document the isolation plan explicitly (single build + strict separation).

5) Public placeholder must remain minimal and non-invasive

   - Only a simple placeholder page at "/" until Phase 10 import.

   - No attempt to “mock” public design in Phase 0.

6) Restore Point is mandatory

   - Create the Restore Point BEFORE any file moves.

   - If build breaks beyond the pre-existing apexcharts type issue, STOP immediately and report.

7) No deletions beyond explicitly listed placeholders

   - Only remove the Lovable placeholders listed (Index.tsx, NotFound.tsx) if confirmed unused.

   - No other cleanup, refactors, or “while I’m here” improvements.

Execution Order Lock:

- Phase 0 Repo Stabilization (this plan) must complete and be verified stable.

- NEXT: Phase 10 Frontend Parity Import (Gorent 1:1 into public app structure).

- Database implementation (Phase 8 execution / SQL) remains LOCKED until after Phase 10 is completed and verified.

NOTE — Darkone Demo Route Cleanup (Phase 0 Scope Control)

Context:

The current Darkone template contains multiple demo routes (e.g. /base-ui/*, component showcases, charts, widgets, sample pages).

Governance Decision:

All demo-only routes must be removed from the production route configuration during Phase 0.

Scope Clarification:

- Only routes required for:

  - Admin Dashboard

  - Future project modules (Vehicles, Frontend Modules, CRM, Blog, Site Settings)

  - Authentication (sign-in, sign-up, reset password)

- All demo showcase routes are OUT OF SCOPE.

Explicit Instruction:

- Remove all demo component routes from:

  - routes/index.tsx

  - any route configuration files

  - sidebar/menu configuration (e.g. menu-items.ts)

- These routes must NOT be migrated, preserved, or refactored.

- They must NOT be included in parity checks.

- They must NOT be reintroduced later.

Reference:

DARKONE_ASSET_[MAP.md](http://MAP.md) is the only allowed source for valid admin module structure.

Important:

There are approximately 30–40 demo routes that must be excluded.

Lovable must not assume they are needed.

Lovable must not “keep them for safety”.

Reporting Requirement:

After cleanup, Lovable must report:

- Total routes removed

- Remaining active admin routes

- Confirmation that no demo routes remain accessible

Hard Rule:

Demo routes are not part of the project architecture and must not survive Phase 0.

STOP after cleanup and await further instruction.  
  
Known Issues

- apexcharts type error: pre-existing, unrelated, not addressed