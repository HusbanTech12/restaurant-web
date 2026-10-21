"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { eventPackages } from "@/data/events";
import GlowCard from "@/components/GlowCard";

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Celebrate With Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">Events &amp; Catering</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Private rooms, a full buyout, or catering for a dawat across Karachi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlowCard className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-200">
                <div className="relative h-52 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-accent">{pkg.title}</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-muted mb-3">{pkg.description}</p>
                  <p className="text-xs text-muted mb-4 font-medium">{pkg.capacity}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-black/15 active:scale-95"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-accent mb-4">Let&apos;s Plan Your Event</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Tell us the date, the headcount, and whether it is at the restaurant or at your hall. We will send a menu in rupees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
              >
                Contact Us
              </Link>
              <a
                href="tel:+922135862200"
                className="text-accent border border-border px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-50 hover:shadow-lg hover:border-primary/20 transition-all duration-200 active:scale-95"
              >
                Call 021 3586 2200
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
