const badges = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 2L5 10v10c0 9.55 6.4 18.48 15 20.65C28.6 38.48 35 29.55 35 20V10L20 2z"
          stroke="#231f20"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke="#231f20"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    title: "100% RISK-FREE",
    subtitle: "Free Shipping on every order.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="14" width="22" height="16" rx="2" stroke="#231f20" strokeWidth="2" fill="none" />
        <path
          d="M24 18h6l5 6v6h-7"
          stroke="#231f20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="10" cy="30" r="3.5" stroke="#231f20" strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="3.5" stroke="#231f20" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "FREE SHIPPING",
    subtitle: "On all orders, always.",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 35s-13-7.5-13-17.5C7 11.5 10.5 7 15 7c2.8 0 4.5 1.5 5 2.5C20.5 8.5 22.2 7 25 7c4.5 0 8 4.5 8 10.5S20 35 20 35z"
          stroke="#231f20"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    title: "45-DAY GUARANTEE",
    subtitle: "Love it or your money back.",
  },
] as const;

export function TrustBadges() {
  return (
    <section
      style={{
        backgroundColor: "#f3f4f6",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          maxWidth: "900px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
        className="max-sm:flex-col max-sm:items-center max-sm:gap-[30px]"
      >
        {badges.map((badge) => (
          <div
            key={badge.title}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "200px",
            }}
          >
            <div style={{ marginBottom: "12px" }}>{badge.icon}</div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#231f20",
                margin: "0 0 4px",
                letterSpacing: "0.5px",
              }}
            >
              {badge.title}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#666",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {badge.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
