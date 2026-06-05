import type { Metadata } from "next";
import { Work_Sans, DM_Mono } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-gruns-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-gruns-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grüns Daily Nutrition",
  description:
    "Daily Nutrition Never Tasted So Good. 60+ whole foods, 20+ vitamins and minerals in one convenient gummy pack.",
};

export default function GrunsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`gruns-root ${workSans.variable} ${dmMono.variable} min-h-full flex flex-col antialiased`}
    >
      {children}
    </div>
  );
}
