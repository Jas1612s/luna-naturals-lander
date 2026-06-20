"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const stats = [
  { text: "Skip The Spray", accent: false },
  { text: "One Patch On", accent: false },
  { text: "12 Hours of Protection", accent: false },
  { text: "Plant-Powered. DEET-Free.", accent: true },
];

function useScrollReveal(
  index: number,
  total: number,
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 1", "start -0.3"],
  });

  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const mid = start + segmentSize * 0.4;
  const end = start + segmentSize * 0.7;

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [start, mid], ["60px", "0px"]);
  const scale = useTransform(scrollYProgress, [start, mid], [0.9, 1]);

  return { opacity, y, scale };
}

function AnimatedStat({
  text,
  accent,
  index,
  total,
  containerRef,
}: {
  text: string;
  accent: boolean;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { opacity, y, scale } = useScrollReveal(index, total, containerRef);

  return (
    <motion.h2
      style={{ opacity, y, scale }}
      className={`gr-display italic text-[clamp(2rem,10vw,3.5rem)] md:text-7xl lg:text-[100px] uppercase leading-none tracking-tight ${
        accent ? "text-[var(--gr-accent)]" : "text-white"
      }`}
    >
      {text}
    </motion.h2>
  );
}

function AnimatedImage({
  index,
  total,
  containerRef,
}: {
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { opacity, y, scale } = useScrollReveal(index, total, containerRef);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="flex justify-center"
    >
      <img
        src="/images/gruns/product-bundle-both.webp"
        alt="Luna Naturals Mosquito Repellent Patches - Adults and Kids"
        className="w-[280px] md:w-[400px] lg:w-[500px] object-contain"
      />
    </motion.div>
  );
}

export function BenefitsScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--gr-green) 0%, var(--gr-green-mid) 30%, var(--gr-green) 70%, var(--gr-green-dark) 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center py-16 md:py-24 gap-10 md:gap-16 lg:gap-20 px-4 pb-12">
        {stats.map((stat, i) => (
          <AnimatedStat
            key={stat.text}
            text={stat.text}
            accent={stat.accent}
            index={i}
            total={stats.length + 1}
            containerRef={sectionRef}
          />
        ))}

        {/* Product sachet — same scroll reveal sequence */}
        <AnimatedImage
          index={stats.length}
          total={stats.length + 1}
          containerRef={sectionRef}
        />
      </div>
    </section>
  );
}
