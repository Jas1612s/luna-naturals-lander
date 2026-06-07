import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-treyd",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Treyd — Sell first. Pay suppliers later.",
  description:
    "Stop tying up capital in inventory and services that slow your cash flow. We'll help you buy now, pay later, and scale your business faster.",
};

export default function TreydLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.variable} min-h-full flex flex-col antialiased`}
      style={{ fontFamily: "var(--font-treyd), Inter, sans-serif", backgroundColor: "#0A0A0A" }}
    >
      {children}
    </div>
  );
}
