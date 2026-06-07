"use client";

const MESSAGES = [
  "NO ANIMAL TESTING",
  "FREE SHIPPING ON ALL U.S. ORDERS $200+",
  "100% CLEAN, NON-IRRITATING",
];

function MessageSet() {
  return (
    <>
      {MESSAGES.map((msg, i) => (
        <span
          key={i}
          style={{
            paddingLeft: 30,
            paddingRight: 30,
            whiteSpace: "nowrap",
          }}
        >
          {msg}
        </span>
      ))}
    </>
  );
}

export function ScrollingPromoBar() {
  return (
    <div
      style={{
        height: 40,
        backgroundColor: "var(--em-indigo)",
        color: "var(--em-white)",
        fontSize: 16,
        fontWeight: 400,
        textTransform: "uppercase",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="em-marquee-track">
        {/* Repeat 6 times for seamless loop */}
        <MessageSet />
        <MessageSet />
        <MessageSet />
        <MessageSet />
        <MessageSet />
        <MessageSet />
      </div>
    </div>
  );
}
