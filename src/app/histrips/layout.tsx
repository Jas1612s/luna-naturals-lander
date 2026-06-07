import type { Metadata } from "next";
import { Urbanist, DM_Serif_Display } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luna Naturals | Effective Bug Protection",
  description:
    "Nature-powered bug protection. Effective, plant-based formulas that keep bugs away. DEET-free, lab-tested, and trusted by 300,000+ families.",
};

export default function HiStripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${urbanist.variable} ${dmSerif.variable} histrips-root min-h-full flex flex-col antialiased`}
    >
      {children}
    </div>
  );
}
