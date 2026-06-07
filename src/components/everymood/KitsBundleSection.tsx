const products = [
  {
    num: 1,
    title: 'Sweet Seduction Trio | Hydrating Hand Sanitizer Gift Set',
    price: '$24.00',
    img: '/images/everymood/SweetSeduction_30837be5-b0d9-48ed-b7eb-09f2e56c55b6.webp',
  },
  {
    num: 2,
    title: 'Golden Hour Trio | Hydrating Hand Sanitizer Gift Set',
    price: '$24.00',
    img: '/images/everymood/GoldenHour_616becd7-b0fe-4d19-aa56-dc0fdcfd259a.webp',
  },
  {
    num: 3,
    title: 'Sweet Escape Trio | Hydrating Hand Sanitizer Gift Set',
    price: '$24.00',
    img: '/images/everymood/Sweetescape_2e6e9081-cd04-45b5-8c6c-d6bfcb23ceba.webp',
  },
] as const;

export function KitsBundleSection() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 700,
        width: '100%',
      }}
      className="kits-bundle-section em-kits-grid"
    >
      {/* Left column — image */}
      <div
        style={{
          background: 'linear-gradient(180deg, var(--em-lavender) 0%, var(--em-lavender-light) 100%)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <img
          src="/images/everymood/MainCharacter2.webp"
          alt="Kits for Main Characters — stacked trio boxes"
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>

      {/* Right column — content */}
      <div
        style={{
          background: '#ffffff',
          padding: 60,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            color: 'var(--em-indigo)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Kits for Main Characters
        </span>

        {/* Heading */}
        <h2
          style={{
            color: 'var(--em-indigo)',
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: '-1.6px',
            lineHeight: '48px',
            marginTop: 12,
          }}
        >
          Transform mundane into magical with the world&apos;s freshest sanitizers
        </h2>

        {/* Product list */}
        <div style={{ marginTop: 40 }}>
          {products.map((product) => (
            <div
              key={product.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '24px 0',
                borderBottom: '1px solid #E5E5E5',
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  minWidth: 32,
                  border: '1.5px solid #999',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: '#999',
                }}
              >
                {product.num}
              </div>

              {/* Product thumbnail */}
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 8,
                  objectFit: 'cover',
                }}
              />

              {/* Product info */}
              <span
                style={{
                  flex: 1,
                  color: 'var(--em-indigo)',
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {product.title}
              </span>

              {/* Price */}
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#000000',
                  whiteSpace: 'nowrap',
                }}
              >
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .kits-bundle-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .kits-bundle-section > div:last-child {
            padding: 32px 20px !important;
          }
          .kits-bundle-section h2 {
            font-size: 28px !important;
            line-height: 34px !important;
          }
        }
      `}</style>
    </section>
  );
}
