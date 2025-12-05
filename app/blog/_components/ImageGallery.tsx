/**
 * ImageGallery Component
 * Menampilkan multiple gambar dengan thumbnail grid dan lightbox
 * Support swipe gesture di mobile dan keyboard navigation
 */

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export function ImageGallery({ images, title = "Gallery" }: ImageGalleryProps) {
  // All hooks must be called before any conditional returns
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPreview, setCurrentPreview] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

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
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
      );
    }
  }, [selectedIndex, images.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
      );
    }
  }, [selectedIndex, images.length]);

  const goToPreviousPreview = useCallback(() => {
    setCurrentPreview((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNextPreview = useCallback(() => {
    setCurrentPreview((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailRef.current) {
      const scrollAmount = 200;

      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  // Early return after all hooks
  if (!images || images.length === 0) return null;

  // Single image view
  if (images.length === 1) {
    return (
      <>
        <button
          className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-zoom-in group w-full"
          onClick={() => openLightbox(0)}
          type="button"
        >
          <Image
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
            src={images[0]}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ChevronRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>

        <Lightbox
          images={images}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          selectedIndex={selectedIndex}
          title={title}
        />
      </>
    );
  }

  // Multiple images view
  return (
    <div className="space-y-3">
      {/* Main Preview */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 group">
        <Image
          alt={`${title} - ${currentPreview + 1}`}
          className="object-cover transition-all duration-300 cursor-zoom-in"
          fill
          onClick={() => openLightbox(currentPreview)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
          src={images[currentPreview]}
        />

        {/* Overlay with image count */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Grid3X3 className="w-5 h-5" />
          <span className="text-sm font-medium">
            {currentPreview + 1} / {images.length} Foto
          </span>
        </div>

        {/* Navigation Arrows on Main Image */}
        <button
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            goToPreviousPreview();
          }}
          type="button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            goToNextPreview();
          }}
          type="button"
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
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/thumbnails:opacity-100 -translate-x-1/2"
          onClick={() => scrollThumbnails("left")}
          type="button"
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
              className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden 
                transition-all duration-200 hover:ring-2 hover:ring-blue-500
                ${
                  index === currentPreview
                    ? "ring-2 ring-blue-500 scale-105"
                    : "ring-1 ring-gray-200 dark:ring-gray-700 opacity-70 hover:opacity-100"
                }`}
              onClick={() => setCurrentPreview(index)}
              type="button"
            >
              <Image
                alt={`${title} - Thumbnail ${index + 1}`}
                className="object-cover"
                fill
                sizes="96px"
                src={img}
              />
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all opacity-0 group-hover/thumbnails:opacity-100 translate-x-1/2"
          onClick={() => scrollThumbnails("right")}
          type="button"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
        selectedIndex={selectedIndex}
        title={title}
      />
    </div>
  );
}

// Lightbox Component
interface LightboxProps {
  images: string[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  selectedIndex: number | null;
  title?: string;
}

function Lightbox({
  images,
  onClose,
  onNext,
  onPrevious,
  selectedIndex,
  title,
}: LightboxProps) {
  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          aria-label="Tutup"
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={onClose}
          type="button"
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
            aria-label="Sebelumnya"
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            type="button"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Main Image */}
        <motion.div
          key={selectedIndex}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4"
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          transition={{ duration: 0.2 }}
        >
          <Image
            alt={`${title} - Image ${selectedIndex + 1}`}
            className="object-contain"
            fill
            priority
            sizes="100vw"
            src={images[selectedIndex]}
          />
        </motion.div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            aria-label="Selanjutnya"
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            type="button"
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
                className={`relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden transition-all
                  ${
                    index === selectedIndex
                      ? "ring-2 ring-white scale-110"
                      : "ring-1 ring-white/30 opacity-60 hover:opacity-100"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                type="button"
              >
                <Image
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="64px"
                  src={img}
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
