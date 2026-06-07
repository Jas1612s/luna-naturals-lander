import type { Metadata } from "next";
import { Jost, Josefin_Sans } from "next/font/google";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LunaNaturals – Effective Protection for Every Adventure",
  description: "Wipes, sprays, bracelets, patches—engineered to keep bugs at bay. DEET-free, all-natural, eco-friendly.",
};

export default function LunaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${jost.variable} ${josefinSans.variable} luna-root min-h-full flex flex-col antialiased`}>
      {children}
    </div>
  );
}
