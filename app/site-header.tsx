import Link from "next/link";
import { ThemeToggle } from "./theme";
export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Elliot Shohet home">es<span>.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact" className="nav-contact">Contact</Link><a href="/elliot-shohet-resume.pdf" data-track="resume_download">Résumé ↓</a><ThemeToggle /></nav></header>;
}
