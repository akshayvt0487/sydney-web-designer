import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Marketing Materials Design Sydney | Brochures & Flyers",
  description: "Professional marketing materials design in Sydney. Design persuasive brochures, flyers, and promotional materials that showcase your offerings and generate interest.",
};

export default function MarketingMaterialsPage() {
  const service = services.find((s) => s.slug === "marketing-materials")!;
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(3, 6);

  const stats = [{ label: "Materials Designed", number: "800+" }, { label: "Years Experience", number: "13+" }, { label: "Happy Clients", number: "250+" }, { label: "Print Projects", number: "600+" }];
  const features = [
    { title: "Brochures", description: "Multi-page brochures that showcase your products and services professionally.", icon: "📘" },
    { title: "Flyers", description: "Eye-catching single-page flyers for promotions, events, and announcements.", icon: "📄" },
    { title: "Catalogs", description: "Product catalogs that make browsing and ordering easy for customers.", icon: "📚" },
    { title: "Posters", description: "Large format posters that grab attention and communicate your message.", icon: "🖼️" },
    { title: "Banners", description: "Pull-up banners and signage for events, trade shows, and retail spaces.", icon: "🪧" },
    { title: "Direct Mail", description: "Postcards and mailers designed to generate response and drive action.", icon: "📬" },
  ];
  const process = [
    { step: 1, title: "Content & Goals", description: "Understand your message, audience, and how materials will be distributed." },
    { step: 2, title: "Design & Layout", description: "Create compelling layouts with engaging copy and eye-catching visuals." },
    { step: 3, title: "Review & Refine", description: "Refine design based on your feedback and prepare for printing." },
    { step: 4, title: "Print Coordination", description: "Deliver print-ready files and coordinate printing if required." },
  ];
  const faqs = [
    { question: "Do you write copy for marketing materials?", answer: "Yes! We can write persuasive copy for your marketing materials based on your products/services and target audience. We apply proven copywriting principles to create content that engages and converts." },
    { question: "What print specifications should I provide?", answer: "Let us know the final size, quantity, and any specific requirements (folding, binding, etc.). We'll handle all technical specifications including bleed, color modes, and resolution to ensure perfect printing." },
    { question: "Can you match my existing brand materials?", answer: "Absolutely! Send us your existing materials and brand guidelines. We'll ensure new designs match perfectly in terms of colors, fonts, style, and overall brand consistency." },
    { question: "How many revisions are included?", answer: "Most projects include 2-3 revision rounds. This is typically enough to perfect your materials. Additional revisions beyond this are available at our hourly rate if needed." },
    { question: "What if I need materials in multiple sizes?", answer: "No problem! Once we design one version, we can adapt it to multiple sizes (e.g., A4 flyer, DL flyer, poster). We charge per size but reusing design elements is more cost-effective than starting from scratch." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6">Marketing Materials That Drive Results</h1>
            <p className="text-xl text-gray-300 mb-8">Design persuasive brochures, flyers, and promotional materials that showcase your offerings and generate interest from your target audience.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Start Your Project</button>
              <Link href="/portfolio" className="btn btn-white">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Marketing Materials We Design</h2>
            <p className="text-xl text-gray-600">From brochures to banners, we design it all.</p>
          </div>
          <div className="grid-3">{features.map((feature, index) => (<div key={index} className="card hover:shadow-card-hover transition-shadow"><div className="text-4xl mb-4">{feature.icon}</div><h3 className="text-xl font-bold mb-3">{feature.title}</h3><p className="text-gray-600">{feature.description}</p></div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600">From concept to print-ready materials.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">{process.map((item) => (<div key={item.step} className="card hover:shadow-card-hover transition-shadow"><div className="flex items-start gap-4"><div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div><div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div></div>))}</div>
        </div>
      </section>
      {brandingProjects.length > 0 && (<section className="py-20"><div className="container"><div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-4xl font-bold mb-4">Marketing Materials Portfolio</h2><p className="text-xl text-gray-600">Professional materials that get results.</p></div><div className="grid-3">{brandingProjects.slice(0, 6).map((project) => (<PortfolioCard key={project.id} project={project} />))}</div><div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div></div></section>)}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses growing with effective marketing materials.</p>
          </div>
          <div className="grid-3">{brandingReviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Marketing Materials Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for professional marketing materials.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Marketing Material Design</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$120<span className="text-xl text-gray-600">/hour</span></div>
                <p className="text-gray-600">Or fixed quotes for specific projects</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['DL Flyer: $300', 'A4 Flyer: $400', 'Tri-fold Brochure: $600', '8-page Brochure: $1,200', 'Product Catalog: $2,000+', 'Pull-up Banner: $300', 'Poster Design: $400', 'Direct Mail: $500'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get a Quote</button></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about marketing materials design.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">{faqs.map((faq, index) => (<div key={index} className="card"><h3 className="text-lg font-bold mb-2">{faq.question}</h3><p className="text-gray-600">{faq.answer}</p></div>))}</div>
        </div>
      </section>
      <CTASection title="Ready for Professional Marketing Materials?" description="Create persuasive marketing materials that showcase your business and generate results." primaryButtonText="Start Your Project" primaryButtonAction="contact" />
    </>
  );
}
