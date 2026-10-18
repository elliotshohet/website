# Portfolio redesign cloud handoff

Continue from this branch in cloud Codex. Base: `a68e256276e31991edade43dc00ddbcf8293d2af`. Do not deploy production or push main without explicit user approval.

## Design and scope

Use the actual frontend-design skill supplied in the task and the requested Vercel web-design-guidelines review. Read AGENTS.md and relevant `node_modules/next/dist/docs/` guides before code changes; this repo uses Next.js 16.3.8.

The redesign covers homepage, contact, all seven case studies, shared navigation, light/dark themes, favicon, and share image. Identity: fog `#f5f8f7`, petrol `#163f46`, teal `#176f70`, pale mint `#e0eeea`, blue product stage `#dce8ef`, white. Typography: Space Grotesk display and DM Sans body via next/font. Preserve truthful experience and canonical data in `lib/`, accessible responsive flows, and the working résumé PDF. No canonical data, dependencies, or PDF changed.

## Existing verification

- Production build and lint passed before the last small refinements below.
- Browser checks: all seven case studies, home and contact returned 200; invalid project returned 404; PDF returned 200 application/pdf; share image returned 200 image/png; sitemap returned 200 application/xml.
- Desktop homepage and Burn screenshots plus mobile homepage/contact screenshots inspected.
- Axe on Burn in light and dark: zero WCAG 2 A/AA, 2.1 AA and best-practice violations.
- PDF identical to base: SHA256 `3315e9c5437c1eb868ed9c631012425e528ab4a39260885db4854b2a4003aeb4`.

## Outstanding checks

1. Rebuild and lint final source. Last refinements were: contact role now reads canonical `workProjects[0].role`; removed decorative product-stage rings; factual screenshot caption; mobile theme/social hit targets increased to 44px. These changes were not rebuilt locally before handoff.
2. Complete visual QA at 320, 375, 390, 768, 1024 and 1440px for homepage, contact, repository and employment case studies, light/dark. A preliminary rapid viewport loop raced layout updates; await settled layout before measuring. Only 390px overflow was conclusively checked.
3. Complete keyboard/skip-link, sticky anchor, actual copy-email success and denied-clipboard fallback, toast announcement, theme persistence, and reduced-motion checks. Review console and resource failures.
4. Investigate `Internal: NoFallbackError` logged after requesting an invalid statically generated project. Its HTTP status was correctly 404; determine whether this is normal Next.js behavior before reporting clean runtime logs.
5. Finish React/code review and web-design-guidelines review. Server components remain server rendered; theme/clipboard/tracking are client components. Consider explicit Burn slug lookup instead of depending on `workProjects[0]` if useful.
6. Prepare a reviewable preview and report verified results. Production publishing is not authorized.

Cloud executor thread: `01a1505a-7305-77e1-9c56-d38acdc2e024`.
