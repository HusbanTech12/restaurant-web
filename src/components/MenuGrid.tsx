"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { menuItems, categories } from "@/data/menu";
import GlowCard from "@/components/GlowCard";

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Crafted with Passion</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-3 mb-4">
            Our Menu
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A carefully curated menu featuring seasonal ingredients and global inspiration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "bg-zinc-100 text-muted hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
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
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <GlowCard className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.popular && (
                      <span className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                      {item.category}
                    </span>
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
                        <span key={d} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-md font-medium">
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

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No items found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
