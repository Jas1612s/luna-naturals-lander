"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | "result" | "ineligible";

interface Answers {
  turnover: string;
  tradingHistory: "yes" | "no" | null;
  creditLimit: string;
  tenor: 30 | 60 | 90 | 120 | null;
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

function calcEligibility(answers: Answers): { low: number; high: number } | null {
  const turnover = parseFloat(answers.turnover.replace(/[^0-9.]/g, ""));
  const creditLimit = parseFloat(answers.creditLimit.replace(/[^0-9.]/g, ""));
  if (!turnover || turnover < 50_000_000) return null;
  if (answers.tradingHistory !== "yes") return null;
  if (!creditLimit || !answers.tenor) return null;

  const tenorFactors: Record<number, number> = { 30: 1.0, 60: 0.85, 90: 0.75, 120: 0.65 };
  const factor = tenorFactors[answers.tenor];
  const maxByTurnover = turnover * 0.20 * factor;
  const raw = Math.min(maxByTurnover, creditLimit * 1.25);
  const rounded = Math.round(raw / 50_000) * 50_000;
  return { low: Math.round(rounded * 0.85 / 50_000) * 50_000, high: rounded };
}

function ProgressDots({ step }: { step: number }) {
  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "32px" }}>
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          style={{
            width: s <= step ? "24px" : "8px",
            height: "8px",
            borderRadius: "9999px",
            backgroundColor: s <= step ? "#00B248" : "#E4E1DB",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(0,178,72,0.1)" />
      <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#00B248" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TradeAssessment() {
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({
    turnover: "",
    tradingHistory: null,
    creditLimit: "",
    tenor: null,
  });

  const stepNum = typeof step === "number" ? step : step === "result" ? 5 : 5;
  const eligibility = step === "result" ? calcEligibility(answers) : null;

  function handleNext() {
    if (step === 1) {
      const val = parseFloat(answers.turnover.replace(/[^0-9.]/g, ""));
      if (!val || val < 50_000_000) { setStep("ineligible"); return; }
      setStep(2);
    } else if (step === 2) {
      if (answers.tradingHistory === "no") { setStep("ineligible"); return; }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      const result = calcEligibility(answers);
      setStep(result ? "result" : "ineligible");
    }
  }

  function reset() {
    setStep(1);
    setAnswers({ turnover: "", tradingHistory: null, creditLimit: "", tenor: null });
  }

  return (
    <section
      style={{
        backgroundColor: "#F7F7F4",
        borderTop: "1px solid #E4E1DB",
        borderBottom: "1px solid #E4E1DB",
      }}
      className="py-16 lg:py-20"
    >
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(0,178,72,0.08)",
              color: "#00B248",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "4px 14px",
              borderRadius: "9999px",
              marginBottom: "14px",
            }}
          >
            Pre-qualification
          </span>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "#0F0F0F",
              marginBottom: "10px",
            }}
          >
            Check your credit facility eligibility
          </h2>
          <p style={{ fontSize: "15px", color: "#595959", lineHeight: 1.6 }}>
            Answer 4 quick questions to get an estimated credit limit in seconds.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #E4E1DB",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
          }}
        >
          {/* STEP 1: Turnover */}
          {step === 1 && (
            <div>
              <ProgressDots step={1} />
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Question 1 of 4
              </p>
              <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, color: "#0F0F0F", marginBottom: "8px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                What is your company&apos;s annual sales turnover?
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A8A", marginBottom: "28px", lineHeight: 1.5 }}>
                A minimum annual turnover of $50M is required for standard trade finance facilities.
              </p>
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#595959",
                    pointerEvents: "none",
                  }}
                >
                  $
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={answers.turnover}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, "");
                    setAnswers((a) => ({ ...a, turnover: raw }));
                  }}
                  placeholder="e.g. 75,000,000"
                  autoFocus
                  style={{
                    width: "100%",
                    border: "2px solid #E4E1DB",
                    borderRadius: "14px",
                    padding: "16px 18px 16px 36px",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0F0F0F",
                    outline: "none",
                    transition: "border-color 0.15s",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00B248"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#E4E1DB"; }}
                  onKeyDown={(e) => { if (e.key === "Enter" && answers.turnover) handleNext(); }}
                />
              </div>
              {answers.turnover && (
                <p style={{ fontSize: "13px", color: "#8A8A8A", marginBottom: "20px" }}>
                  ≈ {formatCurrency(parseFloat(answers.turnover))} per year
                </p>
              )}
              <button
                onClick={handleNext}
                disabled={!answers.turnover}
                style={{
                  width: "100%",
                  backgroundColor: answers.turnover ? "#00B248" : "#E4E1DB",
                  color: answers.turnover ? "white" : "#B0B0B0",
                  borderRadius: "12px",
                  padding: "16px",
                  fontSize: "15px",
                  fontWeight: 700,
                  border: "none",
                  cursor: answers.turnover ? "pointer" : "default",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { if (answers.turnover) e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2: Trading history */}
          {step === 2 && (
            <div>
              <ProgressDots step={2} />
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Question 2 of 4
              </p>
              <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, color: "#0F0F0F", marginBottom: "8px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                Do you have at least 6 months of trading history as a supplier or buyer?
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A8A", marginBottom: "28px", lineHeight: 1.5 }}>
                We require a minimum of 6 months of verifiable trade history with your counterparty.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                {(["yes", "no"] as const).map((val) => (
                  <button
                    key={val}
                    onClick={() => setAnswers((a) => ({ ...a, tradingHistory: val }))}
                    style={{
                      padding: "20px",
                      borderRadius: "14px",
                      border: `2px solid ${answers.tradingHistory === val ? "#00B248" : "#E4E1DB"}`,
                      backgroundColor: answers.tradingHistory === val ? "rgba(0,178,72,0.04)" : "white",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: answers.tradingHistory === val ? "#00B248" : "#3D3D3D",
                      textTransform: "capitalize",
                      transition: "all 0.15s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {answers.tradingHistory === val && <CheckIcon />}
                    {val === "yes" ? "Yes" : "No"}
                  </button>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #E4E1DB",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#595959",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.tradingHistory}
                  style={{
                    backgroundColor: answers.tradingHistory ? "#00B248" : "#E4E1DB",
                    color: answers.tradingHistory ? "white" : "#B0B0B0",
                    borderRadius: "12px",
                    padding: "14px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: answers.tradingHistory ? "pointer" : "default",
                    transition: "all 0.15s",
                  }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Required credit limit */}
          {step === 3 && (
            <div>
              <ProgressDots step={3} />
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Question 3 of 4
              </p>
              <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, color: "#0F0F0F", marginBottom: "8px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                What credit limit do you require with your supplier or buyer?
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A8A", marginBottom: "28px", lineHeight: 1.5 }}>
                Enter the total credit facility size you need to support your trade transactions.
              </p>
              <div style={{ position: "relative", marginBottom: "24px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#595959",
                    pointerEvents: "none",
                  }}
                >
                  $
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={answers.creditLimit}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, "");
                    setAnswers((a) => ({ ...a, creditLimit: raw }));
                  }}
                  placeholder="e.g. 5,000,000"
                  autoFocus
                  style={{
                    width: "100%",
                    border: "2px solid #E4E1DB",
                    borderRadius: "14px",
                    padding: "16px 18px 16px 36px",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#0F0F0F",
                    outline: "none",
                    transition: "border-color 0.15s",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00B248"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#E4E1DB"; }}
                  onKeyDown={(e) => { if (e.key === "Enter" && answers.creditLimit) handleNext(); }}
                />
              </div>
              {answers.creditLimit && (
                <p style={{ fontSize: "13px", color: "#8A8A8A", marginBottom: "20px" }}>
                  ≈ {formatCurrency(parseFloat(answers.creditLimit))} credit facility
                </p>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <button
                  onClick={() => setStep(2)}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #E4E1DB",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#595959",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.creditLimit}
                  style={{
                    backgroundColor: answers.creditLimit ? "#00B248" : "#E4E1DB",
                    color: answers.creditLimit ? "white" : "#B0B0B0",
                    borderRadius: "12px",
                    padding: "14px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: answers.creditLimit ? "pointer" : "default",
                    transition: "all 0.15s",
                  }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Tenor */}
          {step === 4 && (
            <div>
              <ProgressDots step={4} />
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Question 4 of 4
              </p>
              <h3 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, color: "#0F0F0F", marginBottom: "8px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                What is your required payment tenor?
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A8A", marginBottom: "28px", lineHeight: 1.5 }}>
                Select the payment terms you need — this is the number of days until your buyer pays.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                {([30, 60, 90, 120] as const).map((days) => (
                  <button
                    key={days}
                    onClick={() => setAnswers((a) => ({ ...a, tenor: days }))}
                    style={{
                      padding: "20px 16px",
                      borderRadius: "14px",
                      border: `2px solid ${answers.tenor === days ? "#00B248" : "#E4E1DB"}`,
                      backgroundColor: answers.tenor === days ? "rgba(0,178,72,0.04)" : "white",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: answers.tenor === days ? "#00B248" : "#0F0F0F",
                        lineHeight: 1,
                        marginBottom: "4px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {days}
                    </div>
                    <div style={{ fontSize: "12px", color: answers.tenor === days ? "#00B248" : "#8A8A8A", fontWeight: 600 }}>
                      days
                    </div>
                  </button>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <button
                  onClick={() => setStep(3)}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1px solid #E4E1DB",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#595959",
                  }}
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers.tenor}
                  style={{
                    backgroundColor: answers.tenor ? "#00B248" : "#E4E1DB",
                    color: answers.tenor ? "white" : "#B0B0B0",
                    borderRadius: "12px",
                    padding: "14px",
                    fontSize: "15px",
                    fontWeight: 700,
                    border: "none",
                    cursor: answers.tenor ? "pointer" : "default",
                    transition: "all 0.15s",
                  }}
                >
                  See my estimate →
                </button>
              </div>
            </div>
          )}

          {/* RESULT: Eligible */}
          {step === "result" && eligibility && (
            <div style={{ textAlign: "center" }}>
              {/* Success ring */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,178,72,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 17l5 5 11-11" stroke="#00B248" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <p style={{ fontSize: "12px", fontWeight: 700, color: "#00B248", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                Estimated eligibility
              </p>
              <h3
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  color: "#0F0F0F",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {formatCurrency(eligibility.low)} – {formatCurrency(eligibility.high)}
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A8A", marginBottom: "32px", lineHeight: 1.6 }}>
                Based on your{" "}
                <strong style={{ color: "#3D3D3D" }}>
                  {formatCurrency(parseFloat(answers.turnover))} annual turnover
                </strong>{" "}
                and{" "}
                <strong style={{ color: "#3D3D3D" }}>{answers.tenor}-day payment terms</strong>.
                Final approval is subject to credit review.
              </p>

              {/* Summary pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  marginBottom: "32px",
                }}
              >
                {[
                  `${formatCurrency(parseFloat(answers.turnover))} turnover`,
                  `6+ months history ✓`,
                  `${formatCurrency(parseFloat(answers.creditLimit))} requested`,
                  `${answers.tenor}-day tenor`,
                ].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      backgroundColor: "#F7F7F4",
                      border: "1px solid #E4E1DB",
                      borderRadius: "9999px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#595959",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Book meeting CTA */}
              <a
                href="#"
                style={{
                  display: "block",
                  width: "100%",
                  backgroundColor: "#00B248",
                  color: "white",
                  borderRadius: "14px",
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: "12px",
                  transition: "opacity 0.15s",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Book a meeting to finalise your facility →
              </a>
              <button
                onClick={reset}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "13px",
                  color: "#8A8A8A",
                  cursor: "pointer",
                  textDecoration: "underline",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0F0F0F"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#8A8A8A"; }}
              >
                Start over
              </button>
            </div>
          )}

          {/* RESULT: Ineligible */}
          {step === "ineligible" && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#F7F7F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#F0EDE8" />
                  <path d="M14 8v7M14 18v1" stroke="#8A8A8A" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#8A8A8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                Not yet eligible for standard facilities
              </p>
              <h3
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 800,
                  color: "#0F0F0F",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "12px",
                }}
              >
                Let&apos;s find the right solution for you.
              </h3>
              <p style={{ fontSize: "14px", color: "#595959", lineHeight: 1.65, maxWidth: "440px", margin: "0 auto 32px" }}>
                You may not qualify for our standard trade finance facilities right now, but our team
                can explore alternative structures — including smaller facilities, shorter tenors, and
                accelerated trading history reviews.
              </p>
              <a
                href="#"
                style={{
                  display: "block",
                  backgroundColor: "#0F0F0F",
                  color: "white",
                  borderRadius: "14px",
                  padding: "16px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: "12px",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Speak to our team about alternatives →
              </a>
              <button
                onClick={reset}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "13px",
                  color: "#8A8A8A",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Try again with different details
              </button>
            </div>
          )}
        </div>

        {/* Trust note */}
        {(step === 1 || step === 2 || step === 3 || step === 4) && (
          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#B0B0B0",
              marginTop: "20px",
              lineHeight: 1.5,
            }}
          >
            No credit check · No commitment · Takes under 60 seconds
          </p>
        )}
      </div>
    </section>
  );
}
