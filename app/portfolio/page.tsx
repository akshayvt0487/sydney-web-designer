import { Metadata } from "next";
import Link from "next/link";
import { portfolioProjects } from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio | Our Work",
  description: "View our portfolio of 500+ successful websites. From small businesses to enterprise clients, see how we've helped Sydney businesses grow online.",
  keywords: "web design portfolio sydney, website examples, sydney web designer work",
  canonicalUrl: "https://sydneywebdesigner.com.au/portfolio",
});

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Portfolio", url: "https://sydneywebdesigner.com.au/portfolio" },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-32 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Our Portfolio
          </h1>
          <p className="text-xl text-white">
            Showcasing our best work - 500+ successful projects delivered!
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1e293b] mb-12 text-center">Recent Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border-t-4 border-[#f59e0b] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300"
              >
                <PortfolioCarousel
                  images={project.images || [project.image]}
                  title={project.name}
                />
                <div className="p-8">
                  <div className="mb-2">
                    <span className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{project.name}</h3>
                  <p className="text-[#64748b] mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-[#1e293b] px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#f59e0b] font-semibold hover:gap-3 transition-all"
                    >
                      Visit Website <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <Link
              href="/"
              className="bg-[#f59e0b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#d97706] transition-all hover:shadow-lg inline-block"
            >
              ← Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="bg-[#f59e0b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#d97706] transition-all hover:shadow-lg inline-block"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
