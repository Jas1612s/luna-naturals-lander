const MAIN_MENU_LINKS = [
  "Shop all",
  "Bestsellers",
  "Accessories",
  "About",
  "SALE",
] as const;

const USEFUL_LINKS = [
  "Track my order",
  "FAQs",
  "Terms of service",
  "Cookie Policy",
  "Shipping policy",
  "Refund policy",
  "Privacy policy",
  "Contact",
  "Gift cards",
] as const;

export function CCFFooter() {
  return (
    <footer style={{ background: "#000", color: "#fff", padding: "48px 20px" }}>
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
              smooche
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
              Smooche is a solutions-oriented beauty brand, creating a world
              where everybody feels confident
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
              <span style={{ display: "block" }}>Smooche LLC</span>
              <span style={{ display: "block" }}>
                8605 Santa Monica Boulevard, PMB 44698
              </span>
              <span style={{ display: "block" }}>West Hollywood, CA 90069</span>
              <span style={{ display: "block" }}>United States</span>
            </address>

            {/* Email */}
            <a
              href="mailto:hey@smooche.com"
              style={{
                fontSize: "13px",
                color: "#999",
                textDecoration: "none",
              }}
            >
              hey@smooche.com
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
            &copy; 2025 Smooche
          </p>
        </div>
      </div>
    </footer>
  );
}
