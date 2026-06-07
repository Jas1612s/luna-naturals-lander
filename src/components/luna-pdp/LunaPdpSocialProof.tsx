const CARDS = [
  { img: '/images/luna/hf-hiker-1.webp', handle: '@jennyoutdoors' },
  { img: '/images/luna/hf-hiker-2.webp', handle: '@megan_explores' },
  { img: '/images/luna/hf-family-1.webp', handle: '@outdoorfamily' },
  { img: '/images/luna/hf-family-2.webp', handle: '@campfire_crew' },
  { img: '/images/luna/reviewer-elle.webp', handle: '@elleadventures' },
];

export function LunaPdpSocialProof() {
  return (
    <section className="hs-social-proof">
      <div className="hs-sp-head">
        <div className="hs-sp-label">REAL MOMS, REAL VIDEOS</div>
        <div className="hs-sp-sub">Not actors. Real families, real outdoor moments, real results.</div>
      </div>

      <div className="hs-sp-grid">
        {CARDS.map((card) => (
          <div key={card.handle} className="hs-sp-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.img} alt={card.handle} loading="lazy" />
            <div className="hs-sp-handle">{card.handle}</div>
            <div className="hs-play-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
