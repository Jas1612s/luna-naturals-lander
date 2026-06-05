"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const stats = [
  { text: "90 Patches Per Pack", accent: false },
  { text: "2 Plant-Based Active Oils", accent: false },
  { text: "0 Chemicals on Skin", accent: false },
  { text: "1 Pack for the Whole Summer", accent: true },
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

  const segmentSize = 1 / (total + 1);
  const start = index * segmentSize;
  const mid = start + segmentSize * 0.5;
  const end = start + segmentSize;

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
      className={`gr-display italic text-5xl md:text-7xl lg:text-[100px] uppercase leading-none tracking-tight ${
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
        src="/images/gruns/sachet-luna.png"
        alt="Luna Naturals Mosquito Repellent Patches sachet"
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
          "linear-gradient(to bottom, #46502D 0%, #5A6438 30%, #3A4220 70%, #282D0F 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center py-20 md:py-32 gap-16 md:gap-24 lg:gap-32 px-4 pb-16">
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
