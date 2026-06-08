import Image from "next/image";

const FEATURES = [
  "Adapts in 60 seconds",
  "100% shade match guarantee",
  "No oxidation. Ever.",
] as const;

export function FinalCTA() {
  return (
    <section style={{ background: "#f7f7f7", padding: "48px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            textAlign: "center",
            color: "#151515",
            margin: "0 0 12px",
          }}
        >
          Ready to find your perfect match?
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
              color: "#555",
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
            color: "#555",
            lineHeight: 1.65,
            margin: "0 0 24px",
          }}
        >
          Join over 10,000 women who&apos;ve finally found their perfect shade
          with smooche. It&apos;s not a close match. It&apos;s not &ldquo;good
          enough.&rdquo; It&apos;s your exact tone&mdash;perfectly matched,
          every single time.
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
                color: "#151515",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#22c55e", fontSize: "18px", fontWeight: 700 }}>
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
          (Only today) Up to 60% OFF
        </p>

        {/* Shop now button */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              width: "100%",
              maxWidth: "400px",
              background: "#000",
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
            src="/images/smooche-ccf/stain.jpg"
            alt="Smooche Color Changing Foundation beauty close-up"
            fill
            sizes="(min-width: 640px) 400px, 90vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
