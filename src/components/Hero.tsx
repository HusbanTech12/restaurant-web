"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.08, 0.15, 0.08],
        scale: [1, 1.1, 1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </motion.div>

      <FloatingShape className="w-72 h-72 bg-primary/15 blur-3xl top-1/4 -left-20" delay={0} />
      <FloatingShape className="w-96 h-96 bg-white/5 blur-3xl bottom-1/4 -right-32" delay={1.5} />
      <FloatingShape className="w-48 h-48 bg-primary/10 blur-3xl top-1/3 right-1/4" delay={3} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              animate={{
                borderColor: ["rgba(255,255,255,0.1)", "rgba(212,165,116,0.4)", "rgba(255,255,255,0.1)"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/90 tracking-widest uppercase mb-6 border"
            >
              Welcome to Savory Bistro &amp; Grill
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            <span className="inline-block">Where Every Meal</span>
            <br />
            <motion.span
              className="inline-block text-primary bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Tells a Story
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Indulge in a culinary journey of handcrafted dishes made from the freshest locally-sourced ingredients,
            paired with an exceptional dining experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/menu"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50"
              >
                <span>Explore Our Menu</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/reservations"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-200 border border-white/20 hover:border-white/60 hover:shadow-lg hover:shadow-white/10"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
