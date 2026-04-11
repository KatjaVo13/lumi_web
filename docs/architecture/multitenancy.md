# Multitenancy

## Current stance
Single-tenant and multi-tenant modes must be treated as explicit architecture choices, not incidental side effects.

## Notes
If tenant context exists, tenant switching must be explicit in session/state management and must not rely solely on route conventions.
