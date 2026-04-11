# Extension points

## Preferred extension mechanisms
- configuration and environment-driven behavior
- feature flags
- explicit interfaces and adapters
- capability negotiation for client-specific features
- versioned contracts for external behavior

## Avoid
- hard-coded client-name checks spread through the codebase
- separate logic forks without a documented reason
- undocumented behavioral differences between web, mobile, and embedded paths
