import type { Metadata } from "next";
import Image from "next/image";
import { NewsNav } from "@/components/gruns/advertorial/NewsNav";
import { NewsFooter } from "@/components/gruns/advertorial/NewsFooter";
import { SponsoredBanner } from "@/components/gruns/advertorial/SponsoredBanner";
import { NewsMobileCTA } from "@/components/gruns/advertorial/NewsMobileCTA";

export const metadata: Metadata = {
  title:
    "Why 50,000 Families Quietly Stopped Buying Bug Spray This Summer | The Parent Report",
  description:
    "A plant-based patch that goes on clothes — not skin — is outselling DEET sprays in online health stores. Here is what parents should know.",
};

/* ------------------------------------------------------------------ */
/*  Inline SVG helpers                                                 */
/* ------------------------------------------------------------------ */

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#059669" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="10" cy="10" r="10" fill="#D4D4D4" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
      <path d="M10 1.12l2.47 5.01 5.53.8-4 3.9.94 5.5L10 13.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.12z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

interface TextRow { label: string; luna: string; deet: string; citronella: string; kind: "text" }
interface IconRow { label: string; lunaOk: boolean; lunaNote: string; deetOk: boolean; deetNote: string; citronellaOk: boolean; citronellaNote: string; kind: "icon" }
type TableRow = TextRow | IconRow;

const comparisonRows: TableRow[] = [
  { label: "Cost per use", luna: "$0.08", deet: "$0.25", citronella: "$1.50+", kind: "text" },
  { label: "Duration", luna: "Up to 12 hrs", deet: "2-6 hrs", citronella: "While lit", kind: "text" },
  { label: "Touches skin?", lunaOk: true, lunaNote: "No", deetOk: false, deetNote: "Yes", citronellaOk: true, citronellaNote: "No", kind: "icon" },
  { label: "Kid-friendly?", lunaOk: true, lunaNote: "Yes", deetOk: false, deetNote: "Limited", citronellaOk: false, citronellaNote: "Fire risk", kind: "icon" },
  { label: "DEET-free?", lunaOk: true, lunaNote: "Yes", deetOk: false, deetNote: "No", citronellaOk: true, citronellaNote: "Yes", kind: "icon" },
];

function CellIcon({ ok, note }: { ok: boolean; note: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-1.5">
      {ok ? <CheckCircle /> : <CrossCircle />}
      <span className="text-xs font-medium">{note}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Advertorial2Page() {
  return (
    <>
      <NewsNav />
      <SponsoredBanner />

      <main className="flex-1 bg-white">
        {/* ── Editorial Header ── */}
        <section className="pt-10 pb-8 md:pt-14 md:pb-10 px-4 md:px-6">
          <div className="max-w-[720px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                Health Report
              </span>
              <span className="text-xs text-neutral-400">June 2026</span>
              <span className="text-xs text-neutral-400">5 min read</span>
            </div>

            <h1 className="text-[2rem] leading-[1.15] md:text-[2.75rem] md:leading-[1.1] font-bold tracking-tight text-neutral-900 mb-5">
              Why 50,000 Families Quietly Stopped Buying Bug Spray This Summer
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-neutral-500 mb-6">
              A plant-based patch that goes on clothes &mdash; not skin &mdash;
              is outselling DEET sprays in online health stores. Here is what
              parents should know.
            </p>

            <div className="flex items-center gap-3 pb-6 border-b border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm font-bold">
                JR
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800">Jessica Reynolds</p>
                <p className="text-xs text-neutral-400">Health &amp; Wellness Correspondent</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Lead Image ── */}
        <section className="px-4 md:px-6 pb-2">
          <div className="max-w-[960px] mx-auto">
            <figure>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src="/images/gruns/kids-lifestyle-nature.webp"
                  alt="Family spending time outdoors with plant-based mosquito repellent patches"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
              <figcaption className="mt-3 text-xs text-neutral-400 text-center italic">
                Parents across the US are replacing traditional bug sprays with plant-based repellent patches. Photo: Luna Naturals
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Article Body ── */}
        <article className="max-w-[720px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-neutral-900">
            Something is changing in the way American families prepare for summer. Across parenting forums, pediatric waiting rooms, and school Facebook groups, a quiet consensus is forming: parents are done spraying chemicals on their children.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            The numbers bear this out. DEET-based insect repellent sales have flatlined for the third consecutive year, while plant-based alternatives have grown 340% since 2023. And at the center of that shift is a product category most people had not heard of two years ago: wearable repellent patches.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4">
            The problem with how we have always done it
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            DEET &mdash; the active ingredient in most conventional bug sprays &mdash; was developed by the US Army in 1957. It works, but it was never designed for daily use on children. The American Academy of Pediatrics recommends concentrations no higher than 30% for children, and advises against use entirely for infants under two months old.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            For parents, the calculus is uncomfortable: protect your child from mosquito bites, or expose their skin to a synthetic chemical several times a day, every day, for months.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4">
            The patch approach: what the science says
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Repellent patches work on an entirely different principle than sprays. Instead of coating the skin with a chemical barrier, they release plant-derived essential oils &mdash; typically citronella, eucalyptus, and lavender &mdash; into the air around the wearer, creating a scent-based zone that mosquitoes avoid.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Because the patch adheres to clothing rather than skin, there is no dermal absorption. Studies have shown that this delivery method can reduce mosquito landings by up to 80% in field conditions &mdash; comparable to low-concentration DEET, without the trade-offs.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4">
            Luna Naturals: the brand leading the shift
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Founded in 2022, Luna Naturals has become the best-selling plant-based mosquito patch brand in the United States. Their Kids Patches &mdash; designed with playful sticker-style illustrations that children actually want to wear &mdash; have accumulated over 50,000 five-star reviews and earned a 4.8-star rating.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Each patch lasts up to 12 hours, costs roughly eight cents, and requires zero skin contact. Kids treat them like stickers &mdash; a detail that has turned application from a battle into a game.
          </p>

          {/* Mid-article lifestyle image */}
          <div className="my-10 relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/gruns/kids-lifestyle-stickers.webp"
              alt="Child wearing mosquito repellent patches as fun stickers on clothing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-6">
            What parents are saying
          </h3>

          {[
            { quote: "I used to chase my kids around the yard with a spray bottle every evening. Now they pick their own patches and stick them on themselves. It has completely changed our summer routine.", author: "Sarah M., Austin TX" },
            { quote: "My daughter has eczema and cannot tolerate any sprays. These patches go on her clothes and she has not had a single bite at camp this year.", author: "Jessica L., Portland OR" },
            { quote: "As a pediatrician and a mother, I appreciate that there is finally a repellent option I can recommend without caveats. No DEET, no skin contact, no fuss.", author: "Dr. Priya K., Chicago IL" },
          ].map((item) => (
            <blockquote key={item.author} className="border-l-4 border-emerald-500 pl-5 mb-8">
              <p className="text-base md:text-lg italic text-neutral-700 leading-relaxed mb-2">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-neutral-400">
                &mdash; {item.author}
              </footer>
            </blockquote>
          ))}
        </article>

        {/* ── Comparison Table ── */}
        <section className="bg-neutral-50 border-y border-neutral-100">
          <div className="max-w-[720px] mx-auto px-4 md:px-6 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 text-center">
              How the options compare
            </h3>
            <p className="text-neutral-500 text-center mb-8 text-sm">
              A side-by-side look at the most common repellent options heading into peak mosquito season.
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-500" />
                    <th className="py-3 px-4 text-center font-bold text-white bg-[#1a1a2e] rounded-t-lg">
                      Luna Naturals
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-neutral-600 bg-neutral-100">
                      DEET Spray
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-neutral-600 bg-neutral-100 rounded-tr-lg">
                      Citronella Candle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => {
                    const bg = i % 2 === 0 ? "bg-white" : "bg-neutral-50";
                    const isLast = i === comparisonRows.length - 1;
                    return (
                      <tr key={row.label}>
                        <td className={`py-3.5 px-4 font-medium text-neutral-800 ${bg} ${isLast ? "rounded-bl-lg" : ""}`}>
                          {row.label}
                        </td>
                        <td className={`py-3.5 px-4 text-center font-semibold text-neutral-800 bg-emerald-50/60 border-x border-emerald-100 ${isLast ? "rounded-b-lg border-b" : ""}`}>
                          {row.kind === "icon" ? <CellIcon ok={row.lunaOk} note={row.lunaNote} /> : row.luna}
                        </td>
                        <td className={`py-3.5 px-4 text-center text-neutral-500 ${bg}`}>
                          {row.kind === "icon" ? <CellIcon ok={row.deetOk} note={row.deetNote} /> : row.deet}
                        </td>
                        <td className={`py-3.5 px-4 text-center text-neutral-500 ${bg} ${isLast ? "rounded-br-lg" : ""}`}>
                          {row.kind === "icon" ? <CellIcon ok={row.citronellaOk} note={row.citronellaNote} /> : row.citronella}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Key Stats Strip ── */}
        <section className="bg-[#1a1a2e]">
          <div className="max-w-[960px] mx-auto px-4 md:px-6 py-10 md:py-14">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">50,000+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Verified Reviews</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <p className="text-2xl md:text-3xl font-extrabold text-white">4.8</p>
                  <div className="flex items-center gap-0.5 ml-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">120</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Patches Per Pack</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Callout Card ── */}
        <section id="shop" className="bg-neutral-50 border-y border-neutral-100">
          <div className="max-w-[720px] mx-auto px-4 md:px-6 py-12 md:py-16">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 text-center mb-4">
              From Our Partner
            </p>
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square bg-neutral-50">
                  <Image
                    src="/images/gruns/product-kids-patches.webp"
                    alt="Luna Naturals Kids Mosquito Repellent Patches packaging"
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    Luna Naturals Kids Patches
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-400">50,000+ reviews</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-extrabold text-neutral-900">$9.99</span>
                    <span className="text-lg text-neutral-400 line-through">$24.99</span>
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">60% OFF</span>
                  </div>
                  <a
                    href="/gruns/kids"
                    className="block w-full py-4 bg-[#1a1a2e] text-white text-center text-base font-bold rounded-lg hover:bg-[#2a2a4e] transition cursor-pointer mb-5"
                  >
                    Shop the Mosquito Season Sale
                  </a>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: <ShieldIcon />, label: "30-Day\nGuarantee" },
                      { icon: <TruckIcon />, label: "Free\nShipping" },
                      { icon: <RefreshIcon />, label: "Easy\nReturns" },
                    ].map((badge) => (
                      <div key={badge.label} className="flex flex-col items-center text-center gap-1">
                        {badge.icon}
                        <span className="text-[11px] font-medium text-neutral-400 leading-tight whitespace-pre-line">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Continued Article ── */}
        <article className="max-w-[720px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
            The economics of switching
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            A single can of name-brand DEET spray lasts a family of four roughly two weeks and costs $8-$12. Over a five-month mosquito season, that adds up to $80-$120 per year. Luna Naturals 120-count pouches retail at $24.99 &mdash; frequently on sale at $9.99 &mdash; giving the same family four to six months of coverage for a fraction of the price.
          </p>

          <div className="my-10 relative w-full aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/images/gruns/kids-lifestyle-pouch.webp"
              alt="Luna Naturals Kids Patches pouch being used outdoors by a family"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4">
            What the skeptics say
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Not everyone is sold. Entomologists point out that essential-oil repellents have a narrower effective radius than DEET, particularly in high-wind conditions. For hiking in heavily infested areas, a topical repellent may still be warranted.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            Luna Naturals is transparent about this. Their own usage guide recommends multiple patches for maximum coverage, and notes that the product is designed for everyday outdoor activity, not deep-woods expeditions.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4">
            The bottom line
          </h3>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700 mb-6">
            The shift from spray to patch is unlikely to reverse. Parents who switch rarely go back. Industry analysts project plant-based wearable repellents will capture 25% of the consumer insect repellent market by 2028, up from under 5% in 2023.
          </p>
          <p className="text-base md:text-lg leading-[1.8] text-neutral-700">
            For families heading into peak mosquito season, the question is no longer whether plant-based patches work. It is whether the DEET spray sitting in your garage is really the best you can do for your kids.
          </p>
        </article>

        {/* ── Closing CTA ── */}
        <section className="bg-neutral-50 border-t border-neutral-100 px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-[560px] mx-auto text-center">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Limited-Time Offer
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Ready to make the switch?
            </h2>
            <p className="text-base text-neutral-500 mb-8">
              Pediatrician-reviewed. 50,000+ five-star reviews. 30-day money-back guarantee.
            </p>
            <a
              href="/gruns/kids"
              className="inline-block px-10 py-4 bg-[#1a1a2e] text-white text-base font-bold rounded-lg hover:bg-[#2a2a4e] transition cursor-pointer"
            >
              Try Luna Naturals Risk-Free
            </a>
          </div>
        </section>

        {/* ── Related Articles ── */}
        <section className="border-t border-neutral-100 px-4 md:px-6 py-10">
          <div className="max-w-[720px] mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
              Related Stories
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
