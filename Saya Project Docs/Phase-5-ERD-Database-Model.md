# Phase 5 — ERD & Database Modeling (Option B: Professional Normalization)

**Version**: 1.0
**Status**: Draft — Documentation Only (No Implementation)

---

## 0. Governance

This document defines the target relational model.

- No SQL migrations, no Supabase changes, no code changes in this phase.
- The model is sized for a professional MVP with clean separation and room to scale.

---

## 1. ERD Overview (Entities)

### Core Domains

| Domain | Description |
|---|---|
| Vehicles | Rental + Sale |
| CRM | Quick Requests |
| Blog | Posts, Categories, Tags |
| Frontend Content Modules | Hero, Services, About, Why Choose, Testimonials, Gallery, Brands, CTA |
| Site Settings | Global configuration |
| Media / Assets | Central media registry |

---

## 2. Key Design Decisions (Option B)

### 2.1 Vehicle Type Separation

- Single `vehicles` table with a strict `vehicle_type` discriminator.
- Type-specific tables:
  - `vehicle_rental_details`
  - `vehicle_sale_details`
- Enforced 1:1 relationship between `vehicles` and exactly one of the type-detail tables.

### 2.2 Media Strategy

- `media_assets` as a first-class table.
- Vehicles reference media via join tables:
  - `vehicle_media` (gallery)
- Blog uses `blog_posts.featured_media_id` and optional `blog_post_media`.
- Frontend modules can reference `media_assets` where needed.

### 2.3 Slugs

Slugs are unique per domain:

- `vehicles.slug` unique
- `blog_posts.slug` unique
- `blog_categories.slug` unique (optional)

### 2.4 Ordering

Content modules that require ordering have `sort_order`.

---

## 3. Data Types & Enums (Logical)

### 3.1 Enums

> Implementation may be Postgres ENUM or TEXT + CHECK.

| Enum | Values |
|---|---|
| `vehicle_type` | `rental` \| `sale` |
| `record_status` | `draft` \| `active` \| `inactive` \| `archived` |
| `rental_availability_status` | `available` \| `rented` \| `maintenance` |
| `lead_status` | `new` \| `contacted` \| `closed` |
| `blog_status` | `draft` \| `published` |
| `vehicle_condition` | `new` \| `used` |

---

## 4. Tables (Detailed)

### 4.1 media_assets

**Purpose**: Central media registry for images and future media.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `storage_provider` | text | e.g., supabase |
| `bucket` | text | |
| `path` | text | |
| `public_url` | text | |
| `mime_type` | text | |
| `file_size` | bigint | |
| `width` | int | nullable |
| `height` | int | nullable |
| `alt_text` | text | nullable |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

**Indexes**: `(bucket, path)` unique

---

### 4.2 vehicles

**Purpose**: Canonical vehicle record shared by both rental and sale.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | |
| `slug` | text | unique |
| `brand` | text | can normalize later |
| `model` | text | |
| `year` | int | |
| `transmission` | text | |
| `fuel_type` | text | |
| `mileage` | int | nullable |
| `seats` | int | nullable |
| `doors` | int | nullable |
| `color` | text | nullable |
| `description_short` | text | nullable |
| `description_long` | text | nullable |
| `main_media_id` | uuid | FK → media_assets.id, nullable |
| `status` | record_status | |
| `vehicle_type` | vehicle_type | |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

**Indexes**: `slug` unique, `(vehicle_type, status)`, `(brand, model)`, `year`

---

### 4.3 vehicle_rental_details

**Purpose**: Rental-only fields (1:1 with vehicles where vehicle_type = rental).

| Field | Type | Notes |
|---|---|---|
| `vehicle_id` | uuid | PK, FK → vehicles.id |
| `price_per_day` | numeric(10,2) | |
| `price_per_week` | numeric(10,2) | nullable |
| `minimum_driver_age` | int | nullable |
| `security_deposit` | numeric(10,2) | nullable |
| `availability_status` | rental_availability_status | |
| `rental_terms` | text | nullable |
| `updated_at` | timestamptz | |

**Constraints**: `vehicle_id` must reference a vehicle with `vehicle_type = rental` (enforced via trigger or application rule; documented for Phase 6/7).

---

### 4.4 vehicle_sale_details

**Purpose**: Sale-only fields (1:1 with vehicles where vehicle_type = sale).

| Field | Type | Notes |
|---|---|---|
| `vehicle_id` | uuid | PK, FK → vehicles.id |
| `sale_price` | numeric(12,2) | |
| `negotiable` | boolean | default false |
| `condition` | vehicle_condition | |
| `financing_available` | boolean | default false |
| `warranty_info` | text | nullable |
| `updated_at` | timestamptz | |

**Constraints**: `vehicle_id` must reference a vehicle with `vehicle_type = sale`.

---

### 4.5 vehicle_media

**Purpose**: Vehicle gallery (ordered, many-to-many vehicle ↔ media).

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `vehicle_id` | uuid | FK → vehicles.id |
| `media_id` | uuid | FK → media_assets.id |
| `sort_order` | int | default 0 |
| `created_at` | timestamptz | |

**Indexes**: `(vehicle_id, sort_order)`, `(vehicle_id, media_id)` unique

---

### 4.6 quick_requests

**Purpose**: CRM lead capture from Quick Request form.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `name` | text | |
| `phone` | text | |
| `message` | text | nullable |
| `lead_status` | lead_status | default 'new' |
| `vehicle_id` | uuid | FK → vehicles.id, nullable |
| `source` | text | nullable, e.g., home1_quick_request |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

**Indexes**: `(lead_status, created_at)`, `vehicle_id`

---

### 4.7 blog_categories

**Purpose**: Optional category taxonomy.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `name` | text | |
| `slug` | text | unique |
| `sort_order` | int | default 0 |
| `created_at` | timestamptz | |

---

### 4.8 blog_tags

**Purpose**: Tag taxonomy.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `name` | text | |
| `slug` | text | unique |
| `created_at` | timestamptz | |

---

### 4.9 blog_posts

**Purpose**: Blog content.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | |
| `slug` | text | unique |
| `excerpt` | text | nullable |
| `content` | text | |
| `status` | blog_status | |
| `featured_media_id` | uuid | FK → media_assets.id, nullable |
| `category_id` | uuid | FK → blog_categories.id, nullable |
| `seo_title` | text | nullable |
| `seo_description` | text | nullable |
| `published_at` | timestamptz | nullable |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

**Indexes**: `slug` unique, `(status, published_at)`, `category_id`

---

### 4.10 blog_post_tags

**Purpose**: Many-to-many blog posts ↔ tags.

| Field | Type | Notes |
|---|---|---|
| `post_id` | uuid | FK → blog_posts.id |
| `tag_id` | uuid | FK → blog_tags.id |

**Primary Key**: `(post_id, tag_id)`

---

### 4.11 blog_post_media (optional)

**Purpose**: Additional media for blog posts beyond featured image.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `post_id` | uuid | FK → blog_posts.id |
| `media_id` | uuid | FK → media_assets.id |
| `sort_order` | int | default 0 |

**Indexes**: `(post_id, sort_order)`

---

## 5. Frontend Content Module Tables

### 5.1 site_settings

**Purpose**: Single-record global configuration.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK — single row |
| `site_name` | text | nullable |
| `logo_media_id` | uuid | FK → media_assets.id, nullable |
| `contact_phone` | text | nullable |
| `contact_whatsapp` | text | nullable |
| `contact_email` | text | nullable |
| `address` | text | nullable |
| `social_facebook` | text | nullable |
| `social_instagram` | text | nullable |
| `header_nav_json` | jsonb | nullable |
| `footer_json` | jsonb | nullable |
| `sticky_header_enabled` | boolean | default true |
| `updated_at` | timestamptz | |

**Notes**: JSON fields keep MVP flexible for header/footer links.

---

### 5.2 hero_slides

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | nullable |
| `subtitle` | text | nullable |
| `cta_label` | text | nullable |
| `cta_href` | text | nullable |
| `background_media_id` | uuid | FK → media_assets.id, nullable |
| `video_url` | text | nullable — if video popup |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |
| `created_at` | timestamptz | |

**Indexes**: `(is_active, sort_order)`

---

### 5.3 services

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | |
| `description` | text | nullable |
| `icon_key` | text | nullable — maps to Darkone icon set |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |

---

### 5.4 about_content

**Purpose**: Single-record About section with progress bars.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK — single row |
| `heading` | text | nullable |
| `body` | text | nullable |
| `phone` | text | nullable |
| `image_primary_media_id` | uuid | FK → media_assets.id, nullable |
| `image_secondary_media_id` | uuid | FK → media_assets.id, nullable |
| `experience_label` | text | nullable |
| `experience_value` | int | nullable — optional count-up within About |
| `updated_at` | timestamptz | |

---

### 5.5 about_progress_items

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `about_id` | uuid | FK → about_content.id |
| `label` | text | |
| `value_percent` | int | 0..100 |
| `sort_order` | int | default 0 |

**Indexes**: `(about_id, sort_order)`

---

### 5.6 why_choose_items

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | |
| `description` | text | nullable |
| `icon_key` | text | nullable |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |

---

### 5.7 testimonials

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `customer_name` | text | |
| `rating` | int | nullable, 1..5 |
| `quote` | text | |
| `customer_media_id` | uuid | FK → media_assets.id, nullable |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |

---

### 5.8 gallery_items

**Purpose**: Homepage gallery; homepage display limited to 6 by UI rule.

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `title` | text | nullable |
| `media_id` | uuid | FK → media_assets.id |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |

**Indexes**: `(is_active, sort_order)`

---

### 5.9 brand_partners

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `name` | text | |
| `logo_media_id` | uuid | FK → media_assets.id |
| `sort_order` | int | default 0 |
| `is_active` | boolean | default true |

---

### 5.10 cta_banners

| Field | Type | Notes |
|---|---|---|
| `id` | uuid | PK |
| `heading` | text | |
| `subheading` | text | nullable |
| `primary_cta_label` | text | nullable |
| `primary_cta_href` | text | nullable |
| `secondary_cta_label` | text | nullable |
| `secondary_cta_href` | text | nullable |
| `background_media_id` | uuid | FK → media_assets.id, nullable |
| `is_active` | boolean | default true |
| `updated_at` | timestamptz | |

**Notes**: Either single active record or highest sort_order.

---

## 6. Relationships (Text ERD)

### Vehicles

- `vehicles` (1) — (1) `vehicle_rental_details` (when vehicle_type=rental)
- `vehicles` (1) — (1) `vehicle_sale_details` (when vehicle_type=sale)
- `vehicles` (1) — (many) `vehicle_media`
- `media_assets` (1) — (many) `vehicle_media`

### CRM

- `quick_requests` (many) — (0/1) `vehicles`

### Blog

- `blog_posts` (many) — (0/1) `blog_categories`
- `blog_posts` (many) — (many) `blog_tags` via `blog_post_tags`
- `blog_posts` (1) — (many) `blog_post_media` (optional)
- `blog_posts` (0/1) — (1) `media_assets` (featured)

### Frontend Modules

- `hero_slides` (many) — (0/1) `media_assets`
- `services` (many)
- `about_content` (1) — (many) `about_progress_items`
- `testimonials` (many) — (0/1) `media_assets`
- `gallery_items` (many) — (1) `media_assets`
- `brand_partners` (many) — (1) `media_assets`
- `cta_banners` (many/1 active) — (0/1) `media_assets`
- `site_settings` (1) — (0/1) `media_assets` (logo)

---

## 7. Indexing & Query Strategy (MVP)

| Query | Index |
|---|---|
| Homepage vehicles: `status=active`, `vehicle_type in (...)`, order by `updated_at desc` | `(vehicle_type, status)` |
| Quick Requests dashboard: filter by `lead_status` | `(lead_status, created_at)` |
| Blog public listing: `status=published`, order by `published_at desc` | `(status, published_at)` |
| Frontend modules: order by `sort_order`, filter `is_active` | `(is_active, sort_order)` where applicable |

---

## 8. Data Validation Rules (DB-Level Targets)

### Vehicles

- `slug` unique, non-empty
- `year` reasonable range (enforced in app or DB CHECK)
- `vehicle_type` required
- Rental must have `vehicle_rental_details` row
- Sale must have `vehicle_sale_details` row

### Quick Requests

- `name` required
- `phone` required

### Gallery

- Homepage display limited to 6 by UI rule (`GalleryHomeOne` wrapper) — data can exceed 6

---

## 9. Migration / Implementation Notes (For Phase 6+)

When implementing in Postgres/Supabase:

- Consider ENUMs vs TEXT + CHECK constraints
- Decide trigger-based enforcement for matching `vehicle_type` ↔ detail table
- RLS policy matrix will be defined in Phase 7
- Audit logging can be added later if required

---

## 10. Deliverable Checklist

- [x] Tables and fields defined (21 tables)
- [x] Relationships and keys documented
- [x] Indexing strategy specified
- [x] Normalization level defined (Option B)
- [x] Data lifecycle aligned to Master PRD
- [ ] Implementation deferred to Phase 6+

---

**STOP — Await further instructions.**
