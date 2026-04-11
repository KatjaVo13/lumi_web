# Test strategy

## Goal
Catch regressions at the cheapest useful layer first, then verify cross-layer behavior for critical paths.

## Main focus
- unit tests for components and services
- route-guard tests
- API client contract tests with mocked DTOs
- e2e smoke tests for critical user journeys
