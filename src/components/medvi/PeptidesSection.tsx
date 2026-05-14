import { ProductSection } from "./ProductSection";

function PeptidesIllustration() {
  const goals = ["Recovery", "Strength", "Sleep", "Optimization"];
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: "linear-gradient(135deg, rgb(40,90,70) 0%, rgb(20,50,40) 100%)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
        <div className="text-center">
          <p style={{ fontSize: "11px", color: "rgba(132,195,144,0.8)", fontFamily: "var(--font-sans)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
            Targeted Peptide Therapy
          </p>
          <p style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-sans)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            Built for your goals
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {goals.map((goal) => (
            <div
              key={goal}
              className="rounded-2xl px-4 py-4 text-center"
              style={{ backgroundColor: "rgba(132,195,144,0.15)", border: "1px solid rgba(132,195,144,0.2)" }}
            >
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", fontFamily: "var(--font-sans)" }}>
                {goal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PeptidesSection() {
  return (
    <ProductSection
      id="peptides"
      badge="Peptides & Longevity"
      badgeColor="#1B6549"
      badgeBg="rgba(46,147,111,0.12)"
      title="Targeted support for recovery, performance, and longevity"
      body="Peptide therapy is designed to support how your body recovers, performs, and repairs over time—with targeted options for goals like recovery, strength, sleep, and overall optimization."
      features={[
        { text: "Targeted recovery and performance support" },
        { text: "Sleep quality and restoration protocols" },
        { text: "Longevity and optimization programs" },
        { text: "Physician-supervised therapy plans" },
      ]}
      ctaText="Coming Soon"
      ctaDisabled
      bgColor="rgb(241,245,233)"
      blobColor="rgba(46,147,111,0.15)"
      illustration={<PeptidesIllustration />}
      reverse
    />
  );
}
