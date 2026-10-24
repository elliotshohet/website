import { DM_Sans, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConversionTracking } from "./conversion-tracking";
import { SiteTheme } from "./theme";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import "./motion.css";
const bodyFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const title = "Elliot Shohet | Full-stack Engineer · AI Products";
const description =
  "Full-stack engineer building mobile, web, and AI coaching at Burn. TypeScript, React, Next.js, PostgreSQL, and LLM tools.";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8f7" },
    { media: "(prefers-color-scheme: dark)", color: "#112d34" },
  ],
};
export const metadata: Metadata = {
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  metadataBase: new URL("https://elliotshohet.com"),
  title,
  description,
  applicationName: "Elliot Shohet",
  authors: [{ name: "Elliot Shohet", url: "https://elliotshohet.com" }],
  alternates: { canonical: "/" },
  robots: { "max-image-preview": "large" },
  openGraph: {
    title,
    description,
    url: "https://elliotshohet.com",
    type: "website",
    locale: "en_US",
    siteName: "Elliot Shohet",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        alt: "Elliot Shohet — Full-stack Engineer. AI products, end to end.",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme="light"
      suppressHydrationWarning
    >
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://elliotshohet.com/#website",
            url: "https://elliotshohet.com",
            name: "Elliot Shohet",
            description,
            inLanguage: "en",
            author: {
              "@type": "Person",
              "@id": "https://elliotshohet.com/#person",
              name: "Elliot Shohet",
              url: "https://elliotshohet.com",
            },
          }).replace(/</g, "\\u003c") }}
        />
        <SiteTheme>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            offset={24}
            mobileOffset={16}
          />
        </SiteTheme>
        <Analytics />
        <SpeedInsights />
        <ConversionTracking />
        {process.env.NODE_ENV === "production" && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              if (["elliotshohet.com", "www.elliotshohet.com"].includes(window.location.hostname)) {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-YKPCVREDHD', {
                  allow_google_signals: false,
                  allow_ad_personalization_signals: false
                });
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YKPCVREDHD';
                document.head.appendChild(script);
              }
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
