"use client";

function TreydLogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      <path d="M8 10h10M13 10v12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrustpilotStars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill={i < 4 ? "#00b67a" : "#00b67a"} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="24" height="24" fill="#00b67a" />
          <path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 5.5L12 14l-5 3.5 1.5-5.5L4 8.5h5.5L12 3z" fill="white" />
        </svg>
      ))}
    </div>
  );
}

const navCols = [
  {
    heading: "Company",
    links: ["About us", "Benefits", "Comparison", "Careers", "Referral"],
  },
  {
    heading: "Resources",
    links: ["FAQs", "Podcast", "Blog"],
  },
  {
    heading: "Markets",
    links: ["United Kingdom", "Denmark", "Norway", "Finland", "Sweden", "Ireland"],
  },
];

const socialLinks = ["LinkedIn", "Facebook", "Instagram", "TikTok"];

export function TreydFooter() {
  return (
    <footer>
      {/* Rainbow stripe decoration */}
      <div
        style={{
          backgroundColor: "#111111",
          paddingBottom: "0",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", height: "80px" }}>
          {/* Light green stripe — back */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "16px",
              right: "16px",
              height: "80px",
              backgroundColor: "#7DC4A0",
              borderRadius: "20px 20px 0 0",
            }}
          />
          {/* Mid green stripe — middle */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "8px",
              right: "8px",
              height: "80px",
              backgroundColor: "#2A9454",
              borderRadius: "20px 20px 0 0",
            }}
          />
          {/* Brand green stripe — front */}
          <div
            style={{
              position: "absolute",
              top: "32px",
              left: "0",
              right: "0",
              height: "80px",
              backgroundColor: "#006B2E",
              borderRadius: "20px 20px 0 0",
            }}
          />
        </div>
      </div>

      {/* Main footer body */}
      <div
        style={{
          backgroundColor: "#060606",
          padding: "64px 24px 0",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Top grid */}
          <div
            className="grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]"
            style={{ gap: "48px", marginBottom: "56px" }}
          >
            {/* Brand col */}
            <div>
              <a
                href="/treyd"
                style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "24px" }}
              >
                <TreydLogoMark />
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Treyd
                </span>
              </a>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "16px",
                  maxWidth: "300px",
                }}
              >
                Treyd AB is a regulated payment institution with Sweden&apos;s financial supervisory
                authority (Finansinspektionen), identification number 57683.
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                Org number: 559223-3208
              </p>
            </div>

            {/* Nav cols */}
            {navCols.map((col) => (
              <div key={col.heading}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "20px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {col.heading}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Social col */}
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Stay social
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {socialLinks.map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "8px",
                      padding: "10px 18px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "border-color 0.15s, background-color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Trustpilot bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              paddingBottom: "32px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>Our customers say</span>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#ffffff" }}>Excellent</span>
            <TrustpilotStars />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)" }}>
              4.7 out of 5 based on{" "}
              <a href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}>
                142 reviews
              </a>
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7l3-7z" />
              </svg>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>Trustpilot</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 0 32px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
              © 2026 Treyd AB. All Rights Reserved.
            </span>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Cookies Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
