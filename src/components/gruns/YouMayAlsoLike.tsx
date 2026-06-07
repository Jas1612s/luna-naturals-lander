import Image from "next/image";
import Link from "next/link";

const products: Record<
  string,
  { name: string; href: string; image: string; video?: string; patchCount: number; price: string; comparePrice: string; savings: string; tagline: string }
> = {
  adults: {
    name: "Adults Patches",
    href: "/gruns/adults",
    image: "/images/gruns/adults-lifestyle-box.webp",
    patchCount: 90,
    price: "$9.99",
    comparePrice: "$24.99",
    savings: "$15.00",
    tagline: "Plant-powered summer protection",
  },
  kids: {
    name: "Kids Patches",
    href: "/gruns/kids",
    image: "/images/gruns/product-kids-patches-v2.jpg",
    video: "/videos/gruns/kids-offer-video.mp4",
    patchCount: 120,
    price: "$9.99",
    comparePrice: "$24.99",
    savings: "$15.00",
    tagline: "Fun stickers they'll actually want to wear",
  },
};

export function YouMayAlsoLike({ currentVariant }: { currentVariant: "adults" | "kids" }) {
  const other = currentVariant === "adults" ? products.kids : products.adults;

  return (
    <section className="bg-[var(--gr-green-dark)] py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-[480px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[var(--gr-accent)] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            One-Time Offer &mdash; Save {other.savings}
          </div>
          <h2 className="gr-display italic text-2xl md:text-3xl text-white leading-tight">
            Complete Your Protection
          </h2>
          <p className="text-sm text-white/60 mt-2">
            Add {other.name} and protect the whole family.
          </p>
        </div>

        {/* Card */}
        <Link
          href={other.href}
          className="block rounded-2xl overflow-hidden group"
        >
          {/* Top: video or product image */}
          <div className="relative bg-gradient-to-br from-[var(--gr-green)] to-[var(--gr-green-dark)] flex items-center justify-center overflow-hidden">
            {other.video ? (
              <video
                src={other.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-square object-cover"
              />
            ) : (
              <div className="p-8">
                <Image
                  src={other.image}
                  alt={`Luna Naturals ${other.name}`}
                  width={240}
                  height={240}
                  className="w-[200px] h-[200px] object-contain group-hover:scale-105 transition-transform drop-shadow-2xl"
                />
              </div>
            )}
          </div>

          {/* Bottom: details */}
          <div className="bg-white p-6 text-center">
            <p className="text-[10px] font-bold text-[var(--gr-accent)] uppercase tracking-widest mb-1">
              Luna Naturals
            </p>
            <h3 className="font-bold text-xl text-[var(--gr-dark)] mb-1">
              {other.name}
            </h3>
            <p className="text-sm text-[var(--gr-sage)] mb-4">
              {other.tagline}
            </p>

            {/* Price row */}
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="text-2xl font-bold text-[var(--gr-dark)]">{other.price}</span>
              <span className="text-base text-[var(--gr-sage)] line-through">{other.comparePrice}</span>
              <span className="bg-[var(--gr-accent)]/10 text-[var(--gr-accent)] text-xs font-bold px-2.5 py-0.5 rounded-full">
                60% OFF
              </span>
            </div>
            <p className="text-xs text-[var(--gr-sage)] mb-5">
              {other.patchCount} patches &middot; Free shipping
            </p>

            {/* CTA */}
            <span className="block w-full py-3.5 bg-[var(--gr-accent)] text-white font-bold text-base rounded-full group-hover:brightness-110 transition text-center">
              Add to Order &mdash; {other.price}
            </span>

            <p className="text-[11px] text-[var(--gr-sage)] mt-3">
              30-day money-back guarantee &middot; Cancel anytime
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
