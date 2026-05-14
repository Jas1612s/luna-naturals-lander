import { ProductSection } from "./ProductSection";

function SkincareIllustration() {
  const concerns = ["Acne", "Aging", "Sensitivity", "Texture"];
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: "rgb(235,225,215)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="text-center">
          <p style={{ fontSize: "13px", fontWeight: 600, color: "rgb(56,49,44)", fontFamily: "var(--font-sans)", marginBottom: "4px" }}>
            Clinician-Guided Skincare
          </p>
          <p style={{ fontSize: "11px", color: "rgba(36,34,32,0.5)", fontFamily: "var(--font-sans)" }}>
            Prescription-strength options available
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {concerns.map((concern) => (
            <div
              key={concern}
              className="rounded-2xl px-4 py-4 flex flex-col gap-2"
              style={{ backgroundColor: "rgba(255,255,255,0.6)", border: "1px solid rgba(36,34,32,0.06)" }}
            >
              <div className="h-2 w-8 rounded-full" style={{ backgroundColor: "rgba(180,120,60,0.3)" }} />
              <span style={{ fontSize: "13px", fontWeight: 500, color: "rgb(36,34,32)", fontFamily: "var(--font-sans)" }}>
                {concern}
              </span>
            </div>
          ))}
        </div>
        <div
          className="rounded-xl px-4 py-3 text-center"
          style={{ backgroundColor: "rgba(46,147,111,0.1)" }}
        >
          <p style={{ fontSize: "12px", fontWeight: 500, color: "#2E936F", fontFamily: "var(--font-sans)" }}>
            Visible skin results • Personalized treatment plans
          </p>
        </div>
      </div>
    </div>
  );
}

export function SkincareSection() {
  return (
    <ProductSection
      id="skincare"
      badge="Skincare"
      badgeColor="#6B4A2E"
      badgeBg="rgba(160,110,60,0.12)"
      title="Skincare that goes deeper than the surface"
      subtitle="Skincare designed to treat the root cause—not just cover it up."
      body="Addressing acne, aging, sensitivity, and texture with clinician-guided, personalized approaches. Prescription-strength options available through your care team."
      features={[
        { text: "Clinician-guided, tailored care" },
        { text: "Prescription-strength options" },
        { text: "Simple daily routines" },
        { text: "Personalized treatment plans" },
      ]}
      ctaText="Coming Soon"
      ctaDisabled
      bgColor="rgb(250,249,247)"
      blobColor="rgba(160,110,60,0.1)"
      illustration={<SkincareIllustration />}
      reverse
    />
  );
}
