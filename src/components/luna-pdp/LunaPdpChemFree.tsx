const USPS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Zero DEET, zero picaridin',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    title: 'Plant-powered & lab-tested',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Safe for kids 2+',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24-hour protection per patch',
  },
];

export function LunaPdpChemFree() {
  return (
    <section style={{ background: '#f7faf2' }}>
      <div className="hs-ng-inner">
        {/* ── Left ── */}
        <div className="hs-ng-left">
          <div className="hs-section-label" style={{ textAlign: 'left', marginBottom: '14px' }}>THE LUNA DIFFERENCE</div>
          <h2 className="hs-ng-heading">
            Tired of chemical<br />
            <span style={{ color: '#F26A3E' }}>filled mosquito<br />sprays?</span>
          </h2>
          <p className="hs-ng-para">
            Luna patches work by releasing a gentle, plant-based scent barrier — lemon eucalyptus, citronella, and peppermint — that mosquitoes simply can&apos;t stand. No spraying. No rubbing. No chemicals on your child&apos;s skin. Just peel, stick, and play.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 16px' }}>
            {USPS.map((usp) => (
              <div key={usp.title} className="hs-ng-usp" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: '10px' }}>
                <span style={{ color: '#2a2e16' }}>{usp.icon}</span>
                <div className="hs-ng-usp-title" style={{ fontSize: '16px' }}>{usp.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — video ── */}
        <div className="hs-ng-right">
          <div style={{
            borderRadius: '28px',
            overflow: 'hidden',
            background: '#dce8c8',
            aspectRatio: '9/14',
            maxWidth: '360px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/luna/chem-free-demo.mov" type="video/quicktime" />
              <source src="/videos/luna/chem-free-demo.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
