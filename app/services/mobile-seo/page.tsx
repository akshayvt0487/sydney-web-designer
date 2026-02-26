import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Mobile SEO Sydney | Optimize for Mobile Search & Rankings",
  description: "Expert mobile SEO services in Sydney. Optimize your website for mobile-first indexing, improve mobile rankings, and capture the growing mobile search market.",
  keywords: "mobile seo sydney, mobile-first indexing, mobile optimization, responsive seo, mobile search optimization, mobile site speed",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/mobile-seo",
});

export default function MobileSEOPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Mobile SEO", url: "https://sydneywebdesigner.com.au/services/mobile-seo" }
  ];

  const serviceData = {
    name: "Mobile SEO Services",
    description: "Comprehensive mobile SEO optimization for mobile-first indexing. Improve mobile rankings, speed, and user experience to capture the majority of search traffic.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-mobile-alt",
      title: "Mobile-First Indexing Ready",
      description: "Ensure Google indexes your mobile site correctly for optimal rankings",
      points: [
        "Pass Google's mobile-friendly test",
        "Optimize for mobile crawling",
        "Consistent content across devices",
        "Mobile-optimized structured data"
      ]
    },
    {
      icon: "fa-rocket",
      title: "Lightning-Fast Mobile Speed",
      description: "Achieve Core Web Vitals excellence for better rankings and conversions",
      points: [
        "Sub-3 second load times",
        "Optimized Largest Contentful Paint",
        "Minimal Cumulative Layout Shift",
        "Fast First Input Delay"
      ]
    },
    {
      icon: "fa-search",
      title: "Capture 63% of Search Traffic",
      description: "Dominate mobile search where most users are searching",
      points: [
        "Mobile-specific keyword targeting",
        "Local mobile search optimization",
        "Voice search compatibility",
        "App store optimization (ASO)"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Higher Mobile Conversions",
      description: "Turn mobile visitors into customers with optimized experiences",
      points: [
        "Touch-friendly navigation",
        "Simplified mobile forms",
        "Click-to-call optimization",
        "Mobile checkout optimization"
      ]
    },
    {
      icon: "fa-users",
      title: "Better User Experience",
      description: "Reduce bounce rates and increase engagement on mobile devices",
      points: [
        "Responsive design optimization",
        "Mobile-friendly content layout",
        "Optimized images and media",
        "Accessible mobile interface"
      ]
    },
    {
      icon: "fa-trophy",
      title: "Competitive Advantage",
      description: "Outrank competitors still struggling with mobile optimization",
      points: [
        "Mobile-first content strategy",
        "Progressive Web App (PWA) implementation",
        "AMP page optimization",
        "Mobile ranking monitoring"
      ]
    },
  ];

  const services = [
    {
      title: "Mobile Technical SEO",
      items: [
        "Mobile-first indexing optimization",
        "Responsive design implementation",
        "Mobile site speed optimization",
        "Core Web Vitals improvement",
        "Mobile XML sitemap configuration",
        "Touch element spacing",
        "Mobile viewport configuration",
        "Accelerated Mobile Pages (AMP)"
      ]
    },
    {
      title: "Mobile UX Optimization",
      items: [
        "Mobile navigation optimization",
        "Touch-friendly button sizing",
        "Mobile form simplification",
        "Reduced mobile friction points",
        "Mobile-optimized popups",
        "Readable font sizes",
        "Thumb-zone optimization",
        "Mobile-friendly media players"
      ]
    },
    {
      title: "Mobile Content Strategy",
      items: [
        "Mobile-first content creation",
        "Concise mobile-friendly copy",
        "Scannable mobile layouts",
        "Mobile image optimization",
        "Video optimization for mobile",
        "Mobile-specific meta descriptions",
        "Featured snippet optimization",
        "Voice search content optimization"
      ]
    },
    {
      title: "Mobile Performance",
      items: [
        "Critical rendering path optimization",
        "Mobile caching strategies",
        "Image lazy loading",
        "Mobile JavaScript optimization",
        "CSS delivery optimization",
        "Server response time reduction",
        "Mobile CDN implementation",
        "Progressive enhancement techniques"
      ]
    },
  ];

  const mobileStats = [
    { icon: "fa-mobile-alt", stat: "63%", label: "of searches are on mobile" },
    { icon: "fa-bolt", stat: "53%", label: "of users abandon slow sites" },
    { icon: "fa-star", stat: "5x", label: "more likely to leave if not mobile-friendly" },
    { icon: "fa-chart-line", stat: "200%", label: "mobile traffic growth since 2016" },
  ];

  const caseStudy = {
    name: "Sydney Real Estate Agency",
    challenge: "Website failing Google's mobile-friendly test, losing 60% of potential mobile traffic. High bounce rate on mobile (78%), poor mobile rankings despite good desktop performance.",
    solution: "Complete mobile SEO overhaul including responsive redesign, Core Web Vitals optimization, mobile content restructuring, and AMP implementation for key landing pages.",
    results: [
      "Mobile traffic increased 340%",
      "Mobile bounce rate reduced to 32%",
      "Page load time: 5.2s → 1.8s",
      "Perfect 100/100 mobile score on PageSpeed Insights",
      "Mobile conversions increased 215%",
      "89% of keywords now ranking on mobile page 1"
    ],
    timeline: "4 months"
  };

  const faq = [
    {
      q: "What is mobile-first indexing and why does it matter?",
      a: "Mobile-first indexing means Google predominantly uses the mobile version of your website for indexing and ranking. Since March 2021, all websites are indexed mobile-first. If your mobile site is inferior to desktop, your rankings will suffer. With 63% of searches happening on mobile, having a well-optimized mobile site is critical for visibility and traffic."
    },
    {
      q: "How do Core Web Vitals affect mobile SEO?",
      a: "Core Web Vitals (LCP, FID, CLS) are critical mobile ranking factors. They measure loading speed, interactivity, and visual stability. Mobile devices often have slower connections and less processing power, making these metrics even more important. Poor Core Web Vitals on mobile can significantly hurt your rankings and user experience."
    },
    {
      q: "Should I have a separate mobile site or responsive design?",
      a: "Google recommends responsive design over separate mobile sites (m.example.com). Responsive design serves the same HTML on all devices with CSS adapting the layout. This is easier to maintain, avoids duplicate content issues, and ensures consistent content across devices - crucial for mobile-first indexing."
    },
    {
      q: "How fast should my mobile site load?",
      a: "Ideally under 3 seconds. Google research shows 53% of mobile users abandon sites taking over 3 seconds to load. We aim for under 2 seconds for optimal results. Target: LCP under 2.5s, FID under 100ms, CLS under 0.1. Every second of delay can reduce conversions by up to 20%."
    },
    {
      q: "Do I need AMP (Accelerated Mobile Pages)?",
      a: "AMP is no longer required for Google's Top Stories feature, but it can still benefit content-heavy sites like news, blogs, and publications. AMP pages load almost instantly, reducing bounce rates and improving user experience. We evaluate whether AMP makes sense based on your site type and goals."
    },
    {
      q: "How does mobile SEO differ from desktop SEO?",
      a: "Mobile SEO focuses on speed optimization, touch-friendly design, simplified navigation, voice search optimization, local search (70% of mobile searches lead to action within 1 hour), shorter content formats, and ensuring feature parity with desktop. Mobile users also have different search intent and behavior patterns."
    },
    {
      q: "Will mobile optimization help my local SEO?",
      a: "Absolutely! 76% of people who search on mobile for something nearby visit a business within 24 hours. Mobile optimization is crucial for local SEO, especially for 'near me' searches, Google Maps visibility, click-to-call functionality, and mobile-friendly directions. Most local searches happen on mobile devices."
    },
    {
      q: "How do you optimize for voice search on mobile?",
      a: "Voice search optimization involves targeting conversational long-tail keywords, creating FAQ content that answers questions directly, optimizing for featured snippets, using structured data markup, focusing on local SEO (voice searches are often local), and ensuring fast mobile load times since voice users expect quick results."
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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-mobile-alt text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">Mobile-First SEO Experts</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mobile SEO Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Dominate mobile search. Optimize for mobile-first indexing. Capture 63% of search traffic with expert mobile SEO.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Mobile SEO Audit
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {mobileStats.map((item, index) => (
                <div key={index} className="text-center">
                  <i className={`fas ${item.icon} text-3xl text-[#f59e0b] mb-3`}></i>
                  <div className="text-4xl font-bold text-[#f59e0b] mb-2">{item.stat}</div>
                  <div className="text-sm text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Mobile SEO Is Critical for Your Business</h2>
            <p>Capture the majority of search traffic with mobile-first optimization</p>
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
            <h2>Our Mobile SEO Services</h2>
            <p>Comprehensive optimization for the mobile-first era</p>
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

      {/* Why Mobile Matters */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>The Mobile Search Landscape in 2026</h2>
            <p>Understanding why mobile optimization is non-negotiable</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-[#f59e0b]">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy">Mobile-First Is Here</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Google uses mobile version for all ranking decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>63% of Google searches happen on mobile devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Mobile traffic has doubled since 2016</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-[#f59e0b] mt-1"></i>
                  <span>Core Web Vitals are critical ranking factors</span>
                </li>
              </ul>
            </div>

            <div className="card border-l-4 border-[#f59e0b]">
              <h3 className="text-2xl font-bold mb-4 text-primary-navy">User Behavior Shift</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="fas fa-times-circle text-red-500 mt-1"></i>
                  <span>53% abandon sites taking over 3 seconds to load</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times-circle text-red-500 mt-1"></i>
                  <span>5x more likely to leave if not mobile-friendly</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times-circle text-red-500 mt-1"></i>
                  <span>48% of users feel frustrated by non-mobile sites</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times-circle text-red-500 mt-1"></i>
                  <span>70% of mobile searches lead to action within 1 hour</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Mobile SEO Results</h2>
            <p className="text-slate-200">How we transformed mobile performance and rankings</p>
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
            <h2>Mobile SEO Frequently Asked Questions</h2>
            <p>Common questions about mobile search optimization</p>
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
        title="Ready to Dominate Mobile Search?"
        description="Get a free mobile SEO audit and discover how to optimize for mobile-first indexing, improve Core Web Vitals, and capture the majority of search traffic."
        primaryButtonText="Get Mobile SEO Audit"
        primaryButtonAction="seoAudit"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
