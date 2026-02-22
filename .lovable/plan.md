
# Phase 1 — Repo Cleanup + Homepage Structure Freeze

## STEP 0 — Restore Point

Create `Saya Project Docs/Restore Points/RP-Phase-1-Homepage-Structure-Freeze.md` containing:
- Current top-level repo tree
- Current HomeOne.tsx section order (all 21 components)
- Timestamp
- Checkpoint statement

## STEP 1 — Document Governance Cleanup

### Move
| From | To |
|---|---|
| `docs/architecture.md` | `Saya Project Docs/architecture.md` |
| `docs/backend.md` | `Saya Project Docs/backend.md` |

### Delete folders
- `/docs` (empty after move)
- `/docs-standard` (5 Devmart standard docs -- frozen, no code references)
- `/archive` (Darkone snapshot -- frozen, no code references)

### Create
`Saya Project Docs/Phase-1-Repo-Cleanup-Log.md` documenting moves, deletions, and final top-level structure.

## STEP 2 — Homepage Structure Freeze (HomeOne.tsx)

### Modification to HomeOne.tsx

Remove imports and render calls for:
- `ProcessOne`
- `PricingOne`
- `VideoOne`
- `TeamOne`
- `DownloadApp`
- `FaqOne`
- `BlogOne`

Note: `CounterOne`, `CallOne`, `PopularCarOne` are not separate imports in HomeOne -- they are embedded within `WhychooseOne` and `PricingOne` respectively. Removing `PricingOne` eliminates `CallOne` and `PopularCarOne`. CounterOne requires modifying `WhychooseOne.tsx`.

### Modification to WhychooseOne.tsx

Remove the `counter-one` section (lines 62-141) from the component. Keep only the `why-choose-one` section (lines 18-61). This is a Home 1-specific concern since WhychooseOne is only used in HomeOne.

### Modification to Booking.tsx (Quick Request conversion)

Replace current booking form fields with:
- Name (text input)
- Phone (text input)
- Desired Vehicle (optional dropdown -- reuse existing CustomSelect)
- Message (optional textarea)
- WhatsApp button (link/button, no backend)
- Submit button (no backend logic)

Keep existing section wrapper, layout structure, image, animations. Only replace form internals.

**Important**: Booking.tsx is in `sections/common/` -- need to verify if other pages use it before modifying directly.

### Modification to ListingOne.tsx

Add two top-level tabs: "Rental" | "For Sale" above existing brand tabs. UI structure only, no filtering logic. Both tabs show the same data for now.

### Gallery section

Limit homepage display to 6 items. Since Gallery is a shared component, this will be done by passing a prop or slicing data in HomeOne only. Approach: create a homepage-specific wrapper or add an optional `maxItems` prop to Gallery.

### Final HomeOne render order

```
1.  Header
2.  BannerOne (Hero Slider)
3.  SlidingTextOne
4.  ServiceOne
5.  AboutOne (full -- progress bars, images, counter, phone)
6.  ListingOne (with Rental/For Sale tabs)
7.  Booking (converted to Quick Request)
8.  WhychooseOne (cards only, no CounterOne)
9.  TestimonialOne
10. Gallery (max 6 items)
11. BrandOne
12. LetsTalk
13. Footer
14. StrickyHeader
```

## STEP 3 — Documentation

Create `Saya Project Docs/Phase-1-Homepage-Structure-Freeze.md` with:
- Final section order
- Removed sections list
- Components modified
- Confirmation checklist

## Technical Details

### Files created (4)
1. `Saya Project Docs/Restore Points/RP-Phase-1-Homepage-Structure-Freeze.md`
2. `Saya Project Docs/Phase-1-Repo-Cleanup-Log.md`
3. `Saya Project Docs/Phase-1-Homepage-Structure-Freeze.md`
4. `Saya Project Docs/architecture.md` (moved from docs/)
5. `Saya Project Docs/backend.md` (moved from docs/)

### Files modified (3)
1. `gorent-car-rental-react-js-template/src/pages/home-one/HomeOne.tsx` -- remove 7 imports + render calls, reorder remaining
2. `gorent-car-rental-react-js-template/src/sections/home-one/WhychooseOne.tsx` -- remove counter-one section (lines 62-141)
3. `gorent-car-rental-react-js-template/src/sections/common/Booking.tsx` -- replace form fields with Quick Request fields

### Files potentially modified (1)
4. `gorent-car-rental-react-js-template/src/sections/common/Gallery.tsx` -- add optional `maxItems` prop OR create HomeOne-specific gallery wrapper
5. `gorent-car-rental-react-js-template/src/sections/home-one/ListingOne.tsx` -- add Rental/For Sale tab UI above brand tabs

### Folders deleted (3)
- `/docs`
- `/docs-standard`
- `/archive`

### Risks
- Booking.tsx is shared (`sections/common/`). Will verify usage in other pages. If used elsewhere, will create a HomeOne-specific variant instead of modifying the shared component.
- Gallery.tsx is shared. Will use prop-based approach to avoid breaking other pages.

### No changes to
- Routing
- Dependencies
- SCSS/CSS
- Backend logic
