"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "motion.div";
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouse}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle 180px at ${pos.x}px ${pos.y}px, rgba(212,165,116,0.15), transparent 100%)`,
          }}
        />
      </div>
      {children}
    </div>
  );
}
