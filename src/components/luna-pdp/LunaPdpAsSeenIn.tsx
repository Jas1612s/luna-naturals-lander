const PRESS = [
  {
    name: 'Forbes',
    svg: (
      <svg viewBox="0 0 200 50" fill="currentColor" height="22">
        <text x="0" y="38" fontFamily="Georgia, serif" fontSize="42" fontWeight="bold" letterSpacing="-1">Forbes</text>
      </svg>
    ),
  },
  {
    name: 'Outside',
    svg: (
      <svg viewBox="0 0 240 50" fill="currentColor" height="18">
        <text x="0" y="36" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="900" letterSpacing="4" textDecoration="none">OUTSIDE</text>
      </svg>
    ),
  },
  {
    name: 'mindbodygreen',
    svg: (
      <svg viewBox="0 0 360 46" fill="currentColor" height="16">
        <text x="0" y="34" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="700" letterSpacing="-0.5">mindbodygreen</text>
      </svg>
    ),
  },
  {
    name: 'Gear Patrol',
    svg: (
      <svg viewBox="0 0 300 50" fill="currentColor" height="18">
        <text x="0" y="36" fontFamily="Georgia, 'Times New Roman', serif" fontSize="36" fontWeight="bold" letterSpacing="1">GEAR PATROL</text>
      </svg>
    ),
  },
  {
    name: 'Healthline',
    svg: (
      <svg viewBox="0 0 260 46" fill="currentColor" height="18">
        <text x="0" y="34" fontFamily="Arial, Helvetica, sans-serif" fontSize="34" fontWeight="700">Healthline</text>
      </svg>
    ),
  },
  {
    name: 'PopSugar',
    svg: (
      <svg viewBox="0 0 260 46" fill="currentColor" height="19">
        <text x="0" y="36" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="36" fontWeight="900" letterSpacing="-1">POPSUGAR</text>
      </svg>
    ),
  },
];

const doubled = [...PRESS, ...PRESS];

export function LunaPdpAsSeenIn() {
  return (
    <div className="hs-press-wrap">
      <div className="hs-press-label">AS SEEN IN</div>
      <div className="hs-press-scroller">
        <div className="hs-press-track">
          {doubled.map((p, i) => (
            <div key={i} className="hs-press-item" style={{ display: 'flex', alignItems: 'center', padding: '0 36px' }}>
              <span style={{ color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center' }}>
                {p.svg}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
