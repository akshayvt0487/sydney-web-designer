"use client";

import type { ReactNode } from "react";

type Industry = {
  name: string;
  icon: string;
};

type Technology = {
  name: string;
  icon: ReactNode;
  accent: string;
};

const industries: Industry[] = [
  { name: "Real Estate", icon: "fas fa-building" },
  { name: "Logistics", icon: "fas fa-truck" },
  { name: "Healthcare", icon: "fas fa-heartbeat" },
  { name: "Hospitality", icon: "fas fa-utensils" },
  { name: "Construction", icon: "fas fa-hard-hat" },
  { name: "Retail", icon: "fas fa-shopping-bag" },
  { name: "Education", icon: "fas fa-graduation-cap" },
  { name: "Professional Services", icon: "fas fa-briefcase" },
  { name: "Home Services", icon: "fas fa-wrench" },
  { name: "Automotive", icon: "fas fa-car" },
  { name: "Fitness & Wellness", icon: "fas fa-dumbbell" },
  { name: "Finance", icon: "fas fa-university" },
];

const technologies: Technology[] = [
  {
    name: "React",
    accent: "#50c8eb",
    icon: <i className="fab fa-react" aria-hidden="true" />,
  },
  {
    name: "Next.js",
    accent: "#10151f",
    icon: <span className="home-tech-symbol">&lt;/&gt;</span>,
  },
  {
    name: "Node.js",
    accent: "#37a965",
    icon: <i className="fab fa-node-js" aria-hidden="true" />,
  },
  {
    name: "WordPress",
    accent: "#21759b",
    icon: <i className="fab fa-wordpress" aria-hidden="true" />,
  },
  {
    name: "Shopify",
    accent: "#6db545",
    icon: <i className="fab fa-shopify" aria-hidden="true" />,
  },
  {
    name: "Laravel",
    accent: "#ff5a52",
    icon: <i className="fab fa-laravel" aria-hidden="true" />,
  },
  {
    name: "Figma",
    accent: "#f24e1e",
    icon: <i className="fab fa-figma" aria-hidden="true" />,
  },
  {
    name: "Adobe XD",
    accent: "#ef4ed8",
    icon: <span className="home-tech-symbol">XD</span>,
  },
  {
    name: "Webflow",
    accent: "#4353ff",
    icon: <span className="home-tech-symbol">W</span>,
  },
  {
    name: "PHP",
    accent: "#777bb4",
    icon: <i className="fab fa-php" aria-hidden="true" />,
  },
  {
    name: "Python",
    accent: "#3776ab",
    icon: <i className="fab fa-python" aria-hidden="true" />,
  },
  {
    name: "JavaScript",
    accent: "#e7c533",
    icon: <i className="fab fa-js-square" aria-hidden="true" />,
  },
  {
    name: "HTML5",
    accent: "#e34f26",
    icon: <i className="fab fa-html5" aria-hidden="true" />,
  },
  {
    name: "CSS3",
    accent: "#1572b6",
    icon: <i className="fab fa-css3-alt" aria-hidden="true" />,
  },
  {
    name: "Sass",
    accent: "#cc6699",
    icon: <i className="fab fa-sass" aria-hidden="true" />,
  },
  {
    name: "Google Ads",
    accent: "#4285f4",
    icon: <span className="home-tech-symbol">G</span>,
  },
  {
    name: "Meta Ads",
    accent: "#1877f2",
    icon: <i className="fab fa-facebook" aria-hidden="true" />,
  },
  {
    name: "Bootstrap",
    accent: "#7952b3",
    icon: <i className="fab fa-bootstrap" aria-hidden="true" />,
  },
];

function TechnologyRow({
  items,
  reverse = false,
}: {
  items: Technology[];
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="home-tech-marquee">
      <div
        className={`home-tech-marquee__track ${
          reverse ? "home-tech-marquee__track--reverse" : ""
        }`}
      >
        {repeatedItems.map((technology, index) => (
          <article
            key={`${technology.name}-${index}`}
            className="home-tech-pill"
            style={{ "--tech-accent": technology.accent } as React.CSSProperties}
          >
            <span className="home-tech-pill__icon">{technology.icon}</span>
            <span className="home-tech-pill__name">{technology.name}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function HomeIndustriesTechSection() {
  const firstTechnologyRow = technologies.slice(0, 9);
  const secondTechnologyRow = technologies.slice(9);

  return (
    <>
      <section className="home-industries paper-grain">
        <div className="container">
          <div className="home-industries__header">
            <div>
              <p className="home-editorial-label">Industries We Serve</p>

              <h2 className="home-editorial-title home-editorial-title--dark">
                Expertise Across <span>All Industries</span>
              </h2>
            </div>

            <p className="home-industries__intro">
              From startups to established enterprises, we deliver tailored
              solutions for every sector
            </p>
          </div>

          <div className="home-industries__grid">
            {industries.map((industry, index) => (
              <article key={industry.name} className="home-industry-card">
                <span className="home-industry-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <i className={industry.icon} aria-hidden="true" />

                <h3>{industry.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-technologies paper-grain">
        <div className="container">
          <header className="home-technologies__header">
            <p className="home-editorial-label">Technologies</p>

            <h2 className="home-editorial-title">
              Built with <span>Modern Tech</span>
            </h2>

            <p>
              We use cutting-edge technologies to build fast, secure, and
              scalable websites
            </p>
          </header>
        </div>

        <div className="home-technologies__marquees" aria-label="Technologies we use">
          <TechnologyRow items={firstTechnologyRow} />
          <TechnologyRow items={secondTechnologyRow} reverse />
        </div>

        <div className="container">
          <article className="home-security-note">
            <i className="fas fa-shield-alt" aria-hidden="true" />

            <div>
              <h3>Enterprise-Grade Security</h3>
              <p>SSL, GDPR compliance, and regular updates</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}