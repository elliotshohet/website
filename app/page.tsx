import Link from "next/link";
import { ThemeToggle } from "./theme";

const linkedin = "https://www.linkedin.com/in/elliotshohet/";
const github = "https://github.com/elliotshohet";
const email = "mailto:elliot.shohet@gmail.com";
const experience = [
  { company: "Burn", role: "Founding Engineer", dates: "2022 — Present",
    description: "Building a nutrition product across web and mobile: React Native and Expo on iOS and Android, a Next.js backend, and PostgreSQL. Integrated GPT-4V meal-photo analysis, personalized nutrition calculations, authentication, and cloud image storage.",
    tags: ["React Native", "Next.js", "PostgreSQL", "AI integrations"] },
  { company: "Nifty’s", role: "Founding Engineer", dates: "2021 — 2022",
    description: "Engineered smart contracts supporting more than 100,000 NFT mints. Automated deployment and verification across Ethereum and Palm, with staging and production environments for repeatable releases.",
    tags: ["Solidity", "TypeScript", "Ethereum", "CI/CD"] },
  { company: "Hypernet Labs", role: "Founding Engineer", dates: "2019 — 2020",
    description: "Architected layer-two payment settlement infrastructure reaching 25 transactions per second. Built a modular SDK using dependency injection, introduced CI/CD, and managed a small engineering team and technical roadmaps.",
    tags: ["Node.js", "SDK architecture", "Payments", "Technical leadership"] },
  { company: "i2Chain", role: "Founding Engineer", dates: "2018 — 2019",
    description: "Built a cross-platform Electron desktop application with React and Redux, Node.js identity-based access controls, production blockchain infrastructure, and AWS Lambda services.",
    tags: ["React", "Electron", "Node.js", "AWS"] },
];
const earlier = [
  ["Software Development Consultant", "2020 — 2021", "Advised clients on full-stack decentralized applications and blockchain systems using TypeScript and Solidity."],
  ["BlockchainForums.info", "2017 — 2018", "Developed Solidity settlement contracts and advised clients including Trade.io, Sapien Network, and APT Systems."],
  ["Ooma", "2017", "Containerized and stress-tested applications with Docker Swarm and profiled a large Java codebase for performance bottlenecks."],
  ["Weebly", "2015", "Automated API client generation in 13 languages and implemented REST API endpoints and sanity checks."],
  ["ShrinkOnce", "2012 — 2014", "Built a Laravel product and optimized bandwidth costs and AWS instance startup times."],
  ["Greekdrop", "2012 — 2014", "Built a custom ecommerce portal and automated inventory and accounting workflows as CTO."],
];
const profile = {
  "@context": "https://schema.org", "@type": "ProfilePage", "@id": "https://elliotshohet.com/#profile",
  url: "https://elliotshohet.com", name: "Elliot Shohet — Full Stack Software Engineer",
  mainEntity: {
    "@type": "Person", "@id": "https://elliotshohet.com/#person", name: "Elliot Shohet",
    url: "https://elliotshohet.com", jobTitle: "Full Stack Software Engineer",
    description: "Software engineer in Los Angeles, open to local and remote roles. Building web, mobile, and AI-powered products.",
    sameAs: [linkedin, github], email: "elliot.shohet@gmail.com",
    homeLocation: { "@type": "Place", name: "Los Angeles Metropolitan Area" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
    knowsAbout: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "React Native", "AI integrations", "Solidity"],
  },
};
export default function Home() {
  return <div className="site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Elliot Shohet home">es<span>.</span></Link>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href={linkedin} rel="me">LinkedIn ↗</a><a href={github} rel="me">GitHub ↗</a><ThemeToggle /></nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to roles in Los Angeles & remote</p>
          <h1 id="intro-heading">Elliot Shohet<span>.</span></h1>
          <p className="hero-title">Full stack.<br />Full ownership.</p>
          <p className="intro">I’m a software engineer who turns ideas into working products, from the first line of code to the systems behind them. Web, mobile, and AI — built end to end.</p>
          <div className="actions"><a className="button primary" href={email}>Let’s talk <span aria-hidden="true">↗</span></a><a className="button secondary" href="/elliot-shohet-resume.pdf">Download résumé <span aria-hidden="true">↓</span></a></div>
        </div>
        <aside className="profile-card" aria-label="Engineering focus">
          <div className="card-top"><span>WHAT I BUILD</span><span aria-hidden="true">✳</span></div>
          <p className="card-heading">From zero<br />to shipped<span>.</span></p>
          <dl><div><dt>Web</dt><dd>React · Next.js · TypeScript</dd></div><div><dt>Mobile</dt><dd>React Native · Expo</dd></div><div><dt>Systems</dt><dd>Node.js · PostgreSQL · AWS</dd></div><div><dt>AI</dt><dd>Model integrations · Image workflows</dd></div></dl>
          <a href={github} rel="me">Find me on GitHub <span aria-hidden="true">↗</span></a>
        </aside>
      </section>
      <div className="intro-strip"><p>Product-minded engineering.<br /><strong>Across the whole stack.</strong></p><p>TypeScript / React / Next.js / Node.js / PostgreSQL</p></div>
      <section id="work" className="section" aria-labelledby="work-heading">
        <div className="section-heading"><p className="eyebrow">01 / Selected work & experience</p><h2 id="work-heading">Built with ownership.</h2><p>From AI-powered nutrition to payment infrastructure, I work across interfaces, services, and the systems that connect them.</p></div>
        <div className="experience-list">{experience.map((job, index) => <article className="experience" key={job.company}>
          <div className="experience-index">0{index + 1}</div><div className="experience-label"><h3>{job.company}</h3><p>{job.role}</p><span>{job.dates}</span></div>
          <div><p className="experience-description">{job.description}</p><ul className="tags" aria-label={job.company + " technologies"}>{job.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
        </article>)}</div>
        <h3 className="earlier-heading">More of the journey</h3><div className="earlier-grid">{earlier.map(([company, dates, description]) => <article key={company}><span className="eyebrow">{dates}</span><h4>{company}</h4><p>{description}</p></article>)}</div>
        <a className="text-link" href={linkedin}>View my full experience on LinkedIn ↗</a>
      </section>
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <p className="eyebrow">02 / Independent & university projects</p><h2 id="projects-heading">Curiosity, put to work.</h2>
        <div className="earlier-grid projects-grid">
          <article><span className="eyebrow">Machine learning</span><h3>Machine Learning &amp; Doodle Jump</h3><p>Applied a variant of Q-learning to an HTML5 implementation of Doodle Jump while at UC Davis, exploring how an agent learns to play through interaction.</p><ul className="tags"><li>Q-learning</li><li>HTML5</li></ul></article>
          <article><span className="eyebrow">Desktop & browser</span><h3>Music Controller</h3><p>Built a Chrome extension and desktop application for controlling music across applications, using WebSockets for real-time communication. A university project built with JavaScript and PHP.</p><ul className="tags"><li>JavaScript</li><li>WebSockets</li><li>Chrome extension</li></ul></article>
        </div>
      </section>
      <section id="about" className="section about" aria-labelledby="about-heading">
        <div><p className="eyebrow">03 / A little about me</p><h2 id="about-heading">A builder<br />from the start.</h2></div>
        <div className="about-copy"><p>I’m a full-stack software engineer based in the Los Angeles area. I started programming at 12, launched technology companies, and went on to earn a B.S. in Computer Science from the University of California, Davis.</p><p>My specialty is taking a product from scratch to launch, or stepping into an existing system and taking ownership. My work spans React and TypeScript interfaces, Node.js services, relational databases, cross-platform mobile apps, and AI integrations.</p><p>I also bring experience in smart contracts, payment settlement, modular SDK design, cloud infrastructure, and leading small engineering teams.</p><div className="education"><span className="eyebrow">Education</span><strong>University of California, Davis</strong><span>B.S. Computer Science · 2012–2017</span></div></div>
      </section>
      <section id="contact" className="contact section" aria-labelledby="contact-heading">
        <p className="eyebrow">04 / Start a conversation</p><h2 id="contact-heading">Let’s build<br />something useful<span>.</span></h2>
        <p>I’m open to software engineering opportunities in Los Angeles or remote. Hiring for your team? I’d love to hear what you’re building.</p>
        <div className="actions"><a className="button primary" href={email}>Email Elliot ↗</a><a className="button secondary" href={linkedin}>Connect on LinkedIn ↗</a></div>
        <a className="contact-email" href={email}>elliot.shohet@gmail.com</a>
      </section>
    </main>
    <footer><p>Elliot Shohet · Software Engineer</p><div><a href={linkedin} rel="me">LinkedIn</a><a href={github} rel="me">GitHub</a><a href="#main">Back to top ↑</a></div></footer>
  </div>;
}
