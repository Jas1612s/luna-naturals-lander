import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Product {
  rank: number;
  name: string;
  rating: string;
  tagline?: string;
  features?: string;
  image?: string;
  pros: string[];
  cons: string[];
  conclusion?: string;
}

const smooche: Product = {
  rank: 1,
  name: "smooche",
  rating: "4.9 / 5",
  tagline: "Our top-pick for 2025",
  features:
    "Pigment Adaptation Technology, Long-Lasting Wear, Skin-Loving Ingredients, SPF 15 Protection",
  image: "/images/smooche-ccf/ccf-product.png",
  pros: [
    "Contains all 4 essential features that make a foundation truly effective",
    "SPF 15 built-in sun protection",
    "Lasts 16+ hours without fading or oxidizing",
    "Nourishing ingredients that improve skin health",
    "Offers a 100% shade match guarantee",
    "Dermatologist approved",
    "Currently has a Buy 1 Get 1 Free deal",
  ],
  cons: ["Takes 30\u201360 seconds to fully adapt"],
  conclusion:
    "Smooche is the only foundation in our top 5 that includes all four essential features. With true pigment-adapting technology, 16+ hour wear, SPF 15, and skin-loving ingredients, it\u2019s the clear winner for mature skin.",
};

const runners: Product[] = [
  {
    rank: 2,
    name: "Seint",
    rating: "4.2 / 5",
    tagline: "Custom matching system, buildable pigments",
    pros: [
      "Customizable by mixing shades",
      "Cream-to-powder finish",
      "Long-wearing",
    ],
    cons: [
      "Requires buying multiple shades and manually mixing",
      "Not true color-adapting technology",
      "Can look cakey if over-applied",
      "No shade match guarantee",
    ],
  },
  {
    rank: 3,
    name: "BareMinerals",
    rating: "4.0 / 5",
    tagline: "Mineral-based, some tone adaptation",
    pros: ["Hydrating formula", "SPF 30", "Natural finish"],
    cons: [
      "Limited adapting range\u2014only works within similar tones",
      "Sheer coverage only",
      "Can oxidize on oily skin",
      "No shade match guarantee",
    ],
  },
  {
    rank: 4,
    name: "Chantecaille",
    rating: "4.0 / 5",
    tagline: "Gel-based with light-reflecting particles",
    pros: ["Lightweight feel", "Natural, dewy finish", "Luxury packaging"],
    cons: [
      "Not true color-adapting technology\u2014just light diffusion",
      "Extremely limited shade range",
      "Very expensive",
      "No shade match guarantee",
    ],
  },
  {
    rank: 5,
    name: "Armani",
    rating: "3.9 / 5",
    tagline: "Micro-fil technology, silky texture",
    pros: ["Luxurious texture", "Buildable coverage", "Iconic product"],
    cons: [
      "Not color-adapting at all\u2014traditional fixed shade foundation",
      "40 shades still don\u2019t match everyone",
      "Can oxidize significantly",
      "No shade match guarantee",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Stars                                                              */
/* ------------------------------------------------------------------ */

function Stars({ rating }: { rating: string }) {
  const numeric = parseFloat(rating);
  const full = Math.floor(numeric);
  const hasHalf = numeric - full >= 0.4;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <span className="inline-flex items-center gap-0.5 text-[#f59e0b]">
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f${i}`}
          className="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="h-4 w-4" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfStar)"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg
          key={`e${i}`}
          className="h-4 w-4 fill-[#d1d5db]"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Runner-up card                                                     */
/* ------------------------------------------------------------------ */

function RunnerCard({ product }: { product: Product }) {
  return (
    <div className="mb-4 rounded-xl border border-[#e5e5e5] bg-white p-6">
      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-[15px] font-bold text-[#555]">
          #{product.rank}:
        </span>
        <h4 className="text-[18px] font-bold text-[#151515]">
          {product.name}
        </h4>
      </div>

      {product.tagline && (
        <p className="mb-2 text-[14px] text-[#555]">{product.tagline}</p>
      )}

      <div className="mb-4 flex items-center gap-2">
        <Stars rating={product.rating} />
        <span className="text-[14px] text-[#555]">({product.rating})</span>
      </div>

      {/* Pros */}
      <div className="mb-3">
        <p className="mb-1 text-[14px] font-semibold text-[#151515]">Pros:</p>
        <ul className="space-y-1">
          {product.pros.map((pro) => (
            <li
              key={pro}
              className="flex items-start gap-2 text-[14px] leading-[1.5] text-[#151515]"
            >
              <span className="mt-0.5 shrink-0 text-[#22c55e]">&#10003;</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="mb-4">
        <p className="mb-1 text-[14px] font-semibold text-[#151515]">Cons:</p>
        <ul className="space-y-1">
          {product.cons.map((con) => (
            <li
              key={con}
              className="flex items-start gap-2 text-[14px] leading-[1.5] text-[#151515]"
            >
              <span className="mt-0.5 shrink-0 text-[#bf0505]">&#10007;</span>
              {con}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className="text-[14px] font-semibold text-[#151515] underline underline-offset-2 hover:text-[#A94E63]"
      >
        Shop now &rarr;
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function ProductComparison() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#151515]">
          What are the best Color Changing Foundations available?
        </h3>

        <p className="mb-8 text-[16px] leading-[1.75] text-[#151515]">
          With so many options on the market, we tested and ranked the top 5
          color-changing foundations based on their technology, ingredients,
          longevity, and real-world performance on mature skin.
        </p>

        {/* ---- #1 SMOOCHE (highlighted) ---- */}
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-[#A94E63] bg-[#fdf2f5] p-6 shadow-sm">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-[15px] font-bold text-[#A94E63]">#1:</span>
            <h4 className="text-[22px] font-bold text-[#151515]">
              {smooche.name}
            </h4>
          </div>

          <span className="mb-3 inline-block rounded-full bg-[#A94E63] px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white">
            {smooche.tagline}
          </span>

          <div className="mb-4 flex items-center gap-2">
            <Stars rating={smooche.rating} />
            <span className="text-[14px] font-medium text-[#151515]">
              ({smooche.rating})
            </span>
          </div>

          <p className="mb-4 text-[14px] leading-[1.5] text-[#555]">
            <span className="font-semibold text-[#151515]">Features: </span>
            {smooche.features}
          </p>

          <Image
            src={smooche.image!}
            alt="Smooche Color-Adapting Foundation product"
            width={500}
            height={500}
            className="mx-auto mb-6 w-full max-w-[400px] object-contain"
          />

          {/* Pros */}
          <div className="mb-4">
            <p className="mb-2 text-[15px] font-semibold text-[#151515]">
              Pros:
            </p>
            <ul className="space-y-1.5">
              {smooche.pros.map((pro) => (
                <li
                  key={pro}
                  className="flex items-start gap-2 text-[15px] leading-[1.5] text-[#151515]"
                >
                  <span className="mt-0.5 shrink-0 text-[#22c55e]">
                    &#10003;
                  </span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="mb-4">
            <p className="mb-2 text-[15px] font-semibold text-[#151515]">
              Cons:
            </p>
            <ul className="space-y-1.5">
              {smooche.cons.map((con) => (
                <li
                  key={con}
                  className="flex items-start gap-2 text-[15px] leading-[1.5] text-[#151515]"
                >
                  <span className="mt-0.5 shrink-0 text-[#bf0505]">
                    &#10007;
                  </span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-6 text-[15px] leading-[1.6] text-[#151515]">
            {smooche.conclusion}
          </p>

          <a
            href="#"
            className="inline-block rounded-lg bg-black px-8 py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            Shop now
          </a>
        </div>

        {/* ---- #2 – #5 Runner-ups ---- */}
        {runners.map((product) => (
          <RunnerCard key={product.rank} product={product} />
        ))}

        {/* ---- Conclusion ---- */}
        <div className="mt-10 border-t border-[#e5e5e5] pt-10">
          <h3 className="mb-4 text-[22px] font-bold text-[#151515]">
            Conclusion
          </h3>

          <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
            Since only one of the top 5 contains all the essential technologies
            for true color adaptation, and even offers a shade-match guarantee,
            it&apos;s an easy choice.
          </p>

          <p className="mb-6 text-[16px] leading-[1.75] text-[#151515]">
            The Smooche Color-Adapting Foundation clearly stands out in every
            category. Try it yourself and let us know which foundation you went
            with&mdash;and how it transformed your skin.
          </p>

          <a
            href="#"
            className="inline-block rounded-lg bg-black px-8 py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
}
