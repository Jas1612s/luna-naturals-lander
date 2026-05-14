const footerLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What's included", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#" },
  { label: "About Forma", href: "#" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Medical disclaimer", href: "#" },
];

export function FormaFooter() {
  return (
    <>
      <footer
        className="py-16"
        style={{
          backgroundColor: "#04130D",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "1600px" }}
        >
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            {/* Brand column */}
            <div>
              <div className="mb-4 flex items-baseline gap-0.5">
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "-0.045em",
                    color: "#FFFFFF",
                  }}
                >
                  forma
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#00D68C" }}
                >
                  ·
                </span>
              </div>

              <p
                className="mb-6 text-sm"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                }}
              >
                India&apos;s first end-to-end GLP-1 weight care program.
                Clinically led by Max Healthcare.
              </p>

              <p
                className="font-mono text-xs uppercase tracking-[0.12em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Find your form.
              </p>
            </div>

            {/* Links columns */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p
                  className="mb-4 font-mono text-xs uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  Program
                </p>
                <nav className="space-y-3">
                  {footerLinks.map((link) => (
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

              <div>
                <p
                  className="mb-4 font-mono text-xs uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  Partnership
                </p>
                <div
                  className="inline-flex items-center gap-2.5 rounded-xl px-4 py-3"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
                    style={{ backgroundColor: "#0B3D2E", color: "#6FE8A7" }}
                  >
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Max Healthcare
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Clinical partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-wrap gap-x-6 gap-y-2">
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
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              © 2026 Forma Health Inc. Medical services provided by Max
              Healthcare. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* Wordmark section */}
      <div
        className="overflow-hidden"
        style={{ backgroundColor: "#04130D", height: "140px" }}
      >
        <p
          className="select-none text-center leading-none"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(100px, 20vw, 320px)",
            fontWeight: 700,
            letterSpacing: "-0.055em",
            color: "rgba(255,255,255,0.03)",
            marginTop: "-10px",
          }}
        >
          forma
        </p>
      </div>
    </>
  );
}
