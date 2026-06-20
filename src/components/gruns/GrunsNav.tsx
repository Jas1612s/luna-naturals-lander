"use client";

import { useState, useEffect } from "react";

function useCountdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ hrs: 3, min: 0, sec: 0 });

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
            <p className="text-sm font-extrabold uppercase tracking-wide leading-tight" style={{ color: "var(--gr-accent-text)" }}>
              Summer Sale
            </p>
            <p className="text-xs font-medium leading-tight" style={{ color: "var(--gr-accent-text)", opacity: 0.7 }}>
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
                  {i > 0 && <span className="font-bold text-sm leading-none" style={{ color: "var(--gr-accent-text)", opacity: 0.4 }}>:</span>}
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
          {/* Left: spacer for grid balance */}
          <div className="flex items-center" />

          {/* Center: logo */}
          <a href="/lunanaturals" className="flex items-center justify-center h-full">
            <img loading="eager" src="/images/gruns/luna-naturals-logo-cropped.webp" alt="Luna Natural" className="h-[40px] md:h-[48px] w-auto" />
          </a>

          {/* Right: spacer for grid balance */}
          <div className="flex items-center justify-end gap-4" />
        </div>
      </nav>
    </header>
  );
}
