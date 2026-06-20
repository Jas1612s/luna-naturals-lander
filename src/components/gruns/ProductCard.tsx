export function ProductCard() {
  return (
    <section className="bg-[var(--gr-cream-light)] py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-[500px] mx-auto">
        <h2 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-green)] text-center mb-8">
          Get Yours Now
        </h2>

        <div className="rounded-2xl overflow-hidden border border-[var(--gr-dark)]/8 bg-white shadow-lg">
          {/* Product image */}
          <div className="relative bg-[var(--gr-green-dark)]">
            <span className="absolute top-3 left-3 bg-[var(--gr-accent)] text-xs font-semibold px-3 py-1 rounded-md z-10" style={{ color: "var(--gr-accent-text)" }}>
              Best Seller
            </span>
            <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm font-medium">Product Image</span>
            </div>
            {/* Save overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-5 px-4">
              <p className="gr-display italic text-white text-2xl md:text-3xl leading-tight">
                Save up to <span className="text-[var(--gr-gold)]">60%</span>
              </p>
              <p className="text-white/60 text-xs mt-1">
                Subscribe &amp; save &middot; Free shipping on 2+ packs
              </p>
            </div>
          </div>

          {/* Product details */}
          <div className="p-5 md:p-6">
            <p className="text-xs font-semibold text-[var(--gr-sage)] uppercase tracking-widest">
              Kids Repellent Patches
            </p>
            <h3 className="text-lg font-bold text-[var(--gr-dark)] mt-1">
              Mosquito, Tick &amp; Itch Patches – Kids (90 ct)
            </h3>
            <p className="text-sm text-gray-500 mt-1">90 patches – Less than $0.13 each</p>

            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-2xl font-black text-[var(--gr-dark)]">$14.99</span>
              <span className="text-base text-[var(--gr-sage)] line-through">$24.99</span>
            </div>

            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="var(--gr-accent)" className="w-4 h-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">4.8 (2,340 reviews)</span>
            </div>

            <a
              href="https://lunanaturals.co/checkouts/cn/hWNDTPlP631vPuqj4NP8UEIz/en-us?_r=AQABbFT1asIW0OxE5kHTyEX05-ARbW8AjBLk8nPTYAxG&preview_theme_id=153081282739" target="_blank" rel="noopener noreferrer"
              className="block w-full mt-5 py-4 bg-[var(--gr-accent)] text-center font-black text-base rounded-xl hover:brightness-110 active:scale-[0.98] transition shadow-lg shadow-[var(--gr-accent)]/20"
              style={{ color: "var(--gr-accent-text)" }}
            >
              Add to Cart – $14.99
            </a>

            <p className="text-xs text-center text-gray-400 mt-3">
              30-day money-back guarantee &middot; Free shipping on 2+ packs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
