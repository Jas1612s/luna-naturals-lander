export function LickHeroIntro() {
  return (
    <section style={{ backgroundColor: "#5A1726", padding: "80px 20px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#F5EDE6",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Some nights you want to{" "}
          <em style={{ fontStyle: "italic", color: "#C8A45C" }}>want</em> it.
          <br />
          This is for those nights.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(245,237,230,0.8)",
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Desire doesn&apos;t always show up on schedule. Between the to-do lists,
          the stress, and the ten tabs open in your head, &ldquo;in the mood&rdquo;
          can feel like one more thing you&apos;re supposed to summon out of nowhere.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "rgba(245,237,230,0.8)",
            lineHeight: 1.7,
            marginBottom: 32,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <strong style={{ color: "#F5EDE6" }}>Lick.</strong> is permission to slow
          down. A cherry-red heart on a stick, infused with damiana — a botanical
          women have reached for across centuries — designed to turn five quiet
          minutes into a little ritual that&apos;s entirely yours. No pill to choke
          down. No clinical aftertaste. Just a slow, sweet moment that puts you back
          in your body.
        </p>
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="transition-colors duration-200"
            style={{
              backgroundColor: "#C8A45C",
              color: "#3D1018",
              fontSize: 15,
              fontWeight: 700,
              padding: "16px 40px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Add to Bag — $55
          </button>
          <span style={{ fontSize: 13, color: "rgba(245,237,230,0.5)" }}>
            Free discreet shipping over $75
          </span>
        </div>
      </div>
    </section>
  );
}
