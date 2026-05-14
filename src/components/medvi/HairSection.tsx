import { ProductSection } from "./ProductSection";

function HairIllustration() {
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: "rgb(228,210,218)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: "rgba(148,64,100,0.12)", alignSelf: "flex-start" }}
        >
          <span style={{ fontSize: "11px", fontWeight: 600, color: "rgb(100,40,65)", fontFamily: "var(--font-sans)" }}>
            Hair Regrowth Program
          </span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Clinically backed ingredients", pct: 88 },
            { label: "Hair density improvement", pct: 76 },
            { label: "Patient satisfaction", pct: 94 },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex justify-between">
                <span style={{ fontSize: "12px", color: "rgb(56,49,44)", fontFamily: "var(--font-sans)" }}>{item.label}</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "rgb(100,40,65)", fontFamily: "var(--font-sans)" }}>{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(148,64,100,0.15)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.pct}%`, backgroundColor: "rgb(148,64,100)" }}
                />
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "rgba(36,34,32,0.4)", fontFamily: "var(--font-sans)", textAlign: "center" }}>
          Long-term approach to hair density
        </p>
      </div>
    </div>
  );
}

export function HairSection() {
  return (
    <ProductSection
      id="hair"
      badge="Hair Restoration"
      badgeColor="#7C3153"
      badgeBg="rgba(148,64,100,0.12)"
      title="Proven care for thinning hair and regrowth"
      subtitle="Advanced hair regrowth care to help you look and feel your best"
      body="Our serum formulation targets scalp health and follicle support for thicker, healthier strands over time. A long-term approach rooted in clinically backed ingredients."
      features={[
        { text: "Clinically backed regrowth ingredients" },
        { text: "Targeted scalp and follicle support" },
        { text: "Long-term hair density approach" },
        { text: "Personalized plans from licensed providers" },
      ]}
      ctaText="Coming Soon"
      ctaDisabled
      bgColor="rgb(242,230,236)"
      blobColor="rgba(148,64,100,0.12)"
      illustration={<HairIllustration />}
    />
  );
}
