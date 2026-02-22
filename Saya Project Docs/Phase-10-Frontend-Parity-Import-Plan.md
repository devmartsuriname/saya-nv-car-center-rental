# Phase 10 — Frontend Parity Import Plan

**Version**: 1.0
**Status**: Planning Only — No Execution
**Date**: 2026-02-22

---

## 0. Purpose

Define the plan for importing Gorent Home 1 template into the public site route tree, achieving full visual 1:1 parity. All sections will use static data — no Supabase integration in this phase.

---

## 1. KEEP vs REMOVE (Based on Phase 1 Freeze)

### KEEP (14 sections + StrickyHeader)

| # | Section | Source Component |
|---|---|---|
| 1 | Header | `gorent/.../Header` |
| 2 | BannerOne | `gorent/.../BannerOne` |
| 3 | SlidingTextOne | `gorent/.../SlidingTextOne` |
| 4 | ServiceOne | `gorent/.../ServiceOne` |
| 5 | AboutOne | `gorent/.../AboutOne` |
| 6 | ListingOne | `gorent/.../ListingOne` |
| 7 | QuickRequest | `gorent/.../QuickRequest` (new in Phase 1) |
| 8 | WhychooseOne | `gorent/.../WhychooseOne` (CounterOne removed) |
| 9 | TestimonialOne | `gorent/.../TestimonialOne` |
| 10 | VideoOne | `gorent/.../VideoOne` |
| 11 | GalleryHomeOne | `gorent/.../GalleryHomeOne` (max 6 items) |
| 12 | BrandOne | `gorent/.../BrandOne` |
| 13 | LetsTalk | `gorent/.../LetsTalk` |
| 14 | Footer | `gorent/.../Footer` |
| + | StrickyHeader | `gorent/.../StrickyHeader` (sticky overlay) |

### REMOVE (not on Home 1)

| Section | Reason |
|---|---|
| ProcessOne | Not needed on homepage |
| PricingOne (+ CallOne, PopularCarOne) | Removed per Corporate Balanced Strategy |
| TeamOne | Removed |
| DownloadApp | No mobile app planned |
| FaqOne | Removed from homepage |
| BlogOne | Removed from homepage (blog page intact) |
| CounterOne (inside WhychooseOne) | Removed from WhychooseOne |

---

## 2. Section-to-Component Mapping with Data Source

| # | Section | Component Name | Data Source (Now) | Data Source (Future DB Table) |
|---|---|---|---|---|
| 1 | Header | `Header` | Static | `site_settings` |
| 2 | BannerOne | `BannerOne` | Static | `hero_slides` |
| 3 | SlidingTextOne | `SlidingTextOne` | Static | Static (no DB table) |
| 4 | ServiceOne | `ServiceOne` | Static | `services` |
| 5 | AboutOne | `AboutOne` | Static | `about_content` + `about_progress_items` |
| 6 | ListingOne | `ListingOne` | Static | `vehicles` (WHERE status='active') |
| 7 | QuickRequest | `QuickRequest` | Static | `quick_requests` (write) + `vehicles` (read for dropdown) |
| 8 | WhychooseOne | `WhychooseOne` | Static | `why_choose_items` |
| 9 | TestimonialOne | `TestimonialOne` | Static | `testimonials` |
| 10 | VideoOne | `VideoOne` | Static | `site_settings` or `cta_banners` |
| 11 | GalleryHomeOne | `GalleryHomeOne` | Static | `gallery_items` (is_active=true, limit 6) |
| 12 | BrandOne | `BrandOne` | Static | `brand_partners` |
| 13 | LetsTalk | `LetsTalk` | Static | `cta_banners` |
| 14 | Footer | `Footer` | Static | `site_settings` |
| + | StrickyHeader | `StrickyHeader` | Static | `site_settings` |

---

## 3. Asset Placement Rules

### Images / Static Files

- **Location**: `/public/` directory only
- **Structure**: Preserve Gorent's relative image paths where possible
- **Examples**:
  - `/public/images/cars/...`
  - `/public/images/about/...`
  - `/public/images/hero/...`

### React / TypeScript Code

- **Location**: `/src/apps/public/` only
- **No React code in `/public/`**
- **No Gorent code outside `/src/apps/public/`**

### CSS Files

- **Location**: `/src/apps/public/assets/css/`
- **Scoping**: All Gorent CSS must be scoped under `.public-scope` wrapper class
- **No Gorent CSS imported globally**
- **No Gorent CSS in admin scope**

---

## 4. Import Strategy

### Source

Components imported from: `gorent-car-rental-react-js-template/src/`

### Target

Components placed in: `/src/apps/public/`

### Target Structure

```
src/apps/public/
  components/         # Shared public components (Header, Footer, StrickyHeader)
  layouts/            # PublicLayout.tsx (wraps all public pages)
  pages/              # Page-level components (HomePage.tsx, etc.)
  sections/           # Section components (BannerOne, ServiceOne, etc.)
    home-one/         # Home 1 specific sections
    common/           # Shared sections (Gallery, etc.)
  assets/
    css/              # Gorent CSS files (scoped under .public-scope)
  data/               # Static data files (carData, serviceData, etc.)
```

### Migration Steps (For Implementation Time)

1. Copy Gorent page/section components into `/src/apps/public/sections/`
2. Copy Gorent shared components (Header, Footer) into `/src/apps/public/components/`
3. Copy Gorent CSS files into `/src/apps/public/assets/css/`
4. Scope all CSS under `.public-scope` wrapper
5. Copy Gorent static data files into `/src/apps/public/data/`
6. Copy Gorent images/assets into `/public/`
7. Update all import paths to reflect new locations
8. Rewrite Gorent router usage to react-router-dom v6 `<Routes>` pattern
9. Remove Gorent-specific dependencies on react-router v7 `createBrowserRouter`
10. Install missing Gorent dependencies: `framer-motion`, `swiper`, `react-fast-marquee`, `react-countup`, `react-intersection-observer`
11. Create `PublicLayout.tsx` with `.public-scope` wrapper class
12. Wire public routes in unified router
13. Verify visual 1:1 parity

### Router Integration

- Gorent uses `createBrowserRouter` + `RouterProvider` (react-router v7 pattern) — this will be **abandoned**
- All page components imported into the unified react-router-dom v6 `<Routes>` tree
- Public routes: `/`, `/about`, `/cars`, `/contact`, `/blog`, `/rentals/:slug`, `/for-sale/:slug`
- Admin routes: `/admin/*` (unchanged)

---

## 5. Parity Verification Gate

Before proceeding to database implementation:

- [ ] All 14 sections + StrickyHeader render correctly
- [ ] Visual 1:1 match with original Gorent Home 1
- [ ] No CSS leakage to admin scope
- [ ] No admin CSS leakage to public scope
- [ ] All static data displays correctly
- [ ] Responsive behavior matches original
- [ ] Build passes without errors
- [ ] Router works: `/` renders public, `/admin` renders admin
- [ ] No console errors related to imported components

---

**STOP — Await further instructions.**
