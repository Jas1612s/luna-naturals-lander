import Image from "next/image";

const usps = [
  { icon: '/images/histrips/icons/usp-badge-1.svg', title: 'Dynamic Lift Design' },
  { icon: '/images/histrips/icons/usp-badge-2.svg', title: 'Sweat-Proof Adhesive Matrix' },
  { icon: '/images/histrips/icons/usp-badge-3.svg', title: '40% More Oxygen Per Breath' },
];

function PlayIcon() {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2L20 13L2 24V2Z"
        fill="#2A2E16"
        stroke="#2A2E16"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HiStripsNextGenTech() {
  return (
    <section style={{ background: '#ffffff', width: '100%' }}>
      <style>{`
        @media (max-width: 767px) {
          .hs-nextgen-inner {
            flex-direction: column !important;
          }
          .hs-nextgen-left {
            width: 100% !important;
          }
          .hs-nextgen-right {
            width: 100% !important;
          }
        }
      `}</style>

      <div
        className="hs-nextgen-inner"
        style={{
          display: 'flex',
          maxWidth: '1260px',
          margin: '0 auto',
          gap: '50px',
          padding: '60px 20px',
          alignItems: 'center',
        }}
      >
        {/* LEFT */}
        <div
          className="hs-nextgen-left"
          style={{ width: '45%' }}
        >
          <h2
            style={{
              fontSize: '56px',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-2.8px',
              maxWidth: '300px',
              marginBottom: '20px',
              color: '#2A2E16',
              margin: '0 0 20px 0',
            }}
          >
            Next-Gen Nasal Tech
          </h2>

          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.18px',
              maxWidth: '400px',
              marginBottom: '30px',
              color: '#555',
            }}
          >
            HiStrips uses multi-layer tension-release technology to gently lift and open your nasal passages, giving you up to 40% more oxygen with every breath.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            {usps.map((usp) => (
              <div
                key={usp.title}
                style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={usp.icon}
                  width={40}
                  height={47}
                  alt={usp.title}
                  style={{ objectFit: 'contain' }}
                />
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: 1.1,
                    letterSpacing: '-1px',
                    maxWidth: '165px',
                    color: '#2A2E16',
                  }}
                >
                  {usp.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hs-nextgen-right"
          style={{ width: '55%' }}
        >
          <div
            style={{
              borderRadius: '30px',
              overflow: 'hidden',
              aspectRatio: '1.4',
              position: 'relative',
            }}
          >
            <Image
              src="/images/histrips/next-gen/video-thumb.webp"
              fill
              style={{ objectFit: 'cover' }}
              alt="HiStrips technology"
              sizes="(max-width: 767px) 100vw, 55vw"
            />

            {/* Play button overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.92)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  paddingLeft: '4px',
                }}
              >
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
