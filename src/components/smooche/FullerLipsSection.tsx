const FEATURE_BADGES = [
  {
    icon: "/images/smooche/icon-plumping.svg",
    text: "Instant result",
  },
  {
    icon: "/images/smooche/icon-results.svg",
    text: "100% natural",
  },
] as const;

export function FullerLipsSection() {
  return (
    <section
      style={{ backgroundColor: "#EBD3C7", padding: "80px 20px" }}
      aria-label="Fuller lips naturally"
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-center"
        style={{ maxWidth: "1200px", gap: "0" }}
      >
        {/* ── Left: Image ── */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/smooche/lick-fuller-lips.webp"
            alt="Fuller lips naturally — Smooche product"
            style={{
              width: "100%",
              maxWidth: "500px",
              objectFit: "contain",
              borderRadius: "12px",
              display: "block",
            }}
          />
        </div>

        {/* ── Right: Text content ── */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0"
          style={{ paddingLeft: "0" }}
        >
          {/* Inner wrapper carries the left-padding only on desktop */}
          <div
            className="md:pl-[60px]"
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 700,
                color: "#3D1018",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Fuller lips,
              <br />
              <em style={{ fontStyle: "italic" }}>naturally</em>
            </h2>

            {/* Feature badges */}
            <div
              className="flex flex-col"
              style={{ marginTop: "24px", gap: "16px" }}
            >
              {FEATURE_BADGES.map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center"
                  style={{ gap: "8px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "24px",
                      height: "24px",
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#3D1018",
                      lineHeight: 1.4,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
