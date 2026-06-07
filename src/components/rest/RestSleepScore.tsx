import Image from "next/image";

const stats = [
  {
    value: "94%",
    description:
      "reported that the comforter helped improve their overall sleep quality",
  },
  {
    value: "88%",
    description:
      "experienced better temperature regulation with the comforter",
  },
  {
    value: "97%",
    description:
      "found the cooling sensation better compared to a regular comforter",
  },
];

export function RestSleepScore() {
  return (
    <section className="relative z-10 bg-[#F5EDE2] py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <h2 className="text-[32px] font-semibold leading-tight text-[#2A2E16] md:text-[40px]">
              Scientifically Proven, Third-Party Tested.
            </h2>
            <a
              href="#"
              className="mt-4 inline-block text-[14px] text-[#E8603C] underline"
            >
              View Third-party Test Results
            </a>
            <p className="mt-6 max-w-[480px] text-[14px] leading-[22px] text-[#8B9077]">
              SleepScore Labs conducted a scientific study which analyzed over
              1000 nights of sleep with the Evercool&reg; Comforter.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <span className="text-[40px] font-semibold text-[#2A2E16]">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-[12px] text-[#8B9077]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Badge image */}
          <div className="order-1 md:order-2">
            <Image
              src="/images/rest/sleep-score-badge.webp"
              alt="SleepScore Labs validated badge"
              width={300}
              height={300}
              className="mx-auto max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
