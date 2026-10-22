import { SkillBadge } from "@/components/skill-badge";
import { CopyEmailButton } from "./copy-email-button";
import { Icon, type IconName } from "./ui-icon";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "./site-header";
import { projects, workProjects } from "../lib/projects";
import canonicalSkills from "../lib/skills.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
      "Full-stack engineer building health tracking and AI coaching at Burn, with experience in mobile, web, APIs, payment infrastructure, and small-team leadership. Open to remote US and Los Angeles hybrid roles.",
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
  if (!burnProject) throw new Error("Burn project is missing from canonical work data");
  return (
    <div className="site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section
          id="about"
          className="intro-hero"
          aria-labelledby="intro-heading"
        >
          <div className="intro-layout">
            <div>
              <p className="intro-eyebrow"><span /> DESIGN MINDED ENGINEERING · LOS ANGELES</p>
              <h1 id="intro-heading">
                Elliot
                <br />
                Shohet.
              </h1>
              <p className="intro-title">Full-stack Engineer</p>
              <p className="intro-description">
                I build AI products across mobile, web, and the services that
                make them work.
              </p>
              <div className="actions">
                <Button asChild size="lg" className="button primary h-auto">
                  <a href="#work">
                    Explore my work
                    <Icon name="down" data-icon="inline-end" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="button secondary h-auto"
                >
                  <a
                    href="/elliot-shohet-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="resume_download"
                  >
                    View résumé
                    <Icon name="download" data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            </div>
            <aside className="portrait-note">
              <div className="portrait-frame">
                <Image
                  src="/elliot-shohet-headshot.png"
                  alt="Elliot Shohet"
                  width={640}
                  height={640}
                  sizes="(max-width: 600px) 94px, (max-width: 800px) 190px, (max-width: 1100px) 230px, 270px"
                  preload
                />
              </div>
              <div className="portrait-links">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Icon name="github" />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" />
                </a>
                <Link href="/contact" aria-label="Contact Elliot">
                  <Icon name="mail" />
                </Link>
              </div>
            </aside>
          </div>
          <div className="intro-bottom">
            <p>
              Currently building health tracking & AI coaching at{" "}
              <a
                href="https://burncal.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Burn
              </a>
              .
            </p>
            <p>
              <span className="availability-dot" />
              Open to remote US & LA hybrid roles
            </p>
          </div>
        </section>
        <section id="work" className="section" aria-labelledby="work-heading">
          <div className="section-heading">
            <h2 id="work-heading">Work, from end to end.</h2>
            <p>
              Interfaces people use. Infrastructure they depend on. Ownership
              across both.
            </p>
          </div>
          <Card className="featured-work">
            <div className="featured-copy">
              <div className="work-topline">
                <span className="company-wordmark">
                  <Image className="logo-light" src="/companies/burn.svg" alt="Burn" width={126} height={36} unoptimized />
                  <Image className="logo-dark" src="/companies/burn-dark.svg" alt="Burn" width={126} height={36} unoptimized />
                </span>
                <span>{burnProject.period}</span>
              </div>
              <h3>
                Health tracking.
                <br />
                Meet AI coaching.
              </h3>
              <p>{burnProject.summary}</p>
              <ul className="feature-points">
                <li>Mobile & web on a shared TypeScript stack</li>
                <li>Streaming AI with tools that act on health records</li>
                <li>Native sign-in, subscriptions & connected health data</li>
              </ul>
              <Link
                className="button primary"
                href="/work/burn"
                data-track="project_open"
              >
                Inside the project
                <Icon name="diagonal" />
              </Link>
              <p className="featured-role">{burnProject.role}</p>
            </div>
            <figure className="product-stage">
              <Image
                src="/projects/burn-dashboard.png"
                alt="Burn mobile dashboard showing nutrition, calories, and meal tracking"
                width={660}
                height={1370}
                sizes="(max-width: 600px) 210px, (max-width: 800px) 205px, 238px"
              />
              <figcaption>Burn’s mobile nutrition dashboard.</figcaption>
            </figure>
          </Card>
          <div className="past-work">
            {workProjects.filter((project) => project.slug !== "burn").map((job) => (
              <Card className="past-work-row" key={job.slug}>
                <div>
                  {companyLogos[job.slug] && (
                    <Image
                      className={`work-company-logo work-company-logo-${job.slug}`}
                      {...companyLogos[job.slug]}
                      alt=""
                      unoptimized
                    />
                  )}
                  <h3>{job.name}</h3>
                  <span>{job.period}</span>
                </div>
                <div>
                  <p>{job.summary}</p>
                  <div className="work-result">
                    {job.metric && (
                      <span>
                        <strong>{job.metric.value}</strong> {job.metric.label}
                      </span>
                    )}
                    <Link
                      href={`/work/${job.slug}`}
                      className="text-link"
                      data-track="project_open"
                    >
                      Read case study
                      <Icon name="diagonal" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="career-note">
            <Icon name="briefcase" />
            <p>
              Previously at i2Chain, building desktop software, access controls,
              and AWS services.
            </p>
            <a
              className="text-link"
              href="/elliot-shohet-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-track="resume_download"
            >
              Full résumé
              <Icon name="download" />
            </a>
          </Card>
        </section>
        <section
          id="projects"
          className="section"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <h2 id="projects-heading">Built to be explored.</h2>
            <p>
              Personal projects, working code, and a few earlier experiments.
            </p>
          </div>
          <div className="repo-layout">
            {projects
              .filter((p) => p.slug === "freecoda")
              .map((project) => (
                <Card className="featured-repo" key={project.slug}>
                  <div className="repo-title">
                    <Image src="/projects/freecoda-mark.svg" alt="" width={36} height={36} unoptimized />
                    <span>{project.name}</span>
                    <span className="repo-period">{project.period}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="feature-points">
                    <li>Desktop, web, and terminal clients</li>
                    <li>Project changes with explicit permissions</li>
                    <li>Free hosted beta with clear allowance limits</li>
                  </ul>
                  <ul className="tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <SkillBadge skill={tag} />
                      </li>
                    ))}
                  </ul>
                  <div className="actions">
                    <a
                      href={project.website}
                      className="button primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Freecoda
                      <Icon name="external" />
                    </a>
                    <a
                      href={project.repository}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                      <Icon name="external" />
                    </a>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-link"
                      data-track="project_open"
                    >
                      Inside Freecoda
                      <Icon name="diagonal" />
                    </Link>
                  </div>
                  <figure className="freecoda-preview">
                    <Image
                      src="/projects/freecoda-desktop-preview.webp"
                      alt="Freecoda desktop interface preview showing the conversation workspace"
                      width={1480}
                      height={950}
                      sizes="(max-width: 800px) 100vw, 560px"
                    />
                    <figcaption>Freecoda desktop interface preview</figcaption>
                  </figure>
                </Card>
              ))}
            <Card className="repo-archive">
              <h3>From the archive</h3>
              {projects
                .filter((p) => p.slug !== "freecoda")
                .map((project) => (
                  <Card key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      data-track="project_open"
                    >
                      <h4>{project.name}</h4>
                      <Icon name="diagonal" />
                    </Link>
                    <p>{project.description}</p>
                    <a
                      href={project.repository}
                      className="text-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code
                      <Icon name="github" />
                    </a>
                  </Card>
                ))}
            </Card>
          </div>
        </section>
        <section
          id="skills"
          className="section"
          aria-labelledby="skills-heading"
        >
          <div className="section-heading">
            <h2 id="skills-heading">My working toolkit.</h2>
            <p>TypeScript at the center. The right tools around it.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <Card className="skill-group" key={group.title}>
                <CardHeader className="skill-card-header">
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="skill-card-content">
                  <ul className="tags">
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <SkillBadge skill={skill} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="education-note">
            <Image
              className="logo-light"
              src="/companies/uc-davis-light.svg"
              alt="UC Davis"
              width={130}
              height={45}
              unoptimized
            />
            <Image
              className="logo-dark"
              src="/companies/uc-davis.svg"
              alt="UC Davis"
              width={130}
              height={45}
              unoptimized
            />
            <p>
              B.S. Computer Science
              <span>University of California, Davis, 2012–2017</span>
            </p>
          </div>
        </section>
        <section
          id="contact"
          className="contact section"
          aria-labelledby="contact-heading"
        >
          <div>
            <h2 id="contact-heading">
              Something worth
              <br />
              building together?
            </h2>
            <p>
              I’m looking for a role building useful AI products, with ownership
              across interfaces, APIs, data, and delivery.
            </p>
            <a
              className="contact-email"
              href="mailto:elliot.shohet@gmail.com"
              data-track="email_click"
            >
              elliot.shohet@gmail.com
              <Icon name="diagonal" />
            </a>
            <div className="actions">
              <CopyEmailButton className="button secondary">
                <Icon name="copy" />
                Copy email
              </CopyEmailButton>
              <Link href="/contact" className="text-link">
                More ways to connect
                <Icon name="diagonal" />
              </Link>
            </div>
          </div>
          <div className="contact-location">
            <Icon name="globe" />
            <p>
              Based in Los Angeles.
              <br /> Open to remote US
              <br /> & local hybrid roles.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>
          Elliot Shohet<span>Full-stack engineer</span>
        </p>
        <div>
          <a href={github} target="_blank" rel="me noopener noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="me noopener noreferrer">
            LinkedIn
          </a>
          <a href="#about">
            Back to top
            <Icon name="up" />
          </a>
        </div>
      </footer>
    </div>
  );
}
