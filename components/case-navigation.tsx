"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type CaseSection = { id: string; label: string };

type CaseNavigationProps = {
  sections: CaseSection[];
  backHref: string;
  backLabel: string;
};

export function CaseNavigation({ sections, backHref, backLabel }: CaseNavigationProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="case-toc">
      <Link className="case-toc-back" href={backHref}>
        <ArrowLeft aria-hidden="true" />
        {backLabel}
      </Link>
      <nav className="case-toc-links" aria-label="On this page">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            className={cn("case-toc-link", activeId === id && "is-active")}
            href={`#${id}`}
            aria-current={activeId === id ? "location" : undefined}
            onClick={() => setActiveId(id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
