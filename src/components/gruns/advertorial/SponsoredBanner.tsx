export function SponsoredBanner() {
  return (
    <div className="bg-amber-50 border-y border-amber-200/60 py-2 px-4">
      <div className="max-w-[720px] mx-auto flex items-center gap-2 text-[11px] text-amber-700">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          <strong>Paid Partner Content</strong> — This article was created in partnership with an advertiser. Our editorial team was not involved in its creation. <a href="#" className="underline hover:no-underline">Learn more</a>
        </span>
      </div>
    </div>
  );
}
