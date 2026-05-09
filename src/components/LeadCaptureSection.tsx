"use client";

import { useState } from "react";

export function LeadCaptureSection() {
  const [email, setEmail] = useState("");

  return (
    <section
      className="flex min-h-[400px] flex-col md:flex-row"
      style={{ backgroundColor: "rgb(140, 110, 85)" }}
    >
      {/* Left: Form */}
      <div className="flex flex-1 flex-col justify-center px-8 py-12 md:px-16">
        <h2
          className="mb-4 text-white"
          style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 400, lineHeight: 1.2 }}
        >
          Unlock the free Guide to Protein for Weight Loss
        </h2>
        <p className="mb-8 text-base text-[rgba(255,255,255,0.8)]">
          Written by board-certified doctors to support your journey.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.15)] px-5 py-3.5 text-base text-white placeholder-[rgba(255,255,255,0.6)] outline-none focus:border-[rgba(255,255,255,0.6)]"
          />
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-[rgba(0,0,0,0.88)] px-5 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-85"
          >
            Get the guide
          </button>
        </form>
        <p className="mt-3 text-[11px] leading-relaxed text-[rgba(255,255,255,0.6)]">
          By creating an account using email, I agree to the{" "}
          <a href="/terms" className="underline">
            Terms &amp; Conditions
          </a>
          , and acknowledge the{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Right: Image placeholder */}
      <div
        className="hidden flex-1 md:block"
        style={{ backgroundColor: "rgb(115, 90, 68)" }}
      />
    </section>
  );
}
