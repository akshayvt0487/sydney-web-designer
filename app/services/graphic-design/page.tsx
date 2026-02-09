import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Graphic Design Sydney | Professional Design Services",
  description: "Professional graphic design services in Sydney. Design compelling visual content that communicates your message and engages your audience. Print and digital design.",
};

export default function GraphicDesignPage() {
  const service = services.find((s) => s.slug === "graphic-design")!;
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(6, 9);

  const stats = [
    { label: "Designs Created", number: "2000+" },
    { label: "Years Experience", number: "13+" },
    { label: "Happy Clients", number: "200+" },
    { label: "Projects Delivered", number: "500+" },
  ];

  const features = [
    {
      title: "Print Design",
      description: "Brochures, flyers, posters, and print materials that make an impact.",
      icon: "📄",
    },
    {
      title: "Digital Graphics",
      description: "Social media graphics, web banners, and digital marketing materials.",
      icon: "💻",
    },
    {
      title: "Infographics",
      description: "Visual representations of data and information that are easy to understand.",
      icon: "📊",
    },
    {
      title: "Presentations",
      description: "Professional presentation design that impresses clients and wins business.",
      icon: "📽️",
    },
    {
      title: "Packaging Design",
      description: "Product packaging that stands out on shelves and communicates quality.",
      icon: "📦",
    },
    {
      title: "Signage Design",
      description: "Eye-catching signage for your business location, events, and vehicles.",
      icon: "🪧",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Brief & Requirements",
      description: "Understand your goals, audience, message, and where the design will be used.",
    },
    {
      step: 2,
      title: "Concept Development",
      description: "Create initial design concepts aligned with your brand and objectives.",
    },
    {
      step: 3,
      title: "Refinement",
      description: "Refine chosen concept based on your feedback until perfect.",
    },
    {
      step: 4,
      title: "Final Delivery",
      description: "Deliver print-ready or web-optimized files in all required formats.",
    },
  ];

  const faqs = [
    {
      question: "What file formats will I receive?",
      answer: "You'll receive files appropriate for your needs. For print, we provide high-resolution PDFs with bleed and crop marks. For digital, we provide JPG, PNG (with transparency if needed), and source files like AI or PSD depending on the project.",
    },
    {
      question: "Do you handle printing or just design?",
      answer: "We primarily focus on design but can coordinate printing if needed. We work with reliable print partners and can manage the entire process including proofing, printing, and delivery if you prefer a hands-off approach.",
    },
    {
      question: "How many revisions are included?",
      answer: "Most projects include 2-3 rounds of revisions. This is typically sufficient to refine designs to perfection. Additional revisions beyond this are available at an hourly rate if needed.",
    },
    {
      question: "What if I don&apos;t have a brief or know what I want?",
      answer: "No problem! We'll guide you through a questionnaire to understand your goals, audience, and preferences. We can also provide examples and recommendations based on our experience to help you make informed decisions.",
    },
    {
      question: "Can you match my existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines to ensure all designs are on-brand. If you don&apos;t have formal guidelines, we can extract brand elements from existing materials and maintain consistency.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <section className="bg-gradient-navy text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {service.icon} {service.name}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">Graphic Design That Communicates and Engages</h1>
            <p className="text-xl text-gray-300 mb-8">
              Design compelling visual content for print and digital that communicates your message, engages your audience, and reflects your brand professionally.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Start Your Design Project</button>
              <Link href="/portfolio" className="btn btn-white">View Design Work</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container"><StatsGrid stats={stats} columns={4} /></div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Graphic Design Services</h2>
            <p className="text-xl text-gray-600">From print to digital, we design it all.</p>
          </div>
          <div className="grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600">From concept to final delivery.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-navy-orange rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {brandingProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Graphic Design Portfolio</h2>
              <p className="text-xl text-gray-600">Professional designs that deliver results.</p>
            </div>
            <div className="grid-3">
              {brandingProjects.slice(0, 6).map((project) => (<PortfolioCard key={project.id} project={project} />))}
            </div>
            <div className="text-center mt-12">
              <Link href="/portfolio" className="btn btn-primary">View All Projects</Link>
            </div>
          </div>
        </section>
      )}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Businesses standing out with professional design.</p>
          </div>
          <div className="grid-3">
            {brandingReviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}
          </div>
          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Graphic Design Pricing</h2>
            <p className="text-xl text-gray-600">Flexible hourly or project-based pricing.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Design Services</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$120<span className="text-xl text-gray-600">/hour</span></div>
                <p className="text-gray-600">Or fixed quotes for larger projects</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['Brochure design: $600+', 'Social media graphics: $150+', 'Infographic design: $500+', 'Presentation design: $800+', 'Packaging design: $1,200+', 'Signage design: $400+', 'Banner design: $200+', 'Print ad design: $300+'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about graphic design services.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Ready for Professional Graphic Design?" description="Create compelling visual content that engages your audience and communicates your message effectively." primaryButtonText="Start Your Project" primaryButtonAction="contact" />
    </>
  );
}
