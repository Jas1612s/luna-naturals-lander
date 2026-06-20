const benefits = [
  { icon: "🦟", title: "Repels Mosquitoes" },
  { icon: "🛡️", title: "Deters Ticks" },
  { icon: "🌿", title: "100% DEET-Free" },
  { icon: "😊", title: "Soothes Itch" },
  { icon: "👨‍👩‍👧‍👦", title: "Safe for the Whole Family" },
  { icon: "⏱️", title: "Lasts 8+ Hours" },
];

export function ProductShowcase() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-14 md:py-20 lg:py-28 px-4">
      <div className="max-w-lg lg:max-w-[900px] mx-auto">
        {/* Title */}
        <style>{`
          @keyframes gr-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
          .gr-pulse-word {
            display: inline-block;
            animation: gr-pulse 2.5s ease-in-out infinite;
          }
          .gr-pulse-word:nth-of-type(2) { animation-delay: 0.4s; }
          .gr-pulse-word:nth-of-type(3) { animation-delay: 0.8s; }
        `}</style>
        <h2 className="gr-display text-3xl md:text-4xl lg:text-5xl text-[var(--gr-dark)] leading-[1.15] text-center max-w-2xl mx-auto">
          The <span className="italic text-[var(--gr-green)]">DEET-free</span> sticker that{" "}
          <em className="gr-pulse-word italic text-[var(--gr-accent)]">repels</em> mosquitoes,{" "}
          <em className="gr-pulse-word italic text-[var(--gr-accent)]">deters</em> ticks,{" "}
          &amp; <em className="gr-pulse-word italic text-[var(--gr-accent)]">soothes</em> itch.
        </h2>

        <p className="mt-4 md:mt-5 text-sm md:text-base lg:text-lg text-[var(--gr-sage)] leading-relaxed text-center max-w-md mx-auto">
          One plant-powered patch. Three problems solved. <strong className="text-[var(--gr-dark)]">8+ hours</strong> of worry-free protection.
        </p>

        {/* Product image */}
        <div className="relative mt-8 lg:mt-12 rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/2] max-w-[500px] lg:max-w-full mx-auto flex items-center justify-center">
          <img loading="lazy" src="/images/gruns/luna-natural-outdoor-scene.webp" alt="Luna Natural Mosquito Repellent Patches outdoor scene" className="w-full h-full object-cover" />

          <div className="absolute bottom-4 right-4 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[var(--gr-accent)] flex flex-col items-center justify-center text-center shadow-lg" style={{ boxShadow: "0 0 20px rgba(232,108,44,0.6), 0 0 40px rgba(232,108,44,0.3), 0 0 60px rgba(232,108,44,0.15)", animation: "gr-glow-pulse 2s ease-in-out infinite" }}>
            <span className="text-[10px] lg:text-xs font-bold leading-tight" style={{ color: "var(--gr-accent-text)" }}>
              save
            </span>
            <span className="text-xl lg:text-2xl font-black leading-none" style={{ color: "var(--gr-accent-text)" }}>
              60%
            </span>
            <span className="text-[10px] lg:text-xs font-bold leading-tight" style={{ color: "var(--gr-accent-text)" }}>
              off
            </span>
          </div>
        </div>

        {/* Benefits grid – always below image */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-8 lg:mt-12 max-w-[600px] lg:max-w-full mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--gr-green)]/15 flex items-center justify-center text-lg lg:text-xl">
                {b.icon}
              </div>
              <span className="text-sm lg:text-base font-bold text-[var(--gr-dark)] leading-tight">{b.title}</span>
            </div>
          ))}
        </div>

        {/* CTA – always below benefits */}
        <div className="max-w-[500px] mx-auto mt-10">
          <a
            href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer"
            className="block w-full py-4 bg-[var(--gr-accent)] text-center font-black text-base md:text-lg uppercase tracking-wide rounded-xl hover:brightness-110 transition"
            style={{ color: "var(--gr-accent-text)" }}
          >
            Try Risk-Free – Shop Now
          </a>

          <p className="mt-3 text-sm text-[var(--gr-green)] font-medium text-center flex items-center justify-center gap-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Love It or Get a Full Refund – No Questions Asked
          </p>
        </div>
      </div>
    </section>
  );
}
