
# Phase 10 — Final Parity Correction Plan

## Diagnostic Summary

### SECTION A: CSS Isolation (Font Leak)
**STATUS: FIXED** — The lazy-loading of `AdminApp` via `React.lazy()` in `App.tsx` ensures admin SCSS (including "Play" font) is NOT loaded on `/`. Verified via browser: the public page renders with Gorent fonts (Roboto / Inter Tight). The admin bundle loads only when navigating to `/admin/*`.

No further action needed. If you still see "Play" font, do a hard refresh (Ctrl+Shift+R) to clear cached CSS.

### SECTION B: Header Issues Found
Three problems remain in the header/sticky header:

**B1. StrickyHeader still has cart icon (04 badge)**
- File: `src/apps/public/sections/common/StrickyHeader.tsx` lines 44-49
- The main `Header.tsx` had cart removed, but `StrickyHeader.tsx` was NOT updated
- The cart icon with "04" badge visible in all screenshots is from `StrickyHeader`
- Fix: Remove `main-menu__cart-box` div from StrickyHeader

**B2. StrickyHeader uses wrong nav list**
- File: `src/apps/public/sections/common/StrickyHeader.tsx` line 38
- Currently: `pathName === "/index-one-page" ? onePageManuListOne : onePageManuListThree`
- Since path is `/`, it uses `onePageManuListThree` (different item order + "Contact" instead of "Testimonial")
- Fix: Always use `onePageManuListOne` since only HomeOne exists

**B3. Header top bar missing Login/Register (CORRECT)**
- Login/Register was correctly removed from Header.tsx per governance
- No action needed

### SECTION C: Hero and Banner
**STATUS: PASS** — Banner renders correctly with Swiper slider, correct typography, CTA buttons, and video play icon. No font anomalies detected.

### SECTION D: Quick Request Form — CSS Bug Found
**Root cause identified**: The CSS in `style.css` (line 6888-6903) styles inputs with `input[type="text"]`, `input[type="date"]`, `input[type="email"]` but NOT `input[type="tel"]`. The Phone input in `QuickRequest.tsx` uses `type="tel"`, so it gets no border, no border-radius, no padding.

- File: `src/apps/public/sections/home-one/QuickRequest.tsx` line 91
- Fix: Change `type="tel"` to `type="text"` to match the CSS selectors. This is the template-correct approach (the original template uses `type="text"` for phone fields).

### SECTION E: Section Order
**STATUS: PASS** — Current order in `HomeOne.tsx` matches the template source exactly:
```
Header -> BannerOne -> SlidingTextOne -> ServiceOne -> AboutOne -> ListingOne ->
QuickRequest -> WhychooseOne -> TestimonialOne -> VideoOne -> GalleryHomeOne ->
BrandOne -> LetsTalk -> Footer -> StrickyHeader
```
Gallery is correctly positioned AFTER Video and BEFORE Brand. No reordering needed.

### SECTION F: Gallery
**STATUS: PASS** — Gallery renders as a Swiper carousel with 6 items, correct class names. Placeholder images (320x390) are expected since real images have not been provided yet.

### SECTION G: Footer
**STATUS: PASS** — Footer structure matches template with logo, Quick Links, Services, Contact Us columns, email input, and copyright bar.

### SECTION H: File Integrity
All required CSS files are present in `src/apps/public/assets/css/`:
- style.css (22,883 lines, main stylesheet)
- bootstrap.min.css
- animate.min.css
- custom-animate.css
- flaticon.css
- font-awesome-all.css
- nice-select.css
- images/ directory

Google Fonts (Roboto, Inter Tight) loading successfully via style.css line 20.

---

## Execution Steps

### Step 1: Fix StrickyHeader (Cart removal + Nav list)
**File: `src/apps/public/sections/common/StrickyHeader.tsx`**
- Remove the `main-menu__cart-box` div (lines 44-49) containing the cart icon and "04" badge
- Change line 38 to always pass `onePageManuListOne` (remove the conditional that uses `onePageManuListThree`)

### Step 2: Fix QuickRequest Phone Input
**File: `src/apps/public/sections/home-one/QuickRequest.tsx`**
- Change line 91 from `type="tel"` to `type="text"` so the CSS selector `.booking-one__input-box input[type="text"]` properly styles the phone input with border, border-radius, and padding

### Step 3: Verify Build and Visual Parity
- Confirm build compiles (only pre-existing apexcharts type error)
- Confirm no cart icon visible on public pages
- Confirm Quick Request form fields all have consistent styling
- Confirm font isolation maintained

---

## Technical Details

### Files Modified (Total: 2)
1. `src/apps/public/sections/common/StrickyHeader.tsx` — Remove cart icon, fix nav list
2. `src/apps/public/sections/home-one/QuickRequest.tsx` — Fix phone input type for CSS match

### Documentation Updates
- `Phase-10-Frontend-Parity-Import-Plan.md` — Record final corrections
- `Tasks.md` — Mark final parity corrections completed

### Checklist Impact
- B3: PASS (cart removed from StrickyHeader)
- B5: PASS (no login/register on public — already removed)
- D2: PASS (phone input border-radius matches demo after type fix)
- E1-E7: PASS (section order confirmed correct)
- F1: PASS (public auth links not present)
