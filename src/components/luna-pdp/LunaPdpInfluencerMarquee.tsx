const ADVENTURERS = [
  { name: 'Jenny K.', role: 'Trail Runner', avatar: '/images/luna/reviewer-jenny.webp' },
  { name: 'Megan R.', role: 'Outdoor Mom', avatar: '/images/luna/reviewer-megan.webp' },
  { name: 'Elle M.', role: 'Avid Hiker', avatar: '/images/luna/reviewer-elle.webp' },
  { name: 'David P.', role: 'Camping Enthusiast', avatar: '/images/luna/reviewer-4.webp' },
  { name: 'Sarah L.', role: 'Nature Photographer', avatar: '/images/luna/reviewer-5.webp' },
];
const doubled = [...ADVENTURERS, ...ADVENTURERS];

export function LunaPdpInfluencerMarquee() {
  return (
    <div className="hs-marquee-wrap">
      <div className="hs-marquee-track">
        {doubled.map((a, i) => (
          <div key={i} className="hs-inf-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hs-inf-avatar" src={a.avatar} alt={a.name} />
            <div>
              <div className="hs-inf-name">{a.name}</div>
              <div className="hs-inf-role">{a.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
