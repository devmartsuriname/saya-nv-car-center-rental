# Phase 11 — Repo Structure Lock

**Version**: 1.0
**Status**: Documentation Only — Final Boundaries
**Date**: 2026-02-22

---

## 0. Purpose

Define the final folder boundaries, routing rules, and styling isolation strategy for the Saya Car Center & Rental single Vite application. This document is the authoritative reference for all future code placement decisions.

---

## 1. Folder Structure

```text
src/
  main.tsx                    # Single Vite entry point
  App.tsx                     # Top-level router mount
  apps/
    public/                   # Public site (route: /)
      components/             # Shared public components (Header, Footer, StrickyHeader)
      layouts/                # PublicLayout.tsx (.public-scope wrapper)
      pages/                  # Page components (HomePage, AboutPage, etc.)
      sections/               # Section components
        home-one/             # Home 1 specific (BannerOne, ServiceOne, etc.)
        common/               # Shared sections (Gallery, etc.)
      assets/
        css/                  # Gorent CSS scoped under .public-scope
      data/                   # Static data files
    admin/                    # Darkone admin (route: /admin/*)
      app/                    # Admin app shell
      components/             # Admin UI components (Darkone 1:1)
      context/                # Auth context, theme context
      helpers/                # Admin helper utilities
      hooks/                  # Admin-specific hooks
      layouts/                # AdminLayout.tsx (.admin-scope wrapper)
      pages/                  # Admin page components
      routes/                 # Admin route definitions
      assets/
        scss/                 # Darkone SCSS scoped under .admin-scope
        images/               # Admin-specific images
  shared/                     # Truly shared utilities ONLY
    utils/                    # Shared utility functions (e.g., supabase.ts)
    types/                    # Shared TypeScript types
    hooks/                    # Shared hooks (if any)
```

### Placement Rules

| Content Type | Location | Notes |
|---|---|---|
| Public React components | `src/apps/public/` | Never outside this folder |
| Admin React components | `src/apps/admin/` | Never outside this folder |
| Public CSS | `src/apps/public/assets/css/` | Scoped under `.public-scope` |
| Admin SCSS | `src/apps/admin/assets/scss/` | Scoped under `.admin-scope` |
| Static images/assets | `/public/` | No React code in `/public/` |
| Shared utilities | `src/shared/` | No theme styling, no UI components |
| Supabase client | `src/shared/utils/supabase.ts` | Shared between public and admin |

### Forbidden

- ❌ No public components in `src/apps/admin/`
- ❌ No admin components in `src/apps/public/`
- ❌ No theme SCSS/CSS in `src/shared/`
- ❌ No React code in `/public/`
- ❌ No cross-imports of styling between public and admin

---

## 2. Routing Boundary

### Public Router

- **Base path**: `/`
- **Routes**: `/`, `/about`, `/cars`, `/contact`, `/blog`, `/blog/:slug`, `/rentals/:slug`, `/for-sale/:slug`
- **Layout**: `PublicLayout.tsx` — wraps all public pages with `.public-scope` class
- **Auth**: None (public pages are unauthenticated)

### Admin Router

- **Base path**: `/admin/*`
- **Routes**: `/admin/dashboard`, `/admin/vehicles/*`, `/admin/blog/*`, `/admin/crm/*`, `/admin/frontend/*`, `/admin/settings`
- **Layout**: `AdminLayout.tsx` — wraps all admin pages with `.admin-scope` class
- **Auth**: Auth-gated (requires authenticated user with valid role)

### Unified Router

- Single `react-router-dom` v6 `BrowserRouter`
- Public routes and admin routes coexist in one router
- No `createBrowserRouter` (Gorent v7 pattern abandoned)

---

## 3. Styling Isolation Strategy

### Admin Styles

- **Scope class**: `.admin-scope`
- **Implementation**: `AdminLayout.tsx` renders a root `<div className="admin-scope">` wrapping all admin content
- **Source**: `src/apps/admin/assets/scss/style.scss`
- **Content**: All Darkone Bootstrap overrides, component styles, plugin styles
- **Import**: Only imported within admin layout/entry — never globally

### Public Styles

- **Scope class**: `.public-scope`
- **Implementation**: `PublicLayout.tsx` renders a root `<div className="public-scope">` wrapping all public content
- **Source**: `src/apps/public/assets/css/` (Gorent CSS files)
- **Content**: All Gorent template styles
- **Import**: Only imported within public layout/entry — never globally

### Global CSS (Allowed — Minimal)

The following are permitted at the global level (loaded in `index.html` or `main.tsx`):

| What | Why |
|---|---|
| CSS reset / normalize | Consistent baseline across both apps |
| Font loading (`@import` or `<link>`) | Shared font availability |
| Tailwind base utilities | If used sparingly and non-conflicting |

### Global CSS (Forbidden)

- ❌ No Bootstrap classes at global level
- ❌ No Gorent theme CSS at global level
- ❌ No Darkone SCSS at global level
- ❌ No component-specific styles at global level

### Verification Rules

- Admin styles must not affect any element outside `.admin-scope`
- Public styles must not affect any element outside `.public-scope`
- No CSS class name collisions between admin and public
- Build output must be inspectable for leakage

---

## 4. Re-Asserted Constraints

1. **Single Vite app** — one `vite.config.ts`, one build output, one `index.html`
2. **Route-based separation** — public at `/`, admin at `/admin/*`
3. **External Supabase** — NOT Lovable Cloud DB (future integration)
4. **Deployment target** — Hostinger VPS + sayanv.com (future, not implemented now)
5. **Darkone 1:1 governance** — all admin UI must reuse Darkone components per `DARKONE_ASSET_MAP.md`
6. **No shop/storefront** — out of scope
7. **No customer login** — out of scope

---

## 5. Execution Order Override — CRITICAL

Before any database implementation begins, the following sequence is locked:

### 1) Phase 0 — Repo Stabilization

- Finalize folder structure as defined in this document
- Enforce route-based architecture: Public at `/`, Admin at `/admin/*`
- Verify strict styling isolation (`.public-scope` vs `.admin-scope`)
- Confirm single Vite build integrity (no CSS leakage, no routing conflicts)

### 2) Phase 10 — Frontend 1:1 Parity Import (PUBLIC ONLY)

- Import Gorent Home 1 template into `/src/apps/public/`
- Achieve full visual 1:1 parity
- All sections static (no Supabase queries)
- No database integration
- No RLS
- No storage buckets
- No migrations

### 3) Parity Verification Gate

- Pixel-level visual comparison completed
- Routing verified
- CSS isolation verified
- Build passes without errors

**Only AFTER this gate is formally approved:**

### 4) Phase 8 Execution — Database Implementation Waves 1–5

- Then follow Tasks.md strictly in order

### Hard Rule

> **No SQL. No migrations. No RLS. No Supabase integration. No storage buckets.**
> Until frontend parity is complete and explicitly approved.

---

## 6. Known Issues

| Issue | Status | Impact |
|---|---|---|
| apexcharts type error | Pre-existing | Unrelated to this work; does not affect build |

---

**STOP — Await further instructions.**

---

## 7. Admin Lock (Phase 0 Closure)

**Date**: 2026-02-23
**Status**: LOCKED

Phase 0 Repo Stabilization is complete. The following are frozen:

- Admin structure frozen under `src/apps/admin/*`
- Shared utilities frozen under `src/shared/*`
- Router prefix `/admin` is frozen
- All 39 demo routes are permanently removed and must not be reintroduced
- `.admin-scope` wrapper class applied to AdminLayout
- No further admin structural changes until explicitly authorized
- Only `/admin/*` routes are allowed for Admin
- Auth routes must remain under `/admin/auth/*`
- No demo routes (including base-ui, showcase, example, or gallery routes) may be reintroduced under any circumstance
- `routes/index.tsx` must contain only production Admin routes
- Admin styling remains scoped to Admin only
- Public frontend must not inherit Admin SCSS
- No global admin overrides exist outside admin scope
- Single build architecture does not allow style leakage between public and admin layers

Any modification to the above requires explicit approval from Delroy.
