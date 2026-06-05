import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = generateMetadata({
  title: "Growth Marketing | Data-Driven Digital Marketing Services Sydney",
  description:
    "Accelerate your business growth with strategic digital marketing. SEO, Google Ads, content marketing, and complete growth strategies. Results-driven monthly packages for Sydney businesses.",
  keywords:
    "growth marketing sydney, digital marketing strategy, performance marketing, marketing optimization, growth hacking sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/growth-marketing",
});

type PopupAction = "service";

interface PlanFeature {
  text: string;
  emphasis?: boolean;
}

interface Plan {
  title: string;
  description: string;
  features: PlanFeature[];
  action: PopupAction;
  serviceSlug: string;
  serviceGroup: "web-design" | "digital-marketing" | "branding-design";
  badge?: string;
  variant?: "featured" | "dark";
}

const plans: Plan[] = [
  {
    title: "Website Care",
    description: "Keep your website secure and updated",
    action: "service",
    serviceSlug: "website-care",
    serviceGroup: "web-design",
    features: [
      { text: "Security updates & monitoring" },
      { text: "Weekly backups" },
      { text: "Performance optimization" },
      { text: "2 hours content updates/month" },
      { text: "Uptime monitoring" },
      { text: "Email support" },
    ],
  },
  {
    title: "Website Care & CRM",
    description: "Website care + customer management",
    action: "service",
    serviceSlug: "crm-automation",
    serviceGroup: "digital-marketing",
    variant: "featured",
    features: [
      { text: "Everything in Website Care" },
      { text: "CRM setup & management" },
      { text: "Lead tracking & automation" },
      { text: "Request/Manage Reviews via SMS/Email", emphasis: true },
      { text: "4 hours content updates/month" },
      { text: "Priority support" },
    ],
  },
  {
    title: "Paid Ads Management",
    description: "Google OR Facebook Ads management",
    action: "service",
    serviceSlug: "google-ads",
    serviceGroup: "digital-marketing",
    badge: "Popular",
    variant: "featured",
    features: [
      { text: "Google OR Facebook Ads (one platform)" },
      { text: "Campaign strategy & setup" },
      { text: "Ad copywriting & design" },
      { text: "A/B testing & optimization" },
      { text: "Conversion tracking" },
      { text: "Monthly performance reports" },
      { text: "Dedicated account manager" },
      { text: "Weekly optimization" },
    ],
  },
  {
    title: "SEO Package",
    description: "Complete SEO & content marketing",
    action: "service",
    serviceSlug: "seo-sydney",
    serviceGroup: "digital-marketing",
    features: [
      { text: "Complete SEO audit & strategy" },
      { text: "On-page SEO optimization" },
      { text: "Technical SEO improvements" },
      { text: "4 SEO blog posts/month" },
      { text: "Link building & outreach" },
      { text: "Local SEO optimization" },
      { text: "Competitor analysis" },
      { text: "Monthly ranking reports" },
    ],
  },
  {
    title: "Complete Marketing",
    description: "Everything you need to dominate",
    action: "service",
    serviceSlug: "digital-marketing",
    serviceGroup: "digital-marketing",
    badge: "Ultimate Package",
    variant: "dark",
    features: [
      { text: "Everything from all plans above" },
      { text: "Dedicated marketing team" },
      { text: "Multi-channel campaigns" },
      { text: "Social media management" },
      { text: "Email marketing automation" },
      { text: "Video marketing & production" },
      { text: "Advanced analytics & reporting" },
      { text: "Priority 24/7 support" },
    ],
  },
];

const benefits = [
  {
    icon: "fa-chart-line",
    title: "Proven Track Record",
    description:
      "Since 2013, we&apos;ve helped 500+ Sydney businesses achieve an average 3x ROI on their marketing investment. Our strategies are proven to deliver consistent growth.",
  },
  {
    icon: "fa-users",
    title: "Dedicated Team",
    description:
      "Work with experienced specialists, not juniors. Your dedicated account manager coordinates SEO experts, paid ads specialists, and content creators for seamless execution.",
  },
  {
    icon: "fa-bullseye",
    title: "Transparent Reporting",
    description:
      "No smoke and mirrors. Get detailed monthly reports showing exactly what we did, what results we achieved, and where every dollar went. Full transparency guaranteed.",
  },
  {
    icon: "fa-sync",
    title: "Continuous Optimization",
    description:
      "We don&apos;t &quot;set and forget.&quot; Our team actively monitors and optimizes your campaigns weekly, testing new strategies and doubling down on what works.",
  },
  {
    icon: "fa-map-marked-alt",
    title: "Local Sydney Expertise",
    description:
      "Deep understanding of Sydney markets, local search behavior, and regional competition. We know what works for Sydney businesses because we&apos;ve done it hundreds of times.",
  },
  {
    icon: "fa-rocket",
    title: "Fast Implementation",
    description:
      "Get started within 48 hours. Our streamlined onboarding process means your campaigns launch quickly with minimal disruption to your day-to-day operations.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Discovery & Audit",
    description:
      "We start by understanding your business goals, target audience, and competitive landscape. Comprehensive audit of your current marketing activities, website performance, and existing assets to identify opportunities and gaps.",
  },
  {
    number: "2",
    title: "Strategy Development",
    description:
      "Custom marketing roadmap tailored to your budget and objectives. We define KPIs, channel strategy, content themes, and campaign structures designed to achieve your specific growth goals.",
  },
  {
    number: "3",
    title: "Implementation & Launch",
    description:
      "Rapid execution of your marketing strategy. We set up tracking, create campaigns, write ad copy, design creatives, optimize landing pages, and launch everything with precision and attention to detail.",
  },
  {
    number: "4",
    title: "Monitor & Optimize",
    description:
      "Weekly performance reviews and continuous optimization. We test ad variations, adjust targeting, refine keywords, improve conversion rates, and reallocate budget to maximize ROI across all channels.",
  },
  {
    number: "5",
    title: "Report & Scale",
    description:
      "Monthly strategy sessions with transparent reporting on results, learnings, and recommendations. As campaigns prove successful, we scale winning strategies and explore new growth opportunities.",
  },
];

const metrics = [
  {
    value: "3.2x",
    label: "Average ROI",
    description: "Across all marketing channels",
  },
  {
    value: "247%",
    label: "Traffic Increase",
    description: "Average within 6 months",
  },
  {
    value: "85%",
    label: "Lead Quality Rate",
    description: "Qualified leads ready to convert",
  },
  {
    value: "42%",
    label: "Cost Reduction",
    description: "Lower cost per acquisition",
  },
];

const resultsTestimonials = [
  {
    title: "Healthcare Services",
    quote:
      "From 15 leads per month to 120+ qualified enquiries. Their SEO and Google Ads strategy transformed our business. We&apos;re now fully booked 3 months ahead.",
    detail: "NDIS Provider, Sydney",
  },
  {
    title: "Construction Business",
    quote:
      "Went from page 3 to #1 on Google for our main keywords. The ROI has been incredible - we&apos;ve added $800K in new project revenue directly from their marketing.",
    detail: "Civil Contractor, Sydney",
  },
  {
    title: "Restaurant Business",
    quote:
      "Their complete marketing package filled our venue consistently. Social media engagement up 400%, online orders tripled, and we opened a second location.",
    detail: "Restaurant Owner, Sydney",
  },
];

const tools = [
  {
    icon: "fab fa-google",
    title: "Google Marketing Platform",
    description: "Ads, Analytics, Search Console, Tag Manager",
  },
  {
    icon: "fab fa-facebook",
    title: "Meta Business Suite",
    description: "Facebook & Instagram Ads, Social Management",
  },
  {
    icon: "fas fa-chart-bar",
    title: "SEO Tools",
    description: "Ahrefs, SEMrush, Moz Pro, Screaming Frog",
  },
  {
    icon: "fas fa-envelope",
    title: "Email & CRM",
    description: "Mailchimp, ActiveCampaign, HubSpot",
  },
  {
    icon: "fas fa-video",
    title: "Content Creation",
    description: "Adobe Creative Suite, Canva Pro, CapCut",
  },
  {
    icon: "fas fa-code",
    title: "Landing Pages",
    description: "Custom development, Unbounce, Leadpages",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Call Tracking",
    description: "CallRail, WhatConverts, Call Tracking Metrics",
  },
  {
    icon: "fas fa-project-diagram",
    title: "Project Management",
    description: "Asana, Slack, Google Workspace",
  },
];

const audienceGroups = [
  {
    title: "Early Stage Growth",
    description:
      "Perfect for small businesses and startups building momentum. Focus on foundational marketing channels with measurable ROI.",
    items: [
      "Website Care for basic maintenance",
      "Website Care & CRM to manage customers",
      "Paid Ads for quick lead generation",
      "SEO Package for long-term growth",
    ],
  },
  {
    title: "Scale & Dominate",
    description:
      "For established businesses with $1M+ annual revenue ready to aggressively scale. Multi-channel growth strategies with dedicated marketing teams.",
    items: [
      "Complete Marketing Package",
      "Dedicated team of specialists",
      "Multi-channel strategy",
      "Maximum market penetration",
    ],
    dark: true,
  },
];

const faqs = [
  {
    question: "Are there any lock-in contracts?",
    answer:
      "No! All our growth marketing services are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
  },
  {
    question: "Can I switch services anytime?",
    answer:
      "Absolutely! You can upgrade or downgrade your marketing services anytime. We'll help you find the right strategy for your current growth stage.",
  },
  {
    question:
      "What's the difference between Paid Ads and Complete Marketing?",
    answer:
      "Paid Ads focuses on one platform (Google OR Facebook). Complete Marketing includes both platforms plus SEO, social media, email marketing, and video production.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Paid Ads deliver immediate results (within days). SEO takes 3-6 months for significant results. Complete Marketing combines both for short and long-term growth.",
  },
  {
    question: "Do I need to pay for ad spend separately?",
    answer:
      "Yes, for Paid Ads plans, you pay the management fee plus your actual ad spend to Google/Facebook. We'll recommend the right budget for your goals.",
  },
];

function SectionHeading({
  title,
  description,
  dark = false,
}: {
  title: React.ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <header className={`gm-heading ${dark ? "gm-heading--dark" : ""}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export default function GrowthMarketingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Growth Marketing",
      url: "https://www.sydneywebdesigner.com.au/growth-marketing",
    },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="growth-marketing-editorial">
        {/* Hero Section */}
        <section className="gm-hero">
          <div className="container gm-hero__inner">
            <div className="gm-hero__badge">
              <span aria-hidden="true" />
              <p>Data-Driven Results</p>
            </div>

            <h1>
              Strategic <span>Growth Marketing</span> Services
            </h1>

            <p className="gm-hero__copy">
              Drive sustainable business growth with proven digital marketing
              strategies. From SEO and paid ads to complete marketing
              management - we optimize every channel for maximum ROI.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="gm-section gm-plans paper-grain">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Growth Marketing <span>Services</span>
                </>
              }
              description="Scalable marketing solutions designed to accelerate your business growth"
            />

            <div className="gm-plans__grid">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`gm-plan ${plan.variant ? `gm-plan--${plan.variant}` : ""
                    }`}
                >
                  {plan.badge && (
                    <span className="gm-plan__badge">{plan.badge}</span>
                  )}

                  <div className="gm-plan__intro">
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                  </div>

                  <div className="gm-plan__details">
                    <ul className="gm-plan__features">
                      {plan.features.map((feature) => (
                        <li key={feature.text}>
                          <i className="fas fa-check" aria-hidden="true" />

                          {feature.emphasis ? (
                            <strong>{feature.text}</strong>
                          ) : (
                            <span>{feature.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      data-popup={plan.action}
                      data-popup-service={plan.serviceSlug}
                      data-popup-group={plan.serviceGroup}
                      data-popup-plan={plan.title}
                      className="paper-button paper-button--rust gm-plan__button"
                    >
                      Get Started
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose DSIGNS Section */}
        <section className="gm-section gm-benefits">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Why Choose DSIGNS for Growth <span>Marketing</span>?
                </>
              }
              description="Data-driven strategies that deliver measurable results for Sydney businesses"
            />

            <div className="gm-benefits__grid">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="gm-benefit">
                  <div className="gm-benefit__icon">
                    <i className={`fas ${benefit.icon}`} aria-hidden="true" />
                  </div>

                  <h3>{benefit.title}</h3>

                  <p dangerouslySetInnerHTML={{ __html: benefit.description }} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="gm-section gm-process paper-grain">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Our Growth Marketing <span>Process</span>
                </>
              }
              description="A proven methodology that turns clicks into customers"
            />

            <div className="gm-process__grid">
              {processSteps.map((step) => (
                <article key={step.number} className="gm-process__step">
                  <span className="gm-process__number">{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Metrics Section */}
        <section className="gm-section gm-results">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Real Results from Sydney <span>Businesses</span>
                </>
              }
              description="Measurable outcomes our clients achieve with DSIGNS growth marketing"
            />

            <div className="gm-metrics">
              {metrics.map((metric) => (
                <article key={metric.label} className="gm-metric">
                  <strong>{metric.value}</strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.description}</p>
                </article>
              ))}
            </div>

            <div className="gm-testimonials">
              {resultsTestimonials.map((testimonial) => (
                <article key={testimonial.title} className="gm-testimonial">
                  <div className="gm-testimonial__title">
                    <i className="fas fa-quote-left" aria-hidden="true" />
                    <strong>{testimonial.title}</strong>
                  </div>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: `&quot;${testimonial.quote}&quot;`,
                    }}
                  />

                  <span>{testimonial.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technology Section */}
        <section className="gm-section gm-tools paper-grain">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Enterprise Tools & <span>Technology</span>
                </>
              }
              description="We leverage industry-leading platforms to maximize your marketing performance"
            />

            <div className="gm-tools__grid">
              {tools.map((tool) => (
                <article key={tool.title} className="gm-tool">
                  <i className={tool.icon} aria-hidden="true" />
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </article>
              ))}
            </div>

            <p className="gm-tools__statement">
              Access to $10,000+ worth of premium marketing tools included in
              all packages. No additional software costs - we provide
              everything needed for comprehensive growth marketing.
            </p>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="gm-section gm-audience">
          <div className="container">
            <SectionHeading
              title={
                <>
                  Which Growth Strategy is Right for <span>You</span>?
                </>
              }
              description="Choose based on your business stage and growth objectives"
            />

            <div className="gm-audience__grid">
              {audienceGroups.map((group) => (
                <article
                  key={group.title}
                  className={`gm-audience__card ${group.dark ? "gm-audience__card--dark" : ""
                    }`}
                >
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>

                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-paper-faq paper-grain gm-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>

              <p>Common questions about our growth marketing services</p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <div className="gm-cta-wrap">
          <CTASection
            title="Ready to Accelerate Your Growth?"
            description="Let&apos;s create a data-driven marketing strategy tailored to your business goals. Get a free growth consultation and custom roadmap."
            primaryButtonText="Get Growth Strategy"
            primaryButtonAction="service"
            primaryButtonService="digital-marketing"
            primaryButtonGroup="digital-marketing"
            secondaryButtonText="View Our Portfolio"
            secondaryButtonHref="/portfolio"
          />
        </div>
      </div>
    </>
  );
}