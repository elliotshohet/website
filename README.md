# Elliot Shohet portfolio

Personal portfolio at https://elliotshohet.com, built with Next.js App Router, React, TypeScript, Tailwind CSS, and local shadcn/ui components.

## Local development

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally http://localhost:3000). No environment variables are required for local development.

```sh
npm run lint
npx tsc --noEmit
npm run build
```

`npm run start` serves a completed production build. Next.js conventions for this installed version are documented in `node_modules/next/dist/docs/`; read the relevant guide before changing framework code, as described in `AGENTS.md`.

## Routes and files

- `app/page.tsx`: homepage introduction, Work, Skills, and Projects sections.
- `app/site-header.tsx` and `app/site-footer.tsx`: shared navigation and simple contact/social/résumé footer. Contact is the homepage `/#contact` anchor.
- `app/work/[slug]/page.tsx`: employment case studies and repository project pages, including `/work/i2chain`. Routes come from `allProjects` in `lib/projects.ts`.
- `app/contact/page.tsx`: redirects legacy `/contact` visits to `/#contact`.
- `app/globals.css`, `app/motion.css`, and `app/theme.tsx`: styling, motion, and light/dark themes.
- `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `app/opengraph-image.tsx`: site metadata and discovery.
- `components/ui/`: local shadcn/ui components; `app/ui-icon.tsx` provides shared icons.
- `public/`: static assets, including company logos, project previews, the headshot, and the downloadable résumé. Files are served from the site root.

## Shared content

Keep website and résumé changes aligned through the canonical sources:

| Source | Purpose |
| --- | --- |
| `lib/experience.json` | Employment titles, dates, and résumé bullets; case studies reuse titles and dates. |
| `lib/skills.json` | Skills shared by the website and résumé. |
| `lib/projects.ts` | Employment case studies and the combined project collections. |
| `lib/github-projects.ts` | Personal/repository project content, including Freecoda. |
| `lib/blockchain-projects.ts` | Earlier blockchain repository demonstrations and prototypes. |
| `scripts/build_resume.py` | Résumé layout, profile, selected experience bullets, and skill display labels. |

## Generate the résumé

The generator uses RenderCV and pypdf, pinned in `scripts/requirements-resume.txt`:

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r scripts/requirements-resume.txt
.venv/bin/python scripts/build_resume.py
```

It reads the shared experience and skill data, renders in a temporary directory, and writes `public/elliot-shohet-resume.pdf`. The script checks that the rendered PDF has exactly one page before replacing the existing file. After changing content or layout, render the PDF to an image and inspect readability, spacing, and text fit; the page-count check alone does not verify visual quality.

## Publishing

Local edits and résumé generation change this checkout only. Review the diff and run the checks above before publishing through the configured hosting workflow. Do not assume a local build has updated the public site.
