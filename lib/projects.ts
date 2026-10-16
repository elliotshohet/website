import { githubProjects } from "./github-projects";
import { blockchainProjects } from "./blockchain-projects";

export type Project = {
  slug: string;
  name: string;
  website?: string;
  repository?: string;
  milestone?: { label: string; url: string };
  title: string;
  subtitle: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  summary: string;
  contribution: string;
  sections: { heading: string; text: string }[];
  outcome: string;
  metric?: { value: string; label: string };
  flowHeading: string;
  flow: string[];
};

export const workProjects: Project[] = [
  {
    slug: "burn", name: "Burn", website: "https://burncal.ai", title: "AI product engineering, across the stack", subtitle: "A connected health product spanning mobile, web, LLM tools, identity, and subscriptions.",
    description: "Elliot Shohet’s senior full-stack engineering work on Burn: React Native, Next.js, PostgreSQL, streaming AI, Google Health, and subscription infrastructure.",
    role: "Senior Full-stack Engineer", period: "Oct 2022 — Present", tags: ["TypeScript", "React Native / Expo", "Next.js", "Prisma / PostgreSQL", "OpenAI / MCP", "Docker Compose"],
    summary: "Burn connects nutrition tracking, wearable health data, and an AI coach across mobile and web. I own the React Native/Expo app, Next.js services, PostgreSQL/Prisma data layer, native integrations, and local development tooling.",
    contribution: "Own mobile and web engineering, AI and health integrations, subscriptions, and development tooling.",
    flowHeading: "The product flow",
    sections: [
      { heading: "From meal tracking to connected health", text: "The product has grown from AI meal-photo analysis and nutrition calculations into a web dashboard, Google Health integration, and conversational coaching. Shared TypeScript types connect the mobile app and backend in a Bun monorepo." },
      { heading: "LLM tool calling and reliable writes", text: "Built streaming OpenAI chat with persistent conversation history and tool calling for managing meals, exercise, weight, and goals. Transactional conversation leases, rate limits, and recorded tool outcomes guard against concurrent replies and repeated writes after retries. Token usage and estimated model costs are recorded. An OAuth-protected MCP server exposes health tools to ChatGPT." },
      { heading: "Health data and identity", text: "Integrated Google Health data across activity, sleep, nutrition, and other granted categories. Separate dashboard and agent authorization flows support scoped consent and encrypted token storage. Built Expo native Google sign-in bridges in Swift and Kotlin using the platform SDKs, with server-side identity verification." },
      { heading: "Subscription infrastructure", text: "Implemented direct Apple App Store and Google Play verification to replace a RevenueCat integration. Backend checks bind purchases to user accounts and validate products, subscription status, and store environments before granting access." },
      { heading: "Performance and reliability", text: "Optimized meal photos with Sharp: auto-orientation, resizing to a 1,536-pixel maximum edge, JPEG compression, and metadata removal. Enforced upload and decoded-pixel limits. Health summaries fetch independent metrics concurrently and retain partial results when a provider request fails, with explicit request timeouts. PostgreSQL indexes support user and date-based lookups." },
      { heading: "DevOps and regression coverage", text: "Built Docker Compose workflows for PostgreSQL, migrations, Next.js, Expo/Metro, and Android builds. Added release preflight checks and regression coverage for billing, authorization, health data, coaching tools, and mobile navigation." }
    ],
    outcome: "A connected health product spanning mobile, web, AI tools, identity, and subscription infrastructure.",
    flow: ["Mobile & web", "Authenticated APIs", "Health & AI tools", "Persistent records"],
  },
  {
    slug: "niftys", name: "Nifty’s", milestone: { label: "Acquired by MoonPay", url: "https://www.courtsidevc.com/portfolio/niftys" }, title: "Smart contracts and automated releases", subtitle: "Supporting 100,000+ NFT mints across Ethereum and Palm.",
    description: "Elliot Shohet’s work at Nifty’s: Solidity smart contracts supporting more than 100,000 NFT mints and automated deployment and verification.",
    role: "Full-stack Engineer", period: "May 2021 — Oct 2022", tags: ["Solidity", "TypeScript", "Ethereum", "Palm", "CI/CD"],
    summary: "At Nifty’s, I engineered smart contracts supporting more than 100,000 NFT mints and automated contract deployment and verification across Ethereum and Palm.",
    contribution: "Engineered smart contracts and automated deployment and verification across Ethereum and Palm.",
    metric: { value: "100,000+", label: "NFT mints supported" },
    flowHeading: "The release workflow",
    sections: [
      { heading: "Contract engineering", text: "Engineered Solidity smart contracts supporting more than 100,000 NFT mints across Ethereum and Palm. My role connected application logic with the tooling used to deploy and verify it." },
      { heading: "Repeatable releases", text: "Automated contract deployment and verification with TypeScript tooling and CI/CD across staging and production environments. The release workflow covered both Ethereum and Palm." }
    ],
    outcome: "Smart contracts supporting more than 100,000 NFT mints.",
    flow: ["Contract code", "Staging", "Deployment", "Verification"],
  },
  {
    slug: "hypernet", name: "Hypernet Labs", title: "ERC20 settlement at 25 transactions per second", subtitle: "Payment infrastructure, a modular SDK, and engineering delivery.",
    description: "Elliot Shohet’s full-stack engineering work at Hypernet Labs: ERC20 payment settlement, an SDK built with dependency injection, CI/CD, and engineering leadership.",
    role: "Full-stack Engineer", period: "Feb 2019 — Feb 2020", tags: ["ERC20", "Payment settlement", "SDK development", "Dependency injection", "CI/CD"],
    summary: "At Hypernet Labs, I architected layer-two settlement infrastructure scaling ERC20 payments to 25 transactions per second. My scope also included a modular SDK, CI/CD automation, and the engineering team’s technical roadmap.",
    contribution: "Architected settlement infrastructure, built a modular SDK, introduced CI/CD, and managed a small engineering team.",
    metric: { value: "25 tx/sec", label: "ERC20 payment settlement throughput" },
    sections: [
      { heading: "Payment settlement infrastructure", text: "Architected layer-two infrastructure for ERC20 payments, scaling settlement to 25 transactions per second. The work focused on the backend systems supporting payment settlement." },
      { heading: "A modular developer SDK", text: "Built a modular SDK using dependency injection. This made component boundaries explicit and allowed dependencies to be supplied through the SDK’s architecture." },
      { heading: "Automating delivery", text: "Introduced CI/CD automation alongside the settlement infrastructure and SDK work, connecting implementation with the workflow used to deliver changes." },
      { heading: "Engineering ownership", text: "Managed a small engineering team and technical roadmaps. The role combined hands-on architecture and implementation with planning and coordinating engineering delivery." }
    ],
    outcome: "ERC20 settlement infrastructure reaching 25 transactions per second, supported by a modular SDK and CI/CD automation.",
    flowHeading: "The engineering scope",
    flow: ["Modular SDK", "Payment infrastructure", "ERC20 settlement", "Automated delivery"],
  },
];
// Most recent repositories first; dates are documented in each project's history.
const repositoryOrder = ["pets-saas", "continuous-payments", "ethmailer", "chrono-token"];
export const projects: Project[] = [...githubProjects, ...blockchainProjects].sort(
  (left, right) => repositoryOrder.indexOf(left.slug) - repositoryOrder.indexOf(right.slug),
);
export const allProjects: Project[] = [...workProjects, ...projects];
export function getProject(slug: string) { return allProjects.find(project => project.slug === slug); }
