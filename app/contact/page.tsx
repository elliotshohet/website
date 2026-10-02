import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../site-header";
export const metadata: Metadata = {
  title: "Contact Elliot Shohet | Software Engineering Opportunities",
  description: "Contact Elliot Shohet about senior software engineering roles, including remote opportunities, projects, and collaborations.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Let’s build something useful | Elliot Shohet", description: "Senior software engineering roles, remote opportunities, projects, and collaborations.", url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Elliot Shohet", description: "Senior software engineering roles, remote opportunities, projects, and collaborations." },
};
export default function Contact() {
  return <div className="site"><SiteHeader /><main id="main" className="contact-page"><div className="contact-intro"><p className="eyebrow">Let’s talk</p><h1>A role, a project,<br />or a good idea<span>.</span></h1><p>I’m open to senior software engineering roles, including remote opportunities. You can also get in touch about a project or collaboration.</p><a className="direct-email" href="mailto:elliot.shohet@gmail.com" data-track="email_click">elliot.shohet@gmail.com ↗</a><p className="contact-detail">React · TypeScript · Node.js · React Native · AI integrations</p><Link href="/elliot-shohet-resume.pdf" className="text-link" data-track="resume_download">Download my résumé ↓</Link></div></main><footer><Link href="/">← Back to portfolio</Link><a href="https://www.linkedin.com/in/elliotshohet/">Find me on LinkedIn ↗</a></footer></div>;
}
