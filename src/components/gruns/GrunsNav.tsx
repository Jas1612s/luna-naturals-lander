"use client";

export function GrunsNav() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement strip */}
      <div className="bg-[var(--gr-cream)] text-center py-2">
        <a href="#" className="text-xs font-medium text-[var(--gr-dark)] hover:underline">
          ☀️ Summer Sale — Buy 2 Packs, Get Free Shipping ☀️
        </a>
      </div>

      {/* Main nav */}
      <nav
        className="border-b border-[var(--gr-sage)]/30"
        style={{ backgroundColor: "var(--gr-green)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-3 items-center h-[56px]">
          {/* Left: hamburger menu */}
          <div className="flex items-center">
            <button aria-label="Menu" className="cursor-pointer" style={{ color: "var(--gr-yellow)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Center: logo */}
          <a href="/gruns" className="flex justify-center">
            <img
              src="/images/gruns/luna-naturals-logo-cropped.png"
              alt="Luna Naturals"
              className="h-[40px] w-auto"
            />
          </a>

          {/* Right: account + cart */}
          <div className="flex items-center justify-end gap-4">
            <a href="#" aria-label="Account" style={{ color: "var(--gr-yellow)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
            <a href="#" aria-label="Cart" style={{ color: "var(--gr-yellow)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
