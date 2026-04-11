# Core domain

## Rule
Core domain behavior must remain understandable without needing to know Angular, Flutter, or future embedded implementation details.

## Guidance
- business terms and invariants should be stable across clients
- client-specific rendering or transport details should stay outside the core domain
- if a rule appears only because one client is convenient, challenge that rule

## Review prompt for agents
Before merging, ask: "Would this still make sense if the web UI disappeared tomorrow and only mobile plus embedded remained?"
