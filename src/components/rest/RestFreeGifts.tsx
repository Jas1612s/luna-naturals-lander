import Image from "next/image";

function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 1.667l-6.667 3v4.666c0 4.334 2.84 8.39 6.667 9.334 3.827-.944 6.667-5 6.667-9.334V4.667L10 1.667z" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 10l2 2 4-4" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReturnArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.167 8.333h9.166a3.333 3.333 0 010 6.667H10" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7.5 11.667L4.167 8.333 7.5 5" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 1.667l-6.667 3v4.666c0 4.334 2.84 8.39 6.667 9.334 3.827-.944 6.667-5 6.667-9.334V4.667L10 1.667z" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function HeartCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="m9 12 2 2 4-4" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GiftBoxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <path d="M12 8v13M3 12h18M8 8a3 3 0 010-6c2 0 3 1.5 4 3 1-1.5 2-3 4-3a3 3 0 010 6" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="white" />
      <path d="M5.5 8l1.75 1.75L10.5 6.5" stroke="#2A2E16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8AB97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

function InfoCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B9077" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

const trustBadges = [
  { icon: <ShieldCheckIcon />, label: "THIRD-PARTY TESTED" },
  { icon: <ReturnArrowIcon />, label: "30-NIGHT RETURNS" },
  { icon: <ShieldIcon />, label: "1-YEAR WARRANTY" },
  { icon: <HeartCheckIcon />, label: "HSA/FSA ELIGIBLE" },
];

export function RestFreeGifts() {
  return (
    <section className="relative z-10 bg-white pb-8 pt-10">
      {/* Trust Badges Row */}
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {trustBadges.map((badge, index) => (
            <div key={badge.label} className="flex items-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <span className="shrink-0">{badge.icon}</span>
                <span className="text-[11px] font-semibold tracking-[0.1em] text-[#2A2E16] md:text-[12px]">
                  {badge.label}
                </span>
              </div>
              {index < trustBadges.length - 1 && (
                <div className="hidden h-4 w-px bg-[#D4D1C4] md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Gift Card */}
      <div className="mx-auto mt-8 max-w-[1280px] px-6">
        <div className="overflow-hidden rounded-[20px] bg-[#F5EDE2]">
          <div className="grid md:grid-cols-[1fr,1fr]">
            {/* Left — CTA side */}
            <div className="flex flex-col items-center justify-center px-8 py-12 md:px-12 md:py-16">
              <GiftBoxIcon />

              <h2 className="mt-5 text-center text-[26px] font-normal leading-tight text-[#2A2E16] md:text-[32px]">
                Unlock a{" "}
                <span className="font-semibold text-[#E8603C]">FREE</span>{" "}
                gift at every tier
              </h2>

              <p className="mt-3 flex items-center gap-1.5 text-center text-[14px] text-[#8B9077]">
                Spend $599 and unlock both gifts
                <InfoCircleIcon />
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-full bg-[#2A2E16] px-8 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-[#1A1E0E]"
              >
                Shop Evercool&reg; Bedding
              </a>

              <p className="mt-3 text-[12px] text-[#A8AB97]">
                Limited time. While supplies last.
              </p>
            </div>

            {/* Right — Gift tracker side */}
            <div className="flex flex-col items-center justify-center bg-[#EDE6D8]/50 px-6 py-10 md:px-10">
              {/* Progress hint */}
              <p className="text-center text-[13px] font-medium text-[#2A2E16]">
                Add $196 more to unlock FREE Flat Sheet
              </p>

              {/* Progress bar */}
              <div className="relative mt-4 flex w-full max-w-[400px] items-center">
                <div className="h-[3px] w-full rounded-full bg-[#C4BDA8]" />
                {/* Filled portion — ~60% */}
                <div className="absolute left-0 top-0 h-[3px] w-[60%] rounded-full bg-[#2A2E16]" />
                {/* First milestone dot (filled) */}
                <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-3 w-3 rounded-full bg-[#2A2E16]" />
                </div>
                {/* Second milestone dot (unfilled) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-[#2A2E16] bg-white" />
                </div>
              </div>

              {/* Tier cards */}
              <div className="mt-5 grid w-full max-w-[400px] grid-cols-2 gap-3">
                {/* Tier 1 — Unlocked */}
                <div className="overflow-hidden rounded-xl border-2 border-[#2A2E16]/20 bg-white">
                  {/* Header */}
                  <div className="flex items-center justify-between bg-[#2A2E16] px-3 py-2">
                    <span className="text-[12px] font-medium text-white">
                      Orders $249+
                    </span>
                    <CheckCircleIcon />
                  </div>
                  {/* Body */}
                  <div className="flex items-center gap-3 p-3">
                    <Image
                      src="/images/rest/pillowcases-gift.webp"
                      alt="Free Pillowcases"
                      width={80}
                      height={80}
                      className="h-[70px] w-[70px] object-contain"
                    />
                    <div>
                      <p className="text-[11px] font-semibold text-[#E8603C]">
                        FREE
                      </p>
                      <p className="text-[14px] font-medium text-[#2A2E16]">
                        Pillowcases
                      </p>
                      <p className="text-[12px] text-[#A8AB97]">$79 Value</p>
                    </div>
                  </div>
                </div>

                {/* Tier 2 — Locked */}
                <div className="overflow-hidden rounded-xl border border-[#D4D1C4] bg-white">
                  {/* Header */}
                  <div className="flex items-center justify-between bg-[#F5EDE2] px-3 py-2">
                    <span className="text-[12px] font-medium text-[#8B9077]">
                      Orders $599+
                    </span>
                    <LockIcon />
                  </div>
                  {/* Body */}
                  <div className="flex items-center gap-3 p-3">
                    <Image
                      src="/images/rest/flat-sheet-gift.webp"
                      alt="Free Flat Sheet"
                      width={80}
                      height={80}
                      className="h-[70px] w-[70px] object-contain"
                    />
                    <div>
                      <p className="text-[11px] font-semibold text-[#E8603C]">
                        FREE
                      </p>
                      <p className="text-[14px] font-medium text-[#2A2E16]">
                        Flat Sheet
                      </p>
                      <p className="text-[12px] text-[#A8AB97]">$149 Value</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
