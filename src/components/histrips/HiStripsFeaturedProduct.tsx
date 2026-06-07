import Image from "next/image";

export function HiStripsFeaturedProduct() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
        className="flex-col md:flex-row"
      >
        {/* Left: Product Image */}
        <div
          style={{
            flex: "1 1 50%",
            backgroundColor: "#f5f5f5",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "1 / 1",
          }}
          className="w-full md:w-auto"
        >
          <Image
            src="/images/histrips/featured-product.webp"
            alt="Calm Morning Bundle (Strips & Onyx)"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right: Product Info */}
        <div
          style={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* NEW badge */}
          <div>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#E84B8A",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 16px",
                borderRadius: 9999,
                letterSpacing: 1,
              }}
            >
              NEW
            </span>
          </div>

          {/* Product name */}
          <h2
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#000",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Calm Morning Bundle (Strips & Onyx)
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              color: "#666",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Wake up on your terms — silently, precisely, and without disrupting
            your partner. The HiStrips Onyx Vibration Alarm is a wearable
            vibrating alarm designed to wake only you — no sound, no screen
            light, no shared disruption. Paired with our Nasal Strips, you get
            deeper, uninterrupted sleep and a calm, focused start to your day.
          </p>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#000",
              }}
            >
              $85.00
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#999",
                textDecoration: "line-through",
              }}
            >
              $120.00
            </span>
          </div>

          {/* CTA Button */}
          <div>
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1,
                padding: "14px 32px",
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
