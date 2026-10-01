"use client";
import { ThemeProvider, useTheme } from "next-themes";
export function SiteTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="elliot-color-theme" disableTransitionOnChange>{children}</ThemeProvider>;
}
export function ThemeToggle() {
  const { setTheme } = useTheme();
  return <button className="theme-toggle" type="button" aria-label="Toggle color theme" onClick={() => setTheme(current => current === "light" ? "dark" : "light")}>
    <span className="show-dark">☀ <span>Light mode</span></span><span className="show-light">☾ <span>Dark mode</span></span>
  </button>;
}
