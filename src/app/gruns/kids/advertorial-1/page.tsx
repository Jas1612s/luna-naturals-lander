import type { Metadata } from "next";
import Image from "next/image";
import { NewsNav } from "@/components/gruns/advertorial/NewsNav";
import { NewsFooter } from "@/components/gruns/advertorial/NewsFooter";
import { SponsoredBanner } from "@/components/gruns/advertorial/SponsoredBanner";
import { NewsMobileCTA } from "@/components/gruns/advertorial/NewsMobileCTA";

export const metadata: Metadata = {
  title:
    "I Threw Away Every Can of Bug Spray After My Pediatrician Said This | The Parent Report",
  description:
    "One mom's discovery is changing how 50,000+ families protect their kids from mosquitoes — without a single drop of DEET.",
};

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Advertorial1() {
  return (
    <>
      <NewsNav />
      <SponsoredBanner />
      <main className="bg-white">
        {/* ── Editorial Header ── */}
        <section className="pt-8 pb-4 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-600 bg-rose-50 px-2.5 py-1 rounded">
                Health
              </span>
              <span className="text-xs text-neutral-400">June 6, 2026</span>
              <span className="text-xs text-neutral-400">7 min read</span>
            </div>
            <h1 className="text-3xl md:text-[42px] md:leading-[1.15] font-bold text-neutral-900 tracking-tight mb-4">
              I Threw Away Every Can of Bug Spray After My Pediatrician Said This
            </h1>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-6">
              One mom&apos;s discovery is changing how 50,000+ families protect their kids from mosquitoes — without a single drop of DEET.
            </p>
            <div className="flex items-center gap-3 pb-6 border-b border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-bold">
                SM
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800">Sarah Mitchell</p>
                <p className="text-xs text-neutral-400">Contributing Writer &middot; Parenting &amp; Health</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero Image ── */}
        <section className="px-4 md:px-6 pb-2">
          <div className="max-w-[960px] mx-auto">
            <div className="relative aspect-[16/9] md:aspect-[2.2/1] overflow-hidden rounded-xl">
              <Image
                src="/images/gruns/kids-lifestyle-nature.webp"
                alt="Children playing outdoors wearing mosquito repellent patches"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-xs text-neutral-400 mt-2 italic text-center">
              A growing number of parents are replacing chemical sprays with plant-based patch alternatives. Photo: Luna Naturals
            </p>
          </div>
        </section>

        {/* ── Article Body ── */}
        <article className="px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-[720px] mx-auto">
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-neutral-900">
              Last summer, I watched my 3-year-old scream and thrash as I tried to spray her with bug repellent before a birthday party in the park.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              Her eyes were watering. My hands were shaking. And I remember thinking: <em>Why does protecting my child have to feel like punishing her?</em>
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              So I did what any anxious mom does at 11pm — I fell down a research rabbit hole. What I found about DEET made my stomach turn. The synthetic chemicals in most bug sprays were developed for <strong>military</strong> use. They&apos;re absorbed through skin within minutes. And the American Academy of Pediatrics recommends limiting DEET exposure for children under 12.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-10">
              Yet here I was, coating my toddler in it three times a day.
            </p>

            {/* Divider */}
            <hr className="border-neutral-100 mb-10" />

            {/* Turning point */}
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
              The breaking point came when our pediatrician asked a simple question
            </h2>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              &ldquo;Have you tried patches instead of sprays?&rdquo;
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              She explained that plant-based repellent patches stick to <em>clothing</em> — not skin. The active ingredients (citronella and eucalyptus oils) create a protective vapor zone around your child without a single chemical ever touching them.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              I was skeptical. If it were that easy, wouldn&apos;t everyone be using them?
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-10">
              Turns out, they are. I just hadn&apos;t heard about it yet.
            </p>

            {/* Lifestyle image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
              <Image
                src="/images/gruns/kids-lifestyle-stickers.webp"
                alt="Child happily applying a mosquito repellent patch"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-neutral-400 mb-10 italic text-center">
              Children often mistake the patches for fun stickers, making application effortless for parents.
            </p>

            {/* The first try */}
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
              I tried Luna Naturals Kids Patches the next weekend
            </h2>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              Here&apos;s what happened: My daughter picked a dinosaur-design patch (she thought it was a sticker — I let her believe it). She pressed it onto her t-shirt herself. Then she played outside for <strong>six hours straight</strong>.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              Zero meltdowns. Zero spray battles. Zero bites.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-10">
              I cried in the kitchen. Not because of the mosquitoes — because for the first time all summer, going outside didn&apos;t feel like a war.
            </p>
          </div>
        </article>

        {/* ── Feature Grid ── */}
        <section className="bg-neutral-50 px-4 md:px-6 py-12 md:py-16 border-y border-neutral-100">
          <div className="max-w-[720px] mx-auto">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2 text-center">
              Key Differentiators
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-10">
              What makes these different from everything else
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: <ShieldIcon />,
                  title: "They go on clothes, never on skin",
                  desc: "No chemicals absorbing into your kid's body. The patch sticks to their shirt, hat, or backpack.",
                },
                {
                  icon: <ClockIcon />,
                  title: "12 hours of protection per patch",
                  desc: "Apply before daycare and don't think about it again until bedtime. No reapplication needed.",
                },
                {
                  icon: <HeartIcon />,
                  title: "Kids think they're stickers",
                  desc: "Children actually remind parents to apply them. Every parent knows how remarkable that is.",
                },
                {
                  icon: <LeafIcon />,
                  title: "$0.08 per patch",
                  desc: "One $9.99 pack of 120 patches covers an entire summer — less than a single can of spray.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pull Quote ── */}
        <section className="bg-[#1a1a2e] px-4 md:px-6 py-14 md:py-20">
          <div className="max-w-[640px] mx-auto text-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6 opacity-20">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" fill="white" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="white" />
            </svg>
            <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed mb-6">
              Three weeks later, here&apos;s our family&apos;s bug-bite count: zero. Not one bite on my 3-year-old. Not one on her 5-year-old brother. Not one on me.
            </p>
            <p className="text-sm text-white/40">
              &mdash; Sarah Mitchell, Austin TX
            </p>
          </div>
        </section>

        {/* ── Article Continuation ── */}
        <article className="px-4 md:px-6 py-10 md:py-14">
          <div className="max-w-[720px] mx-auto">
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              I told every mom at daycare pickup. Then I told the soccer team parents. Then I posted about it and my DMs exploded.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
              I&apos;m not surprised 50,000+ families have made the switch. I&apos;m surprised it took me this long.
            </p>
            <p className="text-base md:text-lg leading-[1.8] text-neutral-700 font-semibold">
              If you&apos;re still wrestling your kids with a spray bottle this summer, you don&apos;t have to.
            </p>
          </div>
        </article>

        {/* ── Product Callout Card ── */}
        <section className="bg-neutral-50 px-4 md:px-6 py-12 md:py-16 border-y border-neutral-100">
          <div className="max-w-[480px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 text-center mb-4">
              From Our Partner
            </p>
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] bg-neutral-50">
                <Image
                  src="/images/gruns/product-kids-patches.webp"
                  alt="Luna Naturals Kids Mosquito Repellent Patches"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute top-4 right-4 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded">
                  60% OFF
                </div>
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  Luna Naturals Kids Patches
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  120 patches &middot; Plant-based &middot; DEET-free
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400">50,000+ reviews</span>
                </div>
                <div className="flex items-center justify-center gap-2.5 mb-5">
                  <span className="text-sm text-neutral-400 line-through">$24.99</span>
                  <span className="text-3xl font-extrabold text-neutral-900">$9.99</span>
                </div>
                <a
                  href="/gruns/kids"
                  className="block w-full py-4 bg-[#1a1a2e] text-white text-center text-base font-bold rounded-lg hover:bg-[#2a2a4e] transition cursor-pointer"
                >
                  Get Bite-Free Protection — $9.99
                </a>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-4 text-xs text-neutral-400">
                  <span>30-day guarantee</span>
                  <span>|</span>
                  <span>Free shipping</span>
                  <span>|</span>
                  <span>Pediatrician-approved</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA Section ── */}
        <section className="px-4 md:px-6 py-14 md:py-20">
          <div className="max-w-[560px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Every day you wait is another day of chemical spray battles.
            </h2>
            <p className="text-base text-neutral-500 mb-8">
              Luna Naturals is running their Mosquito Season Sale — 60% off, free shipping, and a 30-day money-back guarantee.
            </p>
            <a
              href="/gruns/kids"
              className="inline-block px-10 py-4 bg-[#1a1a2e] text-white text-base font-bold rounded-lg hover:bg-[#2a2a4e] transition cursor-pointer mb-4"
            >
              Shop Now — 60% Off
            </a>
            <p className="text-xs text-neutral-400 mt-3">
              Limited stock remaining &middot; Sale ends soon
            </p>
          </div>
        </section>

        {/* ── Related Articles (fake, for editorial feel) ── */}
        <section className="border-t border-neutral-100 px-4 md:px-6 py-10">
          <div className="max-w-[720px] mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
              More from Health
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "The Rise of Plant-Based Bug Protection", tag: "Wellness" },
                { title: "What Pediatricians Say About DEET in 2026", tag: "Health" },
                { title: "Summer Safety Checklist for Families", tag: "Parenting" },
              ].map((article) => (
                <div key={article.title} className="group cursor-pointer">
                  <div className="aspect-[3/2] bg-neutral-100 rounded-lg mb-3" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                    {article.tag}
                  </span>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug mt-1 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NewsFooter />
      <NewsMobileCTA />
    </>
  );
}
