"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme";
import { Icon } from "./ui-icon";
import "./navigation.css";

const sections = [
  { id: "about", label: "About", icon: "user" },
  { id: "work", label: "Work", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "projects", label: "Projects", icon: "layers" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [visibleSection, setVisibleSection] = useState<string>("about");
  const activeSection = pathname === "/" ? visibleSection : pathname.startsWith("/work/") ? "work" : null;

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setVisibleSection(visible.target.id);
      },
      { rootMargin: "-10% 0px -65% 0px", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header portfolio-header">
      <nav className="portfolio-nav" aria-label="Main navigation">
        {sections.map(({ id, label, icon }) => (
          <Button
            asChild
            key={id}
            variant={activeSection === id ? "secondary" : "ghost"}
            size="sm"
            className="h-12 flex-col gap-0 px-1 has-[>svg]:px-1 sm:h-11 sm:flex-row sm:gap-1.5 sm:px-4 sm:has-[>svg]:px-4"
          >
            <Link
              href={`/#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => setVisibleSection(id)}
            >
              <Icon name={icon} data-icon="inline-start" />
              {label}
            </Link>
          </Button>
        ))}
        <Button asChild variant="ghost" size="sm" className="h-12 flex-col gap-0 px-1 has-[>svg]:px-1 sm:h-11 sm:flex-row sm:gap-1.5 sm:px-4 sm:has-[>svg]:px-4">
          <a
            href="/elliot-shohet-resume.pdf"
            data-track="resume_download"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Résumé PDF (opens in a new tab)"
          >
            <Icon name="resume" data-icon="inline-start" />
            Résumé
          </a>
        </Button>
      </nav>
      <ThemeToggle />
    </header>
  );
}
