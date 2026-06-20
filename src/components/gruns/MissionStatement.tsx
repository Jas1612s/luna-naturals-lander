export function MissionStatement() {
  return (
    <section className="bg-[var(--gr-cream)] py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="gr-display text-2xl md:text-3xl lg:text-4xl text-[var(--gr-green-dark)] leading-snug font-bold">
          Luna Natural is the first DEET-free patch that repels mosquitoes, deters ticks, and soothes
          itch – all in one sticker your kids actually want to wear.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="max-w-2xl mx-auto mt-10 md:mt-14 aspect-[16/9] rounded-2xl bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-sm font-medium">Image</span>
      </div>

      {/* Shop Now CTA */}
      <div className="text-center mt-8">
        <a
          href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[var(--gr-accent)] font-bold text-base md:text-lg px-10 py-4 rounded-full hover:brightness-110 transition"
          style={{ color: "var(--gr-accent-text)" }}
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
