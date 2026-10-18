# Portfolio follow-up review

## Changes

- Center the name, supporting caption, and social links below the hero portrait at desktop and mobile widths.
- Restore the existing Burn, Nifty’s, and Hypernet Labs brand assets. Hypernet Labs is the employer recorded in the canonical résumé data. Burn has a white wordmark variant for dark mode; its original flame remains unchanged.
- Remove the UC Davis logo’s CSS background. Preserve the existing transparent gold/white SVG for dark mode and use UC Davis blue (`#022851`) for the transparent light variant.
- Change only dark-theme contact color variables. Light-theme contact styling and the separate contact page remain unchanged.
- Feature Coda / Freecoda first under Projects, with its genuine repository logo, website/source links, and a detailed `/work/coda` case study. Existing projects remain accessible.

## Coda evidence

Reviewed `elliotshohet/freecoda` at `6210747`:

- `README.md`, `LICENSE`, and workspace package files establish product scope, Apache 2.0 licensing, clients, and release boundaries.
- `packages/core/src/agent.ts` and `workspace.ts` establish task-specific tools, serialized approval categories, reviewed writes, path/symlink exclusions, and ignored credentials.
- `apps/web/lib/usage.ts` establishes transactional reservations, locked usage buckets, and conservative reconciliation.
- `apps/web/lib/cloud/{crypto,github,lifecycle}.ts` establish encrypted data, imported-base checks, draft PR publication, and lifecycle boundaries.
- The public splash and protected chat/settings routes shipped in `6210747`; reported local checks cover session guards and sign-out. Production GitHub OAuth callback and full cloud-workspace restoration remain unverified. The portfolio distinguishes those limits from implemented code and deployed pages.
- No adoption, revenue, or unverified cross-platform-readiness figures were added. No model calls were made for this portfolio change.

## Validation

- `npm run lint`, `npx tsc --noEmit`, and `git diff --check`: passed.
- Chromium: homepage, contact, and Coda case study in both themes at 320, 375, 768, and 1440px (24 combinations): HTTP 200, no horizontal overflow, no broken images.
- Axe: the same three pages in both themes at 375 and 1440px (12 scans): zero WCAG 2 A/AA, WCAG 2.1 AA, or best-practice violations within main content.
- Verified centered portrait caption/links, one visible transparent UC Davis asset per theme, unchanged light contact colors, dark contact colors, Coda case-study link, exact email actions, and HTTP 200 PDF with the correct content type.
- Inspected desktop and mobile screenshots in both themes.
- Local rendering uses fallback fonts: this environment blocks Google Fonts downloads. The unmodified production build stops only on fetching DM Sans and Space Grotesk; a successful production build is not claimed here.
- Résumé PDF SHA256 unchanged: `3315e9c5437c1eb868ed9c631012425e528ab4a39260885db4854b2a4003aeb4`.

## Publishing route

The repository is public, with no `.github/workflows` files and unchanged dependencies. The user authorized pushing these follow-ups. The owning thread supplied fresh authenticated Hobby-plan evidence for the existing `eshohets-projects` team. Use the normal main-branch Git deployment; no new resource, credential, integration, paid action, or deployment API is required. Deployment-check success and actual custom-domain verification must be reported separately.
