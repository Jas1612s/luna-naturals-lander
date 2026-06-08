import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "I thought foundation was over for me at 52 – until I discovered this – Smooche",
  description:
    "If you've noticed your foundation settling into every fine line, turning orange by noon, and making you look older instead of younger—this might be exactly what you've been looking for.",
  openGraph: {
    title:
      "I thought foundation was over for me at 52 – until I discovered this",
    description:
      "If you've noticed your foundation settling into every fine line, turning orange by noon, and making you look older instead of younger—this might be exactly what you've been looking for.",
    siteName: "Smooche",
    type: "website",
  },
};

export default function CCFAgingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Adobe Typekit — futura-pt font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://use.typekit.net/cqg2bea.css" />
      <div className="ccf-aging-root">{children}</div>
    </>
  );
}
