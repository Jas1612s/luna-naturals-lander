import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="py-[60px] px-5">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-[2px] text-[#666]">
          WHO WE ARE
        </p>
        <h2 className="ed-heading mx-auto my-3 text-center text-[34px] font-bold">
          Built For Better Days
        </h2>
        <p className="mx-auto mb-10 max-w-[600px] text-center text-base leading-relaxed text-[#666]">
          We&apos;re here to help you upgrade your mind, body, and beyond
          through daily habits and a community designed to make you feel your
          best.
        </p>

        {/* Two-column layout: text left, image right */}
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h3 className="mb-4 text-[22px] font-bold uppercase">
              BEHIND THE BLEND
            </h3>
            <p className="mb-6 leading-relaxed text-[#666]">
              Everyday Dose was born from a simple belief: your daily coffee
              should do more than just wake you up. We set out to create a
              functional coffee blend that combines time-tested mushroom
              adaptogens, collagen, and nootropics to support your mental
              clarity, energy, and overall well-being — without the jitters or
              crash of traditional coffee.
            </p>
            <p className="mb-6 leading-relaxed text-[#666]">
              Our team of scientists and wellness advocates carefully selected
              every ingredient for its proven benefits. From Lion&apos;s Mane
              for focus to Chaga for immunity, each scoop is designed to help
              you perform at your best, every single day.
            </p>
            <a
              href="#"
              className="font-semibold text-[var(--ed-purple)] transition-colors hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/everydaydose/ingredient-bg-1.webp"
                alt="Behind the blend"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
