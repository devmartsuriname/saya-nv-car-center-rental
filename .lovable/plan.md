# Phase 2 + Phase 3 — Documentation Only

## Deliverables

Two documentation files will be created. No code changes.

---

## File 1: `Saya Project Docs/Phase-2-Admin-Module-Recalibration.md`

### A) Active Modules (12)


| #   | Module         | Purpose                                                      | Frontend Sections Served      | Content Type | CRUD | Media Upload   | Ordering | Risk   |
| --- | -------------- | ------------------------------------------------------------ | ----------------------------- | ------------ | ---- | -------------- | -------- | ------ |
| 1   | Site Settings  | Header logo, nav links, footer content, sticky header config | Header, Footer, StrickyHeader | Single       | No   | Yes (logo)     | No       | Low    |
| 2   | Hero Slides    | Banner slider content, CTAs                                  | BannerOne                     | Repeatable   | Yes  | Yes            | Yes      | Medium |
| 3   | Services       | Service cards (4 cards: Rental, Sales, 2 sub-services)       | ServiceOne                    | Repeatable   | Yes  | Yes (icons)    | Yes      | Low    |
| 4   | About Content  | About text, progress bars, phone, experience, 2 images       | AboutOne                      | Single       | No   | Yes (2 images) | No       | Low    |
| 5   | Vehicles       | Car listings with brand tabs, specs, pricing                 | ListingOne                    | Repeatable   | Yes  | Yes            | Yes      | High   |
| 6   | Quick Request  | Form config (vehicle dropdown options, WhatsApp number)      | QuickRequest                  | Single       | No   | No             | No       | Low    |
| 7   | Why Choose     | Reason cards (icon, title, text)                             | WhychooseOne                  | Repeatable   | Yes  | Yes (icons)    | Yes      | Low    |
| 8   | Testimonials   | Customer reviews (name, role, image, text, rating)           | TestimonialOne                | Repeatable   | Yes  | Yes (avatar)   | Yes      | Low    |
| 9   | Gallery        | Image gallery (homepage limited to 6)                        | GalleryHomeOne, Gallery       | Repeatable   | Yes  | Yes            | Yes      | Low    |
| 10  | Brand Partners | Partner/brand logos                                          | BrandOne                      | Repeatable   | Yes  | Yes (logos)    | Yes      | Low    |
| 11  | CTA Banner     | Call-to-action section text and link                         | LetsTalk                      | Single       | No   | No             | No       | Low    |
| 12  | Blog           | Blog posts (separate page only, not on homepage)             | Blog page                     | Repeatable   | Yes  | Yes            | Yes      | Medium |


### B) Deprecated Modules


| Module                                | Status           | Notes                                                 |
| ------------------------------------- | ---------------- | ----------------------------------------------------- |
| ProcessOne (Car Rental Process)       | Deferred         | May return in future phase for dedicated rental page  |
| CounterOne (Fun Facts)                | Deferred         | Removed from WhychooseOne; could return on About page |
| PricingOne (+ CallOne, PopularCarOne) | Deferred         | Pricing plans not in scope for Phase 1 homepage       |
| TeamOne (Drivers)                     | Deferred         | May return for About or dedicated team page           |
| DownloadApp                           | Fully Deprecated | No mobile app planned                                 |
| FaqOne (Homepage FAQ)                 | Deferred         | May return on Contact or dedicated FAQ page           |
| BlogOne (Homepage Blog)               | Deferred         | Blog section removed from homepage; blog page intact  |
| VideoOne                              | Active (kept)    | Remains on homepage — NOT deprecated                  |


### C) Admin Panel Grouping Strategy (Conceptual)

```
Dashboard
  - Overview / Stats

Content
  - Hero Slides
  - Services
  - About
  - Why Choose
  - CTA Banner

Vehicles
  - All Vehicles (Rental + Sale unified list)
  - (Future: Rentals filter)
  - (Future: For Sale filter)

Marketing
  - Testimonials
  - Blog
  - Gallery
  - Brand Partners

Inquiries
  - Quick Requests (future: view submitted requests)

Settings
  - Site Settings (Header, Footer, Sticky Header)
  - Quick Request Config (WhatsApp number, vehicle dropdown options)
```

---

## File 2: `Saya Project Docs/Phase-3-Vehicle-Schema-Blueprint.md`

### Step 1 — Core Vehicle Entity


| Field             | Type                    | Notes                                 |
| ----------------- | ----------------------- | ------------------------------------- |
| id                | UUID / Auto-increment   | Primary key                           |
| title             | String                  | Display name                          |
| slug              | String                  | URL-friendly identifier               |
| brand             | String                  | e.g., Tesla, Honda, Audi              |
| model             | String                  | e.g., Model 3, Civic                  |
| year              | Integer                 | Model year                            |
| transmission      | String                  | Manual / Automatic / CVT              |
| fuel_type         | String                  | Gasoline / Diesel / Electric / Hybrid |
| mileage           | String                  | e.g., "28 MPG"                        |
| seats             | Integer                 | Passenger capacity                    |
| doors             | Integer                 | Number of doors                       |
| color             | String                  | Exterior color                        |
| main_image        | String (URL)            | Primary display image                 |
| gallery_images    | Array of Strings (URLs) | Additional images                     |
| description_short | String                  | Card-level summary                    |
| description_long  | Text                    | Full detail page content              |
| status            | Enum                    | active / inactive                     |
| vehicle_type      | Enum                    | rental / sale                         |
| created_at        | Timestamp               | Auto-generated                        |
| updated_at        | Timestamp               | Auto-generated                        |


### Step 2 — Rental-Specific Fields


| Field               | Type    | Notes                            |
| ------------------- | ------- | -------------------------------- |
| price_per_day       | Decimal | Daily rental rate                |
| price_per_week      | Decimal | Weekly rental rate (optional)    |
| minimum_age         | Integer | Minimum driver age               |
| security_deposit    | Decimal | Required deposit amount          |
| availability_status | Enum    | available / rented / maintenance |
| rental_terms        | Text    | Terms and conditions             |


### Step 3 — Sale-Specific Fields


| Field               | Type    | Notes                 |
| ------------------- | ------- | --------------------- |
| sale_price          | Decimal | Listing price         |
| negotiable          | Boolean | Price negotiable flag |
| condition           | Enum    | new / used            |
| financing_available | Boolean | Financing option flag |
| warranty_info       | Text    | Warranty details      |


### Step 4 — Relational Extensions (Future Direction)

Listed for awareness only. No ERD or implementation.

- **Brands table** — Normalize brand data (logo, name, slug) for filtering and brand page
- **Vehicle Categories table** — Sedan, SUV, Microbus, Luxury, etc.
- **Transmission enum table** — Standardized transmission types
- **Fuel enum table** — Standardized fuel types
- **Media table** — Centralized media storage with vehicle FK
- **Availability Calendar table** — Date-based availability for rental vehicles

### Step 5 — Risk and Complexity Analysis


| Dimension          | Assessment  | Notes                                                                             |
| ------------------ | ----------- | --------------------------------------------------------------------------------- |
| Complexity Level   | Medium-High | Dual-purpose entity (rental + sale) requires careful field separation             |
| Risk if Mixed      | High        | Rental fields on sale vehicles (and vice versa) causes data confusion and UI bugs |
| Admin UX Risk      | Medium      | Single vehicle form must conditionally show/hide fields based on vehicle_type     |
| Filtering Risk     | Medium      | Homepage, listing pages, and search must correctly filter by vehicle_type         |
| SEO Considerations | Medium      | Separate URL structures for /rentals/[slug] vs /for-sale/[slug] recommended       |
| Migration Risk     | Low         | No existing database — greenfield schema design                                   |


---

ADMIN STRUCTURE CORRECTIONS — MUST UPDATE PHASE 2 DOCUMENT

The current Admin Panel Grouping Strategy must be restructured for clarity, scalability, and Darkone 1:1 compliance.

This is documentation-only. No UI implementation yet.

========================================

1) FRONTEND CONTENT GROUPING

========================================

The following modules must be grouped under a main menu:

Frontend

   - Hero Slides

   - Services

   - About Content

   - Why Choose

   - Testimonials

   - Gallery

   - Brand Partners

   - CTA Banner

Reason:

These modules serve shared frontend sections across multiple pages.

They are content-driven and non-transactional.

========================================

2) BLOG MUST BE A TOP-LEVEL MODULE

========================================

Blog should NOT be under Marketing.

Blog must be its own top-level admin module.

Reason:

Blog will scale independently (SEO, categories, posts, media).

Avoid overcrowding sidebar.

========================================

3) QUICK REQUEST UNDER CRM

========================================

Quick Request must move under:

CRM

   - Quick Requests (submitted leads)

   - Quick Request Config (WhatsApp number, dropdown options)

Reason:

This is lead capture, not content.

CRM separation prevents confusion.

========================================

4) VEHICLES MUST BE SPLIT

========================================

Vehicles must NOT be unified under one list.

Instead:

Vehicles

   - Rental Listings

   - Sales Listings

Reason:

Rental and Sale have different operational logic.

Saya team must manage them separately to avoid UX confusion.

Internally they may share schema,

but admin UI must present them as distinct modules.

========================================

5) SITE SETTINGS AS TOP-LEVEL MODULE

========================================

Site Settings must be its own main menu item.

Not under Settings.

Reason:

High-frequency access module.

Contains:

- Logo

- Header

- Footer

- Sticky Header

- Global Config

========================================

6) DARKONE 1:1 GOVERNANCE REQUIREMENT

========================================

All future admin UI design must strictly reuse Darkone components.

Reference:

DARKONE_ASSET_[MAP.md](http://MAP.md)

Follow:

- No custom UI

- No new layout systems

- Use Darkone page structure

- Use Darkone card patterns

- Use Darkone tables

- Use Darkone form layouts

Before designing any admin page:

Review DARKONE_ASSET_[MAP.md](http://MAP.md)

Reuse existing component patterns.

========================================

7) PAGE vs XL MODAL DECISION RULE

========================================

For each module, document whether:

- It requires a full page (complex form, many fields)

OR

- It should use Darkone XL Modal (quick create/edit flows)

Guidelines:

Use Full Page for:

- Vehicles (Rental/Sale)

- Blog

- About Content (if large content)

- Services (if rich content)

Use XL Modal for:

- Testimonials

- Gallery

- Brand Partners

- Hero Slides

- Why Choose

- CTA Banner

Document reasoning in [Phase-2-Admin-Module-Recalibration.md](http://Phase-2-Admin-Module-Recalibration.md)

========================================

8) UPDATE REQUIRED

========================================

Update:

Saya Project Docs/[Phase-2-Admin-Module-Recalibration.md](http://Phase-2-Admin-Module-Recalibration.md)

Replace Admin Panel Grouping Strategy with the corrected structure above.

Do not implement UI.

Do not modify code.

Documentation only.

Stop after update.

Await further instructions.  
  
Technical Notes

- No files modified
- No dependencies added
- No database, schema, or backend work
- Both documents saved to `Saya Project Docs/`
- Stop after documentation