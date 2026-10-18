# Portfolio redesign: cloud review

## Source and scope

Started from handoff commit `3953601dcccae22d4283bd56d26ec44cb0c5d286`, based on `a68e256276e31991edade43dc00ddbcf8293d2af`. Homepage, contact, all seven case studies, shared navigation, CSS, light/dark themes, favicon and social image use the preserved design. Canonical experience/project data and the résumé PDF are unchanged.

Cloud refinements:
- Look up the featured Burn project by slug; exclude it from past work by slug.
- Add a branded, keyboard-accessible 404 recovery page with routes back to work/contact.
- Let unknown project slugs reach the existing `notFound()` checks. Known case studies remain statically generated; unknown projects return 404 without the previous Next.js `NoFallbackError` log.

## Cloud execution

All dependency installation, builds, lint and browser checks ran in an isolated Vercel Sandbox, using the exact GitHub handoff commit. No Mac Mini or MacBook Air build was used. The connected Vercel app exposes the Burn project for sandbox compute; no Burn application files, deployment or production settings were changed. The résumé site's established main-branch production pipeline was not invoked.

## Verification

- `npm ci --no-audit --no-fund`, `npm run lint`, `npm run build` and `git diff --check`: passed.
- Chromium checked 10 page routes in both themes at 320, 375, 390, 768, 1024 and 1440px: 120 settled layout combinations; no horizontal overflow or broken images.
- Axe WCAG 2 A/AA, WCAG 2.1 AA and best-practice scans: 20 scans, zero violations. Automated scans do not replace assistive-technology testing.
- Homepage, contact and all seven case studies: HTTP 200. Unknown project: HTTP 404. PDF: 200 application/pdf. Social image: 200 image/png. Sitemap: 200 application/xml.
- Skip link is first in keyboard order and moves focus to main. Theme choice survives reload. Clipboard copies the exact email; denied clipboard access shows a manual-copy fallback. The success toast is announced through an aria-live polite region. Reduced motion disables the intro animation. Work anchor remains below the sticky header.
- Final browser pass: no page errors or failed resource requests. The production-mode server log remains clean after missing-project requests.
- Inspected actual desktop pages and mobile screenshot captures for typography, hierarchy, spacing, product image framing, contact actions and light/dark contrast.
- React/code review: main content remains server-rendered; interactive theme, clipboard and tracking boundaries remain narrow; stable list keys, semantic controls, escaped structured data, image dimensions, reduced motion and visible focus styles were checked against Anthropic frontend-design, Vercel React guidance and fresh Vercel Web Interface Guidelines.

## Résumé preservation

SHA256: `3315e9c5437c1eb868ed9c631012425e528ab4a39260885db4854b2a4003aeb4`.
Verified one page and 2,955 extracted searchable characters. No content or generation changes.

## Publishing

Production publishing is not authorized. Review this feature branch and preview before approving a merge/deployment to main. Sandbox preview URLs are temporary and expire with their sessions.
