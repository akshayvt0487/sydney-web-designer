"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface PortfolioLightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  projectName: string;
}

export default function PortfolioLightbox({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  projectName,
}: PortfolioLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const nextIndex = (currentIndex + 1) % images.length;
    const previousIndex =
      (currentIndex - 1 + images.length) % images.length;

    [nextIndex, previousIndex].forEach((index) => {
      const image = new window.Image();
      image.src = images[index];
    });
  }, [isOpen, currentIndex, images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        handlePrev();
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="portfolio-lightbox"
        onClick={onClose}
      >
        <header className="portfolio-lightbox__header">
          <div className="portfolio-lightbox__title">
            <p>{projectName}</p>
          </div>

          <div className="portfolio-lightbox__counter">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="portfolio-lightbox__close"
            aria-label="Close lightbox"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <div
          className="portfolio-lightbox__stage"
          onClick={(event) => event.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="portfolio-lightbox__image"
            >
              <Image
                src={images[currentIndex]}
                alt={`${projectName} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="portfolio-lightbox__arrow portfolio-lightbox__arrow--left"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="portfolio-lightbox__arrow portfolio-lightbox__arrow--right"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div
            className="portfolio-lightbox__thumbs"
            onClick={(event) => event.stopPropagation()}
          >
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`portfolio-lightbox__thumb ${
                  index === currentIndex ? "is-active" : ""
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}