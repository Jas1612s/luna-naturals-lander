interface Step {
  image: string;
  imageExt: string;
  stepLabel: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    image: "/images/smooche/how-it-works-1.webp",
    imageExt: "png",
    stepLabel: "Step 1",
    title: "Apply it to your lips",
    description: "Click the plumper a few times before using",
  },
  {
    image: "/images/smooche/how-it-works-2.webp",
    imageExt: "jpg",
    stepLabel: "Step 2",
    title: "Wait for 5-10 minutes",
    description: "Let smooche do its magic",
  },
  {
    image: "/images/smooche/how-it-works-3.webp",
    imageExt: "jpg",
    stepLabel: "Step 3",
    title: "See the magic happen",
    description: "The lips of your dreams",
  },
];

export function HowItWorksSection() {
  return (
    <section className="w-full bg-white" style={{ padding: "80px 20px" }}>
      <div className="mx-auto w-full" style={{ maxWidth: "1200px" }}>
        {/* Heading */}
        <h2
          className="text-center"
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#3D1018",
            marginBottom: "48px",
          }}
        >
          How it works
        </h2>

        {/* Steps grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {STEPS.map((step) => (
            <div key={step.stepLabel} className="flex flex-col items-center text-center">
              {/* Circular image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={step.image}
                alt={step.title}
                className="rounded-full object-cover flex-shrink-0"
                style={{
                  width: "clamp(160px, 22vw, 200px)",
                  height: "clamp(160px, 22vw, 200px)",
                }}
              />

              {/* Step label */}
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "#C8A45C",
                  marginTop: "20px",
                }}
              >
                {step.stepLabel}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#3D1018",
                  marginTop: "8px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#8B6B6B",
                  marginTop: "6px",
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
