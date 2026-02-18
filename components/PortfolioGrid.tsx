"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { portfolioProjects, PortfolioProject } from "@/lib/constants";

/* ─────────────────────────────────────────
   CATEGORY FILTER TABS
───────────────────────────────────────── */
const CATEGORIES = [
  { label: "All Work", value: "all" },
  { label: "Web Design", value: "Web Design" },
  { label: "Branding", value: "Branding" },
  { label: "SEO", value: "SEO" },
  { label: "E-commerce", value: "E-commerce" },
];

function categoryMatch(project: PortfolioProject, cat: string) {
  if (cat === "all") return true;
  return project.services.some((s) => s.toLowerCase().includes(cat.toLowerCase()));
}

/* ─────────────────────────────────────────
   ANIMATED COUNTER
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
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────
   IMAGE CAROUSEL (ENHANCED)
───────────────────────────────────────── */
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative overflow-hidden aspect-[16/10] bg-[#0f172a] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-[#f59e0b] text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm hover:bg-[#f59e0b] text-white w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "bg-[#f59e0b] w-6 h-1.5" : "bg-white/50 w-1.5 h-1.5 hover:bg-white"}`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/10 z-10">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  // Service tag color mapping
  const tagColors: Record<string, string> = {
    "Web Design": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Branding": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "SEO": "bg-green-500/10 text-green-400 border-green-500/20",
    "Google Ads": "bg-red-500/10 text-red-400 border-red-500/20",
    "Social Media": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    "E-commerce": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  function getTagColor(service: string) {
    for (const key of Object.keys(tagColors)) {
      if (service.toLowerCase().includes(key.toLowerCase())) return tagColors[key];
    }
    return "bg-slate-500/10 text-slate-400 border-slate-500/20";
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-[#0f172a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f59e0b]/40 transition-all duration-300 shadow-xl hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] flex flex-col"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Carousel */}
      <div className="relative">
        <ProjectCarousel images={images} title={project.name} />
        {/* Industry pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#1e293b]/90 backdrop-blur-sm text-[#f59e0b] text-xs font-semibold px-3 py-1 rounded-full border border-[#f59e0b]/30">
            {project.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Service Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.services.map((service, i) => (
            <span
              key={i}
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${getTagColor(service)}`}
            >
              {service}
            </span>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {project.websiteUrl ? (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#f59e0b] hover:gap-3 transition-all duration-200 group/link"
            >
              <span>View Live Site</span>
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <span />
          )}

          {/* Decorative dot cluster */}
          <div className="flex gap-1 opacity-30">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STATS STRIP
───────────────────────────────────────── */
function StatsStrip() {
  const stats = [
    { value: 500, suffix: "+", label: "Websites Delivered" },
    { value: 13, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "", label: "Industries Served" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 mb-20"
    >
      {stats.map((s, i) => (
        <div key={i} className="bg-[#0f172a] px-6 py-8 text-center">
          <div className="text-4xl font-black text-[#f59e0b] mb-1 tabular-nums">
            {inView && <Counter end={s.value} suffix={s.suffix} />}
          </div>
          <div className="text-slate-400 text-sm font-medium">{s.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN PORTFOLIO GRID
───────────────────────────────────────── */
export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolioProjects);

  useEffect(() => {
    setFiltered(portfolioProjects.filter((p) => categoryMatch(p, activeCategory)));
  }, [activeCategory]);

  return (
    <section className="bg-[#060d1a] min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <StatsStrip />

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#f59e0b] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Projects We&apos;re <span className="text-[#f59e0b]">Proud Of</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Each project is a unique story of strategy, design, and measurable results.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat.value
                  ? "bg-[#f59e0b] text-[#0f172a] border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  : "bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat.label}
              {activeCategory === cat.value && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-[#f59e0b] -z-10"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-3 text-center py-20 text-slate-500"
              >
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg">No projects in this category yet.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#f59e0b]/10 via-[#f59e0b]/5 to-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Build Something <span className="text-[#f59e0b]">Amazing?</span>
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Let&apos;s create a website that drives real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 inline-flex items-center gap-2"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/"
                className="bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 inline-flex items-center gap-2"
              >
                Back to Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
