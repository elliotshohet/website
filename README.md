# Elliot Shohet personal site

Minimal Next.js App Router site for https://elliotshohet.com.

Run npm ci, then npm run dev for local development. Validate with npm run lint and npm run build.

Content: app/page.tsx. Styling: app/globals.css. Metadata: app/layout.tsx.

Vercel hosts the site with automatic production deployments from main.

## Hosting

- Production: https://elliotshohet.com
- Alternate domain: https://www.elliotshohet.com
- GitHub: https://github.com/elliotshohet/elliotshohet-site (private)
- Vercel project: elliotshohet-site in eshohets-projects
- Production branch: main

DNS is managed at Spaceship. The apex uses an A record pointing to 216.198.79.1, and www uses a CNAME pointing to e2f139e9a93faaf0.vercel-dns-017.com. Vercel manages HTTPS certificates automatically.

No environment variables are needed to run the site. Local Vercel metadata and environment files are ignored by Git.
