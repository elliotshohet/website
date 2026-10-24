import { SkillBadge } from "@/components/skill-badge";
import { Icon, type IconName } from "./ui-icon";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { projects, workProjects } from "../lib/projects";
import canonicalSkills from "../lib/skills.json";
import { Button } from "@/components/ui/button";
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
      "Full-stack engineer building health tracking and AI coaching at Burn, with experience in mobile, web, APIs, payment infrastructure, and small-team leadership.",
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
                <Button asChild size="lg">
                  <a href="#work">
                    Explore my work
                    <Icon name="briefcase" data-icon="inline-end" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <a
                    href="/elliot-shohet-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="resume_download"
                  >
                    View résumé
                    <Icon name="resume" data-icon="inline-end" />
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
                <a href="mailto:elliot.shohet@gmail.com" aria-label="Contact Elliot" data-track="email_click">
                  <Icon name="mail" />
                </a>
              </div>
              <div className="education-note">
                <Image
                  className="logo-light"
                  src="/companies/uc-davis-light.svg"
                  alt="UC Davis"
                  width={164}
                  height={42}
                  unoptimized
                />
                <Image
                  className="logo-dark"
                  src="/companies/uc-davis.svg"
                  alt="UC Davis"
                  width={164}
                  height={42}
                  unoptimized
                />
                <p>
                  B.S. Computer Science
                  <span>University of California, Davis, 2012–2017</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section id="work" className="section" aria-labelledby="work-heading">
          <div className="section-heading">
            <h2 id="work-heading">Work, from end to end.</h2>
          </div>
          <Card className="featured-work case-card">
            <div className="featured-copy">
              <div className="work-topline">
                <span className="company-wordmark">
                  <Image className="logo-light" src="/companies/burn.svg" alt="Burn" width={126} height={36} unoptimized />
                  <Image className="logo-dark" src="/companies/burn-dark.svg" alt="Burn" width={126} height={36} unoptimized />
                </span>
                <span>{burnProject.period}</span>
              </div>
              <p className="work-role">{burnProject.role}</p>
              <h3>
                <Link href="/work/burn" className="card-case-link" data-track="project_open">
                  Built health tracking and AI coaching across mobile and web.
                </Link>
              </h3>
              <p>{burnProject.summary}</p>
              <ul className="feature-points">
                {burnProject.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="actions work-project-actions">
                <Button asChild size="sm">
                  <a href={burnProject.website} target="_blank" rel="noopener noreferrer">
                    <Icon name="globe" data-icon="inline-start" />
                    Visit Burn
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/work/burn" data-track="project_open">
                    <Icon name="diagonal" data-icon="inline-start" />
                    Inside the project
                  </Link>
                </Button>
              </div>
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
              <Card className="past-work-row case-card" key={job.slug}>
                <div>
                  {companyLogos[job.slug] && (
                    <Image
                      className={`work-company-logo work-company-logo-${job.slug}`}
                      {...companyLogos[job.slug]}
                      alt={job.name}
                      unoptimized
                    />
                  )}
                  <h3 className={companyLogos[job.slug] ? "sr-only" : undefined}>{job.name}</h3>
                  <p className="work-role">{job.role}</p>
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
                      aria-label={`Read ${job.name} case study`}
                      className="text-link card-case-link"
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

        </section>
        <section
          id="skills"
          className="section"
          aria-labelledby="skills-heading"
        >
          <div className="section-heading">
            <h2 id="skills-heading">Skills</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <Card className="skill-group" key={group.title}>
                <CardHeader className="skill-card-header">
                  <CardTitle>
                    <Icon name={group.icon} />
                    {group.title}
                  </CardTitle>
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

        </section>
        <section
          id="projects"
          className="section"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <h2 id="projects-heading">Built to be explored.</h2>
          </div>
          <div className="repo-layout">
            {projects
              .filter((p) => p.slug === "freecoda")
              .map((project) => (
                <Card className="featured-repo case-card" key={project.slug}>
                  <div className="repo-title">
                    <Image src="/projects/freecoda-mark.svg" alt="" width={36} height={36} unoptimized />
                    <span>{project.name}</span>
                    <span className="repo-period">{project.period.split(" · ")[0]}</span>
                  </div>
                  <h3><Link href={`/work/${project.slug}`} className="card-case-link" data-track="project_open">{project.title}</Link></h3>
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
                    <Button asChild>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="external" data-icon="inline-start" />
                      Visit Freecoda
                    </a>
                    </Button>
                    <Button asChild variant="outline">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" data-icon="inline-start" />
                      GitHub
                    </a>
                    </Button>
                    <Button asChild variant="outline">
                    <Link
                      href={`/work/${project.slug}`}
                      data-track="project_open"
                    >
                      <Icon name="diagonal" data-icon="inline-start" />
                      Read case study
                    </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            <div className="repo-archive">
              {projects
                .filter((p) => p.slug !== "freecoda")
                .map((project) => (
                  <Card key={project.slug} className="repo-archive-item case-card">
                    <CardHeader>
                      <CardTitle>
                        <Link
                          href={`/work/${project.slug}`}
                          className="card-case-link"
                          data-track="project_open"
                        >
                          <h4>{project.name}</h4>
                          <Icon name="diagonal" />
                        </Link>
                      </CardTitle>
                      <CardDescription className="repo-archive-period">
                        {project.period.split(" · ")[0]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{project.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a
                        href={project.repository}
                        className="text-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code
                        <Icon name="github" />
                      </a>
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
