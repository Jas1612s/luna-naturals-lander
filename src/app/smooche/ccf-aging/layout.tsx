import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "My kids haven't had a single mosquito bite all summer — and I never spray them | The Parent Report",
  description:
    "If you're tired of wrestling your kids with bug spray every time they go outside — one mom's discovery might change your summer forever.",
  openGraph: {
    title:
      "My kids haven't had a single mosquito bite all summer — and I never spray them",
    description:
      "If you're tired of wrestling your kids with bug spray every time they go outside — one mom's discovery might change your summer forever.",
    siteName: "Luna Naturals",
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
