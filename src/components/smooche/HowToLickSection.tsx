const STEPS = [
  { num: "01", text: "Unwrap. Dim the lights if that's your thing." },
  { num: "02", text: "Enjoy slowly — let it last. (This isn't a race.)" },
  { num: "03", text: "Let the moment build from there." },
];

export function HowToLickSection() {
  return (
    <section style={{ backgroundColor: "#5A1726", padding: "80px 20px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#F5EDE6",
            marginBottom: 40,
          }}
        >
          How to <em style={{ fontStyle: "italic", color: "#C8A45C" }}>Lick.</em>
        </h2>

        <div className="flex flex-col gap-8">
          {STEPS.map((step) => (
            <div key={step.num} className="flex items-start gap-5 text-left">
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#C8A45C",
                  lineHeight: 1,
                  minWidth: 48,
                }}
              >
                {step.num}
              </span>
              <p
                style={{
                  fontSize: 18,
                  color: "#F5EDE6",
                  lineHeight: 1.5,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: 13,
            color: "rgba(245,237,230,0.5)",
            marginTop: 32,
          }}
        >
          Enjoy 1 lollipop. Best experienced 30-60 minutes before desired moment.
        </p>
      </div>
    </section>
  );
}
