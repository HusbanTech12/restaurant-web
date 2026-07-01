"use client";

import OrderingSystem from "@/components/OrderingSystem";

export default function OrderPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Order Online</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
            Order for Pickup or Delivery
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Enjoy Savory from the comfort of your home. Browse our menu, add to cart, and we&apos;ll take care of the rest.
          </p>
        </div>
      </section>
      <OrderingSystem />
    </>
  );
}
