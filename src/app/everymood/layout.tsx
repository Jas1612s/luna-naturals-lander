import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Every Mood — Premium Self-Care Essentials",
  description:
    "Premium self-care essentials that move the moment. Hair & body mists, hand sanitizers, lip balms, and body oils.",
  icons: {
    icon: "/images/everymood/favicon.webp",
  },
};

export default function EveryMoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`everymood-root ${bricolage.variable}`}>{children}</div>
  );
}
