import { Badge } from "@/components/ui/badge";
import { SkillBadge } from "@/components/skill-badge";
import type { Metadata } from "next";
import { Icon } from "../../ui-icon";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, projects, workProjects, getProject } from "../../../lib/projects";
import { SiteHeader } from "../../site-header";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return allProjects.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug); if (!project) notFound();
  const title = `${project.name} — ${project.repository ? "GitHub Project" : "Engineering Case Study"} | Elliot Shohet`;
  return { title, description: project.description, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title, description: project.description, url: `/work/${project.slug}`, type: "article", siteName: "Elliot Shohet", locale: "en_US" }, twitter: { card: "summary_large_image", title, description: project.description, images: [{ url: "/opengraph-image", alt: "Elliot Shohet — Full-Stack Engineer" }] } };
}
export default async function Project({ params }: Props) {
  const project = getProject((await params).slug); if (!project) notFound();
  const relatedProjects = project.repository ? projects : workProjects;
  const projectUrl = `https://elliotshohet.com/work/${project.slug}`;
  const collection = project.repository ? "Projects" : "Work";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": project.repository ? "SoftwareSourceCode" : "CreativeWork",
        "@id": `${projectUrl}#project`,
        name: project.name,
        headline: project.title,
        description: project.description,
        url: projectUrl,
        inLanguage: "en",
        keywords: project.tags,
        ...(project.repository
          ? { codeRepository: project.repository }
          : { author: { "@type": "Person", name: "Elliot Shohet", url: "https://elliotshohet.com" } }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://elliotshohet.com" },
          { "@type": "ListItem", position: 2, name: collection, item: `https://elliotshohet.com/#${project.repository ? "projects" : "work"}` },
          { "@type": "ListItem", position: 3, name: project.name, item: projectUrl },
        ],
      },
    ],
  };
  const nextProject = relatedProjects[(relatedProjects.findIndex(item => item.slug === project.slug) + 1) % relatedProjects.length];
  return <div className="site"><SiteHeader /><main id="main" tabIndex={-1} className="case-study case-premium">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/"><Icon name="globe" />Home</Link><span aria-hidden="true">/</span><Link href={project.repository ? "/#projects" : "/#work"}>{collection}</Link><span aria-hidden="true">/</span><span aria-current="page">{project.name}</span></nav>
    <header className="case-masthead">
      <div className="case-masthead-top"><p className="eyebrow"><Icon name={project.repository ? "github" : "briefcase"} />{project.repository ? "Repository project" : "Engineering case study"}</p><Badge variant="outline" className="case-project-name">{project.name}</Badge></div>
      <h1>{project.title}</h1>
      <p className="case-deck">{project.subtitle}</p>
      {project.milestone && <a className="case-company-milestone" href={project.milestone.url} target="_blank" rel="noopener noreferrer"><Badge variant="secondary"><Icon name="check" />{project.milestone.label}<Icon name="external" /></Badge></a>}
      <div className="case-meta metadata-badges"><Badge variant="outline"><Icon name="briefcase" />{project.role}</Badge><Badge variant="outline"><Icon name="calendar" />{project.period}</Badge></div>
      <div className="case-header-bottom"><ul className="case-technologies" aria-label="Project technologies">{project.tags.map(tag => <li key={tag}><SkillBadge skill={tag} /></li>)}</ul><div className="case-source-actions">{project.repository && <a className="button primary" href={project.repository} target="_blank" rel="noopener noreferrer"><Icon name="github" />View source<Icon name="external" /></a>}{project.website && <a className="button primary" href={project.website} target="_blank" rel="noopener noreferrer"><Icon name="globe" />Visit {project.name}<Icon name="external" /></a>}<a className="case-read-link" href="#case-overview">Explore the details<Icon name="down" /></a></div></div>
    </header>
    <div className="case-reading-layout">
      <aside className="case-index" aria-label="Project guide"><div className="case-index-inner"><p className="eyebrow">Inside the project</p><nav aria-label="On this page"><a href="#case-overview"><span>00</span>Overview</a>{project.sections.map((section, index) => <a key={section.heading} href={`#case-chapter-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.heading}</a>)}<a href="#case-flow"><Icon name="workflow" />{project.flowHeading}</a></nav><a className="case-index-back" href={project.repository ? "/#projects" : "/#work"}><Icon name="left" />Back to {collection.toLowerCase()}</a></div></aside>
      <article className="case-article">
        <section id="case-overview" className="case-overview" aria-labelledby="case-overview-heading"><p className="eyebrow">00 / Overview</p><h2 id="case-overview-heading">The project at a glance.</h2><p className="case-lead">{project.summary}</p><div className="case-scope-panel"><Icon name="code" /><div><h3>{project.repository ? "Implementation" : "My contribution"}</h3><p>{project.contribution}</p></div></div><div className="case-outcome-panel">{project.metric ? <div className="case-metric"><strong>{project.metric.value}</strong><span>{project.metric.label}</span></div> : <Icon name="check" />}<div><p className="eyebrow">{project.metric ? "The result" : "Project scope"}</p><p>{project.outcome}</p></div></div></section>
        {project.slug === "burn" && <figure className="case-product-visual"><div><Image src="/projects/burn-dashboard.png" alt="Burn nutrition dashboard with calorie and macronutrient tracking" width={660} height={1370} sizes="(max-width: 650px) 220px, 260px" /></div><figcaption><Icon name="phone" />Burn’s mobile nutrition dashboard.</figcaption></figure>}
        {project.sections.map((section, index) => <section className="case-chapter" id={`case-chapter-${index + 1}`} key={section.heading} aria-labelledby={`case-title-${index + 1}`}><div className="case-chapter-number">{String(index + 1).padStart(2, "0")}</div><div><h2 id={`case-title-${index + 1}`}>{section.heading}</h2><p>{section.text}</p></div></section>)}
      </article>
    </div>
    <section id="case-flow" className="case-process" aria-labelledby="case-flow-heading"><div className="case-process-heading"><p className="eyebrow"><Icon name="workflow" />How it connects</p><h2 id="case-flow-heading">{project.flowHeading}</h2></div><ol>{project.flow.map((step, index) => <li key={step}><span className="case-step-number">{String(index + 1).padStart(2, "0")}</span><p>{step}</p>{index < project.flow.length - 1 && <Icon name="arrow" />}</li>)}</ol></section>
    <section className="case-closing"><div><p className="eyebrow">Hiring a full-stack engineer?</p><h2>Let’s talk engineering.</h2><p>AI tools, mobile and web products, and the services behind them. Remote US or Los Angeles hybrid.</p><a className="button primary" href="mailto:elliot.shohet@gmail.com" data-track="email_click"><Icon name="mail" />Email Elliot</a></div><Link className="case-next-project" href={`/work/${nextProject.slug}`} target="_blank" rel="noopener noreferrer" data-track="project_open"><span className="eyebrow">Explore another {project.repository ? "project" : "case study"}</span><strong>{nextProject.name}</strong><span>{nextProject.title}</span><Icon name="diagonal" /></Link></section>
  </main><footer><Link href={project.repository ? "/#projects" : "/#work"}><Icon name="left" />{project.repository ? "All projects" : "All work"}</Link><a href="/elliot-shohet-resume.pdf" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="Download résumé PDF (opens in a new tab)"><Icon name="download" />Download résumé</a></footer></div>;
}
