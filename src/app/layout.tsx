import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hims | Men's Telehealth for Hair, ED, Weight Loss & Mental Health | Hims",
  description: "Men's healthcare, built for real life. Get access to expert-backed weight loss care, ED treatment options, in-depth lab testing, testosterone support, and more—all 100% online.",
  icons: {
    apple: "https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/apple-touch-icon-hims",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
