"use client";

const footerLinks = {
  Products: ["Corporate Cards", "Expense Management", "Accounts Payable", "Travel", "Procurement", "Intelligence", "Accounting", "Treasury"],
  Solutions: ["Startups", "SMBs", "Enterprise", "Finance Teams", "Global Companies"],
  Resources: ["Blog", "Customer Stories", "Events", "Webinars", "Help Center", "Docs", "API Reference"],
  Company: ["About", "Careers", "Press", "Pricing", "Trust Center", "Integrations"],
};

const legalLinks = [
  "Terms of Service", "Editorial Guidelines", "Privacy Policy", "Your Privacy Choices", "State Disclosures",
];

function RampLogoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#FF6500" />
      <path d="M8 20V8h7.2c1.4 0 2.5.4 3.3 1.1.8.7 1.2 1.7 1.2 2.9 0 .9-.2 1.7-.7 2.3-.4.6-1 1.1-1.8 1.4l3 4.3h-3.1L14.5 16H10.8v4H8zm2.8-6.5h4.1c.7 0 1.2-.2 1.6-.5.4-.3.6-.8.6-1.4 0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.6-.5h-4.1v3.8z" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function RampFooter() {
  return (
    <footer style={{ backgroundColor: "#07090F", color: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 48px" }}>
        {/* Top: Logo + nav columns */}
        <div
          className="grid grid-cols-2 lg:grid-cols-5"
          style={{ gap: "48px", marginBottom: "64px" }}
        >
          {/* Logo column */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="/ramp"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", marginBottom: "16px" }}
            >
              <RampLogoIcon />
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.03em",
                }}
              >
                ramp
              </span>
            </a>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                maxWidth: "200px",
                marginBottom: "20px",
              }}
            >
              Finance automation built for modern business.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: XIcon, label: "X (Twitter)" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Ramp Business Corporation. All rights reserved. Ramp is not a bank. Banking services provided by Sutton Bank, Member FDIC.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
