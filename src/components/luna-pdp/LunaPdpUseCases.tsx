const BUNDLES = [
  {
    label: '1 Pack',
    qty: '30 patches',
    supply: '~30 outings',
    price: '$14.99',
    perPatch: '$0.17/patch',
    tag: null,
    img: '/images/luna/hero-main.webp',
  },
  {
    label: '3 Packs',
    qty: '90 patches',
    supply: '~90 outings',
    price: '$39.99',
    perPatch: '$0.15/patch',
    tag: 'Most Popular',
    img: '/images/luna/featured-product.webp',
  },
  {
    label: '6 Packs',
    qty: '180 patches',
    supply: 'Full season supply',
    price: '$69.99',
    perPatch: '$0.13/patch',
    tag: 'Best Value',
    img: '/images/luna/prod-value-1.webp',
  },
];

export function LunaPdpUseCases() {
  return (
    <section className="hs-usecase">
      <div className="hs-usecase-inner">
        <div className="hs-section-label">STOCK UP FOR THE SEASON</div>
        <h2 className="hs-section-heading" style={{ textAlign: 'center', margin: '0 auto 12px' }}>
          Mosquito season runs May through September.
        </h2>
        <p style={{ textAlign: 'center', fontSize: '15px', color: '#666', maxWidth: '520px', margin: '0 auto 36px', lineHeight: 1.6 }}>
          One pack lasts about 30 outings. Most families burn through 3–4 packs a summer. Stock up and save.
        </p>

        <div className="hs-uc-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {BUNDLES.map((b) => (
            <div key={b.label} className="hs-uc-card" style={{ cursor: 'pointer', position: 'relative' }}>
              {b.tag && (
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: b.tag === 'Best Value' ? '#F26A3E' : '#2a2e16',
                  color: '#fff', fontSize: '10px', fontWeight: 800, borderRadius: '6px',
                  padding: '3px 9px', fontFamily: 'var(--font-heading)', zIndex: 1,
                }}>
                  {b.tag.toUpperCase()}
                </div>
              )}
              <div className="hs-uc-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.img} alt={b.label} loading="lazy" style={{ objectFit: 'contain', padding: '16px' }} />
              </div>
              <div className="hs-uc-card-body">
                <div className="hs-uc-card-title">{b.label}</div>
                <p className="hs-uc-card-text" style={{ marginBottom: '12px' }}>{b.qty} · {b.supply}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a', fontFamily: 'var(--font-heading)' }}>{b.price}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#f26a3e', fontWeight: 600 }}>{b.perPatch}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button style={{
            background: '#F26A3E', color: '#fff', border: 'none', borderRadius: '9999px',
            padding: '16px 48px', fontSize: '17px', fontWeight: 800, cursor: 'pointer',
            fontFamily: 'var(--font-heading)', boxShadow: '0 4px 18px rgba(242,106,62,0.35)',
            transition: 'background 0.2s, transform 0.15s',
          }}>
            Add to Cart — $39.99
          </button>
        </div>
      </div>
    </section>
  );
}
