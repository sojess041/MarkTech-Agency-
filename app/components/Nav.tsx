"use client";
import { useState, useEffect } from "react";

function O1Logo({ size = 36, color = "#166534" }: { size?: number; color?: string }) {
    return (
      <svg width={size} height={size} viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="52" cy="60" r="48" fill={color} />
        <circle cx="52" cy="60" r="22" fill="#080808" />
        <text x="108" y="72" fontFamily="'DM Serif Display', serif" fontSize="38" fill={color} fontStyle="italic">(1)</text>
      </svg>
    );
  }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <O1Logo size={36} color="#166534" />
        <span style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "#f5f5f0", letterSpacing: "0.05em", fontWeight: 500 }}>
          O(1)
        </span>
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#process">Process</a></li>
      </ul>
      <button className="nav-cta">Start a project</button>
    </nav>
  );
}