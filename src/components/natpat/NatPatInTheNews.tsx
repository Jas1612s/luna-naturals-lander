'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const pressItems = [
  {
    img: '/images/natpat/news-slide-1.webp',
    quote:
      '"Like Garlic for Vampires: These Stickers Help Repel Mosquitoes. Because every kid loves stickers anyway."',
    logo: '/images/natpat/news-logo-fatherly.webp',
    logoW: 120,
    logoAlt: 'Fatherly',
  },
  {
    img: '/images/natpat/news-slide-2.webp',
    quote:
      '"The first thing I noticed when I opened the package were that these smelled seriously amazing. They\'re citrusy without being overpowering."',
    logo: '/images/natpat/news-logo-little-things.webp',
    logoW: 154,
    logoAlt: 'The Little Things',
  },
  {
    img: '/images/natpat/news-slide-3.webp',
    quote:
      '"I will say that I did not get bit at all while wearing the BuzzPatch patch mosquito repellent patches! I have used them a couple times since then and have not been bit, either."',
    logo: '/images/natpat/news-logo-nbc.webp',
    logoW: 70,
    logoAlt: 'NBC',
  },
  {
    img: '/images/natpat/news-slide-4.webp',
    quote:
      '"These anti-mosquito stickers were technically developed for kids, but we think they\'re also perfect for any outdoorsy dads who also happen to be mosquito magnets"',
    logo: '/images/natpat/news-logo-sweet-high.webp',
    logoW: 170,
    logoAlt: 'Sweet High',
  },
  {
    img: '/images/natpat/news-slide-5.webp',
    quote:
      '"The Buzzpatch scent creates a virtual shield by \'camouflaging\' your kids from mosquitos Genius!"',
    logo: '/images/natpat/news-logo-motherly.webp',
    logoW: 120,
    logoAlt: 'Motherly',
  },
] as const;

export function NatPatInTheNews() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + pressItems.length) % pressItems.length);
  const next = () => setCurrent((c) => (c + 1) % pressItems.length);

  const item = pressItems[current];

  return (
    <section className="py-8">
      {/* Desktop header: long green curl with overlaid text */}
      <div className="hidden md:block relative my-12 mx-auto max-w-[963px] px-6">
        <img
          src="/images/natpat/news-green-curl.webp"
          alt=""
          className="w-full"
        />
        <h2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[38px] font-[900] text-center w-full px-8 leading-9"
          style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
        >
          We&apos;re in the news...<br />for good reasons.
        </h2>
      </div>

      {/* Carousel — single item at a time */}
      <div className="relative max-w-[400px] mx-auto px-4">
        {/* Prev/Next arrows on desktop */}
        <button
          onClick={prev}
          aria-label="Previous press item"
          className="hidden md:flex absolute left-[-120px] top-1/2 -translate-y-1/2 text-4xl text-[#1F4FC9] font-bold z-10 w-20 h-20 items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next press item"
          className="hidden md:flex absolute right-[-120px] top-1/2 -translate-y-1/2 text-4xl text-[#1F4FC9] font-bold z-10 w-20 h-20 items-center justify-center"
        >
          ›
        </button>

        {/* Mobile: green box heading inside each card */}
        <div className="md:hidden relative mb-0">
          <img
            src="/images/natpat/news-green-box.webp"
            alt=""
            className="block mx-auto max-w-[290px]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
            <p
              className="text-[22px] font-[900]"
              style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
            >
              We&apos;re in the news...
            </p>
            <p
              className="text-[22px] font-[900]"
              style={{ fontFamily: 'Urbane, Barlow, sans-serif' }}
            >
              for good reasons.
            </p>
          </div>
        </div>

        {/* Card (the blue/decorative slide image with quote overlaid) */}
        <div className="relative mx-auto max-w-[327px] md:max-w-[357px]">
          <img src={item.img} alt="" className="w-full block mx-auto" />
          <div className="absolute bottom-3 md:top-1/2 md:bottom-auto md:-translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-8 text-center text-white">
            <p className="text-[16px] md:text-[18px] font-medium leading-[22px]">
              {item.quote}
            </p>
            <img
              src={item.logo}
              alt={item.logoAlt}
              width={item.logoW}
              className="block mx-auto mt-4 md:mt-8"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-5">
          {pressItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to press item ${i + 1}`}
              className={cn(
                'rounded-full transition-all',
                i === current
                  ? 'w-3 h-3 bg-[#FF209E]'
                  : 'w-1.5 h-1.5 bg-[#9AABD5]/50'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
