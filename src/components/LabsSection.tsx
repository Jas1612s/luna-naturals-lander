const biomarkerTags = [
  "Cholesterol",
  "Heart",
  "LDL Cholesterol",
  "HDL Cholesterol",
  "Apolipoprotein",
  "Hemoglobin A1c",
  "Fasting Insulin",
  "Uric Acid",
  "Glucose",
  "Metabolism",
  "Luteinizing Hormone",
  "Follicle Stimulating Hormone",
  "Cortisol",
  "Inflammation & Stress",
  "DHEA-Sulfate",
  "Thyroid",
  "Thyroxine (T4)",
  "Triiodothyronine (T3)",
  "Kidney",
  "Blood Urea Nitrogen",
];

const highlightedTags = new Set(["Heart", "Metabolism", "Inflammation & Stress", "Thyroid"]);

export function LabsSection() {
  return (
    <section
      className="overflow-hidden rounded-t-3xl"
      style={{ background: "linear-gradient(135deg, rgb(191,142,94) 0%, rgb(160,110,70) 100%)" }}
    >
      {/* A: Hero row */}
      <div className="relative min-h-[480px] overflow-hidden px-12 py-12">
        <div className="relative z-10 max-w-lg">
          <p
            className="mb-3 uppercase tracking-widest text-[rgba(255,255,255,0.7)]"
            style={{ fontSize: "13px", letterSpacing: "0.1em" }}
          >
            labs by
          </p>
          <h2
            className="mb-8 text-white"
            style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1 }}
          >
            Get your labs.
            <br />
            Go for your optimal.
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/#labs"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-7 py-3 text-base font-medium text-[rgba(0,0,0,0.88)] transition-opacity hover:opacity-85"
            >
              Start my labs
            </a>
            <a
              href="/#labs-learn"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)] px-7 py-3 text-base text-white transition-opacity hover:opacity-85"
            >
              Learn more
            </a>
          </div>
        </div>
        {/* Hero person placeholder */}
        <div className="absolute bottom-0 right-0 h-full w-80 rounded-l-3xl bg-[rgba(255,255,255,0.1)]" />
      </div>

      {/* B: Info cards row */}
      <div className="flex flex-col gap-4 px-6 pb-4 md:flex-row">
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.25)] p-8 md:p-10">
          <h3
            className="mb-4 text-white"
            style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2 }}
          >
            Find your
            <br />
            <span>baseline</span>
          </h3>
          <p className="text-base text-[rgba(255,255,255,0.8)]">
            Get a clear picture of your health with a simple lab test.
          </p>
          <div className="mt-6 h-40 rounded-2xl bg-[rgba(255,255,255,0.1)]" />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.25)] p-8 md:p-10">
          <h3
            className="mb-4"
            style={{ fontSize: "36px", fontWeight: 400, lineHeight: 1.2 }}
          >
            <span className="text-[rgba(255,255,255,0.4)]">Plan your</span>
            <br />
            <span className="text-white">breakthrough</span>
          </h3>
          <p className="mb-6 text-base text-[rgba(255,255,255,0.8)]">
            Optimize your health with a doctor-developed Action Plan.
          </p>
          <a
            href="/#action-plan"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] px-6 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
          >
            Explore the plan
          </a>
        </div>
      </div>

      {/* C: Feature cards row */}
      <div className="flex flex-col gap-4 px-6 pb-12 md:flex-row">
        {/* Biomarkers card */}
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.15)] p-8">
          <h3
            className="mb-6 text-white"
            style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 400, lineHeight: 1.1 }}
          >
            Test 130+
            <br />
            biomarkers
          </h3>
          <div className="mb-6 flex flex-wrap gap-2">
            {biomarkerTags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs text-white ${
                  highlightedTags.has(tag)
                    ? "border border-white bg-[rgba(255,255,255,0.3)]"
                    : "border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.15)]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="/#biomarkers"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] px-6 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
          >
            Meet the markers
          </a>
        </div>

        {/* Cancer screening card */}
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.15)] p-8">
          <h3
            className="mb-6 text-white"
            style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 400, lineHeight: 1.1 }}
          >
            Screen for 50+
            <br />
            types of cancer
          </h3>
          <div className="mb-8 h-40 w-40 rounded-full bg-[rgba(255,255,255,0.15)] mx-auto flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-[rgba(255,255,255,0.2)]" />
          </div>
          <a
            href="/#cancer-screening"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] px-6 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="px-6 pb-8 text-center text-xs text-[rgba(255,255,255,0.5)]">
        Not available in all 50 states. Eligibility determination and prescription required for all lab tests.
      </p>
    </section>
  );
}
