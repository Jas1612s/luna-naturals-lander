import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libido Lollipops | Lick",
  description:
    "Natural aphrodisiac lollipops infused with Damiana, Maca Root, and Cherry. Loved by 60,000+ happy customers.",
};

export default function SmoocheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="smooche-root">
      {children}
    </div>
  );
}
