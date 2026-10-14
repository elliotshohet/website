import { Icon } from "./ui-icon";
import Link from "next/link";
import { ThemeToggle } from "./theme";
export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Elliot Shohet home">elliot</Link><nav aria-label="Main navigation"><Link href="/#work"><Icon name="briefcase" />Work</Link><Link href="/#about"><Icon name="user" />About</Link><Link href="/#contact" className="nav-contact"><Icon name="mail" />Contact</Link><a href="/elliot-shohet-resume.pdf" data-track="resume_download"><Icon name="download" />Résumé</a><ThemeToggle /></nav></header>;
}
