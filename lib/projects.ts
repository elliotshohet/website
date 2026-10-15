export const projects = [
  {
    slug: "burn", name: "Burn", website: "https://burncal.ai", title: "Building a connected health product", subtitle: "Mobile, web, wearable data, and AI coaching in one product.",
    description: "Elliot Shohet’s founding-engineer work on Burn: React Native, Next.js, PostgreSQL, streaming AI, Google Health, and subscription infrastructure.",
    role: "Founding Engineer", period: "Oct 2022 — Present", tags: ["React Native / Expo", "Next.js", "Prisma / PostgreSQL", "OpenAI / MCP", "Swift / Kotlin"],
    summary: "Burn connects nutrition tracking, wearable health data, and an AI coach across mobile and web. I own the React Native/Expo app, Next.js services, PostgreSQL/Prisma data layer, native integrations, and local development tooling.",
    sections: [
      { heading: "From meal tracking to connected health", text: "The product has grown from AI meal-photo analysis and nutrition calculations into a web dashboard, Google Health integration, and conversational coaching. Shared TypeScript types connect the mobile app and backend in a Bun monorepo." },
      { heading: "AI that works with application data", text: "Built streaming chat with persistent conversation history and tools for managing meals, exercise, weight, and goals. Transactional conversation leases, rate limits, and recorded tool outcomes guard against concurrent replies and repeated writes after retries. Token usage and estimated model costs are recorded. An OAuth-protected MCP server exposes health tools to ChatGPT." },
      { heading: "Health data and identity", text: "Integrated Google Health data across activity, sleep, nutrition, and other granted categories. Separate dashboard and agent authorization flows support scoped consent and encrypted token storage. Built Expo native Google sign-in bridges in Swift and Kotlin using the platform SDKs, with server-side identity verification." },
      { heading: "Subscription infrastructure", text: "Evolved subscription handling from RevenueCat integration to direct Apple App Store and Google Play verification. Backend checks bind purchases to user accounts and validate products, subscription status, and store environments before granting access." },
      { heading: "Performance and reliability", text: "Optimized meal photos with Sharp: auto-orientation, resizing to a 1,536-pixel maximum edge, JPEG compression, and metadata removal. Enforced upload and decoded-pixel limits. Health summaries fetch independent metrics concurrently and retain partial results when a provider request fails, with explicit request timeouts. PostgreSQL indexes support user and date-based lookups." },
      { heading: "Development and regression coverage", text: "Built Docker Compose workflows for PostgreSQL, migrations, Next.js, Expo/Metro, and Android builds. Added release preflight checks and regression coverage for billing, authorization, health data, coaching tools, and mobile navigation." }
    ],
    outcome: "A connected health product spanning mobile, web, AI tools, identity, and subscription infrastructure.",
    flow: ["Mobile & web", "Authenticated APIs", "Health & AI tools", "Persistent records"],
  },
  {
    slug: "niftys", name: "Nifty’s", title: "Smart contracts behind 100,000+ NFT mints", subtitle: "Contract engineering and repeatable deployment across Ethereum and Palm.",
    description: "Elliot Shohet’s work at Nifty’s: Solidity smart contracts supporting more than 100,000 NFT mints and automated deployment and verification.",
    role: "Founding Engineer", period: "May 2021 — Oct 2022", tags: ["Solidity", "TypeScript", "Ethereum", "Palm", "CI/CD"],
    summary: "At Nifty’s, I engineered smart contracts supporting more than 100,000 NFT mints and automated contract deployment and verification across Ethereum and Palm.",
    sections: [
      { heading: "The engineering problem", text: "A contract release involves more than writing Solidity. The code must be deployed to the intended network and verified, with a process that can be repeated across staging and production environments." },
      { heading: "My contribution", text: "I engineered smart contracts supporting more than 100,000 NFT mints. I also automated deployment and verification across Ethereum and Palm, with staging and production environments for repeatable releases." },
      { heading: "From contracts to releases", text: "The work connected contract implementation with the release workflow around it. Deployment automation and verification made those steps part of an explicit engineering process across both networks." },
      { heading: "What this demonstrates", text: "This project combines Solidity engineering, TypeScript tooling, and CI/CD. It shows ownership of both application logic and the operational steps required to release it." }
    ],
    outcome: "Smart contracts supporting more than 100,000 NFT mints.",
    flow: ["Contract code", "Staging", "Deployment", "Verification"],
  },
];
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
