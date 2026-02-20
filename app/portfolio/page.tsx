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
  canonicalUrl: "https://sydneywebdesigner.com.au/portfolio",
  ogImage: "/images/og/services.svg",
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Portfolio", url: "https://sydneywebdesigner.com.au/portfolio" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden" style={{ height: 500 }}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#f59e0b] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>
            <span className="h-px w-10 bg-[#f59e0b]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Websites That{" "}
            <span className="relative inline-block">
              <span className="text-[#f59e0b]">Convert</span>
              {/* Underline squiggle */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6 C50 2, 100 8, 150 4, 198 2"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            500+ websites delivered across 12+ industries. Real businesses, real results.
          </p>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce mt-2">
            <span>Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ──────────────────────── */}
      <PortfolioGrid />
    </>
  );
}
