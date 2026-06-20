import Image from "next/image";

export function TrailPatchCompare() {
  return (
    <section
      id="OurTrailPatch"
      className="pt-5"
      style={{ backgroundColor: "var(--tp-gray-bg)" }}
    >
      {/* Title */}
      <h2
        className="text-center uppercase"
        style={{
          fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 400,
        }}
      >
        How Do Our Tick Repellent Stickers Compare?
      </h2>

      {/* Desktop comparison image */}
      <div className="hidden md:block">
        <Image
          src="/images/natpat/trailpatch/compare-desktop.png"
          alt="TrailPatch tick repellent sticker comparison chart"
          width={1028}
          height={600}
          style={{
            maxWidth: "1028px",
            width: "100%",
            margin: "50px auto",
            display: "block",
          }}
        />
      </div>

      {/* Mobile comparison image */}
      <div className="block md:hidden">
        <Image
          src="/images/natpat/trailpatch/compare-mobile.png"
          alt="TrailPatch tick repellent sticker comparison chart"
          width={390}
          height={500}
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "25px auto",
            display: "block",
          }}
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center" style={{ margin: "25px 0" }}>
        <a
          href="#buy"
          className="block text-center uppercase text-white no-underline"
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            fontSize: "clamp(25px, 3vw, 36px)",
            fontWeight: 600,
            background: "var(--tp-blue)",
            padding: "13px 20px 8px",
            borderRadius: "50px",
            maxWidth: "345px",
            width: "100%",
          }}
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
