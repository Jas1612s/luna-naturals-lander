import { ProductSection } from "./ProductSection";

function WeightLossIllustration() {
  return (
    <div
      className="relative w-full max-w-md"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Main card */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, rgb(46,147,111) 0%, rgb(27,101,73) 100%)",
        }}
      />
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* Top stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Weight Lost", value: "24 lbs", color: "#ffffff" },
            { label: "Week", value: "12 of 24", color: "rgba(255,255,255,0.8)" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-4"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}>
                {stat.label}
              </p>
              <p style={{ fontSize: "22px", fontWeight: 700, color: stat.color, fontFamily: "var(--font-sans)", letterSpacing: "-0.03em" }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div>
          <div className="mb-2 flex justify-between">
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}>Progress</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sans)" }}>50%</span>
          </div>
          <div className="h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
            <div className="h-full w-1/2 rounded-full" style={{ backgroundColor: "#84C390" }} />
          </div>
        </div>

        {/* Bottom label */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{ backgroundColor: "rgba(255,255,255,0.15)", alignSelf: "flex-start" }}
        >
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#84C390" }} />
          <span style={{ fontSize: "12px", color: "#ffffff", fontFamily: "var(--font-sans)" }}>GLP-1 Program Active</span>
        </div>
      </div>
    </div>
  );
}

export function WeightLossSection() {
  return (
    <ProductSection
      id="weight-loss"
      badge="Weight Loss"
      badgeColor="#1B6549"
      badgeBg="rgba(46,147,111,0.12)"
      title="Weight loss made easy with personalized care"
      subtitle="A smarter approach to weight loss, built around you"
      body="Find the right GLP-1 medication with your doctor's approval—with budget-friendly options to fit your plan. Your care team will guide you from first prescription to lasting results."
      features={[
        { text: "Track progress in your patient portal" },
        { text: "Unlimited 24/7 provider support" },
        { text: "Prescription-to-door delivery" },
        { text: "Dietician visits and care coaching included" },
      ]}
      ctaText="Get Started"
      bgColor="rgb(241,245,233)"
      blobColor="rgba(132,195,144,0.2)"
      illustration={<WeightLossIllustration />}
    />
  );
}
