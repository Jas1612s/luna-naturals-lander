export function BiteFreeCtaBanner() {
  return (
    <section className="bg-[var(--gr-green-dark)] py-14 md:py-20 lg:py-28 px-4">
      <div className="max-w-[520px] lg:max-w-[800px] mx-auto text-center">
        <h2 className="gr-display italic text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
          Want To Join The 90% of Families Who Are{" "}
          <em>Bite-Free</em> This Summer?
        </h2>
        <div className="mb-8 rounded-2xl overflow-hidden mx-auto max-w-[700px]">
          <img
            src="/images/gruns/cta-family-beach.webp"
            alt="Happy family at the beach using Luna Naturals patches"
            loading="lazy"
            width={1200}
            height={678}
            className="w-full h-auto"
          />
        </div>
        <a
          href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[var(--gr-accent)] text-white font-bold text-base md:text-lg px-12 py-4 rounded-full hover:brightness-110 transition"
        >
          Get Your Patches
        </a>
      </div>
    </section>
  );
}
