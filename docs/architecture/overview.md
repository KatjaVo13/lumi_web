# Architecture overview

## Role in the product
The Angular application is the main browser-based client. It should optimize operator workflows, dashboards, and form-heavy interaction while staying aligned with backend contracts used by all clients.

## Architectural direction
- keep shared product semantics consistent across clients
- keep client-specific concerns close to adapters and presentation layers
- avoid leaking implementation shortcuts into public contracts
- make cross-repo impact explicit

## Expected shape
Prefer feature-based Angular modules or standalone feature areas, shared design system components, typed API clients, and explicit separation between view models and backend DTOs.

## Extension posture
New client types should fit through capability checks, explicit contracts, and configuration rather than through copy-pasted product logic.
