'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const reviews = [
  {
    product: 'SleepyPatch for Kids',
    text: "Helps My asd child!! My son is 8 and struggles to fall asleep. He is autistic so I guess This can be normal. Well tried melatonin and yes it works but idk not a fan. Tried these and wow work great and as routines work for him using this daily works!! Bought many times so far and will keep purchasing. Thank you for making these. Even got the adult ones. And they help me If I need it.",
  },
  {
    product: 'SleepyPatch for Kids',
    text: "I was sceptical but 4 weeks in: LIFE-CHANGING. Our 2 year old was really sporadical in his sleep, a week or so of sleeping through, and then months on end of being up at least once a night, settling only after yet more milk and us losing between 2-3 hours of sleep a night. I bought these on a whim and the first night he was still up, but since that we've only had one night where he hasn't slept for 11 hours, and that's because he was uncomfortable with constipation.",
  },
  {
    product: 'ZenPatch - Mood Calming Patches',
    text: "This is the third day I've put one on my little boy's shirt… once i notice him getting super hyper or all over the place doing everything under the sun… or even when he gets super cranky and fussy, I sneak and put one on his shirt. No lie, about 15-20 minutes later he's a happy, calm, playful little dude. I also sent him to daycare wearing one and explained what it was to his teachers. At pick up time they expressed that he was a lot more gentle and calm with his friends and he had a great day. I wish I had known about these patches SOONER!!",
  },
  {
    product: 'ZenPatch - Mood Calming Patches',
    text: "Mood calming patches. My son has been wearing them since January. They have helped him so much. Obviously he still has bad days but not like before we used them. He is even aware if he doesn't wear one it affects him negatively. Just wish they were in plain clothes as I think the animals are a bit childish.",
  },
  {
    product: 'Mosquito Patches for Kids',
    text: "Best purchase ever too bad I waited so long but now we're stocked and loyal customers. we use the buzz patches for the whole family now after buying them for my 8 month old. they work like magic and we love in swampy hot climate perfect recipe for bugs especially mosquitoes. wearing the patches you will see them fly right on by.",
  },
  {
    product: 'Mosquito Patches for Kids',
    text: "Works better than bug sprays! The patches worked better than expected. Bug sprays rarely work for me. I shared with other adults and we had a good chuckle about which fun designs to use.",
  },
  {
    product: 'MagicPatch Itch Relief Patches',
    text: "These are great for helping with the itch from mosquito bites. I gave the product 4 stars because they don't always work. Both my son and I found that sometimes the patches are very effective and sometimes they don't do anything. If you have one that doesn't do anything I found trying another patch to work. Not sure why this is.",
  },
  {
    product: 'FocusPatch - Focus Enhancing Stickers',
    text: "This product has really helped my son. We are going through a ADHD Assessment and I really do not want to medicate him if I can get away with it. His teacher have said they have seen a 60% improvement which is a big improvement for him.",
  },
  {
    product: 'StuffyPatch - Congestion Relief Patch',
    text: "I got the StuffyPatch for my 7-year-old son who often wakes up with a congested nose. We put the patch on his pillowcase, and it worked wonders! Not only did it help him breathe easier, but it also allowed for a full night of uninterrupted sleep for the whole family.",
  },
] as const;

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-8 text-left">
      <h3
        className="text-[20px] font-semibold leading-[30px] text-[#1F1F5B] mb-2"
        style={{ fontFamily: 'Barlow, sans-serif' }}
      >
        {review.product}
      </h3>
      <p
        className={cn(
          'text-[16px] md:text-[18px] font-normal leading-[22px] text-gray-700',
          !expanded && 'line-clamp-5'
        )}
      >
        {review.text}
      </p>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="text-[16px] font-medium underline text-[#616267] mt-2 mb-3"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <img
        src="/images/natpat/green-5-star.webp"
        alt="5 stars"
        className="h-5"
      />
    </div>
  );
}

function Dots({
  count,
  current,
  onDotClick,
}: {
  count: number;
  current: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex justify-center gap-1.5 mt-5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to review ${i + 1}`}
          className={cn(
            'rounded-full transition-all',
            i === current
              ? 'w-3 h-3 bg-[#FF209E]'
              : 'w-1.5 h-1.5 bg-[#9AABD5]/50'
          )}
        />
      ))}
    </div>
  );
}

export function NatPatTestimonials() {
  const [mobileIdx, setMobileIdx] = useState(0);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(reviews.length / 6);

  return (
    <section className="py-8 px-5">
      {/* Trustpilot image */}
      <img
        src="/images/natpat/reviews-trustpilot.webp"
        alt="Trustpilot"
        className="w-full max-w-[390px] mx-auto block p-3 rounded-xl"
      />

      {/* Heading */}
      <p
        className="text-[22px] md:text-[34px] font-[900] text-[#1F4FC9] text-left md:text-center max-w-[327px] md:max-w-none mx-auto my-5 px-4 md:px-0"
        style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
      >
        Trusted by over <span>1 million</span> customers
      </p>

      {/* Mobile: single carousel */}
      <div className="md:hidden max-w-[450px] mx-auto">
        <ReviewCard review={reviews[mobileIdx]} />
        <Dots
          count={reviews.length}
          current={mobileIdx}
          onDotClick={setMobileIdx}
        />
      </div>

      {/* Desktop: 3-col grid with pagination */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-[1180px] mx-auto mb-12">
        {reviews.slice(page * 6, page * 6 + 6).map((r) => (
          <ReviewCard key={r.product + r.text.slice(0, 10)} review={r} />
        ))}
      </div>
      <div className="hidden md:flex justify-center gap-4">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="px-4 py-2 text-[#1F1F5B] disabled:opacity-30"
          aria-label="Previous reviews"
        >
          ←
        </button>
        <button
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={(page + 1) * 6 >= reviews.length}
          className="px-4 py-2 text-[#1F1F5B] disabled:opacity-30"
          aria-label="Next reviews"
        >
          →
        </button>
      </div>
    </section>
  );
}
