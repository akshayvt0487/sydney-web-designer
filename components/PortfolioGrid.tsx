"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { portfolioProjects, PortfolioProject } from "@/lib/constants";
import PortfolioLightbox from "./PortfolioLightbox";

/* ─────────────────────────────────────────
   Category Filter Tabs
───────────────────────────────────────── */
const CATEGORIES = [
  { label: "All Work", value: "all" },
  { label: "Web Design", value: "Web Design" },
  { label: "Landing Pages", value: "Landing Pages" },
  { label: "SEO", value: "SEO" },
  { label: "Google Ads", value: "Google Ads" },
];

function categoryMatch(project: PortfolioProject, cat: string) {
  if (cat === "all") return true;

  return project.services.some((service) =>
    service.toLowerCase().includes(cat.toLowerCase())
  );
}

/* ─────────────────────────────────────────
   Animated Counter
───────────────────────────────────────── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────
   Project Carousel
───────────────────────────────────────── */
function ProjectCarousel({
  images,
  title,
  priority = false,
}: {
  images: string[];
  title: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const preloadAdjacentImages = () => {
  if (images.length <= 1) return;

  const nextIndex = (current + 1) % images.length;
  const previousIndex = (current - 1 + images.length) % images.length;

  [nextIndex, previousIndex].forEach((index) => {
    const image = new window.Image();
    image.src = images[index];
  });
};

  const next = () => {
    setCurrent((currentIndex) => (currentIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrent(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  const handlePrev = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    prev();
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    next();
  };

  const handleDotClick = (
    event: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrent(index);
  };

  return (
  <div
    className="portfolio-media"
    onMouseEnter={preloadAdjacentImages}
    onFocus={preloadAdjacentImages}
    onTouchStart={preloadAdjacentImages}
  >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="portfolio-media__slide"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="portfolio-media__image"
            sizes="(max-width: 767px) 100vw, (max-width: 1119px) 50vw, 33vw"
            priority={priority && current === 0}
            loading={priority && current === 0 ? "eager" : "lazy"}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="portfolio-media__arrow portfolio-media__arrow--left"
            aria-label="Previous"
          >
            <svg
              className="w-4 h-4"
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
            className="portfolio-media__arrow portfolio-media__arrow--right"
            aria-label="Next"
          >
            <svg
              className="w-4 h-4"
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

          <div className="portfolio-media__dots">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(event) => handleDotClick(event, index)}
                className={`portfolio-media__dot ${index === current ? "is-active" : ""
                  }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>

          <div className="portfolio-media__counter">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Project Card
───────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: PortfolioProject;
  index: number;
  onImageClick: () => void;
}) {
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  const handleMediaKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onImageClick();
    }
  };

  return (
    <article className="portfolio-card">
      <div
        className="portfolio-card__media"
        role="button"
        tabIndex={0}
        aria-label={`View gallery for ${project.name}`}
        onClick={onImageClick}
        onKeyDown={handleMediaKeyDown}
      >
        <ProjectCarousel
          images={images}
          title={project.name}
          priority={index < 3}
        />

        <span className="portfolio-card__industry">{project.industry}</span>

        <span className="portfolio-card__gallery" aria-hidden="true">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>

          <span>View Gallery</span>
        </span>
      </div>

      <div className="portfolio-card__body">
        <div className="portfolio-card__title-row">
          <span className="portfolio-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3>{project.name}</h3>
        </div>

        <p className="portfolio-card__description">{project.description}</p>

        <div className="portfolio-card__tags">
          {project.services.map((service, serviceIndex) => (
            <span key={serviceIndex}>{service}</span>
          ))}
        </div>

        <footer className="portfolio-card__footer">
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card__link"
            >
              <span>View Live Site</span>

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span />
          )}

          <div className="portfolio-card__marks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </footer>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────
   Stats Strip
───────────────────────────────────────── */
function StatsStrip() {
  const stats = [
    { value: 500, suffix: "+", label: "Websites Delivered" },
    { value: 13, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "", label: "Industries Served" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.48 }}
      className="portfolio-stats"
    >
      {stats.map((stat, index) => (
        <div key={index} className="portfolio-stat">
          <div className="portfolio-stat__value">
            {inView && <Counter end={stat.value} suffix={stat.suffix} />}
          </div>

          <div className="portfolio-stat__label">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Main Portfolio Grid
───────────────────────────────────────── */
export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolioProjects);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  useEffect(() => {
    setFiltered(
      portfolioProjects.filter((project) =>
        categoryMatch(project, activeCategory)
      )
    );
  }, [activeCategory]);

  const handleImageClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  return (
    <section className="portfolio-work paper-grain">
      <div className="container">
        {/* Stats */}
        <StatsStrip />

        {/* Section Heading */}
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="portfolio-work__heading"
        >
          <p>Selected Work</p>

          <h2>
            Projects We&apos;re <span>Proud Of</span>
          </h2>

          <div className="portfolio-work__heading-copy">
            <p>
              Each project is a unique story of strategy, design, and measurable
              results.
            </p>
          </div>
        </motion.header>

        {/* Filter Tabs */}
        <div className="portfolio-filters" aria-label="Portfolio filters">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`portfolio-filter ${activeCategory === category.value ? "is-active" : ""
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="portfolio-grid"
          >
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onImageClick={() => handleImageClick(project)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="portfolio-empty"
              >
                <div>🔍</div>
                <p>No projects in this category yet.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, delay: 0.08 }}
          className="portfolio-cta"
        >
          <h3>
            Ready to Build Something <span>Amazing?</span>
          </h3>

          <p>
            Let&apos;s create a website that drives real results for your
            business.
          </p>

          <div className="portfolio-cta__actions">
            <Link href="/contact" className="paper-button paper-button--rust">
              Start Your Project

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link href="/" className="paper-button">
              Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Lightbox */}
        {selectedProject && (
          <PortfolioLightbox
            images={
              selectedProject.images && selectedProject.images.length > 0
                ? selectedProject.images
                : [selectedProject.image]
            }
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            projectName={selectedProject.name}
          />
        )}
      </div>
    </section>
  );
}