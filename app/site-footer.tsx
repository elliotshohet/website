import Link from "next/link";
import { Icon } from "./ui-icon";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-bottom">
        <p>Elliot Shohet</p>
        <nav className="footer-links" aria-label="Footer">
          <a href="mailto:elliot.shohet@gmail.com" data-track="email_click">
            <Icon name="mail" />Contact
          </a>
          <a href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="me noopener noreferrer">
            <Icon name="linkedin" />LinkedIn
          </a>
          <a href="https://github.com/elliotshohet" target="_blank" rel="me noopener noreferrer">
            <Icon name="github" />GitHub
          </a>
          <a href="/elliot-shohet-resume.pdf" target="_blank" rel="noopener noreferrer" data-track="resume_download">
            <Icon name="resume" />Résumé
          </a>
          <Link href="/#about"><Icon name="up" />Back to top</Link>
        </nav>
      </div>
    </footer>
  );
}
