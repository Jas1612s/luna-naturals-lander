"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const stats = [
  { text: "No Bites.", accent: false },
  { text: "No Itch.", accent: false },
  { text: "No Chemicals.", accent: false },
  { text: "All Natural Protection.", accent: true },
];

function AnimatedStat({
  text,
  accent,
  index,
  total,
  scrollYProgress,
}: {
  text: string;
  accent: boolean;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentSize = 1 / (total + 1);
  const start = (index + 0.5) * segmentSize;
  const mid = start + segmentSize * 0.5;

  const opacity = useTransform(scrollYProgress, [start, mid], [0, 1]);
  const y = useTransform(scrollYProgress, [start, mid], [40, 0]);
  const blur = useTransform(scrollYProgress, [start, mid], [8, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.h2
      style={{ opacity, y, filter: filterBlur }}
      className={`gr-display italic text-[clamp(2.5rem,12vw,4.5rem)] md:text-[100px] lg:text-[130px] uppercase leading-[0.95] tracking-tight ${
        accent ? "text-[var(--gr-accent)]" : "text-white"
      }`}
    >
      {text}
    </motion.h2>
  );
}

export function BenefitsScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--gr-green) 0%, var(--gr-green-mid) 30%, var(--gr-green) 70%, var(--gr-green-dark) 100%)",
      }}
    >
      {/* Tall scroll container — sticky inner keeps text centered */}
      <div className="min-h-[250vh] md:min-h-[300vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center gap-3 md:gap-5 lg:gap-6 px-4">
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.text}
              text={stat.text}
              accent={stat.accent}
              index={i}
              total={stats.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
