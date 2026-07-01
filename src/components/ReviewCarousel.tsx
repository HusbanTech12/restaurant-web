"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 sm:py-28 bg-accent text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Hear from our guests about their dining experiences at Savory.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                <Quote className="w-10 h-10 text-primary/50 mx-auto mb-6" />
                <p className="text-xl sm:text-2xl text-zinc-200 leading-relaxed mb-8 italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[current].rating ? "text-primary fill-primary" : "text-zinc-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={reviews[current].avatar}
                    alt={reviews[current].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white">{reviews[current].name}</p>
                    <p className="text-sm text-zinc-400">{reviews[current].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 w-10 h-10 bg-white/10 hover:bg-white/25 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-150 backdrop-blur-sm border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 w-10 h-10 bg-white/10 hover:bg-white/25 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-150 backdrop-blur-sm border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
