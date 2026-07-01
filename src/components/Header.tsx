"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, LogIn } from "lucide-react";

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
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
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
                  className={`block text-lg sm:text-xl font-bold tracking-tight leading-tight transition-colors duration-500 ${
                    scrolled ? "text-accent" : "text-white"
                  }`}
                >
                  Savory
                </motion.span>
                <motion.span
                  animate={{ y: scrolled ? -2 : 0, opacity: scrolled ? 0.6 : 0.7 }}
                  transition={{ duration: 0.3 }}
                  className={`block text-[10px] sm:text-xs -mt-0.5 tracking-[0.2em] uppercase transition-colors duration-500 ${
                    scrolled ? "text-accent/60" : "text-white/60"
                  }`}
                >
                  Bistro &amp; Grill
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
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                      scrolled
                        ? "text-accent/70 hover:text-accent"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full origin-left ${
                        scrolled ? "bg-primary" : "bg-white"
                      }`}
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
                    ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-black/10"
                    : "bg-white text-accent hover:bg-white/90 shadow-lg shadow-black/10"
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

              <Link
                href="/signin"
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-accent/70 hover:text-accent border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                    : "text-white/80 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-sm"
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign In
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 ${
                  scrolled
                    ? "text-accent hover:bg-zinc-100 hover:shadow-sm"
                    : "text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-zinc-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <span className="block text-base font-bold text-accent leading-tight">Savory</span>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-muted">Bistro &amp; Grill</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl text-accent/60 hover:text-accent hover:bg-zinc-100 transition-all"
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
                            ? "bg-primary/5 text-primary"
                            : "text-accent/70 hover:text-accent hover:bg-zinc-50"
                        }`}
                      >
                        {link.label}
                        <ChevronRight className={`w-4 h-4 transition-all ${
                          isActive ? "text-primary" : "text-zinc-300"
                        }`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-100">
                <Link
                  href="/signin"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-white rounded-xl text-sm font-medium hover:bg-accent/90 transition-all duration-200 shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
