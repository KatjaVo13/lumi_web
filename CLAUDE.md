# CLAUDE.md

## Project context
This repo is one part of a multi-repository product with separate repositories for backend, web, mobile, and a future embedded client.

## Assumed stack
Angular, TypeScript, RxJS, browser runtime.

## Read first
- `docs/architecture/overview.md`
- `docs/development/setup.md`
- `docs/development/test.md`
- `docs/coordination/STATUS.md`
- `docs/coordination/PLAN.md`
- `docs/coordination/CROSS-REPO.md`

## Principles
- Keep core business rules client-neutral.
- Put client-specific behavior behind interfaces, adapters, feature flags, or capability checks.
- Avoid hidden assumptions that only one client matters.
- Document cross-repo impact whenever APIs, auth, DTOs, sync rules, or shared flows change.
- Prefer simple, readable implementations over clever shortcuts.

## Repository note
This repo uses Angular and TypeScript. Prefer typed services, explicit interfaces, clean component boundaries, and avoid clever RxJS chains when straightforward code is clearer.

## Required outputs for each meaningful task
Update:
- `docs/coordination/STATUS.md`
- `docs/coordination/HANDOFF.md`

If applicable, also update:
- `docs/coordination/ISSUES.md`
- `docs/coordination/DECISIONS.md`
- `docs/coordination/CROSS-REPO.md`

## Done criteria
A task is not done until:
- code or docs are internally consistent
- relevant checks pass or the blocker is documented
- cross-repo impact is recorded where needed
- handoff is written
