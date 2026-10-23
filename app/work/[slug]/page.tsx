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
import { Card } from "@/components/ui/card";
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
  const relatedProjects = project.repository ? projects : workProjects;
  const projectUrl = `https://elliotshohet.com/work/${project.slug}`;
  const collection = project.repository ? "Projects" : "Work";
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
            item: `https://elliotshohet.com/#${project.repository ? "projects" : "work"}`,
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
  const nextProject =
    relatedProjects[
      (relatedProjects.findIndex((item) => item.slug === project.slug) + 1) %
        relatedProjects.length
    ];
  return (
    <div className="site">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="case-study case-premium">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">
            <Icon name="globe" />
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={project.repository ? "/#projects" : "/#work"}>
            {collection}
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.name}</span>
        </nav>
        <header className="case-masthead">
          <h1>{project.title}</h1>
          <p className="case-deck">{project.subtitle}</p>
          {project.milestone && (
            <a
              className="case-company-milestone"
              href={project.milestone.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary">
                <Icon name="check" />
                {project.milestone.label}
                <Icon name="external" />
              </Badge>
            </a>
          )}
          <div className="case-meta">
            <span>
              <Icon name="briefcase" />
              {project.role}
            </span>
            <span>
              <Icon name="calendar" />
              {project.period}
            </span>
          </div>
          <div className="case-header-bottom">
            <ul className="case-technologies" aria-label="Project technologies">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <SkillBadge skill={tag} />
                </li>
              ))}
            </ul>
            <div className="case-source-actions">
              {project.repository && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.repository} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" data-icon="inline-start" />
                    View source
                  </a>
                </Button>
              )}
              {project.website && (
                <Button asChild size="sm">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <Icon name="globe" data-icon="inline-start" />
                    Visit {project.name}
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" size="sm">
                <a href="#case-overview">
                  <Icon name="code" data-icon="inline-start" />
                  Explore details
                </a>
              </Button>
            </div>
          </div>
        </header>
        <div className="case-reading-layout">
          <aside className="case-index" aria-label="Project guide">
            <div className="case-index-inner">
              <p className="eyebrow">Inside the project</p>
              <nav aria-label="On this page">
                <a href="#case-overview">Overview</a>
                {project.sections.map((section, index) => (
                  <a key={section.heading} href={`#case-chapter-${index + 1}`}>
                    {section.heading}
                  </a>
                ))}
                <a href="#case-flow">
                  <Icon name="workflow" />
                  {project.flowHeading}
                </a>
              </nav>
              <a
                className="case-index-back"
                href={project.repository ? "/#projects" : "/#work"}
              >
                <Icon name="left" />
                Back to {collection.toLowerCase()}
              </a>
            </div>
          </aside>
          <article className="case-article">
            <section
              id="case-overview"
              className="case-overview"
              aria-labelledby="case-overview-heading"
            >
              <h2 id="case-overview-heading">The project at a glance.</h2>
              <p className="case-lead">{project.summary}</p>
              <Card className="case-scope-panel">
                <Icon name="code" />
                <div>
                  <h3>
                    {project.repository ? "Implementation" : "My contribution"}
                  </h3>
                  <p>{project.contribution}</p>
                </div>
              </Card>
              <Card className="case-outcome-panel">
                {project.metric ? (
                  <div className="case-metric">
                    <strong>{project.metric.value}</strong>
                    <span>{project.metric.label}</span>
                  </div>
                ) : (
                  <Icon name="check" />
                )}
                <div>
                  <p className="eyebrow">
                    {project.metric ? "The result" : "Project scope"}
                  </p>
                  <p>{project.outcome}</p>
                </div>
              </Card>
            </section>
            {project.slug === "burn" && (
              <figure className="case-product-visual">
                <div>
                  <Image
                    src="/projects/burn-dashboard.png"
                    alt="Burn nutrition dashboard with calorie and macronutrient tracking"
                    width={660}
                    height={1370}
                    sizes="(max-width: 650px) 220px, 260px"
                  />
                </div>
                <figcaption>
                  <Icon name="phone" />
                  Burn’s mobile nutrition dashboard.
                </figcaption>
              </figure>
            )}
            {project.slug === "freecoda" && (
              <figure className="case-desktop-visual">
                <Image
                  src="/projects/freecoda-desktop-preview.webp"
                  alt="Freecoda desktop interface preview showing the conversation workspace"
                  width={1480}
                  height={950}
                  sizes="(max-width: 800px) 100vw, 760px"
                />
                <figcaption>Freecoda desktop interface preview from the public site.</figcaption>
              </figure>
            )}
            {project.sections.map((section, index) => (
              <section
                className="case-chapter"
                id={`case-chapter-${index + 1}`}
                key={section.heading}
                aria-labelledby={`case-title-${index + 1}`}
              >
                <div>
                  <h2 id={`case-title-${index + 1}`}>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}
          </article>
        </div>
        <section
          id="case-flow"
          className="case-process"
          aria-labelledby="case-flow-heading"
        >
          <div className="case-process-heading">
            <h2 id="case-flow-heading">{project.flowHeading}</h2>
          </div>
          <ol>
            {project.flow.map((step, index) => (
            <li key={step}>
                <span className="case-step-icon">
                  <Icon name={flowIcon(step)} />
                </span>
                <p>{step}</p>
                {index < project.flow.length - 1 && <Icon name="arrow" />}
              </li>
            ))}
          </ol>
        </section>
        <section className="case-closing" aria-label="Related work">
          <Link
            className="case-next-project"
            href={`/work/${nextProject.slug}`}
            data-track="project_open"
          >
            <span className="eyebrow">
              Explore another {project.repository ? "project" : "case study"}
            </span>
            <strong>{nextProject.name}</strong>
            <span>{nextProject.title}</span>
            <Icon name="diagonal" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
