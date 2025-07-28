"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

export type CarouselProps = {
  images: string[];
  indicator?: boolean;
};

export default function Carousel({ images, indicator = true }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll smoothly to the given index
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "instant",
      });
    }
  };

  // Update the current index based on scroll position
  const onScroll = () => {
    const container = containerRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Carousel viewport */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        {images.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-start ">
            <Image
              src={src}
              width={393}
              height={393}
              alt={`slide-${idx}`}
              className="w-full h-auto object-cover bg-zinc-800"
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      {indicator && (
        <div className="flex justify-center mt-2 space-x-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => scrollToIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-opacity duration-300 ${
                idx === currentIndex
                  ? "bg-blue-500 opacity-100"
                  : "bg-gray-300 opacity-60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
