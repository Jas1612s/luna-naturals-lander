const PROMISES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'No more spray fights.',
    body: 'Peel a patch, stick it on her shirt. That\'s it. No wrestling. No tears. No chemical mist in her face.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: 'No more chemical worry.',
    body: 'DEET-free. Picaridin-free. No synthetic actives. Just lemon eucalyptus, citronella, and peppermint — plant-powered protection a pediatrician would approve.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'No more bite-itch nights.',
    body: '24 hours of protection per patch. One patch covers a 3-foot radius. Park, picnic, camping, soccer practice — covered.',
  },
];

export function LunaPdpNextGenTech() {
  return (
    <section className="hs-next-gen">
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '70px 20px' }}>
        <div className="hs-section-label">THE PROMISE</div>
        <h2 className="hs-section-heading" style={{ marginBottom: '48px' }}>
          Finally, bug protection that works<br />for your family — not against it.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
          {PROMISES.map((p) => (
            <div key={p.title} style={{
              background: '#fff', borderRadius: '20px', padding: '32px 28px',
              border: '1px solid #e8f0da', display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <span style={{ color: '#f26a3e' }}>{p.icon}</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 767px) { .luna-promise-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
