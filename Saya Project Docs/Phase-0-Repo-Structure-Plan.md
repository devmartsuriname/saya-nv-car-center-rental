# Phase 0: Repo Analysis + Structure Plan

## 1. Current Repo State

| Path | Contents | Role |
|---|---|---|
| `src/` | Darkone admin template (React + Bootstrap SCSS + react-router-dom v6) | Active root app; auth-gated admin dashboard |
| `gorent-car-rental-react-js-template/` | Gorent React template (React 19 + CSS files + react-router v7 data router) | Reference template; not wired into root build |
| `archive/Darkone-React_v1.0/` | Original Darkone snapshot | Frozen; do not touch |
| `docs-standard/` | Devmart process docs | Frozen; do not touch |

### Key Technical Facts

- **Single Vite entry point** at repo root (`vite.config.ts` + `src/main.tsx`). Only Darkone builds today.
- **Darkone styling**: Bootstrap SCSS via `src/assets/scss/style.scss`, plus Tailwind CSS.
- **Gorent React styling**: Pre-compiled CSS files, loaded directly in its `main.tsx`.
- **Router mismatch**: Darkone uses `BrowserRouter` + `<Routes>` (react-router-dom v6). Gorent uses `createBrowserRouter` + `RouterProvider` (react-router v7).
- **React version mismatch**: Root uses React 18. Gorent declares React 19. Only root `package.json` matters.
- **Gorent deps not installed**: `framer-motion`, `swiper`, `react-fast-marquee`, `react-countup`, `react-intersection-observer`.

---

## 2. Proposed Dual Structure (Frontend + /admin)

```text
src/
  main.tsx              # Single entry; mounts unified router
  App.tsx               # Top-level component
  routes/
    router.tsx          # Unified router: frontend + admin
  frontend/             # Car Center / Car Rental (from Gorent)
    assets/
      css/              # Gorent CSS (self-contained)
      images/
      fonts/
    components/
    pages/
    sections/
    layouts/
      FrontendLayout.tsx
  admin/                # Darkone admin (relocated from src/)
    assets/
      scss/             # Darkone SCSS (self-contained)
      images/
    app/
    components/
    context/
    helpers/
    hooks/
    layouts/
      AdminLayout.tsx
    pages/
    routes/
```

---

## 3. Style Isolation Strategy

- **Admin**: SCSS compiled via `src/admin/assets/scss/style.scss`. All selectors scoped under `.darkone-admin` wrapper class.
- **Frontend**: Pre-compiled CSS loaded within `FrontendLayout`. All selectors scoped under `.gorent-frontend` wrapper class.
- **No shared tokens, no merged stylesheets.**
- Bootstrap collision mitigated via wrapper class scoping.
- Tailwind limited to non-overlapping utility usage or removed from frontend scope.

---

## 4. Router Unification Approach

- Single `react-router-dom` v6 `BrowserRouter` (already in use).
- Frontend routes: `/`, `/about`, `/cars`, `/contact`, etc. → `FrontendLayout`.
- Admin routes: `/admin/*` → `AdminLayout` with auth guard.
- Gorent's `createBrowserRouter` pattern abandoned; page components imported into v6 route table.

---

## 5. Option A vs Option B

### Option A: Gorent React Template as Source-of-Truth

| Factor | Assessment |
|---|---|
| Compatibility | Medium risk. Router rewrite needed. Missing deps must be added. |
| Parity reliability | High. Components already React/TSX. |
| Risks | Bundle size increase; minor import path changes; CSS collision requires scoping. |

### Option B: Gorent HTML Version as Source-of-Truth

| Factor | Assessment |
|---|---|
| Compatibility | High risk. jQuery/vanilla JS plugins must be replaced. Manual HTML→JSX conversion. |
| Parity reliability | Low-medium. High drift probability during iterative conversion. |
| Risks | 30+ pages to convert; no direct React equivalents for some plugins; layout drift. |

---

## 6. Risk Matrix

| Risk | Severity | Mitigation |
|---|---|---|
| Bootstrap collision | High | Scope under wrapper classes |
| Tailwind conflicts | Medium | Limit or remove from frontend scope |
| Both apps always bundled | Medium | Lazy-load route trees |
| Asset path breakage | Medium | Batch-update imports after restructure |
| react-router v6 vs v7 | Low | Minor import path changes |

---

## 7. Recommendation

**Option A (Gorent React template)** — safer choice.

- Components already React/TSX
- Self-contained CSS (no SCSS conflicts)
- Router rewrite is mechanical
- Missing deps are standard npm packages
- Low parity risk

---

## 8. Status

**Planning Mode** — No structural changes authorized. Awaiting Phase 1 instruction.
