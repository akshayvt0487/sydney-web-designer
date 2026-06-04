import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import ServiceTrustStrip from "@/components/service-page/ServiceTrustStrip";
import ServiceStatsSection from "@/components/service-page/ServiceStatsSection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";
import ServiceResultsSection from "@/components/service-page/ServiceResultsSection";
import ServiceTestimonialsSection from "@/components/service-page/ServiceTestimonialsSection";
import ServiceFAQSection from "@/components/service-page/ServiceFAQSection";
import ServiceLeadPanel from "@/components/service-page/ServiceLeadPanel";
import ServiceInlineLeadForm from "@/components/service-page/ServiceInlineLeadForm";

export const metadata = generateMetadata({
  title: "Google Ads Management Sydney | PPC Advertising Services",
  description: "Expert Google Ads management in Sydney. Deliver qualified leads and maximum ROI with professional PPC campaigns. $2M+ ad spend managed, average 300% ROI, 100+ successful campaigns.",
  keywords: "google ads management sydney, ppc advertising sydney, google adwords sydney, paid search sydney, google ads expert, ppc management sydney, sem services",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/google-ads",
  ogImage: "/images/og/services.svg",
});

export default function GoogleAdsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "Google Ads", url: "https://www.sydneywebdesigner.com.au/services/google-ads" }
  ];

  const serviceData = {
    name: "Google Ads Management",
    description: "Expert Google Ads management services that deliver qualified leads and maximum ROI. Professional PPC campaign setup, optimization, and ongoing management for Sydney businesses.",
    provider: "Sydney Web Designer"
  };
  const stats = [
    { number: "$2M+", label: "Ad Spend Managed" },
    { number: "300%", label: "Average ROI" },
    { number: "5%", label: "Average CTR" },
    { number: "100+", label: "Campaigns" },
  ];

  const features = [
    {
      icon: "fas fa-bullseye",
      title: "Campaign Strategy",
      description: "Data-driven strategy",
      items: ["Campaign structure", "Budget allocation", "Goal tracking", "KPI setting"]
    },
    {
      icon: "fas fa-search",
      title: "Keyword Research",
      description: "Profitable keywords",
      items: ["High-intent keywords", "Negative keywords", "Competitor research", "Volume data"]
    },
    {
      icon: "fas fa-pen",
      title: "Ad Copywriting",
      description: "Compelling ads",
      items: ["Ad variations", "A/B testing", "CTA optimization", "Ad extensions"]
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Bid Management",
      description: "Smart bidding",
      items: ["Bid optimization", "Budget management", "CPC optimization", "Quality score"]
    },
    {
      icon: "fas fa-file-alt",
      title: "Landing Pages",
      description: "Convert clicks",
      items: ["Landing page design", "A/B testing", "Conversion tracking", "Form optimization"]
    },
    {
      icon: "fas fa-chart-bar",
      title: "Reporting",
      description: "Transparent reports",
      items: ["Conversion tracking", "ROI analysis", "Performance metrics", "Recommendations"]
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
      name: "OSAN Ability",
      industry: "NDIS Provider",
      result: "Google Ads generating daily qualified leads with 250% ROI and 3.2% conversion"
    },
    {
      name: "GPS Vehicle Inspections",
      industry: "Automotive",
      result: "PPC campaigns achieving 5.8% CTR and 340% increase in inspection bookings"
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

  const faqs = [
    {
      question: "How much should I budget for Google Ads?",
      answer: "We recommend a minimum ad spend of $1,000-$2,000 per month for most industries to gather meaningful data and generate consistent leads. Your ideal budget depends on your industry, competition, target keywords, and business goals. We will provide recommendations during our consultation based on your specific situation."
    },
    {
      question: "How long does it take to see results from Google Ads?",
      answer: "You can start seeing clicks and traffic immediately once campaigns launch. However, meaningful results and optimizations typically take 2-4 weeks as we gather data and refine targeting. Most businesses see consistent lead flow within 4-8 weeks of optimization."
    },
    {
      question: "What is the difference between Google Ads and SEO?",
      answer: "Google Ads delivers immediate visibility at the top of search results through paid advertising, while SEO builds organic rankings over time. Google Ads gives you instant traffic but stops when you stop paying, while SEO provides long-term sustainable traffic. We recommend combining both strategies for maximum visibility and best results."
    },
    {
      question: "Do you manage the ads or do I need to do it myself?",
      answer: "We handle everything! Our Google Ads management includes campaign setup, keyword research, ad copywriting, bid management, ongoing optimization, conversion tracking, and detailed monthly reporting. You simply review reports and approve any major strategy changes."
    },
    {
      question: "What makes your Google Ads management different?",
      answer: "We focus on actual business results, not just clicks. We optimize for conversions and ROI with strategic keyword targeting, compelling ad copy, conversion-focused landing pages, and continuous testing. Plus, we provide transparent reporting so you always know exactly how your campaigns are performing."
    },
    {
      question: "Can you help with landing page design for my ads?",
      answer: "Yes! High-converting landing pages are crucial for Google Ads success. We design custom landing pages specifically for your campaigns with compelling copy, clear calls-to-action, fast loading speeds, and mobile optimization. This ensures your ad clicks convert into actual leads and customers."
    }
  ];

  const relatedServices = [
    {
      title: "Local SEO",
      description: "Combine paid ads with local SEO to dominate both paid and organic local search results.",
      href: "/services/local-seo",
      icon: "fas fa-map-marker-alt"
    },
    {
      title: "SEO Services",
      description: "Build long-term organic visibility to complement your paid advertising strategy.",
      href: "/services/seo-sydney",
      icon: "fas fa-search"
    },
    {
      title: "Custom Web Design",
      description: "Professional landing pages and websites designed to convert your ad traffic.",
      href: "/services/custom-web-design",
      icon: "fas fa-desktop"
    }
  ];

  const trustBadges = [
    { icon: "fa-trophy", text: "13+ Years Experience" },
    { icon: "fa-star", text: "50+ 5-Star Reviews" },
    { icon: "fa-check-circle", text: "Professional Service" },
    { icon: "fa-chart-line", text: "Proven Results" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(serviceData.name, serviceData.description)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Google Ads Sydney"
        badge={{
          icon: "fab fa-google",
          text: "Google Ads Specialists",
        }}
        heading="Google Ads Management Sydney"
        description="Maximize ROI with expert Google Ads management. Campaign setup, optimization, and ongoing management for your business."
        buttons={{
          primary: {
            text: "Start Google Ads",
            dataPopup: "contact",
          },
          secondary: {
            text: "Our Process",
            href: "#process",
          },
        }}
      />

      <ServiceTrustStrip badges={trustBadges} />

      <ServiceStatsSection
        title={<>Why Choose Google Ads Management <span>Sydney</span>?</>}
        stats={stats.map((stat) => ({ value: stat.number, text: stat.label }))}
      />

      <ServiceFeaturesSection
        title={<>Our Google Ads Management Sydney <span>Services</span></>}
        description="Comprehensive solutions designed to help your business succeed"
        features={features.map((feature) => ({
          icon: feature.icon,
          title: feature.title,
          description: feature.description,
          points: feature.items,
        }))}
      />

      <ServiceProcessSection
        title={<>Our Proven <span>Process</span></>}
        description="A systematic approach to deliver outstanding results"
        steps={process.map((step) => ({
          number: String(step.number),
          title: step.title,
          description: step.description,
        }))}
      />

      <ServiceResultsSection
        title={<>Real Results for Sydney <span>Businesses</span></>}
        projects={caseStudies.map((study) => ({
          name: study.name,
          industry: study.industry,
          description: study.result,
        }))}
      />

      {/* Results & Proof Section */}
      <section className="ads-proof paper-grain">
        <div className="container">
          <div className="service-paper-heading service-paper-heading--dark service-paper-heading--center ads-proof__heading">
            <span className="ads-proof__eyebrow">Results &amp; Proof</span>

            <h2>
              Real Google Ads Results - Proof of{" "}
              <span>Performance</span>
            </h2>

            <p>
              See the actual campaign data and results we&apos;ve achieved for
              our Google Ads clients
            </p>
          </div>

          {/* Campaign Performance Dashboard */}
          <div className="ads-proof__group">
            <div className="ads-proof__group-title">
              <span>01</span>
              <i className="fas fa-chart-line" aria-hidden="true" />
              <h3>Google Ads Dashboard Performance</h3>
            </div>

            <div className="ads-proof__grid ads-proof__grid--two">
              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>01</span>
                  <h4>Campaign Performance Overview</h4>
                </div>

                <div className="ads-proof__media">
                  <i className="fas fa-dollar-sign" aria-hidden="true" />
                  <p>Google Ads Dashboard Screenshot</p>
                  <small>
                    [Upload dashboard showing impressions, clicks, CTR,
                    conversions]
                  </small>
                </div>

                <div className="ads-proof__metrics ads-proof__metrics--two">
                  <div>
                    <strong>5.8%</strong>
                    <span>Click-Through Rate</span>
                  </div>

                  <div>
                    <strong>$2.45</strong>
                    <span>Cost Per Click</span>
                  </div>
                </div>
              </article>

              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>02</span>
                  <h4>Conversions &amp; ROI</h4>
                </div>

                <div className="ads-proof__media">
                  <i className="fas fa-bullseye" aria-hidden="true" />
                  <p>Conversion Tracking Screenshot</p>
                  <small>
                    [Upload screenshot showing conversion data &amp; ROI]
                  </small>
                </div>

                <div className="ads-proof__metrics ads-proof__metrics--two">
                  <div>
                    <strong>250%</strong>
                    <span>Return on Ad Spend</span>
                  </div>

                  <div>
                    <strong>3.2%</strong>
                    <span>Conversion Rate</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Lead Generation Proof */}
          <div className="ads-proof__group">
            <div className="ads-proof__group-title">
              <span>02</span>
              <i className="fas fa-phone" aria-hidden="true" />
              <h3>Lead Generation - Calls &amp; Bookings</h3>
            </div>

            <div className="ads-proof__grid ads-proof__grid--three">
              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>01</span>
                  <h4>Phone Call Tracking</h4>
                </div>

                <div className="ads-proof__media ads-proof__media--compact">
                  <i className="fas fa-phone" aria-hidden="true" />
                  <p>Call Tracking Dashboard</p>
                  <small>
                    [Upload screenshot showing call volume from ads]
                  </small>
                </div>

                <div className="ads-proof__highlight">
                  <strong>340% Increase in Calls</strong>
                  <p>From 50 to 220 qualified calls per month</p>
                </div>
              </article>

              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>02</span>
                  <h4>Form Submissions &amp; Bookings</h4>
                </div>

                <div className="ads-proof__media ads-proof__media--compact">
                  <i className="fas fa-file-alt" aria-hidden="true" />
                  <p>Form Conversions Screenshot</p>
                  <small>
                    [Upload screenshot showing booking/form data]
                  </small>
                </div>

                <div className="ads-proof__highlight">
                  <strong>Daily Qualified Leads</strong>
                  <p>15-20 high-quality leads generated daily</p>
                </div>
              </article>

              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>03</span>
                  <h4>Lead Value &amp; Quality</h4>
                </div>

                <div className="ads-proof__media ads-proof__media--compact">
                  <i className="fas fa-gem" aria-hidden="true" />
                  <p>Lead Quality Metrics</p>
                  <small>
                    [Upload CRM screenshot showing lead quality/conversion]
                  </small>
                </div>

                <div className="ads-proof__highlight">
                  <strong>$125 Cost Per Lead</strong>
                  <p>Average customer value: $2,500 (20:1 ROI)</p>
                </div>
              </article>
            </div>
          </div>

          {/* Ad Performance Examples */}
          <div className="ads-proof__group">
            <div className="ads-proof__group-title">
              <span>03</span>
              <i className="fas fa-bullseye" aria-hidden="true" />
              <h3>Top Performing Ads</h3>
            </div>

            <div className="ads-proof__grid ads-proof__grid--two">
              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>01</span>
                  <h4>Search Ads Performance</h4>
                </div>

                <div className="ads-proof__media ads-proof__media--compact">
                  <i className="fas fa-search" aria-hidden="true" />
                  <p>Search Ads Screenshot</p>
                  <small>
                    [Upload screenshot showing top search ads with CTR]
                  </small>
                </div>

                <div className="ads-proof__metrics ads-proof__metrics--three">
                  <div>
                    <strong>7.2%</strong>
                    <span>CTR</span>
                  </div>

                  <div>
                    <strong>8.5</strong>
                    <span>Quality Score</span>
                  </div>

                  <div>
                    <strong>4.1%</strong>
                    <span>Conv Rate</span>
                  </div>
                </div>
              </article>

              <article className="ads-proof__card">
                <div className="ads-proof__card-top">
                  <span>02</span>
                  <h4>Before vs After Campaign Optimization</h4>
                </div>

                <div className="ads-proof__media ads-proof__media--compact">
                  <i className="fas fa-chart-bar" aria-hidden="true" />
                  <p>Before/After Comparison</p>
                  <small>
                    [Upload comparison showing improvement metrics]
                  </small>
                </div>

                <div className="ads-proof__metrics ads-proof__metrics--three">
                  <div>
                    <strong>-45%</strong>
                    <span>CPC Reduction</span>
                  </div>

                  <div>
                    <strong>+180%</strong>
                    <span>Conversions</span>
                  </div>

                  <div>
                    <strong>+250%</strong>
                    <span>ROI</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Call to Action */}
          <div className="ads-proof__cta">
            <div className="ads-proof__cta-content">
              <span className="ads-proof__cta-number">04</span>

              <h3>
                Ready for Results Like <span>These?</span>
              </h3>

              <p>Get your free Google Ads audit and strategy session</p>

              <Link
                href="#lead-form"
                className="paper-button paper-button--rust"
              >
                Get Free Ads Audit
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceTestimonialsSection
        title={<>What Our Clients <span>Say</span></>}
        testimonials={testimonials.map((testimonial) => ({
          text: testimonial.text,
          name: testimonial.author,
          detail: testimonial.role,
        }))}
      />

      <ServiceFAQSection
        title={<>Frequently Asked <span>Questions</span></>}
        description="Everything you need to know about Google Ads management"
        faqs={faqs}
      />

      <RelatedServices services={relatedServices} />

      <ServiceLeadPanel
        id="lead-form"
        title="Get Your Free Consultation"
        description="Tell us about your project and we'll provide expert advice and a custom quote"
      >
        <ServiceInlineLeadForm
          service="google-ads"
          buttonText="Start Google Ads"
        />
      </ServiceLeadPanel>
    </>
  );
}
