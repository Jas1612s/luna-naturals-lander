const INGREDIENTS = [
  {
    icon: '🌿',
    name: 'Lemon Eucalyptus Oil',
    does: "Nature's most effective mosquito deterrent.",
    proof: 'CDC-recognized as comparable to low-concentration DEET.',
  },
  {
    icon: '🕯️',
    name: 'Citronella',
    does: 'Time-tested plant oil that masks the CO₂ scent mosquitoes use to find you.',
    proof: 'Used in repellents worldwide for over 60 years.',
  },
  {
    icon: '❄️',
    name: 'Peppermint',
    does: 'Bugs hate it. Kids think it smells great. Win-win.',
    proof: 'Shown to repel mosquitoes, gnats, and flies on contact.',
  },
  {
    icon: '🌹',
    name: 'Geraniol',
    does: 'Plant-derived compound from rose and lemongrass that extends the protection window.',
    proof: 'EPA-approved as a minimum-risk pesticide ingredient.',
  },
];

const NOT_IN_IT = [
  'No DEET', 'No Picaridin', 'No Parabens', 'No Sulfates',
  'No Synthetic Fragrance', 'No Dyes', 'No Phthalates',
];

export function LunaPdpClinical() {
  return (
    <section className="hs-clinical">
      <div className="hs-cli-inner">
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
          WHAT&apos;S ACTUALLY IN IT
        </div>
        <h2 className="hs-cli-heading">
          Transparency builds trust.<br />Here&apos;s exactly what protects your kids.
        </h2>

        {/* Ingredient cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px', textAlign: 'left' }}>
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px', padding: '24px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{ing.icon}</div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#fff', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>{ing.name}</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '8px' }}>{ing.does}</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, fontStyle: 'italic' }}>{ing.proof}</p>
            </div>
          ))}
        </div>

        {/* What's NOT in it strip */}
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '14px', padding: '20px 28px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
            What&apos;s NOT in it
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {NOT_IN_IT.map((item) => (
              <span key={item} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '9999px', padding: '6px 14px', fontSize: '13px', fontWeight: 600, color: '#fff',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A8D668" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <a href="#" className="hs-cli-cta" style={{ marginTop: '36px' }}>Add to Cart — DEET-Free Protection</a>
      </div>
    </section>
  );
}
