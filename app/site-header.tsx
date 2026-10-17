import Link from "next/link";
import { ThemeToggle } from "./theme";
export function SiteHeader() {
  return <header className="site-header">
    <Link className="site-signature" href="/#about" aria-label="Elliot Shohet home">es<span>.</span></Link>
    <nav aria-label="Main navigation">
      <Link href="/#work">Work</Link><Link href="/#projects">Projects</Link><Link href="/#skills">Skills</Link>
      <a href="/elliot-shohet-resume.pdf" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="Résumé PDF (opens in a new tab)">Résumé ↗</a>
      <Link className="nav-contact" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
      <ThemeToggle />
    </nav>
  </header>;
}
