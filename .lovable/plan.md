# Phase 10 — Parity Correction Plan

## Issues Identified

### Issue 1: Font Leak (Admin "Play" font bleeding into Public)

- **Root cause**: `src/main.tsx` line 8 imports `@/apps/admin/assets/scss/style.scss` **globally**. This SCSS compiles Bootstrap with `$font-family-primary: "Play"` and sets CSS custom properties on `:root` and `body` (e.g., `--bs-body-font-family: "Play"`). Since these target `body` and `:root`, they override the Gorent CSS variables (`--gorent-font: "Roboto"`) globally.
- **Fix**: The admin SCSS import must be moved from `main.tsx` into `AdminLayout.tsx` so it only loads when admin routes render. This scopes admin styles to the admin tree only.

### Issue 2: CSS Double-Import

- **Root cause**: Gorent's `style.css` (line 22-27) already contains `@import './bootstrap.min.css'`, `@import './flaticon.css'`, `@import './font-awesome-all.css'`, etc. But `PublicLayout.tsx` ALSO imports these same files individually (lines 5-10). This loads each CSS file twice.
- **Fix**: Remove the individual CSS imports from `PublicLayout.tsx`. Only import `style.css` (which handles all sub-imports internally) and Swiper CSS.

### Issue 3: Login/Register on Public Site

- **Root cause**: `Header.tsx` lines 43-47 contain `<Link to="/inner/login">Login</Link>` and `<Link to="/inner/sign-up">Register</Link>`. These are template demo links with no corresponding routes.
- **Fix**: Remove the entire `main-menu__top-login-reg-box` div from `Header.tsx`. Also remove `<Link to="/inner/cart">` cart link (no cart route exists).

### Issue 4: Section Order

- **Current order** in `HomeOne.tsx` matches the template source exactly:
Header, BannerOne, SlidingTextOne, ServiceOne, AboutOne, ListingOne, QuickRequest, WhychooseOne, TestimonialOne, VideoOne, GalleryHomeOne, BrandOne, LetsTalk, Footer, StrickyHeader
- This matches the Gorent template's `HomeOne.tsx` 1:1. No reordering needed -- the current order IS the template order.

### Issue 5: Nav Menu Links to Non-Existent Pages

- `MainManuList.tsx` contains full multi-page nav with links to `/inner/about`, `/inner/services`, `/index-two`, etc. -- none of which exist. These dead links need to be simplified for HomeOne-only MVP.

---

## Execution Steps

### Step A: Move Admin SCSS Import (Font Leak Fix)

**Files changed:**

- `src/main.tsx` -- Remove line `import '@/apps/admin/assets/scss/style.scss'`
- `src/apps/admin/layouts/AdminLayout.tsx` -- Add `import '../assets/scss/style.scss'` at top

This ensures admin fonts/styles only load within the admin scope, eliminating the "Play" font leak into the public site.

### Step B: Fix CSS Double-Import in PublicLayout

**File changed:** `src/apps/public/layouts/PublicLayout.tsx`

- Remove individual imports of `bootstrap.min.css`, `font-awesome-all.css`, `flaticon.css`, `animate.min.css`, `custom-animate.css`, `nice-select.css`
- Keep ONLY: `import '../assets/css/style.css'` (which internally imports all the others)
- Keep Swiper CSS imports (these are separate)

### Step C: Remove Public Auth Links

**File changed:** `src/apps/public/sections/common/Header.tsx`

- Remove the `main-menu__top-login-reg-box` div (Login/Register links, lines 43-47)
- Remove the cart link div (`main-menu__cart-box`, lines 74-79) since there is no cart route

### Step D: Simplify Nav for HomeOne MVP

**File changed:** `src/apps/public/components/elements/MainManuList.tsx`

- Replace multi-page dropdown nav with single-page anchor links matching the template's `onePageManuListOne` pattern (Home, About Us, Cars, Contact as simple links)
- All links point to `/` or `#section-id` since only HomeOne exists

### Step E: Verify Build + Visual Parity

- Confirm build compiles (only pre-existing apexcharts error)
- Confirm `/` renders with Roboto/Inter Tight fonts (not Play)
- Confirm `/admin/auth/sign-in` renders with Play font (no Gorent styles)
- Confirm no Login/Register links visible on public site

---

## Technical Details

### Font Isolation Proof (After Fix)

- Public: `style.css` sets `--gorent-font: "Roboto"` and `--gorent-font-two: "Inter Tight"` via `:root`, loaded via Google Fonts import in `style.css` line 20
- Admin: `_variables.scss` sets `$font-family-primary: "Play"` compiled into Bootstrap SCSS, loaded only inside `AdminLayout.tsx`
- No cross-contamination possible since each CSS bundle loads only in its respective layout component

### Files Modified (Total: 4)

1. `src/main.tsx` -- Remove admin SCSS import
2. `src/apps/admin/layouts/AdminLayout.tsx` -- Add admin SCSS import
3. `src/apps/public/layouts/PublicLayout.tsx` -- Remove duplicate CSS imports
4. `src/apps/public/sections/common/Header.tsx` -- Remove Login/Register/Cart links
5. `src/apps/public/components/elements/MainManuList.tsx` -- Simplify nav for single-page MVP

&nbsp;

# Phase 10 — Parity Correction Plan

## Issues Identified

### Issue 1: Font Leak (Admin "Play" font bleeding into Public)

- **Root cause**: `src/main.tsx` line 8 imports `@/apps/admin/assets/scss/style.scss` **globally**. This SCSS compiles Bootstrap with `$font-family-primary: "Play"` and sets CSS custom properties on `:root` and `body` (e.g., `--bs-body-font-family: "Play"`). Since these target `body` and `:root`, they override the Gorent CSS variables `--gorent-font: "Roboto"`) globally.

- **Fix**: The admin SCSS import must be moved from `main.tsx` into `AdminLayout.tsx` so it only loads when admin routes render. This scopes admin styles to the admin tree only.

### Issue 2: CSS Double-Import

- **Root cause**: Gorent's `style.css` (line 22-27) already contains `@import './bootstrap.min.css'`, `@import './flaticon.css'`, `@import './font-awesome-all.css'`, etc. But `PublicLayout.tsx` ALSO imports these same files individually (lines 5-10). This loads each CSS file twice.

- **Fix**: Remove the individual CSS imports from `PublicLayout.tsx`. Only import `style.css` (which handles all sub-imports internally) and Swiper CSS.

### Issue 3: Login/Register on Public Site

- **Root cause**: `Header.tsx` lines 43-47 contain `<Link to="/inner/login">Login</Link>` and `<Link to="/inner/sign-up">Register</Link>`. These are template demo links with no corresponding routes.

- **Fix**: Remove the entire `main-menu__top-login-reg-box` div from `Header.tsx`. Also remove `<Link to="/inner/cart">` cart link (no cart route exists).

### Issue 4: Section Order

- **Current order** in `HomeOne.tsx` matches the template source exactly:

  Header, BannerOne, SlidingTextOne, ServiceOne, AboutOne, ListingOne, QuickRequest, WhychooseOne, TestimonialOne, VideoOne, GalleryHomeOne, BrandOne, LetsTalk, Footer, StrickyHeader

- This matches the Gorent template's `HomeOne.tsx` 1:1. No reordering needed -- the current order IS the template order.

### Issue 5: Nav Menu Links to Non-Existent Pages

- `MainManuList.tsx` contains full multi-page nav with links to `/inner/about`, `/inner/services`, `/index-two`, etc. -- none of which exist. These dead links need to be simplified for HomeOne-only MVP.

---

## Execution Steps

### Step A: Move Admin SCSS Import (Font Leak Fix)

**Files changed:**

- `src/main.tsx` -- Remove line `import '@/apps/admin/assets/scss/style.scss'`

- `src/apps/admin/layouts/AdminLayout.tsx` -- Add `import '../assets/scss/style.scss'` at top

This ensures admin fonts/styles only load within the admin scope, eliminating the "Play" font leak into the public site.

### Step B: Fix CSS Double-Import in PublicLayout

**File changed:** `src/apps/public/layouts/PublicLayout.tsx`

- Remove individual imports of `bootstrap.min.css`, `font-awesome-all.css`, `flaticon.css`, `animate.min.css`, `custom-animate.css`, `nice-select.css`

- Keep ONLY: `import '../assets/css/style.css'` (which internally imports all the others)

- Keep Swiper CSS imports (these are separate)

### Step C: Remove Public Auth Links

**File changed:** `src/apps/public/sections/common/Header.tsx`

- Remove the `main-menu__top-login-reg-box` div (Login/Register links, lines 43-47)

- Remove the cart link div `main-menu__cart-box`, lines 74-79) since there is no cart route

### Step D: Simplify Nav for HomeOne MVP

**File changed:** `src/apps/public/components/elements/MainManuList.tsx`

- Replace multi-page dropdown nav with single-page anchor links matching the template's `onePageManuListOne` pattern (Home, About Us, Cars, Contact as simple links)

- All links point to `/` or `#section-id` since only HomeOne exists

### Step E: Verify Build + Visual Parity

- Confirm build compiles (only pre-existing apexcharts error)

- Confirm `/` renders with Roboto/Inter Tight fonts (not Play)

- Confirm `/admin/auth/sign-in` renders with Play font (no Gorent styles)

- Confirm no Login/Register links visible on public site

---

## Technical Details

### Font Isolation Proof (After Fix)

- Public: `style.css` sets `--gorent-font: "Roboto"` and `--gorent-font-two: "Inter Tight"` via `:root`, loaded via Google Fonts import in `style.css` line 20

- Admin: `_variables.scss` sets `$font-family-primary: "Play"` compiled into Bootstrap SCSS, loaded only inside `AdminLayout.tsx`

- No cross-contamination possible since each CSS bundle loads only in its respective layout component

### Files Modified (Total: 4)

1. `src/main.tsx` -- Remove admin SCSS import

2. `src/apps/admin/layouts/AdminLayout.tsx` -- Add admin SCSS import

3. `src/apps/public/layouts/PublicLayout.tsx` -- Remove duplicate CSS imports

4. `src/apps/public/sections/common/Header.tsx` -- Remove Login/Register/Cart links

5. `src/apps/public/components/elements/MainManuList.tsx` -- Simplify nav for single-page MVP

### Documentation Updates

- `Phase-10-Frontend-Parity-Import-Plan.md` -- Record correction results

- `Tasks.md` -- Mark parity corrections completed

- `architecture.md` -- Note admin SCSS moved to AdminLayout

- `backend.md` -- Confirm no backend changes

  
  
  
  
Documentation Updates

- `Phase-10-Frontend-Parity-Import-Plan.md` -- Record correction results
- `Tasks.md` -- Mark parity corrections completed
- `architecture.md` -- Note admin SCSS moved to AdminLayout
- `backend.md` -- Confirm no backend changes