import { Icon } from "../ui-icon";
import { CopyEmailButton } from "../copy-email-button";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../site-header";
export const metadata: Metadata = {
  title: "Contact Elliot Shohet | Full-stack Engineer",
  description: "Contact Elliot Shohet about full-stack and AI product engineering roles. Remote US and Los Angeles hybrid opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Hire Elliot Shohet | Full-stack Engineer", description: "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.", url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Elliot Shohet", description: "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.", images: [{ url: "/opengraph-image", alt: "Elliot Shohet — Full-stack Engineer. AI products, end to end." }] },
};
export default function Contact() {
  return <div className="site"><SiteHeader /><main id="main" tabIndex={-1} className="contact-page"><div className="contact-intro"><p className="eyebrow"><Icon name="mail" />Contact Elliot Shohet</p><h1>Building an AI product?<br />Let’s talk<span>.</span></h1><p>I’m looking for full-stack and AI product engineering roles with ownership from interface through backend delivery. Recent work includes AI coaching, health-data integrations, native mobile apps, and subscription services. Remote in the US or hybrid in Los Angeles.</p><div className="actions"><a className="button primary" href="mailto:elliot.shohet@gmail.com" data-track="email_click"><Icon name="mail" />Email Elliot</a><CopyEmailButton className="button secondary"><Icon name="copy" />Copy email</CopyEmailButton><a className="button secondary" href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn <Icon name="external" /></a><a className="button secondary" href="https://github.com/elliotshohet" target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub<Icon name="external" /></a></div><a className="contact-email" href="mailto:elliot.shohet@gmail.com" data-track="email_click">elliot.shohet@gmail.com</a><p className="contact-detail">TypeScript · React · Next.js · Node.js · PostgreSQL · OpenAI / MCP</p><a href="/elliot-shohet-resume.pdf" className="text-link" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="View résumé PDF (opens in a new tab)"><Icon name="download" />View my résumé <Icon name="external" /></a></div></main><footer><Link href="/"><Icon name="left" />Back to portfolio</Link><a href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />Find me on LinkedIn <Icon name="external" /></a></footer></div>;
}
