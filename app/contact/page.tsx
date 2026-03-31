"use client";
import { useState } from "react";
import Cursor from "../components/Cursor";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    mobile: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const ready = form.company && form.name && form.email;

  return (
    <div style={{ background: "#080808", color: "#f5f5f0", minHeight: "100vh", fontFamily: "'Syne', sans-serif" }}>
      <Cursor />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 56px",
        background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#f5f5f0", letterSpacing: "0.05em", fontWeight: 500 }}>O(1)</span>
        </Link>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,245,240,0.4)" }}>
          Start a Project
        </span>
        <Link href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.5)", textDecoration: "none" }}>
          ← Back
        </Link>
      </nav>

      {!submitted ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>

          {/* LEFT PANEL */}
          <div style={{
            padding: "140px 64px 80px",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            position: "sticky", top: 0, height: "100vh", overflow: "hidden"
          }}>
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              fontFamily: "'DM Mono', monospace", fontSize: "clamp(120px, 16vw, 200px)",
              color: "rgba(22,101,52,0.05)", fontWeight: 500, lineHeight: 1,
              pointerEvents: "none", letterSpacing: "-0.04em", userSelect: "none"
            }}>O(1)</div>

            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em",
                textTransform: "uppercase", color: "#166534", marginBottom: 28,
                display: "flex", alignItems: "center", gap: 10
              }}>
                <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
                New Engagement
              </div>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 32
              }}>
                Let's build<br />something<br /><em style={{ color: "#166534", fontStyle: "italic" }}>efficient.</em>
              </h1>
              <p style={{
                fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300,
                lineHeight: 1.9, color: "rgba(245,245,240,0.7)", maxWidth: 360, letterSpacing: "0.03em"
              }}>
                Fill in your details and we'll get back to you within 24 hours to discuss your project.
              </p>
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 8 }}>
                Reach us directly
              </div>
              {[
                { label: "Phone", value: "(646) 575-4044", href: "tel:6465754044" },
                { label: "Personal", value: "jyuloso@bu.edu", href: "mailto:jyuloso@bu.edu" },
                { label: "Agency", value: "of1@gmail.com", href: "mailto:of1@gmail.com" },
              ].map((item) => (
                <a key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "14px 20px",
                      border: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(255,255,255,0.01)",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(22,101,52,0.4)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(22,101,52,0.04)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)";
                    }}
                  >
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,245,240,0.4)" }}>{item.label}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f5f5f0", fontWeight: 500 }}>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL — FORM */}
          <div style={{ padding: "140px 64px 80px", overflowY: "auto" }}>
            <div style={{ marginBottom: 56 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 8 }}>
                Your details
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Tell us about<br /><em style={{ color: "#166534" }}>your project.</em>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>

              <Field
                label="Company Name *"
                value={form.company}
                onChange={(v) => update("company", v)}
                focused={focused === "company"}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused(null)}
                placeholder="Acme Corp"
              />

              <Field
                label="Your Name *"
                value={form.name}
                onChange={(v) => update("name", v)}
                focused={focused === "name"}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Jane Smith"
              />

              <Field
                label="Email Address *"
                value={form.email}
                onChange={(v) => update("email", v)}
                focused={focused === "email"}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="jane@acme.com"
                type="email"
              />

              <Field
                label="Mobile Number"
                value={form.mobile}
                onChange={(v) => update("mobile", v)}
                focused={focused === "mobile"}
                onFocus={() => setFocused("mobile")}
                onBlur={() => setFocused(null)}
                placeholder="+1 (000) 000-0000"
                type="tel"
              />

              {/* Notes */}
              <div style={{
                border: `1px solid ${focused === "notes" ? "#166534" : "rgba(255,255,255,0.08)"}`,
                transition: "border-color 0.2s",
                background: "rgba(255,255,255,0.01)"
              }}>
                <div style={{
                  padding: "12px 20px 0",
                  fontFamily: "'DM Mono', monospace", fontSize: 9,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: focused === "notes" ? "#166534" : "rgba(245,245,240,0.4)",
                  transition: "color 0.2s"
                }}>
                  Anything to note
                </div>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  onFocus={() => setFocused("notes")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us about your product, goals, timeline, or anything else we should know."
                  rows={5}
                  style={{
                    width: "100%", background: "transparent", border: "none", outline: "none",
                    fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300,
                    color: "#f5f5f0", padding: "12px 20px 20px", resize: "none",
                    letterSpacing: "0.03em", lineHeight: 1.8
                  }}
                />
              </div>
            </div>

            {/* Submit */}
            <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 20 }}>
              <button
                onClick={() => ready && setSubmitted(true)}
                style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: ready ? "#080808" : "rgba(245,245,240,0.3)",
                  background: ready ? "#f5f5f0" : "rgba(255,255,255,0.06)",
                  border: "none", padding: "18px 48px",
                  cursor: ready ? "pointer" : "not-allowed",
                  transition: "all 0.25s"
                }}
                onMouseEnter={e => { if (ready) { (e.currentTarget as HTMLElement).style.background = "#166534"; (e.currentTarget as HTMLElement).style.color = "#f5f5f0"; } }}
                onMouseLeave={e => { if (ready) { (e.currentTarget as HTMLElement).style.background = "#f5f5f0"; (e.currentTarget as HTMLElement).style.color = "#080808"; } }}
              >
                Send enquiry →
              </button>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(245,245,240,0.4)", letterSpacing: "0.1em" }}>
                {!ready ? "* Required fields missing" : "Ready to send"}
              </span>
            </div>
          </div>
        </div>

      ) : (
        /* SUCCESS STATE */
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 56px", textAlign: "center", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            fontFamily: "'DM Mono', monospace", fontSize: "clamp(160px, 22vw, 300px)",
            color: "rgba(22,101,52,0.05)", fontWeight: 500, lineHeight: 1,
            pointerEvents: "none", letterSpacing: "-0.04em", whiteSpace: "nowrap"
          }}>O(1)</div>

          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#166534", marginBottom: 28,
            display: "flex", alignItems: "center", gap: 10, position: "relative"
          }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            Enquiry received
          </div>

          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(48px, 6vw, 88px)",
            lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 24, position: "relative"
          }}>
            We'll be in touch<br /><em style={{ color: "#166534" }}>within 24 hours.</em>
          </h2>

          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300,
            lineHeight: 1.9, color: "rgba(245,245,240,0.7)",
            maxWidth: 400, marginBottom: 56, letterSpacing: "0.03em", position: "relative"
          }}>
            Thanks {form.name.split(" ")[0]}. We've received your enquiry for {form.company} and will be in touch at {form.email} shortly.
          </p>

          <Link href="/" style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#080808", background: "#f5f5f0",
            padding: "16px 40px", textDecoration: "none"
          }}>
            ← Back to site
          </Link>
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange, focused, onFocus, onBlur, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  focused: boolean; onFocus: () => void; onBlur: () => void;
  placeholder: string; type?: string;
}) {
  return (
    <div style={{
      border: `1px solid ${focused ? "#166534" : "rgba(255,255,255,0.08)"}`,
      transition: "border-color 0.2s", background: "rgba(255,255,255,0.01)",
      marginBottom: 0
    }}>
      <div style={{
        padding: "12px 20px 0", fontFamily: "'DM Mono', monospace", fontSize: 9,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: focused ? "#166534" : "rgba(245,245,240,0.4)", transition: "color 0.2s"
      }}>
        {label}
      </div>
      <input
        type={type} value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus} onBlur={onBlur} placeholder={placeholder}
        style={{
          width: "100%", background: "transparent", border: "none", outline: "none",
          fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300,
          color: "#f5f5f0", padding: "8px 20px 16px", letterSpacing: "0.03em"
        }}
      />
    </div>
  );
}