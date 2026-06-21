import { Star, Check, X } from "lucide-react";

export const metadata = {
  title: "It Melts Plastic. And We Spray It on Our Kids. | Luna Naturals",
  description:
    "I read the back of the bug spray bottle one night. The next morning I threw it out. Here's the DEET-free patch and spray I use now.",
};

const CART_URL =
  "https://lunanaturals.co/cart/clear?return_to=%2Fcart%2F44464261660851%3A3%3Fdiscount%3D3-pack";

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

/* ───── Image Placeholder ───── */
function ImagePlaceholder({ label, ratio = "aspect-[4/3]", caption }: { label: string; ratio?: string; caption?: string }) {
  return (
    <div className="my-10 rounded-xl overflow-hidden">
      <div
        className={`${ratio} flex items-center justify-center text-sm font-medium border border-dashed rounded-xl text-center px-4`}
        style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
      >
        [ IMAGE COMING SOON &mdash; {label} ]
      </div>
      {caption ? (
        <p className="text-xs text-center mt-2.5" style={{ color: "var(--gr-sage)" }}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}

export default function MeltsPlasticPage() {
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
          One Mom&rsquo;s Story
        </span>
        <h1 className="gr-display text-3xl md:text-[42px] font-bold leading-[1.12] mb-4" style={{ color: "var(--gr-green-dark)" }}>
          It Melts Plastic. And We Spray It on Our Kids.
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--gr-sage)" }}>
          I read the back of the bug spray bottle one night &mdash; really read it. The next morning I threw it out. Here&rsquo;s what I use now.
        </p>
        <div className="flex items-center gap-4 pb-8 border-b flex-wrap" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold"
            style={{ backgroundColor: "var(--gr-cream-warm)", color: "var(--gr-green-dark)" }}
          >
            CR
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--gr-dark)" }}>Caitlin Reyes</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>June 2026</p>
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
          className="rounded-xl aspect-video flex items-center justify-center text-sm font-medium border border-dashed text-center px-4"
          style={{ backgroundColor: "var(--gr-cream-light)", color: "var(--gr-sage)", borderColor: "var(--gr-cream-warm)" }}
        >
          [ IMAGE COMING SOON &mdash; Bug spray bottle on a kitchen counter at night, label turned to the front ]
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-[720px] mx-auto px-5 pb-16">
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          It was almost ten o&rsquo;clock. The kids were finally asleep, and I was wiping down the kitchen counter when I picked up the can of bug spray we&rsquo;d used on the back deck that evening.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I don&rsquo;t know why I turned it over. I&rsquo;d used this stuff my whole life. But that night I actually read the back &mdash; all of it. And one line stopped me cold:{" "}
          <strong style={{ color: "var(--gr-dark)" }}>&ldquo;May damage plastics, leather, watch crystals, and painted or varnished surfaces.&rdquo;</strong>
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I read it twice. Then I walked over to the bin by the door and looked at my daughter&rsquo;s sunglasses &mdash; the little pink ones she wears all summer. The lenses had gone cloudy and slightly tacky weeks ago. I&rsquo;d assumed she&rsquo;d scratched them. She hadn&rsquo;t. It was the spray. The same residue had hazed the clear plastic buckle on the stroller too.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          And I&rsquo;d been misting it onto her arms and legs twice a day.
        </p>

        {/* Pull Quote */}
        <div className="border-l-4 rounded-r-xl py-6 px-7 my-10" style={{ borderColor: "var(--gr-accent)", backgroundColor: "rgba(232, 108, 44, 0.07)" }}>
          <p className="text-lg font-medium leading-relaxed italic" style={{ color: "var(--gr-green-dark)" }}>
            &ldquo;If it can cloud the plastic on her sunglasses, what is it, exactly? That was the question I couldn&rsquo;t un-ask.&rdquo;
          </p>
        </div>

        {/* So I looked it up */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          So I Looked It Up
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Here&rsquo;s where I want to be fair, because I went down a rabbit hole and I don&rsquo;t want to pretend I found something I didn&rsquo;t. The active ingredient was DEET.{" "}
          <strong style={{ color: "var(--gr-dark)" }}>DEET is registered with the EPA, it has been studied for decades, and the agencies that review it consider it effective and safe when you use it as directed.</strong>{" "}
          Most people use it without any problem at all. I&rsquo;m not here to tell you it&rsquo;s poison or that it&rsquo;s banned, because that simply isn&rsquo;t true.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          But the plastic thing isn&rsquo;t a myth either. It&rsquo;s printed right on the label because it&rsquo;s real: DEET is a solvent strong enough to degrade certain plastics, vinyl, rayon and spandex, watch crystals, and varnished finishes. That&rsquo;s why it eats sunglasses and clouds buckles.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          And that&rsquo;s the part I sat with. It works. It&rsquo;s approved. And it&rsquo;s also a synthetic chemical strong enough to do that to a stroller clip. For myself on a fishing trip, fine. But personally?{" "}
          <strong style={{ color: "var(--gr-dark)" }}>I just didn&rsquo;t love spraying it on my three-year-old&rsquo;s skin and clothes every single day.</strong>{" "}
          That was my choice to make, and that night I made it.
        </p>

        {/* The alternatives were worse */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          And the Alternatives Were Worse
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          If you&rsquo;ve ever tried to go the &ldquo;natural&rdquo; route, you already know the letdown. I bought the citronella candles. We lit four of them on the deck and the mosquitoes flew right through the smoke like it was an invitation.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          Then I tried a couple of the plant-based sprays from the drugstore. They smelled nice for about half an hour &mdash; and then they quit. By the time we&rsquo;d finished dinner outside, the bites were already starting. I&rsquo;d trade one problem for another and end up reapplying every thirty minutes anyway.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          I genuinely thought my only honest options were &ldquo;a chemical that works&rdquo; or &ldquo;something gentle that doesn&rsquo;t.&rdquo; I&rsquo;d more or less given up on there being a third one.
        </p>

        {/* The discovery */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          Then a Mom at the Park Handed Me a Patch
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          A few weeks later we were at the playground near dusk &mdash; the worst time, the kids never want to leave &mdash; and I was already swatting. The mom on the next bench saw me digging through my bag and held out a little green pouch. &ldquo;Stick one on her shirt,&rdquo; she said. &ldquo;It&rsquo;s plant-based. It doesn&rsquo;t even touch her skin.&rdquo;
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          It was from a brand called <strong style={{ color: "var(--gr-dark)" }}>Luna Naturals</strong>. I peeled one off and pressed it onto the collar of my daughter&rsquo;s t-shirt, fully expecting nothing.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          We stayed another forty minutes. Then we went home, ate, and sat back out on the deck until bedtime. The next morning I checked both kids the way I always do now &mdash;{" "}
          <strong style={{ color: "var(--gr-dark)" }}>not one bite.</strong> So I ordered our own the same night, and that first weekend &mdash; a whole Saturday at the lake &mdash; came and went without a single welt on either of them.
        </p>

        <ImagePlaceholder
          label="Close-up of a Luna Naturals patch pressed onto a child's t-shirt collar"
          caption="The patch sticks to clothing, not skin — so it never goes on my daughter directly."
        />

        {/* What's actually in it */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What&rsquo;s Actually in It
        </h2>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          This was the part that finally let me exhale. Luna Naturals is{" "}
          <strong style={{ color: "var(--gr-dark)" }}>DEET-free and plant-based</strong>. The spray is built around{" "}
          <strong style={{ color: "var(--gr-dark)" }}>Oil of Lemon Eucalyptus</strong> with citronella, lemongrass, and eucalyptus, and it protects for up to six hours. No DEET, no parabens.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          And the part I use most &mdash; the <strong style={{ color: "var(--gr-dark)" }}>Patches for Kids</strong> &mdash; stick to clothing, never skin, and last up to twelve hours. So the thing keeping the bugs off my daughter isn&rsquo;t soaking into her at all. It&rsquo;s on her sleeve.
        </p>
        <p className="mb-6" style={{ color: "var(--gr-sage)" }}>
          The brand is Leaping Bunny certified, gentle enough for babies, kids, and pets, and it carries a 4.9 out of 5 across more than 10,000 families. After the citronella-candle circus, the bar was on the floor &mdash; and this cleared it easily.
        </p>

        {/* Comparison Table */}
        <h3 className="gr-display text-xl font-bold mt-8 mb-4" style={{ color: "var(--gr-dark)" }}>
          What I Was Actually Choosing Between
        </h3>
        <div className="overflow-x-auto rounded-xl border mb-10" style={{ borderColor: "var(--gr-cream-warm)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "var(--gr-green-dark)", color: "var(--gr-cream)" }}>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs"></th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Luna Naturals</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">DEET Spray</th>
                <th className="text-left py-3 px-4 font-semibold tracking-wide text-xs">Citronella</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Safe on plastics & synthetics", "yes", "no", "Generally yes"],
                ["DEET-free", "yes", "no", "Yes"],
                ["Touches skin", "No (yes)", "Yes (no)", "N/A (candle)"],
                ["Protection duration", "Up to 6–12 hrs", "4–8 hrs", "Little to none"],
                ["Reapplication", "Patch lasts 12 hrs", "Every 4–8 hrs", "Constant / ineffective"],
                ["Plant-based", "yes", "no", "Yes"],
              ] as const).map(([label, luna, deet, third], i) => (
                <tr key={i} style={i % 2 !== 0 ? { backgroundColor: "var(--gr-cream-light)" } : {}}>
                  <td className="py-3 px-4 font-medium" style={{ color: "var(--gr-dark)" }}>{label}</td>
                  <td className="py-3 px-4">
                    {luna === "yes" ? (
                      <Check className="w-4 h-4" style={{ color: "var(--gr-green-mid)" }} />
                    ) : luna.includes("(yes)") ? (
                      <span className="font-semibold flex items-center gap-1" style={{ color: "var(--gr-green-mid)" }}>
                        <Check className="w-4 h-4" /> {luna.replace(" (yes)", "")}
                      </span>
                    ) : (
                      <span className="font-semibold" style={{ color: "var(--gr-green-mid)" }}>{luna}</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {deet === "no" ? (
                      <X className="w-4 h-4 text-red-600" />
                    ) : deet.includes("(no)") ? (
                      <span className="text-red-600 font-semibold flex items-center gap-1">
                        <X className="w-4 h-4" /> {deet.replace(" (no)", "")}
                      </span>
                    ) : (
                      <span style={{ color: "var(--gr-sage)" }}>{deet}</span>
                    )}
                  </td>
                  <td className="py-3 px-4" style={{ color: "var(--gr-sage)" }}>{third}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-6 text-xs" style={{ color: "var(--gr-sage)" }}>
          To be clear: DEET is EPA-registered and considered effective and safe when used as directed. Preferring a plant-based option for my own kids is a personal choice, not a safety verdict on DEET.
        </p>

        {/* Stakes: What I'd been afraid of */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What I&rsquo;d Been Afraid Of
        </h2>
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "rgba(220, 38, 38, 0.04)", border: "1px solid rgba(220, 38, 38, 0.15)" }}>
          <h3 className="gr-display text-lg font-bold text-red-800 mb-3">The trade-off I thought I was stuck with...</h3>
          <ul className="space-y-2.5">
            {[
              "Spraying something on my kids that fogs up their own sunglasses",
              "Reapplying a \"natural\" spray every 30 minutes and still finding bites",
              "Citronella candles that do absolutely nothing on a buggy night",
              "Choosing between protection that works and ingredients I felt good about",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--gr-sage)" }}>
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stakes: What actually happened */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-4 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          What Actually Happened
        </h2>
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "rgba(58, 68, 40, 0.06)", border: "1px solid rgba(58, 68, 40, 0.15)" }}>
          <h3 className="gr-display text-lg font-bold mb-3" style={{ color: "var(--gr-green-dark)" }}>
            One summer later, this is our normal...
          </h3>
          <ul className="space-y-2.5">
            {[
              "A patch on the collar before we walk out the door — and that's it",
              "Nothing soaking into her skin, because it sticks to fabric instead",
              "A full day at the lake with zero bites on either kid",
              "No chemical smell, no sticky film, no cloudy sunglasses",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]" style={{ color: "var(--gr-dark)", opacity: 0.8 }}>
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "var(--gr-green-mid)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder label="Kids playing in the backyard at dusk, patches on their sleeves" ratio="aspect-[16/10]" />

        {/* Mid CTA */}
        <div
          className="border-2 rounded-2xl p-8 text-center my-12"
          style={{ backgroundColor: "var(--gr-accent-light)", borderColor: "rgba(232, 108, 44, 0.25)" }}
        >
          <h3 className="gr-display text-xl font-bold mb-2" style={{ color: "var(--gr-green-dark)" }}>
            Want to Try What We Switched To?
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--gr-sage)" }}>
            DEET-free, plant-based protection that sticks to clothing, not skin. Join 10,000+ families.
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

        {/* Testimonials */}
        <h2 className="gr-display text-2xl md:text-[28px] font-bold mt-12 mb-6 leading-tight" style={{ color: "var(--gr-green-dark)" }}>
          I&rsquo;m Not the Only One Who Had This Moment
        </h2>
        <div className="grid gap-4 mb-12">
          <TestimonialCard
            quote="I caught the bug spray clouding up my kid's goggles and that was it for me. The Luna patches go on their shirts and we just don't think about it anymore."
            author="Caitlin R."
          />
          <TestimonialCard
            quote="I'm not anti-DEET for adults — I just wanted something gentler for my toddler's skin. Plant-based, on the clothes, zero bites all weekend. Exactly what I wanted."
            author="Dana P."
          />
          <TestimonialCard
            quote="We'd given up on natural options after a dozen sprays that wore off in half an hour. The Oil of Lemon Eucalyptus spray actually lasts, and the patches last even longer."
            author="Marisol G."
          />
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl p-10 md:p-12 text-center my-12" style={{ backgroundColor: "var(--gr-green-dark)" }}>
          <h2 className="gr-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--gr-cream)" }}>
            I Read One Label and Never Looked Back
          </h2>
          <p className="mb-7 text-base max-w-[480px] mx-auto" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
            You can love DEET for your camping trips and still want something plant-based on your kids. That&rsquo;s all this is. DEET-free, Leaping Bunny, gentle for the whole family.
          </p>
          <a
            href={CART_URL}
            className="inline-block font-bold text-[15px] tracking-wider px-10 py-4 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--gr-cream)", color: "var(--gr-green-dark)" }}
          >
            SHOP LUNA NATURALS &mdash; 15% OFF
          </a>
          <p className="text-xs mt-4" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            Use code BUGFREE for 15% off &bull; Free shipping on orders $35+
          </p>
        </div>

        {/* Soft P.S. */}
        <div className="rounded-xl p-7 my-6" style={{ backgroundColor: "var(--gr-cream-light)" }}>
          <p className="text-[15px] leading-relaxed" style={{ color: "var(--gr-sage)" }}>
            <strong style={{ color: "var(--gr-dark)" }}>P.S.</strong> &mdash; If you take one thing from a tired mom on the internet, just turn your bug spray over tonight and read the back of it. Whatever you decide after that is yours to decide. For us, the patches stay in the diaper bag from May through September, and I sleep a little easier for it.
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
            <p className="text-sm font-bold" style={{ color: "var(--gr-dark)" }}>Luna Naturals</p>
            <p className="text-xs" style={{ color: "var(--gr-sage)" }}>DEET-free &bull; Plant-based</p>
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
