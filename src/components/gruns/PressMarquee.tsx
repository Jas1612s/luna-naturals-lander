const logos = [
  { src: "/images/gruns/logo-forbes-black.svg", alt: "Forbes" },
  { src: "/images/gruns/logo-nbc.svg", alt: "NBC" },
  { src: "/images/gruns/logo-GQ-black.svg", alt: "GQ" },
  { src: "/images/gruns/logo-today-black.svg", alt: "Today" },
  { src: "/images/gruns/logo-people-black.svg", alt: "People" },
  { src: "/images/gruns/logo-cbs.svg", alt: "CBS" },
  { src: "/images/gruns/logo-vice.svg", alt: "Vice" },
  { src: "/images/gruns/logo-womenshealth-black.svg", alt: "Women's Health" },
];

export function PressMarquee() {
  return (
    <section className="relative overflow-hidden bg-[var(--gr-cream-light)] pt-3 pb-3">
      <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-[var(--gr-sage)] mb-3">
        As Seen In
      </p>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--gr-cream-light)] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="gr-marquee-track items-center gap-10 md:gap-14">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="opacity-70 grayscale brightness-0"
            style={{ height: 28, width: "auto", flexShrink: 0 }}
          />
        ))}
        {logos.map((logo) => (
          <img
            key={`${logo.alt}-dup`}
            src={logo.src}
            alt={logo.alt}
            aria-hidden="true"
            className="opacity-70 grayscale brightness-0"
            style={{ height: 28, width: "auto", flexShrink: 0 }}
          />
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--gr-cream-light)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
