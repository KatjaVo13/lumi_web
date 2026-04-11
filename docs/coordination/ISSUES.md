# ISSUES

## Open
### ISSUE-BOOTSTRAP-001
- Title: Real repository commands may differ from template commands
- Severity: medium
- Affects: local setup, CI alignment, handoff accuracy
- Description: The template assumes common commands for the chosen stack. The actual repository may use Make, Poetry, Nx, Melos, custom scripts, or different folder names.
- Evidence: This is a bootstrap pack, not extracted from the live repository.
- Temporary workaround: Validate and replace commands before relying on them in automation.
- Owner: repository maintainer
- Status: open

## Resolved
- none
