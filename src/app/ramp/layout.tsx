import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-ramp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramp | Finance Automation Built for Modern Business",
  description:
    "Ramp is the all-in-one spend management platform combining corporate cards, expense management, accounts payable, travel, procurement, and accounting automation.",
};

export default function RampLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} min-h-full flex flex-col antialiased`}
      style={{ fontFamily: "var(--font-ramp), Inter, sans-serif" }}
    >
      {children}
    </div>
  );
}
