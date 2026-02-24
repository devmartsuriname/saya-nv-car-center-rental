# Phase 10 -- Public Site Completion Plan

## Scope Summary

Implement all 10 inner pages linked from HomeOne's header/footer/CTA, add InnerLayout with routing, and replace demo contact info with verified Saya NV data. Brand colors remain unchanged until hex codes are provided.

---

## Pre-Requisite: Restore Point

Create `Saya Project Docs/Restore Points/RP-Phase10-PublicSiteCompletion-20260224.md` documenting all files to be created/modified.

---

## Critical Dependency: Missing Image Assets

The template's inner pages require image directories that do NOT exist in the project yet:

- `src/apps/public/assets/images/blog/` -- 27 images (blog cards, details, comments, sidebar posts)
- `src/apps/public/assets/images/team/` -- 23 images (driver photos, team tabs, driver detail)

These must be copied from `gorent-car-rental-react-js-template/src/assets/images/blog/` and `gorent-car-rental-react-js-template/src/assets/images/team/` respectively. Without these, inner pages will have broken images.

Additionally, some shape images used by inner page sections must be verified:

- `testimonial-two-shape-1.png`, `testimonial-two-shape-2.png` in `shapes/`

---

## Execution Batches

Due to the large scope (~60+ files to create/modify), this plan is split into 4 sequential batches. Each batch must compile before proceeding.

### Batch 1: Foundation (InnerLayout, Banner, Gallery, Data Files, Routes)

**New Files:**

1. `src/apps/public/pages/inner-layout/InnerLayout.tsx` -- Copied from template. Wraps inner pages with Header, Gallery, Footer, StrickyHeader. Uses `Outlet` from react-router-dom (v6 syntax, not v7).
2. `src/apps/public/sections/common/Banner.tsx` -- Copied from template. Simple breadcrumb banner. Uses `Link` from react-router-dom.
3. `src/apps/public/sections/common/Gallery.tsx` -- Copied from template. Full gallery Swiper (all items, not limited to 6 like HomeOne).
4. `src/apps/public/data/team/teamData.ts` -- Copied from template. Contains `teamButtonData`, `teamTabData`, `teamMembersTwo`, `teamData`, `driversData`.
5. `src/apps/public/data/team/teamType.ts` -- Copied from template.
6. `src/apps/public/data/blog/blogData.ts` -- Copied from template. Contains `blogData`, `blogStandardListData`.
7. `src/apps/public/data/blog/blogType.ts` -- Copied from template.
8. `src/apps/public/data/process/processData.ts` -- Copied from template. Contains `processSteps`, `pricingPlansThree`.
9. `src/apps/public/data/process/processType.ts` -- Copied from template.
10. `src/apps/public/data/faq/faqType.ts` -- Copied from template (if needed by any inner page).

**Modified Files:**

11. `src/App.tsx` -- Add `/inner/*` route tree with InnerLayout wrapping all inner page routes. All inner routes lazy-loaded.

**Key Routing Adaptations:**

- Template uses `react-router` v7 (`import { Link } from 'react-router'`). Project uses v6 (`import { Link } from 'react-router-dom'`). Every copied file must change imports accordingly.
- Template uses `<Outlet />` from `react-router`. Project must import from `react-router-dom`.
- Template router uses `createBrowserRouter`. Project uses `<Routes>/<Route>` pattern in App.tsx.

### Batch 2: Inner Page Components (Sections)

**New Section Files (copied 1:1 from template, adapted for v6 imports and correct data paths):**

12. `src/apps/public/sections/about/AboutInner.tsx`
13. `src/apps/public/sections/about/ListingInner.tsx`
14. `src/apps/public/sections/about/TeamInner.tsx`
15. `src/apps/public/sections/about/TestimonianInner.tsx`
16. `src/apps/public/sections/service/ServiceInner.tsx`
17. `src/apps/public/sections/service/ServiceInnerTwo.tsx`
18. `src/apps/public/sections/process/ProcessInner.tsx`
19. `src/apps/public/sections/booking/BookingInner.tsx`
20. `src/apps/public/sections/driver/DriverDetailsMain.tsx`
21. `src/apps/public/sections/contact/ContactMain.tsx`
22. `src/apps/public/sections/cars/CarsMain.tsx`
23. `src/apps/public/sections/cars/CarListVOneMain.tsx`
24. `src/apps/public/sections/cars/CarListVTwoMain.tsx`
25. `src/apps/public/sections/cars/CarListVThreeMain.tsx`
26. `src/apps/public/sections/cars/CarListingRight.tsx`
27. `src/apps/public/sections/car-list-single/CarListingSingleMain.tsx`
28. `src/apps/public/sections/car-list-single/ListingTop.tsx`
29. `src/apps/public/sections/car-list-single/ListingSliders.tsx`
30. `src/apps/public/sections/car-list-single/ListingBottomLeft.tsx`
31. `src/apps/public/sections/car-list-single/ListingBottomRight.tsx`
32. `src/apps/public/sections/blog/BlogMain.tsx`
33. `src/apps/public/sections/blog/BlogOne.tsx`
34. `src/apps/public/sections/blog/BlogSideBar.tsx`
35. `src/apps/public/sections/blog/BlogDetailsMain.tsx`
36. `src/apps/public/sections/blog/BlogContent.tsx` (if used by BlogStandard/LeftSidebar/RightSidebar)
37. `src/apps/public/sections/blog/BlogStandardMain.tsx`
38. `src/apps/public/sections/blog/BlogLeftSidebarMain.tsx`
39. `src/apps/public/sections/blog/BlogRightSidebarMain.tsx`

### Batch 3: Inner Page Containers

**New Page Files (copied 1:1 from template):**

40. `src/apps/public/pages/about/About.tsx`
41. `src/apps/public/pages/service/Service.tsx`
42. `src/apps/public/pages/drivers/Drivers.tsx`
43. `src/apps/public/pages/driver-details/DriverDetails.tsx`
44. `src/apps/public/pages/blog/Blog.tsx`
45. `src/apps/public/pages/blog-details/BlogDetails.tsx`
46. `src/apps/public/pages/blog-standard/BlogStandard.tsx`
47. `src/apps/public/pages/blog-left-sidebar/BlogLeftSidebar.tsx`
48. `src/apps/public/pages/blog-right-sidebar/BlogRightSidebar.tsx`
49. `src/apps/public/pages/contact/Contact.tsx`
50. `src/apps/public/pages/cars/Cars.tsx`
51. `src/apps/public/pages/car-list-v-one/CarListVOne.tsx`
52. `src/apps/public/pages/car-list-v-two/CarListVTwo.tsx`
53. `src/apps/public/pages/car-list-v-three/CarListVThree.tsx`
54. `src/apps/public/pages/listing-single/CarListingSingle.tsx`

### Batch 4: Content Replacement + Housekeeping

**Step 3 -- Saya NV Content Replacement (demo text only, NOT colors):**

Files to modify (replace hardcoded demo contact info with Saya NV verified data):

55. `src/apps/public/sections/common/Header.tsx` -- Replace phone, email, address in top bar
56. `src/apps/public/sections/common/StrickyHeader.tsx` -- Replace "Call Anytime" phone number
57. `src/apps/public/sections/common/Footer.tsx` -- Replace address, phone, email, copyright "Gorent" to "Saya N.V."
58. `src/apps/public/components/elements/SideBar.tsx` -- Replace sidebar contact info (address, phone, email)
59. `src/apps/public/sections/common/LetsTalk.tsx` -- Replace phone number if hardcoded
60. `src/apps/public/sections/contact/ContactMain.tsx` -- Replace demo phone, email, address

**Replacements to apply everywhere:**

- Address: "Hofstraat #121, Paramaribo, Suriname"
- Landline: "52 15 33"
- Email: "[sales@sayanv.com](mailto:sales@sayanv.com)"
- WhatsApp: "+597 8651510"
- Mobile: "+597 740-3744"
- Copyright: "Saya N.V."
- Social: Facebook (facebook.com/SayanvOfficial), Instagram (@sayanv_official)

**NOT replaced (awaiting hex codes):**

- Brand colors (CSS variables / token values)
- Logo images (keep template logos until real Saya logo provided)
- Hero/banner text (keep template text until client provides tagline)
- Service descriptions (keep template text)
- About Us text (keep template text)

**Housekeeping:**

61. `Saya Project Docs/architecture.md` -- Note Phase 10 inner pages completion
62. `Saya Project Docs/backend.md` -- Confirm no DB work

---

## Routes Summary (App.tsx)

```text
/                       -> HomeOne (existing)
/inner                  -> InnerLayout wrapper
  /inner/about          -> About
  /inner/services       -> Service
  /inner/drivers        -> Drivers
  /inner/driver-details -> DriverDetails
  /inner/blog           -> Blog
  /inner/blog-standard  -> BlogStandard
  /inner/blog-left-sidebar -> BlogLeftSidebar
  /inner/blog-right-sidebar -> BlogRightSidebar
  /inner/blog-details   -> BlogDetails
  /inner/contact        -> Contact
  /inner/cars           -> Cars
  /inner/car-list-v-1   -> CarListVOne
  /inner/car-list-v-2   -> CarListVTwo
  /inner/car-list-v-3   -> CarListVThree
  /inner/listing-single -> CarListingSingle
```

All routes are lazy-loaded within the PublicLayout scope (public-scope class wrapper).  
  
==============================

PHASE 10 — HARD STOP GATE CONTROL

(Strict Governance Enforcement)

==============================

This project is executed in 4 Batches.

NO batch may proceed automatically into the next.

After each batch, execution must STOP and wait for explicit approval.

---------------------------------

GLOBAL RULES (APPLIES TO ALL BATCHES)

---------------------------------

1. Create a Restore Point BEFORE starting each batch:

   Saya Project Docs/Restore Points/

   RP-Phase10-BatchX-<date>.md

2. After completing a batch:

   - Provide a detailed report

   - List ALL files created/modified

   - Confirm build status

   - Confirm no new console errors

   - Confirm admin routes unaffected

   - Confirm no CSS files modified

   - Confirm no new libraries added

3. STOP after report.

   Do NOT continue to next batch without explicit approval.

=================================

BATCH 1 STOP GATE

=================================

Must verify:

- InnerLayout.tsx compiles correctly

- Banner renders correctly

- Gallery renders correctly

- All data files import without errors

- App.tsx routing works for at least:

    /inner/about

    /inner/contact

- No broken images from newly copied directories

- "/" (HomeOne) visually unchanged

- /admin/* still loads correctly

- No font leakage

- No CSS files modified

If ANY error exists:

Fix completely before requesting approval.

STOP and report.

=================================

BATCH 2 STOP GATE

=================================

Must verify:

- All section components render without TypeScript errors

- No undefined imports

- No missing data references

- No console errors

- Swiper components function properly

- No layout shifts compared to template

- No CSS edits were made

Provide screenshot evidence for:

- About

- Service

- Cars

- Blog

STOP and report.

=================================

BATCH 3 STOP GATE

=================================

Must verify:

- All routes under /inner/* resolve

- No 404 navigation

- Footer Quick Links all navigate correctly

- Footer Services links navigate correctly

- Breadcrumb Banner displays correctly per page

- Gallery appears on all inner pages via InnerLayout

- No layout break on mobile (basic responsive test)

STOP and report.

=================================

BATCH 4 STOP GATE

=================================

Must verify:

- All demo contact info replaced with Saya NV data

- No "Gorent" text remains

- No demo phone/email remains

- No accidental content deletions

- No color changes applied

- No logo changes applied

- No CSS modifications made

Search project for:

   "Gorent"

   "[support@gmail.com](mailto:support@gmail.com)"

   "+92 (8800)"

   "Main Street"

   "Melborne"

All must return zero matches.

STOP and report.

=================================

ABSOLUTE RULES

=================================

- Do NOT refactor.

- Do NOT optimize.

- Do NOT improve structure.

- Do NOT touch admin.

- Do NOT modify CSS.

- Do NOT introduce new design ideas.

- Copy 1:1 from template and adapt ONLY routing imports.

If something requires interpretation:

STOP and ask.

Await explicit approval before proceeding to next batch.  


---

## What Is NOT Changed

- No CSS/SCSS files modified
- No admin files touched
- No new libraries added
- No Supabase/database work
- No brand color changes (awaiting hex codes)
- No logo replacements
- Template class names and component hierarchy preserved 1:1
- All template demo content (hero text, service descriptions, about copy) preserved until client provides real copy

---

## Verification Checklist

After implementation:

- Build compiles without errors
- No new console errors on "/" or any "/inner/*" route
- All footer "Quick Links" navigate to working pages
- All footer "Services" links navigate to working pages
- Gallery appears on inner pages via InnerLayout
- Banner breadcrumb displays correctly on each inner page
- HomeOne layout and section order unchanged
- Admin routes ("/admin/*") unaffected
- Contact details show Saya NV info (not demo data)