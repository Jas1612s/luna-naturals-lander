const COLUMNS = [
  { name: 'Luna Patches', logo: '/images/luna/logo.webp', price: '~$0.16/use', isUs: true },
  { name: 'Bug Spray', logo: null, price: '~$0.40/use', isUs: false },
  { name: 'Bracelets', logo: null, price: '~$1.00/use', isUs: false },
];

const ROWS = [
  { label: 'Touches skin', values: ['❌ Never', '✅ Always', '❌ Never'] },
  { label: 'Fight to apply', values: ['❌ No', '✅ Yes', 'Sometimes'] },
  { label: 'Reapplication', values: ['Every 24 hours', 'Every 2–4 hours', 'Every 30–60 min (heat)'] },
  { label: 'Chemicals', values: ['Plant-based only', 'DEET / Picaridin', 'Varies'] },
  { label: 'TSA-friendly', values: ['✅ Yes', '❌ No (over 100ml)', '✅ Yes'] },
  { label: 'Travels well', values: ['✅ Pocket-sized', '❌ Spills', '✅ Yes'] },
  { label: 'Per-use cost', values: ['~$0.16', '~$0.40', '~$1.00'] },
];

export function LunaPdpComparison() {
  return (
    <section className="hs-compare">
      <div className="hs-cmp-inner">
        <div className="hs-section-label" style={{ textAlign: 'center', marginBottom: '8px' }}>WHY PATCHES WIN</div>
        <h2 className="hs-cmp-heading">Why patches beat sprays and bracelets.</h2>

        <div className="hs-cmp-header-row">
          <div className="hs-cmp-label" />
          {COLUMNS.map((col) => (
            <div key={col.name} className="hs-cmp-col-head">
              {col.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="product-img" src={col.logo} alt={col.name} />
              ) : (
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e4e3e1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  {col.name === 'Bug Spray' ? '🧴' : '🟢'}
                </div>
              )}
              <div className={`hs-cmp-name${col.isUs ? ' hs-cmp-name--hs' : ''}`}>{col.name}</div>
              <div className="hs-cmp-price" style={{ fontSize: '13px', color: '#888' }}>{col.price}</div>
            </div>
          ))}
        </div>

        {ROWS.map((row) => (
          <div key={row.label} className="hs-cmp-row">
            <div className="hs-cmp-label">{row.label}</div>
            {row.values.map((val, i) => (
              <div key={i} className="hs-cmp-cell" style={{ fontSize: '13px', fontWeight: i === 0 ? 700 : 400, color: i === 0 ? '#2a2e16' : '#555', textAlign: 'center', padding: '0 6px' }}>
                {val}
              </div>
            ))}
          </div>
        ))}

        <div className="hs-cmp-footnote">
          Per-use cost estimates based on average retail prices. Results may vary by brand.
        </div>
      </div>
    </section>
  );
}
