import {
  ShieldCheck,
  Leaf,
  Droplets,
  SprayCan,
  Star,
} from "lucide-react";

export const metadata = {
  title: "7 Reasons Parents Are Ditching Mosquito Spray for Good | Luna Naturals",
  description:
    "No DEET. No chemicals. No reapplying every hour. Here's why thousands of families are switching to mosquito repellent patches.",
};

/* ───── Listicle Item ───── */
function ListicleItem({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center gr-display text-2xl font-bold flex-shrink-0"
          style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
        >
          {number}
        </div>
        <h2 className="gr-display text-xl md:text-[26px] font-bold leading-tight" style={{ color: "var(--gr-dark)" }}>
          {title}
        </h2>
      </div>
      <div className="md:pl-[68px]">{children}</div>
    </section>
  );
}

/* ───── Testimonial ───── */
function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-xl border p-6 my-5" style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed italic mb-3" style={{ color: "var(--gr-sage)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{author}</p>
      <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>Verified Purchase</p>
    </div>
  );
}

/* ───── Highlight Box ───── */
function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 rounded-r-xl py-5 px-6 my-5" style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(217, 91, 47, 0.06)" }}>
      <p className="text-[15px] font-medium leading-relaxed" style={{ color: "var(--gr-green-dark)" }}>{children}</p>
    </div>
  );
}

/* ───── Image Placeholder ───── */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="aspect-[3/2] flex items-center justify-center text-sm font-medium border border-dashed rounded-xl my-5"
      style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
    >
      [ IMAGE COMING SOON &mdash; {label} ]
    </div>
  );
}

export default function ListiclePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--gr-cream)" }}>
      {/* ── Top Bar ── */}
      <div
        className="text-center py-2.5 px-4 text-xs font-semibold tracking-wider"
        style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
      >
        FREE SHIPPING ON ORDERS OVER $35 &mdash; USE CODE BUGFREE FOR 15% OFF
      </div>

      {/* ── Article Header ── */}
      <header className="max-w-[720px] mx-auto px-5 pt-10 md:pt-12">
        <span
          className="inline-block text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
          style={{ backgroundColor: "var(--gr-accent-light)", color: "var(--gr-green-dark)" }}
        >
          Summer Essentials
        </span>
        <h1 className="gr-display text-[26px] md:text-[40px] font-bold leading-[1.12] mb-4" style={{ color: "var(--gr-green-dark)" }}>
          7 Reasons Parents Are Switching to Mosquito Repellent Patches (and Ditching the Spray for Good)
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          No DEET. No chemicals. No reapplying every hour. Here&rsquo;s why thousands of families are making the switch.
        </p>
        <div className="flex items-center gap-4 pb-8 border-b flex-wrap" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            LN
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>Luna Naturals Team</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>June 5, 2026</p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>5 min read</p>
        </div>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[720px] mx-auto px-5 mt-8 mb-2">
        <p className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--gr-sage)" }}>
          As Seen In
        </p>
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap opacity-50">
          {["Forbes", "NBC", "Today", "People", "Women's Health", "CBS"].map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-bold tracking-wide whitespace-nowrap"
              style={{ color: "var(--gr-dark)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div className="max-w-[720px] mx-auto px-5 my-8">
        <div
          className="rounded-xl aspect-video flex items-center justify-center text-sm font-medium border border-dashed"
          style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
        >
          [ IMAGE COMING SOON &mdash; Kids playing outdoors with patches on clothing ]
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16 md:pb-16">
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          If you&rsquo;ve ever felt uneasy spraying DEET on your toddler&rsquo;s skin, you&rsquo;re not alone. Thousands of parents are switching to a simpler, cleaner way to keep mosquitoes away &mdash; no chemicals required.
        </p>
        <p className="mb-8" style={{ color: "var(--gr-sage)" }}>
          Here&rsquo;s why <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals patches</strong> are replacing the spray bottle in family households everywhere:
        </p>

        {/* ── Social Proof Bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl p-6 mb-4" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          {[
            { value: "10,000+", label: "Families Protected" },
            { value: "12 hrs", label: "Per Patch" },
            { value: "0", label: "Chemicals" },
            { value: "4.9", label: "Star Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gr-display text-2xl md:text-[28px] font-bold leading-none" style={{ color: "var(--gr-green-dark)" }}>
                {stat.value}
              </p>
              <p className="text-[11px] mt-1 uppercase tracking-wider font-medium" style={{ color: "var(--gr-sage)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── #1 ── */}
        <ListicleItem number={1} title="12 Hours of Protection — No Reapplication">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            One patch. Twelve hours. That&rsquo;s morning to bedtime from a single sticker. No setting timers to reapply. No carrying a bottle in your bag &ldquo;just in case.&rdquo;
          </p>
          <HighlightBox>Peel it on at breakfast. Forget about it until bath time.</HighlightBox>
        </ListicleItem>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #2 ── */}
        <ListicleItem number={2} title="Zero DEET, Zero Chemicals">
          <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Luna Naturals uses only plant-based ingredients &mdash; no DEET, no picaridin, no synthetic compounds. Just natural essential oils that mosquitoes hate and your kids won&rsquo;t even notice.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { Icon: ShieldCheck, label: "No DEET", detail: "100% chemical-free" },
              { Icon: Leaf, label: "Plant-Based", detail: "Natural essential oils" },
              { Icon: Droplets, label: "No Picaridin", detail: "Zero synthetics" },
              { Icon: SprayCan, label: "No Residue", detail: "No sticky film" },
            ].map(({ Icon, label, detail }) => (
              <div
                key={label}
                className="border rounded-xl p-5 text-center"
                style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "var(--gr-accent-light)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--gr-green-dark)" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{label}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--gr-sage)" }}>{detail}</p>
              </div>
            ))}
          </div>
        </ListicleItem>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #3 ── */}
        <ListicleItem number={3} title="It Goes on Clothing, Not Skin">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            This is the game-changer for parents of kids with sensitive skin or eczema. The patch sticks to shirts, hats, strollers, or backpacks &mdash; never directly on skin. No rashes. No reactions. No sticky residue.
          </p>
          <ImagePlaceholder label="Patch applied to child's shirt collar" />
        </ListicleItem>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #4 ── */}
        <ListicleItem number={4} title="Kids Actually Like Wearing Them">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Try getting a 3-year-old to stand still for a spray-down. Now try handing them a cool sticker for their shirt. Night and day. Kids think they&rsquo;re wearing a &ldquo;bug shield&rdquo; &mdash; and honestly, they are.
          </p>
          <Testimonial
            quote='My daughter runs to get her "magic sticker" every morning before school. She used to cry when I brought out the spray bottle.'
            author="Amanda T."
          />
        </ListicleItem>

        {/* ── Mid-article CTA ── */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-6"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(217, 91, 47, 0.25)" }}
        >
          <h3 className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>Ready to Try?</h3>
          <p className="text-sm mb-5" style={{ color: "var(--gr-sage)" }}>
            Join 10,000+ families who ditched the spray. 15% off your first order.
          </p>
          <a
            href="#"
            className="inline-block font-semibold text-sm tracking-wider px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP LUNA NATURALS PATCHES
          </a>
        </div>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #5 ── */}
        <ListicleItem number={5} title="Works for the Whole Family">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Same patch works for adults and kids. Stick one on your collar for an evening on the patio. Put one on the baby&rsquo;s stroller. One product, whole family protected.
          </p>
          <HighlightBox>
            Adults, kids, babies &mdash; one patch fits all. Stick it on any fabric surface and you&rsquo;re covered for 12 hours.
          </HighlightBox>
        </ListicleItem>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #6 ── */}
        <ListicleItem number={6} title='No Smell, No Mess, No "Close Your Eyes"'>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            No chemical cloud. No oily film. No &ldquo;don&rsquo;t touch your face for 10 minutes.&rdquo; The patch is virtually unscented to humans while being deeply unpleasant to mosquitoes.
          </p>
          <ImagePlaceholder label="Parent and child outdoors, no spray in sight" />
        </ListicleItem>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #7 ── */}
        <ListicleItem number={7} title="It Actually Works (10,000+ Families Agree)">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            This isn&rsquo;t a citronella bracelet from the dollar store. Luna Naturals patches are backed by thousands of 5-star reviews from families who&rsquo;ve tested them in backyards, campgrounds, tropical vacations, and everything in between.
          </p>
          <Testimonial
            quote="We did a full week in Costa Rica. My kids wore a patch every day. Zero bites. I'm never going back to spray."
            author="Sarah M."
          />
          <Testimonial
            quote="My son has eczema so I can't put repellent on his skin. These patches changed everything for us."
            author="Priya K."
          />
        </ListicleItem>

        {/* ── Bottom CTA ── */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            The Bottom Line
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(243, 235, 223, 0.7)" }}>
            You shouldn&rsquo;t have to choose between protecting your family from mosquitoes and protecting them from chemicals. With Luna Naturals, you don&rsquo;t.
          </p>
          <a
            href="#"
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            TRY LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(243, 235, 223, 0.5)" }}>
            Use code BUGFREE &bull; Free shipping on orders $35+
          </p>
        </div>
      </article>

      {/* ── Disclosure ── */}
      <div className="text-center text-xs py-6 border-t" style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}>
        <strong>Sponsored Content</strong> &mdash; This article is produced in partnership with Luna Naturals.
      </div>

      {/* ── Footer ── */}
      <footer className="py-8 px-5 text-center" style={{ backgroundColor: "var(--gr-cream-light)" }}>
        <p className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>LUNA NATURALS</p>
        <div className="flex justify-center gap-6 mb-4">
          {["Shop", "About", "FAQs", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--gr-sage)" }}>
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--gr-sage)" }}>&copy; 2026 Luna Naturals. All rights reserved.</p>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t p-3 pb-[max(12px,env(safe-area-inset-bottom))] md:hidden"
        style={{ backgroundColor: "var(--gr-cream)", borderColor: "var(--gr-cream-warm)" }}
      >
        <div className="flex items-center gap-3 max-w-[720px] mx-auto">
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals Patches</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>12-hour protection &bull; Chemical-free</p>
          </div>
          <a
            href="#"
            className="font-semibold text-sm px-7 py-3.5 rounded-lg whitespace-nowrap min-h-[48px] flex items-center"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}
