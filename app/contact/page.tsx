import { Icon } from "../ui-icon";
import { CopyEmailButton } from "../copy-email-button";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../site-header";
export const metadata: Metadata = {
  title: "Contact Elliot Shohet | Senior Full-Stack Engineer",
  description: "Contact Elliot Shohet about senior full-stack and AI product engineering roles. Remote US and Los Angeles hybrid opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Hire Elliot Shohet | Senior Full-Stack Engineer", description: "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.", url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Elliot Shohet", description: "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.", images: [{ url: "/opengraph-image", alt: "Elliot Shohet — Senior Full-Stack Engineer. AI products, end to end." }] },
};
export default function Contact() {
  return <div className="site"><SiteHeader /><main id="main" className="contact-page"><div className="contact-intro"><p className="eyebrow"><Icon name="mail" />Contact Elliot Shohet</p><h1>Building an AI product?<br />Let’s talk<span>.</span></h1><p>I’m interested in senior full-stack and AI product engineering roles: remote across the US or hybrid in Los Angeles. My work connects web and mobile experiences with APIs, LLM tools, and the infrastructure behind them.</p><div className="actions"><CopyEmailButton className="button primary"><Icon name="mail" />Email</CopyEmailButton><a className="button secondary" href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn <Icon name="external" /></a><a className="button secondary" href="https://github.com/elliotshohet" target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub<Icon name="external" /></a></div><p className="contact-detail">TypeScript · React · Next.js · Node.js · PostgreSQL · OpenAI / MCP</p><a href="/elliot-shohet-resume.pdf" className="text-link" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="View résumé PDF (opens in a new tab)"><Icon name="download" />View my résumé <Icon name="external" /></a></div></main><footer><Link href="/"><Icon name="left" />Back to portfolio</Link><a href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />Find me on LinkedIn <Icon name="external" /></a></footer></div>;
}
