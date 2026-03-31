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

const stats = [
  { num: "47+", label: "Tech clients" },
  { num: "3.2×", label: "Avg. pipeline growth" },
  { num: "< 24h", label: "Response time" },
  { num: "100%", label: "Tech-focused" },
];

const team = [
  { name: "Juliana So", role: "Founder & Strategy", handle: "@jyuloso" },
];

// Sample ad creative cards
const ads = [
  {
    bg: "#080808",
    accent: "#166534",
    tag: "Paid Social · Tech Campaign",
    headline: "Your product is ready.\nIs your audience?",
    sub: "Growth marketing for companies that build things that matter.",
    cta: "See how →",
    style: "dark",
  },
  {
    bg: "#166534",
    accent: "#f5f5f0",
    tag: "Brand Awareness · SaaS",
    headline: "Less noise.\nMore pipeline.",
    sub: "O(1) connects B2B tech to the buyers already looking for it.",
    cta: "Start today →",
    style: "green",
  },
  {
    bg: "#f5f5f0",
    accent: "#166534",
    tag: "Performance · Developer Tools",
    headline: "Built for devs.\nMarketed like it.",
    sub: "We speak engineer. Your campaigns should too.",
    cta: "Learn more →",
    style: "light",
  },
  {
    bg: "#080808",
    accent: "#166534",
    tag: "GTM · AI Startup",
    headline: "Ship fast.\nGrow faster.",
    sub: "Zero-to-market strategies for teams moving at startup speed.",
    cta: "Let's build →",
    style: "dark",
  },
];

const whatWeDo = [
  {
    num: "01",
    title: "We market tech, not hype.",
    body: "Most agencies don't understand what you built. We do. We work exclusively with technology companies — AI, SaaS, dev tools, cloud, infrastructure — because that specificity is what makes the work better.",
  },
  {
    num: "02",
    title: "We reach the people who actually buy.",
    body: "No vanity metrics. No brand awareness theater. We build campaigns that reach decision-makers — the CTOs, product leads, and founders who sign off on tools like yours.",
  },
  {
    num: "03",
    title: "We move at your speed.",
    body: "Startups don't have time for six-week brand sprints. We operate in weeks, not quarters. Fast intake, faster output, constant feedback loop.",
  },
];

export default function AboutPage() {
  const [activeAd, setActiveAd] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveAd((a) => (a + 1) % ads.length), 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "#080808", color: "#f5f5f0", minHeight: "100vh", fontFamily: "'Syne', sans-serif" }}>
      <Cursor />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "24px 56px",
        background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 15, color: "#f5f5f0", letterSpacing: "0.05em", fontWeight: 500 }}>O(1)</span>
        </Link>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,245,240,0.4)" }}>
          About
        </span>
        <Link href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.55)", textDecoration: "none" }}>
          ← Back
        </Link>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "180px 56px 120px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", right: "-40px", transform: "translateY(-50%)",
          fontFamily: "'DM Mono', monospace", fontSize: "clamp(140px, 18vw, 260px)",
          color: "rgba(22,101,52,0.06)", fontWeight: 500, pointerEvents: "none",
          letterSpacing: "-0.04em", lineHeight: 1, whiteSpace: "nowrap"
        }}>ABOUT</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
              Who we are
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(52px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.02em", marginBottom: 36 }}>
              We make tech<br />companies <em style={{ color: "#166534", fontStyle: "italic" }}>impossible<br />to ignore.</em>
            </h1>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", maxWidth: 420, letterSpacing: "0.02em" }}>
              O(1) is a technology marketing agency. We help tech companies — startups, SaaS products, developer tools, AI platforms — find their audiences and grow without the bloat.
            </p>
          </div>

          {/* Animated ad preview */}
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.35)", marginBottom: 16 }}>
              Sample creative ↓
            </div>
            <div style={{ position: "relative", height: 280 }}>
              {ads.map((ad, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute", inset: 0,
                    background: ad.bg,
                    border: `1px solid ${ad.style === "light" ? "rgba(8,8,8,0.12)" : "rgba(255,255,255,0.08)"}`,
                    padding: "40px 44px",
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                    opacity: activeAd === i ? 1 : 0,
                    transition: "opacity 0.7s cubic-bezier(.16,1,.3,1)",
                    pointerEvents: activeAd === i ? "auto" : "none",
                  }}
                >
                  {/* diagonal texture */}
                  <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, transparent, transparent 32px, rgba(255,255,255,0.015) 32px, rgba(255,255,255,0.015) 33px)", pointerEvents: "none" }} />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ad.style === "light" ? "rgba(8,8,8,0.4)" : "rgba(245,245,240,0.4)", marginBottom: 28 }}>
                      {ad.tag}
                    </div>
                    <div style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      lineHeight: 1.05, letterSpacing: "-0.02em",
                      color: ad.style === "light" ? "#080808" : "#f5f5f0",
                      whiteSpace: "pre-line", marginBottom: 16
                    }}>
                      {ad.headline}
                    </div>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 300, lineHeight: 1.8, color: ad.style === "light" ? "rgba(8,8,8,0.6)" : "rgba(245,245,240,0.6)", maxWidth: 300 }}>
                      {ad.sub}
                    </p>
                  </div>

                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <a href="/contact" target="_blank" rel="noopener noreferrer" style={{
  fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500,
  letterSpacing: "0.1em", color: ad.accent, textDecoration: "none"
}}>
  {ad.cta}
</a>
                    <O1Logo size={48} color={ad.accent} bgColor={ad.bg} />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {ads.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveAd(i)}
                  style={{
                    width: activeAd === i ? 24 : 6, height: 6,
                    background: activeAd === i ? "#166534" : "rgba(255,255,255,0.2)",
                    border: "none", cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(.16,1,.3,1)",
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <div key={s.label} className="reveal" style={{
            padding: "56px 48px",
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 40, fontWeight: 500, color: "#f5f5f0", letterSpacing: "-0.03em", marginBottom: 8 }}>{s.num}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,245,240,0.5)" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            What we do
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            Simple idea.<br /><em style={{ color: "#166534" }}>Precise execution.</em>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {whatWeDo.map((item, i) => (
            <div key={item.num} className="reveal" style={{
              display: "grid", gridTemplateColumns: "80px 1fr 1fr",
              gap: 48, padding: "48px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              alignItems: "start"
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#166534", letterSpacing: "0.1em" }}>{item.num}</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.01em" }}>{item.title}</div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SAMPLE ADS GRID ── */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            Creative samples
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            What our work<br /><em style={{ color: "#166534" }}>looks like.</em>
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.7)", maxWidth: 480, marginTop: 20 }}>
            Clean. Direct. Built for the people your product is actually for. No buzzwords, no stock photos, no fluff.
          </p>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {ads.map((ad, i) => (
            <AdCard key={i} ad={ad} index={i} />
          ))}
        </div>
      </section>

      {/* ── THE NAME ── */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div className="reveal" style={{ position: "relative", height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[320, 240, 160].map((r, i) => (
            <div key={r} style={{
              width: r, height: r,
              border: `1px solid rgba(22,101,52,${0.15 + i * 0.1})`,
              borderRadius: "50%", position: "absolute",
              animation: `spin ${30 - i * 8}s linear infinite`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse"
            }} />
          ))}
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 56, fontWeight: 500, color: "#166534", letterSpacing: "-0.04em", lineHeight: 1 }}>O(1)</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.35)", marginTop: 8 }}>constant time</div>
          </div>
        </div>

        <div className="reveal">
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            The name
          </div>
          <blockquote style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 28, fontStyle: "italic" }}>
            "The best systems perform the same at any scale."
          </blockquote>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)", marginBottom: 20 }}>
            O(1) is a computer science term. It describes an algorithm that runs in constant time — it doesn't slow down as the input grows.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 300, lineHeight: 1.9, color: "rgba(245,245,240,0.75)" }}>
            That's our standard for marketing. Whether you're talking to 100 buyers or 100,000, every interaction should be just as sharp, just as relevant, just as effective.
          </p>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section style={{ padding: "120px 56px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}>
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: "#166534", display: "inline-block" }} />
            Who we work with
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            Tech companies.<br /><em style={{ color: "#166534" }}>Only.</em>
          </h2>
        </div>

        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            { type: "AI & ML", desc: "Platforms, models, copilots, and applied intelligence products." },
            { type: "SaaS", desc: "B2B software products at every stage — seed to series C and beyond." },
            { type: "Developer Tools", desc: "CLIs, SDKs, APIs, and infrastructure that engineers actually use." },
            { type: "Cloud & Infra", desc: "Storage, compute, observability, security, and DevOps tooling." },
            { type: "Fintech", desc: "Payments, lending, compliance, and financial infrastructure tech." },
            { type: "Deep Tech", desc: "Hardware, biotech, robotics, and technology with long horizons." },
          ].map((item) => (
            <div key={item.type} style={{
              padding: "40px 36px", border: "1px solid rgba(255,255,255,0.06)",
              transition: "background 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(22,101,52,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 12, color: "#f5f5f0" }}>{item.type}</div>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(245,245,240,0.7)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "140px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'DM Mono', monospace", fontSize: "clamp(160px,22vw,300px)", color: "rgba(22,101,52,0.04)", fontWeight: 500, lineHeight: 1, pointerEvents: "none", letterSpacing: "-0.04em", whiteSpace: "nowrap" }}>O(1)</div>
        <div className="reveal" style={{ position: "relative" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#166534", marginBottom: 28 }}>
            Ready to work together?
          </div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 48 }}>
            Let's build something<br /><em style={{ color: "#166534" }}>efficient.</em>
          </h2>
          <Link href="/contact" style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#080808", background: "#f5f5f0",
            padding: "18px 48px", textDecoration: "none",
            display: "inline-block", transition: "background 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#166534") && (e.currentTarget.style.color = "#f5f5f0")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f5f5f0") && (e.currentTarget.style.color = "#080808")}
          >
            Start a project →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function AdCard({ ad, index }: { ad: typeof ads[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: ad.bg,
        border: `1px solid ${ad.style === "light" ? "rgba(8,8,8,0.1)" : "rgba(255,255,255,0.08)"}`,
        padding: "56px 52px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: 320, position: "relative", overflow: "hidden",
        transition: "transform 0.3s cubic-bezier(.16,1,.3,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "pointer"
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(255,255,255,0.015) 28px, rgba(255,255,255,0.015) 29px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: ad.style === "light" ? "rgba(8,8,8,0.4)" : "rgba(245,245,240,0.4)", marginBottom: 32 }}>
          {ad.tag}
        </div>
        <div style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(32px, 3.5vw, 48px)",
          lineHeight: 1.05, letterSpacing: "-0.02em",
          color: ad.style === "light" ? "#080808" : "#f5f5f0",
          whiteSpace: "pre-line", marginBottom: 20
        }}>
          {ad.headline}
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: ad.style === "light" ? "rgba(8,8,8,0.6)" : "rgba(245,245,240,0.65)", maxWidth: 360 }}>
          {ad.sub}
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 40 }}>
      <a href="/contact" target="_blank" rel="noopener noreferrer" style={{
  fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 500,
  letterSpacing: hovered ? "0.2em" : "0.1em",
  color: ad.accent, textDecoration: "none",
  transition: "letter-spacing 0.2s",
}}>
  {ad.cta}
</a>
        <O1Logo size={64} color={ad.accent} bgColor={ad.bg} />
      </div>
    </div>
  );
}