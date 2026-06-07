import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everyday Dose® Official Site | Best Mushroom Coffee",
  description:
    "Everyday Dose mushroom coffee combines functional mushrooms, collagen protein, and nootropics to provide clean energy, focus, and better health.",
};

export default function EverydayDoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} everydaydose-root min-h-full flex flex-col antialiased`}
    >
      {children}
    </div>
  );
}
