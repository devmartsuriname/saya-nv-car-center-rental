# Phase 3 — Vehicle Schema Blueprint

**Date**: 2026-02-22
**Status**: Schema Planning Only — No Database Implementation

---

## Step 1 — Core Vehicle Entity

| Field | Type | Notes |
|-------|------|-------|
| id | UUID / Auto-increment | Primary key |
| title | String | Display name |
| slug | String | URL-friendly identifier |
| brand | String | e.g., Tesla, Honda, Audi |
| model | String | e.g., Model 3, Civic |
| year | Integer | Model year |
| transmission | String | Manual / Automatic / CVT |
| fuel_type | String | Gasoline / Diesel / Electric / Hybrid |
| mileage | String | e.g., "28 MPG" |
| seats | Integer | Passenger capacity |
| doors | Integer | Number of doors |
| color | String | Exterior color |
| main_image | String (URL) | Primary display image |
| gallery_images | Array of Strings (URLs) | Additional images |
| description_short | String | Card-level summary |
| description_long | Text | Full detail page content |
| status | Enum | active / inactive |
| vehicle_type | Enum | rental / sale |
| created_at | Timestamp | Auto-generated |
| updated_at | Timestamp | Auto-generated |

---

## Step 2 — Rental-Specific Fields

| Field | Type | Notes |
|-------|------|-------|
| price_per_day | Decimal | Daily rental rate |
| price_per_week | Decimal | Weekly rental rate (optional) |
| minimum_age | Integer | Minimum driver age |
| security_deposit | Decimal | Required deposit amount |
| availability_status | Enum | available / rented / maintenance |
| rental_terms | Text | Terms and conditions |

---

## Step 3 — Sale-Specific Fields

| Field | Type | Notes |
|-------|------|-------|
| sale_price | Decimal | Listing price |
| negotiable | Boolean | Price negotiable flag |
| condition | Enum | new / used |
| financing_available | Boolean | Financing option flag |
| warranty_info | Text | Warranty details |

---

## Step 4 — Relational Extensions (Future Direction)

Listed for awareness only. No ERD or implementation.

- **Brands table** — Normalize brand data (logo, name, slug) for filtering and brand page
- **Vehicle Categories table** — Sedan, SUV, Microbus, Luxury, etc.
- **Transmission enum table** — Standardized transmission types
- **Fuel enum table** — Standardized fuel types
- **Media table** — Centralized media storage with vehicle FK
- **Availability Calendar table** — Date-based availability for rental vehicles

---

## Step 5 — Risk & Complexity Analysis

| Dimension | Assessment | Notes |
|-----------|------------|-------|
| Complexity Level | Medium-High | Dual-purpose entity (rental + sale) requires careful field separation |
| Risk if Mixed | High | Rental fields on sale vehicles (and vice versa) causes data confusion and UI bugs |
| Admin UX Risk | Medium | Single vehicle form must conditionally show/hide fields based on vehicle_type |
| Filtering Risk | Medium | Homepage, listing pages, and search must correctly filter by vehicle_type |
| SEO Considerations | Medium | Separate URL structures for /rentals/[slug] vs /for-sale/[slug] recommended |
| Migration Risk | Low | No existing database — greenfield schema design |

---

## Confirmation

- [x] No code modified
- [x] No dependencies added
- [x] No database, schema, or backend work
- [x] Schema planning documentation only
