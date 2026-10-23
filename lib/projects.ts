import { githubProjects } from "./github-projects";
import { blockchainProjects } from "./blockchain-projects";
import experience from "./experience.json";

function employment(slug: string) {
  const job = experience.find(item => item.slug === slug);
  if (!job) throw new Error(`Missing employment content: ${slug}`);
  return { role: job.role, period: job.period.replace(" - ", " — "), highlights: job.siteHighlights };
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
  highlights?: string[];
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
    "title": "Building a health product across mobile, web, and AI agents",
    "subtitle": "Shared health records, streaming coaching, and consent-based tools for ChatGPT.",
    "description": "Elliot Shohet’s engineering work at Burn: React Native and Next.js interfaces, streaming AI coaching, owner-scoped MCP tools, Google Health, shared authentication, and store subscription verification.",
    ...employment("burn"),
    "tags": [
      "TypeScript",
      "React Native / Expo",
      "Next.js",
      "Prisma / PostgreSQL",
      "OpenAI / MCP",
      "Docker Compose"
    ],
    "summary": "I built Burn’s React Native/Expo app and Next.js health workspace on shared TypeScript services and PostgreSQL/Prisma records. My work includes meal and health-data workflows, streaming coaching, unified web/mobile sign-in, and OAuth-protected ChatGPT tools with account-scoped access and explicit consent.",
    "contribution": "I implement the interfaces and the services behind them: shared authentication, health-data integrations, coaching tools, subscription checks, and development workflows.",
    "sections": [
      {
        "heading": "Mobile and web around the same records",
        "text": "I built meal, weight, exercise, and coaching workflows across Expo and Next.js, sharing TypeScript contracts in a Bun monorepo. The web Meals screen supports manual and AI-description logging, saved meals, nutrition editing, and reuse. Ask Burn adds saved conversations, older-history paging, streaming replies, and action feedback through an adapter to the existing coaching service."
      },
      {
        "heading": "Coaching that accounts for interrupted actions",
        "text": "I made the coach use the same validated, owner-scoped operations as MCP instead of maintaining a second set of data tools. PostgreSQL conversation locks, expiring leases, request IDs, and durable action reservations guard overlapping replies and duplicate mutations. An interrupted reservation is not blindly rerun; retries can inspect recorded outcomes. I also record token usage and estimated model costs."
      },
      {
        "heading": "A consent-based ChatGPT connection",
        "text": "I built OAuth and MCP access for native Burn records and separately authorized Google Health data. The authenticated owner is resolved server-side; tools cannot choose a user ID. Writes require permission in both the token and active consent, while conversation and assessment history need an additional grant. Grant-version checks revoke access even before an issued token expires. Regression tests exercise scope checks and cross-account isolation."
      },
      {
        "heading": "Health analytics with visible data limits",
        "text": "I integrated Google Health activity, sleep, nutrition, and other authorized categories with separate dashboard and agent connections and encrypted token storage. Overview queries run independent metrics concurrently and distinguish missing permissions, missing data, provider failures, and incomplete pagination. Total-calorie queries are split into bounded date windows; an unfinished page sequence is not presented as a complete daily total."
      },
      {
        "heading": "Shared identity and verified entitlements",
        "text": "I unified web and mobile sign-in around Better Auth sessions and canonical user records, with mobile credentials stored through Expo SecureStore. I also implemented native Google sign-in bridges using Swift and Kotlin and direct Apple and Google subscription verification. Server checks bind purchase proofs to accounts and validate products, expiry, and store environment before updating entitlements."
      },
      {
        "heading": "Bounded photo processing",
        "text": "I built a Sharp pipeline that validates upload bytes and decoded pixels, rejects invalid or multi-frame images, strips metadata, and resizes meal photos to a 1,536-pixel maximum edge before JPEG compression. MCP photo upload and AI analysis are separate explicit operations; the upload tool does not fetch arbitrary URLs or silently trigger analysis."
      },
      {
        "heading": "Repeatable development and release safeguards",
        "text": "I built Docker Compose workflows for PostgreSQL, migrations, Next.js, Expo/Metro, and Android builds. Release preflight checks reject local backend URLs and development billing bypasses in production builds. Regression suites cover authentication, purchase validation, health-data handling, and coaching retries; a separate PostgreSQL integration script checks two-owner CRUD isolation with synthetic users."
      }
    ],
    "outcome": "Implemented mobile, web, and agent workflows around shared health records, with explicit consent, account isolation, and durable safeguards for AI-driven changes.",
    "flowHeading": "From a request to an account-scoped action",
    "flow": [
      "Mobile, web, or ChatGPT request",
      "Identity and permission checks",
      "Shared validated operation",
      "Saved record and action outcome"
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
  },
  {
    slug: "i2chain",
    name: "i2Chain",
    title: "Desktop software with identity-based access controls",
    subtitle: "An Electron desktop app, Node.js access controls, and AWS services.",
    description: "Elliot Shohet’s work at i2Chain: Electron, React, and Redux desktop software, Node.js identity-based access controls, AWS Lambda services, and production Ethereum infrastructure.",
    ...employment("i2chain"),
    tags: ["Electron", "React", "Redux", "Node.js", "AWS Lambda", "Ethereum"],
    summary: "At i2Chain, I built Electron, React, and Redux desktop software and Node.js identity-based access controls. I also developed AWS Lambda services and operated a production geth node cluster.",
    contribution: "Built across the desktop client, identity-based access controls, cloud services, and production Ethereum infrastructure.",
    sections: [
      { heading: "Desktop product engineering", text: "Built desktop software with Electron, React, and Redux, contributing the application interface and its supporting client implementation." },
      { heading: "Identity-based access controls", text: "Developed Node.js identity-based access controls alongside the desktop software." },
      { heading: "Cloud and production infrastructure", text: "Developed AWS Lambda services and operated a production geth node cluster, extending the engineering scope from the client to cloud services and Ethereum infrastructure." }
    ],
    outcome: "Delivered desktop software and identity-based access controls alongside AWS services and production Ethereum infrastructure.",
    flowHeading: "The engineering scope",
    flow: ["Electron desktop client", "Node.js access controls", "AWS Lambda services", "Production geth cluster"]
  }
];
// Most recent repositories first; dates are documented in each project's history.
const repositoryOrder = ["pets-saas", "continuous-payments", "ethmailer", "chrono-token"];
export const projects: Project[] = [...githubProjects, ...blockchainProjects].sort(
  (left, right) => repositoryOrder.indexOf(left.slug) - repositoryOrder.indexOf(right.slug),
);
export const allProjects: Project[] = [...workProjects, ...projects];
export function getProject(slug: string) { return allProjects.find(project => project.slug === slug); }
