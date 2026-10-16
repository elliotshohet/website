import { SkillBadge } from "@/components/skill-badge";
import { CopyEmailButton } from "./copy-email-button";
import { Icon, type IconName } from "./ui-icon";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "./site-header";
import { projects, workProjects } from "../lib/projects";
import canonicalSkills from "../lib/skills.json";
import { Badge } from "@/components/ui/badge";

const linkedin = "https://www.linkedin.com/in/elliotshohet/";
const github = "https://github.com/elliotshohet";
const skillGroups = canonicalSkills as { title: string; icon: IconName; skills: string[] }[];
const companyLogos: Record<string, string> = { burn: "/companies/burn.svg", niftys: "/companies/niftys.png", hypernet: "/companies/hypernet.svg" };
const burnEvidence = [
  { title: "Cross-platform product", text: "React Native/Expo mobile app, Next.js services, and a PostgreSQL/Prisma data layer in a shared TypeScript codebase." },
  { title: "Applied AI & integrations", text: "Streaming OpenAI chat with persistent history and tool calling for meals, exercise, and goals; Google Health integration and OAuth-protected MCP tools for ChatGPT." },
  { title: "Reliability & delivery", text: "Recorded tool outcomes guard against repeated writes after retries. Rate limits, subscription checks, native sign-in, and Docker Compose support the product and its development." },
];
const profile = {
  "@context": "https://schema.org", "@type": "ProfilePage", "@id": "https://elliotshohet.com/#profile",
  url: "https://elliotshohet.com", name: "Elliot Shohet — Senior Full-Stack Engineer",
  mainEntity: {
    "@type": "Person", "@id": "https://elliotshohet.com/#person", name: "Elliot Shohet",
    url: "https://elliotshohet.com", jobTitle: "Senior Full-Stack Engineer",
    description: "Senior Full-Stack Engineer focused on AI product engineering, with experience across mobile, web, backend services, and cloud infrastructure. Open to remote US and Los Angeles hybrid roles.",
    sameAs: [linkedin, github], email: "elliot.shohet@gmail.com",
    homeLocation: { "@type": "Place", name: "Los Angeles Metropolitan Area" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
    knowsAbout: [...new Set([...skillGroups.flatMap(group => group.skills), ...workProjects.flatMap(project => project.tags)])],
  },
};
export default function Home() {
  return <div className="site hiring-site">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
    <SiteHeader />
    <main id="main">
      <section id="about" className="hero hero-redesign hero-unified" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <h1 id="intro-heading" className="hero-title">Elliot Shohet<span>.</span></h1><p className="hero-kicker hero-role-caption"><Badge variant="outline"><Icon name="code" />Senior Full-stack Engineer</Badge></p><p className="hero-specialty"><em>AI product focus.</em></p>
          <p className="hero-description">I build the product and the systems behind it. At Burn, my work spans mobile and web, streaming AI tools, health data integrations, and backend reliability.</p>
          <p className="hero-background">Hands-on engineering from architecture through delivery, with experience leading small teams. B.S. Computer Science, UC Davis.</p><div className="hero-role-location metadata-badges"><Badge variant="outline"><Icon name="globe" />Remote US</Badge><Badge variant="outline"><Icon name="briefcase" />Los Angeles hybrid</Badge></div>

        </div>
        <aside className="hero-profile-card" aria-label="About Elliot Shohet">
          <Image className="hero-profile-photo" src="/elliot-shohet-headshot.png" alt="Elliot Shohet" width={640} height={640} sizes="(max-width: 650px) 260px, 320px" preload />
          <div className="hero-profile-actions" aria-label="Connect with Elliot"><a className="profile-action" href={github} target="_blank" rel="noopener noreferrer"><Icon name="github" /><span>GitHub</span></a><a className="profile-action" href={linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /><span>LinkedIn</span></a><CopyEmailButton className="profile-action"><Icon name="mail" /><span>Contact</span></CopyEmailButton></div>
          <a className="button primary profile-resume" href="/elliot-shohet-resume.pdf" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="Download résumé PDF (opens in a new tab)"><Icon name="download" />Download résumé</a>
          <div className="hero-education"><a className="education-logo" href="https://www.ucdavis.edu/" aria-label="University of California, Davis" target="_blank" rel="noopener noreferrer"><Image src="/companies/uc-davis.svg" alt="University of California, Davis" width={200} height={60} unoptimized /></a><div className="metadata-badges education-badges"><Badge variant="outline"><Icon name="code" />B.S. Computer Science</Badge><Badge variant="outline"><Icon name="calendar" />2012–2017</Badge></div></div>
        </aside>
      </section>
      <section id="skills" className="section" aria-labelledby="skills-heading">
        <p className="eyebrow"><Icon name="layers" />01 / Technical skills</p>
        <h2 id="skills-heading">The tools behind the work.</h2>
        <div className="skills-grid">
          {skillGroups.map(group => <div className="skill-group" key={group.title}>
            <h3><Icon name={group.icon} />{group.title}</h3>
            <ul className="tags skill-badges" aria-label={group.title}>{group.skills.map(skill => <li key={skill}><SkillBadge skill={skill} /></li>)}</ul>
          </div>)}
        </div>
      </section>
      <section id="work" className="section" aria-labelledby="work-heading">
        <div className="section-heading"><p className="eyebrow"><Icon name="briefcase" />02 / Selected work & experience</p><h2 id="work-heading">Engineering in practice.</h2><p>Recent AI product ownership, backed by experience in smart contracts, payments, and developer tooling.</p></div>
        <div className="experience-list">{workProjects.map((job, index) => <article className={index === 0 ? "experience experience-burn" : "experience"} key={job.slug}>
          <div className="experience-index">0{index + 1}</div><div className="experience-label"><div className={`company-logo company-logo-${index}`}>{job.website ? <a href={job.website} aria-label={`Visit ${job.name}`} target="_blank" rel="noopener noreferrer"><Image src={companyLogos[job.slug]} alt={job.name} width={168} height={64} unoptimized /></a> : <Image src={companyLogos[job.slug]} alt={job.name} width={168} height={64} unoptimized />}</div><h3 className="sr-only">{job.name}</h3>{job.milestone && <a className="company-milestone" href={job.milestone.url} target="_blank" rel="noopener noreferrer"><Badge variant="secondary"><Icon name="check" />{job.milestone.label}<Icon name="external" /></Badge></a>}<div className="metadata-badges experience-badges"><Badge variant="outline"><Icon name="briefcase" />{job.role}</Badge><Badge variant="outline"><Icon name="calendar" />{job.period}</Badge>{index === 0 && <Badge variant="secondary"><Icon name="spark" />AI product engineering</Badge>}</div></div>
          <div>{index === 0 ? <><h3 className="burn-work-title">A connected health product, across the stack.</h3><ul className="burn-evidence">{burnEvidence.map(item => <li key={item.title}><Badge variant="secondary"><Icon name="check" />{item.title}</Badge><p>{item.text}</p></li>)}</ul></> : <p className="experience-description">{job.summary}</p>}<ul className="tags" aria-label={job.name + " technologies"}>{job.tags.map(tag => <li key={tag}><SkillBadge skill={tag} /></li>)}</ul><Link className="button secondary case-study-link" href={`/work/${job.slug}`} data-track="project_open" target="_blank" rel="noopener noreferrer">Read the {job.name} case study <Icon name="arrow" /></Link></div>
          {index === 0 && <figure className="work-product-photo"><a href="https://burncal.ai" aria-label="Visit Burn" target="_blank" rel="noopener noreferrer"><Image src="/projects/burn-dashboard.png" alt="Burn nutrition dashboard with calorie, macronutrient, and meal tracking" width={660} height={1370} sizes="(max-width: 800px) 172px, 240px" /></a><figcaption>Burn · Mobile nutrition dashboard</figcaption></figure>}
        </article>)}</div>
        <div className="career-summary"><h3><Icon name="briefcase" />More of the journey</h3><p>Earlier work spans identity and access controls at i2Chain, performance engineering at Ooma, API tooling at Weebly, and ecommerce products.</p><a className="text-link" href="/elliot-shohet-resume.pdf" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="Download résumé PDF (opens in a new tab)"><Icon name="download" />Download the full résumé</a><a className="text-link" href={linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />Full experience on LinkedIn <Icon name="external" /></a></div>
      </section>
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <div className="section-heading"><p className="eyebrow"><Icon name="github" />03 / GitHub projects</p><h2 id="projects-heading">Code you can explore.</h2><p>A recent full-stack demonstration, followed by earlier experiments. Each links to its source and implementation notes.</p></div>
        <div className="project-card-grid">
          {projects.filter(project => project.slug === "pets-saas").map(project => <article className="project-card" key={project.slug} aria-labelledby={`project-${project.slug}`}>
            <div className="project-card-top"><span className="project-card-name"><Icon name="github" />{project.name}</span><Badge variant="outline" className="project-card-date metadata-badge"><Icon name="calendar" />{project.period}</Badge></div>
            <h3 id={`project-${project.slug}`}><a href={project.repository} target="_blank" rel="noopener noreferrer">{project.title}<Icon name="diagonal" /></a></h3>
            <p className="project-card-description">{project.description}</p>
            <ul className="project-card-skills" aria-label={`${project.name} technologies`}>{project.tags.map(tag => <li key={tag}><SkillBadge skill={tag} /></li>)}</ul>
            <div className="project-card-implementation"><Icon name="code" /><p>{project.contribution}</p></div>
            <div className="project-card-actions"><a className="button primary" href={project.repository} aria-label={`View ${project.name} on GitHub`} target="_blank" rel="noopener noreferrer"><Icon name="github" />View on GitHub<Icon name="external" /></a><Link className="button secondary" href={`/work/${project.slug}`} aria-label={`Read about ${project.name}`} data-track="project_open" target="_blank" rel="noopener noreferrer">Project details<Icon name="arrow" /></Link></div>
          </article>)}
        </div>
        <div className="project-archive"><h3><Icon name="code" />Earlier experiments</h3><p>Historical explorations of Ethereum, distributed storage, and token mechanics.</p><div>{projects.filter(project => project.slug !== "pets-saas").map(project => <article key={project.slug}><div><h4>{project.name}</h4><Badge variant="outline" className="metadata-badge"><Icon name="calendar" />{project.period}</Badge></div><p>{project.description}</p><div className="archive-links"><a className="button secondary" href={project.repository} aria-label={`View ${project.name} source`} target="_blank" rel="noopener noreferrer"><Icon name="github" />Source<Icon name="external" /></a><Link className="button secondary" href={`/work/${project.slug}`} aria-label={`Read ${project.name} implementation notes`} target="_blank" rel="noopener noreferrer">Project details<Icon name="arrow" /></Link></div></article>)}</div></div>
      </section>
      <section id="contact" className="contact section" aria-labelledby="contact-heading">
        <p className="eyebrow"><Icon name="mail" />04 / Get in touch</p><h2 id="contact-heading">Building your<br />engineering team<span>?</span></h2>
        <p>I’m interested in senior full-stack and AI product engineering roles where I can own meaningful product work. Remote US or hybrid in Los Angeles.</p>
        <div className="actions"><CopyEmailButton className="button primary"><Icon name="mail" />Email</CopyEmailButton><a className="button secondary" href={linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn<Icon name="external" /></a><a className="button secondary" href={github} target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub<Icon name="external" /></a></div>
      </section>
    </main>
    <footer><p>Elliot Shohet · Senior Full-Stack Engineer</p><div><a href={linkedin} rel="me noopener noreferrer" target="_blank"><Icon name="linkedin" />LinkedIn</a><a href={github} rel="me noopener noreferrer" target="_blank"><Icon name="github" />GitHub</a><a href="#main">Back to top <Icon name="up" /></a></div></footer>
  </div>;
}
