"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Review {
  photo: string;
  name: string;
  text: string;
}

const verifiedReviews: Review[] = [
  {
    photo: "/images/natpat/review-megan.webp",
    name: "Megan Hilling",
    text: "I am so glad to have found this product/company. I have a newborn son who loves going on walks- which we do in the evening when it is cooler- which is also when the bugs come out. We have not had a single bug bite since we started using these stickers. The fact that it is chemical-free was a huge selling point for me. I highly recommend this product!",
  },
  {
    photo: "/images/natpat/review-carly.webp",
    name: "Carly Kool",
    text: "We use your product all the time, not just on our daughter but my husband and I use them too! It's so nice to be able to use a product that simply sticks on to an item of clothing instead of a cream or spray. Plus my daughter and I are, let's just say, very appealing to mosquitoes and will consistently get bites. When we are wearing buzz patches I never worry about bites, the most I have ever gotten is one bite!",
  },
  {
    photo: "/images/natpat/review-jacquelyn.webp",
    name: "Jacquelyn",
    text: "They worked! I had a bite on my wrist and used them and it really got rid of the itch, almost immediately. I put them all over my children when they were covered in mosquito bites and they did not scratch at all. Loved knowing that I wasn't putting chemicals on their gentle skin too.",
  },
  {
    photo: "/images/natpat/review-debora.webp",
    name: "Debora",
    text: "I LOVE these stickers. I get bit all the time, even when using spray with deet! The little patches are like a miracle! Afternoon before last I had 7 patches on fresh bites! One was even on my face. They work wonders and keep me from whelping up and continuing to violently itch, as I usually do.",
  },
];

function VerifiedCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E0E4ED] opacity-90 md:opacity-100">
      <img
        src={review.photo}
        alt={review.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-5 min-h-[200px] md:min-h-[405px]">
        <img
          src="/images/natpat/green-5-star.webp"
          alt="5 stars"
          className="h-4 mb-2"
        />
        <h4 className="text-[20px] font-semibold leading-[30px] text-[#1F1F5B] mt-1 mb-2">
          {review.name}
        </h4>
        <p className="text-[16px] md:text-[18px] font-normal leading-[22px] text-[#1F1F5B]">
          {review.text}
        </p>
        <img
          src="/images/natpat/verified-badge.webp"
          alt="Verified Buyer"
          className="mt-8 max-w-[125px]"
        />
      </div>
    </div>
  );
}

export function NatPatScience() {
  const [vIdx, setVIdx] = useState(0);

  return (
    <div>
      {/* Sub-section A: Science Text Boxes */}
      <section className="py-8 px-5 md:px-0">
        <h2
          className="text-[22px] md:text-[38px] font-[900] text-[#1F4FC9] text-center md:w-[70%] mx-auto mb-6 px-4"
          style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
        >
          Unlocking the science behind NATPAT patches
        </h2>

        <div className="md:flex md:gap-16 md:max-w-[1140px] md:mx-auto md:items-start">
          {/* Left box */}
          <div className="relative md:w-[45%]">
            {/* Side illustration */}
            <img
              src="/images/natpat/science-side-1-mb.webp"
              alt=""
              className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 max-w-[141px]"
            />
            <img
              src="/images/natpat/science-side-1-ds.webp"
              alt=""
              className="hidden md:block absolute right-0 -translate-y-[65%] max-w-[364px]"
            />

            {/* Gray box content */}
            <div className="bg-[#F0F0F4] rounded-2xl p-6 md:p-16 w-[75%] md:w-full max-w-[305px] md:max-w-none">
              <p className="text-[16px] md:text-[22px] font-medium leading-[22px] md:leading-[30px] text-[#1F1F5B]">
                At NATPAT, skepticism is a sign of care, especially when it
                comes to products for our loved ones. That&apos;s why we&apos;re
                not just about promises; we&apos;re about proving. Our mission
                is to blend playful innovation with solid science, offering you
                peace of mind with every NATPAT patch. From natural essential
                oils to cutting-edge slow-release technology, every detail of
                NATPAT patches is meticulously planned to ensure safety, avoid
                allergies, and deliver measurable results.
              </p>
            </div>
          </div>

          {/* Right box */}
          <div className="relative mt-3 md:w-[45%] md:translate-y-12 ml-auto">
            <img
              src="/images/natpat/science-side-2-mb.webp"
              alt=""
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 max-w-[132px]"
            />
            <img
              src="/images/natpat/science-side-2-ds.webp"
              alt=""
              className="hidden md:block absolute left-0 -translate-y-1/2 max-w-[233px]"
            />

            <div className="bg-[#F0F0F4] rounded-2xl p-6 md:p-16 w-[75%] md:w-full max-w-[305px] md:max-w-none ml-auto md:ml-0 pl-12 md:pl-16">
              <p className="text-[16px] md:text-[22px] font-medium leading-[22px] md:leading-[30px] text-[#1F1F5B]">
                Discover the power of AromaWeave&trade;, our pioneering
                bamboo-based fiber that&apos;s reshaping how we experience
                essential oils. With a commitment to sustainability and
                effectiveness, AromaWeave&trade; stands out with its
                biodegradable nature and unique ability to deliver consistent,
                long-lasting aromas. Join us as we delve into the science,
                sustainability, and sensory delight of AromaWeave&trade;, and
                see how it&apos;s setting new standards in the world of
                aromatherapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-section B: Manifesto */}
      <div
        className="relative bg-white -mt-12 md:-mt-16 py-16 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #fff 0%, #fff 100%)" }}
      >
        {/* Parallax background (desktop only) */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: "url('/images/natpat/science-purple-curl.webp')",
          }}
        />

        {/* White quote box */}
        <div className="relative max-w-[450px] md:max-w-[600px] mx-auto px-6">
          {/* NATPAT logo mark */}
          <img
            src="/images/natpat/science-natpat-logo.webp"
            alt="NATPAT"
            width={206}
            className="block mx-auto mb-6"
          />

          {/* Decorative white box image with overlaid quote */}
          <div className="relative">
            <img
              src="/images/natpat/science-white-box-mb.webp"
              alt=""
              className="md:hidden w-full"
            />
            <img
              src="/images/natpat/science-white-box-ds.webp"
              alt=""
              className="hidden md:block w-full"
            />
            <p className="absolute inset-0 flex items-center justify-center text-[18px] md:text-[26px] font-bold leading-[28px] text-[#1F1F5B] text-center px-8 md:px-16">
              &ldquo;At NATPAT, it&apos;s not just about products; it&apos;s
              about a way of life. We&apos;re here to bring you a kinder, more
              fun, and totally natural approach to feeling great. Join us in
              this journey towards a happier, healthier you!&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Sub-section C: Blue info zone */}
      <div className="bg-[#1F4FC9] py-16 -mt-8 relative">
        <div className="max-w-[1140px] mx-auto px-6 md:flex md:flex-row-reverse md:gap-20 md:items-start">
          {/* UGC photo carousel - right column on desktop */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }, (_, i) => (
                <img
                  key={i}
                  src={`/images/natpat/ugc-${i + 1}.jpg`}
                  alt=""
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              ))}
            </div>
          </div>

          {/* Text content - left column on desktop */}
          <div className="md:w-1/2 text-white">
            <p className="text-[16px] font-medium leading-[22px] mb-4">
              Hey there! At NATPAT, we&apos;re all about unlocking the superhero
              potential in every kiddo. We totally get it, right? Kids have
              their ups and downs, from mood swings that could rival any soap
              opera to those nights when they just won&apos;t hit the hay. And
              let&apos;s be honest, us parents could use a little help steering
              the ship sometimes.
            </p>
            <p className="text-[16px] font-medium leading-[22px] mb-4">
              In this fast-paced world where popping a pill seems like the
              go-to, we thought, &ldquo;Hey, why not take a step back and give
              Mother Nature a high five?&rdquo; Sure, meds have their place (no
              shade there!), but why not start with something a bit more chill?
            </p>
            <p className="text-[16px] font-medium leading-[22px] mb-4">
              Enter our secret weapon: stickers! But not just any stickers.
              These little guys are like a comforting hug from your favorite
              essential oils. They&apos;ve been around for ages and trust us,
              they&apos;re not just old wives&apos; tales. Science gives them a
              big thumbs up too!
            </p>
            <p className="text-[16px] font-medium leading-[22px] mb-6">
              Next time you&apos;re wandering down those drugstore aisles,
              remember our mantra: &ldquo;Start with a sticker.&rdquo; Our
              stickers are more than just a pretty face. They&apos;re packed
              with nature&apos;s goodness and are an absolute hit with the kids.
            </p>

            {/* Yellow quote box */}
            <div className="relative">
              <img
                src="/images/natpat/science-yellow-box.webp"
                alt=""
                className="w-full"
              />
              <p className="absolute inset-0 flex items-center justify-center text-[16px] font-semibold leading-[22px] text-white text-center px-8">
                At NATPAT, we&apos;re doing more than just selling something
                cool. We&apos;re all about bringing smiles, health, and a bit of
                nature&apos;s magic into your family&apos;s life. Here&apos;s
                to making well-being fun, natural, and full of joy!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-section D: Verified Buyer Reviews */}
      <div className="bg-[#93C3E9] py-16 -mt-4 relative">
        <h3
          className="text-[22px] md:text-[28px] font-[900] text-[#1F4FC9] text-center mb-8 px-4"
          style={{ fontFamily: "Urbane, Barlow, sans-serif" }}
        >
          What Our Customers Say
        </h3>

        <div className="max-w-[1140px] mx-auto px-6">
          {/* Mobile: single card carousel */}
          <div className="md:hidden">
            <VerifiedCard review={verifiedReviews[vIdx]} />
            <div className="flex justify-center gap-2 mt-4">
              {verifiedReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setVIdx(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all",
                    i === vIdx
                      ? "w-3 h-3 bg-[#FF209E]"
                      : "w-1.5 h-1.5 bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Desktop: 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-5 max-w-[1140px] mx-auto">
            {verifiedReviews.map((r) => (
              <VerifiedCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
