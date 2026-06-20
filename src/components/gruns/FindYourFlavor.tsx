const badges = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="38" y2="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M24 14c-2 0-3 1-3 2s1 2 1 3-1 3-1 5c0 1 1 2 3 2s3-1 3-2c0-2-1-4-1-5s1-2 1-3-1-2-3-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="30" r="1.5" fill="white" />
        <path d="M20 18c-1-1-2-1-3 0M28 18c1-1 2-1 3 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "0 synthetic repellents",
    subtitle: "DEET-free, always",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M24 12c0 0-4 6-4 10a4 4 0 0 0 8 0c0-4-4-10-4-10z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="10" x2="38" y2="38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M20 32h8M22 36h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Dermatologist-reviewed",
    subtitle: "Gentle on sensitive skin",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <path d="M24 12c-2 4-8 6-8 12 0 5 3.5 10 8 10s8-5 8-10c0-6-6-8-8-12z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28v-6M21 25l3-3 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "100% plant-based oils",
    subtitle: "No harsh chemicals",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <path d="M24 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 36l2-4M32 36l-2-4M24 38v-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 40h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Allergen-screened",
    subtitle: "Tested for irritants & contaminants",
  },
];

export function FindYourFlavor() {
  return (
    <section className="bg-[var(--gr-green-dark)] py-16 md:py-24 lg:py-28 px-4 md:px-6">
      <div className="max-w-[900px] lg:max-w-[1200px] mx-auto">
        {/* Title */}
        {/* Desktop: title + badges side by side */}
        <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-center">
        <div>
        <h2 className="gr-display italic text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-bold">
          Third-party tested for safety, purity &amp; skin-friendliness.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
          Every batch is independently tested so you know exactly what&apos;s touching your
          family&apos;s skin – and what isn&apos;t.
        </p>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              {badge.icon}
              <p className="mt-4 font-bold text-white text-sm md:text-base leading-tight">
                {badge.title}
              </p>
              <p className="mt-1 text-xs md:text-sm text-white/50 leading-snug">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
