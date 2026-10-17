import { githubProjects } from "./github-projects";
import { blockchainProjects } from "./blockchain-projects";
import experience from "./experience.json";

function employment(slug: string) {
  const job = experience.find(item => item.slug === slug);
  if (!job) throw new Error(`Missing employment content: ${slug}`);
  return { role: job.role, period: job.period.replace(" - ", " — ") };
}

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
    "slug": "burn",
    "name": "Burn",
    "website": "https://burncal.ai",
    "title": "Building AI coaching into a full-stack health product",
    "subtitle": "Meal logging, connected health data, and coaching across mobile and web.",
    "description": "Elliot Shohet’s work at Burn: React Native and Next.js product engineering, OpenAI tool calling, Google Health, native sign-in, and subscriptions verified by Apple and Google.",
    ...employment("burn"),
    "tags": [
      "TypeScript",
      "React Native / Expo",
      "Next.js",
      "Prisma / PostgreSQL",
      "OpenAI / MCP",
      "Docker Compose"
    ],
    "summary": "Burn brings meal logging, nutrition tracking, connected health data, and AI coaching into mobile and web workflows. I own engineering across the React Native/Expo app, Next.js services, PostgreSQL/Prisma data layer, and the integrations that connect them.",
    "contribution": "Own implementation across the mobile app, web dashboard, APIs, AI integrations, authentication, subscriptions, and developer workflows.",
    "sections": [
      {
        "heading": "One product across mobile and web",
        "text": "The React Native/Expo app and Next.js services share TypeScript types in a Bun monorepo, with PostgreSQL and Prisma handling persistent data. My work spans meal-photo analysis, nutrition calculations, the web dashboard, and conversational coaching. Shared contracts keep the app and backend aligned as these workflows evolve."
      },
      {
        "heading": "AI actions that account for retries",
        "text": "The coach can manage meals, exercise, weight, and goals through tools. I built streaming replies and persistent conversation history, then added transactional conversation locks, rate limits, and recorded tool results to guard against overlapping replies and repeated writes when requests are retried. Token usage and estimated model costs are recorded so usage can be inspected."
      },
      {
        "heading": "Health data with explicit access boundaries",
        "text": "Integrated Google Health data for the categories a user authorizes, including activity, sleep, and nutrition. Separate dashboard and agent OAuth flows support scoped consent and encrypted token storage. Independent metric requests run concurrently with explicit timeouts; available results remain usable when another provider request fails."
      },
      {
        "heading": "Identity and subscriptions across platforms",
        "text": "Built native Google sign-in bridges in Swift and Kotlin using the platform SDKs, with server-side identity verification. Replaced a RevenueCat integration with direct Apple App Store and Google Play subscription verification. Backend checks bind purchases to accounts and validate product, subscription status, and store environment before granting access."
      },
      {
        "heading": "Bounded image processing",
        "text": "Meal photos are normalized with Sharp: auto-orientation, resizing to a 1,536-pixel maximum edge, JPEG compression, and metadata removal. Upload-size and decoded-pixel limits bound the work accepted by the image pipeline. PostgreSQL indexes support the user and date-based lookups used in tracking workflows."
      },
      {
        "heading": "Repeatable development and release checks",
        "text": "Built Docker Compose workflows for PostgreSQL, migrations, Next.js, Expo/Metro, and Android builds. Release preflight checks and regression coverage exercise billing, authorization, health-data handling, coaching tools, and mobile navigation. The tooling covers the same boundaries that connect features across the product."
      }
    ],
    "outcome": "Built streaming coaching, health-data access, native sign-in, and subscriptions verified by Apple and Google around shared user records.",
    "flowHeading": "From user intent to a saved record",
    "flow": [
      "Mobile or web action",
      "Authenticated API",
      "AI tool or health service",
      "PostgreSQL record"
    ]
  },
  {
    "slug": "niftys",
    "name": "Nifty’s",
    "milestone": {
      "label": "Acquired by MoonPay",
      "url": "https://www.courtsidevc.com/portfolio/niftys"
    },
    "title": "Smart contracts behind 100,000+ NFT mints",
    "subtitle": "Solidity contract engineering and repeatable releases across Ethereum and Palm.",
    "description": "Elliot Shohet’s engineering work at Nifty’s: Solidity contracts supporting 100,000+ NFT mints and TypeScript automation for deployment and verification.",
    ...employment("niftys"),
    "tags": [
      "Solidity",
      "TypeScript",
      "Ethereum",
      "Palm",
      "CI/CD"
    ],
    "summary": "At Nifty’s, I engineered smart contracts supporting more than 100,000 NFT mints. The work combined Solidity implementation with TypeScript release tooling and CI/CD across Ethereum and Palm.",
    "contribution": "Implemented minting contracts and automated the steps that deploy and verify them across staging and production.",
    "metric": {
      "value": "100,000+",
      "label": "NFT mints supported"
    },
    "sections": [
      {
        "heading": "Contract implementation across two networks",
        "text": "Engineered Solidity contracts for NFT minting on Ethereum and Palm. The role covered contract implementation and the tooling needed to deploy and verify those contracts in both environments."
      },
      {
        "heading": "Deployment and verification as a workflow",
        "text": "Automated contract deployment and verification using TypeScript and CI/CD. The workflow made release steps repeatable across staging and production on Ethereum and Palm, connecting contract changes with the process used to put them into service."
      }
    ],
    "outcome": "Smart contracts supporting more than 100,000 NFT mints, backed by automated deployment and verification.",
    "flowHeading": "From contract change to verified deployment",
    "flow": [
      "Solidity implementation",
      "Staging release",
      "Production deployment",
      "Contract verification"
    ]
  },
  {
    "slug": "hypernet",
    "name": "Hypernet Labs",
    "title": "ERC20 payments at 25 transactions per second",
    "subtitle": "Layer-two settlement, a developer SDK, and hands-on engineering leadership.",
    "description": "Elliot Shohet’s work at Hypernet Labs: ERC20 settlement reaching 25 transactions per second, a modular SDK, CI/CD, and a small engineering team’s technical roadmap.",
    ...employment("hypernet"),
    "tags": [
      "ERC20",
      "Payment settlement",
      "SDK development",
      "Dependency injection",
      "CI/CD"
    ],
    "summary": "At Hypernet Labs, I architected layer-two infrastructure for ERC20 payments reaching 25 transactions per second. I also built a modular developer SDK, introduced CI/CD automation, and managed a small engineering team and its technical roadmaps.",
    "contribution": "Combined payment-system architecture and SDK implementation with engineering planning and team leadership.",
    "metric": {
      "value": "25 tx/sec",
      "label": "ERC20 payment settlement throughput"
    },
    "sections": [
      {
        "heading": "Layer-two payment settlement",
        "text": "Architected the backend infrastructure for ERC20 payment settlement, scaling it to 25 transactions per second. This was the core payment-system work supporting the platform."
      },
      {
        "heading": "SDK and delivery tooling",
        "text": "Built a modular SDK using dependency injection, allowing dependencies to be supplied through explicit component boundaries. Introduced CI/CD automation alongside the SDK and settlement infrastructure to make delivery steps repeatable."
      },
      {
        "heading": "Leading while building",
        "text": "Managed a small engineering team and technical roadmaps while contributing architecture and implementation. The role joined hands-on technical decisions with planning and coordinating engineering delivery."
      }
    ],
    "outcome": "ERC20 settlement reaching 25 transactions per second, supported by a modular SDK and a coordinated engineering roadmap.",
    "flowHeading": "The engineering scope",
    "flow": [
      "Developer SDK",
      "Payment infrastructure",
      "ERC20 settlement",
      "Automated delivery"
    ]
  }
];
// Most recent repositories first; dates are documented in each project's history.
const repositoryOrder = ["pets-saas", "continuous-payments", "ethmailer", "chrono-token"];
export const projects: Project[] = [...githubProjects, ...blockchainProjects].sort(
  (left, right) => repositoryOrder.indexOf(left.slug) - repositoryOrder.indexOf(right.slug),
);
export const allProjects: Project[] = [...workProjects, ...projects];
export function getProject(slug: string) { return allProjects.find(project => project.slug === slug); }
