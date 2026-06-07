'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/* ── Local gallery images ── */
const GALLERY = [
  '/images/histrips/product/black-nasal-1.webp',
  '/images/histrips/product/black-nasal-2.webp',
  '/images/histrips/product/black-nasal-3.webp',
  '/images/histrips/product/black-nasal-4.webp',
  '/images/histrips/product/black-nasal-5.webp',
];

const QUANTITIES = [
  { label: '1x', strips: '30 strips', save: null, discount: 0 },
  { label: '2x', strips: '60 strips', save: 'SAVE 15%', discount: 15 },
  { label: '3x', strips: '90 strips', save: 'SAVE 25%', discount: 25 },
];

const BASE_PRICE_CENTS = 2695; // €26.95

const PERF_CARDS = [
  { icon: 'bolt', title: 'Performance-focused', body: 'Strong hold, immediate airflow expansion, no fiddling, no reapplying.' },
  { icon: 'motion', title: 'Engineered for Motion', body: "Built for performance — the grip doesn't budge, even during sweat-heavy workouts or deep sleep." },
  { icon: 'flex', title: 'Stable, Yet Flexible', body: 'No collapsing. No warping. The reinforced band ensures consistent lift with a soft-touch feel.' },
  { icon: 'medical', title: 'Medical Grade', body: 'Hypoallergenic, FDA-registered materials. Strong enough for performance, gentle enough for nightly wear.' },
];

const USE_CASES = [
  {
    label: 'Snore Less, Sleep Better',
    body: 'Apply before bed to open nasal passages, reduce snoring, and unlock deeper, more restorative sleep, naturally.',
    image: '/images/histrips/usecase/sleep.webp',
  },
  {
    label: 'Power Your Workouts',
    body: 'Use pre-workout to improve airflow and stamina. HiStrips support better oxygen delivery so you can push harder, longer.',
    image: '/images/histrips/usecase/workout.webp',
  },
  {
    label: 'Calm Your System',
    body: 'Wear during breathwork or meditation to reduce heart rate, ease anxiety, and support parasympathetic recovery.',
    image: '/images/histrips/usecase/breathwork.webp',
  },
  {
    label: 'Recover When Sick',
    body: 'When congestion hits, HiStrips act as a non-medicated decongestant, easing airflow and helping you breathe freely.',
    image: '/images/histrips/usecase/recovery.webp',
  },
];

const COMPARE_FEATURES = [
  'Works up to 24H',
  'Gentle, drug-free solution',
  'One-time stick, easy peel',
  'Anti-Sweat Grip',
];

// tick-yes = checkmark (pink/purple gradient), tick-no = grey X
const COMPARE_MATRIX = [
  // HiStrips, Other Devices, Nasal Spray, Pharmacy Strips
  [true, false, false, false],
  [true, false, true, true],
  [true, false, false, true],
  [true, false, false, false],
];

const COMPARE_PRODUCTS = [
  { name: 'HiStrips', img: '/images/histrips/compare/col-histrips.webp', highlight: true },
  { name: 'Other Devices', img: '/images/histrips/compare/col-others.webp', highlight: false },
  { name: 'Nasal Spray', img: '/images/histrips/compare/col-spray.webp', highlight: false },
  { name: 'Pharmacy Strips', img: '/images/histrips/compare/col-strips.webp', highlight: false },
];

const FAQS = [
  { q: 'Will they stay on during intense workouts?', a: 'Yes! HiStrips uses a strong yet gentle adhesive that keeps them in place, even during intense workouts or active movement.' },
  { q: 'What makes HiStrips different from other nasal strips?', a: '1. Premium adhesive that stays on even during sweat and sleep (72h). 2. Bold design — finally something that looks good. 3. Sleek resealable pouch with 30 strips per pack. 4. Trusted by 150,000+ athletes worldwide. 5. Developed for performance, recovery, and aesthetics.' },
  { q: 'How many strips are in a pack?', a: 'Each pack contains 30 strips, giving you a full month of nightly or daily use.' },
  { q: 'Is it safe for sensitive skin?', a: 'Yes — HiStrips are made with hypoallergenic, FDA-registered materials gentle enough for daily wear.' },
  { q: 'Do they help with snoring?', a: 'Many users report a significant reduction in snoring due to improved nasal airflow keeping the nose clear throughout the night.' },
];

const PRESS_LOGOS = [
  { src: '/images/histrips/press/elle.webp', alt: 'Elle' },
  { src: '/images/histrips/press/goop.webp', alt: 'Goop' },
  { src: '/images/histrips/press/forbes.webp', alt: 'Forbes' },
  { src: '/images/histrips/press/people.webp', alt: 'People' },
  { src: '/images/histrips/press/vogue.webp', alt: 'Vogue' },
  { src: '/images/histrips/press/womens-health.webp', alt: "Women's Health" },
  { src: '/images/histrips/press/oprah.webp', alt: 'Oprah Magazine' },
  { src: '/images/histrips/press/cosmopolitan.webp', alt: 'Cosmopolitan' },
];

const IG_POSTS = [
  '/images/histrips/instagram/post-1.webp',
  '/images/histrips/instagram/post-2.webp',
  '/images/histrips/instagram/post-3.webp',
  '/images/histrips/instagram/post-4.webp',
  '/images/histrips/instagram/post-5.webp',
  '/images/histrips/instagram/post-6.webp',
  '/images/histrips/instagram/post-7.webp',
  '/images/histrips/instagram/post-8.webp',
  '/images/histrips/instagram/post-9.webp',
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function CheckSVG({ color = '#22c55e' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function formatMoney(cents: number) {
  return `€${(cents / 100).toFixed(2).replace('.', ',')}`;
}

function PerformanceIcon({ type }: { type: string }) {
  const s = { width: 24, height: 24, fill: 'none', stroke: '#fff', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (type === 'bolt') return <svg viewBox="0 0 24 24" {...s}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
  if (type === 'motion') return <svg viewBox="0 0 24 24" {...s}><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>;
  if (type === 'flex') return <svg viewBox="0 0 24 24" {...s}><path d="M2 12c0-3.866 3.582-7 8-7 2.209 0 4.209.894 5.657 2.343" /><path d="M22 12c0 3.866-3.582 7-8 7-2.209 0-4.209-.894-5.657-2.343" /></svg>;
  return <svg viewBox="0 0 24 24" {...s}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12h6M12 9v6" /></svg>;
}

function TickYes() {
  return (
    <svg viewBox="0 0 31 31" width="28" height="28" fill="none">
      <circle cx="15.355" cy="15.355" r="15.355" fill="url(#hs-tick-grad)" />
      <polyline points="9,15.5 13.5,20 22,11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="hs-tick-grad" x1="0" y1="0" x2="31" y2="0">
          <stop stopColor="#FF3492" />
          <stop offset="1" stopColor="#DD33ED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TickNo() {
  return (
    <svg viewBox="0 0 31 31" width="28" height="28" fill="none">
      <circle cx="15.355" cy="15.355" r="15.355" fill="#494949" />
      <line x1="10" y1="10" x2="21" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="21" y1="10" x2="10" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function HiStripsNasalPage() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeQty, setActiveQty] = useState(0);
  const [activeOption, setActiveOption] = useState<'subscribe' | 'one-time'>('subscribe');
  const [openAcc, setOpenAcc] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  const qty = QUANTITIES[activeQty];
  const qtyCnt = activeQty + 1;
  let price = BASE_PRICE_CENTS * qtyCnt;
  if (qty.discount > 0) price = Math.round(price * (100 - qty.discount) / 100);
  if (activeOption === 'subscribe') price = Math.round(price * 0.80);
  const comparePrice = BASE_PRICE_CENTS * qtyCnt;
  const savePct = Math.round((1 - price / comparePrice) * 100);

  /* Auto-advance gallery on mobile */
  useEffect(() => {
    const t = setInterval(() => setActiveImg(i => (i + 1) % GALLERY.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── Product Hero ── */}
      <div className="hs-pdp-hero">

        {/* Gallery */}
        <div className="hs-gallery">
          <div className="hs-gallery-main">
            <div className="hs-gallery-badge">40% More Oxygen</div>
            <Image src={GALLERY[activeImg]} alt="Nasal HiStrips" key={activeImg} fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
          </div>
          <div className="hs-gallery-thumbs">
            {GALLERY.map((src, i) => (
              <button key={i} className={`hs-thumb${i === activeImg ? ' active' : ''}`} onClick={() => setActiveImg(i)} aria-label={`Image ${i + 1}`}>
                <Image src={src} alt="" loading="lazy" width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="hs-form-side">
          {/* Stars */}
          <div className="hs-stars-row">
            <div className="hs-stars">{[1,2,3,4,5].map(i => <StarIcon key={i} />)}</div>
            <span className="hs-review-count"><strong>1,247</strong> reviews &nbsp;·&nbsp; 4.9</span>
            <a href="#reviews" className="hs-review-link">Read all →</a>
          </div>

          <h1 className="hs-product-title">Black Nasal Strips</h1>

          <div className="hs-benefit-badges">
            {['40% More Oxygen', 'Deeper Sleep', 'Sharper Focus', 'Reduced Snoring'].map(b => (
              <span key={b} className="hs-badge">{b}</span>
            ))}
          </div>

          {/* Price */}
          <div className="hs-price-row">
            <span className="hs-price-sale">{formatMoney(price)}</span>
            <span className="hs-price-compare">{formatMoney(comparePrice)}</span>
            <span className="hs-save-pill">SAVE {savePct}%</span>
          </div>
          <p className="hs-per-strip">{formatMoney(Math.round(price / (qtyCnt * 30)))} per strip</p>

          <hr className="hs-divider" />

          {/* Quantity */}
          <p className="hs-qty-label">Select Quantity</p>
          <div className="hs-qty-grid">
            {QUANTITIES.map((q, i) => (
              <button
                key={i}
                className={`hs-qty-btn${activeQty === i ? ' active' : ''}`}
                onClick={() => setActiveQty(i)}
              >
                {q.save && <span className="hs-qty-btn-save">{q.save}</span>}
                <span className="hs-qty-btn-label">{q.label}</span>
                <span className="hs-qty-btn-strips">{q.strips}</span>
              </button>
            ))}
          </div>

          {/* Subscribe / One-time */}
          <div className="hs-option-toggle">
            <button
              className={`hs-option-btn${activeOption === 'subscribe' ? ' active' : ''}`}
              onClick={() => setActiveOption('subscribe')}
            >
              <span className="hs-option-btn-label">Subscribe &amp; Save</span>
              <span className="hs-option-btn-price">{formatMoney(Math.round(comparePrice * 0.80))}</span>
              <span className="hs-option-btn-tag">MOST POPULAR</span>
            </button>
            <button
              className={`hs-option-btn${activeOption === 'one-time' ? ' active' : ''}`}
              onClick={() => setActiveOption('one-time')}
            >
              <span className="hs-option-btn-label">One-Time Purchase</span>
              <span className="hs-option-btn-price">{formatMoney(comparePrice)}</span>
            </button>
          </div>

          {/* Subscribe benefits */}
          {activeOption === 'subscribe' && (
            <div className="hs-sub-benefits">
              <p className="hs-sub-benefits-title">Your 3 free gifts <span style={{ opacity: 0.5, fontWeight: 400 }}>Worth $50+</span></p>
              {[
                { icon: '🧴', label: 'Face Wipes + 2 E-books', month: 'Month 1 (Now)' },
                { icon: '📦', label: 'Mouth Tape + Coupon', month: 'Month 2' },
                { icon: '💧', label: 'Water Bottle + Earplugs', month: 'Month 3' },
              ].map(g => (
                <div key={g.label} className="hs-sub-benefit-item">
                  <span className="hs-sub-benefit-icon">{g.icon}</span>
                  <div>
                    <div>{g.label}</div>
                    <div className="hs-sub-benefit-month">{g.month}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ATC */}
          <button className="hs-atc-btn">Add to Cart +</button>

          {/* Trust */}
          <div className="hs-trust-row">
            {[
              { icon: <CheckSVG />, text: '30 Days Risk-Free' },
              { icon: <CheckSVG />, text: 'Free Shipping €50+' },
              { icon: <CheckSVG />, text: '3rd Party Lab Tested' },
            ].map(t => (
              <span key={t.text} className="hs-trust-item">{t.icon}{t.text}</span>
            ))}
          </div>

          {/* Accordions */}
          <div className="hs-accordion">
            {[
              { label: 'Shipping & Returns', content: 'We ship fast, worldwide. Free shipping over €45 / US$50. Processing: 1 business day. Delivery: 3–7 business days. Ships from local US or EU warehouses.' },
              { label: 'Description', content: 'HiStrips Nose Strips gently open your nasal passages, getting up to 40% more oxygen day and night. Improves airflow, boosts focus, stamina, and sleep quality. Reduces snoring, mouth breathing, and enhances performance recovery.' },
              { label: 'What makes HiStrips different?', content: '1. Premium adhesive that stays on even during sweat and sleep (72h). 2. Bold design — finally something that looks good. 3. Sleek resealable pouch with 30 strips per pack. 4. Trusted by 150,000+ athletes worldwide. 5. Developed for performance, recovery, and aesthetics.' },
            ].map((item, i) => (
              <div key={i} className={`hs-acc-item${openAcc === i ? ' open' : ''}`}>
                <button className="hs-acc-toggle" onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                  <span>{item.label}</span>
                  <span className="hs-acc-toggle-icon">+</span>
                </button>
                <div className="hs-acc-body">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Next-Gen Tech ── */}
      <div className="hs-nextgen-wrap">
        <div className="hs-nextgen-inner">
          <div className="hs-nextgen-left">
            <p className="hs-section-label">NEXT-GEN NASAL TECH</p>
            <h2 className="hs-nextgen-heading">
              Next-Gen<br />
              <span>Nasal Tech</span>
            </h2>
            <p className="hs-nextgen-body">
              HiStrips uses multi-layer tension-release technology to gently lift and open your nasal passages, giving you up to 40% more oxygen with every breath.
            </p>
            <div className="hs-nextgen-usps">
              {['Dynamic Lift Design', 'Sweat-Proof Adhesive Matrix', '40% More Oxygen Per Breath'].map(usp => (
                <div key={usp} className="hs-nextgen-usp">
                  <div className="hs-nextgen-usp-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="hs-nextgen-usp-text">{usp}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hs-nextgen-right">
            <div className="hs-nextgen-media">
              <Image src="/images/histrips/product/black-nasal-3.webp" alt="HiStrips on athlete" fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Press logos ── */}
      <div className="hs-press-wrap">
        <div className="hs-press-label">AS SEEN IN</div>
        <div className="hs-press-scroller">
          <div className="hs-press-track">
            {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, i) => (
              <span key={i} className="hs-press-item">
                <Image src={logo.src} alt={logo.alt} width={100} height={28} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.45 }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Performance cards ── */}
      <div className="hs-perf-wrap">
        <div className="hs-perf-inner">
          <h2 className="hs-perf-title">Clinically Designed. Backed by Experts in Sleep &amp; Respiratory Health.</h2>
          <div className="hs-perf-grid">
            {PERF_CARDS.map(card => (
              <div key={card.title} className="hs-perf-card">
                <div className="hs-perf-card-icon"><PerformanceIcon type={card.icon} /></div>
                <h3 className="hs-perf-card-title">{card.title}</h3>
                <p className="hs-perf-card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div className="hs-usecases-wrap">
        <div className="hs-usecases-inner">
          <p className="hs-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>VERSATILE USE</p>
          <h2 className="hs-usecases-heading">HiStrips sessions for better nasal flow</h2>
          <div className="hs-usecases-layout">
            {/* Tabs */}
            <div className="hs-usecases-tabs">
              {USE_CASES.map((uc, i) => (
                <button
                  key={i}
                  className={`hs-usecase-tab${activeUseCase === i ? ' active' : ''}`}
                  onClick={() => setActiveUseCase(i)}
                >
                  <span className="hs-usecase-tab-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="hs-usecase-tab-content">
                    <span className="hs-usecase-tab-label">{uc.label}</span>
                    {activeUseCase === i && (
                      <p className="hs-usecase-tab-body">{uc.body}</p>
                    )}
                  </div>
                  <span className="hs-usecase-tab-arrow">{activeUseCase === i ? '↓' : '→'}</span>
                </button>
              ))}
            </div>
            {/* Image */}
            <div className="hs-usecases-image">
              <Image
                src={USE_CASES[activeUseCase].image}
                alt={USE_CASES[activeUseCase].label}
                fill
                sizes="(max-width: 899px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                key={activeUseCase}
              />
              <div className="hs-usecases-image-label">{USE_CASES[activeUseCase].label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Comparison table ── */}
      <div className="hs-compare-wrap">
        <div className="hs-compare-inner">
          <p className="hs-compare-eyebrow">THE DIFFERENCE</p>
          <h2 className="hs-compare-heading">HiStrips vs Others</h2>
          <div className="hs-compare-table">
            {/* Header row with product images */}
            <div className="hs-compare-header">
              <div className="hs-compare-feature-col" />
              {COMPARE_PRODUCTS.map(p => (
                <div key={p.name} className={`hs-compare-prod-header${p.highlight ? ' highlight' : ''}`}>
                  <div className="hs-compare-prod-img">
                    <Image src={p.img} alt={p.name} width={80} height={80} style={{ objectFit: 'contain' }} />
                  </div>
                  <span className="hs-compare-prod-name">{p.name}</span>
                </div>
              ))}
            </div>
            {/* Feature rows */}
            {COMPARE_FEATURES.map((feat, fi) => (
              <div key={fi} className="hs-compare-row">
                <div className="hs-compare-feature-col">{feat}</div>
                {COMPARE_MATRIX[fi].map((has, pi) => (
                  <div key={pi} className={`hs-compare-cell${COMPARE_PRODUCTS[pi].highlight ? ' highlight' : ''}`}>
                    {has ? <TickYes /> : <TickNo />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="hs-stats-wrap">
        <div className="hs-stats-inner">
          <h2 className="hs-stats-heading">Real results. Real athletes.</h2>
          <div className="hs-stats-grid">
            <div className="hs-stat">
              <div className="hs-stat-num">93%</div>
              <p className="hs-stat-label">Of users report waking up less groggy and feeling more rested.</p>
            </div>
            <div className="hs-stat">
              <div className="hs-stat-num">97%</div>
              <p className="hs-stat-label">Of athletes feel immediate improvement in nasal airflow, with more energy and focus during training.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="hs-faq-wrap">
        <div className="hs-faq-inner">
          <h2 className="hs-faq-heading">Frequently Asked Questions</h2>
          {FAQS.map((faq, i) => (
            <div key={i} className={`hs-faq-item${openFaq === i ? ' open' : ''}`}>
              <button className="hs-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="hs-faq-icon">+</span>
              </button>
              <div className="hs-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Instagram ── */}
      <div className="hs-instagram-wrap">
        <div className="hs-instagram-inner">
          <p className="hs-section-label" style={{ textAlign: 'center', marginBottom: 8 }}>COMMUNITY</p>
          <h2 className="hs-instagram-heading">Follow us on Instagram <span>@histrips</span></h2>
          <div className="hs-instagram-grid">
            {IG_POSTS.map((src, i) => (
              <a key={i} href="https://www.instagram.com/histrips" target="_blank" rel="noopener noreferrer" className="hs-instagram-post">
                <Image src={src} alt={`HiStrips Instagram post ${i + 1}`} fill sizes="(max-width: 599px) 33vw, 11vw" style={{ objectFit: 'cover' }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky mobile ATC */}
      <div className="hs-sticky-atc">
        <button className="hs-atc-btn" style={{ marginBottom: 0 }}>Add to Cart +</button>
      </div>
    </>
  );
}
