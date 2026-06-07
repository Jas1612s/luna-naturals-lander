import Image from "next/image";

export function HeroSection() {
  return (
    <section>
      <a href="#" style={{ display: "block", width: "100%" }}>
        {/* Desktop hero */}
        <Image
          src="/images/everydaydose/hero-desktop.webp"
          alt="Everyday Dose Mushroom Coffee — Memorial Day Sale"
          width={2880}
          height={1200}
          priority
          sizes="100vw"
          className="hidden md:block"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
        {/* Mobile hero */}
        <Image
          src="/images/everydaydose/hero-mobile.webp"
          alt="Everyday Dose Mushroom Coffee — Memorial Day Sale"
          width={750}
          height={900}
          priority
          sizes="100vw"
          className="block md:hidden"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </a>
    </section>
  );
}
