import { Button } from "@/components/ui/button";
import { Icon } from "./ui-icon";
import "./navigation.css";

export function SiteFooter() {
  return (
    <footer className="site-footer portfolio-footer" id="contact">
      <div className="footer-bottom">
        <p>Elliot Shohet<span>Full-stack Engineer</span></p>
        <nav className="footer-links" aria-label="Footer">
          <Button asChild variant="ghost" size="sm">
            <a href="mailto:elliot.shohet@gmail.com" data-track="email_click">
              <Icon name="mail" data-icon="inline-start" />Contact
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://github.com/elliotshohet" target="_blank" rel="me noopener noreferrer">
              <Icon name="github" data-icon="inline-start" />GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="https://www.linkedin.com/in/elliotshohet/" target="_blank" rel="me noopener noreferrer">
              <Icon name="linkedin" data-icon="inline-start" />LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="/elliot-shohet-resume.pdf" target="_blank" rel="noopener noreferrer" data-track="resume_download">
              <Icon name="resume" data-icon="inline-start" />Résumé
            </a>
          </Button>
          <Button asChild variant="outline" size="icon-lg" className="footer-back-top">
            <a href="#top" aria-label="Back to top"><Icon name="up" /></a>
          </Button>
        </nav>
      </div>
    </footer>
  );
}
