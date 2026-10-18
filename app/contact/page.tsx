import { Icon } from "../ui-icon";
import { CopyEmailButton } from "../copy-email-button";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { workProjects } from "@/lib/projects";
import { SiteHeader } from "../site-header";
export const metadata: Metadata = {
  title: "Contact Elliot Shohet | Full-stack Engineer",
  description:
    "Contact Elliot Shohet about full-stack and AI product engineering roles. Remote US and Los Angeles hybrid opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hire Elliot Shohet | Full-stack Engineer",
    description:
      "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Elliot Shohet",
    description:
      "Full-stack engineering for AI products. Remote US and Los Angeles hybrid opportunities.",
    images: [
      {
        url: "/opengraph-image",
        alt: "Elliot Shohet — Full-stack Engineer. AI products, end to end.",
      },
    ],
  },
};
export default function Contact() {
  return (
    <div className="site">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="contact-page">
        <div className="contact-intro">
          <h1>
            Good work starts
            <br />
            with a conversation.
          </h1>
          <p>
            I’m looking for full-stack and AI product engineering roles with
            ownership from interface through backend delivery.
          </p>
          <p>
            Building a team or working on a product that could use that
            experience? I’d like to hear about it.
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
            <a
              className="button primary"
              href="mailto:elliot.shohet@gmail.com"
              data-track="email_click"
            >
              <Icon name="mail" />
              Email Elliot
            </a>
            <CopyEmailButton className="button secondary">
              <Icon name="copy" />
              Copy email
            </CopyEmailButton>
          </div>
          <div className="contact-channels">
            <a
              href="https://www.linkedin.com/in/elliotshohet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
              <Icon name="external" />
            </a>
            <a
              href="https://github.com/elliotshohet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
              GitHub
              <Icon name="external" />
            </a>
          </div>
          <div className="contact-detail">
            <h2>What I bring to the team</h2>
            <p>
              Hands-on TypeScript engineering across mobile and web, AI
              coaching, health-data integrations, subscriptions, and small-team
              leadership.
            </p>
            <a
              href="/elliot-shohet-resume.pdf"
              className="text-link"
              data-track="resume_download"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View résumé PDF (opens in a new tab)"
            >
              View my résumé
              <Icon name="download" />
            </a>
          </div>
        </div>
        <aside className="contact-profile" aria-label="About Elliot">
          <Image
            src="/elliot-shohet-headshot.png"
            alt="Elliot Shohet"
            width={640}
            height={640}
            sizes="(max-width: 600px) 200px, 280px"
            preload
          />
          <h2>Elliot Shohet</h2>
          <p>Full-stack engineer building AI products, end to end.</p>
          <dl>
            <dt>Based in</dt>
            <dd>Los Angeles, California</dd>
            <dt>Looking for</dt>
            <dd>Remote US or Los Angeles hybrid</dd>
            <dt>Currently</dt>
            <dd>{workProjects[0].role} at Burn</dd>
          </dl>
        </aside>
      </main>
      <footer>
        <Link href="/">
          <Icon name="left" />
          Back to portfolio
        </Link>
        <a
          href="/elliot-shohet-resume.pdf"
          data-track="resume_download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé PDF
          <Icon name="download" />
        </a>
      </footer>
    </div>
  );
}
