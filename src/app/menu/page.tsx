"use client";

import { motion } from "framer-motion";
import MenuGrid from "@/components/MenuGrid";

export default function MenuPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Discover</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Our Menu
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Explore our carefully curated selection of dishes, crafted with the finest ingredients and a passion for flavor.
            </p>
          </motion.div>
        </div>
      </section>
      <MenuGrid />
    </>
  );
}
