"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Heart, Leaf, Users } from "lucide-react";
import GlowCard from "@/components/GlowCard";

const values = [
  { icon: Heart, title: "Passion", desc: "We pour our hearts into every dish, driven by a love for culinary excellence." },
  { icon: Leaf, title: "Sustainability", desc: "We prioritize local, seasonal ingredients and eco-friendly practices." },
  { icon: Users, title: "Community", desc: "We believe in bringing people together through the power of great food." },
  { icon: Award, title: "Excellence", desc: "We never compromise on quality, from ingredient sourcing to presentation." },
];

const team = [
  { name: "Marco Rossi", role: "Executive Chef", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop" },
  { name: "Sophie Laurent", role: "Pastry Chef", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop" },
  { name: "James Chen", role: "Sous Chef", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop" },
  { name: "Ana Martinez", role: "General Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Story</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">About Us</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              The story behind Savory Bistro &amp; Grill — where passion meets plate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-6">
                From <span className="text-primary">Dream</span> to Destination
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Savory Bistro &amp; Grill opened its doors in 2015 with a simple mission: to create a dining experience 
                  that celebrates the art of food. Founded by Chef Marco Rossi, our restaurant combines traditional 
                  techniques with modern creativity.
                </p>
                <p>
                  What started as a small neighborhood bistro has grown into a celebrated dining destination, 
                  known for our commitment to quality, creativity, and warm hospitality. Every ingredient is 
                  carefully sourced, every recipe thoughtfully developed, and every plate beautifully presented.
                </p>
                <p>
                  We believe that dining is more than just eating — it&apos;s about creating memories, celebrating 
                  moments, and connecting with the people around us. That&apos;s the Savory difference.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&h=600&fit=crop"
                  alt="Restaurant ambiance"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Values</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-accent mt-3">What We Stand For</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlowCard className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-accent mb-2">{v.title}</h3>
                    <p className="text-sm text-muted">{v.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-accent mt-3">Meet the Culinary Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <GlowCard className="rounded-2xl overflow-hidden mb-4 aspect-square hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </GlowCard>
                  <h3 className="text-lg font-semibold text-accent">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Experience the Savory difference — book your table today.
            </p>
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              Make a Reservation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
