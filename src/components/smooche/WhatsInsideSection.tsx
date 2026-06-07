export function WhatsInsideSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Label */}
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
          What&apos;s inside — honest, specific, no over-claim
        </p>

        <h2
          className="text-center"
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "#3D1018",
            lineHeight: 1.25,
            marginBottom: 40,
          }}
        >
          Cherry + Damiana.
          <br />
          Two ingredients that earn their place.
        </h2>

        {/* Ingredient cards */}
        <div className="flex flex-col gap-6">
          {/* Damiana */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#F5EAE4" }}
          >
            <div className="flex items-start gap-4">
              <span style={{ fontSize: 32, lineHeight: 1 }} aria-hidden="true">🌿</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#3D1018", marginBottom: 8 }}>
                  Damiana{" "}
                  <span style={{ fontSize: 14, fontWeight: 400, color: "#8B6B6B", fontStyle: "italic" }}>
                    (Turnera diffusa)
                  </span>
                </h3>
                <p style={{ fontSize: 15, color: "#5A2D35", lineHeight: 1.6, margin: 0 }}>
                  A leaf used in traditional botanical practice for centuries, long
                  associated with sensuality and relaxation. We use it because of
                  that history and the ritual it represents.
                </p>
              </div>
            </div>
          </div>

          {/* Cherry */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#F5EAE4" }}
          >
            <div className="flex items-start gap-4">
              <span style={{ fontSize: 32, lineHeight: 1 }} aria-hidden="true">🍒</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#3D1018", marginBottom: 8 }}>
                  Real cherry
                </h3>
                <p style={{ fontSize: 15, color: "#5A2D35", lineHeight: 1.6, margin: 0 }}>
                  For a deep, grown-up sweetness that tastes like something you&apos;d
                  actually want in your mouth. Not medicinal. Not chalky. Just good.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full ingredient list */}
        <p
          className="text-center"
          style={{
            fontSize: 12,
            color: "#8B6B6B",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          Full ingredients: Organic cane sugar, organic tapioca syrup, citric acid,
          natural cherry flavor, Damiana leaf extract, Maca root extract,
          Tribulus Terrestris extract, natural color (beet juice concentrate).
        </p>

        {/* Honest note */}
        <div
          className="rounded-xl p-4 mt-4 text-center"
          style={{
            backgroundColor: "#FFF9F5",
            border: "1px solid #D4B5AB",
          }}
        >
          <p style={{ fontSize: 13, color: "#8B6B6B", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
            Honest note: damiana is a traditional botanical, not a proven medication.
            Lick. is made to support a mood and a moment — not to treat any condition.
          </p>
        </div>
      </div>
    </section>
  );
}
