

# Company Details Intake and Content Seeding Plan (Docs-Only)

## Objective
Create two documentation files with verified company details and a content seeding blueprint. No code changes, no database work, no UI modifications.

## Pre-Requisite
Create Restore Point: `RP-CompanyDetails-Intake-20260224` (documented in Saya Project Docs/Restore Points/)

---

## Deliverable 1: `/Saya Project Docs/company-profile.md`

### Verified Company Identity

| Field | Value | Source |
|-------|-------|--------|
| Legal Name | Saya N.V. | FB About |
| Trading Name | Saya Car Center and Rental | User-provided context |
| FB Category | Car dealership | FB About |
| Address | Hofstraat #121, Paramaribo, Suriname | FB About (confirmed) |
| Landline | 52 15 33 | User-provided |
| Mobile | +597 740-3744 | FB About |
| WhatsApp | +597 8651510 (wa.me/5978651510) | User-provided |
| Email | sales@sayanv.com | User-confirmed |
| Website (new) | sayanv.com | User-confirmed (project target) |
| Website (legacy) | sayanv.sr | FB About (currently unreachable) |
| Facebook | facebook.com/SayanvOfficial (21K followers) | FB About |
| Instagram | @sayanv_official | FB About |
| Hours | Mon-Fri 08:00-17:00, Sat 08:00-15:00, Sun Closed | User-provided (NEEDS CLIENT CONFIRMATION) |

### Services (High Confidence)
- Car Center (sales) -- inferred from FB "Car dealership" category
- Car Rental -- inferred from project name "Saya Car Center and Rental"
- Specific service details: NEEDS CLIENT INPUT

### Verification Notes Section
- Documents where each data point was sourced (FB vs Google vs user-provided)
- Lists all conflicts found and how they were resolved
- Flags items needing client confirmation

---

## Deliverable 2: `/Saya Project Docs/content-seeding-plan.md`

### Seeding Blueprint (Mapped to Gorent HomeOne Sections)

| Section | Content Source | Status |
|---------|--------------|--------|
| Header | Menu items for HomeOne only | Ready (static) |
| Hero | Company tagline + CTA copy | NEEDS CLIENT INPUT (no tagline found publicly) |
| Services Cards | Car Sales, Car Rental, + TBD | Partial (needs service descriptions) |
| About Snippet | Company intro text | NEEDS CLIENT INPUT |
| Quick Request Form | Labels only (no backend) | Ready (static) |
| Testimonials | None found publicly | PLACEHOLDER (flagged) |
| Contact Section | Verified contact block | Ready |
| Footer | Contact + links + copyright | Ready |

### Seed Data Map (Static JSON Placeholders)

Four JSON files to be created under `/src/apps/public/data/`:

1. **company.json** -- Contact details, hours, social links (all verified data above)
2. **services.json** -- Service cards with placeholder descriptions (flagged NEEDS CLIENT INPUT)
3. **fleet_placeholders.json** -- Empty/placeholder vehicle entries (NEEDS CLIENT INPUT for real inventory)
4. **testimonials_placeholders.json** -- Placeholder entries (NEEDS CLIENT INPUT, none found publicly)

These JSON files will later map to Supabase tables but remain static for now.

### "Client Input Required" List
- Company tagline / slogan
- Service descriptions (what exactly does Car Center offer? Maintenance? Parts?)
- About Us paragraph
- Vehicle inventory details
- Customer testimonials
- Business hours confirmation
- Logo files (high-res)
- Gallery images (real photos)
- Team member info (if applicable)

---

## Deliverable 3: Housekeeping Updates

- **architecture.md**: Add note: "No DB/Supabase work performed; content seeding is docs + static placeholders only."
- **backend.md**: Add note: "Company details intake is documentation-only. No backend changes."
- **Tasks.md**: Log this task completion

---

## Files Created/Modified (Total: 5)

1. `Saya Project Docs/Restore Points/RP-CompanyDetails-Intake-20260224.md` -- NEW (restore point)
2. `Saya Project Docs/company-profile.md` -- NEW (verified company details)
3. `Saya Project Docs/content-seeding-plan.md` -- NEW (seeding blueprint + JSON plan)
4. `Saya Project Docs/architecture.md` -- UPDATED (housekeeping note)
5. `Saya Project Docs/backend.md` -- UPDATED (housekeeping note)

No code files modified. No UI changes. No database work. No JSON files created yet (those are planned for a future task per the seeding plan).

---

## Governance Compliance
- No UI/layout changes
- No new frameworks
- No Supabase/database work
- Template parity untouched
- Restore point created before any changes
- All conflicts documented and resolved with user input
