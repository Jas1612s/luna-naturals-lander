export function TestosteroneSection() {
  return (
    <section
      className="px-6 py-20"
      style={{
        background: "linear-gradient(rgb(215, 227, 235) 0%, rgb(250, 234, 171) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2
          className="mb-8 text-center text-[rgba(0,0,0,0.88)]"
          style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 400, lineHeight: 1.2 }}
        >
          Get your edge back with
          <br />
          Testosterone by Hims
        </h2>

        {/* CTA Row */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#testo-quiz"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[rgba(0,0,0,0.2)] bg-white px-7 py-3 text-base font-medium text-[rgba(0,0,0,0.88)] transition-opacity hover:opacity-85"
          >
            Get started
          </a>
          <a
            href="/#low-t"
            className="inline-flex cursor-pointer items-center justify-center rounded-full px-7 py-3 text-base text-[rgba(0,0,0,0.66)] transition-opacity hover:opacity-85"
          >
            Do I have low T?
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Card 1: Enclomiphene */}
          <div className="flex flex-1 flex-col overflow-hidden rounded-3xl p-8"
            style={{ background: "linear-gradient(127deg, rgb(255,245,212) 2.43%, rgb(255,250,232) 96.81%)" }}>
            <h3
              className="mb-2 text-[rgba(0,0,0,0.88)]"
              style={{ fontSize: "28px", fontWeight: 400, lineHeight: 1.2 }}
            >
              Enclomiphene
              <br />
              to elevate your T
            </h3>
            <p className="mb-6 text-sm text-[rgba(0,0,0,0.44)]">
              Now with{" "}
              <a href="/#supplements" className="underline">
                supplements
              </a>
            </p>
            <div className="my-6 flex-1 rounded-2xl bg-[rgba(0,0,0,0.04)] min-h-[200px]" />
            <a
              href="/#enclomiphene"
              className="mt-auto inline-flex cursor-pointer items-center justify-center rounded-full bg-hims-navy px-7 py-3 text-base text-white transition-opacity hover:opacity-85"
            >
              Learn more
            </a>
          </div>

          {/* Card 2: At-home labs */}
          <div className="flex flex-1 flex-col overflow-hidden rounded-3xl p-8"
            style={{ background: "linear-gradient(127deg, rgb(255,245,212) 2.43%, rgb(255,250,232) 96.81%)" }}>
            <h3
              className="mb-6 text-[rgba(0,0,0,0.88)]"
              style={{ fontSize: "28px", fontWeight: 400, lineHeight: 1.2 }}
            >
              At-home labs
              <br />
              to check your T levels
            </h3>
            <div className="my-6 flex-1 rounded-2xl bg-[rgba(0,0,0,0.04)] min-h-[200px]" />
            <a
              href="/#at-home-labs"
              className="mt-auto inline-flex cursor-pointer items-center justify-center rounded-full bg-hims-navy px-7 py-3 text-base text-white transition-opacity hover:opacity-85"
            >
              Start testing
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-[rgba(0,0,0,0.44)]">
          Compounded products are not approved nor evaluated for safety, effectiveness, or quality
          by the FDA. Image is for illustrative purposes only. Individual lab results may vary.
        </p>
      </div>
    </section>
  );
}
