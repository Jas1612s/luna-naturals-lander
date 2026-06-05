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
        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-base font-bold leading-none ${
          highlighted ? "bg-[var(--gr-accent)]" : "bg-[var(--gr-green)]"
        }`}
      >
        &#10003;
      </span>
    );
  }
  if (value === "cross") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-400/80 text-white text-xs font-bold leading-none">
        &#10005;
      </span>
    );
  }
  if (value.includes("\u2605")) {
    return <span className="text-[var(--gr-accent)] text-sm tracking-wide">{value}</span>;
  }
  return (
    <span className={`font-bold text-sm md:text-base ${highlighted ? "text-white" : "text-[var(--gr-dark)]"}`}>
      {value}
    </span>
  );
}

export function UsVsThem() {
  const totalRows = rows.length + 1; // +1 for header

  return (
    <section className="bg-[var(--gr-cream)] py-16 md:py-20">
      <div className="max-w-[640px] mx-auto px-4 md:px-6">
        <h2 className="gr-display italic text-3xl md:text-4xl text-[var(--gr-green-dark)] text-center leading-tight mb-3">
          Us vs. Them
        </h2>
        <p className="text-center text-[var(--gr-sage)] text-sm md:text-base mb-10 max-w-[420px] mx-auto leading-relaxed">
          Not another greasy spray. Just plant-powered patches that actually work — for the whole family.
        </p>

        <div
          className="rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            gridTemplateRows: `auto repeat(${totalRows - 1}, auto)`,
          }}
        >
          {/* Header row */}
          <div />
          <div className="bg-[var(--gr-green-dark)] pt-5 pb-3 px-2 flex items-end justify-center rounded-t-xl">
            <span className="gr-display italic text-white text-base md:text-lg leading-tight text-center">
              Luna<br />Naturals
            </span>
          </div>
          <div className="pt-5 pb-3 px-2 flex flex-col items-center justify-end text-center gap-1">
            <span className="text-2xl">🧴</span>
            <span className="text-[10px] md:text-xs text-[var(--gr-sage)] leading-tight font-medium">
              DEET<br />spray
            </span>
          </div>
          <div className="pt-5 pb-3 px-2 flex flex-col items-center justify-end text-center gap-1">
            <span className="text-2xl">🕯️</span>
            <span className="text-[10px] md:text-xs text-[var(--gr-sage)] leading-tight font-medium">
              citronella<br />candle
            </span>
          </div>

          {/* Data rows — flat grid cells, no wrapper divs */}
          {rows.map((row, i) => {
            const bg = i % 2 === 0 ? "bg-white" : "bg-stone-50";
            return [
              <div key={`${row.label}-label`} className={`py-3.5 px-4 ${bg}`}>
                <span className="text-xs md:text-sm font-semibold text-[var(--gr-dark)] leading-snug block">
                  {row.label}
                </span>
              </div>,
              <div key={`${row.label}-us`} className="py-3.5 px-2 bg-[var(--gr-green-dark)] flex items-center justify-center">
                <Cell value={row.us} highlighted />
              </div>,
              <div key={`${row.label}-generic`} className={`py-3.5 px-2 flex items-center justify-center ${bg}`}>
                <Cell value={row.generic} />
              </div>,
              <div key={`${row.label}-overpriced`} className={`py-3.5 px-2 flex items-center justify-center ${bg}`}>
                <Cell value={row.overpriced} />
              </div>,
            ];
          })}
        </div>
      </div>
    </section>
  );
}
