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
  name: "Luna Naturals",
  rating: "4.9 / 5",
  tagline: "Our #1 pick for 2026",
  features:
    "Plant-Based Ingredients, 12+ Hour Protection, No Skin Contact, Kid-Friendly Application",
  image: "/images/smooche-ccf/gen-patch-sheet.webp",
  pros: [
    "Contains all 4 essential features for safe, effective kids\u2019 repellent",
    "Goes on clothes, not skin \u2014 zero chemical absorption",
    "12-hour protection with no reapplication needed",
    "Kids apply them independently (they think they\u2019re stickers)",
    "DEET-free, paraben-free, phthalate-free",
    "Pediatrician approved",
    "Currently 60% OFF \u2014 just $0.08 per patch",
  ],
  cons: ["Requires sticking to clothing (not suitable for bare-skin situations)"],
  conclusion:
    "Luna Naturals is the only kids\u2019 repellent in our top 5 that checks every box \u2014 plant-based, 12-hour protection, no skin contact, and genuinely kid-friendly. With 50,000+ families already making the switch, it\u2019s the clear winner for mosquito season.",
};

const runners: Product[] = [
  {
    rank: 2,
    name: "NATPAT Buzz Patches",
    rating: "4.2 / 5",
    tagline: "Citronella-based sticker patches",
    pros: [
      "Fun character designs",
      "No DEET",
      "Easy to apply",
    ],
    cons: [
      "Only 6-8 hours of protection per patch",
      "More expensive per patch ($0.25+)",
      "Can lose adhesion in humidity",
      "No pediatrician endorsement noted",
    ],
  },
  {
    rank: 3,
    name: "BuzzPatch by Natural Patch",
    rating: "4.0 / 5",
    tagline: "Essential oil sticker repellent",
    pros: ["Colorful designs kids enjoy", "Plant-based formula", "No skin contact"],
    cons: [
      "Effectiveness drops after 4-6 hours",
      "Requires 2-3 patches per session",
      "Higher cost per use",
      "No money-back guarantee",
    ],
  },
  {
    rank: 4,
    name: "OFF! Kids Spray",
    rating: "3.5 / 5",
    tagline: "DEET-based traditional spray",
    pros: ["Widely available", "Strong repellent effect", "Affordable"],
    cons: [
      "Contains DEET \u2014 absorbs through skin",
      "Kids resist application (spray battles)",
      "Requires reapplication every 2-4 hours",
      "Stings eyes and tastes unpleasant",
      "No kid-friendly design",
    ],
  },
  {
    rank: 5,
    name: "Cutter All Family Spray",
    rating: "3.2 / 5",
    tagline: "DEET spray for general use",
    pros: ["Budget-friendly", "Available everywhere", "Effective against ticks too"],
    cons: [
      "7% DEET formula \u2014 still a synthetic chemical",
      "Washes off with water and sweat",
      "Kids hate the smell and feel",
      "Requires frequent reapplication",
      "Not specifically designed for children",
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
    <div className="mb-4 rounded-xl border border-[#d4ddd4] bg-white p-6">
      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-[15px] font-bold text-[#555]">
          #{product.rank}:
        </span>
        <h4 className="text-[18px] font-bold text-[#1a2e1a]">
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
        <p className="mb-1 text-[14px] font-semibold text-[#1a2e1a]">Pros:</p>
        <ul className="space-y-1">
          {product.pros.map((pro) => (
            <li
              key={pro}
              className="flex items-start gap-2 text-[14px] leading-[1.5] text-[#1a2e1a]"
            >
              <span className="mt-0.5 shrink-0 text-[#3d5a3d]">&#10003;</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="mb-4">
        <p className="mb-1 text-[14px] font-semibold text-[#1a2e1a]">Cons:</p>
        <ul className="space-y-1">
          {product.cons.map((con) => (
            <li
              key={con}
              className="flex items-start gap-2 text-[14px] leading-[1.5] text-[#1a2e1a]"
            >
              <span className="mt-0.5 shrink-0 text-[#bf0505]">&#10007;</span>
              {con}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className="text-[14px] font-semibold text-[#1a2e1a] underline underline-offset-2 hover:text-[#3d5a3d]"
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
        <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#1a2e1a]">
          What are the best mosquito repellents for kids in 2026?
        </h3>

        <p className="mb-8 text-[16px] leading-[1.75] text-[#1a2e1a]">
          We tested and ranked the top 5 mosquito repellent options for
          children &mdash; comparing safety, effectiveness, ease of use, and
          real-world results from thousands of families.
        </p>

        {/* ---- #1 SMOOCHE (highlighted) ---- */}
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-[#3d5a3d] bg-[#eef3ee] p-6 shadow-sm">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="text-[15px] font-bold text-[#3d5a3d]">#1:</span>
            <h4 className="text-[22px] font-bold text-[#1a2e1a]">
              {smooche.name}
            </h4>
          </div>

          <span className="mb-3 inline-block rounded-full bg-[#3d5a3d] px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white">
            {smooche.tagline}
          </span>

          <div className="mb-4 flex items-center gap-2">
            <Stars rating={smooche.rating} />
            <span className="text-[14px] font-medium text-[#1a2e1a]">
              ({smooche.rating})
            </span>
          </div>

          <p className="mb-4 text-[14px] leading-[1.5] text-[#555]">
            <span className="font-semibold text-[#1a2e1a]">Features: </span>
            {smooche.features}
          </p>

          <Image
            src={smooche.image!}
            alt="Luna Naturals Kids Mosquito Repellent Patches product"
            width={500}
            height={500}
            className="mx-auto mb-6 w-full max-w-[400px] object-contain"
          />

          {/* Pros */}
          <div className="mb-4">
            <p className="mb-2 text-[15px] font-semibold text-[#1a2e1a]">
              Pros:
            </p>
            <ul className="space-y-1.5">
              {smooche.pros.map((pro) => (
                <li
                  key={pro}
                  className="flex items-start gap-2 text-[15px] leading-[1.5] text-[#1a2e1a]"
                >
                  <span className="mt-0.5 shrink-0 text-[#3d5a3d]">
                    &#10003;
                  </span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="mb-4">
            <p className="mb-2 text-[15px] font-semibold text-[#1a2e1a]">
              Cons:
            </p>
            <ul className="space-y-1.5">
              {smooche.cons.map((con) => (
                <li
                  key={con}
                  className="flex items-start gap-2 text-[15px] leading-[1.5] text-[#1a2e1a]"
                >
                  <span className="mt-0.5 shrink-0 text-[#bf0505]">
                    &#10007;
                  </span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-6 text-[15px] leading-[1.6] text-[#1a2e1a]">
            {smooche.conclusion}
          </p>

          <a
            href="#"
            className="inline-block rounded-lg bg-[#2d4a2d] px-8 py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            Shop now
          </a>
        </div>

        {/* ---- #2 – #5 Runner-ups ---- */}
        {runners.map((product) => (
          <RunnerCard key={product.rank} product={product} />
        ))}

        {/* ---- Conclusion ---- */}
        <div className="mt-10 border-t border-[#d4ddd4] pt-10">
          <h3 className="mb-4 text-[22px] font-bold text-[#1a2e1a]">
            Conclusion
          </h3>

          <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
            When it comes to protecting kids from mosquitoes, only one product
            combines all four essential features &mdash; plant-based
            ingredients, 12+ hour protection, zero skin contact, and
            kid-friendly application.
          </p>

          <p className="mb-6 text-[16px] leading-[1.75] text-[#1a2e1a]">
            Luna Naturals Kids Patches are what every parent wishes existed. Try
            them this summer and see why 50,000+ families have ditched the spray
            bottle for good.
          </p>

          <a
            href="#"
            className="inline-block rounded-lg bg-[#2d4a2d] px-8 py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
}
