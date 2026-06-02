import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio | Our Work | 500+ Websites Delivered",
  description:
    "View our portfolio of 500+ successful websites. From small businesses to enterprise clients, see how we've helped Sydney businesses grow online.",
  keywords:
    "web design portfolio sydney, website examples, sydney web designer work, web design showcase",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/portfolio",
  ogImage: "/images/og/services.svg",
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Portfolio", url: "https://www.sydneywebdesigner.com.au/portfolio" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="portfolio-editorial">
        {/* Hero */}
        <section className="portfolio-hero">
          <div className="container portfolio-hero__inner">
            <div className="portfolio-hero__eyebrow">
              <span />
              <p>Our Work</p>
              <span />
            </div>

            <p className="portfolio-hero__label">Web Design Portfolio</p>

            <h1>
              Websites That <span>Convert</span>
            </h1>

            <p className="portfolio-hero__copy">
              500+ websites delivered across 12+ industries. Real businesses,
              real results.
            </p>

            <div className="portfolio-hero__scroll">
              <span>Scroll to explore</span>

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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <PortfolioGrid />
      </div>
    </>
  );
}