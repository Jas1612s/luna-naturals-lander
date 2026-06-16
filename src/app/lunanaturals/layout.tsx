import type { Metadata } from "next";
import { Work_Sans, DM_Mono } from "next/font/google";
import { LiveOrderToast } from "@/components/gruns/LiveOrderToast";

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
  title: "Luna Naturals | Mosquito Repellent Patches",
  description:
    "Plant-powered mosquito protection for the whole family. DEET-free, pediatrician-reviewed patches that last up to 12 hours. Safe for kids and adults.",
};

export default function GrunsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`gruns-root ${workSans.variable} ${dmMono.variable} min-h-full flex flex-col antialiased overflow-x-hidden`}
    >
      {children}
      <LiveOrderToast />
    </div>
  );
}
