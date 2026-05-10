type RowStatus = "restricted" | "limited" | "allowed" | "blocked";

interface CardRow {
  merchant: string;
  category: string;
  limit: string;
  status: RowStatus;
}

const rows: CardRow[] = [
  { merchant: "Uber Eats", category: "Food & Dining", limit: "$75/mo", status: "restricted" },
  { merchant: "All Airlines", category: "Travel", limit: "$500/trip", status: "limited" },
  { merchant: "AWS", category: "Software", limit: "No limit", status: "allowed" },
  { merchant: "Luxury Hotels", category: "Lodging", limit: "$0", status: "blocked" },
];

const statusStyles: Record<RowStatus, { bg: string; color: string; label: string }> = {
  restricted: { bg: "rgba(234,179,8,0.12)", color: "#ca8a04", label: "Restricted" },
  limited:    { bg: "rgba(99,102,241,0.12)", color: "#6366f1", label: "Limited" },
  allowed:    { bg: "rgba(34,197,94,0.12)",  color: "#16a34a", label: "Allowed" },
  blocked:    { bg: "rgba(239,68,68,0.12)",  color: "#dc2626", label: "Blocked" },
};

function CardControlsMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl"
      style={{
        background: "#ffffff",
        border: "1px solid #E4E1DB",
        boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #E4E1DB",
          padding: "16px 20px",
        }}
      >
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#0F0F0F", margin: 0 }}>
          Card Controls
        </p>
        <p style={{ fontSize: "11px", color: "#8A8A8A", margin: "2px 0 0" }}>
          Merchant &amp; category restrictions
        </p>
      </div>

      {/* Rows */}
      {rows.map((row, i) => {
        const style = statusStyles[row.status];
        return (
          <div
            key={row.merchant}
            className="flex items-center justify-between"
            style={{
              padding: "14px 20px",
              borderBottom: i < rows.length - 1 ? "1px solid #F0EDE8" : undefined,
            }}
          >
            {/* Left */}
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#0F0F0F", margin: 0 }}>
                {row.merchant}
              </p>
              <p style={{ fontSize: "11px", color: "#8A8A8A", margin: "2px 0 0" }}>
                {row.category} · {row.limit}
              </p>
            </div>
            {/* Right: status pill */}
            <span
              style={{
                backgroundColor: style.bg,
                color: style.color,
                fontSize: "11px",
                fontWeight: 600,
                borderRadius: "9999px",
                padding: "3px 10px",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              {style.label}
            </span>
          </div>
        );
      })}

      {/* Footer */}
      <div
        style={{
          background: "#F7F7F4",
          padding: "16px 20px",
        }}
      >
        <button
          type="button"
          style={{
            width: "100%",
            background: "transparent",
            border: "1px dashed rgba(255,101,0,0.3)",
            borderRadius: "8px",
            color: "#FF6500",
            fontSize: "13px",
            fontWeight: 600,
            padding: "10px 0",
            cursor: "pointer",
          }}
        >
          + Add restriction rule
        </button>
      </div>
    </div>
  );
}

export function ControlSpendSection() {
  return (
    <section style={{ backgroundColor: "#F7F7F4" }} className="py-20 lg:py-28">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column: mockup */}
          <div>
            <CardControlsMockup />
          </div>

          {/* Right column: text */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-block">
              <span
                style={{
                  backgroundColor: "rgba(255,101,0,0.08)",
                  color: "#FF6500",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                }}
              >
                Spend Control
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0F0F0F",
                marginBottom: "20px",
              }}
            >
              Control out-of-policy spend
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                lineHeight: 1.6,
                color: "#595959",
                maxWidth: "480px",
                marginBottom: "32px",
              }}
            >
              Leverage merchant and category restrictions to prevent wasteful spending before it
              happens. Set limits by employee, team, or card—and never chase reimbursements again.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "#FF6500",
                color: "white",
                borderRadius: "9999px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get started for free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
