import { ProductSection } from "./ProductSection";

function WomensHealthIllustration() {
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: "linear-gradient(135deg, rgb(196,110,148) 0%, rgb(148,64,100) 100%)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
        <div className="grid grid-cols-2 gap-4 w-full">
          {["Hormone Balance", "Weight", "Hair & Skin", "Vitality"].map((item) => (
            <div
              key={item}
              className="rounded-2xl p-4 flex items-center gap-2"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "12px", color: "#ffffff", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <div
          className="rounded-2xl px-5 py-3 text-center w-full"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}>Personalized plan</p>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", fontFamily: "var(--font-sans)" }}>
            Whole-body care
          </p>
        </div>
      </div>
    </div>
  );
}

export function WomensHealthSection() {
  return (
    <ProductSection
      id="womens-health"
      badge="Women's Health"
      badgeColor="#7C3153"
      badgeBg="rgba(196,110,148,0.15)"
      title="Whole-body care for her balance, vitality, and confidence"
      body="Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support your health through every stage of life."
      features={[
        { text: "Hormone balance and women's wellness" },
        { text: "Weight management tailored for women" },
        { text: "Hair and skin treatment plans" },
        { text: "Support through every stage of life" },
      ]}
      ctaText="Coming Soon"
      ctaDisabled
      bgColor="rgb(242,230,236)"
      blobColor="rgba(196,110,148,0.18)"
      illustration={<WomensHealthIllustration />}
      reverse
    />
  );
}
