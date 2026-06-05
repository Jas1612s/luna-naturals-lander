"use client";

import { useState } from "react";

const categories = ["All", "Protection", "Value", "Kids", "Ingredients", "Convenience"];

const reviews = [
  { stars: 5, title: "Finally, something that actually works!", body: "We tried every spray and lotion out there. Nothing worked without drenching our kids in chemicals. These patches? Stuck one on each kid before the park — zero bites. I'm literally never going back to spray.", name: "Rebecca D.", category: "Protection" },
  { stars: 5, title: "Worth every penny.", body: "I used to buy those coil things, candles, sprays — spending $40+ a month in summer. One pack of these lasts the whole season for less than $15. It's a no-brainer.", name: "Jeremy H.", category: "Value" },
  { stars: 5, title: "My toddler asks for his 'stickers' now.", body: "He thinks they're dinosaur stickers and wants to put them on himself every morning. Meanwhile, he hasn't had a single mosquito bite in 3 weeks. Parent win.", name: "Sarah M.", category: "Kids" },
  { stars: 5, title: "Clean ingredients, real results.", body: "As someone with eczema, I can't use DEET products. These patches don't touch my skin directly and the citronella oil actually keeps bugs away. Game changer for sensitive skin families.", name: "Amanda K.", category: "Ingredients" },
  { stars: 5, title: "So much easier than spray.", body: "Peel, stick, done. No greasy hands, no reapplying every hour, no chasing my kids around with a spray bottle. Threw a pack in the diaper bag and forgot about it. That's the dream.", name: "Marcus T.", category: "Convenience" },
  { stars: 5, title: "Camping trip MVP.", body: "Took these on a 4-day camping trip with the family. We used maybe 20 patches total for 4 people. Not a single bite the entire trip. The kids actually wanted to wear them because of the fun designs.", name: "Lisa R.", category: "Protection" },
];

const ugcVideos = [
  "/videos/gruns/ugc-102216.mp4",
  "/videos/gruns/ugc-102224.mp4",
  "/videos/gruns/ugc-102233.mp4",
  "/videos/gruns/ugc-102855.mp4",
  "/videos/gruns/ugc-102903.mp4",
  "/videos/gruns/ugc-102910.mp4",
  "/videos/gruns/ugc-102918.mp4",
  "/videos/gruns/ugc-102925.mp4",
];

export function ReviewsTabs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? reviews
    : reviews.filter((r) => r.category === activeCategory);

  return (
    <section className="bg-[var(--gr-green-dark)] py-16 md:py-20">
      <div className="max-w-[800px] mx-auto text-center px-4 md:px-6">
        {/* Rating header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-[var(--gr-accent)]">★★★★★</span>
          <span className="text-sm text-[var(--gr-sage)]">4.8 stars from 50,000+ reviews</span>
        </div>

        <h2 className="gr-display italic text-3xl md:text-4xl text-white leading-tight mb-8">
          Join 50,000+ Families<br />Ditching the Spray
        </h2>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[var(--gr-green)] text-white"
                  : "bg-white/10 text-white border border-white/20 hover:border-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review cards */}
        <div className="space-y-6 mb-16">
          {filtered.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 text-center">
              <div className="text-[var(--gr-accent)] mb-3">
                {"★".repeat(review.stars)}
              </div>
              <h3 className="font-bold text-lg text-[var(--gr-dark)] mb-3">
                {review.title}
              </h3>
              <p className="text-sm text-[var(--gr-sage)] leading-relaxed mb-4">
                {review.body}
              </p>
              <p className="font-semibold text-[var(--gr-dark)]">{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* UGC video carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: "max-content" }}>
          {ugcVideos.map((src, i) => (
            <div
              key={i}
              className="w-[200px] md:w-[240px] shrink-0 aspect-[9/16] rounded-2xl overflow-hidden bg-black/20"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
