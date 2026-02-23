# Create DEVMART-GUARDIAN-RULES.md — Governance Document

## Objective

Create `Saya Project Docs/DEVMART-GUARDIAN-RULES.md` as the supreme governance authority for this repository. Documentation only — no code changes.

## Deliverable

**File**: `Saya Project Docs/DEVMART-GUARDIAN-RULES.md`

Contains the following sections:

1. **Title**: DEVMART GUARDIAN RULES — NON-NEGOTIABLE EXECUTION PROTOCOL
2. **All 12 Guardian Rules** — copied exactly as provided:
  - Template Parity 1:1 Lock
  - No Custom Design Elements
  - Darkone Asset Map Mandatory
  - Reporting Mandatory
  - No Self-Directed Design Decisions
  - Duplication Check Before Implementation
  - Restore Point Protocol
  - Execution Order Lock
  - Single Build + Strict Isolation
  - External Supabase Only
  - Build Safety Rule
  - No Scope Creep
  - Final Rule (STOP/ASK/WAIT)
3. **Governance Enforcement Mechanism** — pre-task gates (Guardian Rules reference, Restore Point, compliance confirmation), deviation = violation definitions
4. **Violation Protocol** — STOP, report, revert to Restore Point, await instructions
5. **Mandatory Pre-Task Compliance Checklist** — 8-item checklist (Restore Point, duplication check, no custom UI, Darkone 1:1, Gorent 1:1, execution order, out-of-scope, build safety)
6. **Governance Enforcement Patch** — execution order hard lock, restore point requirement, conflict resolution (Guardian Rules override)

DEVMART GUARDIAN RULES v2.0

NON-NEGOTIABLE EXECUTION PROTOCOL

(Supreme Governance Authority)

0. SUPREME AUTHORITY CLAUSE

This document is the highest governance authority for this repository.

If any conflict exists between this document and:

- Phase documents

- [Tasks.md](http://Tasks.md)

- Implementation Blueprints

- Any other file

This document overrides. No exception.

---------------------------------------------------------------------

1. TEMPLATE PARITY — 1:1 LOCK (HARD RULE)

- Darkone Admin must remain 1:1.

- Gorent Frontend must remain 1:1.

- No structural deviation.

- No UI improvisation.

- No layout refactoring.

- No component redesign.

Any deviation = Governance Violation.

---------------------------------------------------------------------

2. ABSOLUTE DESIGN PROHIBITION

Strictly forbidden:

- Custom icons

- Bootstrap additions

- New UI libraries

- Design “improvements”

- Personal UX decisions

- Layout “optimizations”

Lovable is an executor — not a designer.

---------------------------------------------------------------------

3. DARKONE ASSET MAP MANDATORY

For Admin:

- DARKONE_ASSET_MAP must be referenced before module creation.

- No new structure outside mapped structure.

- No renamed assets.

- No class restructuring.

---------------------------------------------------------------------

4. EXECUTION ORDER LOCK (HARD GATE)

Mandatory sequence:

1) Phase 0 — Repo Stabilization

2) Phase 10 — Frontend 1:1 Static Parity

3) Parity Verification Gate — Formal Approval Required

4) Database Waves

5) Admin Wiring

6) Public Dynamic Integration

Until parity is approved:

NO SQL

NO migrations

NO RLS

NO storage buckets

NO Supabase integration

NO dynamic queries

---------------------------------------------------------------------

5. RESTORE POINT PROTOCOL (MANDATORY)

Before ANY of the following:

- Folder restructuring

- Dependency installation

- Routing modification

- Styling changes

- Schema work

- RLS work

- Refactoring

A Restore Point must be created.

Naming Convention:

RP-PhaseX-StepY-Timestamp

Each Restore Point must be:

- Confirmed in task report

- Logged in appropriate phase log

- Referenced before implementation begins

No Restore Point → No Execution.

---------------------------------------------------------------------

6. DUPLICATION CONTROL RULE

Before implementing any feature:

- Search for existing code

- Confirm no duplicate logic

- Confirm no redundant imports

- Confirm no duplicate routes

Duplicate code is forbidden.

---------------------------------------------------------------------

7. SINGLE BUILD + STRICT ISOLATION

Deployment target:

- Single Vite build

- Public at /

- Admin at /admin

- Shared repo, isolated styling

CSS/SCSS isolation mandatory:

- No leakage between admin and public

- No shared styling assumptions

- No global override contamination

---------------------------------------------------------------------

8. EXTERNAL SUPABASE ONLY

- No Lovable Cloud DB

- Supabase external only

- No hidden DB coupling

- No local mock DB after integration phase

---------------------------------------------------------------------

9. BUILD INTEGRITY RULE (HARD STOP)

If:

- Build fails

- Runtime errors appear

- Console errors increase

- Routing breaks

- Layout shifts unexpectedly

STOP immediately.

Do not continue.

Report issue.

Await instruction.

---------------------------------------------------------------------

10. REPORTING MANDATORY (NO EXCEPTIONS)

After every task, Lovable must report:

- What was implemented

- What was partially implemented

- What was skipped

- What errors occurred

- Restore Point reference

- Scope confirmation

Missing report = governance breach.

---------------------------------------------------------------------

11. VIOLATION PROTOCOL

If a rule is violated:

1) STOP immediately

2) Report deviation

3) Revert to last Restore Point

4) Await further instructions

No silent fixes.

No hidden adjustments.

---------------------------------------------------------------------

12. MANDATORY PRE-TASK COMPLIANCE CHECKLIST

Before starting ANY task, Lovable must confirm:

[ ] Guardian Rules referenced

[ ] Execution order validated

[ ] Restore Point created

[ ] No duplicate code detected

[ ] No custom UI libraries added

[ ] Darkone 1:1 confirmed (if admin)

[ ] Gorent 1:1 confirmed (if frontend)

[ ] Build currently stable

[ ] Out-of-scope untouched

No checklist confirmation → No execution.

---------------------------------------------------------------------

13. SCOPE CREEP ZERO TOLERANCE

No:

- Improvements outside instruction

- Refactoring without permission

- Enhancements beyond spec

- “Best practice” substitutions

- Autonomous optimizations

If uncertain → ASK.

---------------------------------------------------------------------

14. FINAL RULE — STOP / ASK / WAIT

If any uncertainty exists:

STOP.

ASK.

WAIT.

Never assume.

END OF DOCUMENT  
  
Technical Details

- 1 file created
- No code, routing, styling, dependency, schema, or RLS changes
- Stop after creation, await further instructions