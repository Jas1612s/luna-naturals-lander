"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const stats = [
  { text: "No Bites.", accent: false },
  { text: "No Itch.", accent: false },
  { text: "No Chemicals.", accent: false },
  { text: "All Natural Protection.", accent: true },
];

function useScrollReveal(
  index: number,
  total: number,
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const segmentSize = 1 / (total + 0.5);
  const start = (index + 0.3) * segmentSize;
  const mid = start + segmentSize * 0.6;

  const opacity = useTransform(scrollYProgress, [start, mid], [0, 1]);
  const y = useTransform(scrollYProgress, [start, mid], [30, 0]);
  const blur = useTransform(scrollYProgress, [start, mid], [6, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return { opacity, y, filterBlur };
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
  const { opacity, y, filterBlur } = useScrollReveal(index, total, containerRef);

  return (
    <motion.h2
      style={{ opacity, y, filter: filterBlur }}
      className={`gr-display italic text-[clamp(2.5rem,13vw,4.5rem)] md:text-8xl lg:text-[120px] uppercase leading-none tracking-tight ${
        accent ? "text-[var(--gr-accent)]" : "text-white"
      }`}
    >
      {text}
    </motion.h2>
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
      <div className="relative z-10 flex flex-col items-center text-center py-24 md:py-36 gap-14 md:gap-20 lg:gap-28 px-4 pb-20">
        {stats.map((stat, i) => (
          <AnimatedStat
            key={stat.text}
            text={stat.text}
            accent={stat.accent}
            index={i}
            total={stats.length}
            containerRef={sectionRef}
          />
        ))}
      </div>
    </section>
  );
}
