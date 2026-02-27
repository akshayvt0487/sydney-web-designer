import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";

export const metadata = generateMetadata({
  title: "Local SEO Sydney | Get Found by Local Customers",
  description: "Professional local SEO services in Sydney. Dominate Google Maps and local search with targeted strategies. 1,000+ local rankings, 80+ Google Business Profiles, 285% average call increase.",
  keywords: "local seo sydney, google business profile optimization, google maps ranking, local search sydney, local seo services, near me optimization, local seo expert sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/local-seo",
  ogImage: "/images/og/services.svg",
});

export default function LocalSEOPage() {
  const service = services.find((s) => s.slug === "local-seo")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Local SEO", url: "https://sydneywebdesigner.com.au/services/local-seo" }
  ];
  const seoProjects = portfolioProjects.filter((p) => p.services.includes("SEO"));
  const seoReviews = googleReviews.slice(0, 3);

  const stats = [{ label: "Local Rankings", number: "1,000+" }, { label: "Google Business Profiles", number: "80+" }, { label: "Avg. Call Increase", number: "285%" }, { label: "Client Satisfaction", number: "96%" }];
  const features = [
    { title: "Google Business Profile", description: "Optimize and manage your Google Business Profile for maximum visibility.", icon: "fas fa-map-marker-alt" },
    { title: "Local Citations", description: "Build consistent business listings across directories and review sites.", icon: "fas fa-edit" },
    { title: "Review Management", description: "Generate and manage customer reviews to boost local rankings.", icon: "fas fa-star" },
    { title: "Local Keywords", description: "Target location-specific keywords that local customers are searching.", icon: "fas fa-search" },
    { title: "Local Link Building", description: "Earn links from local businesses, organizations, and directories.", icon: "fas fa-link" },
    { title: "Map Pack Rankings", description: "Optimize to appear in Google's local 3-pack for relevant searches.", icon: "fas fa-map-marked-alt" },
  ];
  const process = [
    { step: 1, title: "Local Audit", description: "Analyze current local presence, citations, reviews, and Google Business Profile." },
    { step: 2, title: "Profile Optimization", description: "Optimize Google Business Profile with complete info, categories, and posts." },
    { step: 3, title: "Citations & Reviews", description: "Build citations, claim listings, and implement review generation strategy." },
    { step: 4, title: "Monitor & Maintain", description: "Track rankings, respond to reviews, and maintain consistent local presence." },
  ];
  const faqs = [
    { question: "What is local SEO and how is it different from regular SEO?", answer: "Local SEO focuses on appearing in location-based searches like \"plumber near me\" or \"dentist in Sydney\". It emphasizes Google Business Profile optimization, local citations, reviews, and map rankings, while traditional SEO focuses more on broader organic rankings." },
    { question: "How important are Google reviews for local SEO?", answer: "Extremely important! Reviews are a major ranking factor for local search. Both quantity and quality matter. We implement strategies to generate more 5-star reviews consistently while managing and responding to all feedback professionally." },
    { question: "What is a local citation and why do I need them?", answer: "A local citation is any online mention of your business name, address, and phone number (NAP). Consistent citations across directories like Yellow Pages, True Local, and industry-specific sites help Google verify your business and boost local rankings." },
    { question: "Can local SEO help if I serve multiple locations?", answer: "Yes! We can optimize for multiple service areas or locations. Strategies vary depending if you have physical locations or just service areas. We'll create location-specific pages and optimize your Google Business Profile for each area." },
    { question: "How long does local SEO take to show results?", answer: "Local SEO typically shows results faster than traditional SEO. You may see improvements in Google Business Profile visibility within 2-4 weeks and significant local ranking improvements within 3-6 months with consistent optimization." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <ServiceHeroSection
        badge={{
          icon: `fas ${service.icon}`,
          text: service.name
        }}
        heading="Local SEO That Gets You Found by Local Customers"
        description="Dominate Google Maps and local search results. Get found by customers in your area with targeted local SEO strategies that drive calls and visits."
        buttons={{
          primary: {
            text: "Get Free Local SEO Audit",
            dataPopup: "seoAudit"
          },
          secondary: {
            text: "View Success Stories",
            href: "/portfolio"
          }
        }}
      />
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Local SEO Services</h2>
            <p className="text-xl text-gray-600">Everything you need to dominate local search results.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="mb-4"><i className={`${feature.icon} text-4xl text-[#f59e0b]`}></i></div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Local SEO Process</h2>
            <p className="text-xl text-gray-600">Proven methodology for local search dominance.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {seoProjects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Local SEO Success Stories</h2><p className="text-xl text-gray-600">Local businesses dominating their markets.</p></div><div className="grid-3">{seoProjects.slice(0, 6).map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Local businesses getting more customers with local SEO.</p>
          </div>
          <div className="grid-3">{seoReviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      {/* <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Local SEO Pricing</h2>
            <p className="text-xl text-gray-600">Affordable local SEO for businesses of all sizes.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2">Local SEO Package</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$1,500<span className="text-xl text-gray-600">/month</span></div>
                <p className="text-gray-600">Complete local SEO optimization</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['Google Business Profile optimization', 'Local citation building', 'Review generation & management', 'Local keyword optimization', 'Location page creation', 'Local link building', 'Monthly local rankings report', 'Review response management'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="seoAudit" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">Multiple locations? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for multi-location pricing</button></p>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about local SEO services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready to Dominate Local Search?" description="Get found by customers in your area and grow your local business with proven local SEO strategies." primaryButtonText="Get Free Local SEO Audit" primaryButtonAction="seoAudit" />
    </>
  );
}
