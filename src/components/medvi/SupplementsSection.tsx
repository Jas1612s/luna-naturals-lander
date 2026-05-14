import { ProductSection } from "./ProductSection";

function SupplementsIllustration() {
  const attrs = ["Clean Ingredients", "Evidence-Based", "Doctor-Formulated", "High-Quality"];
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: "linear-gradient(135deg, rgb(80,120,180) 0%, rgb(50,80,140) 100%)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
        <div
          className="rounded-2xl px-6 py-4 text-center w-full"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", marginBottom: "4px" }}>
            Doctor-Designed Formula
          </p>
          <p style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-sans)", letterSpacing: "-0.02em" }}>
            MEDVi Supplements
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full">
          {attrs.map((attr) => (
            <div
              key={attr}
              className="flex items-center gap-2 rounded-xl p-3"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#84C390" }} />
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-sans)" }}>
                {attr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SupplementsSection() {
  return (
    <ProductSection
      id="supplements"
      badge="Supplements"
      badgeColor="#2E5090"
      badgeBg="rgba(80,120,180,0.12)"
      title="Supplements with the power to boost real results"
      body="Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day. Transparent ingredients, no shortcuts."
      features={[
        { text: "Clean, transparent ingredient lists" },
        { text: "Evidence-based dosing protocols" },
        { text: "Doctor-formulated blends" },
        { text: "High-quality, rigorously sourced" },
      ]}
      ctaText="Coming Soon"
      ctaDisabled
      bgColor="rgb(228,236,242)"
      blobColor="rgba(80,120,180,0.15)"
      illustration={<SupplementsIllustration />}
      reverse
    />
  );
}
