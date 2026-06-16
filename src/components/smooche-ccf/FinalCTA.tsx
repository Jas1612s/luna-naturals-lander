import Image from "next/image";

const FEATURES = [
  "120 patches per pack \u2014 covers the whole summer",
  "100% plant-based, pediatrician approved",
  "Kids apply them independently",
] as const;

export function FinalCTA() {
  return (
    <section style={{ background: "#f5f7f4", padding: "48px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            textAlign: "center",
            color: "#1a2e1a",
            margin: "0 0 12px",
          }}
        >
          Ready for a bite-free summer?
        </h2>

        {/* Rating */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "1px" }}
            aria-label="5 out of 5 stars"
          >
            {"★★★★★"}
          </span>
          <span
            style={{
              fontSize: "15px",
              color: "#4a5d4a",
              marginLeft: "6px",
              fontWeight: 500,
            }}
          >
            (4.9 / 5)
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "15px",
            textAlign: "center",
            color: "#4a5d4a",
            lineHeight: 1.65,
            margin: "0 0 24px",
          }}
        >
          Join 50,000+ parents who&apos;ve replaced spray battles with sticker
          moments. No more tears. No more DEET. No more bites. Just happy kids
          playing outside all summer long.
        </p>

        {/* Feature bullets */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {FEATURES.map((f) => (
            <li
              key={f}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#1a2e1a",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#3d5a3d", fontSize: "18px", fontWeight: 700 }}>
                &#10003;
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Discount highlight */}
        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            textAlign: "center",
            color: "#bf0505",
            margin: "0 0 20px",
          }}
        >
          (Mosquito season sale) 60% OFF
        </p>

        {/* Shop now button */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              width: "100%",
              maxWidth: "400px",
              background: "#2d4a2d",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "16px",
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            Shop now
          </a>
        </div>

        {/* Product image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: "4 / 3",
          }}
        >
          <Image
            src="/images/smooche-ccf/gen-product-pouch.webp"
            alt="Luna Naturals Kids Mosquito Repellent Patches"
            fill
            sizes="(min-width: 640px) 400px, 90vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
