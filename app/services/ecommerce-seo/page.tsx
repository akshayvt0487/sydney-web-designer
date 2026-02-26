import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Ecommerce SEO Sydney | Rank Products & Drive Online Sales",
  description: "Expert ecommerce SEO services in Sydney. Optimize product pages, category pages, and boost online sales with proven strategies. Increase product visibility and organic traffic.",
  keywords: "ecommerce seo sydney, online store seo, product seo, shopify seo sydney, woocommerce seo, ecommerce optimization",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/ecommerce-seo",
});

export default function EcommerceSEOPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Ecommerce SEO", url: "https://sydneywebdesigner.com.au/services/ecommerce-seo" }
  ];

  const serviceData = {
    name: "Ecommerce SEO Services",
    description: "Specialized SEO services for online stores. Optimize product pages, improve rankings, and drive qualified traffic that converts into sales.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-shopping-cart",
      title: "Increase Product Visibility",
      description: "Get your products in front of buyers actively searching on Google",
      points: [
        "Rank for high-intent product keywords",
        "Appear in Google Shopping results",
        "Optimize for local product searches",
        "Dominate category-level searches"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Drive Qualified Traffic",
      description: "Attract shoppers ready to buy, not just browsers",
      points: [
        "Target bottom-of-funnel keywords",
        "Optimize for buyer intent searches",
        "Reduce bounce rates with relevance",
        "Increase conversion rates naturally"
      ]
    },
    {
      icon: "fa-dollar-sign",
      title: "Lower Customer Acquisition Cost",
      description: "SEO delivers consistent traffic without ongoing ad spend",
      points: [
        "Reduce dependency on paid ads",
        "Build long-term organic traffic",
        "Improve profit margins per sale",
        "Sustainable growth month-over-month"
      ]
    },
    {
      icon: "fa-star",
      title: "Build Brand Authority",
      description: "Establish your store as the trusted source in your niche",
      points: [
        "Rank for brand + product searches",
        "Earn featured snippets for products",
        "Build topical authority in categories",
        "Capture repeat customers organically"
      ]
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile Shopping Optimization",
      description: "Capture the 60%+ of shoppers browsing on mobile",
      points: [
        "Mobile-first product page design",
        "Fast loading speeds on mobile",
        "Touch-friendly navigation",
        "Mobile checkout optimization"
      ]
    },
    {
      icon: "fa-sync",
      title: "Continuous Optimization",
      description: "Ongoing improvements to stay ahead of competitors",
      points: [
        "Regular content updates",
        "Seasonal keyword optimization",
        "Competitor monitoring",
        "Algorithm update adaptation"
      ]
    },
  ];

  const services = [
    {
      title: "Technical Ecommerce SEO",
      items: [
        "Site structure optimization",
        "URL structure & canonicalization",
        "XML sitemap configuration",
        "Page speed optimization",
        "Mobile responsiveness",
        "Structured data markup (Product, Review, Breadcrumb)",
        "Duplicate content resolution",
        "Faceted navigation SEO"
      ]
    },
    {
      title: "Product Page Optimization",
      items: [
        "Keyword-optimized product titles",
        "Compelling product descriptions",
        "Image optimization & alt tags",
        "Review schema implementation",
        "Internal linking strategy",
        "Related products optimization",
        "Stock status handling",
        "Price comparison optimization"
      ]
    },
    {
      title: "Category Page SEO",
      items: [
        "Category description optimization",
        "Breadcrumb navigation",
        "Filter & sort functionality SEO",
        "Pagination best practices",
        "Category landing page content",
        "Featured products strategy",
        "Cross-category linking",
        "Seasonal category updates"
      ]
    },
    {
      title: "Content Marketing",
      items: [
        "Buying guides & how-to content",
        "Product comparison articles",
        "Industry blog content",
        "FAQ pages for common queries",
        "Video content optimization",
        "User-generated content strategy",
        "Seasonal content planning",
        "Link-worthy resource creation"
      ]
    },
  ];

  const platforms = [
    { name: "Shopify SEO", icon: "fa-store", description: "Complete SEO for Shopify stores" },
    { name: "WooCommerce SEO", icon: "fa-wordpress", description: "WordPress ecommerce optimization" },
    { name: "Magento SEO", icon: "fa-shopping-bag", description: "Enterprise ecommerce SEO" },
    { name: "BigCommerce SEO", icon: "fa-cart-plus", description: "BigCommerce optimization" },
    { name: "Custom Platforms", icon: "fa-code", description: "Bespoke ecommerce solutions" },
  ];

  const caseStudy = {
    name: "Sydney Fashion Retailer",
    challenge: "New online store struggling to compete with established brands. Only 200 organic visitors per month, minimal sales from search.",
    solution: "Comprehensive ecommerce SEO strategy including product optimization, category restructuring, content marketing, and link building.",
    results: [
      "3,500+ organic visitors per month (1,650% increase)",
      "Page 1 rankings for 85+ product keywords",
      "$45,000 monthly revenue from organic search",
      "8.5x return on SEO investment",
      "Average position improved from 45 to 8.2",
      "Mobile traffic increased 420%"
    ],
    timeline: "6 months"
  };

  const faq = [
    {
      q: "How long does ecommerce SEO take to show results?",
      a: "Most ecommerce stores see initial improvements within 3-4 months, with significant results by month 6. Product pages tend to rank faster than category pages. The timeline depends on your current rankings, competition level, and the age of your domain."
    },
    {
      q: "What's the difference between ecommerce SEO and regular SEO?",
      a: "Ecommerce SEO focuses on optimizing product and category pages, handling technical challenges like duplicate content from similar products, implementing schema markup for products and reviews, optimizing for transactional keywords, and managing large site structures with hundreds or thousands of pages."
    },
    {
      q: "Should I focus on product pages or category pages first?",
      a: "We recommend a balanced approach. Category pages target broader keywords and drive more traffic, while product pages convert better. We typically start with high-value category pages and bestselling products, then expand to the full catalog systematically."
    },
    {
      q: "How do you handle SEO for products that go out of stock?",
      a: "We implement proper handling for out-of-stock products: keeping pages live with 'notify when back in stock' options, showing related alternatives, maintaining crawlability, and avoiding 404 errors. For discontinued products, we use strategic 301 redirects to similar items."
    },
    {
      q: "Can ecommerce SEO work for new stores with no reviews yet?",
      a: "Absolutely! While reviews help, we focus on other ranking factors for new stores: detailed product descriptions, high-quality images, competitive pricing information, comprehensive specifications, helpful content, and building initial authority through content marketing and link building."
    },
    {
      q: "How does ecommerce SEO integrate with Google Shopping?",
      a: "Ecommerce SEO complements Google Shopping by improving organic product visibility while Shopping ads provide paid exposure. We optimize product data feeds, implement product schema markup, ensure consistent information across channels, and create landing pages that work for both organic and Shopping traffic."
    },
    {
      q: "What's the ROI of ecommerce SEO compared to Google Ads?",
      a: "While Google Ads delivers immediate results, ecommerce SEO provides sustainable long-term ROI. Our clients typically see 3-5x ROI on SEO within 12 months, with compounding benefits. SEO traffic doesn't stop when you pause spending, making it more cost-effective long-term."
    },
    {
      q: "How do you optimize for voice search and shopping?",
      a: "We optimize for voice commerce by targeting conversational long-tail keywords, creating FAQ content that answers common questions, implementing structured data for voice assistants, optimizing for local voice searches (\"near me\" queries), and ensuring mobile-fast experiences for voice users."
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#10b981] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-shopping-cart text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">Ecommerce SEO Specialists</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ecommerce SEO Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Rank your products higher. Drive more sales. Grow your online store with proven ecommerce SEO strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Free SEO Audit
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">247%</div>
                <div className="text-sm text-slate-300">Avg Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">4.2x</div>
                <div className="text-sm text-slate-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">85+</div>
                <div className="text-sm text-slate-300">Keywords Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">6 mo</div>
                <div className="text-sm text-slate-300">To Major Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Ecommerce SEO Matters for Your Online Store</h2>
            <p>Drive sustainable growth and reduce customer acquisition costs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover:shadow-xl transition-all border border-[#f59e0b]/30">
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${benefit.icon} text-3xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary-navy">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check text-[#f59e0b] mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f8fafc]" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Ecommerce SEO Services</h2>
            <p>Comprehensive optimization for every aspect of your online store</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary-navy flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#f59e0b] text-white rounded-lg flex items-center justify-center text-lg">
                    {index + 1}
                  </span>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#f59e0b] mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Ecommerce Platforms We Optimize</h2>
            <p>Expert SEO for all major ecommerce platforms</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="card text-center hover:border-[#f59e0b] transition-all">
                <i className={`fas ${platform.icon} text-4xl text-[#f59e0b] mb-4`}></i>
                <h3 className="font-bold text-primary-navy mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Ecommerce SEO Results</h2>
            <p className="text-slate-200">See how we transformed a struggling online store</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="card bg-white/10 backdrop-blur-sm border-2 border-[#f59e0b]">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <h3 className="text-3xl font-bold mb-2">{caseStudy.name}</h3>
                  <div className="text-[#f59e0b] font-semibold mb-6">Timeline: {caseStudy.timeline}</div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Challenge:</h4>
                      <p className="text-slate-200">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Solution:</h4>
                      <p className="text-slate-200">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-[#f59e0b]/20 to-[#fb923c]/20 rounded-2xl p-8">
                  <h4 className="font-bold mb-6 text-xl">Results Achieved:</h4>
                  <ul className="space-y-4">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <i className="fas fa-trophy text-[#f59e0b] text-xl flex-shrink-0 mt-1"></i>
                        <span className="text-slate-100">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Ecommerce SEO Frequently Asked Questions</h2>
            <p>Common questions about optimizing online stores for search engines</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-3 text-primary-navy">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Grow Your Online Store?"
        description="Get a free ecommerce SEO audit and discover how we can increase your product visibility, drive more qualified traffic, and boost online sales."
        primaryButtonText="Get Free SEO Audit"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
