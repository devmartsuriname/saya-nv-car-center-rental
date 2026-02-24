# Content Seeding Plan — Saya Car Center and Rental

**Last Updated**: 2026-02-24
**Status**: Blueprint complete — awaiting client input for content gaps
**Scope**: Documentation + static JSON placeholders only. NO database work. NO UI changes.

---

## Seeding Blueprint (Mapped to Gorent HomeOne Sections)

| # | Section | Content Source | Status |
|---|---------|--------------|--------|
| 1 | Header | Menu items for HomeOne only | ✅ Ready (static) |
| 2 | Hero (BannerOne) | Company tagline + CTA copy | ⚠️ NEEDS CLIENT INPUT (no tagline found publicly) |
| 3 | SlidingTextOne | Marquee text | ✅ Ready (use trading name / services) |
| 4 | ServiceOne | Car Sales, Car Rental, + TBD | ⚠️ Partial (needs detailed service descriptions) |
| 5 | AboutOne | Company intro text | ⚠️ NEEDS CLIENT INPUT |
| 6 | ProcessOne | How it works steps | ⚠️ NEEDS CLIENT INPUT (process/steps copy) |
| 7 | Booking | Quick request form labels | ✅ Ready (static labels, no backend) |
| 8 | WhychooseOne | Value propositions | ⚠️ NEEDS CLIENT INPUT |
| 9 | ListingOne | Vehicle listings | ⚠️ NEEDS CLIENT INPUT (real inventory) |
| 10 | VideoOne | Promo video | ⚠️ NEEDS CLIENT INPUT (video asset) |
| 11 | PricingOne | Rental pricing tiers | ⚠️ NEEDS CLIENT INPUT |
| 12 | TestimonialOne | Customer reviews | ⚠️ PLACEHOLDER (none found publicly) |
| 13 | FaqOne | FAQ content | ⚠️ NEEDS CLIENT INPUT |
| 14 | LetsTalk | CTA section copy | ⚠️ Partial (contact info ready, CTA copy needed) |
| 15 | TeamOne | Team members | ⚠️ NEEDS CLIENT INPUT |
| 16 | DownloadApp | App download links | ⚠️ NEEDS CLIENT INPUT (if applicable) |
| 17 | BrandOne | Partner/brand logos | ⚠️ NEEDS CLIENT INPUT |
| 18 | BlogOne | Blog posts | ⚠️ NEEDS CLIENT INPUT |
| 19 | GalleryHomeOne | Photo gallery | ⚠️ NEEDS CLIENT INPUT (real photos) |
| 20 | Footer | Contact + links + copyright | ✅ Ready |
| 21 | Contact Section | Verified contact block | ✅ Ready |

---

## Seed Data Map (Static JSON Placeholders)

Four JSON files planned under `/src/apps/public/data/`:

### 1. `company.json` — Contact Details, Hours, Social Links

```json
{
  "legalName": "Saya N.V.",
  "tradingName": "Saya Car Center and Rental",
  "address": {
    "street": "Hofstraat #121",
    "city": "Paramaribo",
    "country": "Suriname"
  },
  "contact": {
    "landline": "52 15 33",
    "mobile": "+597 740-3744",
    "whatsapp": "+597 8651510",
    "whatsappLink": "https://wa.me/5978651510",
    "email": "sales@sayanv.com"
  },
  "website": {
    "primary": "https://sayanv.com",
    "legacy": "https://sayanv.sr"
  },
  "social": {
    "facebook": "https://facebook.com/SayanvOfficial",
    "instagram": "https://instagram.com/sayanv_official"
  },
  "hours": {
    "monFri": "08:00 – 17:00",
    "sat": "08:00 – 15:00",
    "sun": "Closed"
  },
  "copyright": "© 2026 Saya N.V. All rights reserved."
}
```

**Status**: ✅ Ready (all data verified)

### 2. `services.json` — Service Cards

```json
[
  {
    "id": "car-sales",
    "title": "Car Sales",
    "description": "PLACEHOLDER — Needs client input on sales offerings",
    "icon": "TBD"
  },
  {
    "id": "car-rental",
    "title": "Car Rental",
    "description": "PLACEHOLDER — Needs client input on rental terms and options",
    "icon": "TBD"
  }
]
```

**Status**: ⚠️ Partial — titles confirmed, descriptions + icons need client input

### 3. `fleet_placeholders.json` — Vehicle Entries

```json
[]
```

**Status**: ⚠️ Empty — NEEDS CLIENT INPUT for real vehicle inventory (make, model, year, price, images)

### 4. `testimonials_placeholders.json` — Customer Reviews

```json
[]
```

**Status**: ⚠️ Empty — NEEDS CLIENT INPUT (no testimonials found publicly)

---

## Future Supabase Table Mapping (Reference Only — NO DB WORK NOW)

| JSON File | Future Table | Notes |
|-----------|-------------|-------|
| company.json | `company_settings` | Single-row config table |
| services.json | `services` | Service catalog |
| fleet_placeholders.json | `vehicles` | Vehicle inventory |
| testimonials_placeholders.json | `testimonials` | Customer reviews |

---

## Client Input Required (Comprehensive List)

### Priority 1 — Needed for Hero + Core Sections
- [ ] Company tagline / slogan
- [ ] Hero CTA button text
- [ ] About Us paragraph (2–3 sentences)
- [ ] Service descriptions (Car Sales: what's included? Car Rental: terms?)

### Priority 2 — Needed for Content Sections
- [ ] Vehicle inventory details (make, model, year, price, images)
- [ ] Rental pricing tiers
- [ ] Customer testimonials (name, review, rating)
- [ ] FAQ content (common questions + answers)
- [ ] Team member info (name, role, photo)

### Priority 3 — Needed for Media + Branding
- [ ] Logo files (high-res, light + dark variants)
- [ ] Primary brand colors (hex/HSL)
- [ ] Gallery images (real photos of location, vehicles, team)
- [ ] Promo video (if available)
- [ ] Partner/brand logos (car brands they sell/rent)

### Priority 4 — Optional
- [ ] Business hours confirmation
- [ ] Blog post content (if applicable)
- [ ] Mobile app download links (if applicable)

---

## Notes

- These JSON files are NOT created yet — they are planned for a future task
- JSON files will live under `src/apps/public/data/` alongside existing static data
- No database, no Supabase, no backend work in this phase
- All placeholder content is clearly flagged for client review
