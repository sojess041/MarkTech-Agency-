"use client";
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
import Link from "next/link";

function O1Logo({ size = 100, color = "#166534", bgColor = "#080808" }: { size?: number; color?: string; bgColor?: string }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 192 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="52" cy="60" r="48" fill={color} />
      <circle cx="52" cy="60" r="22" fill={bgColor} />
      <path d="M118 28 Q100 60 118 92" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      <line x1="136" y1="36" x2="136" y2="88" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <line x1="122" y1="50" x2="136" y2="36" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M158 28 Q176 60 158 92" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const colors = [
  { name: "Forest", hex: "#166534", role: "Primary Accent", usage: "CTAs, highlights, logo mark, key UI accents" },
  { name: "Void", hex: "#080808", role: "Primary Background", usage: "Page backgrounds, dark surfaces" },
  { name: "Parchment", hex: "#f5f5f0", role: "Primary Foreground", usage: "Body text, headlines on dark" },
  { name: "Muted", hex: "rgba(245,245,240,0.35)", role: "Secondary Text", usage: "Captions, labels, supporting copy" },
  { name: "Dim Green", hex: "#14532d", role: "Hover / Depth", usage: "Hover states, pressed states, shadows" },
];

const doRules = [
  "Use generous negative space — let the work breathe",
  "Lead with data and outcomes, not adjectives",
  "Pair DM Serif Display (headlines) with DM Mono (UI/body)",
  "Keep green as a deliberate accent, never a flood",
  "Use the O ring mark at minimum 32px rendered height",
  "Maintain consistent grid alignment across all touchpoints",
];

const dontRules = [
  "Don't use gradients, drop shadows, or lens flares",
  "Don't use more than two typefaces in any composition",
  "Don't place the logo on busy or low-contrast backgrounds",
  "Don't stretch, rotate, or recolor the logo mark",
  "Don't use stock photography — prefer data viz and type",
  "Don't mistake minimalism for emptiness — every element earns its place",
];

const values = [
  { word: "Minimal", def: "Stripped of everything that doesn't serve the message. Not sparse — precise.", symbol: "—" },
  { word: "Tech-Forward", def: "We speak the language of engineers and builders. We don't translate — we inhabit.", symbol: "//" },
  { word: "Legible", def: "Complex ideas, made clear. Our job is to remove the distance between product and audience.", symbol: "∅" },
  { word: "Efficient", def: "O(1) — constant time. Every brand decision should perform identically at any scale.", symbol: "O(1)" },
  { word: "Creative", def: "Minimalism is not a cage. We find the unexpected move within the constraint.", symbol: "◆" },
  { word: "New", def: "We don't follow category norms. Tech marketing has been boring long enough.", symbol: "→" },
];

const prohibitedUses = [
  {
    label: "Don't rotate",
    desc: "The mark must always appear upright. No angled or tilted usage.",
    render: () => (
      <div style={{ transform: "rotate(25deg)", opacity: 0.6 }}>
        <O1Logo size={56} color="#f5f5f0" bgColor="#1a1a1a" />
      </div>
    ),
  },
  {
    label: "Don't stretch",
    desc: "Never distort the proportions — width and height must remain locked.",
    render: () => (
      <div style={{ transform: "scaleX(1.5)", opacity: 0.6 }}>
        <O1Logo size={56} color="#f5f5f0" bgColor="#1a1a1a" />
      </div>
    ),
  },
  {
    label: "Don't recolor",
    desc: "Only approved color combinations. No arbitrary brand colors.",
    render: () => (
      <O1Logo size={56} color="#e03b3b" bgColor="#1a1a1a" />
    ),
  },
  {
    label: "Don't add effects",
    desc: "No drop shadows, glows, outlines, or emboss treatments.",
    render: () => (
      <div style={{ filter: "drop-shadow(0 0 12px rgba(255,100,100,0.8))", opacity: 0.6 }}>
        <O1Logo size={56} color="#f5f5f0" bgColor="#1a1a1a" />
      </div>
    ),
  },
  {
    label: "Don't place on busy backgrounds",
    desc: "Always ensure sufficient contrast. No patterned or photographic backgrounds.",
    render: () => (
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", inset: -8,
          background: "repeating-linear-gradient(45deg, #2a2a2a, #2a2a2a 4px, #3a3a3a 4px, #3a3a3a 8px)",
        }} />
        <div style={{ position: "relative", opacity: 0.5 }}>
          <O1Logo size={56} color="#f5f5f0" bgColor="transparent" />
        </div>
      </div>
    ),
  },
  {
    label: "Don't use low contrast",
    desc: "Never place the mark on a background too close in value.",
    render: () => (
      <O1Logo size={56} color="#1f4a2e" bgColor="#1a1a1a" />
    ),
  },
];

export default function BrandPage() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <div style={{ background: "#080808", color: "#f5f5f0", minHeight: "100vh", fontFamily: "'Syne', sans-serif" }}>
      <Cursor />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 56px",
        background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <O1Logo size={32} color="#166534" bgColor="#080808" />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#f5f5f0", letterSpacing: "0.05em" }}>O(1)</span>
        </Link>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,245,240,0.55)" }}>
          Brand Guidelines
        </span>
        <Link href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.65)", textDecoration: "none" }}>
          ← Back to site
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ padding: "180px 56px 120px", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", right: "-60px", transform: "translateY(-50%)",
          fontFamily: "'DM Mono', monospace", fontSize: "clamp(160px, 20vw, 280px)",
          color: "rgba(22,101,52,0.17)", fontWeight: 600, pointerEvents: "none",
          letterSpacing: "-0.04em", lineHeight: 1, whiteSpace: "nowrap"
        }}>BRAND</div>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            Our Identity · v1.0
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(56px, 7vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 40 }}>
            Brand Mark<br /><em style={{ color: "#166534", fontStyle: "italic" }}>Guidelines</em>
          </h1>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 300, lineHeight: 1.9, letterSpacing: "0.03em", color: "rgba(245,245,240,0.9)", maxWidth: 560 }}>
            This document defines the visual and verbal identity of O(1). These are not suggestions — they are the system. Every element here exists because it earns its place. Apply it with precision, and the brand compounds. Deviate, and it dissolves.
          </p>
        </div>
      </section>

      {/* 01 — LOGO */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="01" title="Logo" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.90)", maxWidth: 520, marginTop: 20 }}>
            The O(1) mark is built from two elements: the O ring — a symbol of completeness and constant performance — and the (1) notation, referencing algorithmic efficiency. Together they form a single, indivisible identity.
          </p>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 2 }}>
          <LogoSwatch bg="#080808" label="Primary — Dark" sublabel="Default usage"><O1Logo size={130} color="#166534" bgColor="#080808" /></LogoSwatch>
          <LogoSwatch bg="#f5f5f0" label="Primary — Light" sublabel="On light backgrounds"><O1Logo size={130} color="#166534" bgColor="#f5f5f0" /></LogoSwatch>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 64 }}>
          <LogoSwatch bg="#166534" label="Reversed — Green" sublabel="On brand color"><O1Logo size={130} color="#f5f5f0" bgColor="#166534" /></LogoSwatch>
          <LogoSwatch bg="#080808" label="Monochrome" sublabel="Single color contexts"><O1Logo size={130} color="rgba(245,245,240,0.25)" bgColor="#080808" /></LogoSwatch>
        </div>
        <div className="reveal" style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "48px", display: "flex", alignItems: "center", gap: 64 }}>
          <div style={{ position: "relative", padding: 32, flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, border: "1px dashed rgba(22,101,52,1.5)" }} />
            <O1Logo size={80} color="#166534" bgColor="#080808" />
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, letterSpacing: "0.5em", textTransform: "uppercase", color: "#166534", marginBottom: 12 }}>Clearspace Rule</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.96)", maxWidth: 380 }}>
              Always maintain a minimum clearspace equal to the height of the O ring around all sides of the logo mark. Never crowd it with other elements.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — PROHIBITED USE */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="02" title="Prohibited Use" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 520, marginTop: 20 }}>
            The following treatments are strictly off-limits. The integrity of the mark depends on consistent, disciplined application. When in doubt — don't.
          </p>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {prohibitedUses.map((item) => (
            <div key={item.label} style={{ border: "1px solid rgba(255,60,60,0.15)", padding: "40px 36px", position: "relative", background: "rgba(255,40,40,0.02)" }}>
              <div style={{
                position: "absolute", top: 16, right: 16,
                width: 22, height: 22, borderRadius: "50%",
                border: "1px solid rgba(255,80,80,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,100,100,0.7)"
              }}>✕</div>
              <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                {item.render()}
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,120,120,0.9)", marginBottom: 10 }}>
                {item.label}
              </div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(245,245,240,0.7)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — COLORS */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="03" title="Colors" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 520, marginTop: 20 }}>
            Click any swatch to copy the hex value. Use color with restraint — green is an accent, not a background.
          </p>
        </div>
        <div className="reveal" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
          {colors.map((c, i) => (
            <div
              key={c.hex}
              onClick={() => copyHex(c.hex)}
              style={{
                display: "grid", gridTemplateColumns: "96px 1fr 1fr 200px",
                alignItems: "center", gap: 40, padding: "32px 40px",
                borderBottom: i < colors.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                cursor: "pointer", transition: "background 0.2s",
                background: copied === c.hex ? "rgba(22,101,52,0.1)" : "transparent"
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = copied === c.hex ? "rgba(22,101,52,0.1)" : "transparent")}
            >
              <div style={{ width: 64, height: 64, background: c.hex, border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#166534" }}>{c.role}</div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, color: "rgba(245,245,240,0.75)", lineHeight: 1.7 }}>{c.usage}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: copied === c.hex ? "#166534" : "rgba(245,245,240,0.55)", textAlign: "right", letterSpacing: "0.05em" }}>
                {copied === c.hex ? "Copied!" : c.hex}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — TYPOGRAPHY */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="04" title="Typography" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 520, marginTop: 20 }}>
            Three typefaces, each with a defined role. Never mix beyond this system.
          </p>
        </div>
        <div className="reveal" style={{ marginBottom: 2, border: "1px solid rgba(255,255,255,0.1)", padding: "56px 48px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 32 }}>Display — DM Serif Display</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Constant<br /><em style={{ color: "#166534" }}>Efficiency.</em>
          </div>
          <div style={{ display: "flex", gap: 40, marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <TypeSpec label="Usage" value="Hero headlines, section titles, pull quotes" />
            <TypeSpec label="Weight" value="Regular, Italic" />
            <TypeSpec label="Size range" value="40px – 120px" />
          </div>
        </div>
        <div className="reveal" style={{ marginBottom: 2, border: "1px solid rgba(255,255,255,0.1)", padding: "56px 48px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 32 }}>Utility — DM Mono</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 32, fontWeight: 300, lineHeight: 1.3, letterSpacing: "0.02em", color: "rgba(245,245,240,0.9)", marginBottom: 16 }}>
            We connect ambitious tech companies<br />with the audiences that matter.
          </div>
          <div style={{ display: "flex", gap: 40, marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <TypeSpec label="Usage" value="All body, UI, labels, nav, data" />
            <TypeSpec label="Weight" value="300 Light, 400 Regular, 500 Medium" />
            <TypeSpec label="Size range" value="9px – 32px" />
          </div>
        </div>
        <div className="reveal" style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "56px 48px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 32 }}>UI Sans — Syne</div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase", marginBottom: 16 }}>
            DIAGNOSE · ARCHITECT<br />EXECUTE · OPTIMIZE
          </div>
          <div style={{ display: "flex", gap: 40, marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <TypeSpec label="Usage" value="Step titles, badges, eyebrow labels" />
            <TypeSpec label="Weight" value="700 Bold, 800 ExtraBold" />
            <TypeSpec label="Size range" value="10px – 20px, always uppercase" />
          </div>
        </div>
      </section>

      {/* 05 — BRAND MARK PLACEMENT */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="05" title="Brand Mark Placement" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 560, marginTop: 20 }}>
            Use a consistent grid to organize brand elements across all media and communications. The mark should always anchor to a defined zone — never float freely in a composition.
          </p>
        </div>
        <div className="reveal" style={{ marginBottom: 2 }}>
          <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "56px 48px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 32 }}>Layout Grid — 12 Column</div>
            <div style={{ position: "relative", background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", padding: "40px 32px", marginBottom: 40 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4, height: 120, marginBottom: 24 }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{
                    background: i < 2 ? "rgba(22,101,52,0.25)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${i < 2 ? "rgba(22,101,52,0.3)" : "rgba(255,255,255,0.06)"}`,
                    position: "relative"
                  }}>
                    {i === 0 && (
                      <div style={{ position: "absolute", bottom: -20, left: 0, fontFamily: "'DM Mono', monospace", fontSize: 8, color: "#166534", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>LOGO ZONE</div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, marginTop: 32 }}>
                <div style={{ width: "16.66%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(22,101,52,0.3)", padding: "12px 8px", background: "rgba(22,101,52,0.06)" }}>
                  <O1Logo size={28} color="#166534" bgColor="#080808" />
                </div>
                <div style={{ flex: 1, border: "1px solid rgba(255,255,255,0.08)", padding: "12px 20px", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(245,245,240,0.55)", letterSpacing: "0.1em" }}>Content area — columns 3 through 12</span>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
              {[
                { zone: "Top Left", rule: "Primary placement for all O(1) communications. Applies to letterheads, decks, and digital headers." },
                { zone: "Bottom Left", rule: "Secondary placement for footers, email signatures, and document footers. Minimum 24px from edge." },
                { zone: "Centered", rule: "Reserved for standalone brand moments only — covers, title slides, and campaign hero frames." },
              ].map((item) => (
                <div key={item.zone} style={{ padding: "28px 24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#166534", marginBottom: 10 }}>{item.zone}</div>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(245,245,240,0.75)" }}>{item.rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "48px", display: "flex", gap: 64, alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: 160, height: 200, border: "1px solid rgba(255,255,255,0.1)", position: "relative", background: "rgba(255,255,255,0.01)" }}>
              <div style={{ position: "absolute", top: 16, left: 16 }}>
                <O1Logo size={36} color="#166534" bgColor="#080808" />
              </div>
              <div style={{ position: "absolute", top: 0, left: 0, width: 16, height: "100%", borderRight: "1px dashed rgba(22,101,52,0.3)", background: "rgba(22,101,52,0.04)" }} />
              <div style={{ position: "absolute", top: 0, left: 0, height: 16, width: "100%", borderBottom: "1px dashed rgba(22,101,52,0.3)", background: "rgba(22,101,52,0.04)" }} />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 16 }}>Margin Rule</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 400 }}>
              The logo must always sit at least one logo-height away from any page edge. On digital formats, this equals a minimum 24px safe zone. On print, minimum 8mm.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — BUSINESS CARD */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="06" title="Business Card" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 560, marginTop: 20 }}>
            Follow this template for the O(1) group's business card. Dimensions are 3.5" × 2" (standard). Two sides — front carries identity, back carries contact. No deviation from the approved template.
          </p>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.6)", marginBottom: 20 }}>Front</div>
            <div style={{
              width: "100%", aspectRatio: "3.5 / 2", background: "#080808",
              border: "1px solid rgba(255,255,255,0.15)", position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px 32px"
            }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,101,52,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(22,101,52,0.03) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <O1Logo size={40} color="#166534" bgColor="#080808" />
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, letterSpacing: "-0.01em", marginBottom: 4 }}>Full Name</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534" }}>Role · O(1) Agency</div>
              </div>
            </div>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Background: #080808 (Void)",
                "Logo: top-left, 28px clearspace from edges",
                "Name: DM Serif Display, 18px",
                "Title: DM Mono, 9px, uppercase, green",
              ].map((note, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#166534", fontFamily: "'DM Mono', monospace", fontSize: 11, flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(245,245,240,0.7)", lineHeight: 1.6 }}>{note}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.6)", marginBottom: 20 }}>Back</div>
            <div style={{
              width: "100%", aspectRatio: "3.5 / 2", background: "#166534",
              border: "1px solid rgba(255,255,255,0.15)", position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px 32px"
            }}>
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.04) 20px, rgba(0,0,0,0.04) 21px)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.6)", marginBottom: 12 }}>Contact</div>
                {["(646) 575-4044", "of1@gmail.com", "o1.agency"].map((line) => (
                  <div key={line} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f5f5f0", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 1.8 }}>{line}</div>
                ))}
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,245,240,0.6)" }}>Constant Efficiency</div>
              </div>
            </div>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Background: #166534 (Forest green)",
                "Contact: DM Mono, 11px, white",
                "Tagline: DM Mono, 9px, uppercase, muted",
                "Diagonal texture overlay at 4% opacity",
              ].map((note, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#166534", fontFamily: "'DM Mono', monospace", fontSize: 11, flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(245,245,240,0.7)", lineHeight: 1.6 }}>{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 48, border: "1px solid rgba(255,255,255,0.1)", padding: "36px 48px", display: "flex", gap: 48, alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", flexShrink: 0 }}>Print Specs</div>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.1)" }} />
          {[
            { label: "Dimensions", value: '3.5" × 2"' },
            { label: "Bleed", value: "3mm all sides" },
            { label: "Safe zone", value: "5mm from edge" },
            { label: "Color mode", value: "CMYK" },
            { label: "Resolution", value: "300 DPI" },
          ].map((spec) => (
            <div key={spec.label}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.5)", marginBottom: 6 }}>{spec.label}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#f5f5f0", fontWeight: 500 }}>{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 07 — RULES */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="07" title="Rules" />
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ border: "1px solid rgba(22,101,52,0.25)", padding: "48px 40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 20, height: 20, border: "1px solid #166534", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✓</span>
              We do
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {doRules.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ color: "#166534", fontFamily: "'DM Mono', monospace", fontSize: 13, flexShrink: 0, marginTop: 1 }}>→</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "rgba(245,245,240,0.85)" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "48px 40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,245,240,0.5)", marginBottom: 32, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 20, height: 20, border: "1px solid rgba(245,245,240,0.2)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✕</span>
              We don't
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {dontRules.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(245,245,240,0.3)", fontFamily: "'DM Mono', monospace", fontSize: 13, flexShrink: 0, marginTop: 1 }}>—</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "rgba(245,245,240,0.5)", textDecoration: "line-through", textDecorationColor: "rgba(245,245,240,0.2)" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — VALUES */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <SectionLabel index="08" title="Values" />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 480, marginTop: 20 }}>
            Six principles that govern every creative decision at O(1). These are not aspirations — they are constraints that produce better work.
          </p>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {values.map((v, i) => (
            <div key={v.word} style={{ padding: "48px 36px", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(22,101,52,0.05)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ position: "absolute", top: 24, right: 28, fontFamily: "'DM Mono', monospace", fontSize: 28, fontWeight: 300, color: "rgba(22,101,52,0.2)", letterSpacing: "-0.02em" }}>{v.symbol}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#166534", marginBottom: 20, textTransform: "uppercase" }}>0{i + 1}</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: 16 }}>{v.word}</div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)" }}>{v.def}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "48px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <O1Logo size={28} color="#166534" bgColor="#080808" />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(245,245,240,0.45)", letterSpacing: "0.1em" }}>Brand Guidelines · 2026</span>
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(245,245,240,0.35)", letterSpacing: "0.1em" }}>Internal use only — O(1) Agency</span>
      </footer>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#166534", textTransform: "uppercase" }}>{index}</span>
      <span style={{ width: 1, height: 32, background: "rgba(22,101,52,0.4)", display: "inline-block" }} />
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 4vw, 60px)", lineHeight: 1, letterSpacing: "-0.02em" }}>{title}</h2>
    </div>
  );
}

function LogoSwatch({ bg, label, sublabel, children }: { bg: string; label: string; sublabel: string; children: React.ReactNode }) {
  return (
    <div style={{ background: bg, padding: "64px 48px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 32, border: "1px solid rgba(255,255,255,0.06)" }}>
      {children}
      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", color: bg === "#f5f5f0" ? "#080808" : "#f5f5f0", marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 300, letterSpacing: "0.1em", color: bg === "#f5f5f0" ? "rgba(8,8,8,0.55)" : "rgba(245,245,240,0.55)" }}>{sublabel}</div>
      </div>
    </div>
  );
}

function TypeSpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#166534", marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, color: "rgba(245,245,240,0.75)" }}>{value}</div>
    </div>
  );
}