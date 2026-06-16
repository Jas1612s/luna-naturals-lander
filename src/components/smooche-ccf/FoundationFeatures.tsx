import Image from "next/image";

const features = [
  {
    title: "Plant-Based Active Ingredients",
    image: "/images/smooche-ccf/gen-ingredients.webp",
    alt: "Plant-based ingredients diagram",
    description:
      "The best kids\u2019 repellents use proven plant oils \u2014 citronella, eucalyptus, and lemongrass \u2014 instead of synthetic chemicals. These botanicals are naturally effective at repelling mosquitoes and have been used for centuries with zero known harmful side effects on children.",
  },
  {
    title: "12+ Hour Protection",
    image: "/images/smooche-ccf/gen-12hr-clock.webp",
    alt: "12+ hours protection diagram",
    description:
      "Quality repellents should last an entire day of outdoor play without reapplication. If you\u2019re having to reapply every 2 hours, the product isn\u2019t good enough. Look for formulas that maintain their effectiveness through sweat, water, and active play.",
  },
  {
    title: "No Skin Contact Required",
    image: "/images/smooche-ccf/gen-waterproof-shield.webp",
    alt: "No skin contact protection diagram",
    description:
      "The safest repellents for kids don\u2019t touch their skin at all. Patch-based solutions attach to clothing and create a vapor barrier \u2014 zero absorption, zero irritation, zero risk. If a product requires skin contact, it\u2019s already a compromise.",
  },
  {
    title: "Kid-Friendly Application",
    image: "/images/smooche-ccf/gen-kid-sticker.webp",
    alt: "Kid-friendly application diagram",
    description:
      "The best repellent is one your child will actually wear. Products that come in fun designs, feel like stickers, and let kids apply them independently eliminate the spray battle entirely. If application is a fight, you\u2019ll skip it \u2014 and skipping it means bites.",
  },
] as const;

export function FoundationFeatures() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <h3 className="mb-3 text-[22px] font-bold leading-tight text-[#1a2e1a]">
          What makes a good mosquito repellent for kids?
        </h3>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          Not all mosquito repellents are created equal &mdash; especially when
          it comes to protecting children. The safest and most effective options
          share several key features. The more of these features a product has,
          the more confidently you can use it on your family.
        </p>

        <p className="mb-8 text-[16px] leading-[1.75] text-[#1a2e1a]">
          Be wary of any product that doesn&apos;t clearly list its ingredients
          or explain how it works. Always check for these essential features
          below &mdash; if a repellent has them, it&apos;s likely safe,
          effective, and worth your money.
        </p>

        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="overflow-hidden rounded-xl border border-[#d4ddd4] bg-white p-6"
            >
              <h4 className="mb-2 text-[18px] font-bold text-[#1a2e1a]">
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
