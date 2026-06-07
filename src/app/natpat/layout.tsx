import type { Metadata } from "next";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NATPAT Health and Wellness Patches: Your Path to Wellbeing",
  description:
    "NATPAT offers natural patches and stickers for sleep, mood, focus, mosquito repellent, and more. DEET-free, safe for kids (0+), designed in Australia.",
};

export default function NatPatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${barlow.variable} natpat-root min-h-full flex flex-col antialiased`}
    >
      {children}
    </div>
  );
}
