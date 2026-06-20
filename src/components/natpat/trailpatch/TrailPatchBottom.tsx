import Image from 'next/image';

const guaranteeItems = [
  {
    icon: '/images/natpat/trailpatch/icon-return-sleepy.png',
    text: 'Easy 30 day returns',
  },
  {
    icon: '/images/natpat/trailpatch/icon-whatsapp-sleepy.png',
    text: '24/7 customer service',
  },
  {
    icon: '/images/natpat/trailpatch/icon-cart-sleepy.png',
    text: '100% secure checkout',
  },
  {
    icon: '/images/natpat/trailpatch/icon-shipping-sleepy.png',
    text: 'Free shipping worldwide',
  },
];

export function TrailPatchBottom() {
  return (
    <>
      <style>{`
        .tp-bottom-bar {
          display: none;
        }
        @media (min-width: 768px) {
          .tp-bottom-bar {
            display: block;
            padding: 100px 0;
          }
        }
      `}</style>
      <section className="tp-bottom-bar">
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            gap: '24px',
          }}
        >
          {guaranteeItems.map((item) => (
            <div
              key={item.text}
              style={{
                flex: '1',
                border: '2px solid #ff3c81',
                borderRadius: '4px',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <Image
                src={item.icon}
                alt={item.text}
                width={100}
                height={100}
                style={{ objectFit: 'contain', maxWidth: '100px', maxHeight: '80px' }}
              />
              <p
                style={{
                  marginTop: '20px',
                  fontSize: '20px',
                  fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                  fontWeight: 400,
                  color: '#515151',
                  textAlign: 'center',
                  marginBottom: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
