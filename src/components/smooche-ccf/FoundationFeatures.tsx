import Image from "next/image";

const features = [
  {
    title: "Pigment Adaptation Technology",
    image: "/images/smooche-ccf/product-comparison-2.jpg",
    alt: "Pigment particles diagram",
    description:
      "The best foundations don\u2019t force your skin to match a pre-made shade\u2014they adapt to you. Real color-adapting technology uses encapsulated pigments that react with your skin\u2019s unique pH and undertone, creating a perfect match that traditional foundations simply can\u2019t achieve.",
  },
  {
    title: "Long-Lasting Wear",
    image: "/images/smooche-ccf/product-comparison-3.jpg",
    alt: "16+ hours lasting diagram",
    description:
      "Quality foundations are formulated to last 16+ hours without fading, separating, or breaking down. Your flawless finish in the morning should still be flawless at night\u2014no touch-ups needed, no mid-day meltdown.",
  },
  {
    title: "SPF 15 Protection",
    image: "/images/smooche-ccf/product-comparison-4.jpg",
    alt: "SPF 15 protection diagram",
    description:
      "Your foundation should protect your skin while perfecting it. SPF 15 is the minimum recommended daily protection against harmful UV rays that cause premature aging and dark spots. Quality foundations include built-in sun protection\u2014skincare and makeup in one.",
  },
  {
    title: "Skin-Loving Ingredients",
    image: "/images/smooche-ccf/product-comparison-5.jpg",
    alt: "Glycerin, Mica, Vitamin E diagram",
    description:
      "Your foundation should improve your skin, not just cover it. The best formulas contain nourishing ingredients like Hyaluronic Acid, Vitamin E, and natural oils that moisturize without clogging pores. Choose foundations that support your skin\u2019s long-term health.",
  },
] as const;

export function FoundationFeatures() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#151515]">
          What makes a good foundation?
        </h3>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          The ingredients and technology in foundations are what set the
          effective ones apart from the rest. There are several essential
          features that high-quality foundations use to provide flawless
          coverage, protect your skin, and last all day. The more of these
          features a foundation has, the better and more reliable it tends to
          be.
        </p>

        <p className="mb-8 text-[16px] leading-[1.75] text-[#151515]">
          It&apos;s always a red flag if a brand doesn&apos;t clearly explain
          what&apos;s in their formula or how it actually works. Always check if
          you see any of the features below. If so, it&apos;s likely a good
          one&mdash;and it will give you the results you&apos;re looking for.
        </p>

        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="overflow-hidden rounded-xl border border-[#e5e5e5] bg-white p-6"
            >
              <h4 className="mb-2 text-[18px] font-bold text-[#151515]">
                {feature.title}
              </h4>
              <p className="mb-4 text-[15px] leading-[1.6] text-[#555]">
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={feature.alt}
                width={652}
                height={400}
                className="w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
