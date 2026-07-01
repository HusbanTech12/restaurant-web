"use client";

import { motion } from "framer-motion";
import ReservationForm from "@/components/ReservationForm";
import { Clock, MapPin, Phone, CalendarDays } from "lucide-react";

export default function ReservationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=400&fit=crop)",
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
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Book Your Experience</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
              Reservations
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Reserve your table for an unforgettable dining experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-accent mb-6">Book a Table</h2>
                <ReservationForm />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted">Mon - Thu</span><span className="font-medium">11AM - 10PM</span></div>
                  <div className="flex justify-between"><span className="text-muted">Fri - Sat</span><span className="font-medium">11AM - 11PM</span></div>
                  <div className="flex justify-between"><span className="text-muted">Sunday</span><span className="font-medium">10AM - 9PM</span></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location
                </h3>
                <p className="text-sm text-muted">123 Gourmet Avenue<br />Culinary District<br />New York, NY 10001</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact
                </h3>
                <p className="text-sm text-muted">(555) 123-4567</p>
                <a href="mailto:reservations@savorybistro.com" className="text-sm text-primary hover:underline">reservations@savorybistro.com</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-semibold text-accent mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Private Events
                </h3>
                <p className="text-sm text-muted mb-3">Looking to host a special event? We offer private dining rooms and full buyout options.</p>
                <a href="/events" className="text-sm text-primary font-medium hover:underline">Learn More &rarr;</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
