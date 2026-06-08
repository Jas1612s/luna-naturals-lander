import {
  ShieldCheck,
  Leaf,
  Clock,
  Baby,
  Star,
  Check,
  X,
} from "lucide-react";

export const metadata = {
  title: "I Stopped Spraying My Kids With DEET — Here's What I Use Instead | Luna Naturals",
  description:
    "How one mom discovered a chemical-free mosquito patch that lasts 12 hours and changed summer forever.",
};

/* ───── Testimonial Card ───── */
function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-xl border border-[var(--gr-cream-warm)] bg-[var(--gr-white)] p-6">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed text-[var(--gr-sage)] italic mb-3">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm font-semibold text-[var(--gr-dark)]">{author}</p>
      <p className="text-xs font-medium text-[var(--gr-green-mid)]">Verified Purchase</p>
    </div>
  );
}

/* ───── Step Card ───── */
function StepCard({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="text-center px-3 py-5">
      <div className="w-12 h-12 rounded-full bg-[var(--gr-green-dark)] text-[var(--gr-cream)] flex items-center justify-center text-xl font-bold mx-auto mb-3">
        {number}
      </div>
      <h3 className="gr-display text-lg font-bold text-[var(--gr-dark)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--gr-sage)] leading-snug">{desc}</p>
    </div>
  );
}

export default function AdvertorialPage() {
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
          Parent Tested
        </span>
        <h1 className="gr-display text-3xl md:text-[42px] font-bold leading-[1.12] mb-4" style={{ color: "var(--gr-green-dark)" }}>
          I Stopped Spraying My Kids With DEET &mdash; Here&rsquo;s What I Use Instead
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          How one mom discovered a chemical-free mosquito patch that lasts 12 hours &mdash; and changed summer forever.
        </p>
        <div className="flex items-center gap-4 pb-8 border-b flex-wrap" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            SM
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>Sarah Mitchell</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>June 5, 2026</p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>6 min read</p>
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
          [ IMAGE COMING SOON &mdash; Family outdoors, kids playing at dusk ]
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Last summer, I watched my 4-year-old scratch a mosquito bite until it bled. Again.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I&rsquo;d been using the same drugstore spray my mom used on me &mdash; the one that smells like a chemistry lab and leaves that sticky film on your skin. You know the one. I&rsquo;d hold my breath while spraying it on my kids, thinking{" "}
          <strong style={{ color: "var(--gr-dark)" }}>&ldquo;this can&rsquo;t be good for them.&rdquo;</strong>
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>Turns out, I was right to worry.</p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          DEET &mdash; the active ingredient in most repellents &mdash; is a synthetic chemical that&rsquo;s been raising concerns among parents for years. And the alternatives? Citronella candles that do nothing. &ldquo;Natural&rdquo; sprays that wear off in 30 minutes. Mosquito nets that make your backyard look like a field hospital.
        </p>

        {/* Pull Quote */}
        <div className="border-l-4 rounded-r-xl py-6 px-7 my-10" style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(217, 91, 47, 0.06)" }}>
          <p className="text-lg font-medium leading-relaxed italic" style={{ color: "var(--gr-green-dark)" }}>
            &ldquo;I was stuck choosing between protecting my kids from bites or protecting them from chemicals. That shouldn&rsquo;t be a choice any parent has to make.&rdquo;
          </p>
        </div>

        {/* Discovery */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Then a Friend Handed Me a Small Green Patch
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          At soccer practice, another mom noticed me wrestling with a spray bottle and tossed me a small pouch. &ldquo;Just stick it on their shirt,&rdquo; she said. &ldquo;It lasts all day.&rdquo;
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I was skeptical. A sticker? For mosquitoes? But my daughter thought it was fun (she called it her &ldquo;bug shield&rdquo;), so I tried it.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          That evening &mdash; no bites. The next day at the park &mdash; no bites. A full weekend camping trip &mdash;{" "}
          <strong style={{ color: "var(--gr-dark)" }}>not a single bite on either kid.</strong>
        </p>

        {/* Inline Image */}
        <div className="my-10 rounded-xl overflow-hidden">
          <div
            className="aspect-[4/3] flex items-center justify-center text-sm font-medium border border-dashed rounded-xl"
            style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
          >
            [ IMAGE COMING SOON &mdash; Close-up of patch on child&rsquo;s shirt sleeve ]
          </div>
          <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>
            Luna Naturals patches stick to clothing, not skin &mdash; safe for even the most sensitive children.
          </p>
        </div>

        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The patch was from <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong>. No DEET. No chemicals. Just natural plant-based ingredients in a simple peel-and-stick patch that protects for{" "}
          <strong style={{ color: "var(--gr-dark)" }}>12 full hours</strong>.
        </p>

        {/* How It Works */}
        <div className="rounded-2xl p-8 md:p-10 my-12" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <h2 className="gr-display text-2xl font-bold text-center mb-1" style={{ color: "var(--gr-green-dark)" }}>
            Three Steps. Zero Chemicals.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-7">
            <StepCard number={1} title="Peel" desc="Open the resealable pouch and peel off a patch" />
            <StepCard number={2} title="Stick" desc="Place on clothing — shirt, hat, stroller, backpack" />
            <StepCard number={3} title="Play" desc="12 hours of protection, no reapplication needed" />
          </div>
        </div>

        {/* What's in it */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What&rsquo;s Actually in It?
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Luna Naturals uses a blend of plant-based essential oils &mdash; the same ingredients that have kept mosquitoes away for centuries &mdash; delivered through a slow-release patch. No DEET. No picaridin. No synthetic chemicals touching your child&rsquo;s skin.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          And because the patch goes on <strong style={{ color: "var(--gr-dark)" }}>clothing, not skin</strong>, even the most sensitive kids can wear them comfortably.
        </p>

        {/* Comparison Table */}
        <h3 className="gr-display text-xl font-bold mt-8 mb-4" style={{ color: "var(--gr-dark)" }}>
          Luna Naturals vs. Traditional Repellents
        </h3>
        <div className="overflow-x-auto rounded-xl border mb-10" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">&ldquo;Natural&rdquo; Spray</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Protection Duration", "12 hours", "4-8 hours", "30 min - 2 hrs"],
                ["Chemical-Free", "check", "cross", "Varies"],
                ["Touches Skin", "No (check)", "Yes (cross)", "Yes (cross)"],
                ["Reapplication", "None (check)", "Every 4-8 hrs", "Every 30 min"],
                ["Kid-Friendly", "Fun sticker", "Spray struggle", "Spray struggle"],
                ["Sensitive Skin Safe", "check", "Irritation risk", "Varies"],
              ] as const).map(([label, luna, deet, natural], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>{label}</td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : luna.includes("(check)") ? (
                      <span className="font-semibold flex items-center gap-1" style={{ color: "var(--gr-green-mid)" }}>
                        <Check className="w-4 h-4" /> {luna.replace(" (check)", "")}
                      </span>
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>{luna}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : deet.includes("(cross)") ? (
                      <span className="text-red-600 font-semibold flex items-center gap-1">
                        <X className="w-4 h-4" /> {deet.replace(" (cross)", "")}
                      </span>
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4" style={{ color: "var(--gr-sage)" }}>
                    {natural.includes("(cross)") ? (
                      <span className="text-red-600 font-semibold flex items-center gap-1">
                        <X className="w-4 h-4" /> {natural.replace(" (cross)", "")}
                      </span>
                    ) : natural}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stakes: Failure */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What Happens If You Don&rsquo;t Switch?
        </h2>
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "rgba(220, 38, 38, 0.04)", border: "1px solid rgba(220, 38, 38, 0.15)" }}>
          <h3 className="gr-display text-lg font-bold text-red-800 mb-3">Another summer of...</h3>
          <ul className="space-y-2.5">
            {[
              "Itchy, swollen bites on tiny arms and legs",
              "Spraying chemicals you can't pronounce on your children",
              "Reapplying every hour (and still finding bites)",
              "Skipping outdoor time because \"the mosquitoes are bad tonight\"",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--gr-sage)" }}>
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stakes: Success */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What Happens When You Do?
        </h2>
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "rgba(58, 68, 40, 0.06)", border: "1px solid rgba(58, 68, 40, 0.15)" }}>
          <h3 className="gr-display text-lg font-bold mb-3" style={{ color: "var(--gr-green-dark)" }}>
            Imagine this summer instead...
          </h3>
          <ul className="space-y-2.5">
            {[
              "Kids running outside at dusk without a single bite",
              "No spray, no tears, no chemical guilt",
              "Camping trips where everyone sleeps bite-free",
              "A solution so easy your kids put it on themselves",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--gr-dark)", opacity: 0.8 }}>
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--gr-green-mid)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Inline Image */}
        <div className="my-10 rounded-xl overflow-hidden">
          <div
            className="aspect-[16/10] flex items-center justify-center text-sm font-medium border border-dashed rounded-xl"
            style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
          >
            [ IMAGE COMING SOON &mdash; Happy family on camping trip ]
          </div>
        </div>

        {/* Testimonials */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-6 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Over 10,000 Families Have Already Made the Switch
        </h2>
        <div className="grid gap-4 mb-12">
          <TestimonialCard quote="We did a full week in Costa Rica. My kids wore a patch every day. Zero bites. I'm never going back to spray." author="Sarah M." />
          <TestimonialCard quote="My son has eczema so I can't put repellent on his skin. These patches changed everything for us." author="Priya K." />
          <TestimonialCard quote="We used to avoid evening walks entirely. Now we just stick a patch on and go. Life-changing for our family." author="Jamie R." />
        </div>

        {/* Main CTA */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            Ready to Ditch the Chemicals?
          </h2>
          <p className="mb-7 text-base" style={{ color: "rgba(243, 235, 223, 0.7)" }}>
            Peel. Stick. Play. 12 hours of chemical-free protection for your whole family.
          </p>
          <a
            href="#"
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS PATCHES
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(243, 235, 223, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
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
