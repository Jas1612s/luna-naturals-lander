'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ───── Data ───── */

const GALLERY = [
  '/images/luna/hf-kids-1.webp',
  '/images/luna/kids-patch-1.webp',
  '/images/luna/hf-family-1.webp',
  '/images/luna/kids-patch-2.webp',
  '/images/luna/kids-patch-3.webp',
];

const BUNDLES = [
  { label: '1-Pack', desc: '30 patches', full: 1999, sale: 1999, tag: null },
  { label: '3-Pack', desc: '90 patches', full: 5997, sale: 4497, tag: 'MOST POPULAR' },
  { label: 'Family', desc: '150 patches', full: 9995, sale: 6699, tag: 'BEST VALUE' },
];

const PROBLEMS = [
  { icon: '😤', text: 'The spray fight — wrestling your kid every single time you leave the house.' },
  { icon: '😰', text: 'DEET soaking into tiny arms. That nagging guilt as you rub it in.' },
  { icon: '😢', text: 'The bite that ruins the whole trip — swollen, scratching, crying at 2am.' },
  { icon: '🤦', text: 'The missed spots. Behind the ears. Back of the neck. Every. Single. Time.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Peel', body: 'Remove the backing in one motion. Each patch is coin-sized — about 1.5 inches across — no mess, no smell on your hands.' },
  { step: '02', title: 'Stick', body: "Press onto your child's clothing, hat brim, or stroller canopy. Anywhere within 3 feet. Never directly on skin." },
  { step: '03', title: 'Protected', body: 'Plant-based oils diffuse steadily for 12 hours. No reapplying, no re-spray, no fights.' },
];

const PROOF_STATS = [
  { num: '12h', label: 'protection per patch' },
  { num: '97%', label: 'of parents: zero bites' },
  { num: '6m+', label: 'safe from 6 months' },
  { num: '200k+', label: 'families protected' },
];

const SAFETY_CLAIMS = [
  'DEET-free, paraben-free, synthetic fragrance-free',
  'Pediatrician-reviewed formula',
  'Tested by independent lab for skin safety',
  'Safe from 6 months old',
  'No skin contact ever required',
  'Organic cotton backing, hypoallergenic adhesive',
];

const COMPARE_FEATURES = [
  'Lasts 12+ hours',
  'DEET-free & chemical-free',
  'Safe for babies 6m+',
  'No skin contact needed',
  'Mess-free application',
  'Travel & TSA friendly',
];

const COMPARE_MATRIX = [
  [true, false, false, false],
  [true, false, true, true],
  [true, false, true, true],
  [true, false, true, false],
  [true, false, true, true],
  [true, true, false, true],
];

const COMPARE_PRODUCTS = [
  { name: 'Luna Kids Patches', img: '/images/luna/kids-patch-1.webp', highlight: true },
  { name: 'DEET Spray', img: '/images/luna/col-sprays.webp', highlight: false },
  { name: 'Citronella Candles', img: '/images/luna/col-candles.webp', highlight: false },
  { name: 'Wristbands', img: '/images/luna/col-bracelets.webp', highlight: false },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.', location: 'Austin, TX', stars: 5,
    text: "Took these camping for a week with my 3-year-old. Zero bites. I literally cried. We've done four camping trips before with normal spray and every single time he got eaten alive.",
    img: '/images/luna/hf-kids-1.webp',
  },
  {
    name: 'Jessica L.', location: 'Orlando, FL', stars: 5,
    text: "Disney World. 12 hours outside. Dusk. Not one bite on either kid. The patches were still on when we got back to the hotel. Sold for life.",
    img: '/images/luna/hf-family-1.webp',
  },
  {
    name: 'Emma T.', location: 'Seattle, WA', stars: 5,
    text: "My daughter has sensitive skin — DEET always made her break out. She calls these her 'bug stickers' and asks to put them on herself now. That's a win I didn't expect.",
    img: '/images/luna/reviewer-elle.webp',
  },
  {
    name: 'Kate R.', location: 'Atlanta, GA', stars: 5,
    text: "Backyard BBQ at dusk — the worst time. Kids ran around for 3 hours. Zero bites. I ended up handing the whole box out to other parents at the party.",
    img: '/images/luna/reviewer-jenny.webp',
  },
];

const FAQS = [
  { q: 'Do they actually work?', a: "Yes. Each patch uses a slow-release microencapsulation matrix that continuously diffuses citronella, eucalyptus, and lavender oils — proven mosquito repellents. In our surveys, 97% of parents reported zero bites during use. For best coverage, use 2–3 patches per child placed on or near their clothing (shirt collar, hat brim, stroller canopy)." },
  { q: 'How old does my child need to be?', a: "Safe from 6 months old. For babies under 12 months, apply to the stroller canopy or pram hood rather than directly to clothing against skin. Always keep patches out of reach of infants." },
  { q: 'How long does one patch last?', a: 'Up to 12 hours of continuous protection under normal outdoor conditions. If the patch gets fully submerged (pool or ocean), put on a fresh one when they get out.' },
  { q: 'How many patches should I use?', a: "For children and toddlers: 2–3 patches per child, within 3 feet of them. Best spots: shirt collar, back of shoulder, hat brim, and stroller canopy. The more active they are, the closer the patches should be to the body." },
  { q: 'Do they smell strong?', a: "A gentle, pleasant citronella-herb scent — noticeable up close but not overwhelming. Most kids love it. The scent is the repellent: the oils diffuse slowly throughout the day, so if you can smell it, it's working." },
  { q: 'Will they stick through swimming?', a: 'The medical-grade adhesive holds through splashing, running, and sweating. For full submersion (pool or ocean), apply a fresh patch afterward.' },
  { q: 'Will they stain clothing?', a: 'No staining, no oily residue on any fabric. Safe on all clothing types. Apply to the outside of the garment only.' },
  { q: 'When does it ship?', a: "Orders placed before 2pm EST ship the same business day. Standard delivery 2–4 business days. Free shipping on all orders $45+." },
];

const PRESS_LOGOS = [
  { src: '/images/luna/press-logos/forbes.png', alt: 'Forbes' },
  { src: '/images/luna/press-logos/healthline.png', alt: 'Healthline' },
  { src: '/images/luna/press-logos/nyt.png', alt: 'New York Times' },
  { src: '/images/luna/press-logos/outside.png', alt: 'Outside Magazine' },
  { src: '/images/luna/press-logos/rei.png', alt: 'REI' },
  { src: '/images/luna/press-logos/mindbodygreen.png', alt: 'MindBodyGreen' },
];

const UGC_POSTS = [
  '/images/luna/hf-kids-1.webp',
  '/images/luna/kids-patch-1.webp',
  '/images/luna/hf-family-1.webp',
  '/images/luna/kids-patch-2.webp',
  '/images/luna/hf-family-2.webp',
  '/images/luna/kids-patch-3.webp',
  '/images/luna/hf-kayak.webp',
  '/images/luna/kids-patch-4.webp',
  '/images/luna/hf-hiker-1.webp',
];

/* ───── Shared UI ───── */

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f26a3e" stroke="none">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return <span className="ln-stars">{Array.from({ length: n }, (_, i) => <Star key={i} />)}</span>;
}

function CheckGreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a8a3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function TickYes() {
  return (
    <svg viewBox="0 0 31 31" width="28" height="28" fill="none">
      <circle cx="15.355" cy="15.355" r="15.355" fill="url(#ln-tick-grad)" />
      <polyline points="9,15.5 13.5,20 22,11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="ln-tick-grad" x1="0" y1="0" x2="31" y2="0">
          <stop stopColor="#f26a3e" />
          <stop offset="1" stopColor="#c94d20" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TickNo() {
  return (
    <svg viewBox="0 0 31 31" width="28" height="28" fill="none">
      <circle cx="15.355" cy="15.355" r="15.355" fill="#d0d0c8" />
      <line x1="10" y1="10" x2="21" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="21" y1="10" x2="10" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function fmt(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

/* ───── BundleForm — reused in hero + offer stack ───── */

function BundleForm() {
  const [bundle, setBundle] = useState(1);
  const [mode, setMode] = useState<'subscribe' | 'one-time'>('subscribe');
  const b = BUNDLES[bundle];
  const price = mode === 'subscribe' ? Math.round(b.sale * 0.8) : b.sale;
  const savePct = Math.round((1 - price / b.full) * 100);

  return (
    <div className="ln-bundle-form">
      <p className="ln-qty-label">Choose your bundle</p>
      <div className="ln-qty-grid">
        {BUNDLES.map((bun, i) => (
          <button key={i} className={`ln-qty-btn${bundle === i ? ' active' : ''}`} onClick={() => setBundle(i)}>
            {bun.tag && <span className="ln-qty-btn-save">{bun.tag}</span>}
            <span className="ln-qty-btn-label">{bun.label}</span>
            <span className="ln-qty-btn-count">{bun.desc}</span>
          </button>
        ))}
      </div>

      <div className="ln-option-toggle">
        <button className={`ln-option-btn${mode === 'subscribe' ? ' active' : ''}`} onClick={() => setMode('subscribe')}>
          <span className="ln-option-btn-label">Subscribe &amp; Save</span>
          <span className="ln-option-btn-price">{fmt(Math.round(b.sale * 0.8))}</span>
          <span className="ln-option-btn-tag">20% OFF + FREE SHIPPING</span>
        </button>
        <button className={`ln-option-btn${mode === 'one-time' ? ' active' : ''}`} onClick={() => setMode('one-time')}>
          <span className="ln-option-btn-label">One-Time Purchase</span>
          <span className="ln-option-btn-price">{fmt(b.sale)}</span>
        </button>
      </div>

      <div className="ln-price-row">
        <span className="ln-price-sale">{fmt(price)}</span>
        {b.full !== price && <span className="ln-price-compare">{fmt(b.full)}</span>}
        {savePct > 0 && <span className="ln-save-pill">SAVE {savePct}%</span>}
      </div>

      {bundle === 0
        ? <p className="ln-shipping-nudge">Add 2 more packs for free shipping + 25% off</p>
        : <p className="ln-shipping-nudge ln-shipping-nudge--free">✓ Free shipping included</p>
      }

      <button className="ln-atc-btn">Add to Cart — {fmt(price)}</button>

      <div className="ln-trust-row">
        {[
          { icon: <CheckGreen />, text: '60-Day Money-Back Guarantee' },
          { icon: <CheckGreen />, text: 'Free Shipping $45+' },
          { icon: <CheckGreen />, text: 'Cancel Subscription Anytime' },
        ].map(t => (
          <span key={t.text} className="ln-trust-item">{t.icon}{t.text}</span>
        ))}
      </div>
    </div>
  );
}

/* ───── Page ───── */

export default function LunaPdpPage() {
  const [activeImg, setActiveImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── 1. Hero ── */}
      <div className="ln-pdp-hero">
        <div className="ln-gallery">
          <div className="ln-gallery-main">
            <div className="ln-gallery-badge">Safe for Kids 6m+</div>
            <Image
              src={GALLERY[activeImg]}
              alt="Luna Kids Mosquito Repellent Patches"
              key={activeImg}
              fill
              sizes="(max-width: 899px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="ln-gallery-thumbs">
            {GALLERY.map((src, i) => (
              <button key={i} className={`ln-thumb${i === activeImg ? ' active' : ''}`} onClick={() => setActiveImg(i)} aria-label={`Image ${i + 1}`}>
                <Image src={src} alt="" loading="lazy" width={72} height={72} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </button>
            ))}
          </div>
        </div>

        <div className="ln-form-side">
          <div className="ln-stars-row">
            <Stars />
            <span className="ln-review-count"><strong>2,847</strong> reviews &nbsp;·&nbsp; 4.9</span>
            <a href="#reviews" className="ln-review-link">Read all →</a>
          </div>

          <h1 className="ln-product-title">
            Keep bugs off your kids.
            <span className="ln-title-sub"> Without the bug spray.</span>
          </h1>

          <p className="ln-product-desc">
            Plant-based mosquito repellent patches. Peel, stick to clothing, protected for 12 hours.
            Nothing touches their skin. No DEET. No fight.
          </p>

          <div className="ln-benefit-badges">
            {['DEET-Free', 'Plant-Based', 'Safe 6m+', 'Pediatrician Reviewed'].map(b => (
              <span key={b} className="ln-badge">{b}</span>
            ))}
          </div>

          <BundleForm />

          <p className="ln-guarantee-line">
            🛡️ <strong>60-Day Money-Back Guarantee</strong> — no bites, or your money back.
          </p>
        </div>
      </div>

      {/* ── Trust Strip ── */}
      <div className="ln-trust-strip">
        {[
          { icon: '🌿', label: 'DEET-Free Formula' },
          { icon: '🧪', label: 'Lab Tested' },
          { icon: '👶', label: 'Safe from 6 Months' },
          { icon: '💧', label: 'Waterproof' },
          { icon: '🌍', label: 'Plant-Based' },
        ].map(t => (
          <div key={t.label} className="ln-trust-strip-item">
            <span className="ln-trust-strip-icon">{t.icon}</span>
            <span className="ln-trust-strip-label">{t.label}</span>
          </div>
        ))}
      </div>

      {/* ── 2. Problem Agitation ── */}
      <div className="ln-problem-wrap">
        <div className="ln-problem-inner">
          <p className="ln-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>SOUND FAMILIAR?</p>
          <h2 className="ln-problem-heading">
            The bug spray routine is exhausting.
          </h2>
          <div className="ln-problem-grid">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="ln-problem-item">
                <span className="ln-problem-icon">{p.icon}</span>
                <p className="ln-problem-text">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="ln-problem-resolution">
            There&apos;s a better way. Peel a patch. Stick it to their shirt. Protected for 12 hours — they never have to know.
          </p>
        </div>
      </div>

      {/* ── 3. How It Works ── */}
      <div className="ln-hiw-wrap">
        <div className="ln-hiw-inner">
          <p className="ln-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>HOW IT WORKS</p>
          <h2 className="ln-hiw-heading">Three steps. Then forget about it.</h2>
          <div className="ln-hiw-steps">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="ln-hiw-step">
                <div className="ln-hiw-step-num">{step.step}</div>
                <h3 className="ln-hiw-step-title">{step.title}</h3>
                <p className="ln-hiw-step-body">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="ln-hiw-mechanism">
            <strong>The science in plain English:</strong> Each patch contains citronella, eucalyptus, and lavender oils in a microencapsulation matrix. As your child moves and warms up, the capsules slowly release the oils — creating an invisible protective zone. No skin absorption. No nervous system exposure.
          </div>
        </div>
      </div>

      {/* ── 4. Proof Block ── */}
      <div className="ln-proof-wrap">
        <div className="ln-proof-inner">
          <p className="ln-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>THE PROOF</p>
          <h2 className="ln-proof-heading">Efficacy you can trust. Safety you can feel good about.</h2>
          <div className="ln-proof-stats">
            {PROOF_STATS.map((s, i) => (
              <div key={i} className="ln-proof-stat">
                <div className="ln-proof-stat-num">{s.num}</div>
                <p className="ln-proof-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="ln-proof-claims">
            <div className="ln-proof-col">
              <h3 className="ln-proof-col-title">Efficacy</h3>
              {[
                'Up to 12 hours of continuous protection per patch',
                'Use 2–3 patches for full coverage (collar, hat, stroller)',
                'Replace every 12 hours or after full water submersion',
                "Works best within 3 feet of the child's body",
              ].map((c, i) => (
                <div key={i} className="ln-proof-claim"><CheckGreen /><span>{c}</span></div>
              ))}
            </div>
            <div className="ln-proof-col">
              <h3 className="ln-proof-col-title">Safety</h3>
              {SAFETY_CLAIMS.map((c, i) => (
                <div key={i} className="ln-proof-claim"><CheckGreen /><span>{c}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Press bar ── */}
      <div className="ln-press-wrap">
        <div className="ln-press-label">AS SEEN IN</div>
        <div className="ln-press-scroller">
          <div className="ln-press-track">
            {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, i) => (
              <span key={i} className="ln-press-item">
                <Image src={logo.src} alt={logo.alt} width={100} height={28} style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.4)' }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. Comparison ── */}
      <div className="ln-compare-wrap">
        <div className="ln-compare-inner">
          <p className="ln-compare-eyebrow">THE DIFFERENCE</p>
          <h2 className="ln-compare-heading">Luna Kids vs The Alternatives</h2>
          <div className="ln-compare-table">
            <div className="ln-compare-header">
              <div className="ln-compare-feature-col" />
              {COMPARE_PRODUCTS.map(p => (
                <div key={p.name} className={`ln-compare-prod-header${p.highlight ? ' highlight' : ''}`}>
                  <div className="ln-compare-prod-img">
                    <Image src={p.img} alt={p.name} width={80} height={80} style={{ objectFit: 'contain' }} />
                  </div>
                  <span className="ln-compare-prod-name">{p.name}</span>
                </div>
              ))}
            </div>
            {COMPARE_FEATURES.map((feat, fi) => (
              <div key={fi} className="ln-compare-row">
                <div className="ln-compare-feature-col">{feat}</div>
                {COMPARE_MATRIX[fi].map((has, pi) => (
                  <div key={pi} className={`ln-compare-cell${COMPARE_PRODUCTS[pi].highlight ? ' highlight' : ''}`}>
                    {has ? <TickYes /> : <TickNo />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. Social Proof ── */}
      <div className="ln-social-wrap" id="reviews">
        <div className="ln-social-inner">
          <p className="ln-section-label" style={{ textAlign: 'center', marginBottom: 12 }}>WHAT PARENTS ARE SAYING</p>
          <h2 className="ln-social-heading">Real kids. Real trips. Zero bites.</h2>

          <div className="ln-ugc-grid">
            {UGC_POSTS.map((src, i) => (
              <div key={i} className="ln-ugc-post">
                <Image src={src} alt={`Community photo ${i + 1}`} fill sizes="(max-width: 599px) 33vw, 11vw" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          <div className="ln-testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="ln-testimonial-card">
                <div className="ln-testimonial-header">
                  <div className="ln-testimonial-avatar">
                    <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div className="ln-testimonial-name">{t.name}</div>
                    <div className="ln-testimonial-location">{t.location}</div>
                  </div>
                  <Stars n={t.stars} />
                </div>
                <p className="ln-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="ln-testimonial-badge">✓ Verified Purchase</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 7. Offer Stack ── */}
      <div className="ln-offer-wrap">
        <div className="ln-offer-inner">
          <div className="ln-offer-left">
            <p className="ln-section-label" style={{ marginBottom: 12 }}>PEAK SEASON — STOCK UP NOW</p>
            <h2 className="ln-offer-heading">Don&apos;t get caught without them.</h2>
            <p className="ln-offer-body">
              Mosquito season is short. Sell-outs are real. The 3-pack covers a full summer for one child — the Family pack covers your whole crew.
            </p>
            <div className="ln-offer-media">
              <Image src="/images/luna/kids-patch-1.webp" alt="Luna Kids Patches" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className="ln-offer-right">
            <BundleForm />
            <div className="ln-guarantee-box">
              <div className="ln-guarantee-icon">🛡️</div>
              <div>
                <strong className="ln-guarantee-title">60-Day Money-Back Guarantee</strong>
                <p className="ln-guarantee-desc">
                  If your kids get bitten while wearing our patches, we&apos;ll refund you in full. No forms, no hoops. We stand behind every patch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 8. FAQ ── */}
      <div className="ln-faq-wrap">
        <div className="ln-faq-inner">
          <h2 className="ln-faq-heading">Frequently Asked Questions</h2>
          {FAQS.map((faq, i) => (
            <div key={i} className={`ln-faq-item${openFaq === i ? ' open' : ''}`}>
              <button className="ln-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="ln-faq-icon">+</span>
              </button>
              <div className="ln-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. Final CTA + Guarantee ── */}
      <div className="ln-final-cta-wrap">
        <div className="ln-final-cta-media">
          <Image src="/images/luna/hf-family-1.webp" alt="Family protected by Luna patches" fill style={{ objectFit: 'cover' }} />
          <div className="ln-final-cta-overlay" />
        </div>
        <div className="ln-final-cta-inner">
          <div className="ln-final-cta-content">
            <p className="ln-section-label" style={{ marginBottom: 12 }}>PROTECT YOUR KIDS THIS SEASON</p>
            <h2 className="ln-final-cta-heading">One patch.<br />12 hours.<br />No DEET.</h2>
            <p className="ln-final-cta-body">Every kid deserves to play outside without being eaten alive. Luna makes it a non-event.</p>
            <button className="ln-atc-btn" style={{ maxWidth: 320 }}>Shop Kids Patches →</button>
            <p className="ln-final-guarantee">🛡️ 60-day money-back guarantee on every order</p>
          </div>
        </div>
      </div>

      {/* ── Sticky Mobile ATC ── */}
      <div className="ln-sticky-atc">
        <button className="ln-atc-btn">Add to Cart — Kids 3-Pack</button>
      </div>
    </>
  );
}
