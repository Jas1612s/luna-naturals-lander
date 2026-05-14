const programLinks = [
  { label: "Weight Loss", href: "#weight-loss" },
  { label: "Men's Health", href: "#mens-health" },
  { label: "Women's Health", href: "#womens-health" },
  { label: "MEDVi Meals", href: "#meals" },
  { label: "Peptides & Longevity", href: "#peptides" },
  { label: "Hair Restoration", href: "#hair" },
  { label: "Skincare", href: "#skincare" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Privacy Practices", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Medical Consent", href: "#" },
];

const pharmacyPartners = [
  { name: "Triad Rx", location: "Daphne, AL" },
  { name: "RedRock Pharmacy", location: "St. George, UT" },
  { name: "Beaker Pharmacy & Compounding", location: "McKinney, TX" },
];

export function MedviFooter() {
  return (
    <footer
      style={{ backgroundColor: "rgb(17,33,17)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto px-6 py-16" style={{ maxWidth: "1280px" }}>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex items-baseline gap-0.5">
              <span
                className="text-2xl font-bold"
                style={{ color: "#ffffff", letterSpacing: "-0.03em", fontFamily: "var(--font-sans)" }}
              >
                MED
              </span>
              <span
                className="text-2xl font-bold"
                style={{ color: "#2E936F", letterSpacing: "-0.03em", fontFamily: "var(--font-sans)" }}
              >
                Vi
              </span>
            </div>
            <p
              className="mb-6 text-sm"
              style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: "280px" }}
            >
              Healthcare, redefined for real life. Simple, direct, and led by
              licensed providers.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:help@medvi.org"
                className="block text-sm hover:opacity-75 transition-opacity"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                help@medvi.org
              </a>
              <a
                href="tel:+13236901564"
                className="block text-sm hover:opacity-75 transition-opacity"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                (323) 690-1564
              </a>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                131 Continental Dr. Ste 305
                <br />
                Newark, DE 19713
              </p>
            </div>
          </div>

          {/* Programs */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Programs
            </p>
            <nav className="space-y-3">
              {programLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Pharmacy Partners */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Pharmacy Partners
            </p>
            <div className="space-y-4">
              {pharmacyPartners.map((p) => (
                <div key={p.name}>
                  <p className="text-sm font-medium text-white">{p.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {p.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Get Started CTA */}
          <div>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Start Today
            </p>
            <p className="mb-5 text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Get matched with a licensed provider and take the first step toward better health.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#2E936F", color: "#ffffff" }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs hover:underline"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 MEDVi. All rights reserved. Not a substitute for professional medical advice.
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div className="overflow-hidden" style={{ height: "120px" }}>
        <p
          className="select-none text-center leading-none"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(80px, 18vw, 260px)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.025)",
            marginTop: "-8px",
          }}
        >
          MEDVi
        </p>
      </div>
    </footer>
  );
}
