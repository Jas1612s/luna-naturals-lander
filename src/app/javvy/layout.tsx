import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "11 Reasons Why Everyone's Switching to Javvy Protein Refresher in 2026",
  description:
    "Light, refreshing energy with thoughtfully selected ingredients. Javvy Refreshers support hydration, provide a gentle caffeine boost, deliver crisp flavor with 0g of sugar, and include 10g of clean protein.",
  openGraph: {
    title: "11 Reasons Why Everyone's Switching to Javvy Protein Refresher in 2026",
    description:
      "Light, refreshing energy with thoughtfully selected ingredients. Javvy Refreshers support hydration, provide a gentle caffeine boost, deliver crisp flavor with 0g of sugar, and include 10g of clean protein.",
    images: ["/seo/javvy/og-image.png"],
    type: "website",
    siteName: "Javvy Coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "11 Reasons Why Everyone's Switching to Javvy Protein Refresher in 2026",
    description:
      "Light, refreshing energy with thoughtfully selected ingredients. Javvy Refreshers support hydration, provide a gentle caffeine boost, deliver crisp flavor with 0g of sugar, and include 10g of clean protein.",
    images: ["/seo/javvy/og-image.png"],
    site: "@javvycoffee",
    creator: "Javvy Coffee",
  },
  icons: {
    icon: "/seo/javvy/favicon-32.png",
    apple: "/seo/javvy/favicon-256.png",
  },
  other: {
    "theme-color": "#2a2552",
  },
};

export default function JavvyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`javvy-root ${figtree.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
