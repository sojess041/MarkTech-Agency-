"use client";
import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Ticker from "./pages/Ticker";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Manifesto from "./pages/Manifesto";
import ProcessSection from "./pages/Process";
import CTA from "./pages/CTA";
import Footer from "./pages/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Work />
      <Manifesto />
      <ProcessSection />
      <CTA />
      <Footer />
    </>
  );
}