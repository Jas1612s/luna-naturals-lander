import Image from "next/image";

export function PartnerSection() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:flex-row">
        {/* Left: Partner Image */}
        <div className="flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/everydaydose/extra-image-6.webp"
              alt="Othership partnership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h3 className="mb-4 text-[22px] font-bold">Othership</h3>
          <p className="mb-6 leading-relaxed text-[#666]">
            Othership helps you regulate your emotions and nervous system
            through breathwork and cold exposure, supported by a global
            community.
          </p>
          <a
            href="#"
            className="font-semibold text-[var(--ed-purple)] transition-colors hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
