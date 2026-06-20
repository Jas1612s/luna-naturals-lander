const logos = [
  { src: "/images/gruns/logo-forbes-black.svg", alt: "Forbes" },
  { src: "/images/gruns/logo-nbc.svg", alt: "NBC" },
  { src: "/images/gruns/logo-today-black.svg", alt: "Today" },
  { src: "/images/gruns/logo-people-black.svg", alt: "People" },
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
            className="h-6 md:h-7 w-auto opacity-60 grayscale shrink-0"
          />
        ))}
        {logos.map((logo) => (
          <img
            key={`${logo.alt}-dup`}
            aria-hidden
            src={logo.src}
            alt={logo.alt}
            className="h-6 md:h-7 w-auto opacity-60 grayscale shrink-0"
          />
        ))}
      </div>

      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--gr-cream-light)] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
