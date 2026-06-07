"use client";

import { useState } from "react";
import Image from "next/image";

interface Condition {
  title: string;
  label: string;
  effect: string;
  image: string;
  panelSubtitle: string;
  panelWhy: string;
  panelRefs: string;
}

const conditions: Condition[] = [
  {
    title: "High Blood Pressure",
    label: "NASAL BLOCKAGE EFFECT",
    effect: "Sympathetic Overdrive",
    image: "/images/histrips/breathing/doctor-1.webp",
    panelSubtitle:
      "Poor sleep and blocked airways raise your heart's stress baseline, quietly, but consistently.",
    panelWhy:
      "When your nasal passages are blocked, your body defaults to mouth breathing, especially at night. This limits oxygen intake and disrupts your natural respiratory rhythm. Each time your airway partially collapses, it triggers a stress response. Your body releases cortisol and adrenaline, raising your blood pressure. This low-grade stress accumulates. Over time, the cardiovascular system adapts to this elevated baseline. What should be deep, restful recovery becomes an overnight stress test, every single night.",
    panelRefs:
      "Stanford Medicine – Sleep Apnea and Hypertension: Sleep apnea causes intermittent hypoxia, activating the sympathetic nervous system and raising blood pressure.",
  },
  {
    title: "Snoring Issues",
    label: "NASAL BLOCKAGE EFFECT",
    effect: "Issues & Relationship Annoyance",
    image: "/images/histrips/breathing/doctor-2.webp",
    panelSubtitle:
      "Sleeping with your mouth open can restrict your airway and raise the chances of snoring, interrupting restorative deep sleep.",
    panelWhy:
      "Sleeping with your mouth open causes the upper airway to narrow and collapse more easily. This increases airflow resistance, which leads directly to snoring and fragmented deep sleep. Instead of smooth nasal breathing, air is forced through a relaxed, unstable throat — creating vibration, noise, and repeated micro-arousals throughout the night.",
    panelRefs:
      "James Nestor – Breath: The New Science of a Lost Art. Observed snoring during mouth breathing reaching up to 80 decibels, while nasal breathing reduced sound to near silence.",
  },
  {
    title: "Smelly & Dry Mouth",
    label: "NASAL BLOCKAGE EFFECT",
    effect: "Big Hygiene & Dental problems",
    image: "/images/histrips/breathing/doctor-3.webp",
    panelSubtitle:
      "Mouth breathing dries saliva, causing plaque, bad breath, and irritated gums.",
    panelWhy:
      "Mouth breathing dries out saliva — the body's natural antibacterial defense. With less moisture, harmful bacteria multiply quickly, creating bad breath, plaque buildup, and gum irritation. This dry environment also weakens enamel, making teeth more vulnerable to decay and sensitivity over time.",
    panelRefs:
      "American Dental Association – Saliva & Oral Health: Reduced saliva increases bacterial growth, plaque formation, and risk of gum disease.",
  },
  {
    title: "Sleep Apnea Risk",
    label: "NASAL BLOCKAGE EFFECT",
    effect: "Overall Health Decline",
    image: "/images/histrips/breathing/doctor-1.webp",
    panelSubtitle:
      "Blocked airways at night repeatedly starve your body of oxygen.",
    panelWhy:
      "When nasal breathing is blocked during sleep, the airway becomes unstable and more likely to collapse. These repeated airway closures reduce oxygen levels and force the body into a constant fight-or-flight response — sometimes dozens of times per hour. Each interruption spikes heart rate and blood pressure, stressing the cardiovascular system while you're supposed to be recovering.",
    panelRefs:
      "American Academy of Sleep Medicine: Untreated sleep apnea significantly increases risk of hypertension, heart disease, stroke, and diabetes.",
  },
  {
    title: "Facial Development",
    label: "NASAL BLOCKAGE EFFECT",
    effect: "Structural Change",
    image: "/images/histrips/breathing/doctor-2.webp",
    panelSubtitle:
      "Chronic mouth breathing can alter facial bone structure during childhood and beyond.",
    panelWhy:
      "Long-term mouth breathing changes the forces acting on facial bones. The tongue, which should rest on the palate during nasal breathing, drops low — removing the natural scaffold that shapes the upper jaw. Over years, this can lead to a narrower palate, more forward-positioned head, and elongated face shape. The structural change is gradual but increasingly irreversible with age.",
    panelRefs:
      "Journal of Clinical Orthodontics: Mouth-breathing children showed significantly altered facial development compared to nasal-breathing peers.",
  },
];

export function HiStripsBreathing() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const isOpen = activePanel !== null;
  const activeCondition = activePanel !== null ? conditions[activePanel] : null;

  return (
    <section
      style={{
        background: "#F9F8F6",
        padding: "60px 0",
      }}
    >
      {/* Scrollbar hide style */}
      <style>{`
        .hs-breathing-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Max-width wrapper for header */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <h2
          className="hs-breathing-heading"
          style={{
            fontSize: "46px",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-1px",
            textAlign: "center",
            maxWidth: "550px",
            margin: "0 auto 12px",
            color: "#111",
            whiteSpace: "pre-line",
          }}
        >
          {"How restricted breathing steals\nyour edge."}
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 35px",
            color: "#666",
          }}
        >
          When your nose can&apos;t open fully, you breathe louder, recover
          slower, and perform at half&#8209;speed.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="hs-breathing-carousel"
        style={{
          overflowX: "auto",
          display: "flex",
          gap: "20px",
          padding: "0 20px 50px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {conditions.map((condition, index) => (
          <ConditionCard
            key={condition.title}
            condition={condition}
            index={index}
            onClick={() => setActivePanel(index)}
          />
        ))}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setActivePanel(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 9999,
          }}
          aria-label="Close panel"
        />
      )}

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={activeCondition?.title ?? "Detail panel"}
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100vh",
          width: "560px",
          maxWidth: "95%",
          background: "#F4F4EF",
          padding: "30px",
          overflowY: "auto",
          zIndex: 10000,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.25s ease",
          boxSizing: "border-box",
        }}
      >
        {activeCondition && (
          <PanelContent
            condition={activeCondition}
            onClose={() => setActivePanel(null)}
          />
        )}
      </div>

      {/* Responsive heading font size */}
      <style>{`
        @media (max-width: 767px) {
          .hs-breathing-heading {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */

interface ConditionCardProps {
  condition: Condition;
  index: number;
  onClick: () => void;
}

function ConditionCard({ condition, onClick }: ConditionCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "240px",
        flexShrink: 0,
        cursor: "pointer",
        scrollSnapAlign: "start",
      }}
    >
      {/* Image container */}
      <div
        style={{
          height: "320px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Doctor image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 2s ease",
          }}
        >
          <Image
            src={condition.image}
            alt={condition.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="240px"
          />
        </div>

        {/* Breathing icon */}
        <div
          style={{
            position: "absolute",
            left: "15px",
            bottom: "15px",
            zIndex: 1,
            width: "30px",
            height: "30px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/histrips/breathing/breathing-icon.svg"
            alt="breathing icon"
            width={30}
            height={30}
          />
        </div>
      </div>

      {/* Card text below image */}
      <div style={{ padding: "18px 0" }}>
        {/* Category label */}
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "1px",
            fontWeight: 500,
            color: "#000",
            borderTop: "1px solid rgba(0,0,0,0.12)",
            paddingTop: "10px",
            marginBottom: "5px",
            margin: "0 0 5px",
          }}
        >
          {condition.label}
        </p>

        {/* Effect label */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#000",
            margin: "0 0 4px",
          }}
        >
          {condition.effect}
        </p>

        {/* Card title */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.2,
            maxWidth: "200px",
            marginBottom: "10px",
            margin: "0 0 10px",
            color: "#111",
          }}
        >
          {condition.title}
        </h3>
      </div>
    </div>
  );
}

interface PanelContentProps {
  condition: Condition;
  onClose: () => void;
}

function PanelContent({ condition, onClose }: PanelContentProps) {
  return (
    <>
      {/* Close button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={onClose}
          aria-label="Close panel"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "22px",
            lineHeight: 1,
            color: "#111",
            padding: "4px 8px",
          }}
        >
          &#x2715;
        </button>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "-0.7px",
          maxWidth: "90%",
          lineHeight: 1.2,
          marginTop: "20px",
          marginBottom: "10px",
          color: "#111",
        }}
      >
        {condition.title}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontWeight: 500,
          marginBottom: "20px",
          fontSize: "15px",
          lineHeight: 1.5,
          color: "#222",
        }}
      >
        {condition.panelSubtitle}
      </p>

      {/* WHY IT HAPPENS label */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.6px",
          opacity: 0.7,
          marginTop: "15px",
          marginBottom: "8px",
          textTransform: "uppercase",
          color: "#111",
        }}
      >
        Why It Happens
      </p>

      {/* Body text */}
      <p
        style={{
          fontSize: "14px",
          opacity: 0.85,
          lineHeight: 1.6,
          color: "#111",
          marginBottom: "20px",
        }}
      >
        {condition.panelWhy}
      </p>

      {/* REFERENCES label */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.6px",
          opacity: 0.7,
          marginTop: "15px",
          marginBottom: "8px",
          textTransform: "uppercase",
          color: "#111",
        }}
      >
        References
      </p>

      {/* Reference text */}
      <p
        style={{
          fontSize: "14px",
          opacity: 0.7,
          lineHeight: 1.6,
          color: "#111",
        }}
      >
        {condition.panelRefs}
      </p>
    </>
  );
}
