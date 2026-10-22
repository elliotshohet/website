import Link from "next/link";
import { ThemeToggle } from "./theme";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link
        className="site-name"
        href="/#about"
        aria-label="Elliot Shohet home"
      >
        <svg
          className="signature-mark"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 7h16M8 16h12M8 25h16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M25 7v9H8v9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        elliot shohet
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#skills">Skills</Link>
        <a
          href="/elliot-shohet-resume.pdf"
          data-track="resume_download"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Résumé PDF (opens in a new tab)"
        >
          Résumé
        </a>
        <Button asChild variant="outline" className="nav-contact h-auto">
          <Link href="/contact">Let’s talk</Link>
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  );
}
