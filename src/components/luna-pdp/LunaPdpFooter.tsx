'use client';

import { useState } from 'react';

export function LunaPdpFooter() {
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Final CTA block — Section 10 */}
      <section className="hs-newsletter" style={{ background: '#f0f7e8', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="hs-nl-heading" style={{ fontSize: '36px', letterSpacing: '-1.2px' }}>
            One patch. All day. No worry.
          </h2>
          <p className="hs-nl-sub" style={{ fontSize: '16px' }}>
            Most families burn through 3–4 packs a summer. Stock up and save.
          </p>

          {/* Mini bundle selector */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
            {[
              { label: '1 Pack', price: '$14.99', per: '$0.17/patch' },
              { label: '3 Packs', price: '$39.99', per: '$0.15/patch', popular: true },
              { label: '6 Packs', price: '$69.99', per: '$0.13/patch' },
            ].map((b) => (
              <div key={b.label} style={{
                flex: '1', minWidth: '120px', background: '#fff', border: `2px solid ${b.popular ? '#2a2e16' : '#f0d0b8'}`,
                borderRadius: '12px', padding: '14px 10px', textAlign: 'center', cursor: 'pointer',
              }}>
                {b.popular && <div style={{ fontSize: '9px', fontWeight: 800, color: '#2a2e16', letterSpacing: '1px', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>MOST POPULAR</div>}
                <div style={{ fontWeight: 800, fontSize: '15px', color: '#1a1a1a', fontFamily: 'var(--font-heading)' }}>{b.label}</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#2a2e16', fontFamily: 'var(--font-heading)' }}>{b.price}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>{b.per}</div>
              </div>
            ))}
          </div>

          <button style={{
            width: '100%', background: '#F26A3E', color: '#fff', border: 'none', borderRadius: '9999px',
            padding: '18px', fontSize: '18px', fontWeight: 800, cursor: 'pointer',
            fontFamily: 'var(--font-heading)', boxShadow: '0 4px 20px rgba(242,106,62,0.35)',
            marginBottom: '20px',
          }}>
            Add to Cart — $39.99
          </button>

          {/* Guarantee */}
          <div style={{
            background: '#fff', borderRadius: '16px', padding: '20px 24px',
            border: '1px solid #f0d0b8', textAlign: 'left',
          }}>
            <div style={{ fontWeight: 800, fontSize: '15px', color: '#1a1a1a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              30-day money-back guarantee.
            </div>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: 0 }}>
              If our patches don&apos;t keep the bugs off your kid, we&apos;ll refund your order. No questions, no returns to ship back. We&apos;re that confident.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hs-footer">
        <div className="hs-footer-inner">
          <div className="hs-footer-top">
            <div>
              <div className="hs-footer-logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/luna/logo.webp" alt="Luna Naturals" />
              </div>
              <div className="hs-footer-tagline">Born to outsmart nature&apos;s annoyances.</div>
            </div>

            <div className="hs-footer-links">
              <h4>Shop</h4>
              <a href="#">Repellent Patches</a>
              <a href="#">Bug Sprays</a>
              <a href="#">Kids Collection</a>
              <a href="#">Bundles</a>
            </div>

            <div className="hs-footer-links">
              <h4>Learn</h4>
              <a href="#">Our Science</a>
              <a href="#">Ingredients</a>
              <a href="#">Blog</a>
              <a href="#">Reviews</a>
            </div>

            <div className="hs-footer-links">
              <h4>Help</h4>
              <a href="#">Contact Us</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Track My Order</a>
            </div>
          </div>

          <div className="hs-footer-bottom">
            <span>© 2025 Luna Naturals. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service · Accessibility</span>
          </div>
        </div>
      </footer>
    </>
  );
}
