"use client";

import { useState } from "react";

const tabs = ["What you get", "Specifications", "How to use"] as const;

const whatYouGet = {
  adults: [
    "Luna Natural Mosquito Repellent Patches (90 pcs)",
    "Resealable freshness pouch",
    "Quick-start usage guide",
  ],
  kids: [
    "Luna Natural Kids Mosquito Repellent Patches (90 pcs)",
    "Resealable freshness pouch",
    "Fun sticker designs guide for kids",
  ],
};

const specifications = [
  { label: "Active ingredients", value: "Citronella oil, Eucalyptus oil" },
  { label: "Patch material", value: "Non-woven fabric, medical-grade adhesive" },
  { label: "Protection duration", value: "Up to 8 hours per patch" },
  { label: "Water resistance", value: "Waterproof & sweatproof" },
  { label: "Free from", value: "DEET, parabens, phthalates, artificial fragrances" },
  { label: "Certifications", value: "Leaping Bunny certified cruelty-free" },
  { label: "Shelf life", value: "24 months from date of manufacture" },
];

const howToUse = [
  { step: "Peel the patch from its backing. Each patch is individually sealed for freshness." },
  { step: "Stick onto clothing – shirts, shorts, hats, strollers, or bags. Avoid direct skin contact for best results." },
  { step: "Use 1-2 patches per person for optimal coverage. Position near exposed skin areas." },
  { step: "Replace every 8 hours or after heavy rain exposure for continuous protection." },
];

export function ProductDetailsTabs({ variant = "adults" }: { variant?: "adults" | "kids" }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("What you get");

  return (
    <section className="bg-[var(--gr-cream)] py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-[700px] mx-auto">
        {/* Tab buttons */}
        <div className="flex border border-[var(--gr-dark)]/15 rounded-xl overflow-hidden mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-2 text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-[var(--gr-dark)] border-2 border-[var(--gr-green)] rounded-xl -m-px relative z-10"
                  : "bg-transparent text-[var(--gr-sage)] hover:text-[var(--gr-dark)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-2xl p-6 md:p-8">
          {activeTab === "What you get" && (
            <ol className="space-y-4">
              {whatYouGet[variant].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[var(--gr-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[var(--gr-dark)] font-medium text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          )}

          {activeTab === "Specifications" && (
            <div className="divide-y divide-[var(--gr-cream)]">
              {specifications.map((spec) => (
                <div key={spec.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-sm font-bold text-[var(--gr-dark)] sm:w-44 shrink-0">
                    {spec.label}
                  </span>
                  <span className="text-sm text-[var(--gr-sage)] leading-relaxed">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "How to use" && (
            <ol className="space-y-5">
              {howToUse.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[var(--gr-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[var(--gr-sage)] leading-relaxed">
                    {item.step}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* Dashed divider */}
        <div className="mt-10 border-b-2 border-dashed border-[var(--gr-green)]/25" />
      </div>
    </section>
  );
}
