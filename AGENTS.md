# AGENTS.md

## Purpose

This repository contains the **Web UI** part of a multi-repository product.

Product repositories:

- backend API
- web UI
- mobile Flutter app
- future embedded client

Repository role:
Angular browser client for primary product workflows and administration.

## Read first

1. `README.md`
2. `docs/architecture/overview.md`
3. `docs/architecture/client-capabilities.md`
4. `docs/development/setup.md`
5. `docs/development/test.md`
6. `docs/coordination/STATUS.md`
7. `docs/coordination/PLAN.md`
8. `docs/coordination/ISSUES.md`
9. `docs/coordination/CROSS-REPO.md`

## Working rules

- Keep changes small, reviewable, and easy to verify.
- Update coordination files after meaningful work.
- Do not silently change shared contracts.
- Prefer extension points, adapters, feature flags, and configuration over client-specific forks.
- Record blockers in `docs/coordination/ISSUES.md`.
- Record architectural trade-offs in `docs/coordination/DECISIONS.md`.

## Repository-specific focus

Keep UI rich but thin on business invariants. The browser may format, cache, and orchestrate, but backend remains source of truth for domain rules.

## Verification before done

- run build
- run tests relevant to the change
- run lint or static analysis where available
- update `docs/coordination/STATUS.md`
- update `docs/coordination/HANDOFF.md`
- update `docs/coordination/CROSS-REPO.md` if contracts, assumptions, or shared models changed

## Commands

- To build the project run: `ng build`
- Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
  -- code scaffolding: `ng generate component component-name`
  -- complete list of available schematics: `ng generate --help`
- To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command: `ng test`
- For end-to-end (e2e) testing, run: `ng e2e`
- 
- run: `ng serve`

## Stop and document if blocked

If a required tool, environment, dependency, or external contract is missing:

- do not invent completion
- document the blocker in `docs/coordination/ISSUES.md`
- leave the next agent a precise handoff in `docs/coordination/HANDOFF.md`
