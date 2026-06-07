import Image from "next/image";

const logos = [
  { src: '/images/histrips/press/elle.webp', alt: 'Elle', width: 60 },
  { src: '/images/histrips/press/goop.webp', alt: 'Goop', width: 70 },
  { src: '/images/histrips/press/forbes.webp', alt: 'Forbes', width: 90 },
  { src: '/images/histrips/press/people.webp', alt: 'People', width: 80 },
  { src: '/images/histrips/press/vogue.webp', alt: 'Vogue', width: 80 },
  { src: '/images/histrips/press/womens-health.webp', alt: "Women's Health", width: 110 },
  { src: '/images/histrips/press/oprah.webp', alt: 'Oprah Magazine', width: 100 },
  { src: '/images/histrips/press/cosmopolitan.webp', alt: 'Cosmopolitan', width: 130 },
];

const allLogos = [...logos, ...logos];

export function HiStripsAsSeenIn() {
  return (
    <div
      style={{
        background: '#ffffff',
        color: '#000000',
        overflow: 'hidden',
        position: 'relative',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
      }}
    >
      <style>{`
        @keyframes hs-press-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* "AS SEEN IN" label — acts as left mask */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          background: '#ffffff',
          zIndex: 2,
          fontSize: '14px',
          letterSpacing: '0.1px',
          fontWeight: 400,
          color: '#000',
          whiteSpace: 'nowrap',
          boxShadow: '30px 0 20px #fff',
        }}
      >
        AS SEEN IN
      </div>

      {/* Scrolling area */}
      <div
        style={{
          paddingLeft: '160px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'center',
            animation: 'hs-press-scroll 25s linear infinite',
          }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={28}
                style={{
                  objectFit: 'contain',
                  opacity: 0.7,
                  height: '28px',
                  width: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
