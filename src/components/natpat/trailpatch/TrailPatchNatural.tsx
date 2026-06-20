import Image from "next/image";

export function TrailPatchNatural() {
  return (
    <section
      id="OurStory"
      style={{
        background: "var(--tp-gray-bg, #f3f4f5)",
        padding: "50px 0",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .tp-natural-section {
            background: url('/images/natpat/trailpatch/gray-wave-bg.png') no-repeat center / 100% 100%, var(--tp-gray-bg, #f3f4f5) !important;
            padding: 80px 0 !important;
          }
          .tp-natural-title {
            font-size: 17px !important;
            text-align: left !important;
          }
          .tp-natural-desc {
            font-size: 14px !important;
            text-align: left !important;
          }
          .tp-natural-cols {
            flex-direction: column !important;
            margin-top: 2rem !important;
          }
          .tp-feature-desc {
            font-size: 14px !important;
            text-align: left !important;
          }
        }
      `}</style>

      <div
        className="tp-natural-section"
        style={{ padding: "50px 0" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px" }}>

          {/* Natural badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Image
              src="/images/natpat/trailpatch/100-natural.svg"
              alt="100% Natural"
              width={120}
              height={120}
              style={{ height: "auto" }}
            />
          </div>

          {/* Title */}
          <h2
            className="tp-natural-title"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize: "32px",
              fontWeight: 600,
              textAlign: "center",
              margin: "0 0 20px",
            }}
          >
            100% Natural Ingredient,{" "}
            <span style={{ display: "block" }}>Never Chemicals</span>
          </h2>

          {/* Main description */}
          <p
            className="tp-natural-desc"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "normal",
              maxWidth: "800px",
              margin: "0 auto 16px",
            }}
          >
            Our Tick Repellent Sticker uses natural ingredients to keep you safe:
            Geranium, Peppermint, Thyme and Cedarwood Essential Oils. With our
            guarantee{" "}
            <strong>to never use dangerous chemicals</strong>, our products will
            always be{" "}
            <strong>safe for kids</strong>
          </p>

          {/* Second paragraph */}
          <p
            className="tp-natural-desc"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "normal",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Our Tick Repellent Sticker is made with a carefully selected blend of
            plant-based <strong>ingredients</strong>, including Geranium, Peppermint,
            Thyme, and Cedarwood essential oils. Designed for families, our products
            avoid harsh chemicals to provide a nature-inspired solution.
          </p>

          {/* Two feature columns */}
          <div
            className="tp-natural-cols"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              marginTop: "5rem",
              alignItems: "flex-start",
            }}
          >
            {/* Column 1: Aroma Weave Technology */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image
                src="/images/natpat/trailpatch/aroma-weave-tech.jpg"
                alt="Aroma Weave Technology"
                width={392}
                height={300}
                style={{ maxWidth: "392px", width: "100%", height: "auto" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "32px",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "20px 0 12px",
                }}
              >
                Aroma Weave Technology
              </h3>
              <p
                className="tp-feature-desc"
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  textAlign: "center",
                  lineHeight: "normal",
                  margin: 0,
                }}
              >
                By infusing <strong>biodegradable bamboo fibers</strong> with natural
                essential oils, our AromaWeave™ technology is able to provide
                therapeutic-grade tick protection. And while they may be tough on
                ticks, our kid-friendly stickers are as gentle as they come.
              </p>
            </div>

            {/* Column 2: Long-Lasting Protection */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image
                src="/images/natpat/trailpatch/long-lasting-protection.png"
                alt="Long-Lasting Protection"
                width={392}
                height={300}
                style={{ maxWidth: "392px", width: "100%", height: "auto" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "32px",
                  fontWeight: 600,
                  textAlign: "center",
                  margin: "20px 0 12px",
                }}
              >
                Long-Lasting Protection
              </h3>
              <p
                className="tp-feature-desc"
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  textAlign: "center",
                  lineHeight: "normal",
                  margin: 0,
                }}
              >
                Each sticker offers <strong>up to 8 hours of</strong> consistent tick
                repellent power, so you and your family can enjoy outdoor adventures
                worry-free.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
