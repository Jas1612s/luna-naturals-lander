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
          color: "#151515",
          marginTop: "40px",
          marginBottom: "16px",
          lineHeight: 1.3,
        }}
      >
        The truth? I thought my foundation days were behind me
      </h2>

      <P>
        At 52, I&apos;d accepted that foundation just didn&apos;t work on my
        skin anymore.
      </P>

      <P>
        Every formula I tried would start out promising&mdash;smooth
        application, decent coverage&mdash;but within an hour, it would betray
        me.
      </P>

      <P>
        It settled into the lines around my eyes. It clung to dry patches I
        didn&apos;t even know I had. And worst of all? It oxidized into that
        telltale orange mask that screamed &ldquo;trying too hard.&rdquo;
      </P>

      <P>I looked older with foundation than I did without it.</P>

      <P>
        I tried everything: luxury department store brands, cult favorites my
        daughter swore by, even the &ldquo;age-defying&rdquo; formulas
        specifically marketed to women my age. Nothing worked.
      </P>

      <P>
        The sales associates would color-match me under those bright lights,
        promising me this was &ldquo;the one.&rdquo; Two hours later, I&apos;d
        catch my reflection and barely recognize myself&mdash;orange, cakey,
        aged.
      </P>

      {/* Image 1: before/after eyes */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/smooche-ccf/article-image-1.jpg"
        alt="Before and after close-up comparison of foundation on eyes"
        className="w-full rounded-lg"
        style={{ margin: "32px 0", display: "block" }}
      />

      <P>
        I was ready to accept that foundation was a young woman&apos;s game.
        That at my age, I&apos;d just have to embrace my bare skin, uneven
        tone, age spots and all.
      </P>

      <P>
        But then a friend&mdash;also in her 50s&mdash;told me about something
        different. Not just another shade, but an entirely different technology
        that actually adapts to aging skin.
      </P>

      <P>I was skeptical. I&apos;d heard it all before.</P>

      <P>
        But within minutes of application, I watched something I&apos;d never
        seen before: the formula literally transformed to match my skin. No
        orange. No gray. No settling into lines.
      </P>

      <P>
        For the first time in years, my skin looked like my skin&mdash;just
        smoother, more even, more radiant. Not masked. Not older. Just...
        better.
      </P>

      <P>I looked 10 years younger, and it lasted all day.</P>

      <P>
        I needed to understand why this was finally working when everything else
        had failed me. So I started researching. And that&apos;s when I
        discovered the truth about why traditional foundations fail on mature
        skin.
      </P>

      {/* Image 2: before/after woman in gray sweater */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/smooche-ccf/how-it-works.jpg"
        alt="Before and after side-by-side comparison of woman in gray sweater"
        className="w-full rounded-lg"
        style={{ margin: "32px 0", display: "block" }}
      />

      {/* Sub-section heading */}
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#151515",
          marginTop: "40px",
          marginBottom: "16px",
          lineHeight: 1.3,
        }}
      >
        What is a Color Changing Foundation?
      </h3>

      <P>
        Color-adapting (or skin tone adapting) foundation contains unique
        pigment technology that literally transforms to match your individual
        skin tone. Unlike traditional foundations that come in fixed shades,
        these formulas contain colorless pigments that react with your
        skin&apos;s natural pH and undertone to create your perfect shade.
      </P>

      <P>
        But here&apos;s what makes it revolutionary for mature skin: it
        doesn&apos;t just match your color&mdash;it&apos;s formulated to work
        WITH aging skin, not against it. The hydrating, lightweight formula
        glides over fine lines instead of settling into them, provides buildable
        coverage that evens skin tone without looking heavy, and actually makes
        skin look smoother and more youthful.
      </P>

      <P>
        The result? A foundation that looks like your skin&mdash;not a mask
        sitting on top of it. And unlike regular foundations, it won&apos;t
        oxidize, settle into wrinkles, or emphasize texture throughout the day.
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
        color: "#151515",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}
