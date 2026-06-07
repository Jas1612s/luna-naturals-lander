const PRESS = [
  {
    name: 'Forbes',
    svg: <svg viewBox="0 0 160 40" fill="currentColor" height="20"><text x="0" y="30" fontFamily="Georgia, serif" fontSize="34" fontWeight="bold" letterSpacing="-0.5">Forbes</text></svg>,
  },
  {
    name: 'Outside',
    svg: <svg viewBox="0 0 220 40" fill="currentColor" height="16"><text x="0" y="30" fontFamily="'Arial Black', Arial, sans-serif" fontSize="30" fontWeight="900" letterSpacing="3">OUTSIDE</text></svg>,
  },
  {
    name: 'mindbodygreen',
    svg: <svg viewBox="0 0 340 38" fill="currentColor" height="15"><text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" letterSpacing="-0.3">mindbodygreen</text></svg>,
  },
  {
    name: 'Gear Patrol',
    svg: <svg viewBox="0 0 280 40" fill="currentColor" height="17"><text x="0" y="30" fontFamily="Georgia, 'Times New Roman', serif" fontSize="30" fontWeight="bold" letterSpacing="1">GEAR PATROL</text></svg>,
  },
  {
    name: 'Healthline',
    svg: <svg viewBox="0 0 240 38" fill="currentColor" height="17"><text x="0" y="28" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="30" fontWeight="700">Healthline</text></svg>,
  },
];

export function LunaPdpPressStrip() {
  return (
    <div style={{
      background: '#fff',
      borderTop: '1px solid #ebe8e2',
      borderBottom: '1px solid #ebe8e2',
      padding: '20px 24px',
    }}>
      <p style={{
        textAlign: 'center', fontSize: '11px', fontWeight: 700,
        letterSpacing: '2px', textTransform: 'uppercase', color: '#aaa',
        marginBottom: '16px',
      }}>
        As Seen On
      </p>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '32px', flexWrap: 'wrap',
      }}>
        {PRESS.map((p) => (
          <span key={p.name} className="luna-press-logo">
            {p.svg}
          </span>
        ))}
      </div>
    </div>
  );
}
