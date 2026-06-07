const STEPS = [
  {
    num: '1',
    word: 'Peel.',
    desc: 'Pop one patch from the sheet.',
    img: '/images/luna/prod-bite-patches-b.webp',
  },
  {
    num: '2',
    word: 'Stick.',
    desc: 'On her shirt, hat, backpack, stroller — anywhere on clothing.',
    img: '/images/luna/prod-bite-patches-tab.webp',
  },
  {
    num: '3',
    word: 'Play.',
    desc: '24 hours of bug-free outdoor time. No reapplication needed.',
    img: '/images/luna/hf-kids-1.webp',
  },
];

export function LunaPdpPerformance() {
  return (
    <section className="hs-perf">
      <div className="hs-perf-inner">
        <div className="hs-section-label">HOW IT WORKS</div>
        <h2 className="hs-section-heading">Three steps to a bite-free day.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {STEPS.map((s) => (
            <div key={s.num} className="hs-perf-card">
              <div className="hs-perf-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.word} loading="lazy" />
              </div>
              <div className="hs-perf-card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: '#2a2e16', color: '#fff', fontSize: '13px', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', flexShrink: 0,
                  }}>{s.num}</span>
                  <div className="hs-perf-card-title">{s.word}</div>
                </div>
                <p className="hs-perf-card-text">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
