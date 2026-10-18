import Link from "next/link";
import { SiteHeader } from "./site-header";
import { Icon } from "./ui-icon";

export default function NotFound() {
  return (
    <div className="site">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="not-found-page">
        <p className="eyebrow">404</p>
        <h1>This page isn’t here.</h1>
        <p>The link may be out of date. Explore my engineering work or get in touch.</p>
        <div className="actions">
          <Link className="button primary" href="/#work"><Icon name="left" />Explore my work</Link>
          <Link className="button secondary" href="/contact">Contact Elliot</Link>
        </div>
      </main>
    </div>
  );
}
