import "../../case-study.css";
import { Reveal } from "@/components/portfolio-motion";
import { CaseNavigation } from "@/components/case-navigation";
import { Badge } from "@/components/ui/badge";
import { SkillBadge } from "@/components/skill-badge";
import type { Metadata } from "next";
import { Icon, type IconName } from "../../ui-icon";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allProjects,
  projects,
  workProjects,
  getProject,
} from "../../../lib/projects";
import { SiteHeader } from "../../site-header";
import { SiteFooter } from "../../site-footer";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function flowIcon(step: string): IconName {
  if (/record|database|postgres|storage/i.test(step)) return "database";
  if (/auth|identity|consent|permission/i.test(step)) return "user";
  if (/release|deploy|deliver|production|cluster/i.test(step)) return "workflow";
  if (/verify|verification|review|result/i.test(step)) return "check";
  if (/AI|coach|agent|model/i.test(step)) return "spark";
  if (/API|backend|service|infrastructure/i.test(step)) return "server";
  if (/mobile|desktop|client/i.test(step)) return "phone";
  return "code";
}

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }));
}
// Resolve unknown slugs through notFound() so they share the site’s 404 UI.
// Known projects remain prerendered by generateStaticParams.
export const dynamicParams = true;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const title = `${project.name}: ${project.title} | Elliot Shohet`;
  const image = {
    url: `/work/${project.slug}/opengraph-image/social`,
    width: 1200,
    height: 630,
    alt: `${project.name} — ${project.title}. Engineering by Elliot Shohet.`,
  };
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
      siteName: "Elliot Shohet",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [image],
    },
  };
}
export default async function Project({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const isPersonalProject = projects.some((item) => item.slug === project.slug);
  const relatedProjects = isPersonalProject ? projects : workProjects;
  const projectUrl = `https://elliotshohet.com/work/${project.slug}`;
  const collection = isPersonalProject ? "Projects" : "Work";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": projectUrl,
        url: projectUrl,
        name: `${project.name}: ${project.title}`,
        description: project.description,
        inLanguage: "en",
        isPartOf: { "@id": "https://elliotshohet.com/#website" },
        mainEntity: { "@id": `${projectUrl}#project` },
        author: {
          "@type": "Person",
          "@id": "https://elliotshohet.com/#person",
          name: "Elliot Shohet",
          url: "https://elliotshohet.com",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${projectUrl}/opengraph-image/social`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": project.repository ? "SoftwareSourceCode" : "CreativeWork",
        "@id": `${projectUrl}#project`,
        name: project.name,
        headline: project.title,
        description: project.description,
        url: projectUrl,
        inLanguage: "en",
        keywords: project.tags,
        mainEntityOfPage: { "@id": projectUrl },
        ...(project.repository
          ? { codeRepository: project.repository }
          : {
              author: {
                "@type": "Person",
                name: "Elliot Shohet",
                url: "https://elliotshohet.com",
              },
            }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://elliotshohet.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: collection,
            item: `https://elliotshohet.com/#${isPersonalProject ? "projects" : "work"}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: projectUrl,
          },
        ],
      },
    ],
  };
  const currentIndex = relatedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = relatedProjects[(currentIndex + 1) % relatedProjects.length];
  const previousProject = relatedProjects[(currentIndex - 1 + relatedProjects.length) % relatedProjects.length];
  const collectionHref = isPersonalProject ? "/#projects" : "/#work";
  const brandImages: Record<string, { src: string; darkSrc?: string; width: number; height: number }> = {
    burn: { src: "/companies/burn.svg", darkSrc: "/companies/burn-dark.svg", width: 126, height: 36 },
    niftys: { src: "/companies/niftys.png", width: 64, height: 64 },
    hypernet: { src: "/companies/hypernet.svg", width: 168, height: 43 },
    freecoda: { src: "/projects/freecoda-mark.svg", width: 56, height: 56 },
  };
  const brand = brandImages[project.slug];
  const flowIsSequence = !/scope/i.test(project.flowHeading);
  const FlowList = flowIsSequence ? "ol" : "ul";
  return (
    <div className="site">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="case-study case-redesign">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <nav className="case-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href={collectionHref}>{collection}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{project.name}</span>
        </nav>

        <header className="case-hero-grid">
          <Reveal className="case-hero-main">
            <h1>{project.title}</h1>
            <p className="case-subtitle">{project.subtitle}</p>
            <ul className="case-tech-list" aria-label="Project technologies">
              {project.tags.map((tag) => <li key={tag}><SkillBadge skill={tag} /></li>)}
            </ul>
          </Reveal>
          <Card className="case-facts">
            <CardHeader>
              <CardTitle>
                <div className={`case-brand case-brand-${project.slug}`}>
                  {brand ? (
                    <>
                      <Image className={brand.darkSrc ? "logo-light" : undefined} src={brand.src} alt={project.name} width={brand.width} height={brand.height} unoptimized />
                      {brand.darkSrc && <Image className="logo-dark" src={brand.darkSrc} alt={project.name} width={brand.width} height={brand.height} unoptimized />}
                    </>
                  ) : <span>{project.name}</span>}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="case-facts-list">
                <div><dt>Role</dt><dd>{project.role}</dd></div>
                {project.period && <div><dt>Period</dt><dd>{project.period}</dd></div>}
              </dl>
              {project.milestone && (
                <a className="case-milestone" href={project.milestone.url} target="_blank" rel="noopener noreferrer">
                  <Badge variant="secondary"><Icon name="check" />{project.milestone.label}<Icon name="external" /></Badge>
                </a>
              )}
            </CardContent>
            {(project.website || project.repository) && (
              <CardFooter className="case-actions">
                {project.website && <Button asChild size="sm"><a href={project.website} target="_blank" rel="noopener noreferrer">Visit {project.name}<Icon name="globe" data-icon="inline-end" /></a></Button>}
                {project.repository && <Button asChild variant="outline" size="sm"><a href={project.repository} target="_blank" rel="noopener noreferrer">View source<Icon name="github" data-icon="inline-end" /></a></Button>}
              </CardFooter>
            )}
          </Card>
        </header>

        <section id="case-overview" className="case-introduction" aria-labelledby="case-overview-heading">
          <div className="case-summary">
            <h2 id="case-overview-heading">Overview</h2>
            <p className="case-summary-text">{project.summary}</p>
          </div>
          <Card className="case-contribution">
            <CardHeader><CardTitle><h3>My contribution</h3></CardTitle></CardHeader>
            <CardContent><p>{project.contribution}</p></CardContent>
          </Card>
        </section>

        <Card className="case-result-panel">
          <CardHeader><CardTitle><h2>{project.metric ? "Measured result" : "Outcome"}</h2></CardTitle></CardHeader>
          <CardContent>
            {project.metric && <div className="case-result-metric"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></div>}
            <p>{project.outcome}</p>
          </CardContent>
        </Card>

        <div className="case-content-grid">
          <CaseNavigation
            sections={[
              { id: "case-overview", label: "Overview" },
              ...project.sections.map((section, index) => ({ id: `case-chapter-${index + 1}`, label: section.heading })),
              { id: "case-flow", label: project.flowHeading },
            ]}
            backHref={collectionHref}
            backLabel={`Back to ${collection.toLowerCase()}`}
          />
          <article className="case-narrative" aria-label={`${project.name} engineering details`}>
            {project.slug === "burn" && (
              <figure className="case-visual case-visual-phone">
                <Image src="/projects/burn-dashboard.png" alt="Burn nutrition dashboard with calorie and macronutrient tracking" width={660} height={1370} sizes="(max-width: 600px) 200px, 220px" />
                <figcaption>Burn’s mobile nutrition dashboard.</figcaption>
              </figure>
            )}
            {project.slug === "freecoda" && (
              <figure className="case-visual case-visual-desktop">
                <Image src="/projects/freecoda-desktop-preview.webp" alt="Freecoda desktop interface preview showing the conversation workspace" width={1480} height={950} sizes="(max-width: 800px) 100vw, 760px" />
                <figcaption>Freecoda’s desktop conversation workspace.</figcaption>
              </figure>
            )}
            {project.slug === "machine-learning-doodle-jump" && (
              <figure className="case-visual case-visual-chart">
                <Image src="/projects/doodle-learning-chart.png" alt="Doodle Jump project report charts showing score per life and states explored during training" width={736} height={300} sizes="(max-width: 800px) calc(100vw - 80px), 750px" />
                <figcaption>Training plots from the university project’s report: score per life and explored states. These are historical results, not a current benchmark.</figcaption>
              </figure>
            )}
            {project.sections.map((section, index) => (
              <section className="case-detail-section" id={`case-chapter-${index + 1}`} key={section.heading} aria-labelledby={`case-title-${index + 1}`}>
                <Reveal><h2 id={`case-title-${index + 1}`}>{section.heading}</h2><p>{section.text}</p></Reveal>
              </section>
            ))}
          </article>
        </div>

        <section id="case-flow" className="case-flow-panel" aria-labelledby="case-flow-heading">
          <h2 id="case-flow-heading">{project.flowHeading}</h2>
          <FlowList className="case-flow-list">
            {project.flow.map((step, index) => (
              <li key={step}>
                <span className="case-flow-icon"><Icon name={flowIcon(step)} /></span>
                <p>{step}</p>
                {flowIsSequence && index < project.flow.length - 1 && <Icon name="arrow" />}
              </li>
            ))}
          </FlowList>
        </section>

        <nav className="case-pagination" aria-label={`More ${collection.toLowerCase()}`}>
          <Link className="case-prev-project" href={`/work/${previousProject.slug}`} data-track="project_open">
            <span><Icon name="left" />Previous {isPersonalProject ? "project" : "case study"}</span>
            <strong>{previousProject.name}</strong><p>{previousProject.title}</p>
          </Link>
          <Link className="case-next-project" href={`/work/${nextProject.slug}`} data-track="project_open">
            <span>Next {isPersonalProject ? "project" : "case study"}<Icon name="diagonal" /></span>
            <strong>{nextProject.name}</strong><p>{nextProject.title}</p>
          </Link>
        </nav>
        <Link className="case-back-link case-bottom-back" href={collectionHref}><Icon name="left" />All {collection.toLowerCase()}</Link>
      </main>
      <SiteFooter />
    </div>
  );
}
