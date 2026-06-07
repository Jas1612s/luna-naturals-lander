import Image from "next/image";

const products = [
  {
    name: "Mosquito Repellent Patches — Adults (90 ct)",
    price: "$14.99",
    originalPrice: "$24.99",
    image: "/images/gruns/adults-pack-moss.jpg",
    badge: "Best Seller",
    badgeBg: "bg-[var(--gr-green-dark)]",
    cardBg: "#6B7258",
    subtitle: "90 patches — Less than $0.17 each",
    href: "/gruns/adults",
    savePercent: 40,
  },
  {
    name: "Mosquito Repellent Patches — Kids (120 ct)",
    price: "$14.99",
    originalPrice: "$24.99",
    image: "/images/gruns/product-kids-patches-v2.jpg",
    badge: "Kid Favorite",
    badgeBg: "bg-[var(--gr-accent)]",
    cardBg: "#6B7258",
    subtitle: "120 patches — Less than $0.13 each",
    href: "/gruns/kids",
    savePercent: 40,
  },
];

export function FindYourFlavor() {
  return (
    <section className="bg-[var(--gr-cream-light)] pt-6 pb-12 md:pt-8 md:pb-16 px-4 md:px-6 border-t border-[var(--gr-dark)]/5">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="gr-display italic text-4xl md:text-5xl text-[var(--gr-green)] text-center mb-10">
          Pick Your Protection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="flex flex-col group">
              <div
                className="relative rounded-xl overflow-hidden group-hover:ring-2 ring-[var(--gr-green)] transition"
                style={{ backgroundColor: product.cardBg }}
              >
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 ${product.badgeBg} text-white text-xs font-semibold px-3 py-1 rounded-md z-10`}
                  >
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full aspect-square object-contain p-2 md:p-3 scale-125"
                />
                {/* Save overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-14 pb-4 px-4">
                  <p className="gr-display italic text-white text-2xl md:text-3xl leading-tight">
                    Save up to <span className="text-[var(--gr-gold)]">{product.savePercent}%</span>
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Subscribe &amp; save · Free shipping on 2+ packs
                  </p>
                </div>
              </div>

              <h3 className="mt-3 font-bold text-base text-[var(--gr-dark)]">
                {product.name}
              </h3>
              <p className="text-sm text-[var(--gr-dark)]">
                {product.originalPrice ? (
                  <>
                    Starts at{" "}
                    <span className="font-semibold">{product.price}</span>{" "}
                    <span className="line-through text-gray-400">
                      {product.originalPrice}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold">{product.price}</span>
                )}
              </p>
              {product.subtitle && (
                <p className="text-xs text-[var(--gr-sage)] mt-0.5">{product.subtitle}</p>
              )}

              <span className="mt-3 w-full py-2.5 bg-[var(--gr-green)] text-white text-sm font-semibold rounded-full hover:bg-[var(--gr-green-dark)] transition-colors text-center block">
                Shop Now
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
