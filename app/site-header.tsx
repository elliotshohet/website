import { Icon } from "./ui-icon";
import Link from "next/link";
import { ThemeToggle } from "./theme";
import { CopyEmailButton } from "./copy-email-button";
export function SiteHeader() {
  return <header className="site-header"><nav aria-label="Main navigation"><Link href="/#about"><Icon name="user" />About</Link><Link href="/#skills"><Icon name="layers" />Skills</Link><Link href="/#work"><Icon name="briefcase" />Work</Link><Link href="/#projects"><Icon name="github" />Projects</Link><a href="/elliot-shohet-resume.pdf" data-track="resume_download" target="_blank" rel="noopener noreferrer" aria-label="Résumé PDF (opens in a new tab)"><Icon name="download" />Résumé</a><CopyEmailButton /><a className="nav-social" href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="noopener noreferrer" aria-label="Elliot Shohet on LinkedIn" title="LinkedIn"><Icon name="linkedin" /><span className="sr-only">LinkedIn</span></a><a className="nav-social" href="https://github.com/elliotshohet" target="_blank" rel="noopener noreferrer" aria-label="Elliot Shohet on GitHub" title="GitHub"><Icon name="github" /><span className="sr-only">GitHub</span></a><ThemeToggle /></nav></header>;
}
