"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

interface PortfolioCarouselProps {
  images: string[];
  title: string;
}

export default function PortfolioCarousel({
  images,
  title,
}: PortfolioCarouselProps) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (currentIndex >= validImages.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, validImages.length]);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }

      if (event.key === "ArrowRight" && validImages.length > 1) {
        setCurrentIndex((current) => (current + 1) % validImages.length);
      }

      if (event.key === "ArrowLeft" && validImages.length > 1) {
        setCurrentIndex(
          (current) =>
            (current - 1 + validImages.length) % validImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen, validImages.length]);

  if (validImages.length === 0) {
    return null;
  }

  const previousImage = () => {
    setCurrentIndex(
      (current) => (current - 1 + validImages.length) % validImages.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((current) => (current + 1) % validImages.length);
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  return (
    <>
      <div className="relative overflow-hidden bg-slate-100">
        {/* Project Image */}
        <button
          type="button"
          onClick={openPreview}
          aria-label={`Preview ${title}`}
          className="group/image relative block h-[245px] w-full overflow-hidden bg-slate-100 text-left sm:h-[270px]"
        >
          <Image
            src={validImages[currentIndex]}
            alt={`${title} website design showcase - Screenshot ${currentIndex + 1} of ${validImages.length}`}
            fill
            className="object-cover transition-transform duration-500 group-hover/image:scale-[1.025]"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />

          <span className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
        </button>

        {/* Image Counter */}
        {validImages.length > 1 && (
          <div className="absolute right-4 top-4 z-20 rounded-full bg-slate-900/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {currentIndex + 1} / {validImages.length}
          </div>
        )}

        {/* Previous / Next Controls */}
        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label={`Previous image for ${title}`}
              className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-primary-navy shadow-md transition-all hover:border-primary-orange hover:bg-primary-orange hover:text-white active:scale-95"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label={`Next image for ${title}`}
              className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-primary-navy shadow-md transition-all hover:border-primary-orange hover:bg-primary-orange hover:text-white active:scale-95"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Preview Button */}
        <button
          type="button"
          onClick={openPreview}
          className="absolute bottom-4 left-4 z-20 inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white bg-white px-4 text-sm font-semibold text-primary-navy shadow-lg transition-colors hover:bg-primary-orange hover:text-white active:scale-95"
        >
          <i className="fas fa-expand text-primary-orange" aria-hidden="true" />
          <span>Preview Project</span>
        </button>

        {/* Dot Controls */}
        {validImages.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-slate-900/45 px-3 py-2 backdrop-blur-sm">
            {validImages.map((_, index) => (
              <button
                type="button"
                key={`${title}-${index}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`Show image ${index + 1} for ${title}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/45 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Full Screen Image Preview */}
      {isMounted &&
        isPreviewOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} project preview`}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsPreviewOpen(false);
              }
            }}
          >
            <div className="flex h-full max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col">
              <div className="mb-4 flex items-center justify-between gap-4 text-white">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-white sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {currentIndex + 1} / {validImages.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPreviewOpen(false)}
                  aria-label="Close preview"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-primary-navy active:scale-95"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image
                  src={validImages[currentIndex]}
                  alt={`${title} full preview - Screenshot ${currentIndex + 1} of ${validImages.length}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />

                {validImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous preview image"
                      className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-navy shadow-xl transition-colors hover:bg-primary-orange hover:text-white active:scale-95 sm:left-5"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.4}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next preview image"
                      className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-navy shadow-xl transition-colors hover:bg-primary-orange hover:text-white active:scale-95 sm:right-5"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.4}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {validImages.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {validImages.map((_, index) => (
                    <button
                      type="button"
                      key={`modal-${title}-${index}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-primary-orange"
                          : "w-2.5 bg-white/35 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}