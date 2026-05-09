import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  TikTokIcon,
  ExternalLinkIcon,
} from "@/components/icons";

const learnLinks = [
  "Labs",
  "Weight Loss",
  "Sexual Health",
  "Testosterone",
  "Hair Regrowth",
  "Mental Health",
  "Drug Comparisons",
  "Drugs & Medications",
  "About the Company",
];

const toolLinks = [
  "BMI Calculator",
  "TDEE Calculator",
  "Calorie Deficit Calculator",
  "Protein Calculator",
  "Water Intake Calculator",
];

const popularLinks = [
  { label: "GLP-1 Injections", sub: null },
  { label: "Sildenafil", sub: "Generic for Viagra®" },
  { label: "Cialis®", sub: null },
  { label: "Tadalafil", sub: "Generic for Cialis®" },
  { label: "Minoxidil Solution", sub: null },
  { label: "Finasteride Pills", sub: null },
  { label: "Topical Finasteride", sub: null },
  { label: "Sertraline for PE", sub: null },
  { label: "Sertraline", sub: "Generic for Zoloft®" },
  { label: "Escitalopram", sub: "Generic for Lexapro®" },
];

const himsLinks = [
  "About Us",
  "Good Health (It's our blog)",
  "How It Works",
  "Clinical Excellence",
  "Innovation",
  "Quality & Safety",
  "Hims Benefits",
  "Editorial Standards",
  "FAQs",
  "Investors",
];

const careerLinks = ["Professionals", "Providers"];
const connectLinks = ["Customer Help Center", "Press Center"];

const legalLinks = [
  "Terms & conditions",
  "Privacy policy",
  "Sitemap",
  "Telehealth Consent & Open Payments",
  "Consumer Health Data Privacy Policy",
];

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/forhims", label: "Facebook" },
  { icon: <XIcon />, href: "https://twitter.com/forhims", label: "X (Twitter)" },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/forhims",
    label: "Instagram",
  },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@forhims", label: "TikTok" },
];

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 uppercase tracking-widest text-[rgba(255,255,255,0.44)]"
      style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em" }}
    >
      {children}
    </p>
  );
}

function NavLink({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href ?? "#"}
      className="block text-base text-white transition-colors hover:underline"
      style={{ lineHeight: 1.4, marginBottom: "12px" }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <>
      <footer
        className="relative text-white"
        style={{ backgroundColor: "rgb(10, 38, 51)", paddingTop: "64px", paddingBottom: "32px" }}
      >
        <div
          className="mx-auto px-6"
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid gap-12" style={{ gridTemplateColumns: "1fr 3fr" }}>
            {/* Left: App Card */}
            <div
              className="flex flex-col gap-6 rounded-2xl p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <p className="text-sm text-[rgba(255,255,255,0.7)]">
                Download the free Hims app
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 400, color: "white" }}>
                Total care.
                <br />
                Totally different.
              </h2>
              <div className="flex items-center gap-4">
                <div
                  className="flex flex-col rounded-xl px-5 py-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-xs text-[rgba(255,255,255,0.6)]">Download</p>
                  <p className="text-sm text-white">the app</p>
                </div>
                <div
                  className="h-14 w-14 rounded-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                />
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.5)]">For iOS and Android</p>
              <div
                className="mt-auto h-60 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              />
            </div>

            {/* Right: Nav columns */}
            <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              {/* Col 1 */}
              <div>
                <ColHeader>Learn</ColHeader>
                <nav>
                  {learnLinks.map((l) => (
                    <NavLink key={l}>{l}</NavLink>
                  ))}
                </nav>
                <ColHeader>Tools</ColHeader>
                <nav>
                  {toolLinks.map((l) => (
                    <NavLink key={l}>{l}</NavLink>
                  ))}
                </nav>
              </div>

              {/* Col 2 */}
              <div>
                <ColHeader>Popular</ColHeader>
                <nav>
                  {popularLinks.map(({ label, sub }) => (
                    <div key={label} style={{ marginBottom: sub ? "16px" : "0" }}>
                      <NavLink>{label}</NavLink>
                      {sub && (
                        <p
                          className="text-[rgba(255,255,255,0.44)]"
                          style={{ fontSize: "12px", marginTop: "-8px", marginBottom: "12px" }}
                        >
                          {sub}
                        </p>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Col 3 */}
              <div>
                <ColHeader>Hims</ColHeader>
                <nav>
                  {himsLinks.map((l) => (
                    <NavLink key={l}>{l}</NavLink>
                  ))}
                </nav>
                <ColHeader>Careers</ColHeader>
                <nav>
                  {careerLinks.map((l) => (
                    <NavLink key={l}>{l}</NavLink>
                  ))}
                </nav>
                <ColHeader>Connect</ColHeader>
                <nav>
                  {connectLinks.map((l) => (
                    <NavLink key={l}>{l}</NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Social Row */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="relative mt-8 px-0 pt-0">
            {/* Hers Cross-link — absolute right */}
            <div
              className="absolute right-0 top-0 flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="h-9 w-9 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              />
              <div>
                <p className="text-sm font-medium text-white">hers</p>
                <p className="text-xs text-[rgba(255,255,255,0.5)]">visit forhers.com</p>
              </div>
              <ExternalLinkIcon className="h-4 w-4 text-[rgba(255,255,255,0.5)]" />
            </div>
            <div className="mb-3 flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[rgba(255,255,255,0.44)] hover:underline"
                  style={{ fontSize: "12px" }}
                >
                  {l}
                </a>
              ))}
            </div>
            <p className="mb-2 text-xs text-[rgba(255,255,255,0.44)]">Your privacy choices</p>
            <p className="text-xs text-[rgba(255,255,255,0.3)]">
              © 2026 Hims &amp; Hers Health, Inc. All rights reserved. HIMS, HERS, H, and HIMS
              &amp; HERS are trademarks of Hims, Inc.
            </p>
          </div>
        </div>
      </footer>

      {/* Footer logo watermark */}
      <section
        className="overflow-hidden bg-black"
        style={{ height: "200px" }}
      >
        <h2
          className="select-none text-center leading-none"
          style={{
            fontSize: "clamp(120px,25vw,400px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.05)",
            marginTop: "-20px",
          }}
        >
          hims
        </h2>
      </section>
    </>
  );
}
