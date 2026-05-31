interface Stat {
  number: string;
  // parts: each segment is either plain text or bold text
  textParts: { text: string; bold?: boolean }[];
}

const STATS: Stat[] = [
  {
    number: "97%",
    textParts: [
      { text: "Said it makes their lips look " },
      { text: "fuller", bold: true },
    ],
  },
  {
    number: "93%",
    textParts: [
      { text: "Said it makes their lips look " },
      { text: "healthy", bold: true },
    ],
  },
  {
    number: "94%",
    textParts: [
      { text: "Said it instantly " },
      { text: "hydrates", bold: true },
      { text: " their lips" },
    ],
  },
];

const SUBTEXT = "Based on an eight-week independent customer panel";

export function StatsSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#5A1726", padding: "60px 20px" }}>
      <div className="mx-auto w-full" style={{ maxWidth: "1200px" }}>
        {/* Stats grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "32px" }}
        >
          {STATS.map((stat) => (
            <div key={stat.number} className="flex flex-col items-center text-center">
              {/* Large number */}
              <span
                style={{
                  fontSize: "56px",
                  fontWeight: 800,
                  color: "#F5EDE6",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>

              {/* Statement with bold keyword */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#F5EDE6",
                  marginTop: "8px",
                  lineHeight: 1.5,
                }}
              >
                {stat.textParts.map((part, i) =>
                  part.bold ? (
                    <strong key={i} style={{ fontWeight: 700 }}>
                      {part.text}
                    </strong>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </p>

              {/* Subtext */}
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(245,237,230,0.6)",
                  marginTop: "12px",
                  lineHeight: 1.4,
                }}
              >
                {SUBTEXT}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
