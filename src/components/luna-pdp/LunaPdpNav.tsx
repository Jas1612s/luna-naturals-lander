'use client';

import { useEffect, useState } from 'react';

export function LunaPdpNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const messages = [
    'Free Shipping On Orders $50+',
    'DEET-Free & Safe For The Whole Family',
    'Lab-Tested, Adventure-Approved',
    '30-Day Money-Back Guarantee',
  ];
  const doubled = [...messages, ...messages];

  return (
    <>
      {/* Announcement Bar */}
      <div className="hs-ann-bar">
        <div className="hs-ann-track">
          {doubled.map((msg, i) => (
            <div key={i} className="hs-ann-item">{msg}</div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`hs-header${scrolled ? ' scrolled' : ''}`}>
        <div className="hs-header-inner">
          <a href="/luna" className="hs-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/luna/logo.webp" alt="Luna Naturals" width={120} height={30} />
          </a>

          <nav className="hs-nav">
            <a href="/luna">Products</a>
            <a href="#">About</a>
            <a href="#">Reviews</a>
            <a href="#">Science</a>
          </nav>

          <div className="hs-header-right">
            <div className="hs-pill-new">NEW</div>
            <button className="hs-cart-btn" aria-label="Cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
