# Phase 11 — Static Seed Implementation Plan

## Overview

Create 4 static JSON seed files with verified company data and placeholders, then wire them into existing HomeOne sections. No layout, CSS, or template structure changes.

## Technical Challenge: Image Imports

The existing data files (listings, testimonials) use Vite image imports (`import listing1 from "../../assets/images/..."`). JSON files cannot contain module imports. The solution is a **thin TS adapter pattern**: JSON holds all text/metadata content, and existing TS data files are updated to merge JSON content with image imports. This preserves Vite's asset pipeline while sourcing content from JSON.

---

## Step 0: Restore Point

Create `Saya Project Docs/Restore Points/RP-Phase11-StaticSeed-20260224.md`

## Step 1: Create JSON Seed Files

### 1a. `src/apps/public/data/company.json`

Populated from verified `company-profile.md`:

- Legal name, trading name, address, all 3 phone numbers, email, website, social links, hours, copyright line

### 1b. `src/apps/public/data/services.json`

4 service entries matching existing `servicesOneData` structure (id, icon, title, description). Descriptions updated with `"PLACEHOLDER — NEEDS_CLIENT_INPUT"` flag to indicate they need real copy.

### 1c. `src/apps/public/data/fleet_placeholders.json`

6 placeholder vehicle entries with text metadata (brand, title, transmission, mileage, fuel, package, minAge, persons, pricePerDay). Each flagged `"_placeholder": true`. Image filenames referenced as strings (mapped to imports in the TS adapter).

### 1d. `src/apps/public/data/testimonials_placeholders.json`

6 placeholder testimonial entries with text content (name, role, text, rating). Each flagged `"_placeholder": true`. Image filenames referenced as strings.

## Step 2: Update Existing TS Data Files (Adapter Pattern)

### 2a. `src/apps/public/data/service/service.ts`

Import from `../services.json` and re-export as `servicesOneData`. Since services use CSS icon classes (not image imports), this is a direct mapping.

### 2b. `src/apps/public/data/listing/ListingData.ts`

Import from `../fleet_placeholders.json`. Keep existing image imports. Map JSON entries to `ListingItem[]` by matching image filenames to imported image modules.

### 2c. `src/apps/public/data/testimonials/testimonialsData.ts`

Import from `../testimonials_placeholders.json`. Keep existing image imports. Map JSON entries to `TestimonialItem[]` by matching image filenames to imported image modules.

## Step 3: Update Footer with Company Data

### 3a. `src/apps/public/sections/common/Footer.tsx`

Import `company.json` and replace hardcoded values:

- Address: "4140 Parker Rd..." replaced with "Hofstraat #121, Paramaribo, Suriname"
- Phone: "(219) 555-0114" replaced with "52 15 33"
- Email: "[gorent@gmail.com](mailto:gorent@gmail.com)" replaced with "[sales@sayanv.com](mailto:sales@sayanv.com)"
- Copyright: "Gorent" replaced with "Saya N.V."

No class name, layout, or structural changes.

## Step 4: Housekeeping Updates

- Update `Saya Project Docs/architecture.md` with Phase 11 note
- Update `Saya Project Docs/backend.md` with Phase 11 note

## Step 5: Build Verification

- Confirm build compiles
- Confirm no new console errors
- Confirm layout unchanged
- Confirm content now reads from JSON

---

## Files Created (6)

1. `Saya Project Docs/Restore Points/RP-Phase11-StaticSeed-20260224.md`
2. `src/apps/public/data/company.json`
3. `src/apps/public/data/services.json`
4. `src/apps/public/data/fleet_placeholders.json`
5. `src/apps/public/data/testimonials_placeholders.json`

## Files Modified (5)

1. `src/apps/public/data/service/service.ts` — import from services.json
2. `src/apps/public/data/listing/ListingData.ts` — import from fleet_placeholders.json
3. `src/apps/public/data/testimonials/testimonialsData.ts` — import from testimonials_placeholders.json
4. `src/apps/public/sections/common/Footer.tsx` — use company.json for contact/copyright
5. `Saya Project Docs/architecture.md` — Phase 11 note
6. `Saya Project Docs/backend.md` — Phase 11 note

Note: NOTE — PHASE 11 IS BLOCKED (NO DB YET / NO PLACEHOLDER-FIRST)

- We are NOT moving to database/Supabase yet.

- Priority is to complete FULL public-site parity first (all required pages/routes from the Gorent template) — currently only HomeOne is working.

- No demo content must remain on public pages. Replace with verified Saya NV copy/colors now, so we do not create double work later.

- Phase 11 (static seed JSON wiring) may only start AFTER:

  (1) All required public routes/pages render 1:1 (template parity), and

  (2) Saya NV brand colors + core company content are locked (no demo text),

  (3) CSS isolation is verified (admin assets never load on public routes).

- If any CSS mismatch remains (e.g., Booking form field styling), diagnose root cause (selector mismatch / missing CSS import / wrong input types / asset path) and fix — no guessing.  
  
What Is NOT Changed

- No CSS/SCSS modifications
- No template structure changes
- No new libraries
- No admin files touched
- No Supabase/database work
- No state management additions
- All existing class names preserved
- All existing component hierarchy preserved