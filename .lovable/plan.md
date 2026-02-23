# Phase 10 — Parity Correction Plan (Font Leak + Header + Gallery)

## Root Cause Analysis

### Issue 1: Font Leak — CONFIRMED, NOT YET FIXED

The admin SCSS import was moved from `main.tsx` to `AdminLayout.tsx` in the previous step. However, this does NOT fix the problem because **Vite loads CSS eagerly for all statically imported modules**.

The import chain on every page load:

```
App.tsx 
  -> imports AppProvidersWrapper (static)
  -> imports AppRouter (static)
    -> imports AdminLayout (static)
      -> imports admin SCSS (line 1)
        -> compiles Bootstrap with "Play" font
        -> sets :root { --bs-body-font-family: "Play" }
```

Even when visiting `/`, the admin SCSS is loaded because `App.tsx` statically imports `AppRouter` which statically imports `AdminLayout`. Vite processes all static imports at build time and injects the CSS globally.

**The fix**: Lazy-load the entire admin branch in `App.tsx` using `React.lazy()` so the admin module tree (and its CSS) only loads when a user navigates to `/admin/*`.

### Issue 2: Header Top Bar Alignment

The header structure in our `Header.tsx` matches the template source code. The visual misalignment is caused by the "Play" font leak overriding Gorent's "Roboto" / "Inter Tight" fonts, which changes text sizing, spacing, and line-height throughout the header. Fixing Issue 1 will resolve this.

### Issue 3: Gallery Section Order

The current `HomeOne.tsx` section order is:
Header, BannerOne, SlidingTextOne, ServiceOne, AboutOne, ListingOne, QuickRequest, WhychooseOne, TestimonialOne, VideoOne, **GalleryHomeOne**, **BrandOne**, LetsTalk, Footer, StrickyHeader

This matches the Gorent template source code exactly. Gallery IS above footer (Gallery -> Brand -> LetsTalk -> Footer). No reordering needed.

---

## Execution Steps

### Step A: Lazy-Load Admin Branch in App.tsx (Font Leak Fix)

**File: `src/App.tsx**`

Replace static imports of `AppProvidersWrapper` and `AppRouter` with a single lazy-loaded admin wrapper component. This ensures the admin module tree (including `AdminLayout` and its SCSS) is only fetched when the browser navigates to `/admin/*`.

Changes:

- Remove static imports: `AppProvidersWrapper`, `AppRouter`, `configureFakeBackend`
- Add lazy import: `const AdminApp = React.lazy(() => import('./apps/admin/AdminApp'))`
- Wrap admin branch in `<Suspense>` with fallback

**New file: `src/apps/admin/AdminApp.tsx**`

Create a small wrapper component that:

- Calls `configureFakeBackend()`
- Wraps `AppRouter` in `AppProvidersWrapper`
- This isolates all admin imports (including SCSS) behind a dynamic import boundary

### Step B: Verify No Other Global Admin CSS

Confirm that after Step A, no admin CSS is imported anywhere outside the lazy-loaded admin tree. The search already confirms only `AdminLayout.tsx` imports admin SCSS.

### Step C: Build and Visual Verification

- Confirm build compiles (only pre-existing apexcharts type error)
- Navigate to `/` and confirm Roboto/Inter Tight fonts render (not Play)
- Navigate to `/admin/auth/sign-in` and confirm Play font renders
- Confirm header top bar alignment matches template demo (image-7)
- Confirm section order: Video -> Gallery -> Brand -> LetsTalk -> Footer

---

## Technical Details

### Why Lazy Loading Fixes the Font Leak

Vite code-splits dynamic imports into separate chunks. When `/` loads, only the public chunk (with Gorent CSS) is loaded. The admin chunk (with Darkone SCSS including "Play" font) remains unloaded until a user navigates to `/admin/*`. This achieves true CSS isolation without modifying either template's styles.

### Files Modified (Total: 2)

1. `src/App.tsx` — Replace static admin imports with lazy-loaded `AdminApp`
2. `src/apps/admin/AdminApp.tsx` — New file: admin entry wrapper (moves `configureFakeBackend` + providers here)

Governance Addendum — Required Before Approval

1. Admin Lazy Loading MUST wrap the entire /admin/* branch only.

   Public branch must remain fully static and untouched.

2. No modifications allowed to:

   - Gorent CSS

   - Gorent font declarations

   - Gorent layout structure

   - Gorent section order

3. After lazy loading implementation, a FULL CSS isolation verification must be executed:

   - Inspect :root variables on /

   - Confirm no Play font present on public pages

   - Confirm Play font present only under /admin/*

4. Remove Login and Register from public navigation if still present.

   They must exist only under /admin/auth/*.

5. Perform complete file presence verification:

   - All template CSS files present

   - All sprite images present

   - All font files present

   - All assets correctly referenced

   - No 404s in DevTools network tab

No partial acceptance allowed.

All checks must PASS before Phase 10 closure.  
  
Documentation Updates

- `Phase-10-Frontend-Parity-Import-Plan.md` — Record lazy-loading fix
- `Tasks.md` — Mark font leak correction completed
- `architecture.md` — Document admin lazy-loading strategy
- `backend.md` — Confirm no backend changes

### Checklist Impact

- C1: PASS (main.tsx has no admin SCSS) 
- C4: PASS (lazy loading prevents Play font on public pages)
- E1: PASS (header alignment restored with correct fonts)
- E9: PASS (Gallery order already correct in code)
- E10: PASS (Brand Partners in correct position)