import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrailPatch - Kids Tick Repellent Stickers | NATPAT",
  description:
    "100% safe, eco-friendly tick protection. Natural tick repellent stickers for kids — DEET-free, designed in Australia. Protect your kids without chemicals.",
};

export default function TrailPatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${bebasNeue.variable} ${roboto.variable}`}>
      {children}
    </div>
  );
}
