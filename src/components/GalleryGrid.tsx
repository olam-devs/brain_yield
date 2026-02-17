"use client";

import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-text-light border border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <div
            key={index}
            className="mb-6 break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/30 flex items-center justify-center">
                <svg
                  className="h-10 w-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 scale-50 group-hover:scale-100"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-text shadow-lg transition-transform hover:scale-110"
            >
              &times;
            </button>
            <p className="mt-4 text-center text-white text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
