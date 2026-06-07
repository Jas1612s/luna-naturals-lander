'use client';

import { useState } from 'react';

/* ── Data ── */
const GALLERY = [
  { src: '/images/luna/hero-main.webp', alt: 'Luna Naturals Repellent Patches — main shot' },
  { src: '/images/luna/hero-lifestyle.webp', alt: 'Kid wearing Luna patch outdoors' },
  { src: '/images/luna/hero-secondary.webp', alt: 'Luna patch pack — secondary view' },
  { src: '/images/luna/hf-patch-closeup.webp', alt: 'Close-up of Luna patch on shirt' },
  { src: '/images/luna/prod-value-1.webp', alt: 'Luna Naturals value pack' },
  { src: '/images/luna/hf-hiker-1.webp', alt: 'Hiker using Luna patches' },
  { src: '/images/luna/hf-family-1.webp', alt: 'Family using Luna patches' },
  { src: '/images/luna/hf-kids-1.webp', alt: 'Kids using Luna patches' },
];

const UGC = [
  { img: '/images/luna/hf-hiker-1.webp', handle: '@jennyoutdoors' },
  { img: '/images/luna/hf-family-1.webp', handle: '@outdoorfamily' },
  { img: '/images/luna/hf-kids-1.webp', handle: '@momlife' },
];

const VARIANTS = [
  { img: '/images/luna/prod-patches-kids.webp', name: 'Kids Patches', best: true },
  { img: '/images/luna/col-patches.webp', name: 'Adult Patches', best: false },
  { img: '/images/luna/featured-product.webp', name: 'Mixed Pack', best: false },
];

const QUANTITIES = [
  { label: '1', count: '30 patches', save: null as string | null, pct: 0 },
  { label: '2', count: '60 patches', save: 'BUY 2 SAVE 15%', pct: 15 },
  { label: '3', count: '90 patches', save: 'BUY 3 SAVE 25%', pct: 25 },
];

const BASE = 24.99;

const FREE_GIFTS = [
  { month: 'Month 1 (Now)', icon: '🌿', name: 'Bug Bite Relief Patches', sub: '20 patches · fast soothe' },
  { month: 'Month 2', icon: '📦', name: 'Citronella Wipes + E-book', sub: 'Extra protection on the go' },
  { month: 'Month 3', icon: '🎁', name: 'Family Pack Upgrade', sub: '30 extra patches · free' },
];

const ACCORDIONS = [
  {
    title: 'Shipping & Returns',
    body: 'Free US shipping on orders over $30. Standard delivery in 2–4 business days. Free returns within 30 days of delivery — no questions asked.',
  },
  {
    title: 'How to Use',
    body: 'Peel and stick to clothing, a backpack, or stroller — anywhere within 3 feet. No skin contact needed. Each patch lasts up to 12 hours. Replace daily for continuous protection.',
  },
  {
    title: 'Ingredients',
    body: 'Citronella Oil, Eucalyptus Oil, Lavender Oil, Lemongrass Extract, Peppermint Oil, Medical-grade Adhesive, Organic Cotton Backing, Aloe Vera.',
  },
];

/* ── Helpers ── */
function Stars({ n, size = 14 }: { n: number; size?: number }) {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < n ? '#F59E0B' : '#e0e0e0'} stroke="none">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </>
  );
}

function CheckSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a2e16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  deet: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="9" y1="12" x2="15" y2="12"/>
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  leaf: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  lab: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3l-6 14a1 1 0 0 0 .93 1.37h12.14A1 1 0 0 0 17 17L11 3"/><line x1="9" y1="3" x2="15" y2="3"/>
    </svg>
  ),
  snore: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 7.5a4.5 4.5 0 0 1 0 9H7a5.5 5.5 0 0 1 0-11 5 5 0 0 1 9.9-.5"/>
    </svg>
  ),
};

export function LunaPdpProductHero() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeQty, setActiveQty] = useState(0);
  const [option, setOption] = useState<'subscribe' | 'one-time'>('subscribe');
  const [openAcc, setOpenAcc] = useState<number | null>(null);

  const qty = QUANTITIES[activeQty];
  const baseTotal = BASE * (activeQty + 1);
  const afterQtyDiscount = qty.pct > 0 ? baseTotal * (1 - qty.pct / 100) : baseTotal;
  const subscribePrice = afterQtyDiscount * 0.85;
  const displayPrice = option === 'subscribe' ? subscribePrice : afterQtyDiscount;

  return (
    <>
      <section className="hs-product-section luna-hero-bg">
        <div className="hs-product-inner">

          {/* ── Gallery (left) ── */}
          <div>
            <div className="hs-gallery-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GALLERY[activeImg].src} alt={GALLERY[activeImg].alt} />
            </div>

            {/* Thumbnails */}
            <div className="hs-gallery-thumbs">
              {GALLERY.map((img, i) => (
                <button
                  key={i}
                  className={`hs-thumb${i === activeImg ? ' active' : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={img.alt}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} />
                </button>
              ))}
            </div>

            {/* UGC photos */}
            <div className="luna-ugc-row">
              {UGC.map(u => (
                <div key={u.handle} className="luna-ugc-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={u.img} alt={u.handle} />
                  <span className="luna-ugc-handle">{u.handle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Form (right) ── */}
          <div>
            {/* Stars */}
            <div className="luna-stars-row">
              <div className="luna-stars"><Stars n={5} size={16} /></div>
              <span className="luna-review-text"><strong>1,247</strong> reviews &nbsp;·&nbsp; 4.9</span>
              <span className="luna-read-all">Read all →</span>
            </div>

            {/* Title */}
            <h1 className="luna-pdp-title">Mosquito Repellent Patches</h1>

            {/* Benefit pills with icons */}
            <div className="luna-benefit-pills">
              {(
                [
                  { key: 'deet',  label: '40% More Protection' },
                  { key: 'clock', label: '12hr Coverage' },
                  { key: 'leaf',  label: 'Plant-based' },
                  { key: 'lab',   label: 'Lab-tested' },
                ] as { key: string; label: string }[]
              ).map(b => (
                <div key={b.key} className="luna-benefit-pill">
                  {BENEFIT_ICONS[b.key]}
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            <hr className="hs-divider" />

            {/* Price */}
            <div className="hs-price-row">
              <span className="hs-price-sale">${displayPrice.toFixed(2)}</span>
              <span className="hs-price-compare">${baseTotal.toFixed(2)}</span>
              {qty.pct > 0 && <span className="hs-save-badge">Save {qty.pct}%</span>}
            </div>

            {/* Variant chooser */}
            <div className="luna-choose-label">
              Choose Your Patch: <strong>{VARIANTS[activeVariant].name}</strong>
            </div>
            <div className="luna-swatch-row">
              {VARIANTS.map((v, i) => (
                <button
                  key={i}
                  className={`luna-swatch-btn${activeVariant === i ? ' active' : ''}`}
                  onClick={() => setActiveVariant(i)}
                  aria-label={v.name}
                  title={v.name}
                >
                  {v.best && <span className="luna-swatch-best">BEST</span>}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.img} alt={v.name} />
                </button>
              ))}
            </div>

            {/* Quantity selector */}
            <div className="hs-qty-label" style={{ marginTop: '20px' }}>Select Quantity</div>
            <div className="hs-qty-grid">
              {QUANTITIES.map((q, i) => (
                <button
                  key={i}
                  className={`hs-qty-btn${activeQty === i ? ' active' : ''}`}
                  onClick={() => setActiveQty(i)}
                >
                  {q.save && <span className="hs-qty-popular">{q.save}</span>}
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>{q.label}</span>
                  <span style={{ fontSize: '11px', fontWeight: 400, color: '#888', display: 'block', marginTop: '2px' }}>{q.count}</span>
                </button>
              ))}
            </div>

            {/* Purchase option label */}
            <div className="luna-poption-label">Select Purchase Option</div>

            {/* Subscribe & Save box */}
            <div
              className={`luna-poption-box${option === 'subscribe' ? ' selected' : ''}`}
              onClick={() => setOption('subscribe')}
            >
              <div className="luna-poption-row">
                <div className={`luna-radio${option === 'subscribe' ? ' on' : ''}`} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="luna-poption-title">
                    Subscribe &amp; Save
                    <span className="luna-most-popular">Most popular</span>
                  </div>
                  <div className="luna-poption-sub">+ 3 free gifts, one every month.</div>
                </div>
                <div className="luna-poption-prices">
                  <span className="luna-poption-sale">${subscribePrice.toFixed(2)}</span>
                  <span className="luna-poption-compare">${baseTotal.toFixed(2)}</span>
                </div>
              </div>

              {option === 'subscribe' && (
                <div className="luna-gifts-box">
                  <div className="luna-gifts-hd">
                    <span>YOUR 3 FREE GIFTS</span>
                    <span className="luna-gifts-worth">WORTH $50+</span>
                  </div>
                  {FREE_GIFTS.map(g => (
                    <div key={g.month} className="luna-gift-row">
                      <div className="luna-gift-icon">{g.icon}</div>
                      <div>
                        <div className="luna-gift-name">{g.name}</div>
                        <div className="luna-gift-sub">{g.month} &nbsp;·&nbsp; {g.sub}</div>
                      </div>
                    </div>
                  ))}
                  <div className="luna-gifts-perks">
                    <span><CheckSVG /> Easy cancellations</span>
                    <span><CheckSVG /> 15% off every refill</span>
                  </div>
                </div>
              )}
            </div>

            {/* One-Time Purchase box */}
            <div
              className={`luna-poption-box${option === 'one-time' ? ' selected' : ''}`}
              onClick={() => setOption('one-time')}
              style={{ marginTop: '8px' }}
            >
              <div className="luna-poption-row">
                <div className={`luna-radio${option === 'one-time' ? ' on' : ''}`} />
                <div style={{ flex: 1 }}>
                  <div className="luna-poption-title">One-Time Purchase</div>
                </div>
                <div className="luna-poption-prices">
                  <span className="luna-poption-sale">${afterQtyDiscount.toFixed(2)}</span>
                  <span className="luna-poption-compare">${baseTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="luna-cta-btn">Add to Cart +</button>

            {/* Trust text */}
            <div className="luna-trust-list">
              <div className="luna-trust-item"><CheckSVG /> 30 Days Risk-Free Money Back Guarantee</div>
              <div className="luna-trust-item"><CheckSVG /> All formulas are 3rd-party lab tested &amp; DEET-free</div>
            </div>

            {/* Accordions */}
            <div className="hs-accordion">
              {ACCORDIONS.map((acc, i) => (
                <div key={i} className={`hs-acc-item${openAcc === i ? ' open' : ''}`}>
                  <button className="hs-acc-toggle" onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                    {acc.title}
                    <span>+</span>
                  </button>
                  <div className="hs-acc-body">{acc.body}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Sticky mobile ATC */}
      <div className="luna-sticky-atc">
        <button className="luna-cta-btn" style={{ marginTop: 0 }}>Add to Cart +</button>
      </div>
    </>
  );
}
