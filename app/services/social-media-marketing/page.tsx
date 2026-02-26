import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";

export const metadata = generateMetadata({
  title: "Social Media Marketing Sydney | Facebook, Instagram & LinkedIn",
  description: "Strategic social media marketing services in Sydney. Engage your audience and grow your business. 500K+ followers managed, 15% average engagement, 1000+ posts created for 50+ clients.",
  keywords: "social media marketing sydney, facebook marketing, instagram marketing, linkedin marketing, social media management sydney, social media advertising, content creation sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/social-media-marketing",
  ogImage: "/images/og/services.svg",
});

export default function SocialMediaMarketingPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Social Media Marketing", url: "https://sydneywebdesigner.com.au/services/social-media-marketing" }
  ];

  const serviceData = {
    name: "Social Media Marketing",
    description: "Strategic social media marketing services including content creation, platform management, and paid advertising across Facebook, Instagram, LinkedIn, and more. Engage your audience and grow your business.",
    provider: "Sydney Web Designer"
  };
  const stats = [
    { number: "500K+", label: "Followers Managed" },
    { number: "15%", label: "Avg Engagement" },
    { number: "1000+", label: "Posts Created" },
    { number: "50+", label: "Clients" },
  ];

  const features = [
    {
      icon: "fas fa-mobile-alt",
      title: "Social Strategy",
      description: "Platform-specific strategy",
      items: ["Platform selection", "Content strategy", "Audience targeting", "Growth tactics"]
    },
    {
      icon: "fas fa-palette",
      title: "Content Creation",
      description: "Engaging content",
      items: ["Post graphics", "Video content", "Stories", "Reels/TikToks"]
    },
    {
      icon: "fas fa-users",
      title: "Community Management",
      description: "Audience engagement",
      items: ["Comment responses", "DM management", "Community building", "Reputation management"]
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Paid Social Ads",
      description: "Social advertising",
      items: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Campaign optimization"]
    },
    {
      icon: "fas fa-handshake",
      title: "Influencer Marketing",
      description: "Influencer partnerships",
      items: ["Influencer outreach", "Collaboration management", "Campaign tracking", "ROI measurement"]
    },
    {
      icon: "fas fa-chart-bar",
      title: "Analytics",
      description: "Performance tracking",
      items: ["Engagement metrics", "Follower growth", "Reach analysis", "ROI reporting"]
    },
  ];

  const process = [
    { number: 1, title: "Discovery", description: "Deep dive into your business, goals, and requirements" },
    { number: 2, title: "Strategy", description: "Develop custom strategy based on research and analysis" },
    { number: 3, title: "Planning", description: "Create detailed roadmap and project timeline" },
    { number: 4, title: "Execution", description: "Implement solution with attention to detail" },
    { number: 5, title: "Testing", description: "Thorough quality assurance and optimization" },
    { number: 6, title: "Launch & Support", description: "Deploy and provide ongoing support" },
  ];

  const caseStudies = [
    {
      name: "The Tspoon Cafe",
      industry: "Restaurant",
      result: "Instagram strategy building loyal following and driving daily foot traffic"
    },
    {
      name: "GPS Vehicle Inspections",
      industry: "Automotive",
      result: "Social media presence establishing authority and generating inspection inquiries"
    },
  ];

  const testimonials = [
    {
      text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.",
      author: "Sydney Business Owner",
      role: "Professional Services"
    },
    {
      text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.",
      author: "Local Business",
      role: "Parramatta, NSW"
    },
    {
      text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.",
      author: "Sydney Client",
      role: "Service Provider"
    },
  ];

  const pricingOptions = [
    {
      name: "Starter",
      price: "$1,500",
      period: "per month",
      features: ["1-2 platforms", "8 posts/month", "Basic graphics", "Community management", "Monthly reports"]
    },
    {
      name: "Growth",
      price: "$3,000",
      period: "per month",
      featured: true,
      features: ["3-4 platforms", "20 posts/month", "Custom graphics", "Video content", "Paid ads", "Weekly reports"]
    },
    {
      name: "Enterprise",
      price: "$6,000+",
      period: "per month",
      features: ["All platforms", "Daily posting", "Video production", "Influencer campaigns", "Dedicated manager", "Advanced analytics"]
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceData.name, serviceData.description)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Social Media Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Grow your audience and engagement with strategic social media marketing across all major platforms
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#lead-form" className="btn btn-primary">
                Boost Social Media
              </Link>
              <Link href="#process" className="btn btn-secondary">
                Our Process
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-trophy"></i></div>
                <div className="text-sm opacity-90">13+ Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-star"></i></div>
                <div className="text-sm opacity-90">50+ 5-Star Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-check-circle"></i></div>
                <div className="text-sm opacity-90">Professional Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2"><i className="fas fa-chart-line"></i></div>
                <div className="text-sm opacity-90">Proven Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#1e293b]">
            Why Choose Social Media Marketing?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-[#f59e0b] hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-bold text-[#f59e0b] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e293b]">
            Our Social Media Marketing Services
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Comprehensive solutions designed to help your business succeed
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-[#f59e0b]/30 hover:-translate-y-2 transition-transform">
                <div className="text-5xl mb-6 text-[#f59e0b]">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#1e293b]">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check text-[#f59e0b] mr-3 mt-1"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" id="process">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1e293b]">
            Our Proven Process
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            A systematic approach to deliver outstanding results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="w-24 h-24 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1e293b]">
            Real Results for Sydney Businesses
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="border-b-4 border-[#f59e0b] pb-6 mb-6">
                  <h3 className="text-3xl font-bold text-[#1e293b] mb-2">{study.name}</h3>
                  <div className="text-[#f59e0b] font-semibold text-lg">{study.industry}</div>
                </div>
                <p className="text-gray-700 text-lg">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1e293b]">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#f59e0b]">
                <div className="text-[#f59e0b] text-2xl mb-6">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="font-semibold text-[#1e293b]">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">Social Media Marketing Pricing</h2>
              <p className="text-xl text-gray-600">Choose the package that fits your needs and budget</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <div key={index} className={`rounded-2xl p-8 text-center transition-all ${option.featured ? 'border-4 border-[#f59e0b] bg-orange-50 relative' : 'border-2 border-gray-200 hover:border-[#f59e0b]'}`}>
                  {option.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-[#1e293b] mb-4 mt-4">{option.name}</h3>
                  <div className="text-5xl font-bold text-[#f59e0b] mb-2">{option.price}</div>
                  <div className="text-gray-600 mb-8">{option.period}</div>
                  <ul className="text-left space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="fas fa-check text-[#f59e0b] mr-3 mt-1"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#lead-form" className={`btn ${option.featured ? 'btn-primary' : 'btn-secondary'} w-full`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Lead Form Section */}
      <section className="py-20" id="lead-form">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4 text-center">Get Your Free Consultation</h3>
            <p className="text-xl text-center opacity-90 mb-12">
              Tell us about your project and we&apos;ll provide expert advice and a custom quote
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">Full Name *</label>
                  <input type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Email *</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone *</label>
                  <input type="tel" required placeholder="04XX XXX XXX" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Company</label>
                  <input type="text" placeholder="Your company (optional)" className="w-full px-4 py-3 rounded-lg text-gray-900" />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Tell us about your project</label>
                <textarea placeholder="What are you looking to achieve?" rows={4} className="w-full px-4 py-3 rounded-lg text-gray-900"></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary bg-white text-[#1e293b] hover:bg-gray-100">
                  Boost Social Media
                </button>
                <p className="mt-4 text-sm opacity-80">
                  <i className="fas fa-comments mr-2"></i>
                  We&apos;ll respond within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#1e293b] text-white text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution for your business
          </p>
          <Link href="#lead-form" className="btn btn-secondary text-lg">
            Boost Social Media
          </Link>
        </div>
      </section>
    </>
  );
}
