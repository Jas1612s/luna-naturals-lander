import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hims — The care you've always deserved",
  description:
    "Hims offers treatments for sexual health, hair, skin, mental health, weight loss, and more. Get care from licensed providers online.",
};

export default function HimsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
