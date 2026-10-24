import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <Button asChild variant="ghost" size="sm" className="px-1 sm:px-4">
          <Link href="/#about">About</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="px-1 sm:px-4">
          <Link href="/#work">Work</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="px-1 sm:px-4">
          <Link href="/#skills">Skills</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="px-1 sm:px-4">
          <Link href="/#projects">Projects</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="px-1 sm:px-4">
          <a
          href="/elliot-shohet-resume.pdf"
          data-track="resume_download"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Résumé PDF (opens in a new tab)"
        >
          Résumé
          </a>
        </Button>
      </nav>
      <ThemeToggle />
    </header>
  );
}
