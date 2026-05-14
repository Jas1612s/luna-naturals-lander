import { ProductSection } from "./ProductSection";

function MensHealthIllustration() {
  const metrics = [
    { label: "Testosterone", value: "Optimized", delta: "+18%" },
    { label: "Energy Level", value: "High", delta: "+34%" },
    { label: "Mental Focus", value: "Sharp", delta: "+22%" },
  ];
  return (
    <div className="relative w-full max-w-md" style={{ aspectRatio: "4/3" }}>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: "rgb(218,208,200)" }}
      />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: "rgba(36,34,32,0.08)", alignSelf: "flex-start" }}
        >
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#2E936F" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, color: "rgb(36,34,32)", fontFamily: "var(--font-sans)" }}>
            Health Dashboard
          </span>
        </div>
        <div className="space-y-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-2xl px-4 py-3"
              style={{ backgroundColor: "rgba(255,255,255,0.6)", border: "1px solid rgba(36,34,32,0.06)" }}
            >
              <div>
                <p style={{ fontSize: "11px", color: "rgba(36,34,32,0.5)", fontFamily: "var(--font-sans)" }}>{m.label}</p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "rgb(36,34,32)", fontFamily: "var(--font-sans)" }}>{m.value}</p>
              </div>
              <span
                className="rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{ backgroundColor: "rgba(46,147,111,0.12)", color: "#2E936F" }}
              >
                {m.delta}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "11px", color: "rgba(36,34,32,0.4)", fontFamily: "var(--font-sans)", textAlign: "center" }}>
          Discreet shipping · Doctor-guided · Ongoing support
        </p>
      </div>
    </div>
  );
}

export function MensHealthSection() {
  return (
    <ProductSection
      id="mens-health"
      badge="Men's Health"
      badgeColor="#4A3C2E"
      badgeBg="rgba(100,80,60,0.12)"
      title="Men's healthcare, built for men who expect more"
      subtitle="Care designed to help you feel stronger, sharper, and more in control"
      body="Doctor-guided care for hormones, energy, and performance with tailored treatment plans—addressing the things that matter most to you, on your terms."
      features={[
        { text: "Physical performance and hormone balance" },
        { text: "Energy levels and mental focus" },
        { text: "Tailored treatment plans from real doctors" },
        { text: "Discreet shipping, always" },
      ]}
      ctaText="Get Started"
      bgColor="rgb(232,224,220)"
      blobColor="rgba(100,80,60,0.1)"
      illustration={<MensHealthIllustration />}
    />
  );
}
