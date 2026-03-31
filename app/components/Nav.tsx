"use client";
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "15px", color: "#f5f5f0", letterSpacing: "0.05em", fontWeight: 500 }}>
          O(1)
        </span>
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#process">Process</a></li>
      </ul>
      <Link href="/contact" target="_blank" rel="noopener noreferrer">
        <button className="nav-cta">Start a project</button>
      </Link>
    </nav>
  );
}