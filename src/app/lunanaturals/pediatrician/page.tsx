import {
  ShieldCheck,
  Leaf,
  Baby,
  Rabbit,
  Star,
  Check,
  X,
} from "lucide-react";

export const metadata = {
  title:
    "Pediatricians Want Parents to Rethink the Bug Spray They Use on Kids — Here Are 7 Reasons Why | Luna Naturals",
  description:
    "What current guidance actually says about DEET, infants, and the plant-based alternative families are quietly switching to.",
};

const CART_URL =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

/* ───── Numbered Reason ───── */
function Reason({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center gr-display text-2xl font-bold flex-shrink-0"
          style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
        >
          {number}
        </div>
        <h2
          className="gr-display text-xl md:text-[26px] font-bold leading-tight"
          style={{ color: "var(--gr-dark)" }}
        >
          {title}
        </h2>
      </div>
      <div className="md:pl-[68px]">{children}</div>
    </section>
  );
}

/* ───── Testimonial ───── */
function Testimonial({ quote, author, avatar }: { quote: string; author: string; avatar: string }) {
  return (
    <div
      className="rounded-xl border p-6 my-5"
      style={{ borderColor: "var(--gr-cream-warm)", backgroundColor: "var(--gr-white)" }}
    >
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--gr-gold)] text-[var(--gr-gold)]" />
        ))}
      </div>
      <p className="text-[15px] leading-relaxed italic mb-3" style={{ color: "var(--gr-sage)" }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={author}
          loading="lazy"
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>{author}</p>
          <p className="text-xs font-medium" style={{ color: "var(--gr-green-mid)" }}>Verified Purchase</p>
        </div>
      </div>
    </div>
  );
}

/* ───── Guidance Callout ───── */
function GuidanceBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="border-l-4 rounded-r-xl py-5 px-6 my-5"
      style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(217, 91, 47, 0.06)" }}
    >
      <p className="text-[15px] font-medium leading-relaxed" style={{ color: "var(--gr-green-dark)" }}>
        {children}
      </p>
    </div>
  );
}

/* ───── Article Image ───── */
function ImagePlaceholder({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-5">
      <div className="aspect-[3/2] overflow-hidden rounded-xl">
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
      {caption ? (
        <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}

export default function PediatricianPage() {
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
          Pediatric Guidance
        </span>
        <h1
          className="gr-display text-[26px] md:text-[40px] font-bold leading-[1.12] mb-4"
          style={{ color: "var(--gr-green-dark)" }}
        >
          Pediatricians Want Parents to Rethink the Bug Spray They Use on Kids &mdash; Here Are 7 Reasons Why
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          What current guidance actually says about DEET, infants, and the plant-based alternative families are quietly switching to.
        </p>
        <div
          className="flex items-center gap-4 pb-8 border-b flex-wrap"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            MF
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>
              Megan Foster, Parenting Health Editor
            </p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>June 2026</p>
          </div>
          <p className="text-xs md:ml-auto" style={{ color: "var(--gr-sage)" }}>6 min read</p>
        </div>
      </header>

      {/* ── As Seen In ── */}
      <div className="max-w-[720px] mx-auto px-5 mt-8 mb-2">
        <p
          className="text-center text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--gr-sage)" }}
        >
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
        <div className="rounded-xl aspect-video overflow-hidden">
          <img
            src="/images/luna/ugc-mom.jpg"
            alt="Parent and child outdoors before applying repellent"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Standing in the bug-spray aisle with a fussy toddler on your hip, almost every parent has asked some version of the same quiet question:{" "}
          <strong style={{ color: "var(--gr-dark)" }}>
            &ldquo;Is the bug spray I use even safe for my kid?&rdquo;
          </strong>
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          It is a fair thing to wonder. The label is covered in fine print, the warnings feel vague, and the advice you remember from your own childhood may not match what pediatric guidance says today.
        </p>
        <p className="mb-8" style={{ color: "var(--gr-sage)" }}>
          So we went through what the CDC, the EPA, and pediatric guidance actually recommend. Here are{" "}
          <strong style={{ color: "var(--gr-dark)" }}>7 reasons</strong> parents are rethinking the repellent they reach for &mdash; and why so many are quietly switching to a plant-based option from{" "}
          <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong>.
        </p>

        {/* ── #1 ── */}
        <Reason number={1} title="The Guidance on Babies Is Stricter Than Most Parents Realize">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            This is the one that surprises people. Insect repellent is{" "}
            <strong style={{ color: "var(--gr-dark)" }}>not recommended for infants under 2 months old</strong> at all. For the youngest babies, the advice is physical protection instead: dressing them in lightweight long sleeves and draping a mosquito net over the stroller or carrier.
          </p>
          <GuidanceBox>
            For infants under 2 months, pediatric guidance points to mosquito netting and clothing &mdash; not spray. Knowing that one rule changes how a lot of parents shop.
          </GuidanceBox>
        </Reason>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #2 ── */}
        <Reason number={2} title="DEET Works — But It Isn't the Only Option">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            To be clear, DEET is effective, and pediatric guidance considers it safe for children older than 2 months when used as directed. The point is not that DEET is dangerous. The point is that it is no longer the{" "}
            <strong style={{ color: "var(--gr-dark)" }}>only</strong> recognized option.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            The CDC and EPA also recognize{" "}
            <strong style={{ color: "var(--gr-dark)" }}>Oil of Lemon Eucalyptus (OLE)</strong> as an effective, registered repellent active ingredient. That means parents who prefer a plant-based choice are not settling for something unproven &mdash; they are choosing a different recognized active. Luna Naturals builds its{" "}
            <strong style={{ color: "var(--gr-dark)" }}>Bug &amp; Tick Repellent Spray</strong> around exactly that.
          </p>
          <ImagePlaceholder
            src="/images/luna/spray-120-hero.webp"
            alt="Luna Naturals Bug & Tick Repellent Spray bottle"
          />
        </Reason>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #3 ── */}
        <Reason number={3} title="Kids' Skin Is Thinner and More Absorbent">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            A child&rsquo;s skin is thinner and more absorbent than an adult&rsquo;s, which is a big part of why so many parents prefer keeping repellent{" "}
            <strong style={{ color: "var(--gr-dark)" }}>off the skin entirely</strong> where they can.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            That is the appeal of Luna&rsquo;s{" "}
            <strong style={{ color: "var(--gr-dark)" }}>Mosquito Repellent Patches for Kids</strong>: they stick to clothing, not skin. A patch on the shirt, hat, or stroller does the work, and nothing has to be rubbed onto sensitive little arms.
          </p>
          <ImagePlaceholder
            src="/images/luna/hf-patch-closeup.webp"
            alt="Repellent patch stuck to a child's shirt sleeve"
            caption="Luna Naturals patches stick to clothing, not skin — and last up to 12 hours."
          />
        </Reason>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #4 ── */}
        <Reason number={4} title='"Natural" Is a Marketing Word — Look at the Active Ingredient'>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Here is the trap. &ldquo;Natural&rdquo; on the front of a bottle means almost nothing on its own. What actually matters is the{" "}
            <strong style={{ color: "var(--gr-dark)" }}>recognized active ingredient</strong> on the back.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Plain citronella, the kind in a lot of &ldquo;natural&rdquo; sprays, tends to wear off in around 30 minutes. A product built on a recognized active like{" "}
            <strong style={{ color: "var(--gr-dark)" }}>OLE</strong> is a different thing entirely. When you compare options, read past the buzzword and check what is doing the protecting.
          </p>
          <GuidanceBox>
            Don&rsquo;t buy the word on the front of the bottle. Buy the active ingredient on the back &mdash; a recognized one like OLE, not citronella that fades in half an hour.
          </GuidanceBox>
        </Reason>

        {/* ── Mid-article CTA ── */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-6"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(217, 91, 47, 0.25)" }}
        >
          <h3 className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>
            Prefer a Plant-Based Active?
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--gr-sage)" }}>
            Luna Naturals is DEET-free and built on Oil of Lemon Eucalyptus. Join 10,000+ families already protected.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-semibold text-sm tracking-wider px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}
          >
            SHOP LUNA NATURALS
          </a>
          <p className="text-xs mt-4" style={{ color: "var(--gr-sage)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #5 ── */}
        <Reason number={5} title="Over-Spraying Is the Hidden Risk">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Anyone who has tried to spray a squirming preschooler knows how it goes. The kid moves, you miss, you spray again &ldquo;just to be sure.&rdquo; The result is often far more product on a child than anyone intended.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            A pre-measured patch sidesteps that problem completely. There is nothing to over-apply &mdash;{" "}
            <strong style={{ color: "var(--gr-dark)" }}>you peel one, stick it on clothing, and you are done.</strong> Even with the spray, a single measured application beats the panicked re-spray cycle.
          </p>
        </Reason>

        {/* ── Comparison Table ── */}
        <h3 className="gr-display text-xl font-bold mt-8 mb-4" style={{ color: "var(--gr-dark)" }}>
          Luna vs. DEET Spray vs. &ldquo;Natural&rdquo; Citronella Spray
        </h3>
        <div
          className="overflow-x-auto rounded-xl border mb-10"
          style={{ borderColor: "var(--gr-cream-warm)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">
                  &ldquo;Natural&rdquo; Citronella
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Active ingredient", "OLE (recognized)", "DEET", "Citronella"],
                  ["DEET-free", "check", "cross", "Varies"],
                  ["Touches skin", "No (check)", "Yes", "Yes"],
                  ["Protection duration", "Up to 6 hrs spray / 12 hrs patch", "4-8 hours", "~30 min"],
                  ["Reapplication", "Less often (check)", "Every 4-8 hrs", "Every 30 min"],
                  ["Pediatric-minded", "check", "As directed", "Wears off fast"],
                ] as const
              ).map(([label, luna, deet, natural], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>{label}</td>
                  <td className="py-3 px-4">
                    {luna === "check" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : luna.includes("(check)") ? (
                      <span
                        className="font-semibold flex items-center gap-1"
                        style={{ color: "var(--gr-green-mid)" }}
                      >
                        <Check className="w-4 h-4" /> {luna.replace(" (check)", "")}
                      </span>
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>{luna}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "cross" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4" style={{ color: "var(--gr-sage)" }}>{natural}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── #6 ── */}
        <Reason number={6} title="Reapplication Is Where Protection Fails">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            The most common reason kids get bitten is simple: protection wears off and nobody reapplied in time. A &ldquo;natural&rdquo; citronella spray that fades in 30 to 60 minutes is asking to be forgotten on a busy afternoon at the park.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Luna&rsquo;s OLE spray lasts up to{" "}
            <strong style={{ color: "var(--gr-dark)" }}>6 hours</strong>, and the clothing patches last up to{" "}
            <strong style={{ color: "var(--gr-dark)" }}>12 hours</strong>. That is the difference between covered all afternoon and chasing a spray bottle every half hour.
          </p>
          <ImagePlaceholder
            src="/images/luna/hf-family-1.webp"
            alt="Family enjoying a long outdoor day together"
          />
        </Reason>

        <hr style={{ borderColor: "var(--gr-cream-warm)" }} />

        {/* ── #7 ── */}
        <Reason number={7} title="The Switch Pediatric-Minded Parents Are Making">
          <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            Put it together and the pattern is clear. Parents who care about following current guidance are reaching for{" "}
            <strong style={{ color: "var(--gr-dark)" }}>DEET-free, plant-based Luna Naturals</strong>: an OLE spray for measured coverage and clothing patches that keep repellent off the skin.
          </p>
          <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            It is gentle enough for babies, kids, and pets, made without DEET or parabens, and{" "}
            <strong style={{ color: "var(--gr-dark)" }}>Leaping Bunny certified cruelty-free</strong>. Loved by hikers, parents, festival junkies, and porch pros &mdash; over 10,000 families and a 4.9 out of 5 rating.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-2">
            {[
              { Icon: ShieldCheck, label: "DEET-Free", detail: "No DEET, no parabens" },
              { Icon: Leaf, label: "Plant-Based", detail: "Built on OLE" },
              { Icon: Baby, label: "Gentle", detail: "Babies, kids, pets" },
              { Icon: Rabbit, label: "Cruelty-Free", detail: "Leaping Bunny" },
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
        </Reason>

        {/* ── True-Facts Strip ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 rounded-xl p-6 my-8"
          style={{ backgroundColor: "var(--gr-cream-light)" }}
        >
          {[
            { value: "DEET-free", label: "Formula" },
            { value: "Plant-based", label: "OLE active" },
            { value: "10,000+", label: "Families" },
            { value: "4.9", label: "Star Rating" },
            { value: "Leaping Bunny", label: "Cruelty-Free" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="gr-display text-lg md:text-xl font-bold leading-tight"
                style={{ color: "var(--gr-green-dark)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[11px] mt-1 uppercase tracking-wider font-medium"
                style={{ color: "var(--gr-sage)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <h2
          className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-6 leading-tight"
          style={{ color: "var(--gr-green-dark)" }}
        >
          What Parents Are Saying
        </h2>
        <Testimonial
          quote="I'd been nervous about spraying my 1-year-old, so I loved that the patches stick to her clothes instead of her skin. We did a whole day at the lake bite-free."
          author="Renee H."
          avatar="/images/luna/reviewer-megan.webp"
        />
        <Testimonial
          quote="I finally read past the word 'natural' and started checking the active ingredient. Switched the whole family to the OLE spray and the difference at dusk is night and day."
          author="Daniel P."
          avatar="/images/luna/reviewer-jenny.webp"
        />
        <Testimonial
          quote="My son has reactive skin, so keeping repellent off his body was the whole reason we tried this. DEET-free, plant-based, and it actually lasts. We're committed now."
          author="Aisha M."
          avatar="/images/luna/reviewer-elle.webp"
        />

        {/* ── Final CTA ── */}
        <div
          className="rounded-2xl p-10 md:p-12 text-center my-12"
          style={{ backgroundColor: "var(--gr-green-dark)" }}
        >
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            The Bottom Line
          </h2>
          <p
            className="mb-7 text-base max-w-[480px] mx-auto"
            style={{ color: "rgba(243, 235, 223, 0.7)" }}
          >
            You can follow the guidance and still keep bites away. DEET-free, plant-based Luna Naturals gives families a recognized active without the spray-down struggle &mdash; effective, easy-to-use protection for every adventure.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(243, 235, 223, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
          <p className="text-xs mt-6" style={{ color: "rgba(243, 235, 223, 0.55)" }}>
            P.S. Mosquito season has families stocking up fast &mdash; the 3-pack bundle is the one most parents grab before their next trip.
          </p>
        </div>

        {/* ── Editor's Note ── */}
        <p className="text-xs leading-relaxed mt-2" style={{ color: "var(--gr-sage)" }}>
          Editor&rsquo;s note: This article references general public guidance from the CDC and EPA on insect repellents. The CDC advises that products containing Oil of Lemon Eucalyptus not be used on children under 3 years old. Always read product labels and follow directions for your child&rsquo;s age. This article is informational and is not medical advice.
        </p>
      </article>

      {/* ── Disclosure ── */}
      <div
        className="text-center text-xs py-6 border-t"
        style={{ color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
      >
        <strong>Sponsored Content</strong> &mdash; This article is produced in partnership with Luna Naturals.
      </div>

      {/* ── Footer ── */}
      <footer className="py-8 px-5 text-center" style={{ backgroundColor: "var(--gr-cream-light)" }}>
        <p className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>LUNA NATURALS</p>
        <div className="flex justify-center gap-6 mb-4">
          {["Shop", "About", "FAQs", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: "var(--gr-sage)" }}
            >
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
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>DEET-free &bull; Plant-based protection</p>
          </div>
          <a
            href={CART_URL}
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
