'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What age is this safe for?',
    a: 'Recommended for ages 2+. Always consult your pediatrician for children under 2.',
  },
  {
    q: "Can my child wear it on their skin?",
    a: "No — patches stick to clothing only. That's a feature, not a limitation: no chemicals on the skin, ever.",
  },
  {
    q: 'How long does each patch last?',
    a: 'Up to 24 hours. Replace daily for continuous protection.',
  },
  {
    q: 'How many patches does my child need to wear?',
    a: 'One patch protects a 3-foot radius. For most kids, one patch on the shirt or backpack is enough.',
  },
  {
    q: 'Does it work for ticks too?',
    a: 'These are formulated for mosquitoes specifically. For tick-prone areas, pair with our Bug & Tick Spray.',
  },
  {
    q: 'What if my child has sensitive skin?',
    a: "Patches don't touch skin, so skin sensitivity isn't a factor. The adhesive is hypoallergenic.",
  },
  {
    q: 'Will it stain clothes?',
    a: 'No. Patches peel off cleanly without residue.',
  },
  {
    q: 'Is the scent strong?',
    a: "It's a light, pleasant lemon-eucalyptus-peppermint scent. Most kids actually like it.",
  },
  {
    q: "What's your return policy?",
    a: '30-day money-back guarantee, no questions asked.',
  },
  {
    q: 'How fast do you ship?',
    a: 'Orders ship within 24 hours. Most US orders arrive in 3–5 business days.',
  },
];

export function LunaPdpFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="hs-faq">
      <div className="hs-faq-inner">
        <h2 className="hs-faq-heading">Questions moms actually ask.</h2>
        <p className="hs-faq-sub">10 real answers before you buy.</p>

        {FAQS.map((faq, i) => (
          <div key={i} className={`hs-faq-item${open === i ? ' open' : ''}`}>
            <button className="hs-faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{faq.q}</span>
              <span className="hs-faq-icon">+</span>
            </button>
            <div className="hs-faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
