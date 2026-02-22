# Phase 1 — Homepage Structure Freeze (Home 1)

**Date**: 2026-02-22
**Last Updated**: 2026-02-22 (Corrections applied)

## A) Final Homepage Section Order

```
1.  Header
2.  BannerOne (Hero Slider)
3.  SlidingTextOne (Marquee)
4.  ServiceOne
5.  AboutOne (Full — images, progress bars, counter, phone)
6.  ListingOne (Featured Cars — brand tabs only)
7.  QuickRequest (Name, Phone, Vehicle, Message, WhatsApp, Submit)
8.  WhychooseOne (Cards only — no CounterOne)
9.  TestimonialOne
10. VideoOne
11. GalleryHomeOne (max 6 items — HomeOne-specific wrapper)
12. BrandOne
13. LetsTalk CTA
14. Footer
+ StrickyHeader (sticky overlay — always present)
```

**Total**: 14 sections + StrickyHeader overlay

## B) Removed from Home 1

| Section | Reason |
|---|---|
| ProcessOne | Car Rental Process — not needed on homepage |
| PricingOne (+ CallOne, PopularCarOne) | Pricing block — removed per Corporate Balanced Strategy |
| TeamOne | Drivers/Team — removed |
| DownloadApp | App download — removed |
| FaqOne | FAQ — removed from homepage |
| BlogOne | Blog — removed from homepage (blog page intact) |
| CounterOne (inside WhychooseOne) | Fun facts counters — removed from WhychooseOne |

## C) Components Modified

| File | Change |
|---|---|
| `pages/home-one/HomeOne.tsx` | Removed 7 imports + render calls; reordered; replaced Booking with QuickRequest; replaced Gallery with GalleryHomeOne; added VideoOne |
| `sections/home-one/WhychooseOne.tsx` | Removed counter-one section, removed unused imports |
| `sections/home-one/ListingOne.tsx` | Rental/For Sale tabs removed (documented as future requirement) |
| `sections/common/Gallery.tsx` | Reverted to original — no maxItems prop. Shared component unchanged |

## D) New Components Created

| File | Purpose |
|---|---|
| `sections/home-one/QuickRequest.tsx` | HomeOne-specific Quick Request form (replaces shared Booking on Home 1 only) |
| `sections/home-one/GalleryHomeOne.tsx` | HomeOne-specific gallery wrapper — uses `galleryData.slice(0, 6)` to limit items |

## E) Future Requirements (Documented Only — Not Implemented)

- **ListingOne**: Vehicle type tabs (Rental / For Sale) + separate For Sale listing page
- **Gallery**: Dynamic data source (currently static galleryData)

## F) Confirmation

- [x] No routing changes
- [x] No style refactor
- [x] No new dependencies
- [x] No backend modifications
- [x] Shared Booking.tsx unchanged — other pages unaffected
- [x] Shared Gallery.tsx unchanged — other pages unaffected
- [x] Components NOT deleted globally — only removed from HomeOne
