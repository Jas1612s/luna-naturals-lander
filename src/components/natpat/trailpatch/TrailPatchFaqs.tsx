'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do your tick repellent stickers work?',
    answer:
      'Yes, tick stickers like these are effective in repelling ticks. They use natural essential oils like Geranium, Peppermint, Thyme and Cedarwood to create a scent barrier that confuses and keeps ticks away.',
  },
  {
    question: 'Are your tick repellent stickers safe?',
    answer:
      'Tick repellent stickers are generally safe as they are made with natural essential oils and are free from harsh chemicals like DEET*, making them suitable for use by children and adults. Tick repellent stickers are crafted with plant-based essential oils and avoid harsh chemicals like and do not use DEET*, offering a gentle option for both children and adults. * Not a safety claim',
  },
  {
    question: "How do I place stickers to protect my whole child's body?",
    answer:
      'Kids aged 0-2 need 1 patch: One patch placed centrally on clothes. Kids aged 3-5 need 2 patches: One patch on the top clothes (sweater, t-shirt) and one on the shorts. If itching is a concern, our itch patch can provide relief. For bug bite relief, check out our bug bite patches. Kids aged 6+ and parents need 2-4 patches: One patch on the clothing next to each exposed limb.',
  },
  {
    question: "What if tick repellent stickers don't work for me?",
    answer:
      "We stand by the effectiveness of our tick repellent stickers. If you use it as directed and it doesn't work for you, simply contact our customer service, and we will refund your purchase. It's that simple - if it doesn't work for you, it's free!",
  },
  {
    question: 'How long will your stickers last?',
    answer:
      "The bag has a ziplock. Put the unused patches into the bag and seal it. Tick repellent stickers when sealed will last up to 12 months. If you have a pack that is past its use by date, send a photo of the unopened pack to care@natpat.com and we'll send you a new one.",
  },
  {
    question: 'Where are your tick repellent stickers made?',
    answer: 'Patches are formulated and designed in Australia.',
  },
  {
    question: 'How do they work?',
    answer:
      'Ticks locate our bodies using their sense of smell. Certain compounds, including specific essential oils, overpower the scents we emit, essentially hiding us from ticks.',
  },
  {
    question: 'How long will shipping take?',
    answer:
      "All orders are dispatched the same day, and usually take 3-5 days to the USA, Canada and Australia. However, with current travel restrictions, we're seeing shipping times range between 10-15 days, and in some cases up to 25 days.",
  },
  {
    question: 'Is shipping free?',
    answer: 'Yes! We provide FREE, worldwide shipping on all orders.',
  },
];

export function TrailPatchFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="Faqs" style={{ padding: '25px 0', background: 'white' }}>
      <style>{`
        @media (min-width: 768px) {
          .tp-faq-section { padding: 60px 0 !important; }
          .tp-faq-title { font-size: 70px !important; }
          .tp-faq-question { font-size: 30px !important; font-weight: 300 !important; padding: 20px 0 !important; }
          .tp-faq-icon { width: 24px !important; height: 24px !important; }
          .tp-faq-body { padding: 30px !important; background: #f9f8f6 !important; }
          .tp-faq-answer { font-size: 18px !important; }
        }
      `}</style>
      <div className="tp-faq-section" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <h2
          className="tp-faq-title"
          style={{
            fontFamily: 'var(--font-bebas-neue), "Bebas Neue", sans-serif',
            fontSize: '42px',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1,
            marginBottom: '30px',
          }}
        >
          Faq&apos;s
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid #e5e5e5',
              }}
            >
              <div style={{ background: 'white' }}>
                <button
                  className="tp-faq-question"
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: openIndex === index ? 'var(--tp-pink)' : '#141313',
                    textAlign: 'left',
                    padding: '0',
                    paddingTop: '14px',
                    paddingBottom: '14px',
                    lineHeight: 'normal',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--tp-pink)';
                  }}
                  onMouseLeave={(e) => {
                    if (openIndex !== index) {
                      (e.currentTarget as HTMLButtonElement).style.color = '#141313';
                    }
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    className="tp-faq-icon"
                    style={{
                      flexShrink: 0,
                      marginLeft: '12px',
                      width: '17px',
                      height: '17px',
                      backgroundImage: `url('/images/natpat/trailpatch/${openIndex === index ? 'icon-minus.svg' : 'icon-plus.svg'}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                </button>
              </div>

              {openIndex === index && (
                <div
                  className="tp-faq-body"
                  style={{
                    marginBottom: '30px',
                    padding: '20px',
                    background: '#f6f6f6',
                  }}
                >
                  <p
                    className="tp-faq-answer"
                    style={{
                      fontSize: '12px',
                      fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                      color: '#515151',
                      marginBottom: '10px',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
