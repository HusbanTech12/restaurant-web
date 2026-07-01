"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Address", content: "123 Gourmet Avenue\nCulinary District\nNew York, NY 10001" },
  { icon: Phone, title: "Phone", content: "(555) 123-4567", href: "tel:+1234567890" },
  { icon: Mail, title: "Email", content: "info@savorybistro.com", href: "mailto:info@savorybistro.com" },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Thu: 11AM-10PM\nFri-Sat: 11AM-11PM\nSun: 10AM-9PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">Contact Us</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              We&apos;d love to hear from you. Reach out with questions, feedback, or inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-accent mb-6">Send Us a Message</h2>
              <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                <ContactForm />
              </div>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-accent mb-2">Visit or Reach Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-5"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-accent mb-1">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted hover:text-primary transition-colors whitespace-pre-line">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted whitespace-pre-line">{info.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card border border-border rounded-2xl overflow-hidden h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309591936!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMTIuNCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
