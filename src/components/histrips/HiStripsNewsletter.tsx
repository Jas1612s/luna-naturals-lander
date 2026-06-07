'use client'

import { useState } from 'react'

export function HiStripsNewsletter() {
  const [email, setEmail] = useState('')

  return (
    <>
      <style>{`
        .histrips-newsletter-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .histrips-newsletter-form {
          display: flex;
          flex-direction: row;
          gap: 0;
        }
        .histrips-newsletter-input {
          min-width: 280px;
        }
        @media (max-width: 899px) {
          .histrips-newsletter-inner {
            flex-direction: column;
            align-items: stretch;
          }
          .histrips-newsletter-form {
            flex-direction: column;
          }
          .histrips-newsletter-input {
            min-width: 0;
            width: 100%;
            border-radius: 8px !important;
          }
          .histrips-newsletter-btn {
            border-radius: 8px !important;
            width: 100%;
          }
        }
      `}</style>

      <section
        style={{
          background: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid #eeeeee',
        }}
      >
        <div className="histrips-newsletter-inner">
          {/* Left: Heading */}
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              fontFamily: 'var(--font-instrument-serif)',
              fontStyle: 'italic',
              color: '#000000',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Stay in the loop
          </h2>

          {/* Middle: Description */}
          <p
            style={{
              fontSize: '14px',
              color: '#666666',
              maxWidth: '400px',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Sign up to unlock first-access offers and science-led breathing insights. From elite sleep
            tips to expert-backed breathing strategies,straight to your inbox.
          </p>

          {/* Right: Form */}
          <form
            className="histrips-newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="histrips-newsletter-input"
              style={{
                background: '#ffffff',
                border: '1px solid #dddddd',
                padding: '14px 20px',
                fontSize: '14px',
                borderRadius: '8px 0 0 8px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="histrips-newsletter-btn"
              style={{
                background: 'linear-gradient(90deg, #E8603C, #C49B3D)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                padding: '14px 40px',
                borderRadius: '0 8px 8px 0',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
