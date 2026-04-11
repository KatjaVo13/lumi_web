# RISKS

## Active risks
### RISK-001
- Risk: Cross-repo contract drift
- Why it matters: Backend, Angular, and Flutter changes can each appear locally correct while breaking integration.
- Affected repos: backend-api, web-ui, mobile-flutter, embedded-client
- Mitigation: update `CROSS-REPO.md`, keep DTO and error assumptions explicit, and review changes at integration boundaries
- Status: active

### RISK-002
- Risk: Placeholder documentation survives too long
- Why it matters: Agents may start trusting stale bootstrap values.
- Affected repos: all
- Mitigation: replace placeholders during first real onboarding pass and record last verified dates
- Status: active
