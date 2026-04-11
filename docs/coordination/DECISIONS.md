# DECISIONS

## ADR-001
- Date: 2026-04-11
- Status: accepted
- Context: Multiple repositories will be worked on by separate AI agents that may not share runtime context.
- Decision: Use the same documentation and coordination layout in every repository, with `AGENTS.md`, `CLAUDE.md`, and `docs/coordination/*` as the minimum handoff protocol.
- Consequences: Agents can switch repositories with lower friction, but maintainers must keep the coordination files current.

## ADR-002
- Date: 2026-04-11
- Status: accepted
- Context: The product must support web, mobile, and a future embedded client.
- Decision: Keep core rules client-neutral and express client differences through capability notes, adapters, configuration, and contract versioning.
- Consequences: Up-front documentation discipline is required, but long-term fragmentation risk is lower.
