export const projects = [
  {
    slug: "burn", name: "Burn", title: "Building an AI-powered nutrition app", subtitle: "Mobile, backend, and AI—connected in one product.",
    description: "Elliot Shohet’s founding-engineer work on Burn: a React Native nutrition app with a Next.js backend, PostgreSQL, and AI meal-photo analysis.",
    role: "Founding Engineer", period: "2022 — Present", tags: ["React Native", "Expo", "Next.js", "PostgreSQL", "AI"],
    summary: "Burn brings meal-photo analysis, nutrition tracking, and personalized calculations into a web and mobile product. My work spans the application, backend, authentication, and cloud image storage.",
    sections: [
      { heading: "The product problem", text: "Nutrition tracking connects several jobs: capturing a meal, estimating what is in it, keeping a record, and making the daily picture easy to understand. Burn brings those steps into a single product experience." },
      { heading: "My contribution", text: "As founding engineer, I built across the React Native and Expo mobile application, the Next.js backend, and PostgreSQL persistence. My work included GPT-4V meal-photo analysis, personalized nutrition calculations, authentication, and cloud image storage." },
      { heading: "How the pieces connect", text: "The mobile interface provides the capture and tracking experience. Backend services coordinate image handling and analysis, while the database preserves the records needed for the user’s nutrition history. These responsibilities meet in the result shown back in the app." },
      { heading: "Engineering scope", text: "This project demonstrates product ownership across mobile interfaces, API integration, identity, data storage, and AI-powered features. The work goes beyond a standalone model demo: analysis is part of an application with persistent user data and everyday workflows." }
    ],
    outcome: "A nutrition product spanning mobile, web, and AI meal analysis.",
    flow: ["Meal photo", "Image storage", "AI analysis", "Nutrition record"],
  },
  {
    slug: "niftys", name: "Nifty’s", title: "Smart contracts behind 100,000+ NFT mints", subtitle: "Contract engineering and repeatable deployment across Ethereum and Palm.",
    description: "Elliot Shohet’s work at Nifty’s: Solidity smart contracts supporting more than 100,000 NFT mints and automated deployment and verification.",
    role: "Founding Engineer", period: "2021 — 2022", tags: ["Solidity", "TypeScript", "Ethereum", "Palm", "CI/CD"],
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
