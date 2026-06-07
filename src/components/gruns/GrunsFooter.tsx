import { ArrowRight } from "lucide-react";

const learnLinks = [
  "Our Science",
  "How It Works",
  "Our Story",
  "FAQs",
];

const connectLinks = [
  "Contact Us",
  "Refer a Friend",
  "Partners & Influencers",
  "Press Inquiries",
  "Returns & Exchanges",
];

const shopLinks = [
  "Adults Patches (90 ct)",
  "Kids Patches (90 ct)",
  "Bundle & Save",
];

const policyLinks = [
  "Refund Policy",
  "Privacy Policy",
  "Terms Of Service",
  "Shipping Policy",
  "Accessibility",
];

function InstagramIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TikTok">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.78 1.53V6.79a4.85 4.85 0 0 1-1.01-.1Z" fill="white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GrunsFooter() {
  return (
    <footer className="bg-[var(--gr-green-dark)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-16 pb-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Email Signup */}
          <div className="flex flex-col gap-4">
            <p className="text-[var(--gr-yellow)] font-semibold text-lg leading-snug">
              Get 10% Off Your First Order
            </p>
            <div className="flex items-center border-b border-white/30">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-white placeholder-white/50 text-sm py-2 outline-none"
              />
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded bg-[var(--gr-accent)] text-white hover:opacity-90 transition-opacity shrink-0"
                aria-label="Submit email"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Column 2: Learn */}
          <div className="flex flex-col gap-4">
            <h3 className="gr-display text-[var(--gr-yellow)] font-bold italic text-xl">Learn</h3>
            <ul className="flex flex-col gap-2">
              {learnLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="gr-display text-[var(--gr-yellow)] font-bold italic text-xl">Connect</h3>
            <ul className="flex flex-col gap-2">
              {connectLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Shop */}
          <div className="flex flex-col gap-4">
            <h3 className="gr-display text-[var(--gr-yellow)] font-bold italic text-xl">Shop</h3>
            <ul className="flex flex-col gap-2">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo + Social Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12 pt-8 border-t border-white/10">
          <img
            src="/images/gruns/luna-naturals-logo-cropped.webp"
            alt="Luna Naturals"
            className="h-12"
          />
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok" className="hover:opacity-70 transition-opacity"><TikTokIcon /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity"><FacebookIcon /></a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <div className="border border-white/20 rounded-lg p-4 text-xs text-white/60 leading-relaxed">
            *Our patches are not intended to diagnose, treat, cure, or prevent any disease. Results may vary. Consult your healthcare provider before use if you have sensitive skin or allergies.
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-white/10 text-xs text-white/50 gap-4">
          <span>© Copyright 2026, Luna Naturals</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
            {policyLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white/80 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
