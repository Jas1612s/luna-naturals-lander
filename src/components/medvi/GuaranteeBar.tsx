const guarantees = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <path d="M11 2l2 6h6.5l-5.3 3.8 2 6L11 14l-5.2 3.8 2-6L2.5 8H9z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: "Free, expedited delivery",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="9" r="4" stroke="#ffffff" strokeWidth="1.5" />
        <path d="M3 20c0-3.9 3.6-7 8-7s8 3.1 8 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Doctor-led plans & coaching",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#ffffff" strokeWidth="1.5" />
        <path d="M7 9h8M7 13h5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "No hidden fees",
  },
];

export function GuaranteeBar() {
  return (
    <section
      className="py-12"
      style={{
        background: "linear-gradient(135deg, rgb(27,101,73) 0%, rgb(20,75,55) 100%)",
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
          {guarantees.map((g, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {g.icon}
              </div>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
