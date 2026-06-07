import Image from 'next/image'
import { cn } from '@/lib/utils'

const products = [
  { image: '/images/histrips/compare/col-histrips.webp', name: 'histrips', isHiStrips: true },
  { image: '/images/histrips/compare/col-others.webp', name: 'Other Devices', isHiStrips: false },
  { image: '/images/histrips/compare/col-spray.webp', name: 'Nasal Spray', isHiStrips: false },
  { image: '/images/histrips/compare/col-strips.webp', name: 'Pharmacy Strips', isHiStrips: false },
]

const features = [
  { label: 'Works up to 24H', values: [true, false, false, false] },
  { label: 'Gentle, drug-free solution', values: [true, false, false, true] },
  { label: 'One-time stick, easy peel', values: [true, false, true, true] },
  { label: 'Anti-Sweat Grip', values: [true, false, false, false] },
  { label: 'Comfortable for overnight wear', values: [true, false, false, false] },
]

const prices = ['$29', '$129+', '$35 (P/M)', '$32+']

export function HiStripsComparison() {
  return (
    <section style={{ background: '#FADCC5', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          maxWidth: '840px',
          padding: '60px 30px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            textAlign: 'center',
            color: '#2A2E16',
            margin: 0,
          }}
        >
          HiStrips vs Others
        </h2>

        {/* Table */}
        <div style={{ width: '100%' }}>
          {/* Product header row */}
          <div style={{ display: 'flex', width: '100%' }}>
            {/* Empty first cell */}
            <div style={{ minWidth: '20%', width: '20%' }} />
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  width: '20%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minHeight: '115px',
                  padding: '15px 0',
                }}
              >
                <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                {product.isHiStrips ? (
                  <span
                    style={{
                      fontSize: '19px',
                      fontWeight: 600,
                      letterSpacing: '-0.8px',
                      maxWidth: '90px',
                      textAlign: 'center',
                      background:
                        'linear-gradient(93deg, #2A2E16 22.39%, rgba(138, 138, 138, 0.80) 79.95%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {product.name}
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: '19px',
                      fontWeight: 600,
                      letterSpacing: '-0.8px',
                      maxWidth: '90px',
                      textAlign: 'center',
                      color: '#2A2E16',
                    }}
                  >
                    {product.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((feature) => (
            <div
              key={feature.label}
              style={{
                display: 'flex',
                width: '100%',
                borderTop: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  width: '20%',
                  minWidth: '20%',
                  display: 'flex',
                  minHeight: '75px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#2A2E16',
                }}
              >
                {feature.label}
              </div>
              {feature.values.map((value, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '20%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '75px',
                  }}
                >
                  <Image
                    src={
                      value
                        ? '/images/histrips/icons/tick-green.svg'
                        : '/images/histrips/icons/tick-grey.svg'
                    }
                    width={27}
                    height={27}
                    alt={value ? 'yes' : 'no'}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Price row */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              borderTop: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                width: '20%',
                minWidth: '20%',
                display: 'flex',
                minHeight: '75px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                fontSize: '14px',
                fontWeight: 500,
                color: '#2A2E16',
              }}
            >
              Pricing*
            </div>
            {prices.map((price, idx) => (
              <div
                key={idx}
                style={{
                  width: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '75px',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#2A2E16' }}>
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            fontSize: '12px',
            color: '#888',
            marginTop: '12px',
            textAlign: 'center',
          }}
        >
          *Cost calculated over 3 months of consistent use.
        </p>
      </div>
    </section>
  )
}
