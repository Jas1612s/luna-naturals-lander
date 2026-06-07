export function TheRitualSection() {
  return (
    <section style={{ backgroundColor: "#EBD3C7", padding: "80px 20px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Section label */}
        <p
          className="text-center"
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#B8924A",
            marginBottom: 12,
          }}
        >
          The Ritual — what it actually is
        </p>

        <h2
          className="text-center"
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#3D1018",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Not a supplement you take.
          <br />A moment you{" "}
          <em style={{ fontStyle: "italic", color: "#B01E3C" }}>take</em>.
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "#5A2D35",
            lineHeight: 1.7,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Most &ldquo;libido&rdquo; products feel like homework — a capsule with
          your morning vitamins, easy to forget, impossible to enjoy.{" "}
          <strong>Lick.</strong> flips it. The lollipop{" "}
          <em>is</em> the ritual: unwrap it, slow down, and let the moment
          build. Five minutes that signal to your body — and whoever you&apos;re
          with — that you&apos;re shifting gears.
        </p>

        <p
          className="text-center"
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#3D1018",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          That slowing-down is half the point.
          <br />
          Anticipation is its own kind of foreplay.
        </p>
      </div>
    </section>
  );
}
