"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  // Guard against empty images array
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-muted rounded-sm flex items-center justify-center">
        <span className="text-muted-foreground text-sm">Geen afbeelding beschikbaar</span>
      </div>
    );
  }

  const activeImage = images[activeIndex] ?? images[0];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails — vertical on desktop, horizontal on mobile */}
      {images.length > 1 && (
        <div className="flex flex-row md:flex-col gap-2 md:w-16 lg:w-20 overflow-x-auto md:overflow-visible">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Toon afbeelding ${i + 1}: ${img.alt}`}
              className={cn(
                "relative flex-shrink-0 w-14 h-14 md:w-full md:h-16 lg:h-20 rounded-sm overflow-hidden border transition-all duration-200",
                activeIndex === i
                  ? "border-sage ring-1 ring-sage"
                  : "border-border hover:border-sage/50"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                unoptimized
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div
        className="relative flex-1 aspect-square md:aspect-[4/5] rounded-sm overflow-hidden bg-sand cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        role="img"
        aria-label={activeImage.alt}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          className={cn(
            "object-cover object-center transition-transform duration-300",
            isZoomed ? "scale-150" : "scale-100"
          )}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                }
              : undefined
          }
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 55vw"
        />

        {/* Image counter badge — mobile only */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 md:hidden bg-brown/60 text-primary-foreground font-sans text-[10px] px-2 py-1 rounded-sm backdrop-blur-sm">
            {activeIndex + 1}/{images.length}
          </div>
        )}

        {/* Zoom hint — visible on hover desktop */}
        <div
          className={cn(
            "absolute bottom-3 left-3 hidden md:flex items-center gap-1.5 bg-brown/50 text-primary-foreground font-sans text-[10px] px-2.5 py-1.5 rounded-sm backdrop-blur-sm transition-opacity duration-200",
            isZoomed ? "opacity-0" : "opacity-100"
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3 fill-current"
            aria-hidden="true"
          >
            <path d="M6.5 1a5.5 5.5 0 1 0 3.83 9.44l3.36 3.36.71-.71-3.35-3.36A5.5 5.5 0 0 0 6.5 1zm0 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM6 4v2H4v1h2v2h1V7h2V6H7V4H6z" />
          </svg>
          Hover voor zoom
        </div>
      </div>
    </div>
  );
}
