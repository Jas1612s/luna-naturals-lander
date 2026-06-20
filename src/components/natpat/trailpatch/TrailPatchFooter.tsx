import Image from 'next/image';

const navLinks = [
  { label: 'Our Story', href: '#' },
  { label: 'Advantages', href: '#' },
  { label: 'Our TrailPatch', href: '#' },
  { label: 'Reviews', href: '#' },
];

const desktopOnlyLinks = [
  { label: 'Wholesale Enquiries', href: '#' },
  { label: 'Shipping', href: '#' },
  { label: 'Contact', href: '#' },
];

export function TrailPatchFooter() {
  return (
    <>
      <style>{`
        .tp-footer-nav-mobile {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          justify-items: center;
        }
        .tp-footer-nav-desktop {
          display: none;
        }
        .tp-footer-desktop-links {
          display: none;
        }
        @media (min-width: 768px) {
          .tp-footer-nav-mobile {
            display: none;
          }
          .tp-footer-nav-desktop {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            justify-content: center;
            flex-wrap: wrap;
          }
          .tp-footer-desktop-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            justify-content: center;
            flex-wrap: wrap;
          }
          .tp-footer-nav-desktop li {
            width: 200px;
            text-align: center;
          }
          .tp-footer-desktop-links li {
            width: 200px;
            text-align: center;
          }
          .tp-logo-wrap {
            margin: 0 auto 20px !important;
          }
        }
        .tp-back-to-top:hover {
          opacity: 0.9;
        }
      `}</style>

      <footer style={{ padding: '50px 0', position: 'relative' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          {/* Logo */}
          <div
            className="tp-logo-wrap"
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '25px auto',
              width: '76px',
            }}
          >
            <Image
              src="/images/natpat/logo.svg"
              alt="NATPAT"
              width={76}
              height={32}
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Mobile nav */}
          <ul className="tp-footer-nav-mobile" style={{ listStyle: 'none', padding: 0, margin: '0 auto 20px' }}>
            {navLinks.map((link) => (
              <li key={link.label} style={{ padding: '10px' }}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '16px',
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    color: '#8f8f8f',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop nav — primary links */}
          <ul className="tp-footer-nav-desktop">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '16px',
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    color: '#8f8f8f',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop nav — secondary links */}
          <ul className="tp-footer-desktop-links" style={{ marginTop: '12px' }}>
            {desktopOnlyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '16px',
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    color: '#8f8f8f',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Top Button */}
        <a
          href="#"
          className="tp-back-to-top"
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '90px',
            height: '90px',
            background: '#ff3c81',
            borderRadius: '90px',
            boxShadow: '0 4px 20px rgba(54,54,54,0.51)',
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            zIndex: 100,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-roboto), Roboto, sans-serif',
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: '2px',
            }}
          >
            Top
          </span>
        </a>
      </footer>
    </>
  );
}
