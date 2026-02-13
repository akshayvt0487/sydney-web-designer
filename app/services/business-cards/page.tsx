import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Business Card Design Sydney | Professional Business Cards",
  description: "Professional business card design services in Sydney. Create memorable cards that reflect your brand and network effectively. 400+ cards designed, quality print and design services.",
  keywords: "business card design sydney, professional business cards, business card printing sydney, custom business cards, corporate business cards sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/business-cards",
  ogImage: "/images/og/services.svg",
});

export default function BusinessCardsPage() {
  const service = services.find((s) => s.slug === "business-cards")!;

  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Business Cards", url: "https://sydneywebdesigner.com.au/services/business-cards" }
  ];
  const brandingProjects = portfolioProjects.filter((p) => p.services.includes("Branding"));
  const brandingReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Cards Designed", number: "400+" },
    { label: "Years Experience", number: "13+" },
    { label: "Happy Professionals", number: "350+" },
    { label: "Client Satisfaction", number: "100%" },
  ];

  const features = [
    {
      title: "Custom Design",
      description: "Unique designs that stand out and reflect your professional brand.",
      icon: "🎨",
    },
    {
      title: "Brand Aligned",
      description: "Designs that perfectly match your existing brand identity and colors.",
      icon: "🎯",
    },
    {
      title: "Print Ready",
      description: "High-resolution files with bleed and crop marks ready for professional printing.",
      icon: "📄",
    },
    {
      title: "Multiple Options",
      description: "Receive 2-3 design concepts to choose from before refinement.",
      icon: "💡",
    },
    {
      title: "Premium Finishes",
      description: "Recommendations for paper stock, finishes, and special effects.",
      icon: "✨",
    },
    {
      title: "Quick Turnaround",
      description: "Most projects completed within 5-7 business days.",
      icon: "⚡",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Information Gathering",
      description: "Collect your contact details, brand elements, and design preferences.",
    },
    {
      step: 2,
      title: "Design Concepts",
      description: "Create 2-3 business card design concepts for your review.",
    },
    {
      step: 3,
      title: "Refinement",
      description: "Refine your chosen design with any adjustments needed.",
    },
    {
      step: 4,
      title: "Print Files",
      description: "Deliver print-ready files and coordinate printing if required.",
    },
  ];

  const faqs = [
    {
      question: "What information do I need to provide?",
      answer: "We'll need your name, title, company name, phone, email, website, and physical address (optional). If you have a logo and brand colors, provide those too. We'll guide you through the process with a simple form.",
    },
    {
      question: "Do you handle printing or just design?",
      answer: "We provide print-ready files that you can take to any printer. However, we can also coordinate printing through our trusted print partners if you prefer. We'll provide recommendations on paper stock and finishes.",
    },
    {
      question: "What size will my business cards be?",
      answer: "Standard Australian business cards are 90mm x 55mm. We can also design custom sizes or international sizes (US: 3.5\" x 2\") if needed. We'll ensure designs work perfectly at your chosen size.",
    },
    {
      question: "Can I order reprints with updated information?",
      answer: "Yes! We keep your design files and can easily update information for reprints. Minor text changes are free; significant design changes are charged at our hourly rate.",
    },
    {
      question: "What if I don&apos;t have a logo yet?",
      answer: "No problem! We can design your logo first or create a simple text-based business card design. Many clients start with business cards and later develop a full brand identity.",
    },
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
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">{service.icon} {service.name}</div>
            <h1 className="text-5xl font-bold mb-6 text-white">Business Cards That Make a Lasting First Impression</h1>
            <p className="text-xl text-white mb-8">Create memorable business cards that reflect your brand and help you network effectively. Professional design and quality printing.</p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">Design Your Cards</button>
              <Link href="/portfolio" className="btn btn-white">View Designs</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50"><div className="container"><StatsGrid stats={stats} columns={4} /></div></section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Business Card Design</h2>
            <p className="text-xl text-gray-600">Everything included for memorable business cards.</p>
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
            <p className="text-xl text-gray-600">From concept to print-ready files.</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{item.step}</div>
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
              <h2 className="text-4xl font-bold mb-4">Business Card Portfolio</h2>
              <p className="text-xl text-gray-600">Professional business cards we&apos;ve designed.</p>
            </div>
            <div className="grid-3">{brandingProjects.slice(0, 6).map((project) => (<PortfolioCard key={project.id} project={project} />))}</div>
            <div className="text-center mt-12"><Link href="/portfolio" className="btn btn-primary">View All Projects</Link></div>
          </div>
        </section>
      )}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Professionals making great first impressions.</p>
          </div>
          <div className="grid-3">{brandingReviews.map((review) => (<TestimonialCard key={review.id} review={review} />))}</div>
          <div className="text-center mt-12"><Link href="/testimonials" className="btn btn-primary">Read More Reviews</Link></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Card Pricing</h2>
            <p className="text-xl text-gray-600">Affordable professional business card design.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Business Card Design</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$200</div>
                <p className="text-gray-600">Design only (bring files to your printer)</p>
              </div>
              <div className="grid-2 gap-4 mb-8">
                {['2-3 design concepts', 'Unlimited revisions', 'Front & back design', 'Print-ready PDF files', 'High-resolution files', 'Source files included', '5-7 day turnaround', 'Print recommendations'].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center"><button data-popup="contact" className="btn btn-primary w-full sm:w-auto">Get Started</button></div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Need printing too? <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">Contact us for design + print packages</button>
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about business card design.</p>
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
      <CTASection title="Ready for Professional Business Cards?" description="Create business cards that make a memorable first impression and reflect your professional brand." primaryButtonText="Design Your Cards" primaryButtonAction="contact" />
    </>
  );
}
