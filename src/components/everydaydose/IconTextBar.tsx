"use client";

const items = [
  { emoji: "\u26A1", label: "Boosts Energy" },
  { emoji: "\uD83D\uDE0A", label: "ELEVATES MOOD" },
  { emoji: "\uD83E\uDDEC", label: "GUT HEALTH" },
  { emoji: "\uD83D\uDE34", label: "IMPROVES SLEEP" },
  { emoji: "\uD83E\uDDD8", label: "MANAGES STRESS" },
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
          }}
        >
          {i > 0 && (
            <span
              style={{
                margin: "0 16px",
                fontSize: "10px",
                opacity: 0.7,
              }}
            >
              ◆
            </span>
          )}
          <span style={{ fontSize: "15px" }}>{item.emoji}</span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--ed-white, #ffffff)",
            }}
          >
            {item.label}
          </span>
        </span>
      ))}
      {/* trailing diamond before next copy */}
      <span
        style={{
          margin: "0 16px",
          fontSize: "10px",
          opacity: 0.7,
        }}
      >
        ◆
      </span>
    </>
  );
}

export function IconTextBar() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes ed-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `,
        }}
      />
      <div
        style={{
          background:
            "var(--ed-gradient, linear-gradient(90deg, rgba(5, 194, 247, 0.8) 0.9%, rgba(231, 73, 255, 0.71) 100%))",
          boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px",
          marginBottom: "40px",
          overflow: "hidden",
          height: "60px",
          padding: "17px 30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="ed-marquee-track"
          style={{
            display: "inline-flex",
            alignItems: "center",
            animation: "ed-marquee 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </>
  );
}
