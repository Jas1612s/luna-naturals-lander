"use client";

import Image from "next/image";
import { useState, useId } from "react";

const inputBase: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  padding: "14px 16px",
  fontSize: "14px",
  color: "#F0F0F0",
  backgroundColor: "#1C1C1C",
  outline: "none",
  appearance: "none" as const,
  boxSizing: "border-box" as const,
  minHeight: "48px",
};

const srOnly: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: "0",
};

function LabeledInput({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={srOnly}>{label}{required ? " (required)" : ""}</label>
      <input
        id={id}
        type={type}
        placeholder={label + (required ? "*" : "")}
        required={required}
        autoComplete={autoComplete}
        aria-label={label}
        style={inputBase}
        onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
      />
    </div>
  );
}

function LabeledSelect({
  id,
  label,
  options,
}: {
  id: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} style={srOnly}>{label}</label>
      <div style={{ position: "relative" }}>
        <select
          id={id}
          defaultValue=""
          aria-label={label}
          style={{ ...inputBase, paddingRight: "40px", cursor: "pointer" }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
        >
          <option value="" disabled style={{ backgroundColor: "#1C1C1C" }}>{label}</option>
          {options.map((o) => <option key={o} value={o} style={{ backgroundColor: "#1C1C1C" }}>{o}</option>)}
        </select>
        <svg
          style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

export function TreydContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const uid = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1200);
  }

  return (
    <section style={{ backgroundColor: "#111111", padding: "0" }}>
      <div
        className="grid lg:grid-cols-[45%_55%]"
        style={{ minHeight: "760px" }}
      >
        {/* Left — photo */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 32px 32px 0",
            minHeight: "500px",
          }}
        >
          <Image
            src="/images/treyd/contact-phone.webp"
            alt="Vintage telephone editorial"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right — dark form panel */}
        <div
          style={{
            backgroundColor: "#161616",
            borderRadius: "32px 0 0 0",
            padding: "64px 56px 80px",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 700,
              color: "#F0F0F0",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Let&apos;s get to know each other first
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.5)",
              marginBottom: "36px",
              maxWidth: "460px",
            }}
          >
            If you haven&apos;t yet applied for a limit, let&apos;s first have a chat to see if we&apos;re a match.
            Please get in touch with details about your business and we&apos;ll take it from there.
          </p>

          {status === "success" ? (
            <div
              role="alert"
              style={{
                backgroundColor: "#1C2A20",
                border: "1px solid rgba(0,200,100,0.2)",
                borderRadius: "12px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3DBE6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px" }} aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#3DBE6C", marginBottom: "8px" }}>Message sent!</p>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>We&apos;ll be in touch within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }} noValidate>
              {/* Row 1: First + Last name */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <LabeledInput id={`${uid}-fname`} label="First name" required autoComplete="given-name" />
                <LabeledInput id={`${uid}-lname`} label="Last name" required autoComplete="family-name" />
              </div>

              <LabeledInput id={`${uid}-company`} label="Registered company name" required autoComplete="organization" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <LabeledInput id={`${uid}-email`} label="Company e-mail" type="email" required autoComplete="email" />
                <LabeledInput id={`${uid}-phone`} label="Phone number" type="tel" required autoComplete="tel" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <LabeledSelect
                  id={`${uid}-physical`}
                  label="Does your company sell physical goods?"
                  options={["Yes", "No"]}
                />
                <LabeledSelect
                  id={`${uid}-revenue`}
                  label="Estimated annual company revenue"
                  options={["Under £200K", "£200K–£500K", "£500K–£1M", "£1M–£5M", "£5M+"]}
                />
              </div>

              <LabeledSelect
                id={`${uid}-year`}
                label="Founding year"
                options={Array.from({ length: 30 }, (_, i) => String(2025 - i))}
              />

              <LabeledInput id={`${uid}-source`} label="How did you hear about Treyd?" />

              <div>
                <label htmlFor={`${uid}-message`} style={srOnly}>Message</label>
                <textarea
                  id={`${uid}-message`}
                  placeholder="Message"
                  rows={4}
                  aria-label="Message"
                  style={{
                    ...inputBase,
                    resize: "vertical",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
              </div>

              {/* Consent */}
              <div style={{ marginTop: "4px" }}>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.55, marginBottom: "10px" }}>
                  By submitting the form you consent to Treyd&apos;s{" "}
                  <a href="#" style={{ color: "#3DBE6C", textDecoration: "underline" }}>Privacy Policy</a>
                  {" "}and to receive occasional emails
                </p>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    style={{ marginTop: "2px", width: "18px", height: "18px", flexShrink: 0, cursor: "pointer", accentColor: "#006B2E" }}
                  />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                    I agree to receive other communications from Treyd.*
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "8px",
                  alignSelf: "flex-start",
                  backgroundColor: "#006B2E",
                  color: "#ffffff",
                  borderRadius: "10px",
                  border: "none",
                  padding: "16px 40px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "opacity 0.15s",
                  minWidth: "140px",
                }}
                onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={(e) => { if (status !== "loading") e.currentTarget.style.opacity = "1"; }}
              >
                {status === "loading" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ animation: "spin 0.8s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : "Submit"}
              </button>

              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
