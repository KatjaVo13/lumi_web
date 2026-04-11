# Development conventions

## General
- prefer readability over novelty
- avoid silent cross-repo contract changes
- keep config out of code where environment-specific values are expected

## Repository notes
Keep domain-specific state in services or store abstractions, not in ad hoc component state. Do not reimplement server validation rules beyond UX-friendly prechecks.
