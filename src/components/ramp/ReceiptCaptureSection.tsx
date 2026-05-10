export function ReceiptCaptureSection() {
  return (
    <section style={{ backgroundColor: "#F7F7F4" }} className="py-20 lg:py-28">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column: phone mockup */}
          <div className="flex justify-center">
            <div
              style={{
                maxWidth: "320px",
                width: "100%",
                borderRadius: "24px",
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.18), 0 0 0 1px #E4E1DB",
                backgroundColor: "white",
                overflow: "hidden",
              }}
            >
              {/* Top notch bar */}
              <div
                style={{ backgroundColor: "#F7F7F4" }}
                className="flex items-center justify-center py-3"
              >
                <div
                  style={{
                    height: "6px",
                    width: "80px",
                    borderRadius: "9999px",
                    backgroundColor: "#E4E1DB",
                  }}
                />
              </div>

              {/* Phone body */}
              <div className="p-4" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Orange alert pill */}
                <div
                  style={{
                    backgroundColor: "rgba(255,101,0,0.06)",
                    border: "1px solid rgba(255,101,0,0.15)",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#FF6500",
                      marginBottom: "4px",
                    }}
                  >
                    Out-of-policy detected
                  </p>
                  <p style={{ fontSize: "10px", color: "#8A8A8A", lineHeight: 1.5 }}>
                    This charge at Grand Hyatt NYC exceeds the $250 hotel limit
                  </p>
                </div>

                {/* Transaction card */}
                <div
                  style={{
                    backgroundColor: "#F7F7F4",
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {/* Merchant header */}
                  <div className="flex items-center gap-2.5">
                    <div
                      style={{
                        backgroundColor: "#0A0F1E",
                        color: "white",
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        fontSize: "10px",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      GH
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "#0F0F0F" }}>
                        Grand Hyatt NYC
                      </p>
                      <p style={{ fontSize: "10px", color: "#8A8A8A" }}>Hotels &amp; Lodging</p>
                    </div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#0F0F0F", flexShrink: 0 }}>
                      $340.00
                    </p>
                  </div>

                  {/* Receipt lines */}
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {[
                      { label: "Room (1 night)", amount: "$280" },
                      { label: "Room service", amount: "$45" },
                      { label: "Parking", amount: "$15" },
                    ].map(({ label, amount }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span style={{ fontSize: "10px", color: "#595959" }}>{label}</span>
                        <span style={{ fontSize: "10px", color: "#0F0F0F", fontWeight: 500 }}>
                          {amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <button
                    style={{
                      backgroundColor: "#F0EDE8",
                      color: "#595959",
                      borderRadius: "12px",
                      padding: "10px 0",
                      fontSize: "12px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Request approval
                  </button>
                  <button
                    style={{
                      backgroundColor: "#FF6500",
                      color: "white",
                      borderRadius: "12px",
                      padding: "10px 0",
                      fontSize: "12px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Add memo
                  </button>
                </div>
              </div>
            </div>
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
                AI Receipt Capture
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
                fontFamily: "var(--font-plus-jakarta-sans)",
              }}
            >
              Intelligent receipt capture
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontSize: "clamp(16px, 1.2vw, 18px)",
                lineHeight: 1.6,
                color: "#595959",
                maxWidth: "480px",
                marginBottom: "28px",
              }}
            >
              Detect out-of-policy items in your receipts automatically. Ramp&apos;s AI reads every
              receipt line-by-line and flags anything that shouldn&apos;t be there—before it becomes a
              problem.
            </p>

            {/* Bullet list */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                "AI-powered line-item policy checks",
                "Automatic receipt matching and coding",
                "SMS, email, and Slack receipt submission",
                "Syncs directly to your accounting software",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="9" r="9" fill="#FF6500" fillOpacity="0.12" />
                    <path
                      d="M5.5 9.5L7.5 11.5L12.5 6.5"
                      stroke="#FF6500"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: "15px", color: "#595959", lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>

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
