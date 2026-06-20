"use client";

import { useState } from "react";
import Image from "next/image";

const allReviews = [
  {
    name: "Rebecca D.",
    date: "6/4/2026",
    verified: true,
    stars: 5,
    body: "We tried every spray and lotion out there. Nothing worked without drenching our kids in chemicals. These patches? Stuck one on each kid before the park \u2014 zero bites. I\u2019m literally never going back to spray. Best purchase I\u2019ve made all summer.",
    image: "/images/gruns/review-lisa-c.webp",
  },
  {
    name: "Jeremy H.",
    date: "6/3/2026",
    verified: true,
    stars: 5,
    body: "I used to buy those coil things, candles, sprays \u2014 spending $40+ a month in summer. One pack of these lasts the whole season for less than $15. It\u2019s a no-brainer. My wife ordered 3 more packs for the grandparents.",
    image: "/images/gruns/review-patch-arm.webp",
  },
  {
    name: "Sarah M.",
    date: "6/1/2026",
    verified: true,
    stars: 5,
    body: "My toddler thinks they\u2019re dinosaur stickers and wants to put them on himself every morning. Meanwhile, he hasn\u2019t had a single mosquito bite in 3 weeks. Parent win. The fun designs are such a smart touch!",
    image: null,
  },
  {
    name: "Amanda K.",
    date: "5/29/2026",
    verified: true,
    stars: 5,
    body: "As someone with eczema, I can\u2019t use DEET products. These patches don\u2019t touch my skin directly and the citronella oil actually keeps bugs away. Game changer for sensitive skin families.",
    image: "/images/gruns/review-woman-box.webp",
  },
  {
    name: "Marcus T.",
    date: "5/27/2026",
    verified: true,
    stars: 5,
    body: "Peel, stick, done. No greasy hands, no reapplying every hour, no chasing my kids around with a spray bottle. Threw a pack in the diaper bag and forgot about it. That\u2019s the dream. 10/10 would recommend.",
    image: null,
  },
  {
    name: "Lisa R.",
    date: "5/25/2026",
    verified: true,
    stars: 5,
    body: "Took these on a 4-day camping trip with the family. We used maybe 20 patches total for 4 people. Not a single bite the entire trip. The kids actually wanted to wear them because of the fun designs.",
    image: "/images/gruns/review-hikers.webp",
  },
  {
    name: "David P.",
    date: "5/22/2026",
    verified: true,
    stars: 5,
    body: "Living in Florida, mosquitoes are a year-round problem. These patches have been an absolute lifesaver. I keep a pack in the car, one at home, and one at the office. The subscription means I never run out.",
    image: null,
  },
  {
    name: "Nicole W.",
    date: "5/20/2026",
    verified: true,
    stars: 4,
    body: "Really impressed with how well these work. My only note is I wish the adhesive was slightly stronger \u2014 one fell off during a really sweaty hike. But for everyday use, parks, backyard hangouts? Perfect.",
    image: "/images/gruns/review-woman-selfie.webp",
  },
  {
    name: "Chris B.",
    date: "5/18/2026",
    verified: true,
    stars: 5,
    body: "Bought these for a destination wedding in Costa Rica. Every guest got a pack in their welcome bag. Zero complaints, zero bites, and everyone asked where to buy them. Best wedding favor decision ever.",
    image: null,
  },
];

function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gr-green)" className="shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gr-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}

export function ReviewWall() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allReviews : allReviews.slice(0, 6);

  return (
    <section className="bg-[var(--gr-cream-light)] py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-[700px] lg:max-w-[1000px] mx-auto">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="var(--gr-accent)">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>
            <span className="text-base font-bold text-[var(--gr-dark)]">50,000+ Reviews</span>
          </div>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--gr-dark)]/15 cursor-pointer hover:bg-white transition" aria-label="Filter reviews">
            <FilterIcon />
          </button>
        </div>

        {/* Write a review button */}
        <button className="w-full py-3 border-2 border-[var(--gr-dark)] rounded-lg text-sm font-bold text-[var(--gr-dark)] hover:bg-[var(--gr-dark)] hover:text-white transition cursor-pointer mb-6">
          Write a review
        </button>

        {/* 2-column masonry */}
        <div className="columns-2 lg:columns-3 gap-3 space-y-3">
          {visible.map((review, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-white rounded-xl overflow-hidden"
            >
              {/* Review image */}
              {review.image && (
                <div className="aspect-[4/3] relative">
                  <Image
                    src={review.image}
                    alt={`Review by ${review.name}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-3.5">
                {/* Name + verified */}
                <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                  <span className="font-bold text-xs text-[var(--gr-dark)]">{review.name}</span>
                  {review.verified && <VerifiedBadge />}
                  {review.verified && (
                    <span className="text-[10px] text-[var(--gr-green)] font-medium">Verified</span>
                  )}
                </div>
                <p className="text-[10px] text-[var(--gr-sage)] mb-1.5">{review.date}</p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <svg key={j} width="12" height="12" viewBox="0 0 20 20" fill="var(--gr-accent)">
                      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                    </svg>
                  ))}
                </div>

                {/* Body */}
                <p className="text-xs text-[var(--gr-dark)] leading-relaxed">
                  {review.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border-2 border-[var(--gr-dark)] text-sm font-bold text-[var(--gr-dark)] hover:bg-[var(--gr-dark)] hover:text-white transition cursor-pointer"
            >
              Show All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
