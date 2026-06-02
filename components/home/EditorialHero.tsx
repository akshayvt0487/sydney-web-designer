"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { portfolioProjects } from "@/lib/constants";

const stats = [
  { icon: "fa-trophy", value: "500+", label: "Projects Delivered" },
  { icon: "fa-users", value: "98%", label: "Client Satisfaction" },
  { icon: "fa-star", value: "4.9", label: "Google Rating" },
  { icon: "fa-rocket", value: "12+", label: "Industries Served" },
];

const featuredProjectIds = [
  "six-brothers-removalists",
  "osan-ability",
  "gps-vehicle-inspections",
  "advanced-tree-lopping",
  "actuate-property",
  "deepslice-pizza",
];

const SLIDE_DURATION = 3400;

export default function EditorialHero() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const featuredProjects = useMemo(
    () =>
      featuredProjectIds
        .map((id) => portfolioProjects.find((project) => project.id === id))
        .filter((project): project is NonNullable<typeof project> =>
          Boolean(project)
        ),
    []
  );

  useEffect(() => {
    if (reduceMotion || isPaused || featuredProjects.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProjects.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, [reduceMotion, isPaused, featuredProjects.length]);

  const activeProject = featuredProjects[activeIndex];

  return (
    <section className="paper-hero paper-grain">
      <div className="container">
        <div className="paper-hero__layout">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="paper-hero__badge">13+ Years of Excellence</div>

            <h1 className="paper-hero__heading">
              Sydney Web Designer
              <span className="paper-hero__heading-accent">
                Award-Winning Web Design &amp; Digital Marketing
              </span>
            </h1>

            <p className="paper-hero__description">
              Transform your digital presence with stunning websites that convert
              visitors into customers. Specialising in custom web design, SEO, and
              branding for Sydney businesses since 2013.
            </p>

            <div className="paper-hero__actions">
              <button type="button" data-popup="contact" className="paper-button paper-button--rust">
                Get Your Free Quote
                <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </button>
              <Link href="/portfolio" className="paper-button">
                View Portfolio
                <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {activeProject && (
            <motion.div
              className="paper-poster"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="paper-poster__sheet">
                <div className="paper-poster__image">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="absolute inset-0"
                      initial={false}
                      animate={{ opacity: index === activeIndex ? 1 : 0 }}
                      transition={{ opacity: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } }}
                      aria-hidden={index !== activeIndex}
                    >
                      <Image
                        src={project.image}
                        alt={index === activeIndex ? `${project.name} website project` : ""}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? "eager" : undefined}
                        className="object-contain"
                        sizes="(max-width: 1023px) 100vw, 44vw"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="paper-poster__footer">
                  <div>
                    <p className="paper-poster__label">Featured Project</p>
                    <div className="paper-poster__title-wrap">
                      {featuredProjects.map((project, index) => (
                        <motion.p
                          key={project.id}
                          className="paper-poster__title"
                          initial={false}
                          animate={{ opacity: index === activeIndex ? 1 : 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.25 }}
                          aria-hidden={index !== activeIndex}
                        >
                          {project.name}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                  {featuredProjects.length > 1 && (
                    <div className="paper-poster__dots" aria-label="Featured project slides">
                      {featuredProjects.map((project, index) => (
                        <button
                          key={project.id}
                          type="button"
                          className={`paper-poster__dot ${index === activeIndex ? "paper-poster__dot--active" : ""}`}
                          onClick={() => setActiveIndex(index)}
                          aria-label={`Show ${project.name}`}
                          aria-current={index === activeIndex ? "true" : undefined}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          className="paper-hero__stats"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="paper-hero__stat">
              <i className={`fas ${stat.icon}`} aria-hidden="true" />
              <div>
                <p className="paper-hero__stat-value">{stat.value}</p>
                <p className="paper-hero__stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
