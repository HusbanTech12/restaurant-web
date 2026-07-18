"use client";

import Link from "next/link";
import { Clock, MapPin, Phone, Mail, Heart, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Savory</span>
                <span className="text-xs block -mt-1 tracking-widest uppercase text-zinc-400">Bistro &amp; Grill</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Experience exceptional cuisine crafted with passion. Where every meal tells a story and every visit creates a memory.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Heart className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/reservations", label: "Reservations" },
                { href: "/order", label: "Order Online" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/events", label: "Events & Catering" },
                { href: "/contact", label: "Contact" },
                { href: "/reviews", label: "Reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hours</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="text-white font-medium">Monday - Thursday</p>
                  <p className="text-zinc-400">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="text-white font-medium">Friday - Saturday</p>
                  <p className="text-zinc-400">11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="text-white font-medium">Sunday</p>
                  <p className="text-zinc-400">10:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-zinc-400">123 Gourmet Avenue, Culinary District, New York, NY 10001</span>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@savorybistro.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>info@savorybistro.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Savory Bistro &amp; Grill. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
