# SAYA CAR CENTER & RENTAL — Master PRD v1.0

**Version**: 1.0
**Status**: Draft – Governance Structured
**Date**: 2026-02-22

---

## 1. Project Overview

### 1.1 Objective

Develop a unified platform consisting of:

- **Public Frontend Website** (Car Rental + Car Sales)
- **Darkone-based Admin Dashboard** (1:1 UI governance)

The system must support:

- Vehicle Rentals
- Vehicle Sales
- Lead Capture (Quick Request CRM)
- Blog Management
- Dynamic Frontend Content Management

This PRD defines functional logic, roles, lifecycle rules, validation rules, and data governance before database implementation.

---

## 2. System Architecture Scope

### 2.1 Core System Domains

| # | Domain |
|---|--------|
| 1 | Frontend Content Domain |
| 2 | Vehicle Domain (Rental + Sale) |
| 3 | CRM Domain (Quick Requests) |
| 4 | Blog Domain |
| 5 | Global Site Configuration Domain |
| 6 | Admin Access & Governance Domain |

---

## 3. User Roles & Permissions

### 3.1 Roles

| Role | Permissions |
|------|------------|
| **Super Admin** | Full CRUD access to all modules. Can manage site settings, publish/unpublish vehicles, manage blog and CRM. |
| **Content Manager** | Manage frontend content modules and blog posts. Cannot modify site settings or access system configuration. |
| **Sales Manager** | Manage Sales Listings. View Quick Requests. Cannot modify Rental listings. |
| **Rental Manager** | Manage Rental Listings. Update availability. View Quick Requests. Cannot modify Sales listings. |

---

## 4. Vehicle Domain (Core Engine)

### 4.1 Vehicle Types

- Rental
- Sale

Each vehicle must be assigned exactly one `vehicle_type`.

### 4.2 Vehicle Status Lifecycle

```
Draft → Active → Inactive → Archived
```

**Rules:**

- Only **Active** vehicles appear on frontend
- **Draft** vehicles are admin-only
- **Archived** vehicles are hidden from listings

### 4.3 Core Vehicle Fields

| Field | Notes |
|-------|-------|
| Title | Display name |
| Slug | Auto-generated, unique |
| Brand | e.g., Tesla, Honda, Audi |
| Model | e.g., Model 3, Civic |
| Year | Model year |
| Transmission | Manual / Automatic / CVT |
| Fuel Type | Gasoline / Diesel / Electric / Hybrid |
| Mileage | e.g., "28 MPG" |
| Seats | Passenger capacity |
| Doors | Number of doors |
| Color | Exterior color |
| Main Image | Primary display image |
| Gallery Images | Additional images |
| Short Description | Card-level summary |
| Long Description | Full detail page content |
| Status | Draft / Active / Inactive / Archived |
| Vehicle Type | Rental / Sale |

### 4.4 Rental-Specific Fields

| Field | Notes |
|-------|-------|
| Price Per Day | Daily rental rate |
| Price Per Week | Optional weekly rate |
| Minimum Driver Age | Required minimum age |
| Security Deposit | Required deposit amount |
| Availability Status | Available / Rented / Maintenance |
| Rental Terms | Terms and conditions |

### 4.5 Sale-Specific Fields

| Field | Notes |
|-------|-------|
| Sale Price | Listing price |
| Negotiable | Boolean flag |
| Condition | New / Used |
| Financing Available | Boolean flag |
| Warranty Information | Warranty details |

### 4.6 Business Logic Rules

- Rental vehicles **cannot** have `sale_price`
- Sale vehicles **cannot** have rental pricing fields
- `availability_status` only applies to Rental type
- Filtering on frontend must strictly separate Rental and Sale

---

## 5. CRM Domain — Quick Request

### 5.1 Purpose

Capture incoming leads from homepage form.

### 5.2 Fields Captured

| Field | Notes |
|-------|-------|
| Name | Submitter name |
| Phone | Contact number |
| Selected Vehicle | Vehicle of interest |
| Message | Free text message |
| Submission Timestamp | Auto-generated |

### 5.3 Lead Status Lifecycle

```
New → Contacted → Closed
```

### 5.4 CRM Rules

- All submissions stored
- Admin can filter by status
- Optional WhatsApp auto-redirect allowed
- No deletion without Super Admin permission

---

## 6. Blog Domain

### 6.1 Blog Post Fields

| Field | Notes |
|-------|-------|
| Title | Post title |
| Slug | URL-friendly, unique |
| Featured Image | Primary image |
| Short Excerpt | Summary text |
| Full Content | Rich text body |
| Category | Post category |
| Tags | Post tags |
| Publish Status | Draft / Published |
| SEO Title | Meta title |
| SEO Description | Meta description |

### 6.2 Rules

- Only **Published** posts visible on frontend
- **Draft** posts admin-only
- Slug must be unique

---

## 7. Frontend Content Modules

### 7.1 Managed Sections

| # | Section |
|---|---------|
| 1 | Hero Slides |
| 2 | Services |
| 3 | About Content |
| 4 | Why Choose |
| 5 | Testimonials |
| 6 | Gallery |
| 7 | Brand Partners |
| 8 | CTA Banner |

### 7.2 Content Rules

- Ordering supported where relevant
- Media uploads validated
- Max 6 gallery items displayed on homepage

---

## 8. Site Settings Domain

### 8.1 Global Settings

| Setting | Notes |
|---------|-------|
| Logo | Site logo |
| Header Navigation | Nav links |
| Footer Content | Footer text and links |
| Sticky Header Config | Sticky header behavior |
| Contact Information | Phone, email, address |

### 8.2 Rules

- Single record configuration
- Accessible by Super Admin only

---

## 9. SEO & URL Structure

### 9.1 Vehicle URLs

```
/rentals/[slug]
/for-sale/[slug]
```

### 9.2 Blog URLs

```
/blog/[slug]
```

### 9.3 Slug Rules

- Lowercase
- Hyphen-separated
- Unique per domain

---

## 10. Admin UX Flow Requirements

### 10.1 Vehicle Creation Flow

```
Create → Save as Draft → Review → Activate → Visible on Frontend
```

### 10.2 Quick Request Handling Flow

```
New → Review → Contact Customer → Mark Contacted → Close
```

### 10.3 Blog Flow

```
Draft → Edit → Publish → Update → Unpublish (optional)
```

---

## 11. Validation Rules

- Required fields enforced
- Numeric pricing validation
- Image type restrictions
- Slug uniqueness enforcement
- Conditional fields based on `vehicle_type`

---

## 12. Performance & Scalability

- Lazy load vehicle listings
- Pagination required
- Image optimization required
- No full-table frontend fetches

---

## 13. Out of Scope (Phase 1)

- Online payments
- Booking calendar system
- User accounts for customers
- Mobile app

---

## 14. Next Phase Outputs

From this Master PRD we will generate:

| Phase | Output |
|-------|--------|
| Phase 5 | ERD (Entity Relationship Diagram) |
| Phase 6 | Database Schema Definition |
| Phase 7 | RLS & Permission Matrix |
| Phase 8 | Admin Implementation Plan |

---

**END OF MASTER PRD v1.0**
