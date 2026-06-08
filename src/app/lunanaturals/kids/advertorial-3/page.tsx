import type { Metadata } from "next";
import Image from "next/image";
import { NewsNav } from "@/components/gruns/advertorial/NewsNav";
import { NewsFooter } from "@/components/gruns/advertorial/NewsFooter";
import { SponsoredBanner } from "@/components/gruns/advertorial/SponsoredBanner";
import { NewsMobileCTA } from "@/components/gruns/advertorial/NewsMobileCTA";
import { AsSeenIn } from "@/components/gruns/advertorial/AsSeenIn";
import { ReadingProgress } from "@/components/gruns/advertorial/ReadingProgress";

export const metadata: Metadata = {
  title:
    'This $0.08 "Sticker" Is Replacing Bug Spray in Daycares Across America | The Parent Report',
  description:
    "Parents are ditching DEET for a plant-based patch their kids actually beg to wear. Here's why it's going viral.",
};

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
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

function CheckBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="12" /><path d="M8 12.5l2.5 2.5 5-5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Social Post Card                                                   */
/* ------------------------------------------------------------------ */

function SocialPostCard({ name, handle, text }: { name: string; handle: string; text: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-bold text-neutral-500">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-800">{name}</p>
          <p className="text-xs text-neutral-400">{handle}</p>
        </div>
      </div>
      <p className="text-sm text-neutral-700 leading-relaxed">{text}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonial Card                                                   */
/* ------------------------------------------------------------------ */

function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-neutral-100 shadow-sm">
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-sm text-neutral-700 leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-neutral-800">{name}</span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 rounded-full px-2 py-0.5">
          <CheckBadge /> Verified
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Advertorial3Page() {
  return (
    <>
      <ReadingProgress />
      <NewsNav />
      <SponsoredBanner />

      <main className="bg-white">
        {/* ── Viral-Style Header ── */}
        <section className="pt-8 pb-10 md:pt-12 md:pb-14 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-600 bg-rose-50 px-2.5 py-1 rounded">
                Trending
              </span>
              <span className="text-xs text-neutral-400">June 6, 2026</span>
              <span className="text-xs text-neutral-400">4 min read</span>
            </div>

            <h1 className="text-3xl md:text-[44px] md:leading-[1.12] font-bold tracking-tight text-neutral-900 mb-4">
              This $0.08 &ldquo;Sticker&rdquo; Is Replacing Bug Spray in Daycares Across America
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-6">
              Parents are ditching DEET for a plant-based patch their kids actually beg to wear. Here&rsquo;s why it&rsquo;s going viral.
            </p>

            {/* Social sharing row */}
            <div className="flex items-center gap-5 text-neutral-400 mb-5">
              <button type="button" className="flex items-center gap-1.5 text-sm hover:text-neutral-700 transition-colors cursor-pointer">
                <ShareIcon /><span>2.4k</span>
              </button>
              <button type="button" className="flex items-center gap-1.5 text-sm hover:text-neutral-700 transition-colors cursor-pointer">
                <BookmarkIcon /><span>891</span>
              </button>
              <button type="button" className="flex items-center gap-1.5 text-sm hover:text-neutral-700 transition-colors cursor-pointer">
                <HeartIcon /><span>5.1k</span>
              </button>
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm font-bold">
                KW
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800">Katie Walsh</p>
                <p className="text-xs text-neutral-400">Parenting &amp; Products Editor</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero Image ── */}
        <section className="px-4 md:px-6 pb-2">
          <div className="max-w-[960px] mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/images/gruns/hero-daycare-playground-v2.png"
                alt="Diverse children running and laughing at a daycare playground, one with a colorful sticker patch on their shirt"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <AsSeenIn />

        {/* ── Opening Hook — Social Post Cards ── */}
        <section className="bg-neutral-50 border-y border-neutral-100 py-10 md:py-14 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <p className="text-base md:text-lg text-neutral-700 leading-[1.8] mb-6">
              It started in a parenting Facebook group. One mom posted a photo of her toddler proudly showing off a small sticker on his sleeve&nbsp;&mdash; and within hours, the comments exploded.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <SocialPostCard name="Jessica M." handle="@jessmomof3" text="OK, who else just ordered these? My daughter calls them her 'magic stickers' and hasn't had a single bite in TWO WEEKS." />
              <SocialPostCard name="David L." handle="@dadlife_david" text="We did soccer camp last week. Zero bites. ZERO. I'm never buying spray again." />
              <SocialPostCard name="Priya S." handle="@priya_mama" text="Finally something that actually works AND doesn't make my kid smell like a chemical plant. Take my money." />
            </div>
            <p className="text-base md:text-lg text-neutral-700 leading-[1.8]">
              Thousands of parents are swapping traditional bug spray for a tiny, plant-based sticker that kids actually want to wear. We dug into the trend to find out what&rsquo;s really going on.
            </p>
          </div>
        </section>

        {/* ── Listicle Body — 5 Numbered Sections ── */}

        {/* Section 01 */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto relative">
            <span className="absolute -top-2 left-0 text-6xl md:text-7xl font-extrabold text-neutral-100 select-none leading-none pointer-events-none">01</span>
            <div className="relative pt-10 md:pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                They go on clothes, not skin.
              </h3>
              <div className="rounded-xl overflow-hidden mb-6">
                <Image src="/images/gruns/kids-placing-sticker-v2.png" alt="Child peeling a dinosaur sticker patch and placing it on their yellow t-shirt" width={720} height={480} className="w-full h-auto object-cover" />
              </div>
              <p className="text-base text-neutral-700 leading-[1.8] mb-4">
                Unlike traditional bug sprays that coat your child&rsquo;s skin in DEET and other synthetic chemicals, Luna Naturals Patches stick directly to clothing. That means zero skin contact, zero greasy residue, and zero meltdowns at the front door.
              </p>
              <p className="text-base text-neutral-700 leading-[1.8] mb-4">
                Each patch uses a blend of citronella, lemongrass, and eucalyptus oils infused into a medical-grade adhesive. Pediatricians have noted that clothing-based delivery eliminates the risk of skin irritation&nbsp;&mdash; a common complaint with spray-on repellents, especially for toddlers with sensitive skin.
              </p>
              <p className="text-base text-neutral-500 leading-[1.8]">
                For parents of kids with eczema or contact dermatitis, it&rsquo;s been nothing short of a game-changer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02 */}
        <section className="bg-neutral-50 border-y border-neutral-100 py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto relative">
            <span className="absolute -top-2 left-0 text-6xl md:text-7xl font-extrabold text-neutral-200/60 select-none leading-none pointer-events-none">02</span>
            <div className="relative pt-10 md:pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Kids think they&rsquo;re stickers. This is genius.
              </h3>
              <p className="text-base text-neutral-700 leading-[1.8] mb-4">
                Ask any parent what the hardest part of bug spray is and they&rsquo;ll say the same thing: getting kids to stand still long enough to apply it. The crying. The running. The &ldquo;IT&rsquo;S IN MY EYES!&rdquo; moments.
              </p>
              <p className="text-base text-neutral-700 leading-[1.8] mb-6">
                Luna Naturals solved the compliance problem by making protection feel like play. Kids see the colorful patches and immediately want one. They choose where it goes. They show it off to friends.
              </p>
              <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl px-5 py-4 mb-6">
                <p className="text-lg font-semibold text-neutral-800 leading-snug">
                  &ldquo;My 4-year-old calls them her &lsquo;magic stickers.&rsquo; She literally reminds ME to put one on before we leave the house.&rdquo;
                </p>
                <p className="text-sm text-neutral-400 mt-2">&mdash; Jessica M., verified buyer</p>
              </blockquote>
              <p className="text-base text-neutral-700 leading-[1.8]">
                That behavioral flip is something no spray brand has ever achieved. And it&rsquo;s the single biggest reason these patches are spreading through daycare networks.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto relative">
            <span className="absolute -top-2 left-0 text-6xl md:text-7xl font-extrabold text-neutral-100 select-none leading-none pointer-events-none">03</span>
            <div className="relative pt-10 md:pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                One patch lasts 12 hours. Sprays last 2.
              </h3>
              <p className="text-base text-neutral-700 leading-[1.8] mb-6">
                This is the stat that stops parents mid-scroll. A single Luna Naturals patch provides up to 12 hours of continuous protection. Most DEET sprays? You&rsquo;re reapplying every two hours.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Luna Patches</p>
                  <p className="text-4xl md:text-5xl font-extrabold text-neutral-900">12h</p>
                  <p className="text-sm text-neutral-500 mt-1">per patch</p>
                </div>
                <div className="bg-neutral-50 rounded-xl p-5 text-center border border-neutral-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Typical Spray</p>
                  <p className="text-4xl md:text-5xl font-extrabold text-neutral-300">2h</p>
                  <p className="text-sm text-neutral-400 mt-1">per application</p>
                </div>
              </div>
              <p className="text-base text-neutral-700 leading-[1.8]">
                One patch covers an entire school day, a full soccer tournament, or a backyard birthday party from start to finish&nbsp;&mdash; without a single reapplication.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04 */}
        <section className="bg-neutral-50 border-y border-neutral-100 py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto relative">
            <span className="absolute -top-2 left-0 text-6xl md:text-7xl font-extrabold text-neutral-200/60 select-none leading-none pointer-events-none">04</span>
            <div className="relative pt-10 md:pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                The math makes DEET look absurd.
              </h3>
              <p className="text-base text-neutral-700 leading-[1.8] mb-6">
                Beyond the health advantages, the economics are hard to argue with:
              </p>
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-6">
                <div className="grid grid-cols-2 divide-x divide-neutral-100">
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">Luna Patches</p>
                    <p className="text-2xl font-extrabold text-neutral-900">$9.99</p>
                    <p className="text-sm text-neutral-500 mt-1">120 patches</p>
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <p className="text-3xl font-extrabold text-emerald-600">$0.08</p>
                      <p className="text-xs text-neutral-400">per patch</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Bug Spray</p>
                    <p className="text-2xl font-extrabold text-neutral-900">$15.00</p>
                    <p className="text-sm text-neutral-500 mt-1">per can / monthly</p>
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <p className="text-3xl font-extrabold text-neutral-300">$180</p>
                      <p className="text-xs text-neutral-400">per year</p>
                    </div>
                  </div>
                </div>
              </div>
              <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl px-5 py-4">
                <p className="text-base text-neutral-700 leading-relaxed">
                  &ldquo;I used to spend $15 a month on sprays that my kids hated. Switched to Luna Naturals and I&rsquo;ve spent $9.99 total in three months.&rdquo;
                </p>
                <p className="text-sm text-neutral-400 mt-2">&mdash; Jeremy K., father of two</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Section 05 */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto relative">
            <span className="absolute -top-2 left-0 text-6xl md:text-7xl font-extrabold text-neutral-100 select-none leading-none pointer-events-none">05</span>
            <div className="relative pt-10 md:pt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                50,000+ families already switched.
              </h3>
              <p className="text-base text-neutral-700 leading-[1.8] mb-6">
                This isn&rsquo;t a niche product anymore. Over 50,000 families have made the switch, and the reviews speak for themselves.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                <TestimonialCard name="Rebecca D." quote="My son has sensory issues and HATES spray. These patches changed our outdoor time completely. He puts them on himself now." />
                <TestimonialCard name="Marcus T." quote="We camp every weekend from May to September. Haven't bought a single can of OFF! this year. The patches just work." />
                <TestimonialCard name="Lisa R." quote="I bought these on a whim and now my entire mom's group orders them. Even the daycare asked what brand we use." />
              </div>
              <div className="bg-neutral-50 rounded-lg px-5 py-3 flex items-center justify-center gap-3 border border-neutral-100">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-sm font-semibold text-neutral-800">4.8 stars from 50,000+ reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Bottom Line ── */}
        <section className="bg-[#1a1a2e] py-14 md:py-20 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              The Bottom Line
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-xl p-6 bg-red-950/30 border border-red-400/20">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Another Summer of...</p>
                <ul className="space-y-3">
                  {["Chemical sprays on tiny hands", "Reapplying every 2 hours", "Tears at the front door", "Itchy, swollen bug bites", "$15/month on cans that run out"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-200/80">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="shrink-0 mt-0.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-6 bg-green-950/40 border border-green-400/20">
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-4">Or Switch to...</p>
                <ul className="space-y-3">
                  {["Fun stickers kids beg to wear", "12 hours of protection per patch", "Zero chemicals on skin", "Zero bites, zero tears", "$0.08 per patch, all summer"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-200/90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <a href="/lunanaturals/kids" className="inline-block bg-white text-[#1a1a2e] text-base font-bold rounded-lg px-8 py-4 hover:bg-neutral-100 transition cursor-pointer">
                Try Luna Naturals Kids Patches — 60% Off
              </a>
            </div>
          </div>
        </section>

        {/* ── Product Callout Card ── */}
        <section id="shop" className="bg-neutral-50 border-y border-neutral-100 py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 text-center mb-4">From Our Partner</p>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="bg-neutral-50 flex items-center justify-center p-6">
                  <Image src="/images/gruns/product-kids-patches.webp" alt="Luna Naturals Kids Patches product box" width={400} height={400} className="w-full max-w-[280px] h-auto object-contain" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">Luna Naturals Kids Patches</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}</div>
                    <span className="text-xs text-neutral-400">50,000+ reviews</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-extrabold text-neutral-900">$9.99</span>
                    <span className="text-base text-neutral-400 line-through">$24.99</span>
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 rounded px-2 py-0.5">60% OFF</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                      <span className="font-semibold text-neutral-700">89% sold</span>
                      <span>Limited stock</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: "89%" }} />
                    </div>
                  </div>
                  <a href="/lunanaturals/kids" className="block w-full py-3.5 bg-[#1a1a2e] text-white text-center text-sm font-bold rounded-lg hover:bg-[#2a2a4e] transition cursor-pointer mb-4">
                    Grab Luna Naturals — 60% Off
                  </a>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center">
                    {["DEET-free", "Pediatrician-approved", "30-day guarantee", "Free shipping"].map((badge) => (
                      <span key={badge} className="text-[11px] text-neutral-400 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Articles ── */}
        <section className="border-t border-neutral-100 px-4 md:px-6 py-10">
          <div className="max-w-[720px] mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "10 Chemical-Free Products Every Parent Should Know", tag: "Product Roundup", img: "/images/gruns/article-thumb-plant-v2.png" },
                { title: "Mosquito Season 2026: What Experts Are Predicting", tag: "Health", img: "/images/gruns/article-thumb-pediatrician-v2.png" },
                { title: "The Best Outdoor Gear for Kids Under 5", tag: "Parenting", img: "/images/gruns/article-thumb-summer-safety-v2.png" },
              ].map((article) => (
                <div key={article.title} className="group cursor-pointer">
                  <div className="relative aspect-[3/2] rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">{article.tag}</span>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug mt-1 group-hover:text-emerald-700 transition-colors">{article.title}</p>
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
