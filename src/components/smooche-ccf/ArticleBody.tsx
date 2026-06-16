export function ArticleBody() {
  return (
    <article
      className="mx-auto w-full"
      style={{ maxWidth: "700px", padding: "0 20px" }}
    >
      {/* Section heading */}
      <h2
        className="text-2xl font-bold"
        style={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#1a2e1a",
          marginTop: "40px",
          marginBottom: "16px",
          lineHeight: 1.3,
        }}
      >
        The truth? I was the mom losing the bug spray battle every single day
      </h2>

      <P>
        At first it was just annoying. Every evening before the park, the same
        routine &mdash; chase my 4-year-old around the kitchen, pin her arms,
        spray her down while she screamed bloody murder.
      </P>

      <P>
        She&apos;d cry. I&apos;d feel terrible. And within two hours,
        she&apos;d still come home covered in mosquito bites.
      </P>

      <P>
        I tried every brand on the shelf. The &ldquo;gentle&rdquo; kids sprays
        that smelled like a chemical factory. The &ldquo;natural&rdquo; ones
        that wore off in 20 minutes. The clip-on devices that did absolutely
        nothing.
      </P>

      <P>
        The worst part wasn&apos;t the bites &mdash; it was the guilt. Every
        night I&apos;d dab calamine lotion on swollen welts and wonder if I was
        failing as a mom. Other kids seemed fine. Why couldn&apos;t I keep
        mosquitoes off mine?
      </P>

      <P>
        Then last March, during her annual checkup, our pediatrician asked a
        simple question that changed everything.
      </P>

      <P>
        &ldquo;Have you tried repellent patches instead of sprays?&rdquo;
      </P>

      {/* Image 1: article image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/smooche-ccf/gen-patch-closeup.webp"
        alt="Child wearing mosquito repellent patch on clothing"
        className="w-full rounded-lg"
        style={{ margin: "32px 0", display: "block" }}
      />

      <P>
        She explained that plant-based patches stick to clothing &mdash; not
        skin. The active ingredients create a protective vapor barrier around
        your child without a single chemical touching their body.
      </P>

      <P>
        I was skeptical. I&apos;d wasted money on every &ldquo;miracle
        solution&rdquo; before. But the patches were $9.99 for 120 &mdash; less
        than a single can of OFF &mdash; so I figured I had nothing to lose.
      </P>

      <P>
        My daughter picked a dinosaur patch. She thought it was a sticker. She
        pressed it onto her t-shirt herself &mdash; laughing, not screaming.
      </P>

      <P>
        She played outside for six hours. Not a single bite. Not a single tear.
      </P>

      <P>
        I sat on the porch and cried. Not because of mosquitoes &mdash; because
        going outside finally didn&apos;t feel like a war.
      </P>

      <P>
        That was three months ago. Our family&apos;s total mosquito bite count
        since? Zero.
      </P>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/smooche-ccf/gen-kids-playing.webp"
        alt="Mother applying a fun sticker patch to her daughter's shirt outdoors"
        className="w-full rounded-lg"
        style={{ margin: "32px 0", display: "block" }}
      />

      {/* Sub-section heading */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#1a2e1a",
          marginTop: "40px",
          marginBottom: "16px",
          lineHeight: 1.3,
        }}
      >
        What are mosquito repellent patches?
      </h3>

      <P>
        Mosquito repellent patches are small adhesive stickers infused with
        plant-based essential oils &mdash; typically citronella and eucalyptus
        &mdash; that create an invisible vapor barrier to repel mosquitoes.
        Unlike sprays, they attach to clothing, bags, or strollers, never
        touching skin.
      </P>

      <P>
        What makes them a game-changer for families: kids actually want to wear
        them. The patches come in fun designs &mdash; dinosaurs, stars, animals
        &mdash; so children think they&apos;re decorating their outfit, not
        getting bug protection. No more spray battles. No more tears.
      </P>

      <P>
        The result? 12 hours of hands-free, chemical-free protection that your
        kids apply themselves. No reapplication. No DEET. No sticky residue.
        Just a happy kid playing outside without a single bite.
      </P>
    </article>
  );
}

/** Reusable body paragraph with consistent styling */
function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[15px] md:text-base"
      style={{
        lineHeight: 1.75,
        color: "#1a2e1a",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}
