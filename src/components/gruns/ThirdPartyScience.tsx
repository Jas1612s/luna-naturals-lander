const lines = [
  "SKIP THE SPRAY.",
  "ONE PATCH ON.",
  "12 HOURS OF PROTECTION.",
  "PLANT-POWERED. DEET-FREE.",
];


export function ThirdPartyScience() {
  return (
    <section
      className="py-20 md:py-32 px-4 md:px-6"
      style={{ background: "linear-gradient(135deg, var(--gr-green) 0%, var(--gr-green-dark) 100%)" }}
    >
      <div className="max-w-[700px] mx-auto flex flex-col items-center gap-10 md:gap-14">
        {lines.map((line) => (
          <h2
            key={line}
            className="gr-display italic text-4xl md:text-6xl lg:text-7xl text-white text-center uppercase leading-none"
          >
            {line}
          </h2>
        ))}
      </div>
    </section>
  );
}
