import Image from "next/image";

const products = [
  {
    name: "Mosquito Repellent Patches — Adults (90 ct)",
    price: "$14.99",
    originalPrice: "",
    image: "/images/gruns/product-adults-patches.png",
    badge: "Best Seller",
    badgeBg: "bg-[#282D0F]",
    cardBg: "#7F846C",
    subtitle: "90 patches — Less than $0.17 each",
  },
  {
    name: "Mosquito Repellent Patches — Kids (90 ct)",
    price: "$14.99",
    originalPrice: "",
    image: "/images/gruns/product-kids-patches.png",
    badge: "Kid Favorite",
    badgeBg: "bg-[#F4693E]",
    cardBg: "#7F846C",
    subtitle: "90 patches — Less than $0.17 each",
  },
];

export function FindYourFlavor() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="gr-display italic text-4xl md:text-5xl text-[var(--gr-green)] text-center mb-10">
          Pick Your Protection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col">
              <div
                className="relative rounded-xl overflow-hidden"
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
                  className="w-full aspect-square object-contain"
                />
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
              {"subtitle" in product && product.subtitle && (
                <p className="text-xs text-[var(--gr-sage)] mt-0.5">{product.subtitle}</p>
              )}

              <button className="mt-3 w-full py-2.5 bg-[var(--gr-green)] text-white text-sm font-semibold rounded-full hover:bg-[var(--gr-green-dark)] transition-colors cursor-pointer">
                Add to Cart
              </button>
              <a
                href="#"
                className="mt-2 text-center text-sm font-medium text-[var(--gr-dark)] underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
