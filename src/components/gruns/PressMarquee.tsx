const logos = [
  { src: "/images/gruns/logo-cbs.svg", alt: "CBS" },
  { src: "/images/gruns/logo-nbc.svg", alt: "NBC" },
  { src: "/images/gruns/logo-guardian.avif", alt: "The Guardian" },
  { src: "/images/gruns/logo-vice.svg", alt: "Vice" },
];

export function PressMarquee() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--gr-cream-light)]"
      style={{ height: 90 }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--gr-cream-light)] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="gr-marquee-track items-center h-full gap-16">
        {/* First set */}
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={{ height: 40, width: "auto", flexShrink: 0 }}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo) => (
          <img
            key={`${logo.alt}-dup`}
            src={logo.src}
            alt={logo.alt}
            aria-hidden="true"
            style={{ height: 40, width: "auto", flexShrink: 0 }}
          />
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--gr-cream-light)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
