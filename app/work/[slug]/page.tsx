import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../../lib/projects";
import { SiteHeader } from "../../site-header";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug); if (!project) notFound();
  const title = `${project.title} | Elliot Shohet`;
  return { title, description: project.description, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title, description: project.description, url: `/work/${project.slug}`, type: "article" }, twitter: { card: "summary_large_image", title, description: project.description } };
}
export default async function Project({ params }: Props) {
  const project = getProject((await params).slug); if (!project) notFound();
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.description, url: `https://elliotshohet.com/work/${project.slug}`, author: { "@type": "Person", name: "Elliot Shohet", url: "https://elliotshohet.com" } };
  return <div className="site"><SiteHeader /><main id="main" className="case-study">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#work">Work</Link><span>/</span><span aria-current="page">{project.name}</span></nav>
    <header className="case-heading"><p className="eyebrow">{project.name} / Project overview</p><h1>{project.title}<span>.</span></h1><p className="case-subtitle">{project.subtitle}</p><div className="case-facts"><span>{project.role}</span><span>{project.period}</span></div><ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></header>
    <div className="case-grid"><div className="case-copy"><p className="case-summary">{project.summary}</p>{project.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}</div><aside className="case-aside">{project.slug === "burn" ? <figure><Image src="/projects/burn-dashboard.png" alt="Burn nutrition dashboard with calorie and macronutrient tracking" width={660} height={1370} sizes="(max-width: 700px) 80vw, 300px" /><figcaption>Product image from Burn’s marketing site.</figcaption></figure> : <div className="result-card"><p className="eyebrow">Contract usage</p><strong>100,000+</strong><p>NFT mints supported</p></div>}<div className="outcome"><p className="eyebrow">The work in focus</p><p>{project.outcome}</p></div></aside></div>
    <section className="system-flow"><h2>{project.slug === "burn" ? "The product flow" : "The release workflow"}</h2><ol>{project.flow.map(step => <li key={step}>{step}</li>)}</ol></section>
    <section className="case-cta"><h2>Building something similar?</h2><p>Let’s talk about your team, the problem, and where I could help.</p><a className="button primary" href="mailto:elliot.shohet@gmail.com" data-track="email_click">Email Elliot ↗</a><Link className="text-link" href={`/work/${project.slug === "burn" ? "niftys" : "burn"}`} data-track="project_open">Explore another project →</Link></section>
  </main><footer><Link href="/#work">← All work</Link><a href="/elliot-shohet-resume.pdf" data-track="resume_download">Download résumé ↓</a></footer></div>;
}
