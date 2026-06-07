'use client'

import Image from 'next/image'

const productLinks = [
  { label: 'Nasal Strips', href: '#' },
  { label: 'Sleep Mask', href: '#' },
  { label: 'Mouth Tape', href: '#' },
  { label: 'Nasal Sticks', href: '#' },
]

const companyLinks = [
  { label: 'Our Story', href: '#' },
  { label: 'Store Locator', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Contact', href: '#' },
]

export function HiStripsFooter() {
  return (
    <>
      {/* Footer */}
      <footer
        style={{
          background: '#2A2E16',
          color: 'rgba(255,255,255,0.7)',
          padding: '48px 20px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Top section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            {/* Logo column */}
            <div>
              <Image
                src="/images/histrips/footer-logo.svg"
                width={120}
                height={36}
                alt="HiStrips"
              />
              <p
                style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '8px',
                  marginBottom: 0,
                }}
              >
                // Stay Limitless
              </p>
            </div>

            {/* Link columns */}
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              {/* Products */}
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    marginTop: 0,
                    marginBottom: '16px',
                  }}
                >
                  Products
                </p>
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Company */}
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    marginTop: 0,
                    marginBottom: '16px',
                  }}
                >
                  Company
                </p>
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '40px',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <span>
              HiStrips. // Stay Limitless LLC 228 Park Ave S, New York, NY 10003 ·
              support@histrips.com
            </span>
            <span>© 2024 HiStrips. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
