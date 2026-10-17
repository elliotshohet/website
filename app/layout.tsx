import { Geist } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConversionTracking } from "./conversion-tracking";
import { SiteTheme } from "./theme";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import "./motion.css";
const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const title = "Elliot Shohet | Full-stack Engineer · AI Products";
const description = "Full-stack engineer building mobile, web, and AI coaching at Burn. TypeScript, React, Next.js, PostgreSQL, and LLM tools. Remote US or Los Angeles hybrid.";
export const metadata: Metadata = {
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  metadataBase: new URL("https://elliotshohet.com"), title, description,
  applicationName: "Elliot Shohet", authors: [{ name: "Elliot Shohet", url: "https://elliotshohet.com" }],
  alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { title, description, url: "https://elliotshohet.com", type: "website", locale: "en_US", siteName: "Elliot Shohet" },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/opengraph-image", alt: "Elliot Shohet — Full-stack Engineer. AI products, end to end." }] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" data-theme="dark" suppressHydrationWarning><body className={geist.variable}><SiteTheme><a className="skip-link" href="#main">Skip to content</a>{children}<Toaster position="top-right" richColors closeButton offset={24} mobileOffset={16} /></SiteTheme><Analytics /><SpeedInsights /><ConversionTracking /></body></html>;
}
