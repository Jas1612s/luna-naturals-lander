'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do you ship overseas?',
    a: 'Yes, we ship internationally. We currently ship to 75+ countries. Shipping costs will apply and will be added at checkout unless free shipping discount is available. Currently Free Shipping is Available on all orders above 45€ | 50$.',
  },
  {
    q: 'Do you ship to my country?',
    a: 'We excluded countries we can not ship to, from checking out. This means if you are able to check-out, we can ship to your country.',
  },
  {
    q: 'How long will it take to get my orders?',
    a: 'All orders will be dispatched within 24-48 hours, and shipping will take around 5-7 business days depending on your location.',
  },
  {
    q: 'What is Histrips Nasal?',
    a: 'A nasal strip is an adhesive band that helps open nasal passages for easier breathing by gently lifting the sides of your nose.',
  },
  {
    q: 'How does it work?',
    a: 'The nasal strip uses a flexible, spring-like material to gently pull open your nasal passages, improving airflow and making it easier to breathe.',
  },
  {
    q: 'Are HiStrips nasal strips safe to use?',
    a: "Yes, nasal strips are completely safe for most people when used as directed. They're non-medicated, hypoallergenic and gentle on the skin, but should not be applied to broken or irritated skin.",
  },
  {
    q: 'Other questions?',
    a: 'You can contact us at support@histrips.com, we will be happy to assist you.',
  },
]

export function HiStripsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ background: '#ffffff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 700,
            letterSpacing: '-1.5px',
            color: '#2A2E16',
            marginBottom: '8px',
            marginTop: 0,
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            fontSize: '15px',
            color: '#666',
            marginBottom: '40px',
            marginTop: 0,
          }}
        >
          Get quick solutions to your common concerns, from shipping to application method.
        </p>

        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              style={{
                borderBottom: '1px solid #D4D1C4',
                padding: '20px 0',
                cursor: 'pointer',
              }}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#2A2E16',
                }}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: '20px', lineHeight: 1, userSelect: 'none' }}>
                  {isOpen ? '−' : '+'}
                </span>
              </div>
              {isOpen && (
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#555',
                    paddingTop: '12px',
                    overflow: 'hidden',
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
