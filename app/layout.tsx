import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteTheme } from "./theme";
import "./globals.css";
const title = "Elliot Shohet | Senior Software Engineer · Los Angeles & Remote";
const description = "Elliot Shohet is a senior software engineer building web, mobile, and AI products with TypeScript, React, Next.js, Node.js, and PostgreSQL. Los Angeles or remote.";
export const metadata: Metadata = {
  metadataBase: new URL("https://elliotshohet.com"), title, description,
  applicationName: "Elliot Shohet", authors: [{ name: "Elliot Shohet", url: "https://elliotshohet.com" }],
  alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { title, description, url: "https://elliotshohet.com", type: "website", locale: "en_US", siteName: "Elliot Shohet" },
  twitter: { card: "summary_large_image", title, description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><body><SiteTheme><a className="skip-link" href="#main">Skip to content</a>{children}</SiteTheme><Analytics /><SpeedInsights /></body></html>;
}
