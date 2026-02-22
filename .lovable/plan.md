# Phase 0: Repo Analysis + Structure Plan

## 1. Current State


| Path                                   | Contents                                                                   | Role                                          |
| -------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| `src/`                                 | Darkone admin template (React + Bootstrap SCSS + react-router-dom v6)      | Active root app; auth-gated admin dashboard   |
| `gorent-car-rental-react-js-template/` | Gorent React template (React 19 + CSS files + react-router v7 data router) | Reference template; not wired into root build |
| `archive/Darkone-React_v1.0/`          | Original Darkone snapshot                                                  | Frozen; do not touch                          |
| `docs-standard/`                       | Devmart process docs                                                       | Frozen; do not touch                          |
| Uploaded `index.html`                  | Gorent HTML version documentation/demo page                                | Reference only                                |


### Key Technical Facts

- **Single Vite entry point** at repo root (`vite.config.ts` + `src/main.tsx`). Only Darkone builds and runs today.
- **Darkone styling**: Bootstrap SCSS compiled via `src/assets/scss/style.scss`, plus Tailwind CSS (`tailwind.config.lov.json`, `src/index.css`).
- **Gorent React styling**: Pre-compiled CSS files (`gorent-car-rental-react-js-template/src/assets/css/style.css`), loaded directly in its `main.tsx`.
- **Router mismatch**: Darkone uses `BrowserRouter` + `<Routes>` (react-router-dom v6). Gorent React uses `createBrowserRouter` + `RouterProvider` (react-router v7). These are incompatible patterns within a single app entry.
- **React version mismatch**: Root uses React 18. Gorent template declares React 19. Only root `package.json` matters for the build.
- **Gorent React deps not installed**: `framer-motion`, `swiper`, `react-fast-marquee`, `react-countup`, `react-intersection-observer` are in Gorent's `package.json` but not in the root `package.json`.

---

## 2. Proposed Repo Layout

Lovable runs a single Vite app from the repo root. True multi-app separation (separate Vite configs, separate builds) is not supported. The only viable approach is **one app, two route trees**, with strict style isolation.

```text
/
  src/
    main.tsx              # Single entry; mounts unified router
    App.tsx               # Top-level component
    routes/
      router.tsx          # Unified router: frontend + admin
    frontend/             # Car Center / Car Rental pages (from Gorent)
      assets/
        css/              # Gorent CSS files (self-contained)
        images/
        fonts/
      components/
      pages/
      sections/
      layouts/
        FrontendLayout.tsx  # Wraps frontend routes; loads frontend CSS
    admin/                # Darkone admin (existing src/ content relocated)
      assets/
        scss/             # Darkone SCSS (self-contained)
        images/
      app/
      components/
      context/
      helpers/
      hooks/
      layouts/
        AdminLayout.tsx   # Existing; loads admin SCSS
      pages/
      routes/
  archive/                # Untouched
  docs-standard/          # Untouched
  docs/
    backend.md            # Updated
    architecture.md       # Updated
  gorent-car-rental-react-js-template/  # Remains as reference; not built
  public/
```

### Style Isolation Strategy

- **Admin (Darkone)**: SCSS compiled via `src/admin/assets/scss/style.scss`. All selectors scoped under a `.darkone-admin` wrapper class on `AdminLayout`.
- **Frontend (Gorent)**: Pre-compiled CSS loaded only within `FrontendLayout`. All selectors scoped under a `.gorent-frontend` wrapper class.
- **No shared tokens, no merged stylesheets.** Tailwind (if retained) applies only to utility usage outside both scopes or is removed entirely to avoid conflicts.
- Bootstrap is the primary conflict vector (both apps use it). Scoping via wrapper classes prevents cross-contamination.

### Routing Approach

- Flatten to a single `react-router-dom` v6 `BrowserRouter` (already in use).
- Frontend routes: `/` (home), `/about`, `/cars`, `/contact`, etc. wrapped in `FrontendLayout`.
- Admin routes: `/admin/*` wrapped in `AdminLayout` with auth guard (existing pattern).
- Gorent's `createBrowserRouter` pattern is abandoned; its page components are imported directly into the v6 route table.

---

## 3. Feasibility Assessment

### Option A: Gorent React Template as Frontend Source-of-Truth


| Factor                 | Assessment                                                                                                                                                                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compatibility**      | Medium risk. Router pattern mismatch (v7 data router vs v6) requires rewriting route definitions. React 19 features (if used) may fail on React 18. Missing deps (`framer-motion`, `swiper`, etc.) must be added.                                   |
| **Parity reliability** | High parity potential. Components are already React/TSX. Animations, context, and interactivity are preserved as-is.                                                                                                                                |
| **Repo layout**        | As proposed above. Move Gorent `src/` contents into `src/frontend/`, rewrite imports, flatten router.                                                                                                                                               |
| **Build commands**     | Single `vite build`. No changes needed.                                                                                                                                                                                                             |
| **Risks**              | (1) `swiper` and `framer-motion` bundles increase size. (2) Gorent uses `react-router` v7 APIs (`Outlet` from `react-router` not `react-router-dom`) -- minor import changes needed. (3) CSS class collisions with admin Bootstrap require scoping. |


### Option B: Gorent HTML Version as Frontend Source-of-Truth


| Factor                 | Assessment                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Compatibility**      | High risk. jQuery, lightGallery, and vanilla JS plugins must be fully replaced with React equivalents. Every page must be manually converted to JSX. No component structure exists.                                                                                                                                 |
| **Parity reliability** | Low-medium. Manual HTML-to-JSX conversion introduces drift. Animations, carousels, and interactive elements require re-implementation. Lovable's iterative prompting makes pixel-perfect parity unreliable across dozens of pages.                                                                                  |
| **Repo layout**        | Same folder structure, but `src/frontend/` would contain newly written components instead of ported ones.                                                                                                                                                                                                           |
| **Build commands**     | Same.                                                                                                                                                                                                                                                                                                               |
| **Risks**              | (1) Massive manual effort -- 30+ pages to convert. (2) jQuery-dependent plugins (lightGallery, jstree, nice-select) have no direct React equivalents with identical behavior. (3) CSS references `vendor/` assets that need restructuring. (4) High probability of layout drift during iterative Lovable prompting. |


---

## 4. Recommendation

**Option A (Gorent React template)** is the safer choice.

- Components already exist as React/TSX
- Style files are self-contained CSS (no build-time SCSS dependency conflicts)
- Router rewrite is mechanical, not creative
- Missing deps are standard npm packages with no Lovable compatibility issues
- Parity risk is low because the source is already React

---

## 5. Risks and Constraints


| Risk                                           | Mitigation                                                                                      |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Bootstrap collision (both apps load Bootstrap) | Scope admin under `.darkone-admin`, frontend under `.gorent-frontend`                           |
| Tailwind conflicts with Bootstrap              | Limit Tailwind to non-overlapping utility classes or remove from frontend scope                 |
| Single Vite entry = both apps always bundled   | Lazy-load admin and frontend route trees to minimize initial bundle                             |
| Asset path breakage during move                | Batch-update all relative imports after restructure                                             |
| react-router v6 vs v7 API differences          | Minor; `Outlet` import path changes, `createBrowserRouter` replaced with `<Route>` declarations |


---

## 6. Docs Updates (Planned for Implementation Phase)

- `/docs/architecture.md`: Document the dual-app-in-one-repo structure, routing split, and style isolation strategy.
- `/docs/backend.md`: Note that admin backend (fake-backend, auth context) remains under `src/admin/`; frontend has no backend dependency yet.

---

NOTE — Documentation-First Directive (Saya Project)

Scope Update:

We are NOT proceeding to implementation or file restructuring at this stage.

We are entering a Documentation & Planning Phase only.

Instruction:

1) Create a new top-level folder in the repository:

   /Saya Project Docs

2) From this point forward:

   - ALL project-specific documentation must be stored inside /Saya Project Docs

   - No project documentation may be placed in /docs-standard

   - /docs-standard remains frozen (Devmart global standard)

   - archive/ remains untouched

3) Move Phase 0 analysis into documentation:

   - Create a structured document inside:

     /Saya Project Docs/[Phase-0-Repo-Structure-Plan.md](http://Phase-0-Repo-Structure-Plan.md)

   - Document:

     • Current repo state

     • Proposed dual-structure (frontend + /admin)

     • Style isolation strategy

     • Router unification approach

     • Option A vs Option B comparison

     • Risk matrix

     • Final recommendation (React template)

4) Do NOT:

   - Move any source files

   - Modify src/

   - Install dependencies

   - Change routing

   - Rename folders

   - Touch build config

5) After documentation is created:

   - Provide a short confirmation summary

   - Stop execution

   - Await further instructions

This project is now in Planning Mode.

No structural changes are authorized yet.

Housekeeping:

- Update /docs/[backend.md](http://backend.md) and /docs/[architecture.md](http://architecture.md) with references to the new /Saya Project Docs folder and planning phase status.

Await Further Instructions.  
  
7. Next Step

Awaiting instruction to proceed with Phase 1: file restructuring per the layout above.