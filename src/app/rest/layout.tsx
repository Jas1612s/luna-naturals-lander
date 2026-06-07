import type { Metadata } from "next";
import { Urbanist, DM_Serif_Display } from "next/font/google";

const urbanist = Urbanist({
  variable: "--font-rest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-rest-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luna Naturals | Effective Bug Protection",
  description:
    "Nature-powered bug protection. Effective, plant-based formulas that keep you protected outdoors.",
};

export default function RestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${urbanist.variable} ${dmSerif.variable} rest-root min-h-full flex flex-col antialiased overflow-x-hidden`}
    >
      {children}
    </div>
  );
}
