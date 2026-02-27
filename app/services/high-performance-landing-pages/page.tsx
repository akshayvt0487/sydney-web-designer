import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "High Performance Landing Pages Sydney | Fast & Conversion-Optimized",
  description: "High performance landing pages in Sydney. 95+ PageSpeed scores, Core Web Vitals optimized, mobile-first design. Increase conversions with blazing-fast, SEO-friendly landing pages built for results.",
  keywords: "high performance landing pages sydney, fast landing pages, conversion optimization, page speed optimization, core web vitals, mobile-first landing pages",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/high-performance-landing-pages",
});

export default function HighPerformanceLandingPagesPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "High Performance Landing Pages", url: "https://sydneywebdesigner.com.au/services/high-performance-landing-pages" }
  ];

  const serviceData = {
    name: "High Performance Landing Pages",
    description: "Lightning-fast landing pages optimized for conversions. 95+ PageSpeed scores, Core Web Vitals excellence, and mobile-first design that drives results.",
    provider: "Sydney Web Designer"
  };

  const benefits = [
    {
      icon: "fa-bolt",
      title: "Lightning-Fast Speed",
      description: "Sub-1.5 second load times for maximum conversions",
      points: [
        "Core Web Vitals excellence (LCP, FID, CLS)",
        "95+ PageSpeed scores guaranteed",
        "Optimized images and code",
        "CDN delivery for global speed"
      ]
    },
    {
      icon: "fa-bullseye",
      title: "Conversion Optimization",
      description: "Strategic design that turns visitors into customers",
      points: [
        "Compelling above-the-fold design",
        "Strategic CTA placement",
        "Persuasive copywriting",
        "Social proof integration"
      ]
    },
    {
      icon: "fa-search",
      title: "SEO-Friendly",
      description: "Built for search engine visibility",
      points: [
        "Clean semantic HTML",
        "Schema markup implementation",
        "Mobile-first indexing ready",
        "Technical SEO best practices"
      ]
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile-First Design",
      description: "Perfect experience on every device",
      points: [
        "Touch-friendly interfaces",
        "Responsive layouts",
        "Fast mobile loading",
        "Mobile conversion optimized"
      ]
    },
    {
      icon: "fa-flask",
      title: "A/B Testing Ready",
      description: "Continuously improve performance",
      points: [
        "Multiple variant testing",
        "Conversion tracking setup",
        "Analytics integration",
        "Data-driven optimization"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Analytics Integration",
      description: "Track every metric that matters",
      points: [
        "Google Analytics 4 setup",
        "Conversion goal tracking",
        "Heatmap integration",
        "ROI measurement"
      ]
    },
  ];

  const services = [
    {
      title: "Custom Landing Page Design",
      items: [
        "Brand-aligned visual design",
        "Strategic layout planning",
        "Compelling hero sections",
        "Persuasive copy integration",
        "Custom illustrations/graphics",
        "Trust elements & social proof"
      ]
    },
    {
      title: "Page Speed Optimization",
      items: [
        "Image optimization & WebP",
        "Code minification",
        "Critical CSS inlining",
        "Lazy loading implementation",
        "Browser caching setup",
        "CDN configuration"
      ]
    },
    {
      title: "Conversion Rate Optimization",
      items: [
        "CTA button optimization",
        "Form field reduction",
        "Clear value proposition",
        "Friction removal",
        "Trust signals placement",
        "Exit-intent strategies"
      ]
    },
    {
      title: "A/B Testing & Analytics",
      items: [
        "Testing framework setup",
        "Variant creation",
        "Conversion tracking",
        "Statistical analysis",
        "Winner implementation",
        "Continuous iteration"
      ]
    },
  ];

  const platforms = [
    { name: "Next.js", icon: "fa-react", description: "React framework for production" },
    { name: "React", icon: "fa-react", description: "Modern JavaScript library" },
    { name: "Unbounce", icon: "fa-rocket", description: "Landing page platform" },
    { name: "Leadpages", icon: "fa-file-alt", description: "Conversion-focused builder" },
    { name: "Custom HTML/CSS", icon: "fa-code", description: "Bespoke development" },
  ];

  const caseStudies = [
    {
      company: "Sydney SaaS Company",
      challenge: "Low conversion rate (2.1%) on product landing page causing high customer acquisition costs.",
      solution: "Complete redesign with speed optimization, improved copywriting, and strategic CTA placement.",
      results: [
        "Conversion rate increased to 8.7% (314% improvement)",
        "PageSpeed score improved from 42 to 97",
        "Mobile load time reduced from 4.2s to 1.1s",
        "Customer acquisition cost decreased by 65%",
        "Monthly revenue increased by $85,000"
      ]
    },
    {
      company: "Sydney E-commerce Retailer",
      challenge: "Product landing pages loading slowly, high bounce rate (78%), poor mobile experience.",
      solution: "Mobile-first redesign, Core Web Vitals optimization, and conversion funnel improvements.",
      results: [
        "PageSpeed score: 97 (desktop) / 94 (mobile)",
        "Bounce rate reduced to 34%",
        "Mobile conversions up 156%",
        "Average order value increased 22%",
        "Monthly revenue from landing pages: $180,000"
      ]
    },
  ];

  const faq = [
    {
      q: "What makes a landing page 'high performance'?",
      a: "A high-performance landing page combines three critical elements: blazing-fast load times (under 1.5 seconds), excellent Core Web Vitals scores (LCP, FID, CLS), and conversion-optimized design. It should achieve 95+ PageSpeed scores, load quickly on mobile devices, and guide visitors seamlessly toward your conversion goal."
    },
    {
      q: "How does page speed affect conversion rates?",
      a: "Page speed directly impacts conversions. Studies show that a 1-second delay in page load time can reduce conversions by 7%. Pages loading in under 2 seconds have conversion rates 3-5x higher than slower pages. Fast loading creates a better user experience, reduces bounce rates, and signals professionalism to visitors."
    },
    {
      q: "What are Core Web Vitals and why do they matter?",
      a: "Core Web Vitals are Google's metrics for measuring user experience: Largest Contentful Paint (LCP - loading), First Input Delay (FID - interactivity), and Cumulative Layout Shift (CLS - visual stability). They matter because Google uses them as ranking factors, and good scores correlate strongly with better conversion rates and user satisfaction."
    },
    {
      q: "Can you optimize our existing landing pages?",
      a: "Absolutely! We can audit your existing landing pages and implement comprehensive optimizations including: page speed improvements, Core Web Vitals optimization, mobile responsiveness, conversion rate optimization, A/B testing setup, and analytics tracking. Most clients see significant improvements within 2-4 weeks."
    },
    {
      q: "How do you achieve 95+ PageSpeed scores?",
      a: "We use a comprehensive approach: optimized modern image formats (WebP, AVIF), code minification and compression, critical CSS inlining, lazy loading for below-fold content, efficient JavaScript execution, browser caching, CDN delivery, and removing render-blocking resources. Every element is optimized for maximum performance."
    },
    {
      q: "What's included in A/B testing setup?",
      a: "Our A/B testing setup includes: testing framework installation (Google Optimize or similar), variant page creation, conversion goal configuration, statistical significance tracking, heatmap integration, user session recording, and monthly reporting. We help you continuously improve performance through data-driven decisions."
    },
    {
      q: "How long does it take to build a high-performance landing page?",
      a: "Timeline depends on complexity, but typically: Simple landing page (2-3 days), Custom design with integrations (1-2 weeks), Multiple variants for testing (2-3 weeks). We can expedite for urgent campaigns. All pages include speed optimization, mobile responsiveness, and analytics setup."
    },
    {
      q: "What's the ROI of investing in high-performance landing pages?",
      a: "Our clients typically see 200-400% ROI within 3-6 months. A landing page with 5% conversion rate vs 2% means 2.5x more customers from the same traffic. Combined with lower bounce rates and better ad quality scores (reducing PPC costs), the investment pays for itself quickly through increased conversions and reduced acquisition costs."
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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-orange rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fas fa-rocket text-[#f59e0b]"></i>
              <span className="text-[#f59e0b] text-sm font-semibold">Performance Optimized</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              High Performance Landing Pages
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100">
              Lightning-fast landing pages that convert. 95+ PageSpeed scores, Core Web Vitals excellence, and conversion-optimized design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">95+</div>
                <div className="text-sm text-slate-300">PageSpeed Score</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">&lt;1.5s</div>
                <div className="text-sm text-slate-300">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">285%</div>
                <div className="text-sm text-slate-300">Avg Conversion Lift</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">200+</div>
                <div className="text-sm text-slate-300">Pages Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why High Performance Landing Pages Matter</h2>
            <p>Speed and conversions go hand in hand</p>
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
            <h2>Our Landing Page Services</h2>
            <p>Comprehensive solutions for high-converting pages</p>
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
            <h2>Technologies We Use</h2>
            <p>Modern platforms and frameworks for maximum performance</p>
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-white">Real Performance Results</h2>
            <p className="text-slate-200">See how we transformed landing page performance</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card bg-white/10 backdrop-blur-sm border-2 border-[#f59e0b]">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-3xl font-bold mb-2">{study.company}</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Challenge:</h4>
                        <p className="text-slate-200">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Solution:</h4>
                        <p className="text-slate-200">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-gradient-to-br from-[#f59e0b]/20 to-[#fb923c]/20 rounded-2xl p-8">
                    <h4 className="font-bold mb-6 text-xl">Results:</h4>
                    <ul className="space-y-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <i className="fas fa-trophy text-[#f59e0b] text-xl flex-shrink-0 mt-1"></i>
                          <span className="text-slate-100">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Landing Page FAQs</h2>
            <p>Common questions about high-performance landing pages</p>
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
        title="Ready to Build a High-Converting Landing Page?"
        description="Get a free consultation and discover how a high-performance landing page can transform your conversion rates and grow your business."
        primaryButtonText="Get Free Consultation"
        primaryButtonAction="contact"
        secondaryButtonText="View Our Work"
      />
    </>
  );
}
