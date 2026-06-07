export function RestHero() {
  return (
    <section className="rest-hero-section sticky top-0 z-0 relative w-full overflow-hidden h-[700px] min-[900px]:h-svh bg-[#1E2110]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/rest/hero-luna-poster.webp"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/rest/hero-luna.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 z-[1] bg-[#1E2110]/40" />

      {/* Content container */}
      <div className="relative z-10 mx-auto flex h-full w-full flex-col items-center justify-center px-6">
        {/* Star rating row */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8.04624 0L10.284 5.38028L16.0925 5.84594L11.6671 9.63679L13.0191 15.3049L8.04624 12.2675L3.07339 15.3049L4.42543 9.63679L0 5.84594L5.80846 5.38028L8.04624 0Z"
                fill="#C49B3D"
              />
            </svg>
          ))}
        </div>

        {/* Headline — DM Serif Display */}
        <h1
          className="mt-5 text-center text-white"
          style={{
            fontFamily: "var(--font-rest-heading), 'DM Serif Display', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          No More<br />Mosquito Bites
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[480px] text-center text-[16px] leading-[26px] text-white/80">
          Plant-powered protection that actually works. DEET-free, lab-tested,
          and trusted by 300,000+ families.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-row items-center gap-3">
          {/* Primary */}
          <a
            href="#"
            className="flex items-center gap-2 rounded-full bg-[#E8603C] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#d4522f]"
          >
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6.59082 5.53027L1.06055 0L0 1.06055L4.46973 5.53027L0 10L1.06055 11.0605L6.59082 5.53027Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Secondary */}
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-[14px] font-medium text-white transition-all hover:bg-white/10"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6.59082 5.53027L1.06055 0L0 1.06055L4.46973 5.53027L0 10L1.06055 11.0605L6.59082 5.53027Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
