import Link from "next/link";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Icon } from "./ui-icon";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="site">
      <SiteHeader />
      <main id="main" tabIndex={-1} className="not-found-page">
        <p className="eyebrow">404</p>
        <h1>This page isn’t here.</h1>
        <p>The link may be out of date. Explore my engineering work or get in touch.</p>
        <div className="actions">
          <Button asChild className="button primary h-auto">
            <Link href="/#work"><Icon name="left" data-icon="inline-start" />Explore my work</Link>
          </Button>
          <Button asChild variant="outline" className="button secondary h-auto">
            <Link href="/#contact">Contact Elliot</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
