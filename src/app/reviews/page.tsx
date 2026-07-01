"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import GlowCard from "@/components/GlowCard";

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">Guest Reviews</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              See what our guests have to say about their Savory experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-6 py-3 rounded-full mb-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold text-accent">{avgRating}</span>
              <span className="text-muted">({reviews.length} reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-sm text-muted leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-primary fill-primary" : "text-zinc-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-accent">{review.name}</p>
                      <p className="text-xs text-muted">{review.date}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Had a great meal at Savory? We&apos;d love to hear about it.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all"
            >
              Leave a Review
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
