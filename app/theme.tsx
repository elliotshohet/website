"use client";
import { useEffect } from "react";
import { Icon } from "./ui-icon";
import { ThemeProvider, useTheme } from "next-themes";
function ThemeColor() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const tags = document.querySelectorAll<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    tags.forEach((tag) => {
      tag.removeAttribute("media");
      tag.content = resolvedTheme === "dark" ? "#112d34" : "#f5f8f7";
    });
  }, [resolvedTheme]);
  return null;
}
export function SiteTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="elliot-color-theme"
      disableTransitionOnChange
    >
      <ThemeColor />
      {children}
    </ThemeProvider>
  );
}
export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Toggle color theme"
      onClick={() =>
        setTheme((current) => (current === "light" ? "dark" : "light"))
      }
    >
      <span className="show-dark">
        <Icon name="sun" /> <span>Light mode</span>
      </span>
      <span className="show-light">
        <Icon name="moon" /> <span>Dark mode</span>
      </span>
    </button>
  );
}
