"use client";
import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ringRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovered(
        target.tagName === "A" || target.tagName === "BUTTON" ||
        !!target.closest("a") || !!target.closest("button")
      );
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ringRef.current.x += (cursor.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (cursor.y - ringRef.current.y) * 0.12;
      setRing({ ...ringRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cursor.x, cursor.y]);

  return (
    <>
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <div className={`cursor-ring${hovered ? " hovered" : ""}`} style={{ left: ring.x, top: ring.y }} />
    </>
  );
}