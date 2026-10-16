# Elliot Shohet personal site

Minimal Next.js App Router site for https://elliotshohet.com.

Run npm ci, then npm run dev for local development. Validate with npm run lint and npm run build.

Content: app/page.tsx. Styling: app/globals.css. Metadata: app/layout.tsx.

Vercel hosts the site with automatic production deployments from main.

## Hosting

- Production: https://elliotshohet.com
- Alternate domain: https://www.elliotshohet.com
- GitHub: https://github.com/elliotshohet/website (public)
- Vercel project: elliotshohet-site in eshohets-projects
- Production branch: main

DNS is managed at Spaceship. The apex uses an A record pointing to 216.198.79.1, and www uses a CNAME pointing to e2f139e9a93faaf0.vercel-dns-017.com. Vercel manages HTTPS certificates automatically.

No environment variables are needed to run the site. Local Vercel metadata and environment files are ignored by Git.

## Website and résumé content

The site targets senior full-stack roles with an emphasis on AI product engineering.

- `lib/skills.json` is the shared source for website and résumé skills. The résumé omits Google Cloud Storage to keep its Cloud row on one line.
- `lib/projects.ts` contains employment case studies; the GitHub project files contain dated repository demonstrations and historical prototypes.
- `scripts/build_resume.py` generates the searchable, one-page PDF served at `/elliot-shohet-resume.pdf`. Run it with Python and ReportLab installed, then render and inspect the result after content changes.

The public site does not show compensation targets or recruiting notes. Local edits require a separate deployment to reach elliotshohet.com.
