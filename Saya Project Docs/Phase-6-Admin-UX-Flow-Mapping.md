# Phase 6 — Admin UX Flow Mapping

**Version**: 1.0
**Status**: Draft — Documentation Only (No Implementation)

---

## 0. Governance

This phase defines admin workflows and lifecycle behavior.

- No UI implementation, no code changes, no database work.
- Darkone UI must remain 1:1 — this document only maps flows, screens, actions, validations, and edge cases.

---

## 1. Admin Information Architecture (Sidebar)

### 1.1 Primary Navigation

| Module | Sub-Items |
|---|---|
| **Frontend** | Hero Slides, Services, About Content, Why Choose, Testimonials, Gallery, Brand Partners, CTA Banner |
| **Vehicles** | Rental Listings, Sales Listings |
| **CRM** | Quick Requests |
| **Blog** | Posts, Categories, Tags |
| **Site Settings** | Global Settings (Header / Footer / Sticky / Contact) |

---

## 2. Global UX Principles (Darkone 1:1)

### 2.1 Page vs XL Modal Rule

**Full Page** for complex entities (many fields, multi-step edits):

- Vehicles (Rental)
- Vehicles (Sales)
- Blog Posts
- About Content (if long body + progress + images)
- Site Settings

**XL Modal** for lightweight CRUD where list → quick edit is primary:

- Hero Slides
- Services
- Why Choose
- Testimonials
- Gallery Items
- Brand Partners
- CTA Banner
- Blog Categories, Tags

### 2.2 Standard Actions

- Create, Edit, Activate/Deactivate, Archive
- Bulk actions only where Darkone provides a 1:1 pattern

### 2.3 Standard Status Display

- Use status badges (Darkone)
- Default filter: show Active first

### 2.4 Media Handling

- Media selection uses a Darkone-compatible media picker pattern (exact component selection deferred to implementation, but flow must be defined now).

---

## 3. Role-Based Access Flows (RBAC)

### 3.1 Roles

| Role | Scope |
|---|---|
| Super Admin | All |
| Content Manager | Frontend + Blog |
| Sales Manager | Sales Listings + CRM read |
| Rental Manager | Rental Listings + CRM read |

### 3.2 Role Permissions Matrix (UX-Level)

| Module | Super Admin | Content Manager | Sales Manager | Rental Manager |
|---|---|---|---|---|
| Frontend | Full | Full | No | No |
| Vehicles — Rental | Full | No | View only (optional) or No¹ | Full |
| Vehicles — Sales | Full | No | Full | View only (optional) or No¹ |
| CRM — Quick Requests | Full | View only (optional) | View + Update status | View + Update status |
| Blog | Full | Full | No | No |
| Site Settings | Full | No | No | No |

> ¹ Decision deferred to Phase 7 (RLS policy definition).

---

## 4. Workflow Maps (Module by Module)

### 4.1 Frontend Modules (Generic Pattern)

#### 4.1.1 List View

- Table/Listing (Darkone)
- **Columns**: Title/Name, Status, Sort Order (where relevant), Updated
- **Filters**: Active/Inactive
- **Search**: basic text search

#### 4.1.2 Create/Edit Flow (XL Modal)

1. Open XL Modal: Create or Edit
2. Validate required fields
3. Optional media selection
4. Save
5. Toast confirmation
6. Return to list with updated row

#### 4.1.3 Ordering Flow

- Drag/drop ordering only if Darkone provides it 1:1
- Otherwise: numeric `sort_order` input + "Save order" action

#### 4.1.4 Activation

- Toggle Active/Inactive
- Confirm dialog if required by Darkone pattern

---

### 4.2 Vehicles — Rental Listings (Full Page)

#### 4.2.1 Primary User Goal

Maintain rental fleet listings with correct pricing + availability.

#### 4.2.2 List View

- Default tab: Rental Listings
- **Filters**:
  - Status: Draft / Active / Inactive / Archived
  - Availability: Available / Rented / Maintenance
  - Brand/Model (optional)
- **Search**: Title, Brand, Model
- **Columns**: Title, Status, Availability, Price/Day, Updated

#### 4.2.3 Create Rental Vehicle Flow

1. Click "Add Rental Vehicle"
2. Open Full Page form (Create)
3. Enter Core Vehicle fields
4. Enter Rental Details fields
5. Upload/select Main Image
6. Add Gallery images (ordered)
7. Save as Draft (default)
8. Optional: Activate (if all required fields valid)
9. Confirmation + redirect to Detail view

#### 4.2.4 Edit Flow

- Full Page form
- **Sections**: Basic Info, Specs, Pricing & Terms, Availability, Media, SEO (slug, optional)

#### 4.2.5 Status Transitions

| From | To | Rule |
|---|---|---|
| Draft | Active | Requires validations pass |
| Active | Inactive | Allowed |
| Inactive | Active | Allowed |
| Any | Archived | Allowed (confirm) |

#### 4.2.6 Availability Update Flow

- Quick change via list (if Darkone supports inline) OR Edit screen section "Availability"
- Changing to "Rented" should NOT hide listing unless status also changed

#### 4.2.7 Validation Rules (UX)

- **Required**: title, slug (auto), year, main image
- **Required rental**: price_per_day, availability_status
- Block Activate if missing required

#### 4.2.8 Edge Cases

- Vehicle created as rental but missing `rental_details` → must be prevented
- Deleting media asset referenced by vehicle → block or warn (implementation decision)

---

### 4.3 Vehicles — Sales Listings (Full Page)

#### 4.3.1 Primary User Goal

Maintain vehicles for sale with correct pricing and condition.

#### 4.3.2 List View

- **Filters**: Status (Draft/Active/Inactive/Archived), Condition (New/Used), Financing (Yes/No)
- **Columns**: Title, Status, Sale Price, Condition, Updated

#### 4.3.3 Create Sales Vehicle Flow

1. Click "Add Sales Vehicle"
2. Full Page form
3. Core fields
4. Sale details
5. Media
6. Save Draft
7. Activate (optional)

#### 4.3.4 Status Transitions

Same as Rental (see §4.2.5).

#### 4.3.5 Validation Rules (UX)

- **Required**: title, slug, year, main image
- **Required sale**: sale_price, condition

#### 4.3.6 Edge Cases

- Sales created without `sale_details` → prevented

---

### 4.4 CRM — Quick Requests (Full Page + Optional Modal View)

#### 4.4.1 List View

- **Filters**: New / Contacted / Closed
- **Columns**: Name, Phone, Status, Selected Vehicle (if any), Created At

#### 4.4.2 Lead Handling Flow

1. Open lead detail (page or XL modal)
2. Review message + selected vehicle
3. **Actions**:
   - Mark Contacted
   - Mark Closed
   - Add internal note (optional future)
4. Optional: Click WhatsApp action (opens external link; not stored unless audit added later)

#### 4.4.3 Validation

- Name required
- Phone required

#### 4.4.4 Edge Cases

- Quick request without vehicle selection → allowed

---

### 4.5 Blog — Posts (Full Page)

#### 4.5.1 List View

- **Filters**: Draft / Published
- **Columns**: Title, Status, Category, Published At, Updated

#### 4.5.2 Create Post Flow

1. Create Post
2. Draft by default
3. Add title, content, excerpt
4. Assign category, tags
5. Add featured image
6. Set SEO title/description
7. Publish → sets `published_at`

#### 4.5.3 Edit & Unpublish

- Edit allowed
- Unpublish returns status to Draft (`published_at` remains or clears — decision in Phase 7)

---

### 4.6 Blog — Categories / Tags (XL Modal)

- Create/Edit in XL Modal
- Slug unique
- Sort order for categories optional

---

### 4.7 Site Settings (Full Page)

#### 4.7.1 Purpose

Manage global configuration.

#### 4.7.2 Flow

1. Open Site Settings
2. Single record edit
3. **Sections**: Branding (logo), Header Navigation, Footer, Contact Info, Social Links, Sticky Header
4. Save

#### 4.7.3 Guardrails

- Super Admin only
- Confirm dialog for destructive changes (e.g., clearing nav/footer)

---

## 5. Cross-Module Integrations

### 5.1 Frontend Rendering Rules (Data)

- Frontend shows only **Active** content
- Homepage gallery displays **6 items** (UI rule)
- Vehicle detail pages split by type:
  - `/rentals/:slug`
  - `/for-sale/:slug`

### 5.2 CRM Vehicle Linking

- Quick request may reference a `vehicle_id`
- If vehicle archived, CRM reference remains readable

---

## 6. Audit & Logging (Documentation Only)

**MVP**: no audit logging.

**Future direction**:

- Status change logs for vehicles
- Lead status change logs

---

## 7. Outputs / Next Phases

| Phase | Focus |
|---|---|
| Phase 7 | RLS & Permission Matrix — translate role flows into database-level policies |
| Phase 8 | Implementation Plan — phase gating for Supabase setup, storage buckets, CRUD modules, and frontend integration |

---

**STOP — Await further instructions.**
