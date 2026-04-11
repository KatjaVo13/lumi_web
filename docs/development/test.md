# Test

## Standard test command
`npm run test -- --watch=false`

## Required verification before handoff
- `npm run lint`
- `npx tsc --noEmit`
- `npm run test -- --watch=false`
- `npm run build`

## Notes
Keep tests close to the layer they protect. Use fast feedback locally, and record any missing verification explicitly in `docs/coordination/HANDOFF.md`.
