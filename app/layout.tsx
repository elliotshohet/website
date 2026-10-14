import { Geist } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConversionTracking } from "./conversion-tracking";
import { SiteTheme } from "./theme";
import "./globals.css";
const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const title = "Elliot Shohet | Senior Fullstack Engineer · Open to Remote Roles";
const description = "Elliot Shohet is a senior fullstack engineer owning web, mobile, and AI products end to end—from zero-to-one ideation to production. Open to senior fullstack engineering roles, including remote opportunities.";
export const metadata: Metadata = {
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  metadataBase: new URL("https://elliotshohet.com"), title, description,
  applicationName: "Elliot Shohet", authors: [{ name: "Elliot Shohet", url: "https://elliotshohet.com" }],
  alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { title, description, url: "https://elliotshohet.com", type: "website", locale: "en_US", siteName: "Elliot Shohet" },
  twitter: { card: "summary_large_image", title, description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" data-theme="dark" suppressHydrationWarning><body className={geist.variable}><SiteTheme><a className="skip-link" href="#main">Skip to content</a>{children}</SiteTheme><Analytics /><SpeedInsights /><ConversionTracking /></body></html>;
}
