"use client";

import { useState, useEffect } from "react";

function useCountdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ hrs: 21, min: 47, sec: 59 });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hrs, min, sec } = prev;
        sec -= 1;
        if (sec < 0) { sec = 59; min -= 1; }
        if (min < 0) { min = 59; hrs -= 1; }
        if (hrs < 0) { hrs = 0; min = 0; sec = 0; }
        return { hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { ...time, mounted };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function GrunsNav() {
  const { hrs, min, sec, mounted } = useCountdown();

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement strip with countdown */}
      <div className="bg-[var(--gr-accent)] py-3 px-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-5">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-extrabold text-white uppercase tracking-wide leading-tight">
              Mosquito Season Sale
            </p>
            <p className="text-xs text-white/80 font-medium leading-tight">
              Save up to 60% + Free Gifts
            </p>
          </div>
          {mounted && (
            <div className="flex items-center gap-1.5">
              {[
                { val: pad(hrs), label: "HRS" },
                { val: pad(min), label: "MIN" },
                { val: pad(sec), label: "SEC" },
              ].map((unit, i) => (
                <div key={unit.label} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/60 font-bold text-sm leading-none">:</span>}
                  <div className="bg-white text-[var(--gr-dark)] rounded-md px-2 py-1.5 min-w-[38px] text-center">
                    <span className="text-base font-bold leading-none block">{unit.val}</span>
                    <span className="text-[7px] uppercase tracking-wider text-[var(--gr-sage)] block mt-0.5">{unit.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="border-b border-[var(--gr-sage)]/30"
        style={{ backgroundColor: "var(--gr-green)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-3 items-center h-[60px]">
          {/* Left: hamburger menu */}
          <div className="flex items-center">
            <button aria-label="Menu" className="cursor-pointer text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Center: logo */}
          <a href="/lunanaturals" className="flex items-center justify-center h-full">
            <img
              src="/images/gruns/luna-naturals-logo-cropped.webp"
              alt="Luna Naturals"
              className="h-[44px] w-auto object-contain"
            />
          </a>

          {/* Right: account + cart */}
          <div className="flex items-center justify-end gap-4 text-white">
            <a href="#" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>
            <a href="#" aria-label="Cart">
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
