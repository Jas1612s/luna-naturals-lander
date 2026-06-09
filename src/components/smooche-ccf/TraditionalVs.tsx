import Image from "next/image";

export function TraditionalVs() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-[700px]">
        <h2 className="mb-4 text-[24px] font-bold leading-tight text-[#1a2e1a]">
          What I learned: DEET sprays were never designed for children
        </h2>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          The more I researched, the more disturbed I became. DEET &mdash; the
          active ingredient in most bug sprays &mdash; was originally developed
          for military use in jungle warfare. It&apos;s a synthetic chemical
          that absorbs through skin within minutes of application.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          The American Academy of Pediatrics recommends limiting DEET
          concentration to 30% for children and avoiding it entirely for
          infants under 2 months. Yet most parents coat their kids in it
          multiple times a day without a second thought.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          Traditional sprays also require constant reapplication &mdash; every
          2-4 hours at best. They wash off with sweat and water. They sting if
          they get in eyes. And they leave a sticky, chemical-smelling residue
          that kids hate.
        </p>

        <Image
          src="/images/smooche-ccf/traditional-vs.jpg"
          alt="Cross-section showing DEET spray vs plant-based patch protection"
          width={700}
          height={400}
          className="my-8 w-full rounded-lg object-cover"
        />

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          That&apos;s why the spray battle happens every single time. It&apos;s
          not your child being difficult &mdash; it&apos;s that sprays are
          genuinely unpleasant to wear. The burning eyes, the chemical taste,
          the sticky skin. Kids resist because their instincts are telling them
          something is wrong.
        </p>

        <p className="mb-4 text-[16px] leading-[1.75] text-[#1a2e1a]">
          Plant-based patches eliminate every single one of these problems. They
          go on clothing. They use natural oils. They last all day. And kids
          actually want to wear them because they look like fun stickers.
        </p>
      </div>
    </section>
  );
}
