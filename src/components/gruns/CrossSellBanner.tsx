import Image from "next/image";
import Link from "next/link";

const variantInfo = {
  adults: {
    name: "Adults",
    href: "/gruns/adults",
    image: "/images/gruns/product-adults-patches.webp",
    patchCount: 90,
    tagline: "Same plant-powered formula, sized for grown-ups.",
  },
  kids: {
    name: "Kids",
    href: "/gruns/kids",
    image: "/images/gruns/product-kids-patches-v2.jpg",
    patchCount: 120,
    tagline: "Fun designs they'll actually want to wear. Safe for ages 2+.",
  },
};

export function CrossSellBanner({
  currentVariant,
}: {
  currentVariant: "adults" | "kids";
}) {
  const other = currentVariant === "adults" ? variantInfo.kids : variantInfo.adults;

  return (
    <section className="bg-[var(--gr-cream)] py-14 md:py-16 px-4 md:px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-[var(--gr-cream)] flex items-center justify-center shrink-0 overflow-hidden">
            <Image
              src={other.image}
              alt={`Luna Naturals ${other.name} patches`}
              width={160}
              height={160}
              className="w-full h-full object-contain p-2"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-bold text-[var(--gr-accent)] uppercase tracking-widest mb-2">
              Also Available
            </p>
            <h3 className="gr-display italic text-2xl md:text-3xl text-[var(--gr-dark)] leading-tight mb-2">
              Luna Naturals — {other.name}
            </h3>
            <p className="text-sm text-[var(--gr-sage)] mb-1">
              {other.tagline}
            </p>
            <p className="text-xs text-[var(--gr-sage)] mb-5">
              {other.patchCount} patches per pack
            </p>
            <Link
              href={other.href}
              className="inline-block bg-[var(--gr-green-dark)] text-white font-bold text-sm px-8 py-3 rounded-full hover:brightness-125 transition"
            >
              Shop {other.name} Patches
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
