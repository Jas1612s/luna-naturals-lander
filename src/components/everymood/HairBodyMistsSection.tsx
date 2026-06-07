'use client';

import { useState, useCallback } from 'react';

const allProducts = [
  [
    {
      title: 'Vanilla Soft Serve | Body & Hair Mist 100mL',
      salePrice: '$22.00',
      originalPrice: '$34.00',
      discount: '-35%',
      img: '/images/everymood/Vanilla_soft_serve.webp',
    },
    {
      title: 'Head in the Clouds 100mL | Hydrating Body & Hair Mist',
      salePrice: '$22.00',
      originalPrice: '$34.00',
      discount: '-35%',
      img: '/images/everymood/Headintheclouds_fc37ec55-42be-4b22-9ffa-dc2b66b7b29c.webp',
    },
  ],
  [
    {
      title: 'Head in the Clouds 100mL | Hydrating Body & Hair Mist',
      salePrice: '$22.00',
      originalPrice: '$34.00',
      discount: '-35%',
      img: '/images/everymood/Headintheclouds_fc37ec55-42be-4b22-9ffa-dc2b66b7b29c.webp',
    },
    {
      title: 'Vanilla Soft Serve | Body & Hair Mist 100mL',
      salePrice: '$22.00',
      originalPrice: '$34.00',
      discount: '-35%',
      img: '/images/everymood/Vanilla_soft_serve.webp',
    },
  ],
] as const;

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function HairBodyMistsSection() {
  const [page, setPage] = useState(0);

  const handlePrev = useCallback(() => {
    setPage((p) => (p === 0 ? allProducts.length - 1 : p - 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((p) => (p === allProducts.length - 1 ? 0 : p + 1));
  }, []);

  const currentProducts = allProducts[page];

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '60px 40px',
        position: 'relative',
      }}
      className="hair-body-mists-section"
    >
      {/* Decorative background element */}
      <img
        src="/images/everymood/right1bakcgroundimage2.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -40,
          right: -60,
          width: 200,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 32,
        }}
        className="hair-body-mists-grid em-mists-grid"
      >
        {/* Left column — lifestyle image */}
        <div
          style={{
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/everymood/motion-element_Picture_image-card_jpg.webp"
            alt="Woman holding body mist"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 12,
            }}
          />
        </div>

        {/* Right column */}
        <div>
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                color: 'var(--em-indigo)',
                fontSize: 24,
                fontWeight: 400,
              }}
            >
              Hair &amp; Body Mists
            </h2>

            {/* Navigation arrows */}
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={handlePrev}
                aria-label="Previous products"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid #E5E5E5',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#333',
                }}
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next products"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid #E5E5E5',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#333',
                }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Product cards */}
          <div
            className="em-mists-products-grid hair-body-mists-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
              marginTop: 16,
            }}
          >
            {currentProducts.map((product, idx) => (
              <div
                key={`${page}-${idx}`}
                style={{
                  background: '#F5F5F5',
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Sale badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    background: '#C73C3C',
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: 600,
                    padding: '4px 8px',
                    borderRadius: 4,
                    zIndex: 1,
                  }}
                >
                  {product.discount}
                </span>

                {/* Product image */}
                <div
                  style={{
                    aspectRatio: '1 / 1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </div>

                {/* Product info */}
                <div style={{ padding: '0 16px 16px' }}>
                  <p
                    style={{
                      color: 'var(--em-indigo)',
                      fontSize: 14,
                      fontWeight: 400,
                      margin: 0,
                      lineHeight: '20px',
                    }}
                  >
                    {product.title}
                  </p>

                  {/* Pricing */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginTop: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#000000',
                      }}
                    >
                      {product.salePrice}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: '#999',
                        textDecoration: 'line-through',
                      }}
                    >
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hair-body-mists-section {
            padding: 40px 20px !important;
          }
          .hair-body-mists-grid {
            grid-template-columns: 1fr !important;
          }
          .hair-body-mists-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
