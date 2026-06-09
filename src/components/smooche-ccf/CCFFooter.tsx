const MAIN_MENU_LINKS = [
  "Shop all",
  "Kids Patches",
  "Adult Patches",
  "About",
  "SALE",
] as const;

const USEFUL_LINKS = [
  "Track my order",
  "FAQs",
  "Terms of service",
  "Shipping policy",
  "Refund policy",
  "Privacy policy",
  "Contact",
] as const;

export function CCFFooter() {
  return (
    <footer style={{ background: "#2d4a2d", color: "#fff", padding: "48px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Top section: logo + description + address + links */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "36px" }}
        >
          {/* Brand column */}
          <div>
            {/* Logo text */}
            <p
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 8px",
              }}
            >
              Luna Naturals
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "#999",
                lineHeight: 1.6,
                margin: "0 0 16px",
                maxWidth: "280px",
              }}
            >
              Luna Naturals is a plant-based wellness brand creating safe,
              effective alternatives to chemical-based products for families.
            </p>

            {/* Business info */}
            <address
              style={{
                fontStyle: "normal",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.7,
                margin: "0 0 10px",
              }}
            >
              <span style={{ display: "block" }}>Luna Naturals LLC</span>
              <span style={{ display: "block" }}>
                1250 Borregas Avenue, Suite 200
              </span>
              <span style={{ display: "block" }}>Sunnyvale, CA 94089</span>
              <span style={{ display: "block" }}>United States</span>
            </address>

            {/* Email */}
            <a
              href="mailto:hello@lunanaturals.com"
              style={{
                fontSize: "13px",
                color: "#999",
                textDecoration: "none",
              }}
            >
              hello@lunanaturals.com
            </a>
          </div>

          {/* Main menu column */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                margin: "0 0 14px",
              }}
            >
              Main menu
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {MAIN_MENU_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="ccf-footer-link"
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links column */}
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                margin: "0 0 14px",
              }}
            >
              Useful links
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {USEFUL_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="ccf-footer-link"
                    style={{
                      fontSize: "13px",
                      color: "#999",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment icons */}
        <div
          style={{
            marginTop: "36px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              margin: "0 0 12px",
              letterSpacing: "0.3px",
            }}
          >
            Visa &bull; Amex &bull; Discover &bull; Mastercard &bull; Apple Pay
            &bull; PayPal &bull; Shop Pay
          </p>

          {/* Copyright */}
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            &copy; 2026 Luna Naturals
          </p>
        </div>
      </div>
    </footer>
  );
}
