"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { menuItems, categories } from "@/data/menu";
import GlowCard from "@/components/GlowCard";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? menuItems.filter((item) => item.popular)
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Selection</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-3 mb-4">
            Featured Dishes
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Discover our chef&apos;s handpicked selection of signature dishes, crafted with passion and the finest ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-zinc-100 text-muted hover:bg-zinc-200 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlowCard className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-200">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.popular && (
                      <span className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-accent">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{item.description}</p>
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                      {item.dietary.map((d) => (
                        <span key={d} className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs rounded-md">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-200 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 active:scale-95"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
