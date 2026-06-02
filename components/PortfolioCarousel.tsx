"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

interface PortfolioCarouselProps {
  images: string[];
  title: string;
}

export default function PortfolioCarousel({ images, title }: PortfolioCarouselProps) {
  const reduceMotion = useReducedMotion();
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (currentIndex >= validImages.length) setCurrentIndex(0);
  }, [currentIndex, validImages.length]);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
      if (event.key === "ArrowRight" && validImages.length > 1) setCurrentIndex((current) => (current + 1) % validImages.length);
      if (event.key === "ArrowLeft" && validImages.length > 1) setCurrentIndex((current) => (current - 1 + validImages.length) % validImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, validImages.length]);

  if (validImages.length === 0) return null;

  const previousImage = () => setCurrentIndex((current) => (current - 1 + validImages.length) % validImages.length);
  const nextImage = () => setCurrentIndex((current) => (current + 1) % validImages.length);

  return (
    <>
      <div className="project-media">
        <button type="button" onClick={() => setIsPreviewOpen(true)} aria-label={`Preview ${title}`} className="project-media__button">
          {validImages.map((image, index) => (
            <motion.span
              key={image}
              className="project-media__slide"
              initial={false}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.28 }}
              aria-hidden={currentIndex !== index}
            >
              <Image
                src={image}
                alt={currentIndex === index ? `${title} website design showcase - Screenshot ${index + 1} of ${validImages.length}` : ""}
                fill
                className="object-contain"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              />
            </motion.span>
          ))}
          <span className="project-media__preview"><i className="fas fa-expand" aria-hidden="true" />Preview Project</span>
        </button>

        {validImages.length > 1 && (
          <>
            <span className="project-media__counter">{currentIndex + 1} / {validImages.length}</span>
            <button type="button" onClick={previousImage} aria-label={`Previous image for ${title}`} className="project-media__arrow project-media__arrow--left">
              <i className="fas fa-arrow-left" aria-hidden="true" />
            </button>
            <button type="button" onClick={nextImage} aria-label={`Next image for ${title}`} className="project-media__arrow project-media__arrow--right">
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </button>
            <div className="project-media__dots">
              {validImages.map((_, index) => (
                <button type="button" key={`${title}-${index}`} onClick={() => setCurrentIndex(index)} aria-label={`Show image ${index + 1} for ${title}`} className={`project-media__dot ${index === currentIndex ? "is-active" : ""}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {isMounted && isPreviewOpen && createPortal(
        <AnimatePresence>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} project preview`}
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) setIsPreviewOpen(false); }}
          >
            <div className="project-modal__inner">
              <div className="project-modal__header">
                <div><h3>{title}</h3><p>{currentIndex + 1} / {validImages.length}</p></div>
                <button type="button" onClick={() => setIsPreviewOpen(false)} aria-label="Close preview"><i className="fas fa-xmark" aria-hidden="true" /></button>
              </div>
              <div className="project-modal__image">
                <Image src={validImages[currentIndex]} alt={`${title} full preview - Screenshot ${currentIndex + 1} of ${validImages.length}`} fill className="object-contain" sizes="100vw" priority />
                {validImages.length > 1 && (
                  <>
                    <button type="button" onClick={previousImage} aria-label="Previous preview image" className="project-modal__arrow project-modal__arrow--left"><i className="fas fa-arrow-left" aria-hidden="true" /></button>
                    <button type="button" onClick={nextImage} aria-label="Next preview image" className="project-modal__arrow project-modal__arrow--right"><i className="fas fa-arrow-right" aria-hidden="true" /></button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
