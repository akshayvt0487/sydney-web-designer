import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import ServiceTrustStrip from "@/components/service-page/ServiceTrustStrip";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceFAQSection from "@/components/service-page/ServiceFAQSection";

export const metadata = generateMetadata({
  title: "High Performance Landing Pages Sydney | Fast & Conversion-Optimized",
  description: "High performance landing pages in Sydney. 95+ PageSpeed scores, Core Web Vitals optimized, mobile-first design. Increase conversions with blazing-fast, SEO-friendly landing pages built for results.",
  keywords: "high performance landing pages sydney, fast landing pages, conversion optimization, page speed optimization, core web vitals, mobile-first landing pages",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/high-performance-landing-pages",
});

export default function HighPerformanceLandingPagesPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "High Performance Landing Pages", url: "https://www.sydneywebdesigner.com.au/services/high-performance-landing-pages" }
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
    { name: "Next.js", icon: "fab fa-js", description: "React framework for production" },
    { name: "React", icon: "fab fa-react", description: "Modern JavaScript library" },
    { name: "Unbounce", icon: "fas fa-rocket", description: "Landing page platform" },
    { name: "Leadpages", icon: "fas fa-file-alt", description: "Conversion-focused builder" },
    { name: "Custom HTML/CSS", icon: "fas fa-code", description: "Bespoke development" },
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

  const trustBadges = [
    { icon: "fa-bolt", text: "95+ PageSpeed Score" },
    { icon: "fa-tachometer-alt", text: "<1.5s Load Time" },
    { icon: "fa-chart-line", text: "285% Avg Conversion Lift" },
    { icon: "fa-rocket", text: "200+ Pages Built" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceData.name, serviceData.description)) }} />

      <div className="high-performance-landing-editorial">
        <Breadcrumbs items={breadcrumbs} />

        <ServiceHeroSection
          h1="Landing Page Design"
          badge={{ icon: "fas fa-rocket", text: "High Performance Landing Pages" }}
          heading="High Performance Landing Pages Sydney"
          description="Lightning-fast landing pages that convert."
          buttons={{
            primary: {
              text: "Get Free Quote",
              dataPopup: "contact",
              serviceGroup: "web-design",
              serviceSlug: "high-performance-landing-pages",
              serviceName: "High Performance Landing Pages",
            },
            secondary: {
              text: "Our Services",
              href: "#services",
            },
          }}
        />

        <ServiceTrustStrip badges={trustBadges} />

        <ServiceFeaturesSection
          title={<>Why High Performance Landing Pages <span>Matter</span></>}
          description="Speed and conversions go hand in hand"
          features={benefits.map((benefit) => ({ ...benefit, icon: `fas ${benefit.icon}` }))}
        />

        <section className="service-paper-section service-specialty paper-grain" id="services">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>Our Landing Page <span>Services</span></h2>
              <p>Comprehensive solutions for high-converting pages</p>
            </div>
            <div className="service-specialty__grid service-specialty__grid--two">
              {services.map((item, index) => (
                <article key={item.title} className="service-specialty__card">
                  <div className="service-specialty__top"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3></div>
                  <ul>{item.items.map((point) => <li key={point}><i className="fas fa-check" aria-hidden="true" />{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-paper-section service-technology paper-grain">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>Technologies We <span>Use</span></h2>
              <p>Modern platforms and frameworks for maximum performance</p>
            </div>
            <div className="service-technology__grid">
              {platforms.map((platform, index) => (
                <article key={platform.name} className="service-technology__card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i className={platform.icon} aria-hidden="true" />
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-case-studies paper-grain">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--dark service-paper-heading--center">
              <h2>Real Performance <span>Results</span></h2>
              <p>See how we transformed landing page performance</p>
            </div>
            <div className="service-case-studies__grid">
              {caseStudies.map((study, index) => (
                <article key={study.company} className="service-case-study">
                  <div className="service-case-study__copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{study.company}</h3>
                    <h4>Challenge:</h4><p>{study.challenge}</p>
                    <h4>Solution:</h4><p>{study.solution}</p>
                  </div>
                  <div className="service-case-study__results">
                    <h4>Results:</h4>
                    <ul>{study.results.map((result) => <li key={result}><i className="fas fa-trophy" aria-hidden="true" />{result}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQSection
          title={<>Landing Page <span>FAQs</span></>}
          description="Common questions about high-performance landing pages"
          faqs={faq.map((item) => ({ question: item.q, answer: item.a }))}
        />

        <CTASection
          title="Ready to Build a High-Converting Landing Page?"
          description="Get a free consultation and discover how a high-performance landing page can transform your conversion rates and grow your business."
          primaryButtonText="Get Free Consultation"
          primaryButtonAction="service"
          primaryButtonService="high-performance-landing-pages"
          primaryButtonGroup="web-design"
          secondaryButtonText="View Our Work"
          secondaryButtonHref="/portfolio"
        />
      </div>
    </>
  );
}
