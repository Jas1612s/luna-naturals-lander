export function GiftSection() {
  return (
    <section style={{ backgroundColor: "#EBD3C7", padding: "80px 20px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#B8924A",
            marginBottom: 12,
          }}
        >
          The gift angle
        </p>

        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#3D1018",
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          The best plus-one you&apos;ll bring all year.
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "#5A2D35",
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Date night. Anniversary. Bachelorette. Valentine&apos;s. Or a
          &ldquo;thinking about you&rdquo; that says more than a text ever could.
          Lick. arrives in a beautiful burgundy pouch — pretty enough to gift,
          bold enough to make them smile.
        </p>

        {/* Gift visual row */}
        <div className="flex justify-center gap-4 mb-8">
          {["🎁", "💌", "❤️‍🔥"].map((e, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-full"
              style={{
                width: 64,
                height: 64,
                backgroundColor: "#ffffff",
                fontSize: 28,
              }}
            >
              {e}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="transition-colors duration-200"
          style={{
            backgroundColor: "#5A1726",
            color: "#F5EDE6",
            fontSize: 14,
            fontWeight: 700,
            padding: "14px 36px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Shop Gifts
        </button>
      </div>
    </section>
  );
}
