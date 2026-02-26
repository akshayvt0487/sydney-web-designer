import Link from "next/link";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateServiceSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import CTASection from "@/components/CTASection";

export const metadata = generateMetadata({
  title: "Meta Ads Management Sydney | Facebook & Instagram Advertising",
  description: "Expert Meta (Facebook & Instagram) advertising management in Sydney. Reach 2.8 billion users with precision-targeted campaigns. Drive sales, leads, and brand awareness with proven strategies.",
  keywords: "meta ads sydney, facebook ads sydney, instagram ads sydney, social media advertising sydney, facebook advertising agency, meta business partner sydney",
  canonicalUrl: "https://sydneywebdesigner.com.au/services/meta-ads",
  ogImage: "/images/og/services.svg",
});

export default function MetaAdsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Services", url: "https://sydneywebdesigner.com.au/services" },
    { name: "Meta Ads", url: "https://sydneywebdesigner.com.au/services/meta-ads" }
  ];

  const serviceData = {
    name: "Meta Ads Management (Facebook & Instagram)",
    description: "Professional Meta advertising management for Facebook and Instagram. Precision-targeted campaigns that drive sales, generate leads, and build brand awareness for Sydney businesses.",
    provider: "Sydney Web Designer"
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
        "Location targeting down to suburb level"
      ]
    },
    {
      icon: "fas fa-chart-line",
      title: "Scalable Campaigns",
      description: "Start small and scale what works",
      points: [
        "Test multiple audiences and creatives",
        "Data-driven budget allocation",
        "Scale winning campaigns quickly",
        "Automated optimization for best results"
      ]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Visual Storytelling",
      description: "Engage users with compelling creatives",
      points: [
        "Eye-catching image and video ads",
        "Stories, Reels, and feed placements",
        "Professional ad creative design",
        "A/B testing to find top performers"
      ]
    },
    {
      icon: "fas fa-sync",
      title: "Retargeting Power",
      description: "Convert website visitors into customers",
      points: [
        "Facebook Pixel implementation",
        "Dynamic product retargeting",
        "Cart abandonment campaigns",
        "Multi-touch attribution tracking"
      ]
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Integration",
      description: "Sell directly on Facebook & Instagram",
      points: [
        "Facebook Shop & Instagram Shopping setup",
        "Dynamic product catalog ads",
        "Automated product updates",
        "Seamless checkout experience"
      ]
    },
    {
      icon: "fas fa-users-cog",
      title: "Full-Funnel Strategy",
      description: "Guide customers through their journey",
      points: [
        "Awareness campaigns for new audiences",
        "Consideration ads for engagement",
        "Conversion campaigns for sales/leads",
        "Retention campaigns for existing customers"
      ]
    },
  ];

  const campaignTypes = [
    {
      title: "Lead Generation Campaigns",
      description: "Capture high-quality leads directly on Facebook and Instagram with instant forms.",
      results: "Average 42% reduction in cost per lead vs traditional landing pages",
      icon: "fa-user-plus"
    },
    {
      title: "Conversion Campaigns",
      description: "Drive sales, bookings, and sign-ups with optimized campaigns focused on your specific conversion goals.",
      results: "4.2x average return on ad spend across managed accounts",
      icon: "fa-shopping-bag"
    },
    {
      title: "Brand Awareness Campaigns",
      description: "Reach thousands of your target audience and build brand recognition in your local market.",
      results: "Average reach of 50,000+ relevant users per month",
      icon: "fa-star"
    },
    {
      title: "Engagement Campaigns",
      description: "Boost post engagement, page likes, and event responses to build an active community.",
      results: "3-5x increase in organic reach through paid engagement",
      icon: "fa-heart"
    },
    {
      title: "Video View Campaigns",
      description: "Get your brand story in front of potential customers with compelling video content.",
      results: "Average view rate of 45% with optimized targeting",
      icon: "fa-video"
    },
    {
      title: "Dynamic Retargeting",
      description: "Show personalized product ads to people who viewed items on your website.",
      results: "8-12x higher conversion rate than cold traffic",
      icon: "fa-sync-alt"
    },
  ];

  const process = [
    {
      step: "1",
      title: "Strategy & Audience Research",
      description: "We analyze your business, competitors, and target audience to create a winning strategy. Define customer personas, research audience interests, and identify optimal ad placements.",
      duration: "Week 1"
    },
    {
      step: "2",
      title: "Creative Development",
      description: "Our team designs scroll-stopping ad creatives including images, videos, and copy that resonates with your audience and drives action.",
      duration: "Week 1-2"
    },
    {
      step: "3",
      title: "Campaign Setup & Launch",
      description: "We build your campaigns in Meta Business Manager with proper tracking, audience targeting, and bidding strategies optimized for your goals.",
      duration: "Week 2"
    },
    {
      step: "4",
      title: "Active Management & Optimization",
      description: "Daily monitoring and weekly optimization of your campaigns. We test new audiences, refresh ad creatives, adjust budgets, and scale winners.",
      duration: "Ongoing"
    },
    {
      step: "5",
      title: "Reporting & Strategy Sessions",
      description: "Monthly performance reports with clear metrics and insights. Strategy calls to review results and plan next steps for continuous improvement.",
      duration: "Monthly"
    },
  ];

  const caseStudies = [
    {
      company: "Deepslice Pizza",
      industry: "Restaurant & Food Service",
      challenge: "New location needed to build local awareness and drive online orders",
      solution: "Facebook & Instagram campaigns with location targeting, mouth-watering food photography, and special offers for new customers",
      results: [
        "3,000+ new followers in 3 months",
        "250% increase in online orders",
        "42% of new customers came from Meta ads",
        "$18,000 monthly revenue from social campaigns"
      ]
    },
    {
      company: "NDIS Service Provider",
      industry: "Healthcare Services",
      challenge: "Generate qualified leads for NDIS support coordination services",
      solution: "Lead generation campaigns targeting families and NDIS participants with educational content and instant forms",
      results: [
        "120+ qualified leads per month",
        "$85 cost per lead (industry avg $180)",
        "65% lead-to-client conversion rate",
        "5.2x return on ad spend"
      ]
    },
  ];

  const faq = [
    {
      q: "What&apos;s the difference between Facebook Ads and Meta Ads?",
      a: "Meta Ads is the new name for advertising on Facebook and Instagram, as both platforms are owned by Meta (formerly Facebook Inc). When we manage your Meta Ads, we create campaigns that can appear on Facebook, Instagram, Messenger, and the Audience Network."
    },
    {
      q: "How much should I budget for Meta advertising?",
      a: "We recommend starting with at least $30-50 per day ($900-1,500/month) to gather meaningful data and see results. Smaller budgets can work for local businesses with limited reach. Most of our clients spend $1,500-5,000/month on ad spend plus management fees."
    },
    {
      q: "How long until I see results from Meta Ads?",
      a: "You&apos;ll start seeing immediate metrics (reach, engagement, clicks) within days of launch. However, meaningful conversion data and optimized performance typically develop over 4-8 weeks as we test and refine campaigns based on real data."
    },
    {
      q: "Do you create the ad images and videos?",
      a: "Yes! Our team designs professional ad creatives including static images, carousel ads, and video content. We can work with your existing brand assets or create new content from scratch based on your needs."
    },
    {
      q: "Can you target my competitors&apos; followers?",
      a: "While Meta has restricted direct competitor targeting, we can target users based on interests related to your competitors, industry publications, and similar pages. We also use lookalike audiences based on your best customers to find similar people."
    },
    {
      q: "What&apos;s the Meta Pixel and why do I need it?",
      a: "The Meta Pixel is a tracking code installed on your website that tracks user actions (page views, purchases, form submissions). It&apos;s essential for measuring conversions, building retargeting audiences, and optimizing campaigns for specific actions."
    },
    {
      q: "Is Instagram advertising different from Facebook?",
      a: "Instagram ads are created through the same Meta Ads Manager but offer different placements (Stories, Reels, Feed, Explore). Instagram tends to have higher engagement rates and works exceptionally well for visual businesses like restaurants, retail, beauty, and lifestyle brands."
    },
    {
      q: "Can I run ads to my local area only?",
      a: "Absolutely! Meta&apos;s location targeting is incredibly precise. We can target users within a specific radius of your business, in certain suburbs, postcodes, or even exclude areas. Perfect for local Sydney businesses wanting to attract nearby customers."
    },
  ];

  const adFormats = [
    { name: "Single Image Ads", description: "Clean, simple ads with one compelling image", best: "Quick messages, simple offers" },
    { name: "Video Ads", description: "Engaging video content up to 240 minutes", best: "Storytelling, product demos, testimonials" },
    { name: "Carousel Ads", description: "Up to 10 images or videos in one ad", best: "Multiple products, step-by-step guides" },
    { name: "Collection Ads", description: "Mobile-optimized product catalogs", best: "E-commerce, showcasing product range" },
    { name: "Stories Ads", description: "Full-screen vertical ads in Stories", best: "Mobile-first campaigns, time-sensitive offers" },
    { name: "Reels Ads", description: "Short-form video ads in Reels feed", best: "Viral potential, younger audiences" },
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
      <section className="bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f59e0b] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <i className="fab fa-facebook text-[#1877f2]"></i>
              <i className="fab fa-instagram text-[#E4405F]"></i>
              <span className="text-white text-sm font-semibold">Meta Business Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Meta Ads Management Sydney
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-100">
              Drive sales and leads with precision-targeted Facebook & Instagram advertising
            </p>
            <p className="text-lg mb-8 text-slate-200">
              Reach 2.8 billion users. Target your ideal customers. Measure real results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="#contact" className="btn btn-primary">
                Get Free Strategy Session
              </Link>
              <Link href="#campaigns" className="btn btn-secondary">
                View Campaign Types
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-2">
                    <i className={`fas ${stat.icon} text-[#f59e0b]`}></i>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Meta Ads Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Meta Ads for Your Sydney Business?</h2>
            <p>The most powerful advertising platform for reaching and converting your target audience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="card hover:shadow-xl transition-all border border-[#f59e0b]/30">
                <div className="text-5xl mb-6 text-[#f59e0b]">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary-navy">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{benefit.description}</p>
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

      {/* Campaign Types Section */}
      <section className="py-20 bg-[#f8fafc]" id="campaigns">
        <div className="container">
          <div className="section-title">
            <h2>Meta Ad Campaign Types We Manage</h2>
            <p>Tailored campaigns for every stage of your customer journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {campaignTypes.map((campaign, index) => (
              <div key={index} className="card hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${campaign.icon} text-3xl text-[#f59e0b]`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary-navy">{campaign.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{campaign.description}</p>
                <div className="p-4 bg-orange-50 border-l-4 border-[#f59e0b] rounded-lg">
                  <p className="text-sm font-semibold text-primary-navy">{campaign.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Meta Ad Formats We Create</h2>
            <p>Professional creatives designed to stop the scroll and drive action</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {adFormats.map((format, index) => (
              <div key={index} className="card hover:border-[#f59e0b] transition-all">
                <h3 className="text-xl font-bold mb-2 text-primary-navy">{format.name}</h3>
                <p className="text-gray-700 mb-3">{format.description}</p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-[#f59e0b]">Best for:</span> {format.best}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Our Meta Ads Management Process</h2>
            <p>Proven methodology that delivers consistent results</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#f59e0b] to-[#fb923c] text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#f59e0b]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-primary-navy">{item.title}</h3>
                    <span className="text-sm font-semibold text-[#f59e0b] bg-orange-50 px-4 py-1 rounded-full">{item.duration}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Real Results from Meta Advertising</h2>
            <p>Success stories from Sydney businesses we&apos;ve helped grow</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card border-t-4 border-[#f59e0b] shadow-xl">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold text-primary-navy mb-2">{study.company}</h3>
                    <div className="text-lg text-[#f59e0b] font-semibold mb-6">{study.industry}</div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-primary-navy mb-2">Challenge:</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-navy mb-2">Solution:</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1e293b] to-[#2d3b4f] text-white rounded-2xl p-8">
                    <h4 className="font-bold mb-6 text-xl">Results:</h4>
                    <ul className="space-y-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <i className="fas fa-check-circle text-[#f59e0b] text-xl flex-shrink-0 mt-1"></i>
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
      <section className="py-20 bg-[#f8fafc]">
        <div className="container">
          <div className="section-title">
            <h2>Meta Ads Frequently Asked Questions</h2>
            <p>Common questions about Facebook and Instagram advertising</p>
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
        title="Ready to Dominate Social Media Advertising?"
        description="Get a free Meta Ads strategy session and discover how we can help you reach more customers, generate qualified leads, and grow your Sydney business with Facebook and Instagram advertising."
        primaryButtonText="Get Free Strategy Session"
        primaryButtonAction="consultation"
        secondaryButtonText="View Our Portfolio"
      />
    </>
  );
}
