"use client";

import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=400&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Visual Journey</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
            Gallery
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Explore the ambiance, cuisine, and moments that define the Savory experience.
          </p>
        </div>
      </section>
      <GalleryGrid />
    </>
  );
}
