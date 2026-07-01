"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReviewCarousel from "@/components/ReviewCarousel";
import Link from "next/link";
import { ArrowRight, Utensils, CalendarDays, Truck, Award, Sparkles } from "lucide-react";
import GlowCard from "@/components/GlowCard";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let raf: number;
    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const features = [
  {
    icon: Utensils,
    title: "Farm-to-Table Freshness",
    description: "We source ingredients from local farms to bring you the freshest flavors in every dish.",
  },
  {
    icon: Award,
    title: "Award-Winning Cuisine",
    description: "Recognized for culinary excellence with multiple industry awards and rave reviews.",
  },
  {
    icon: CalendarDays,
    title: "Reserve Your Experience",
    description: "Book a table for any occasion and let us create a memorable dining experience for you.",
  },
  {
    icon: Truck,
    title: "Order for Pickup",
    description: "Enjoy Savory at home with our easy online ordering system for pickup and delivery.",
  },
];

function SectionHeader({ label, title, highlight }: { label: string; title: string; highlight?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-primary font-semibold text-sm tracking-widest uppercase"
      >
        {label}
      </motion.span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-3 mb-4">
        {title}{highlight && <> <span className="text-primary">{highlight}</span></>}
      </h2>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Why Choose Us" title="The Savory" highlight="Difference" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -10, scale: 1.04 }}
              >
                <GlowCard className="text-center bg-white rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-200">
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-200"
                >
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" />
                </motion.div>
                <h3 className="text-lg font-semibold text-accent mb-2 group-hover:text-primary transition-colors duration-200">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedMenu />

      <section className="py-20 sm:py-28 bg-card relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-primary font-semibold text-sm tracking-widest uppercase"
              >
                Our Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-accent mt-3 mb-4"
              >
                A Passion for <br />
                <span className="text-primary">Exceptional Dining</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-muted leading-relaxed mb-6"
              >
                Founded in 2015, Savory Bistro &amp; Grill was born from a simple belief: that great food brings people together. 
                Our chefs combine culinary tradition with modern innovation, using locally-sourced ingredients to create dishes 
                that delight the senses.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-muted leading-relaxed mb-8"
              >
                Every plate tells a story of dedication, creativity, and an unwavering commitment to quality. 
                From our handcrafted cocktails to our artisanal desserts, every detail is carefully considered.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200"
              >
                <motion.img
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-lg hidden sm:block"
              >
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-3xl font-bold"
                >
                  <Counter to={10} />+
                </motion.p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-primary font-semibold text-sm tracking-widest uppercase"
            >
              Visit Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-3 mb-4"
            >
              Ready for an <span className="text-primary">Unforgettable</span> Meal?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-muted text-lg mb-8 max-w-2xl mx-auto"
            >
              Whether it&apos;s a romantic dinner, family celebration, or casual lunch — we look forward to serving you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/reservations"
                  className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40"
                >
                  <Sparkles className="w-4 h-4" />
                  Make a Reservation
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/order"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-2xl hover:shadow-black/20"
                >
                  Order Online
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
