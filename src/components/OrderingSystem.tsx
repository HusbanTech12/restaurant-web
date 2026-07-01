"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShoppingBag, X, ArrowRight, Trash2, CheckCircle } from "lucide-react";
import { menuItems, categories } from "@/data/menu";
import GlowCard from "@/components/GlowCard";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function OrderingSystem() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((ci) =>
        ci.id === id ? { ...ci, quantity: Math.max(0, ci.quantity + delta) } : ci
      ).filter((ci) => ci.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((ci) => ci.id !== id));
  };

  const total = cart.reduce((sum, ci) => sum + ci.price * ci.quantity, 0);
  const itemCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    setCart([]);
    setCartOpen(false);
  };

  if (checkedOut) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-accent mb-2">Order Placed Successfully!</h3>
        <p className="text-muted max-w-md mx-auto">
          Your order has been received. We&apos;ll start preparing it right away and notify you when it&apos;s ready.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Order Online</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-3 mb-4">
          Pick Your Favorites
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Choose from our menu and we&apos;ll have it ready for pickup or delivery.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-accent text-white shadow-md"
                : "bg-zinc-100 text-muted hover:bg-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <AnimatePresence mode="wait">
          {filtered.map((item, i) => {
            const inCart = cart.find((ci) => ci.id === item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <GlowCard className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {inCart && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                      {inCart.quantity} in cart
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-semibold text-accent">{item.name}</h3>
                    <span className="text-base font-bold text-primary">${item.price}</span>
                  </div>
                  <p className="text-xs text-muted mb-3 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-accent hover:bg-accent/90 text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Order
                  </button>
                </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No items found in this category.</p>
        </div>
      )}

      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl z-40 p-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <span className="text-sm text-muted">{itemCount} {itemCount === 1 ? "item" : "items"} in order</span>
              <span className="text-xl font-bold text-accent ml-3">${total.toFixed(2)}</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="px-5 py-2.5 border border-border rounded-xl text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                {cartOpen ? "Hide" : "View"} Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2"
              >
                Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {cartOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="max-w-7xl mx-auto mt-4 overflow-hidden"
              >
                <div className="border-t border-border pt-4 space-y-3 max-h-64 overflow-y-auto">
                  {cart.map((ci) => (
                    <div key={ci.id} className="flex items-center justify-between bg-zinc-50 rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <img src={ci.image} alt={ci.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-medium text-accent">{ci.name}</p>
                          <p className="text-xs text-muted">${ci.price} each</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQty(ci.id, -1)}
                            className="w-7 h-7 bg-white border border-border rounded-lg flex items-center justify-center hover:bg-zinc-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{ci.quantity}</span>
                          <button
                            onClick={() => updateQty(ci.id, 1)}
                            className="w-7 h-7 bg-white border border-border rounded-lg flex items-center justify-center hover:bg-zinc-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-accent w-16 text-right">
                          ${(ci.price * ci.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(ci.id)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
