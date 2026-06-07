import type { Metadata } from "next";
import Link from "next/link";
import { RampNav } from "@/components/ramp/RampNav";
import { TradeAssessment } from "@/components/ramp/TradeAssessment";
import { RampFooter } from "@/components/ramp/RampFooter";

export const metadata: Metadata = {
  title: "Trade Finance Pre-Qualification | Ramp",
  description:
    "Check your eligibility for a trade finance credit facility in 60 seconds. No credit check, no commitment. Built for businesses with $50M+ annual turnover.",
};

const steps = [
  { num: "01", label: "Annual turnover", detail: "$50M+ required" },
  { num: "02", label: "Trading history", detail: "6+ months" },
  { num: "03", label: "Credit limit", detail: "Your required amount" },
  { num: "04", label: "Payment tenor", detail: "30–120 days" },
];

export default function PreQualificationPage() {
  return (
    <>
      <RampNav />
      <main style={{ backgroundColor: "#07090F", minHeight: "100vh", paddingTop: "64px" }}>
        {/* Breadcrumb strip */}
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "#0A0A0A",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <Link
              href="/ramp"
              style={{
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
              className="hover:text-white/80 transition-colors"
            >
              Ramp
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Trade Finance Pre-Qualification</span>
          </div>
        </div>

        {/* Page header */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "56px 24px 0",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(0,178,72,0.1)",
              color: "#00B248",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "5px 14px",
              borderRadius: "9999px",
              marginBottom: "20px",
              border: "1px solid rgba(0,178,72,0.2)",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free · No credit check · No commitment
          </span>

          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              color: "#ffffff",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            Check your trade finance eligibility
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.65,
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            4 questions. 60 seconds. Get an estimated credit facility
            tailored to your business — with no impact on your credit score.
          </p>

          {/* Progress steps */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{
              gap: "12px",
              maxWidth: "680px",
              margin: "0 auto 48px",
            }}
          >
            {steps.map((s) => (
              <div
                key={s.num}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "16px",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#00B248",
                    letterSpacing: "0.06em",
                    marginBottom: "6px",
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff", marginBottom: "3px" }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment */}
        <TradeAssessment />

        {/* Below form: trust strip */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "32px 24px 64px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {[
            "Bank-grade encryption",
            "Regulated & compliant",
            "Decisions in 24 hrs",
          ].map((text) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7.5l2.5 2.5 7-7" stroke="#00B248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </main>
      <RampFooter />
    </>
  );
}
