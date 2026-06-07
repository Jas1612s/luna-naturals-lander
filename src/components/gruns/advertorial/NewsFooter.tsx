const footerSections = [
  { title: "Topics", links: ["Health", "Parenting", "Nutrition", "Family", "Wellness", "Product Reviews"] },
  { title: "Company", links: ["About Us", "Editorial Standards", "Corrections", "Advertise", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility", "Do Not Sell My Info"] },
];

export function NewsFooter() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-12 pb-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10">
          {/* Brand */}
          <div className="md:w-[280px] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span className="text-lg font-bold tracking-tight">The Parent Report</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Trusted health and wellness journalism for modern families. Evidence-based reporting since 2019.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs text-white/30">
              &copy; 2026 The Parent Report. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {/* Social icons */}
              {[
                { label: "Twitter", d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="text-white/30 hover:text-white/70 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {social.label === "Instagram" ? (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d={social.d} />
                      </>
                    ) : (
                      <path d={social.d} />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
