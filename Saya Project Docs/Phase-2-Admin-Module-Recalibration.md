# Phase 2 — Admin Module Recalibration

**Date**: 2026-02-22
**Status**: Documentation Only — No Implementation

---

## A) Active Modules (12)

| # | Module | Purpose | Frontend Sections Served | Content Type | CRUD | Media Upload | Ordering | Risk |
|---|--------|---------|--------------------------|--------------|------|--------------|----------|------|
| 1 | Site Settings | Header logo, nav links, footer content, sticky header config | Header, Footer, StrickyHeader | Single | No | Yes (logo) | No | Low |
| 2 | Hero Slides | Banner slider content, CTAs | BannerOne | Repeatable | Yes | Yes | Yes | Medium |
| 3 | Services | Service cards (4 cards: Rental, Sales, 2 sub-services) | ServiceOne | Repeatable | Yes | Yes (icons) | Yes | Low |
| 4 | About Content | About text, progress bars, phone, experience, 2 images | AboutOne | Single | No | Yes (2 images) | No | Low |
| 5 | Vehicles | Car listings with brand tabs, specs, pricing | ListingOne | Repeatable | Yes | Yes | Yes | High |
| 6 | Quick Request | Form config (vehicle dropdown options, WhatsApp number) | QuickRequest | Single | No | No | No | Low |
| 7 | Why Choose | Reason cards (icon, title, text) | WhychooseOne | Repeatable | Yes | Yes (icons) | Yes | Low |
| 8 | Testimonials | Customer reviews (name, role, image, text, rating) | TestimonialOne | Repeatable | Yes | Yes (avatar) | Yes | Low |
| 9 | Gallery | Image gallery (homepage limited to 6) | GalleryHomeOne, Gallery | Repeatable | Yes | Yes | Yes | Low |
| 10 | Brand Partners | Partner/brand logos | BrandOne | Repeatable | Yes | Yes (logos) | Yes | Low |
| 11 | CTA Banner | Call-to-action section text and link | LetsTalk | Single | No | No | No | Low |
| 12 | Blog | Blog posts (separate page only, not on homepage) | Blog page | Repeatable | Yes | Yes | Yes | Medium |

---

## B) Deprecated Modules

| Module | Status | Notes |
|--------|--------|-------|
| ProcessOne (Car Rental Process) | Deferred | May return in future phase for dedicated rental page |
| CounterOne (Fun Facts) | Deferred | Removed from WhychooseOne; could return on About page |
| PricingOne (+ CallOne, PopularCarOne) | Deferred | Pricing plans not in scope for Phase 1 homepage |
| TeamOne (Drivers) | Deferred | May return for About or dedicated team page |
| DownloadApp | Fully Deprecated | No mobile app planned |
| FaqOne (Homepage FAQ) | Deferred | May return on Contact or dedicated FAQ page |
| BlogOne (Homepage Blog) | Deferred | Blog section removed from homepage; blog page intact |
| VideoOne | Active (kept) | Remains on homepage — NOT deprecated |

---

## C) Admin Panel Grouping Strategy (Corrected)

```
Dashboard
  - Overview / Stats

Frontend
  - Hero Slides
  - Services
  - About Content
  - Why Choose
  - Testimonials
  - Gallery
  - Brand Partners
  - CTA Banner

Vehicles
  - Rental Listings
  - Sales Listings

Blog
  (top-level module — independent scaling for SEO, categories, posts, media)

CRM
  - Quick Requests (submitted leads)
  - Quick Request Config (WhatsApp number, dropdown options)

Site Settings
  (top-level module — high-frequency access)
  - Logo
  - Header
  - Footer
  - Sticky Header
  - Global Config
```

### Grouping Rationale

| Group | Reason |
|-------|--------|
| Frontend | Content-driven, non-transactional modules serving shared frontend sections |
| Vehicles | Rental and Sale split — different operational logic, managed separately in admin UI (may share schema internally) |
| Blog | Top-level — scales independently, avoids sidebar overcrowding |
| CRM | Lead capture separation — Quick Request is transactional, not content |
| Site Settings | Top-level — high-frequency access for logo, header, footer, global config |

---

## D) Darkone 1:1 Governance

All future admin UI must strictly reuse Darkone components.

**Reference**: `DARKONE_ASSET_MAP.md`

**Rules**:
- No custom UI
- No new layout systems
- Use Darkone page structure
- Use Darkone card patterns
- Use Darkone tables
- Use Darkone form layouts

Before designing any admin page: review `DARKONE_ASSET_MAP.md` and reuse existing component patterns.

---

## E) Page vs XL Modal Decision

| Module | UI Pattern | Reasoning |
|--------|-----------|-----------|
| Vehicles (Rental) | Full Page | Complex form, many fields, gallery upload, conditional fields |
| Vehicles (Sale) | Full Page | Complex form, many fields, gallery upload, conditional fields |
| Blog | Full Page | Rich content editor, categories, media, SEO fields |
| About Content | Full Page | Large content area, progress bars config, 2 image uploads |
| Services | Full Page | Rich content per service card |
| Testimonials | XL Modal | Quick create/edit — few fields (name, role, avatar, text, rating) |
| Gallery | XL Modal | Quick create/edit — image upload + caption |
| Brand Partners | XL Modal | Quick create/edit — logo upload + name |
| Hero Slides | XL Modal | Quick create/edit — image, title, CTA, link |
| Why Choose | XL Modal | Quick create/edit — icon, title, text |
| CTA Banner | XL Modal | Quick edit — text + link (single record) |
| Site Settings | Full Page | Multiple config sections (logo, header, footer, sticky header) |
| Quick Request Config | XL Modal | Quick edit — WhatsApp number, dropdown options |

---

## F) Confirmation

- [x] No code modified
- [x] No dependencies added
- [x] No database or backend work
- [x] Documentation only
