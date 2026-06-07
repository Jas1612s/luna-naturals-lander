function InfoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="11.4" stroke="#ffffff" strokeWidth="1.2" />
      <path
        d="M12.1546 9.54757C11.6362 9.54757 11.2186 9.12997 11.2186 8.62597C11.2186 8.10757 11.6362 7.70437 12.1546 7.70437C12.6586 7.70437 13.0762 8.10757 13.0762 8.62597C13.0762 9.12997 12.6586 9.54757 12.1546 9.54757ZM12.7738 10.8004V18.0004H11.5066V10.8004H12.7738Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function RestAnnouncementBar() {
  return (
    <div className="flex h-9 w-full items-center bg-[#2A2E16] text-white md:h-11">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-4 px-4 md:justify-between">
        {/* Left — main sale message */}
        <div className="flex items-center gap-2">
          <span
            className="truncate text-[11px] font-normal tracking-[0.02em] md:text-[13px]"
            style={{ fontFamily: 'var(--font-rest), "Urbanist", sans-serif' }}
          >
            Best Sheets Ever Sale: Up to 40% Off + FREE Gifts
          </span>
          <InfoIcon />
        </div>

        {/* Right — HSA/FSA badge */}
        <div
          className="hidden items-center gap-2 md:flex"
          style={{ fontFamily: 'var(--font-rest), "Urbanist", sans-serif' }}
        >
          <ShieldCheckIcon />
          <span className="text-[13px] font-medium tracking-[0.02em]">
            HSA/FSA Eligible
          </span>
          <a
            href="#"
            className="text-[13px] font-normal tracking-[0.02em] text-white underline transition-opacity hover:opacity-80"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
