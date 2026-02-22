# Phase 1 — Homepage Structure Freeze (Home 1)

**Date**: 2026-02-22

## A) Final Homepage Section Order

```
1.  Header
2.  BannerOne (Hero Slider)
3.  SlidingTextOne (Marquee)
4.  ServiceOne
5.  AboutOne (Full — images, progress bars, counter, phone)
6.  ListingOne (Featured Cars — with Rental/For Sale tabs)
7.  QuickRequest (Name, Phone, Vehicle, Message, WhatsApp, Submit)
8.  WhychooseOne (Cards only — no CounterOne)
9.  TestimonialOne
10. Gallery (max 6 items)
11. BrandOne
12. LetsTalk CTA
13. Footer
14. StrickyHeader
```

## B) Removed from Home 1

| Section | Reason |
|---|---|
| ProcessOne | Car Rental Process — not needed on homepage |
| PricingOne (+ CallOne, PopularCarOne) | Pricing block — removed per Corporate Balanced Strategy |
| VideoOne | Video CTA — removed per strategy |
| TeamOne | Drivers/Team — removed |
| DownloadApp | App download — removed |
| FaqOne | FAQ — removed from homepage |
| BlogOne | Blog — removed from homepage (blog page intact) |
| CounterOne (inside WhychooseOne) | Fun facts counters — removed from WhychooseOne |

## C) Components Modified

| File | Change |
|---|---|
| `pages/home-one/HomeOne.tsx` | Removed 7 imports + render calls; reordered; replaced Booking with QuickRequest; added maxItems={6} to Gallery |
| `sections/home-one/WhychooseOne.tsx` | Removed counter-one section (lines 62-141), removed unused imports |
| `sections/home-one/ListingOne.tsx` | Added Rental/For Sale category tabs above brand tabs (UI only) |
| `sections/common/Gallery.tsx` | Added optional `maxItems` prop — no breaking change for other pages |

## D) New Component Created

| File | Purpose |
|---|---|
| `sections/home-one/QuickRequest.tsx` | HomeOne-specific Quick Request form (replaces shared Booking on Home 1 only) |

## E) Confirmation

- [x] No routing changes
- [x] No style refactor
- [x] No new dependencies
- [x] No backend modifications
- [x] Shared Booking.tsx unchanged — other pages unaffected
- [x] Gallery.tsx backward compatible — maxItems is optional
- [x] Components NOT deleted globally — only removed from HomeOne
