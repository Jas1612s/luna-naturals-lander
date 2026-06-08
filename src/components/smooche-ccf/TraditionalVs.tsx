import Image from "next/image";

export function TraditionalVs() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <h2 className="mb-4 text-[24px] font-bold leading-tight text-[#151515]">
          What I discovered: Traditional foundations weren&apos;t made for
          mature skin
        </h2>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          I learned quickly that the traditional foundation model is
          fundamentally flawed&mdash;especially for women over 50.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          Brands create formulas for &ldquo;all ages&rdquo; but here&apos;s the
          reality: they&apos;re designed for young, smooth, plump skin. They
          weren&apos;t created to work with the natural texture changes,
          dryness, and tone variations that come with aging.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          Traditional foundations use heavy, thick pigments that sink into fine
          lines. They contain ingredients that dry out already-dry mature skin.
          And their fixed shades can&apos;t adapt to the subtle undertone shifts
          that happen as skin matures.
        </p>

        <Image
          src="/images/smooche-ccf/traditional-vs.jpg"
          alt="Skin cross-section showing traditional vs color-adapting foundation"
          width={700}
          height={400}
          className="my-8 w-full rounded-lg object-cover"
        />

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          That&apos;s why foundation starts looking worse on you, not better.
          It&apos;s not your skin that&apos;s the problem&mdash;it&apos;s that
          the formula is working against your skin instead of with it.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#151515]">
          Even worse? Those fixed shades oxidize dramatically on mature skin
          because of how they react with changing skin chemistry. What looks
          perfect at 8 AM is orange by 10 AM.
        </p>
      </div>
    </section>
  );
}
