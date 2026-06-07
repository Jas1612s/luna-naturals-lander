export function LunaHero() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .luna-hero-heading {
            font-size: 34px !important;
          }
          .luna-hero-sub {
            font-size: 15px !important;
          }
          .luna-hero-content {
            padding: 0 24px !important;
          }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background image via CSS */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/luna/hero-lifestyle.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            minHeight: "100vh",
          }}
        />

        {/* Dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(42,46,22,0.75) 0%, rgba(42,46,22,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Content container */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="luna-hero-content"
            style={{
              padding: "0 80px",
              maxWidth: "640px",
            }}
          >
            {/* Label */}
            <p
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "12px",
                letterSpacing: "3px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              ADVENTURE-READY PROTECTION
            </p>

            {/* H1 */}
            <h1
              className="luna-hero-heading"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "56px",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "20px",
                maxWidth: "560px",
              }}
            >
              Effective, Easy-to-Use Protection for Every Adventure.
            </h1>

            {/* Subheading */}
            <p
              className="luna-hero-sub"
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.5,
                maxWidth: "480px",
                marginBottom: "36px",
                fontFamily: "var(--font-jost)",
              }}
            >
              Wipes, sprays, bracelets, patches, and more—engineered to keep bugs at bay so you can enjoy the outdoors your way.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "row", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="/luna"
                style={{
                  backgroundColor: "#f26a3e",
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "16px 40px",
                  fontSize: "15px",
                  fontWeight: 600,
                  border: "none",
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "var(--font-jost)",
                }}
              >
                Shop Now
              </a>
              <a
                href="/luna"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255,255,255,0.6)",
                  borderRadius: "999px",
                  padding: "14px 32px",
                  fontSize: "15px",
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "var(--font-jost)",
                }}
              >
                Browse Collections
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
