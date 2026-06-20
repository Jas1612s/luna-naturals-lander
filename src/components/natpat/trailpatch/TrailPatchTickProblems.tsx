"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

const accordionItems: AccordionItem[] = [
  {
    question: "Ticks make me nervous every time my child goes outside.",
    answer: (
      <>
        With our stickers, you can let your child enjoy the outdoors without the
        constant worry about ticks. These stickers are infused with natural
        essential oils that repel ticks effectively. Simply stick one on your
        child&apos;s clothing, and they&apos;ll be protected{" "}
        <strong>for hours</strong> of outdoor fun.
      </>
    ),
  },
  {
    question:
      "Tick repellent sprays are sticky, and my child doesn't like applying them.",
    answer: (
      <>
        We hear you! That&apos;s exactly why we&apos;ve created our Tick
        Repellent Stickers. Unlike sprays that can feel sticky and be a hassle
        to apply, our stickers are a breeze to use and super comfortable for
        kids. Just stick one onto your child&apos;s clothing, and they&apos;ll
        get effective tick protection without any mess or fuss. Our Tick
        Repellent Stickers combine fun and functionality, ensuring your child
        stays protected while enjoying the outdoors.
      </>
    ),
  },
  {
    question: "My child has allergic reactions to traditional tick repellents.",
    answer: (
      <>
        We understand how concerning allergic reactions can be. That&apos;s why
        we&apos;ve designed our Tick Repellent Stickers with{" "}
        <strong>natural, gentle ingredients</strong>. Our stickers are infused
        with pure essential oils, providing effective tick protection{" "}
        <strong>
          without the harsh chemicals found in traditional repellents
        </strong>
        . Our stickers utilize our unique AromaWeave™ technology,{" "}
        <strong>made from biodegradable bamboo fibers</strong>, ensuring they
        are safe and skin-friendly. Simply apply one of our stickers to your
        child&apos;s clothing, and you can feel confident knowing they are
        protected without the risk of irritating their skin.
      </>
    ),
  },
  {
    question:
      "I don't want to use tick repellents with chemicals and unpleasant smells.",
    answer: (
      <>
        Our stickers are made with natural essential oils that effectively repel
        ticks <strong>without any harsh chemicals</strong>. Plus, they have a
        pleasant, natural scent that both you and your child will love. Our
        innovative AromaWeave™ technology ensures the essential oils are
        released gradually, providing long-lasting protection in a gentle,
        eco-friendly manner. Just stick one onto your child&apos;s clothing, and
        enjoy worry-free outdoor time{" "}
        <strong>without the chemical smell</strong>.
      </>
    ),
  },
  {
    question:
      "I don't want to worry about reapplying tick repellent while my child is playing outside.",
    answer: (
      <>
        Our stickers provide long-lasting protection, so there&apos;s no need to
        constantly reapply repellent while your child is playing outside. Simply
        stick one of our Tick Repellent Stickers onto your child&apos;s
        clothing, and they&apos;ll enjoy hours of effective tick protection. Our
        stickers are infused with natural essential oils, gradually released
        through our innovative AromaWeave™ technology, ensuring continuous
        protection throughout their outdoor adventures.
      </>
    ),
  },
];

export function TrailPatchTickProblems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      style={{ background: "var(--tp-gray-bg)" }}
      className="trailpatch-tick-problems"
    >
      {/* Header */}
      <div
        className="hidden md:block text-center py-8 px-4"
        style={{ background: "var(--tp-pink)" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            fontSize: "55px",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          What Tick Problems Are You Looking To Solve?
        </h2>
      </div>

      {/* Mobile Header */}
      <div
        className="block md:hidden px-4 pt-8 pb-4"
        style={{ background: "var(--tp-gray-bg)" }}
      >
        <div className="mb-2">
          <span
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "47px",
              background: "var(--tp-pink)",
              color: "white",
              textTransform: "uppercase",
              padding: "0 8px",
              display: "inline-block",
              lineHeight: 1.15,
            }}
          >
            What
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--tp-text)",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Tick Problems Are You Looking To Solve?
        </p>
      </div>

      {/* Accordion */}
      <div
        style={{ maxWidth: "860px", margin: "50px auto", padding: "0 16px 50px" }}
      >
        {accordionItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="relative"
              style={{
                borderRadius: "10px",
                marginBottom: "20px",
                padding: "20px 0",
              }}
            >
              {/* Desktop border + pink dot */}
              <div
                className="hidden md:block absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid var(--tp-pink)",
                  borderRadius: "10px",
                }}
              />
              <div
                className="hidden md:block absolute"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--tp-pink)",
                  left: "-5px",
                  top: "35px",
                }}
              />

              {/* Button */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left relative"
                style={{
                  fontFamily: "var(--font-roboto), Roboto, sans-serif",
                  fontSize: "clamp(15px, 2vw, 16px)",
                  padding: "5px 48px 5px 20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--tp-text)",
                }}
                aria-expanded={isOpen}
              >
                {item.question}
                {/* Expand icon — SVG from original site */}
                <span
                  className="absolute"
                  style={{
                    top: "24px",
                    right: "15px",
                    width: "24px",
                    height: "24px",
                    backgroundImage: `url('/images/natpat/trailpatch/${isOpen ? "icon-expand-more.svg" : "icon-expand-more.svg"}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                  aria-hidden="true"
                />
              </button>

              {/* Body */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? "600px" : "0px",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div
                  style={{
                    paddingInline: "20px",
                    paddingTop: "8px",
                    paddingBottom: "4px",
                    fontFamily: "var(--font-roboto), Roboto, sans-serif",
                    fontSize: "15px",
                    color: "var(--tp-text)",
                    lineHeight: 1.6,
                  }}
                >
                  <p style={{ margin: 0 }}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
