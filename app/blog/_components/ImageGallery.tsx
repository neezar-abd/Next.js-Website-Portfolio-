/**
 * ImageGallery Component
 * Menampilkan multiple gambar dengan thumbnail grid dan lightbox
 * Support swipe gesture di mobile dan keyboard navigation
 */

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, Grid3X3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images, title = "Gallery" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isGridView, setIsGridView] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, images.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  if (!images || images.length === 0) return null;

  // Single image - tampilkan seperti biasa
  if (images.length === 1) {
    return (
      <div 
        className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-zoom-in group"
        onClick={() => openLightbox(0)}
      >
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Lightbox for single image */}
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          title={title}
        />
      </div>
    );
  }

  // Multiple images - tampilkan dengan preview dan thumbnail
  const [currentPreview, setCurrentPreview] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;
      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const goToPreviousPreview = () => {
    setCurrentPreview(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNextPreview = () => {
    setCurrentPreview(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="space-y-3">
      {/* Main Preview - Show current selected image */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group">
        <Image
          src={images[currentPreview]}
          alt={`${title} - ${currentPreview + 1}`}
          fill
          className="object-cover transition-all duration-300 cursor-zoom-in"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
          onClick={() => openLightbox(currentPreview)}
        />
        
        {/* Overlay with image count */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Grid3X3 className="w-5 h-5" />
          <span className="text-sm font-medium">{currentPreview + 1} / {images.length} Foto</span>
        </div>

        {/* Navigation Arrows on Main Image */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPreviousPreview(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goToNextPreview(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Klik untuk zoom
        </div>
      </div>

      {/* Thumbnail Strip with Navigation Arrows */}
      <div className="relative group/thumbnails">
        {/* Left Arrow */}
        <button
          onClick={() => scrollThumbnails("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/thumbnails:opacity-100 -translate-x-1/2"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Thumbnails */}
        <div 
          ref={thumbnailRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth px-1"
        >
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentPreview(index)}
              className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden 
                transition-all duration-200 hover:ring-2 hover:ring-blue-500
                ${index === currentPreview ? "ring-2 ring-blue-500 scale-105" : "ring-1 ring-gray-200 dark:ring-gray-700 opacity-70 hover:opacity-100"}`}
            >
              <Image
                src={img}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollThumbnails("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/thumbnails:opacity-100 translate-x-1/2"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={title}
      />
    </div>
  );
}

// Lightbox Component
interface LightboxProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  title?: string;
}

function Lightbox({ images, selectedIndex, onClose, onPrevious, onNext, title }: LightboxProps) {
  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Tutup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-50 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
          {selectedIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Main Image */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[selectedIndex]}
            alt={`${title} - Image ${selectedIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}

        {/* Thumbnail Strip in Lightbox */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl max-w-full overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  // Update selected index directly
                  const event = new CustomEvent("gallery-select", { detail: index });
                  window.dispatchEvent(event);
                }}
                className={`relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden transition-all
                  ${index === selectedIndex 
                    ? "ring-2 ring-white scale-110" 
                    : "ring-1 ring-white/30 opacity-60 hover:opacity-100"}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Simple grid view for inline display
export function ImageGrid({ images, title = "Gallery" }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, images.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="my-8">
      <div className={`grid gap-3 ${
        images.length === 1 ? "grid-cols-1" :
        images.length === 2 ? "grid-cols-2" :
        images.length === 3 ? "grid-cols-3" :
        "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }`}>
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-zoom-in group"
          >
            <Image
              src={img}
              alt={`${title} - ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
        title={title}
      />
    </div>
  );
}
