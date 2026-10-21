"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/order", label: "Order Online" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16 sm:h-18" : "h-20 sm:h-24"
          }`}>
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                animate={{ scale: scrolled ? 0.9 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow duration-300"
              >
                <span className="text-white font-bold text-lg tracking-tight">S</span>
              </motion.div>
              <div className="overflow-hidden">
                <motion.span
                  animate={{ y: scrolled ? -2 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block text-lg sm:text-xl font-bold tracking-tight leading-tight text-white transition-colors duration-500"
                >
                  Saffron
                </motion.span>
                <motion.span
                  animate={{ y: scrolled ? -2 : 0, opacity: scrolled ? 0.6 : 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="block text-[10px] sm:text-xs -mt-0.5 tracking-[0.2em] uppercase text-white/60 transition-colors duration-500"
                >
                  Karachi Grill
                </motion.span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 group text-white/80 hover:text-white"
                  >
                    {link.label}
                    <motion.span
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full origin-left bg-primary"
                    />
                    <span className="absolute inset-0 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 bg-current/5" />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/reservations"
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden group ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20"
                    : "bg-white text-zinc-900 hover:bg-white/90 shadow-lg shadow-black/10"
                }`}
              >
                <span className="relative z-10">Reserve a Table</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2.5 rounded-xl transition-all duration-200 text-white hover:bg-white/10 backdrop-blur-sm"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent origin-center"
        />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-zinc-950 z-50 lg:hidden shadow-2xl border-l border-white/10"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <span className="block text-base font-bold text-white leading-tight">Saffron</span>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-500">Karachi Grill</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="px-4 py-6 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                        <ChevronRight className={`w-4 h-4 transition-all ${
                          isActive ? "text-primary" : "text-zinc-600"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <Link
                  href="/reservations"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition-all duration-200 shadow-md"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
