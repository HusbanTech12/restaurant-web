"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Send, CheckCircle } from "lucide-react";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-accent mb-2">Reservation Request Sent!</h3>
        <p className="text-muted max-w-md mx-auto">
          Thank you, {form.name}! We&apos;ll confirm your reservation for {form.guests} guests on {form.date} at {form.time} within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Number of Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
              ))}
              <option value="10+">10+ Guests</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Date</label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-accent mb-1.5">Time</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
            >
              <option value="">Select a time</option>
              {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-accent mb-1.5">Occasion (Optional)</label>
        <select
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        >
          <option value="">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="date">Date Night</option>
          <option value="business">Business Dinner</option>
          <option value="celebration">Celebration</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-accent mb-1.5">Special Requests (Optional)</label>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          placeholder="Allergies, seating preferences, etc."
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
      >
        <Send className="w-4 h-4" />
        Confirm Reservation
      </button>
    </form>
  );
}
