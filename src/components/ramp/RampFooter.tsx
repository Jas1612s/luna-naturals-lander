const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Editorial Guidelines", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Your Privacy Choices", href: "#" },
  { label: "State Disclosures", href: "#" },
];

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LinkedIn"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="X (Twitter)"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Facebook"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function RampLogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="#FF6500" />
      <path
        d="M7 8h8.5a4.5 4.5 0 010 9H11v5H7V8z"
        fill="white"
      />
      <path
        d="M14 17l4 5h-4.5L10 17"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  );
}

export function RampFooter() {
  return (
    <footer
      style={{ backgroundColor: "#0A0F1E" }}
      className="py-12"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Logo + social row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          {/* Logo */}
          <a
            href="#"
            className="inline-flex items-center gap-2.5"
            style={{ textDecoration: "none" }}
            aria-label="Ramp home"
          >
            <RampLogoIcon />
            <span
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-plus-jakarta-sans)",
              }}
            >
              ramp
            </span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/company/ramp-financial", Icon: LinkedInIcon, label: "LinkedIn" },
              { href: "https://twitter.com/ramp", Icon: XIcon, label: "X (Twitter)" },
              { href: "https://www.facebook.com/RampFinancial", Icon: FacebookIcon, label: "Facebook" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "background-color 0.15s",
                }}
                className="hover:bg-white/10"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
          {legalLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
              }}
              className="transition-opacity hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Address */}
        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.25)",
            marginBottom: "6px",
          }}
        >
          Ramp Business Corporation · 28 West 23rd Street, Floor 2 · New York, NY 10010
        </p>

        {/* Copyright */}
        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.2)",
            marginBottom: "4px",
          }}
        >
          © 2026 Ramp Business Corporation.
        </p>

        {/* CA residents */}
        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.15)",
            marginBottom: "32px",
          }}
        >
          California Residents: +1-855-206-7283
        </p>

        {/* Disclaimer box */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.18)",
              lineHeight: 1.65,
              fontFamily: "var(--font-plus-jakarta-sans)",
            }}
          >
            The Ramp Visa Corporate Card is issued in the U.S. by Celtic Bank, and to U.S.
            corporations operating globally by Column N.A., Member FDIC, and is subject to credit
            approval. The Ramp Visa Commercial Card is issued by Sutton Bank, Member FDIC. The Ramp
            Visa Business Card is issued by Lead Bank, Member FDIC. Each card is issued pursuant to
            a license from Visa USA Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
