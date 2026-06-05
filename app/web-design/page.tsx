import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { generateMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schemas";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = generateMetadata({
  title: "Professional Web Design Sydney | Custom Website Design Services",
  description:
    "Award-winning web design services in Sydney. We create stunning, mobile-responsive websites that convert visitors into customers. 13+ years experience, 500+ websites delivered.",
  keywords:
    "web design sydney, website design, custom web design, responsive web design, professional website design",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/web-design",
});

const showcaseProjects = [
  {
    name: "OSAN Ability",
    image: "/images/Portfolio/OSAN Ability/OSAN Ability.webp",
    category: "NDIS Provider",
  },
  {
    name: "GPS Vehicle Inspections",
    image:
      "/images/Portfolio/GPS Vehicle Inspections/GPS Vehicle inspection 1.webp",
    category: "Automotive",
  },
  {
    name: "Advanced Tree Lopping",
    image:
      "/images/Portfolio/Advanced Tree Lopping/Advanced tree looping.webp",
    category: "Tree Services",
  },
];

const webDesignStats = [
  {
    number: "13+ Years",
    description: "Industry experience delivering exceptional websites",
    icon: "fa-award",
  },
  {
    number: "500+",
    description: "Websites successfully delivered to happy clients",
    icon: "fa-laptop-code",
  },
  {
    number: "100%",
    description: "Client satisfaction with ongoing support",
    icon: "fa-smile",
  },
  {
    number: "12+",
    description: "Industries served across Australia",
    icon: "fa-industry",
  },
];

const webDesignServices = [
  {
    icon: "fa-paint-brush",
    title: "Custom Web Design",
    description:
      "Unique, tailor-made designs that perfectly reflect your brand identity and business goals. No templates, just original creativity that sets you apart from competitors.",
  },
  {
    icon: "fa-mobile-alt",
    title: "Responsive Design",
    description:
      "Mobile-first websites that look stunning on every device. With 70% of users browsing on mobile, we ensure perfect functionality across all screen sizes.",
  },
  {
    icon: "fa-shopping-cart",
    title: "E-commerce Websites",
    description:
      "Powerful online stores built to sell. Secure payment integration, inventory management, and user-friendly shopping experiences that convert browsers into buyers.",
  },
  {
    icon: "fa-wordpress",
    title: "WordPress Development",
    description:
      "Custom WordPress websites with easy-to-use content management. Update your site yourself or let us handle it - the choice is yours.",
  },
  {
    icon: "fa-rocket",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for specific campaigns. Optimized for lead generation with clear calls-to-action and compelling design.",
  },
  {
    icon: "fa-sync",
    title: "Website Redesign",
    description:
      "Modernize your outdated website with a fresh new look. We preserve your SEO rankings while giving you a contemporary design that drives results.",
  },
  {
    icon: "fa-pencil-alt",
    title: "UI/UX Design",
    description:
      "Intuitive user interfaces and exceptional user experiences. We focus on creating websites that are not just beautiful, but easy to use and navigate.",
  },
  {
    icon: "fa-code",
    title: "Custom Development",
    description:
      "Advanced functionality and custom features built to your specifications. From complex databases to API integrations, we make it happen.",
  },
  {
    icon: "fa-headset",
    title: "Ongoing Maintenance",
    description:
      "Keep your website running smoothly with regular updates, security patches, and technical support. Focus on your business while we handle the tech.",
  },
];

const designProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, target audience, competitors, and goals. This research phase ensures we create a website that truly serves your needs and drives your business forward.",
    icon: "fa-search",
  },
  {
    step: "02",
    title: "Design & Concept",
    description:
      "Our designers create custom mockups and prototypes based on your brand guidelines. You'll see exactly how your website will look before we write a single line of code, with unlimited revisions until you're completely satisfied.",
    icon: "fa-palette",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our developers bring the design to life using modern, clean code. We build with performance, security, and SEO in mind. Rigorous testing across all devices ensures everything works perfectly.",
    icon: "fa-code",
  },
  {
    step: "04",
    title: "Content & SEO",
    description:
      "We optimize your content for search engines and user engagement. Proper heading structure, meta tags, alt text, and keyword optimization ensure your website ranks well on Google from day one.",
    icon: "fa-file-alt",
  },
  {
    step: "05",
    title: "Launch & Training",
    description:
      "After final approval, we launch your website and provide comprehensive training. You'll learn how to manage your content, or we can handle updates for you. Your success is our success.",
    icon: "fa-rocket",
  },
  {
    step: "06",
    title: "Support & Growth",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support, monitor performance, and suggest improvements to help your website grow with your business.",
    icon: "fa-chart-line",
  },
];

const performanceResults = [
  {
    number: "< 2s",
    title: "Loading Speed",
    description: "Lightning-fast page loads keep visitors engaged",
  },
  {
    number: "95+",
    title: "Performance Score",
    description: "Google PageSpeed optimized for top rankings",
  },
  {
    number: "99.9%",
    title: "Uptime",
    description: "Reliable hosting keeps your site always accessible",
  },
  {
    number: "SSL",
    title: "Secure",
    description: "Bank-level encryption protects your data",
  },
];

const includedFeatures = [
  { feature: "Mobile Responsive Design", icon: "fa-mobile-alt" },
  { feature: "Search Engine Optimization", icon: "fa-search" },
  { feature: "Fast Loading Speed", icon: "fa-tachometer-alt" },
  { feature: "SSL Security Certificate", icon: "fa-lock" },
  { feature: "Contact Form Integration", icon: "fa-envelope" },
  { feature: "Social Media Integration", icon: "fa-share-alt" },
  { feature: "Google Analytics Setup", icon: "fa-chart-bar" },
  { feature: "Google Maps Integration", icon: "fa-map-marked-alt" },
  { feature: "Email Configuration", icon: "fa-at" },
  { feature: "Content Management System", icon: "fa-edit" },
  { feature: "Browser Compatibility", icon: "fa-globe" },
  { feature: "Professional Typography", icon: "fa-font" },
  { feature: "Image Optimization", icon: "fa-images" },
  { feature: "Performance Optimization", icon: "fa-rocket" },
  { feature: "Clean, Semantic Code", icon: "fa-code" },
  { feature: "GDPR Compliance", icon: "fa-shield-alt" },
  { feature: "Accessibility Standards", icon: "fa-universal-access" },
  { feature: "Cross-Device Testing", icon: "fa-laptop-code" },
];

const devices = [
  {
    title: "Desktop",
    icon: "fa-desktop",
    description:
      "Immersive full-screen experiences with advanced features and layouts",
  },
  {
    title: "Tablet",
    icon: "fa-tablet-alt",
    description:
      "Optimized touch interfaces that adapt perfectly to all tablet sizes",
  },
  {
    title: "Mobile",
    icon: "fa-mobile-alt",
    description:
      "Fast-loading, thumb-friendly designs for on-the-go users",
  },
];

const technologies = [
  { name: "React", icon: "fa-react", color: "#61DAFB" },
  { name: "Next.js", icon: "fa-node", color: "#000000" },
  { name: "WordPress", icon: "fa-wordpress", color: "#21759B" },
  { name: "HTML5", icon: "fa-html5", color: "#E34F26" },
  { name: "CSS3", icon: "fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-js", color: "#F7DF1E" },
  { name: "PHP", icon: "fa-php", color: "#777BB4" },
  { name: "Node.js", icon: "fa-node-js", color: "#339933" },
];

const successStories = [
  {
    name: "OSAN Ability",
    category: "NDIS Provider",
    image: "/images/Portfolio/OSAN Ability/OSAN Ability.webp",
    alt: "OSAN Ability Website",
    description:
      "Complete digital transformation including branding, website design, and integrated marketing strategy that positioned them as a leading NDIS provider.",
    tags: ["Web Design", "Branding", "SEO", "Google Ads"],
  },
  {
    name: "GPS Vehicle Inspections",
    category: "Automotive",
    image:
      "/images/Portfolio/GPS Vehicle Inspections/GPS Vehicle inspection 1.webp",
    alt: "GPS Vehicle Inspections Website",
    description:
      "Modern, professional website with online booking system that increased customer inquiries by 250% and streamlined their inspection process.",
    tags: ["Web Design", "Booking System", "SEO"],
  },
];

const industries = [
  { name: "Healthcare & Medical", icon: "fa-heartbeat" },
  { name: "Legal & Law Firms", icon: "fa-balance-scale" },
  { name: "Real Estate", icon: "fa-home" },
  { name: "Finance & Banking", icon: "fa-university" },
  { name: "Construction & Trades", icon: "fa-hard-hat" },
  { name: "Hospitality & Tourism", icon: "fa-hotel" },
  { name: "Education & Training", icon: "fa-graduation-cap" },
  { name: "E-commerce & Retail", icon: "fa-shopping-bag" },
  { name: "Professional Services", icon: "fa-briefcase" },
  { name: "Technology & IT", icon: "fa-laptop-code" },
  { name: "NDIS & Aged Care", icon: "fa-hands-helping" },
  { name: "Manufacturing", icon: "fa-industry" },
];

const growthPlans = [
  {
    title: "Website Care",
    description: "Keep your website secure and updated",
    popup: "service",
    serviceSlug: "website-care",
    serviceGroup: "web-design",
    features: [
      "Security updates & monitoring",
      "Weekly backups",
      "Performance optimization",
      "2 hours content updates/month",
      "Uptime monitoring",
      "Email support",
    ],
  },
  {
    title: "Website Care & CRM",
    description: "Website care + customer management",
    popup: "service",
    serviceSlug: "crm-automation",
    serviceGroup: "digital-marketing",
    featured: true,
    features: [
      "Everything in Website Care",
      "CRM setup & management",
      "Lead tracking & automation",
      "Request/Manage Reviews via SMS/Email",
      "4 hours content updates/month",
      "Priority support",
    ],
  },
  {
    title: "Paid Ads Management",
    description: "Google OR Facebook Ads management",
    popup: "service",
    serviceSlug: "google-ads",
    serviceGroup: "digital-marketing",
    badge: "Most Popular",
    features: [
      "Google OR Facebook Ads (one platform)",
      "Campaign strategy & setup",
      "Ad copywriting & design",
      "A/B testing & optimization",
      "Conversion tracking",
      "Monthly performance reports",
      "Dedicated account manager",
      "Weekly optimization",
    ],
  },
  {
    title: "SEO Package",
    description: "Complete SEO & content marketing",
    popup: "service",
    serviceSlug: "seo-sydney",
    serviceGroup: "digital-marketing",
    features: [
      "Complete SEO audit & strategy",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "4 SEO blog posts/month",
      "Link building & outreach",
      "Local SEO optimization",
      "Competitor analysis",
      "Monthly ranking reports",
    ],
  },
  {
    title: "Complete Marketing",
    description: "Everything you need to dominate",
    popup: "service",
    serviceSlug: "digital-marketing",
    serviceGroup: "digital-marketing",
    badge: "Ultimate Package",
    featured: true,
    features: [
      "Everything from all plans above",
      "Dedicated marketing team",
      "Multi-channel campaigns",
      "Social media management",
      "Email marketing automation",
      "Video marketing & production",
      "Advanced analytics & reporting",
      "Priority 24/7 support",
    ],
  },
];

const recommendations = [
  {
    title: "Starting Out",
    description:
      "Perfect for small businesses and startups that need essential services to establish and grow their online presence.",
    items: [
      "Website Care for basic maintenance",
      "Website Care & CRM to manage customers",
      "Paid Ads for quick lead generation",
      "SEO Package for long-term growth",
    ],
  },
  {
    title: "Established Business",
    description:
      "For businesses with $1M+ annual revenue ready to dominate their market with comprehensive marketing.",
    items: [
      "Complete Marketing Package",
      "Dedicated team of specialists",
      "Multi-channel strategy",
      "Maximum market penetration",
    ],
  },
];

const faqs = [
  {
    q: "How much does a professional website cost?",
    a: "Website costs vary based on complexity and features. Basic websites start from around $3,000, while advanced e-commerce sites or custom applications can range higher. We provide transparent quotes with no hidden fees after understanding your specific requirements.",
  },
  {
    q: "How long does it take to design and build a website?",
    a: "Timeline depends on project scope. A basic website typically takes 2-4 weeks, while more complex sites with custom features take 6-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely! Every website we create is fully responsive and mobile-optimized. With over 70% of users browsing on mobile devices, we ensure your site looks and works perfectly on smartphones, tablets, and desktops.",
  },
  {
    q: "Can I update the website content myself?",
    a: "Yes! We build websites with user-friendly content management systems (CMS) that allow you to make updates easily. We provide training and documentation, or you can opt for our maintenance plans if you prefer us to handle updates.",
  },
  {
    q: "Do you provide website hosting?",
    a: "While we don't provide hosting directly, we can recommend reliable hosting providers and handle the setup for you. We ensure your website is deployed on fast, secure servers optimized for performance.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes! Search engine optimization is built into every website we create. We implement SEO best practices including proper heading structure, meta tags, fast loading speeds, mobile optimization, and clean code that search engines love.",
  },
  {
    q: "What happens after my website launches?",
    a: "We provide post-launch support with every project. This includes fixing any bugs, answering questions, and making minor adjustments. We also offer ongoing maintenance plans for regular updates, security monitoring, and continuous optimization.",
  },
  {
    q: "Do I own the website after it's built?",
    a: "Yes! Once final payment is complete, you own all rights to your website, including the code, content, and design files. We believe in complete transparency and client ownership.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely! We specialize in website redesigns, modernizing outdated sites while preserving your SEO rankings and improving user experience. We'll audit your current site and create a strategic redesign plan.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer flexible payment options. Standard arrangement is 50% deposit and 50% upon completion. For larger projects, we can arrange milestone-based payments or monthly installments to fit your budget.",
  },
];

function SectionHeading({
  kicker,
  title,
  accent,
  description,
  dark = false,
}: {
  kicker: string;
  title: string;
  accent: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <header className={`wde-heading ${dark ? "wde-heading--dark" : ""}`}>
      <span className="wde-heading__kicker">{kicker}</span>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      <p>{description}</p>
    </header>
  );
}

export default function WebDesignPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    {
      name: "Web Design",
      url: "https://www.sydneywebdesigner.com.au/web-design",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="web-design-editorial paper-grain">
        {/* Hero */}
        <section className="wde-hero">
          <div className="container wde-hero__grid">
            <div className="wde-hero__content">
              <span className="wde-hero__badge">
                <i aria-hidden="true" />
                Since 2013 • DSIGNS Australia
              </span>

              <h1>
                Professional Web Design <span>Sydney</span>
              </h1>

              <p>
                Transform your online presence with stunning, high-performance
                websites that drive real business results. Award-winning design
                meets cutting-edge technology.
              </p>

              <div className="wde-hero__actions">
                <button
                  type="button"
                  data-popup="service"
                  data-popup-service="web-design"
                  data-popup-group="web-design"
                  className="paper-button paper-button--rust"
                >
                  Get Your Free Quote
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>

                <Link href="/portfolio" className="paper-button">
                  View Our Work
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="wde-hero__art" aria-hidden="true">
              <div className="wde-browser">
                <div className="wde-browser__bar">
                  <div className="wde-browser__dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="wde-browser__url" />
                </div>

                <div className="wde-browser__layout">
                  <aside className="wde-browser__side">
                    <span className="active" />
                    <span />
                    <span />
                    <span />
                  </aside>

                  <div className="wde-browser__screen">
                    <div className="wde-browser__screen-top">
                      <div>
                        <span className="wde-browser__headline" />
                        <span className="wde-browser__copy" />
                        <span className="wde-browser__copy short" />
                        <span className="wde-browser__button" />
                      </div>
                      <span className="wde-browser__circle" />
                    </div>

                    <div className="wde-browser__tiles">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="wde-section wde-projects">
          <div className="container">
            <SectionHeading
              kicker="Selected Work"
              title="Our Latest Web Design"
              accent="Projects"
              description="See what we've created for businesses like yours"
            />

            <div className="wde-projects__grid">
              {showcaseProjects.map((project, index) => (
                <article key={project.name} className="wde-project-card">
                  <span className="wde-project-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="wde-project-card__frame">
                    <div className="wde-project-card__image">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="wde-project-card__body">
                    <p>{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="wde-section__action">
              <Link href="/portfolio" className="paper-button paper-button--rust">
                View All Projects
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="wde-section wde-proof">
          <div className="container">
            <SectionHeading
              kicker="Why Choose Us"
              title="Why Choose Sydney Web"
              accent="Designer?"
              description="The leading web design agency trusted by Sydney businesses"
            />

            <div className="wde-proof__grid">
              {webDesignStats.map((stat, index) => (
                <article key={stat.number} className="wde-proof-card">
                  <div className="wde-proof-card__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i className={`fas ${stat.icon}`} aria-hidden="true" />
                  </div>

                  <strong>{stat.number}</strong>
                  <p>{stat.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="wde-section wde-services">
          <div className="container">
            <SectionHeading
              kicker="Capabilities"
              title="Comprehensive Web Design"
              accent="Services"
              description="Everything you need for a successful online presence"
            />

            <div className="wde-services__grid">
              {webDesignServices.map((service, index) => (
                <article key={service.title} className="wde-service-card">
                  <div className="wde-service-card__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i className={`fas ${service.icon}`} aria-hidden="true" />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="wde-section wde-process">
          <div className="container">
            <SectionHeading
              kicker="Our Process"
              title="Our Web Design"
              accent="Process"
              description="A proven methodology that delivers outstanding results"
              dark
            />

            <div className="wde-process__grid">
              {designProcess.map((phase) => (
                <article key={phase.step} className="wde-process-card">
                  <div className="wde-process-card__meta">
                    <span>{phase.step}</span>
                    <i className={`fas ${phase.icon}`} aria-hidden="true" />
                  </div>

                  <span className="wde-process-card__rule" aria-hidden="true" />

                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Performance */}
        <section className="wde-section wde-performance">
          <div className="container">
            <SectionHeading
              kicker="Performance"
              title="Built for Performance &"
              accent="Results"
              description="Speed, security, and user experience that drives conversions"
            />

            <div className="wde-performance__grid">
              {performanceResults.map((result, index) => (
                <article key={result.title} className="wde-performance-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{result.number}</strong>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                </article>
              ))}
            </div>

            <article className="wde-performance__statement">
              <p>
                Every website we build is optimized for maximum performance.
                Fast loading speeds improve user experience, boost SEO rankings,
                and increase conversion rates - helping you achieve your
                business goals faster.
              </p>
            </article>
          </div>
        </section>

        {/* Included */}
        <section className="wde-section wde-included">
          <div className="container">
            <SectionHeading
              kicker="Included"
              title="Features Included in Every"
              accent="Website"
              description="Professional quality as standard, not as an extra"
            />

            <div className="wde-included__grid">
              {includedFeatures.map((item, index) => (
                <article key={item.feature} className="wde-included-card">
                  <span className="wde-included-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <i className={`fas ${item.icon}`} aria-hidden="true" />
                  <h3>{item.feature}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Devices */}
        <section className="wde-section wde-devices">
          <div className="container">
            <SectionHeading
              kicker="Responsive Design"
              title="Perfect on Every"
              accent="Device"
              description="Responsive design that looks stunning across all screen sizes"
              dark
            />

            <div className="wde-devices-editorial">
              <article className="wde-devices-editorial__feature">
                <span className="wde-devices-editorial__label">MOBILE FIRST</span>

                <strong>70%</strong>

                <p>
                  Over <b>70%</b> of web traffic comes from mobile devices. We build
                  mobile-first websites that provide exceptional experiences on
                  smartphones while scaling beautifully to tablets and desktops.
                </p>

                <div className="wde-devices-editorial__checks">
                  <span>
                    <i className="fas fa-check" aria-hidden="true" />
                    Touch Optimized
                  </span>

                  <span>
                    <i className="fas fa-check" aria-hidden="true" />
                    Fast Loading
                  </span>

                  <span>
                    <i className="fas fa-check" aria-hidden="true" />
                    SEO Friendly
                  </span>
                </div>
              </article>

              <div className="wde-devices-editorial__list">
                {devices.map((device, index) => (
                  <article key={device.title} className="wde-device-row">
                    <div className="wde-device-row__number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="wde-device-row__icon">
                      <i className={`fas ${device.icon}`} aria-hidden="true" />
                    </div>

                    <div className="wde-device-row__content">
                      <h3>{device.title}</h3>
                      <p>{device.description}</p>
                    </div>

                    <span className="wde-device-row__arrow" aria-hidden="true">
                      →
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech */}
        <section className="wde-section wde-tech">
          <div className="container">
            <SectionHeading
              kicker="Technology"
              title="Modern Technologies We"
              accent="Master"
              description="Cutting-edge tools for superior websites"
            />

            <div className="wde-tech__grid">
              {technologies.map((tech, index) => (
                <article key={tech.name} className="wde-tech-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i
                    className={`fab ${tech.icon}`}
                    style={{ color: tech.color }}
                    aria-hidden="true"
                  />
                  <h3>{tech.name}</h3>
                </article>
              ))}
            </div>

            <article className="wde-tech__statement">
              <p>
                We stay ahead of the curve by continuously learning and adopting
                the latest web technologies. This ensures your website is built
                with modern, maintainable code that performs exceptionally and
                stands the test of time.
              </p>
            </article>
          </div>
        </section>

        {/* Success Stories */}
        <section className="wde-section wde-stories">
          <div className="container">
            <SectionHeading
              kicker="Success Stories"
              title="Real Results for Real"
              accent="Businesses"
              description="See how we've helped businesses like yours succeed online"
            />

            <div className="wde-stories__grid">
              {successStories.map((story, index) => (
                <article key={story.name} className="wde-story-card">
                  <div className="wde-story-card__frame">
                    <div className="wde-story-card__image">
                      <Image
                        src={story.image}
                        alt={story.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="wde-story-card__content">
                    <span className="wde-story-card__category">
                      {story.category}
                    </span>

                    <h3>{story.name}</h3>
                    <p>{story.description}</p>

                    <div className="wde-story-card__tags">
                      {story.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="wde-section__action">
              <Link href="/portfolio" className="wde-text-link">
                View More Success Stories
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="wde-section wde-industries">
          <div className="container">
            <SectionHeading
              kicker="Industries"
              title="Industries We"
              accent="Serve"
              description="Specialized web design expertise across multiple sectors"
            />

            <div className="wde-industries__grid">
              {industries.map((industry, index) => (
                <article key={industry.name} className="wde-industry-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i className={`fas ${industry.icon}`} aria-hidden="true" />
                  <h3>{industry.name}</h3>
                </article>
              ))}
            </div>

            <p className="wde-industries__statement">
              With 13+ years of experience and 500+ websites delivered, we
              understand the unique challenges and opportunities in each
              industry. We don&apos;t just build websites - we create digital
              solutions that drive your business forward.
            </p>
          </div>
        </section>

        {/* Growth Plans */}
        <section className="wde-section wde-growth">
          <div className="container">
            <SectionHeading
              kicker="Growth Plans"
              title="Growth Marketing"
              accent="Services"
              description="Strategic marketing solutions to drive traffic and conversions"
              dark
            />

            <div className="wde-growth-editorial">
              {growthPlans.map((plan, index) => (
                <article
                  key={plan.title}
                  className={`wde-growth-card ${plan.featured ? "wde-growth-card--featured" : ""}`}
                >
                  <div className="wde-growth-card__header">
                    <span className="wde-growth-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {plan.badge && (
                      <span className="wde-growth-card__badge">{plan.badge}</span>
                    )}
                  </div>

                  <h3>{plan.title}</h3>
                  <p className="wde-growth-card__description">{plan.description}</p>

                  <ul className="wde-growth-card__features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    data-popup={plan.popup}
                    data-popup-service={plan.serviceSlug}
                    data-popup-group={plan.serviceGroup}
                    data-popup-plan={plan.title}
                    className="paper-button wde-growth-card__button"
                  >
                    Get Started
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>

            <div className="wde-recommendations">
              {recommendations.map((recommendation, index) => (
                <article
                  key={recommendation.title}
                  className={`wde-recommendation ${index === 1 ? "wde-recommendation--accent" : ""}`}
                >
                  <h3>{recommendation.title}</h3>
                  <p>{recommendation.description}</p>

                  <ul>
                    {recommendation.items.map((item) => (
                      <li key={item}>
                        <span>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="service-paper-faq paper-grain wde-shared-faq">
          <div className="container">
            <div className="service-paper-heading service-paper-heading--center">
              <span className="service-paper-heading__eyebrow">FAQ</span>

              <h2>
                Frequently Asked <em>Questions</em>
              </h2>

              <p>Everything you need to know about our web design services</p>
            </div>

            <FAQAccordion
              faqs={faqs.map((faq) => ({
                question: faq.q,
                answer: faq.a,
              }))}
            />
          </div>
        </section>

        {/* Final CTA - LIGHT */}
        <section className="wde-final-cta wde-final-cta--light paper-grain">
          <div className="container">
            <div className="wde-final-cta__content">
              <h2>
                Ready to Build Your <span>Dream Website?</span>
              </h2>

              <p>
                Let&apos;s create a stunning website that grows your business.
                Get a free consultation and custom quote today.
              </p>

              <div className="wde-final-cta__actions">
                <button
                  type="button"
                  data-popup="service"
                  data-popup-service="web-design"
                  data-popup-group="web-design"
                  className="paper-button paper-button--rust"
                >
                  Get Free Quote
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </button>

                <Link href="/portfolio" className="paper-button">
                  View Our Portfolio
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}