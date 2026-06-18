import { generateMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from "@/lib/schemas";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = generateMetadata({
  title: "Meta Ads Management Sydney | Facebook & Instagram Advertising",
  description:
    "Expert Meta (Facebook & Instagram) advertising management in Sydney. Reach 2.8 billion users with precision-targeted campaigns. Drive sales, leads, and brand awareness with proven strategies.",
  keywords:
    "meta ads sydney, facebook ads sydney, instagram ads sydney, social media advertising sydney, facebook advertising agency, meta business partner sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/meta-ads",
  ogImage: "/images/og/services.svg",
});

export default function MetaAdsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    {
      name: "Meta Ads",
      url: "https://www.sydneywebdesigner.com.au/services/meta-ads",
    },
  ];

  const serviceData = {
    name: "Meta Ads Management (Facebook & Instagram)",
    description:
      "Professional Meta advertising management for Facebook and Instagram. Precision-targeted campaigns that drive sales, generate leads, and build brand awareness for Sydney businesses.",
    provider: "Sydney Web Designer",
  };

  const stats = [
    { number: "2.8B+", label: "Monthly Active Users", icon: "fa-users" },
    { number: "4.2x", label: "Average ROAS", icon: "fa-dollar-sign" },
    { number: "85%", label: "Lead Quality Rate", icon: "fa-gem" },
    { number: "500+", label: "Campaigns Launched", icon: "fa-rocket" },
  ];

  const benefits = [
    {
      icon: "fas fa-bullseye",
      title: "Laser-Focused Targeting",
      description: "Reach your ideal customers with precision",
      points: [
        "Target by demographics, interests, behaviors",
        "Custom audience creation from your customer data",
        "Lookalike audiences to find similar customers",
        "Location targeting down to suburb level",
      ],
    },
    {
      icon: "fas fa-chart-line",
      title: "Scalable Campaigns",
      description: "Start small and scale what works",
      points: [
        "Test multiple audiences and creatives",
        "Data-driven budget allocation",
        "Scale winning campaigns quickly",
        "Automated optimization for best results",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Visual Storytelling",
      description: "Engage users with compelling creatives",
      points: [
        "Eye-catching image and video ads",
        "Stories, Reels, and feed placements",
        "Professional ad creative design",
        "A/B testing to find top performers",
      ],
    },
    {
      icon: "fas fa-sync",
      title: "Retargeting Power",
      description: "Convert website visitors into customers",
      points: [
        "Facebook Pixel implementation",
        "Dynamic product retargeting",
        "Cart abandonment campaigns",
        "Multi-touch attribution tracking",
      ],
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Integration",
      description: "Sell directly on Facebook & Instagram",
      points: [
        "Facebook Shop & Instagram Shopping setup",
        "Dynamic product catalog ads",
        "Automated product updates",
        "Seamless checkout experience",
      ],
    },
    {
      icon: "fas fa-users-cog",
      title: "Full-Funnel Strategy",
      description: "Guide customers through their journey",
      points: [
        "Awareness campaigns for new audiences",
        "Consideration ads for engagement",
        "Conversion campaigns for sales/leads",
        "Retention campaigns for existing customers",
      ],
    },
  ];

  const campaignTypes = [
    {
      title: "Lead Generation Campaigns",
      description:
        "Capture high-quality leads directly on Facebook and Instagram with instant forms.",
      results:
        "Average 42% reduction in cost per lead vs traditional landing pages",
      icon: "fa-user-plus",
    },
    {
      title: "Conversion Campaigns",
      description:
        "Drive sales, bookings, and sign-ups with optimized campaigns focused on your specific conversion goals.",
      results: "4.2x average return on ad spend across managed accounts",
      icon: "fa-shopping-bag",
    },
    {
      title: "Brand Awareness Campaigns",
      description:
        "Reach thousands of your target audience and build brand recognition in your local market.",
      results: "Average reach of 50,000+ relevant users per month",
      icon: "fa-star",
    },
    {
      title: "Engagement Campaigns",
      description:
        "Boost post engagement, page likes, and event responses to build an active community.",
      results: "3-5x increase in organic reach through paid engagement",
      icon: "fa-heart",
    },
    {
      title: "Video View Campaigns",
      description:
        "Get your brand story in front of potential customers with compelling video content.",
      results: "Average view rate of 45% with optimized targeting",
      icon: "fa-video",
    },
    {
      title: "Dynamic Retargeting",
      description:
        "Show personalized product ads to people who viewed items on your website.",
      results: "8-12x higher conversion rate than cold traffic",
      icon: "fa-sync-alt",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Strategy & Audience Research",
      description:
        "We analyze your business, competitors, and target audience to create a winning strategy. Define customer personas, research audience interests, and identify optimal ad placements.",
      duration: "Week 1",
    },
    {
      step: "2",
      title: "Creative Development",
      description:
        "Our team designs scroll-stopping ad creatives including images, videos, and copy that resonates with your audience and drives action.",
      duration: "Week 1-2",
    },
    {
      step: "3",
      title: "Campaign Setup & Launch",
      description:
        "We build your campaigns in Meta Business Manager with proper tracking, audience targeting, and bidding strategies optimized for your goals.",
      duration: "Week 2",
    },
    {
      step: "4",
      title: "Active Management & Optimization",
      description:
        "Daily monitoring and weekly optimization of your campaigns. We test new audiences, refresh ad creatives, adjust budgets, and scale winners.",
      duration: "Ongoing",
    },
    {
      step: "5",
      title: "Reporting & Strategy Sessions",
      description:
        "Monthly performance reports with clear metrics and insights. Strategy calls to review results and plan next steps for continuous improvement.",
      duration: "Monthly",
    },
  ];

  const caseStudies = [
    {
      company: "Deepslice Pizza",
      industry: "Restaurant & Food Service",
      challenge:
        "New location needed to build local awareness and drive online orders",
      solution:
        "Facebook & Instagram campaigns with location targeting, mouth-watering food photography, and special offers for new customers",
      results: [
        "3,000+ new followers in 3 months",
        "250% increase in online orders",
        "42% of new customers came from Meta ads",
        "$18,000 monthly revenue from social campaigns",
      ],
    },
    {
      company: "NDIS Service Provider",
      industry: "Healthcare Services",
      challenge:
        "Generate qualified leads for NDIS support coordination services",
      solution:
        "Lead generation campaigns targeting families and NDIS participants with educational content and instant forms",
      results: [
        "120+ qualified leads per month",
        "$85 cost per lead (industry avg $180)",
        "65% lead-to-client conversion rate",
        "5.2x return on ad spend",
      ],
    },
  ];

  const faq = [
    {
      q: "What&apos;s the difference between Facebook Ads and Meta Ads?",
      a: "Meta Ads is the new name for advertising on Facebook and Instagram, as both platforms are owned by Meta (formerly Facebook Inc). When we manage your Meta Ads, we create campaigns that can appear on Facebook, Instagram, Messenger, and the Audience Network.",
    },
    {
      q: "How much should I budget for Meta advertising?",
      a: "We recommend starting with at least $30-50 per day ($900-1,500/month) to gather meaningful data and see results. Smaller budgets can work for local businesses with limited reach. Most of our clients spend $1,500-5,000/month on ad spend plus management fees.",
    },
    {
      q: "How long until I see results from Meta Ads?",
      a: "You&apos;ll start seeing immediate metrics (reach, engagement, clicks) within days of launch. However, meaningful conversion data and optimized performance typically develop over 4-8 weeks as we test and refine campaigns based on real data.",
    },
    {
      q: "Do you create the ad images and videos?",
      a: "Yes! Our team designs professional ad creatives including static images, carousel ads, and video content. We can work with your existing brand assets or create new content from scratch based on your needs.",
    },
    {
      q: "Can you target my competitors&apos; followers?",
      a: "While Meta has restricted direct competitor targeting, we can target users based on interests related to your competitors, industry publications, and similar pages. We also use lookalike audiences based on your best customers to find similar people.",
    },
    {
      q: "What&apos;s the Meta Pixel and why do I need it?",
      a: "The Meta Pixel is a tracking code installed on your website that tracks user actions (page views, purchases, form submissions). It&apos;s essential for measuring conversions, building retargeting audiences, and optimizing campaigns for specific actions.",
    },
    {
      q: "Is Instagram advertising different from Facebook?",
      a: "Instagram ads are created through the same Meta Ads Manager but offer different placements (Stories, Reels, Feed, Explore). Instagram tends to have higher engagement rates and works exceptionally well for visual businesses like restaurants, retail, beauty, and lifestyle brands.",
    },
    {
      q: "Can I run ads to my local area only?",
      a: "Absolutely! Meta&apos;s location targeting is incredibly precise. We can target users within a specific radius of your business, in certain suburbs, postcodes, or even exclude areas. Perfect for local Sydney businesses wanting to attract nearby customers.",
    },
  ];

  const adFormats = [
    {
      name: "Single Image Ads",
      description: "Clean, simple ads with one compelling image",
      best: "Quick messages, simple offers",
    },
    {
      name: "Video Ads",
      description: "Engaging video content up to 240 minutes",
      best: "Storytelling, product demos, testimonials",
    },
    {
      name: "Carousel Ads",
      description: "Up to 10 images or videos in one ad",
      best: "Multiple products, step-by-step guides",
    },
    {
      name: "Collection Ads",
      description: "Mobile-optimized product catalogs",
      best: "E-commerce, showcasing product range",
    },
    {
      name: "Stories Ads",
      description: "Full-screen vertical ads in Stories",
      best: "Mobile-first campaigns, time-sensitive offers",
    },
    {
      name: "Reels Ads",
      description: "Short-form video ads in Reels feed",
      best: "Viral potential, younger audiences",
    },
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

      <div className="meta-ads-editorial">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <ServiceHeroSection
          h1="Facebook Ads Sydney"
          badge={{
            icon: "fab fa-facebook",
            text: "Meta Business Partner",
          }}
          heading="Meta Ads Management Sydney"
          description="Drive sales and leads with precision-targeted Facebook & Instagram advertising. Reach 2.8 billion users. Target your ideal customers. Measure real results."
          buttons={{
            primary: {
              text: "Get Free Strategy Session",
              dataPopup: "contact",
              serviceSlug: "meta-ads",
              serviceName: "Meta Ads",
              serviceGroup: "growth-marketing",
            },
            secondary: {
              text: "View Campaign Types",
              href: "#campaigns",
            },
          }}
        />

        {/* Stats Section */}
        <section className="meta-stats paper-grain">
          <div className="container">
            <div className="meta-stats__grid">
              {stats.map((stat) => (
                <article key={stat.label} className="meta-stat">
                  <i className={`fas ${stat.icon}`} aria-hidden="true" />
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Meta Ads Section */}
        <section className="meta-section meta-benefits paper-grain">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Why Meta Ads for Your Sydney <span>Business</span>?
              </h2>
              <p>
                The most powerful advertising platform for reaching and
                converting your target audience
              </p>
            </div>

            <div className="meta-benefits__grid">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="meta-benefit">
                  <div className="meta-benefit__icon">
                    <i className={benefit.icon} aria-hidden="true" />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>

                  <ul>
                    {benefit.points.map((point) => (
                      <li key={point}>
                        <i className="fas fa-check" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Types Section */}
        <section
          className="meta-section meta-campaigns"
          id="campaigns"
        >
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Meta Ad Campaign Types We <span>Manage</span>
              </h2>
              <p>
                Tailored campaigns for every stage of your customer journey
              </p>
            </div>

            <div className="meta-campaigns__grid">
              {campaignTypes.map((campaign, index) => (
                <article key={campaign.title} className="meta-campaign">
                  <div className="meta-campaign__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <div className="meta-campaign__icon">
                      <i
                        className={`fas ${campaign.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>

                  <div className="meta-campaign__result">
                    <strong>{campaign.results}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Formats Section */}
        <section className="meta-section meta-formats paper-grain">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Meta Ad Formats We <span>Create</span>
              </h2>
              <p>
                Professional creatives designed to stop the scroll and drive
                action
              </p>
            </div>

            <div className="meta-formats__grid">
              {adFormats.map((format, index) => (
                <article key={format.name} className="meta-format">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{format.name}</h3>
                  <p>{format.description}</p>

                  <div className="meta-format__best">
                    <strong>Best for:</strong> {format.best}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="meta-section meta-process">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center service-paper-heading--dark">
              <h2>
                Our Meta Ads Management <span>Process</span>
              </h2>
              <p>Proven methodology that delivers consistent results</p>
            </div>

            <div className="meta-process__list">
              {process.map((item) => (
                <article key={item.step} className="meta-process__step">
                  <span className="meta-process__number">
                    {String(item.step).padStart(2, "0")}
                  </span>

                  <div className="meta-process__copy">
                    <div className="meta-process__heading">
                      <h3>{item.title}</h3>
                      <span>{item.duration}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="meta-section meta-results paper-grain">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Real Results from Meta <span>Advertising</span>
              </h2>
              <p>
                Success stories from Sydney businesses we&apos;ve helped grow
              </p>
            </div>

            <div className="meta-results__grid">
              {caseStudies.map((study, index) => (
                <article key={study.company} className="meta-result">
                  <div className="meta-result__story">
                    <span className="meta-result__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{study.company}</h3>
                    <p className="meta-result__industry">{study.industry}</p>

                    <div className="meta-result__block">
                      <h4>Challenge:</h4>
                      <p>{study.challenge}</p>
                    </div>

                    <div className="meta-result__block">
                      <h4>Solution:</h4>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="meta-result__proof">
                    <h4>Results:</h4>

                    <ul>
                      {study.results.map((result) => (
                        <li key={result}>
                          <i
                            className="fas fa-check-circle"
                            aria-hidden="true"
                          />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="service-paper-faq paper-grain meta-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <h2>
                Meta Ads Frequently Asked <span>Questions</span>
              </h2>
              <p>
                Common questions about Facebook and Instagram advertising
              </p>
            </div>

            <FAQAccordion
              faqs={faq.map((item) => ({
                question: item.q,
                answer: item.a,
              }))}
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="meta-cta">
          <CTASection
            title="Ready to Dominate Social Media Advertising?"
            description="Get a free Meta Ads strategy session and discover how we can help you reach more customers, generate qualified leads, and grow your Sydney business with Facebook and Instagram advertising."
            primaryButtonText="Get Free Strategy Session"
            primaryButtonAction="consultation"
            primaryButtonService="meta-ads"
            primaryButtonServiceName="Meta Ads"
            primaryButtonGroup="growth-marketing"
            secondaryButtonText="View Our Portfolio"
            secondaryButtonHref="/portfolio"
          />
        </div>
      </div>
    </>
  );
}