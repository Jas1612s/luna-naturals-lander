import type { Metadata } from "next";
import { Oswald, Roboto, Open_Sans } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luna Naturals",
  description:
    "Luna Naturals Kids Mosquito Repellent Patches — plant-based, DEET-free protection for your family.",
};

export default function BugMDLunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bugmd-root ${oswald.variable} ${roboto.variable} ${openSans.variable}`}
    >
      {children}
    </div>
  );
}
