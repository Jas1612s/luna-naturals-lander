import Image from "next/image";

const linkColumns = [
  {
    title: "Products",
    links: [
      "Coffee+ Medium Roast",
      "Coffee+ Mild Roast",
      "Matcha+",
      "Accessories",
    ],
  },
  {
    title: "About",
    links: [
      "About Us",
      "FAQ",
      "Mushroom Coffee+",
      "Ingredients",
      "Recipes",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Store Locator",
      "Refer A Friend",
      "Careers",
      "Blog",
      "Press",
    ],
  },
  {
    title: "More",
    links: [
      "Manage Subscriptions",
      "HSA/FSA",
      "Terms & Conditions",
      "Privacy Policy",
      "Accessibility Statement",
    ],
  },
] as const;

function SocialIcons() {
  const iconStyle = {
    color: "rgba(255,255,255,0.7)",
    transition: "color 0.2s",
  };

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      {/* Instagram */}
      <a href="#" aria-label="Instagram" className="hover:!text-white" style={iconStyle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      {/* Facebook */}
      <a href="#" aria-label="Facebook" className="hover:!text-white" style={iconStyle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
        </svg>
      </a>
      {/* TikTok */}
      <a href="#" aria-label="TikTok" className="hover:!text-white" style={iconStyle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.6 5.82A4.5 4.5 0 0113 4V1h-3v14a3 3 0 11-2.05-2.85V9a6 6 0 105.05 5.94V10.5A7.5 7.5 0 0019 12V9a4.5 4.5 0 01-2.4-3.18z" />
        </svg>
      </a>
      {/* Pinterest */}
      <a href="#" aria-label="Pinterest" className="hover:!text-white" style={iconStyle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </a>
      {/* YouTube */}
      <a href="#" aria-label="YouTube" className="hover:!text-white" style={iconStyle}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
  );
}

export function EverydayDoseFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#231f20",
        color: "white",
        padding: "60px 40px 30px",
      }}
      className="max-sm:px-4 max-sm:py-[30px]"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top section: mission + logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "48px",
          }}
          className="max-sm:flex-col max-sm:gap-6"
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "white",
              maxWidth: "400px",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            On a mission to make everyday products healthier.
          </p>
          <Image
            src="/images/everydaydose/logo-white.svg"
            alt="Everyday Dose"
            width={180}
            height={60}
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        {/* Middle section: link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            marginBottom: "48px",
          }}
          className="max-sm:!grid-cols-2"
        >
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px",
                  color: "white",
                  marginTop: 0,
                }}
              >
                {column.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        lineHeight: 2,
                        transition: "color 0.2s",
                      }}
                      className="hover:!text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons + email */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
          }}
          className="max-sm:flex-col max-sm:gap-4 max-sm:items-start"
        >
          <SocialIcons />
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            Need Help?{" "}
            <a
              href="mailto:hi@everydaydose.com"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "underline",
                transition: "color 0.2s",
              }}
              className="hover:!text-white"
            >
              hi@everydaydose.com
            </a>
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              textAlign: "center",
            }}
          >
            &copy; 2025 Everyday Dose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
