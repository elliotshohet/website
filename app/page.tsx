import { Icon } from "./ui-icon";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "./site-header";

const linkedin = "https://www.linkedin.com/in/elliotshohet/";
const github = "https://github.com/elliotshohet";
const email = "mailto:elliot.shohet@gmail.com";
const experience = [
  { company: "Burn", role: "Founding Engineer", dates: "Oct 2022 — Present",
    description: "Building a health and nutrition product across React Native/Expo, Next.js, and PostgreSQL. Added streaming AI chat with history and tools for managing meals, exercise, and goals; connected Google Health data and OAuth-protected ChatGPT tools. Implemented direct Apple/Google subscription verification, native sign-in modules, and an optimized meal-photo pipeline.",
    tags: ["React Native / Expo", "Next.js / Prisma", "OpenAI / MCP", "Google Health", "Store billing"] },
  { company: "Nifty’s", role: "Founding Engineer", dates: "May 2021 — Oct 2022",
    description: "Engineered smart contracts supporting more than 100,000 NFT mints. Automated deployment and verification across Ethereum and Palm, with staging and production environments for repeatable releases.",
    tags: ["Solidity", "TypeScript", "Ethereum", "CI/CD"] },
  { company: "Hypernet Labs", role: "Founding Engineer", dates: "Feb 2019 — Feb 2020",
    description: "Architected layer-two payment settlement infrastructure reaching 25 transactions per second. Built a modular SDK using dependency injection, introduced CI/CD, and managed a small engineering team and technical roadmaps.",
    tags: ["Node.js", "SDK architecture", "Payments", "Technical leadership"] },
  { company: "i2Chain", role: "Founding Engineer", dates: "Sep 2018 — Feb 2019",
    description: "Built a cross-platform Electron desktop application with React and Redux, Node.js identity-based access controls, production blockchain infrastructure, and AWS Lambda services.",
    tags: ["React", "Electron", "Node.js", "AWS"] },
];
const profile = {
  "@context": "https://schema.org", "@type": "ProfilePage", "@id": "https://elliotshohet.com/#profile",
  url: "https://elliotshohet.com", name: "Elliot Shohet — Senior Fullstack Engineer",
  mainEntity: {
    "@type": "Person", "@id": "https://elliotshohet.com/#person", name: "Elliot Shohet",
    url: "https://elliotshohet.com", jobTitle: "Senior Fullstack Engineer",
    description: "Senior fullstack engineer open to senior fullstack engineering roles, including remote opportunities. Building web, mobile, and AI-powered products.",
    sameAs: [linkedin, github], email: "elliot.shohet@gmail.com",
    homeLocation: { "@type": "Place", name: "Los Angeles Metropolitan Area" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
    knowsAbout: ["TypeScript", "Python", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "React Native", "AI integrations", "Multimodal AI", "AI-powered product development", "AI-assisted coding", "Prompt engineering", "Structured outputs", "Tool calling", "MCP", "OAuth", "Google Health", "Prisma", "Solidity"],
  },
};
export default function Home() {
  return <div className="site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main">
      <section className="hero" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to senior fullstack engineering roles · Remote welcome</p>
          <h1 id="intro-heading">Elliot Shohet<span>.</span></h1>
          <p className="hero-role">Senior Fullstack Engineer · Startup specialist</p>
          <p className="hero-title">From idea to<br /><em>production.</em></p>
          <p className="intro">I build across the whole stack. Web, mobile, desktop, and the infrastructure behind them. A founding engineer who turns early ideas into products people can use.</p>
          <div className="actions"><a className="button primary" href={email} data-track="email_click"><Icon name="mail" />Let’s talk <Icon name="external" /></a><a className="button secondary" href="/elliot-shohet-resume.pdf" download data-track="resume_download"><Icon name="download" />Download résumé</a><a className="button secondary" href="#work">Explore my work <Icon name="down" /></a></div>
        </div>
        <aside className="hero-portrait" aria-label="Elliot Shohet portrait">
          <div className="portrait-label"><span><Icon name="pin" /> Based in Los Angeles</span><span>34.05° N / 118.24° W</span></div>
          <Image src="/elliot-shohet-headshot.png" alt="Elliot Shohet" width={640} height={640} sizes="(max-width: 650px) 88vw, 420px" preload />
          <div className="portrait-caption"><span className="portrait-caption-label"><Icon name="layers" /> The way I work</span><p>Every layer.<br /><strong>One owner.</strong></p><span aria-hidden="true">↗</span></div>
        </aside>
      </section>
      <div className="intro-strip" aria-label="Selected experience highlights">
        <div><span className="eyebrow">Built across the stack</span><strong className="platform-icons"><span><Icon name="globe" />Web.</span><span><Icon name="phone" />Mobile.</span><span><Icon name="code" />Desktop.</span></strong></div>
        <div><strong>100,000+</strong><span>NFT mints supported at Nifty’s</span></div>
        <div><strong>25 tx/sec</strong><span>Settlement infrastructure at Hypernet</span></div>
      </div>
      <section id="work" className="section" aria-labelledby="work-heading">
        <div className="section-heading"><p className="eyebrow">01 / Selected work & experience</p><h2 id="work-heading">Ideas made real.</h2><p>From AI-powered nutrition to payment infrastructure, I work across interfaces, services, and the systems that connect them.</p></div>
        <div className="experience-list">{experience.slice(0, 3).map((job, index) => <article className={index === 0 ? "experience experience-burn" : "experience"} key={job.company}>
          <div className="experience-index">0{index + 1}</div><div className="experience-label"><h3>{job.company}</h3><p>{job.role}</p><span>{job.dates}</span></div>
          <div><p className="experience-description">{job.description}</p><ul className="tags" aria-label={job.company + " technologies"}>{job.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{index < 2 && <Link className="text-link" href={index === 0 ? "/work/burn" : "/work/niftys"} data-track="project_open">View project details <Icon name="arrow" /></Link>}</div>
        {index === 0 && <figure className="work-product-photo"><Link href="/work/burn" data-track="project_open"><Image src="/projects/burn-dashboard.png" alt="Burn app dashboard showing calories, macronutrients, and meal tracking" width={660} height={1370} sizes="(max-width: 650px) 220px, 260px" /></Link><figcaption>Burn · AI-powered nutrition tracking</figcaption></figure>}</article>)}</div>
        <div className="career-summary"><h3>More of the journey</h3><p>Earlier work spans identity and access controls at i2Chain, performance engineering at Ooma, API tooling at Weebly, and ecommerce products.</p><a className="text-link" href="/elliot-shohet-resume.pdf" data-track="resume_download"><Icon name="download" />Download the full résumé</a><a className="text-link" href={linkedin}>Full experience on LinkedIn <Icon name="external" /></a></div>
      </section>
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <p className="eyebrow">02 / Independent & university projects</p><h2 id="projects-heading">Always building.</h2>
        <div className="earlier-grid projects-grid">
          <article><span className="eyebrow"><Icon name="spark" /> Machine learning</span><h3>Machine Learning &amp; Doodle Jump</h3><p>Applied a variant of Q-learning to an HTML5 implementation of Doodle Jump while at UC Davis, exploring how an agent learns to play through interaction.</p><ul className="tags"><li>Q-learning</li><li>HTML5</li></ul></article>
          <article><span className="eyebrow"><Icon name="music" /> Desktop & browser</span><h3>Music Controller</h3><p>Built a Chrome extension and desktop application for controlling music across applications, using WebSockets for real-time communication. A university project built with JavaScript and PHP.</p><ul className="tags"><li>JavaScript</li><li>WebSockets</li><li>Chrome extension</li></ul></article>
        </div>
      </section>
      <section id="about" className="section about" aria-labelledby="about-heading">
        <div><p className="eyebrow">03 / A little about me</p><h2 id="about-heading">A builder<br />from the start.</h2></div>
        <div className="about-copy"><p>I’m a senior fullstack engineer based in the Los Angeles area. I started programming at 12, launched technology companies, and went on to earn a B.S. in Computer Science from the University of California, Davis.</p><p>My specialty is taking a product from scratch to launch, or stepping into an existing system and taking ownership. My work spans React and TypeScript interfaces, Node.js services, relational databases, cross-platform mobile apps, and AI integrations. My technical skills also include Python and AWS.</p><p>I also bring experience in smart contracts, payment settlement, modular SDK design, cloud infrastructure, and leading small engineering teams.</p><div className="education"><span className="eyebrow">Education</span><strong>University of California, Davis</strong><span>B.S. Computer Science · 2012–2017</span></div></div>
      </section>
      <section id="contact" className="contact section" aria-labelledby="contact-heading">
        <p className="eyebrow">04 / Start a conversation</p><h2 id="contact-heading">Your next idea.<br />Let’s build it<span>.</span></h2>
        <p>Hiring a senior engineer or exploring a project? Tell me what you’re building. I’m open to senior fullstack engineering roles, including remote opportunities.</p>
        <div className="actions"><a className="button primary" href={email} data-track="email_click"><Icon name="mail" />Email Elliot</a><a className="button secondary" href={linkedin}>Connect on LinkedIn <Icon name="external" /></a></div>
      </section>
    </main>
    <footer><p>Elliot Shohet · Senior Fullstack Engineer</p><div><a href={linkedin} rel="me">LinkedIn</a><a href={github} rel="me">GitHub</a><a href="#main">Back to top <Icon name="up" /></a></div></footer>
  </div>;
}
