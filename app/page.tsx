import { SkillBadge } from "@/components/skill-badge";
import { Icon, type IconName } from "./ui-icon";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { projects, workProjects } from "../lib/projects";
import canonicalSkills from "../lib/skills.json";
import { Button } from "@/components/ui/button";
import { AnimatedHeading, Reveal, InteractiveCard, Magnetic } from "@/components/portfolio-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const linkedin = "https://www.linkedin.com/in/elliotshohet/";
const github = "https://github.com/elliotshohet";
const companyLogos: Record<string, { src: string; width: number; height: number }> = {
  niftys: { src: "/companies/niftys.png", width: 64, height: 64 },
  hypernet: { src: "/companies/hypernet.svg", width: 168, height: 43 },
};
const skillGroups = canonicalSkills as {
  title: string;
  icon: IconName;
  skills: string[];
}[];
const orderedSkillGroups = [...skillGroups].sort((a, b) => {
  const order = ["Frontend", "Backend", "Data", "DevOps", "Testing", "AI", "Languages"];
  return order.indexOf(a.title) - order.indexOf(b.title);
});
const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://elliotshohet.com/#profile",
  url: "https://elliotshohet.com",
  name: "Elliot Shohet — Full-stack Engineer",
  mainEntity: {
    "@type": "Person",
    "@id": "https://elliotshohet.com/#person",
    name: "Elliot Shohet",
    url: "https://elliotshohet.com",
    jobTitle: "Full-stack Engineer",
    description:
      "Full-stack product engineer building AI applications and developer tools with TypeScript, React, Node.js, and PostgreSQL. Experience owning architecture, APIs, authentication, and releases across web, mobile, and desktop.",
    sameAs: [linkedin, github],
    email: "elliot.shohet@gmail.com",
    homeLocation: { "@type": "Place", name: "Los Angeles Metropolitan Area" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of California, Davis",
    },
    knowsAbout: [
      ...new Set([
        ...skillGroups.flatMap((group) => group.skills),
        ...workProjects.flatMap((project) => project.tags),
      ]),
    ],
  },
};
export default function Home() {
  const burnProject = workProjects.find((project) => project.slug === "burn");
  const freecoda = projects.find((project) => project.slug === "freecoda");
  if (!burnProject || !freecoda) throw new Error("Featured project is missing from canonical work data");
  return (
    <div className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section id="about" className="intro-hero" aria-labelledby="intro-heading">
          <div className="intro-layout">
            <Reveal className="hero-copy" delay={0.15}>
              <h1 id="intro-heading" className="hero-name">
                <AnimatedHeading>Elliot Shohet.</AnimatedHeading>
              </h1>
              <p className="intro-title">Full-stack Engineer</p>
              <p className="intro-description">
                I build AI products and developer tools with TypeScript,
                React, and Node.js—from the interface and APIs to production.
              </p>
              <div className="actions">
                <Magnetic>
                  <Button asChild size="lg">
                    <a href="#work">Explore my work<Icon name="diagonal" data-icon="inline-end" /></a>
                  </Button>
                </Magnetic>
                <Button asChild size="lg" variant="outline">
                  <a href="/elliot-shohet-resume.pdf" target="_blank" rel="noopener noreferrer" data-track="resume_download">
                    View résumé<Icon name="resume" data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal className="hero-profile" delay={0.3}>
              <aside className="profile-card" aria-label="About Elliot">
                <div className="profile-person">
                  <div className="portrait-frame">
                    <Image src="/elliot-shohet-headshot.png" alt="Elliot Shohet" width={640} height={640} sizes="(max-width: 360px) 90px, (max-width: 600px) 100px, 120px" preload />
                  </div>
                  <div className="portrait-links">
                    <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                    <a href="mailto:elliot.shohet@gmail.com" aria-label="Contact Elliot" data-track="email_click"><Icon name="mail" /></a>
                  </div>
                </div>
                <div className="profile-school">
                  <Image className="logo-light" src="/companies/uc-davis-light.svg" alt="UC Davis" width={164} height={42} unoptimized />
                  <Image className="logo-dark" src="/companies/uc-davis.svg" alt="UC Davis" width={164} height={42} unoptimized />
                  <p className="profile-degree">B.S. Computer Science</p>
                  <p className="profile-university">University of California, Davis</p>
                  <p className="profile-years">2012–2017</p>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section id="work" className="section" aria-labelledby="work-heading">
          <Reveal className="section-heading"><h2 id="work-heading">Work, from end to end.</h2></Reveal>
          <InteractiveCard className="featured-work-motion" effect="lift">
            <Card className="featured-work case-card">
              <div className="featured-copy">
                <CardHeader className="featured-card-header">
                  <div className="work-topline">
                    <span className="company-wordmark">
                      <Image className="logo-light" src="/companies/burn.svg" alt="Burn" width={126} height={36} unoptimized />
                      <Image className="logo-dark" src="/companies/burn-dark.svg" alt="Burn" width={126} height={36} unoptimized />
                    </span>
                    <span>{burnProject.period}</span>
                  </div>
                  <CardDescription className="work-role">{burnProject.role}</CardDescription>
                  <CardTitle>
                    <h3><Link href="/work/burn" className="card-case-link" data-track="project_open">Health tracking.<br />AI coaching.<br />One connected product.</Link></h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="featured-card-content">
                  <p>I built Burn’s mobile app and web workspace around shared health records, with streaming AI coaching and consent-based tools for ChatGPT.</p>
                  <ul className="feature-points">{burnProject.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <ul className="career-tech" aria-label="Burn technologies">
                    {burnProject.tags.map((tag) => <li key={tag}><SkillBadge skill={tag} /></li>)}
                  </ul>
                </CardContent>
                <CardFooter className="actions work-project-actions">
                  <Button asChild><a href={burnProject.website} target="_blank" rel="noopener noreferrer">Visit Burn<Icon name="globe" data-icon="inline-end" /></a></Button>
                  <Button asChild variant="outline"><Link href="/work/burn" data-track="project_open">Read case study<Icon name="diagonal" data-icon="inline-end" /></Link></Button>
                </CardFooter>
              </div>
              <figure className="product-stage">
                <Image src="/projects/burn-dashboard.png" alt="Burn mobile dashboard showing nutrition, calories, and meal tracking" width={660} height={1370} sizes="(max-width: 600px) 196px, (max-width: 800px) 200px, 238px" />
                <figcaption>Burn’s mobile nutrition dashboard.</figcaption>
              </figure>
            </Card>
          </InteractiveCard>
          <div className="past-work">
            {workProjects.filter((project) => project.slug !== "burn").map((job, index) => (
              <Reveal className="career-card-motion" delay={index * 0.08} key={job.slug}>
                <Card className="past-work-row case-card">
                  <CardHeader className="career-card-header">
                    <div className="career-company">
                      {companyLogos[job.slug] && <Image className={`work-company-logo work-company-logo-${job.slug}`} {...companyLogos[job.slug]} alt={job.name} unoptimized />}
                      <CardTitle><h3 className={companyLogos[job.slug] ? "sr-only" : undefined}>{job.name}</h3></CardTitle>
                    </div>
                    <CardDescription className="work-role">{job.role}</CardDescription>
                    <span className="work-period">{job.period}</span>
                  </CardHeader>
                  <CardContent className="career-card-content">
                    <p>{job.summary}</p>
                    <ul className="career-tech" aria-label={`${job.name} technologies`}>
                      {job.tags.map((tag) => <li key={tag}><SkillBadge skill={tag} /></li>)}
                    </ul>
                  </CardContent>
                  <CardFooter className="work-result">
                    <div className="career-metric">
                      {job.metric && <span><strong>{job.metric.value}</strong> {job.metric.label}</span>}
                    </div>
                    <Link href={`/work/${job.slug}`} aria-label={`Read ${job.name} case study`} className="text-link card-case-link" data-track="project_open">Read case study<Icon name="diagonal" /></Link>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-heading">
          <Reveal className="section-heading"><h2 id="skills-heading">Skills</h2></Reveal>
          <div className="skills-grid">
            {orderedSkillGroups.map((group) => (
              <Card className="skill-group" key={group.title}>
                <CardHeader className="skill-card-header"><CardTitle><h3><Icon name={group.icon} />{group.title}</h3></CardTitle></CardHeader>
                <CardContent className="skill-card-content"><ul className="tags">{group.skills.map((skill) => <li key={skill}><SkillBadge skill={skill} /></li>)}</ul></CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <Reveal className="section-heading"><h2 id="projects-heading">Built to be explored.</h2></Reveal>
          <div className="repo-layout">
            <InteractiveCard className="project-card-motion" effect="lift">
              <Card className="featured-repo case-card">
                <CardHeader className="project-card-header">
                  <div className="repo-title">
                    <Image src="/projects/freecoda-mark.svg" alt="" width={40} height={40} unoptimized />
                    <span>{freecoda.name}</span><span className="repo-period">{freecoda.period.split(" · ")[0]}</span>
                  </div>
                  <CardTitle><h3><Link href={`/work/${freecoda.slug}`} className="card-case-link" data-track="project_open">{freecoda.title}</Link></h3></CardTitle>
                  <CardDescription>I built an open-source AI assistant across web, desktop, and terminal, with a shared TypeScript agent and reviewable project actions.</CardDescription>
                </CardHeader>
                <CardContent className="project-card-content">
                  <ul className="feature-points"><li>Shared agent, Electron app, terminal CLI, and Next.js service</li><li>Separate approvals for file edits and commands</li><li>Conversation sync and PostgreSQL usage accounting</li></ul>
                  <ul className="tags">{freecoda.tags.map((tag) => <li key={tag}><SkillBadge skill={tag} /></li>)}</ul>
                </CardContent>
                <CardFooter className="actions project-card-actions">
                  <Button asChild><a href={freecoda.website} target="_blank" rel="noopener noreferrer">Visit Freecoda<Icon name="external" data-icon="inline-end" /></a></Button>
                  <Button asChild variant="outline"><a href={freecoda.repository} target="_blank" rel="noopener noreferrer">GitHub<Icon name="github" data-icon="inline-end" /></a></Button>
                  <Button asChild variant="ghost"><Link href={`/work/${freecoda.slug}`} data-track="project_open">Read case study<Icon name="diagonal" data-icon="inline-end" /></Link></Button>
                </CardFooter>
              </Card>
            </InteractiveCard>
            <div className="repo-archive">
              {projects.filter((project) => project.slug !== "freecoda").map((project) => (
                <Card key={project.slug} className="repo-archive-item case-card">
                  <CardHeader>
                    {project.period && <CardDescription className="repo-archive-period">{project.period.split(" · ")[0]}</CardDescription>}
                    <CardTitle><h3><Link href={`/work/${project.slug}`} className="card-case-link" data-track="project_open">{project.name}<Icon name="diagonal" /></Link></h3></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                    <ul className="career-tech" aria-label={`${project.name} technologies`}>
                      {project.tags.map((tag) => <li key={tag}><SkillBadge skill={tag} /></li>)}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {project.repository ? (
                      <a href={project.repository} className="text-link" target="_blank" rel="noopener noreferrer">Source code<Icon name="github" /></a>
                    ) : (
                      <Link href={`/work/${project.slug}`} className="text-link" data-track="project_open">Read project<Icon name="diagonal" /></Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
