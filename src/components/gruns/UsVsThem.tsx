const rows: { label: string; us: string; generic: string; overpriced: string }[] = [
  { label: "Cost Per Use", us: "$0.11", generic: "$0.25", overpriced: "$0.50+" },
  { label: "Protection", us: "\u2605\u2605\u2605\u2605\u2605", generic: "\u2605\u2605\u2605", overpriced: "\u2605\u2605" },
  { label: "DEET-Free", us: "check", generic: "cross", overpriced: "cross" },
  { label: "No Mess or Reapplying", us: "check", generic: "cross", overpriced: "cross" },
  { label: "Lasts Up To", us: "12 hrs", generic: "2 hrs", overpriced: "6 hrs" },
  { label: "Safe for Kids 2+", us: "check", generic: "cross", overpriced: "check" },
  { label: "Plant-Based Ingredients", us: "check", generic: "cross", overpriced: "check" },
];

function Cell({ value, highlighted }: { value: string; highlighted?: boolean }) {
  if (value === "check") {
    return (
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-white text-lg font-bold leading-none ${
          highlighted ? "bg-[var(--gr-accent)]" : "bg-[var(--gr-green)]"
        }`}
      >
        &#10003;
      </span>
    );
  }
  if (value === "cross") {
    return (
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-red-400/80 text-white text-sm font-bold leading-none">
        &#10005;
      </span>
    );
  }
  if (value.includes("\u2605")) {
    return <span className="text-[var(--gr-accent)] text-base md:text-lg tracking-wide">{value}</span>;
  }
  return (
    <span className={`font-bold text-base md:text-lg ${highlighted ? "text-white" : "text-[var(--gr-dark)]"}`}>
      {value}
    </span>
  );
}

export function UsVsThem() {
  const totalRows = rows.length + 1;

  return (
    <section className="bg-[var(--gr-cream-warm)] py-20 md:py-28">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <h2 className="gr-display italic text-4xl md:text-5xl lg:text-6xl text-[var(--gr-green-dark)] text-center leading-tight mb-4">
          Us vs. Them
        </h2>
        <p className="text-center text-[var(--gr-sage)] text-base md:text-lg mb-12 max-w-[520px] mx-auto leading-relaxed">
          Not another greasy spray. Just plant-powered patches that actually work — for the whole family.
        </p>

        <div
          className="rounded-3xl overflow-hidden bg-white shadow-md border border-black/5"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr",
            gridTemplateRows: `auto repeat(${totalRows - 1}, auto)`,
          }}
        >
          {/* Header row */}
          <div />
          <div className="bg-[var(--gr-green-dark)] pt-6 pb-4 px-3 flex flex-col items-center justify-end rounded-t-2xl gap-1">
            <span className="text-[var(--gr-yellow)] text-xs font-bold uppercase tracking-wider">Best Value</span>
            <span className="gr-display italic text-white text-xl md:text-2xl leading-tight text-center">
              Luna<br />Naturals
            </span>
          </div>
          <div className="pt-6 pb-4 px-3 flex flex-col items-center justify-end text-center gap-1.5">
            <span className="text-3xl">🧴</span>
            <span className="text-xs md:text-sm text-[var(--gr-sage)] leading-tight font-medium">
              DEET<br />spray
            </span>
          </div>
          <div className="pt-6 pb-4 px-3 flex flex-col items-center justify-end text-center gap-1.5">
            <span className="text-3xl">🕯️</span>
            <span className="text-xs md:text-sm text-[var(--gr-sage)] leading-tight font-medium">
              citronella<br />candle
            </span>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => {
            const bg = i % 2 === 0 ? "bg-white" : "bg-stone-50";
            return [
              <div key={`${row.label}-label`} className={`py-5 px-5 md:px-6 ${bg} flex items-center`}>
                <span className="text-sm md:text-base font-semibold text-[var(--gr-dark)] leading-snug block">
                  {row.label}
                </span>
              </div>,
              <div key={`${row.label}-us`} className="py-5 px-3 bg-[var(--gr-green-dark)] flex items-center justify-center">
                <Cell value={row.us} highlighted />
              </div>,
              <div key={`${row.label}-generic`} className={`py-5 px-3 flex items-center justify-center ${bg}`}>
                <Cell value={row.generic} />
              </div>,
              <div key={`${row.label}-overpriced`} className={`py-5 px-3 flex items-center justify-center ${bg}`}>
                <Cell value={row.overpriced} />
              </div>,
            ];
          })}
        </div>

        {/* CTA below table */}
        <div className="mt-10 text-center">
          <a
            href="#shop"
            className="inline-block bg-[var(--gr-accent)] text-white font-bold text-base md:text-lg px-12 py-4 rounded-full hover:brightness-110 transition"
          >
            Try Luna Naturals — 60% Off
          </a>
          <p className="mt-3 text-sm text-[var(--gr-sage)]">
            30-day money-back guarantee &middot; Free shipping on 2+ packs
          </p>
        </div>
      </div>
    </section>
  );
}
