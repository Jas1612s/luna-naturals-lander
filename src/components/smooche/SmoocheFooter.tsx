const MAIN_MENU_LINKS = [
  "Shop all",
  "Bestsellers",
  "Accessories",
  "About",
  "SALE",
];

const POLICY_LINKS = [
  "Track my order",
  "FAQs",
  "Terms of service",
  "Cookie Policy",
  "Shipping policy",
  "Refund policy",
  "Privacy policy",
  "Contact",
  "Gift cards",
];

const PAYMENT_METHODS = [
  "American Express",
  "Discover",
  "Mastercard",
  "Apple Pay",
  "PayPal",
  "Shop Pay",
  "Amazon",
  "Afterpay",
];

export function SmoocheFooter() {
  return (
    <footer style={{ backgroundColor: "#5A1726", color: "#F5EDE6" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px 30px" }}>
        {/* ── 3-column grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "40px" }}
        >
          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/smooche/logo-white.svg"
              alt="Smooche"
              style={{ width: "120px", height: "auto", marginBottom: "16px", display: "block" }}
            />

            {/* Tagline */}
            <p
              style={{
                fontSize: "13px",
                color: "rgba(245,237,230,0.7)",
                lineHeight: 1.6,
                maxWidth: "300px",
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              Smooche is a solutions-oriented beauty brand, creating a world
              where everybody feels confident
            </p>

            {/* Company address */}
            <address
              style={{
                fontStyle: "normal",
                fontSize: "11px",
                color: "rgba(245,237,230,0.5)",
                marginTop: "16px",
                lineHeight: 1.7,
              }}
            >
              <span style={{ display: "block" }}>Smooche LLC</span>
              <span style={{ display: "block" }}>8605 Santa Monica Boulevard, PMB 44698</span>
              <span style={{ display: "block" }}>West Hollywood, CA 90069</span>
              <span style={{ display: "block" }}>United States</span>
            </address>

            {/* Email */}
            <a
              href="mailto:hey@smooche.com"
              className="sm-footer-link"
              style={{
                display: "inline-block",
                marginTop: "10px",
                fontSize: "11px",
              }}
            >
              hey@smooche.com
            </a>
          </div>

          {/* Column 2: Main menu */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#F5EDE6",
                marginBottom: "16px",
                marginTop: 0,
              }}
            >
              Main menu
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {MAIN_MENU_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="sm-footer-link"
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#F5EDE6",
                marginBottom: "16px",
                marginTop: 0,
              }}
            >
              Support
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {POLICY_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="sm-footer-link"
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Payment icons row ── */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px 8px",
                  border: "1px solid rgba(245,237,230,0.15)",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "rgba(245,237,230,0.4)",
                  letterSpacing: "0.3px",
                  whiteSpace: "nowrap",
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            marginTop: "24px",
            borderTop: "1px solid rgba(245,237,230,0.1)",
            paddingTop: "16px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "rgba(245,237,230,0.4)",
              margin: 0,
            }}
          >
            © 2024 Smooche
          </p>
        </div>
      </div>
    </footer>
  );
}
