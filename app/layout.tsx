import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 metadataBase: new URL("https://elliotshohet.com"),
 title: "Elliot Shohet — Software Engineer",
 description: "Elliot Shohet. Software engineer and builder.",
 alternates: { canonical: "/" },
 openGraph: { title: "Elliot Shohet", description: "Software engineer & builder.", url: "https://elliotshohet.com", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
