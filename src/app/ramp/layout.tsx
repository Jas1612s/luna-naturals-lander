import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      className={`${plusJakartaSans.variable} min-h-full flex flex-col antialiased`}
      style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
    >
      {children}
    </div>
  );
}
