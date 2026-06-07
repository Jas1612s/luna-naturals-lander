"use client";

import { useState } from "react";

const navLinks = ["Health", "Parenting", "Nutrition", "Family", "Wellness"];

export function NewsNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      {/* Top bar */}
      <div className="bg-[#1a1a2e] py-1.5 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-[11px] text-white/70">
          <span>Friday, June 6, 2026</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Subscribe</a>
            <a href="#" className="hover:text-white transition-colors">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          {/* Shield/health icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-[#1a1a2e]">
              The Parent Report
            </span>
            <span className="hidden sm:block text-[10px] text-neutral-400 uppercase tracking-widest -mt-0.5">
              Health &amp; Family Wellness
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-neutral-600 hover:text-[#1a1a2e] transition-colors font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search + mobile menu */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="cursor-pointer text-neutral-500 hover:text-neutral-800 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button
            aria-label="Menu"
            className="md:hidden cursor-pointer text-neutral-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5 px-4 py-3 bg-neutral-50">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm text-neutral-600 font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Section nav */}
      <div className="border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-2 flex items-center gap-2 text-xs text-neutral-400">
          <a href="#" className="hover:text-neutral-600 transition-colors">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-neutral-600 transition-colors">Health</a>
          <span>/</span>
          <span className="text-neutral-600">Bug Protection</span>
        </div>
      </div>
    </header>
  );
}
