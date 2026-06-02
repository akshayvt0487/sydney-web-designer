import Link from "next/link";
import type { Metadata } from "next";
import { contactInfo, portfolioProjects } from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import EditorialHero from "@/components/home/EditorialHero";
import HomeReveal from "@/components/home/HomeReveal";

import {
  generateBreadcrumbSchema,
  generateWebSiteSchema,
} from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Sydney Web Designer | Web Design & Digital Marketing",
  description: "Sydney Web Designer - 13+ years delivering custom web design, SEO & digital marketing for Sydney businesses. 500+ sites delivered. Get a free quote today.",
  keywords: "web designer sydney, web design sydney, sydney web designer, digital marketing sydney, seo sydney, website design sydney, web development sydney",
  alternates: {
    canonical: "https://www.sydneywebdesigner.com.au",
  },
  openGraph: {
    title: "Sydney Web Designer | Award-Winning Web Design & Digital Marketing",
    description: "Transform your digital presence with Sydney's premier web design agency. 500+ projects delivered, 4.9★ rating.",
    url: "https://www.sydneywebdesigner.com.au",
    siteName: "Sydney Web Designer",
    type: "website",
    images: [
      {
        url: "https://www.sydneywebdesigner.com.au/images/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Sydney Web Designer - Premier Web Design & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Web Designer | Award-Winning Web Design Agency",
    description: "Transform your digital presence with Sydney's premier web design agency. 500+ projects, 4.9★ rating.",
    images: ["https://www.sydneywebdesigner.com.au/images/og/homepage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const services = [
  {
    icon: "fa-palette",
    title: "Web Design & Development",
    desc: "Strategic UX/UI design, semantic HTML architecture, accessibility compliance, Core Web Vitals optimization, and conversion-focused interfaces.",
    link: "/services/custom-web-design",
  },
  {
    icon: "fa-bullhorn",
    title: "Digital Marketing",
    desc: "Technical SEO, structured data, on-page optimization, conversion rate optimization, and data-driven growth strategies.",
    link: "/services/seo-sydney",
  },
  {
    icon: "fa-pen-nib",
    title: "Branding & Design",
    desc: "Brand positioning, design systems, visual hierarchy, typography discipline, and consistent component libraries.",
    link: "/services/brand-identity",
  },
];

const processSteps = [
  { step: "01", icon: "fa-comments", title: "Discovery & Strategy", desc: "We learn about your business, goals, and target audience to create a tailored strategy." },
  { step: "02", icon: "fa-pencil-ruler", title: "Design & Development", desc: "Our team brings your vision to life with stunning design and robust development." },
  { step: "03", icon: "fa-rocket", title: "Launch & Optimize", desc: "We launch your project and continuously optimize for peak performance." },
  { step: "04", icon: "fa-chart-line", title: "Growth & Support", desc: "Ongoing maintenance, updates, and marketing to ensure continued success." },
];

const testimonials = [
  { name: "Michael Chen", company: "GPS Vehicle Inspections", text: "Sydney Web Designer completely transformed our online presence. The new website looks amazing and we've seen a 300% increase in inquiries.", rating: 5 },
  { name: "Sarah Thompson", company: "Actuate Property", text: "Outstanding service from start to finish. They created a beautiful brand identity and website that perfectly represents our business.", rating: 5 },
  { name: "David Martinez", company: "Two Brothers Removalist", text: "The SEO results have been incredible. We're now ranking #1 for multiple keywords and getting more calls than ever before.", rating: 5 },
];

const industries = [
  { icon: "fa-building", name: "Real Estate" },
  { icon: "fa-truck", name: "Logistics" },
  { icon: "fa-heartbeat", name: "Healthcare" },
  { icon: "fa-utensils", name: "Hospitality" },
  { icon: "fa-hard-hat", name: "Construction" },
  { icon: "fa-shopping-bag", name: "Retail" },
  { icon: "fa-graduation-cap", name: "Education" },
  { icon: "fa-briefcase", name: "Professional Services" },
  { icon: "fa-wrench", name: "Home Services" },
  { icon: "fa-car", name: "Automotive" },
  { icon: "fa-dumbbell", name: "Fitness & Wellness" },
  { icon: "fa-landmark", name: "Finance" },
];

const methodology = [
  { category: "Strategy & Foundation", icon: "fa-lightbulb", items: ["Purpose & business alignment", "Brand identity & positioning", "Content strategy", "Information architecture", "Clear onboarding (for SaaS)"] },
  { category: "User Experience", icon: "fa-user-check", items: ["User experience (UX) design", "User interface design (UI)", "Visual hierarchy", "Navigation clarity", "Micro-interactions & motion design"] },
  { category: "Design Excellence", icon: "fa-paint-brush", items: ["Typography & readability", "Color theory & contrast", "Design consistency system", "Component library", "Progressive enhancement"] },
  { category: "Accessibility & Standards", icon: "fa-universal-access", items: ["WCAG compliance", "Keyboard navigation", "Assistive technology support", "Semantic HTML structure", "Plain language content"] },
  { category: "Performance & Speed", icon: "fa-tachometer-alt", items: ["Core Web Vitals optimization", "Performance & speed tuning", "Image & asset optimization", "Caching strategy", "Database efficiency"] },
  { category: "SEO & Visibility", icon: "fa-search", items: ["Technical SEO", "On-page & off-page SEO", "Structured data (schema markup)", "Meta data optimization", "Domain authority building"] },
  { category: "Security & Compliance", icon: "fa-shield-alt", items: ["HTTPS & SSL certificates", "XSS/CSRF protection", "Authentication & authorization", "Privacy compliance (GDPR)", "Input validation"] },
  { category: "Responsive & Compatible", icon: "fa-mobile-alt", items: ["Mobile-first responsive design", "Tablet & desktop optimization", "Cross-browser compatibility", "Graceful degradation", "PWA capability (when relevant)"] },
  { category: "Conversion & Marketing", icon: "fa-chart-line", items: ["Conversion rate optimization (CRO)", "Clear CTAs", "Trust signals & social proof", "A/B testing capability", "Analytics & tracking"] },
  { category: "Infrastructure & Scalability", icon: "fa-server", items: ["Scalable architecture", "Hosting reliability", "Server performance", "API reliability", "Load handling & stress resilience"] },
  { category: "Code Quality & Testing", icon: "fa-code", items: ["Clean code & modularity", "Code quality standards", "Testing (unit, integration, E2E)", "Version control", "Technical debt management"] },
  { category: "Deployment & Support", icon: "fa-rocket", items: ["CI/CD deployment strategy", "Monitoring & logging", "Backup & disaster recovery", "Ongoing maintenance", "User feedback loops"] },
];

const benefits = [
  { icon: "fa-award", title: "Award-Winning Design", desc: "Recognised by Sydney's digital industry for excellence in web design, from local startups in Surry Hills to enterprise brands in the CBD." },
  { icon: "fa-clock", title: "Serving Sydney Since 2013", desc: "Over 13 years working with Sydney businesses across Parramatta, the North Shore, Inner West, and everywhere in between, with the results to prove it." },
  { icon: "fa-users", title: "Local Team, Local Hours", desc: "A Sydney-based team you can actually call — no outsourcing, no overseas handoffs, no time zone headaches — just real people who know your market." },
  { icon: "fa-chart-line", title: "Results That Matter to Sydney Businesses", desc: "We measure success the way you do: more leads, higher conversions, and ROI that justifies every dollar. Because in a competitive market like Sydney, rankings alone don't pay the bills." },
];

const technologies = [
  { icon: "fa-react", name: "React", color: "#61DAFB", brand: true },
  { icon: "fa-code", name: "Next.js", color: "#000000", isSolid: true },
  { icon: "fa-node-js", name: "Node.js", color: "#339933", brand: true },
  { icon: "fa-wordpress", name: "WordPress", color: "#21759B", brand: true },
  { icon: "fa-shopify", name: "Shopify", color: "#7AB55C", brand: true },
  { icon: "fa-laravel", name: "Laravel", color: "#FF2D20", brand: true },
  { icon: "fa-figma", name: "Figma", color: "#F24E1E", brand: true },
  { icon: "fa-layer-group", name: "Adobe XD", color: "#FF61F6", isSolid: true },
  { icon: "fa-window-maximize", name: "Webflow", color: "#4353FF", isSolid: true },
  { icon: "fa-php", name: "PHP", color: "#777BB4", brand: true },
  { icon: "fa-python", name: "Python", color: "#3776AB", brand: true },
  { icon: "fa-js-square", name: "JavaScript", color: "#F7DF1E", brand: true },
  { icon: "fa-html5", name: "HTML5", color: "#E34F26", brand: true },
  { icon: "fa-css3-alt", name: "CSS3", color: "#1572B6", brand: true },
  { icon: "fa-sass", name: "Sass", color: "#CC6699", brand: true },
  { icon: "fa-google", name: "Google Ads", color: "#4285F4", brand: true },
  { icon: "fa-facebook", name: "Meta Ads", color: "#1877F2", brand: true },
  { icon: "fa-bootstrap", name: "Bootstrap", color: "#7952B3", brand: true },
];

export default function HomePage() {
  const breadcrumbs = [{ name: "Home", url: "https://www.sydneywebdesigner.com.au" }];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }} />

      <EditorialHero />

      <section className="home-intro paper-grain">
        <HomeReveal className="home-wrap home-intro__inner">
          <span className="home-intro__mark" aria-hidden="true">“</span>
          <p className="home-intro__copy">
            <strong>Sydney Web Designer</strong> is a Parramatta-based web design studio with <strong>13+ years of experience</strong> helping Sydney businesses grow online. We've delivered <strong>500+ websites</strong> across industries from healthcare to retail, combining strategy, design, and SEO under one roof.
          </p>
        </HomeReveal>
      </section>

      <section className="home-section home-services paper-grain">
        <div className="home-wrap">
          <HomeReveal className="home-heading">
            <span className="home-kicker">What We Do</span>
            <h2 className="home-title">Our <span>Services</span></h2>
            <p className="home-copy">We don't just build websites — we engineer digital ecosystems where psychology meets infrastructure, and design meets systems thinking</p>
          </HomeReveal>
          <div className="home-services__grid">
            {services.map((service, index) => (
              <HomeReveal key={service.title} delay={index * 0.06}>
                <Link href={service.link} className="home-service-card group">
                  <div className="home-service-card__top">
                    <span className="home-service-card__number">0{index + 1}</span>
                    <i className={`fas ${service.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="home-text-link">Learn More<i className="fas fa-arrow-right" aria-hidden="true" /></span>
                </Link>
              </HomeReveal>
            ))}
          </div>
          <HomeReveal className="home-section__link">
            <Link href="/services" className="home-text-link">View All Services<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
          </HomeReveal>
        </div>
      </section>
      

      <section className="home-editorial-tech paper-grain">
        <div className="home-wrap">
          <HomeReveal className="home-editorial-tech__heading">
            <span className="home-kicker">Technologies</span>

            <h2 className="home-title">
              Built with <span>Modern Tech</span>
            </h2>

            <p className="home-copy">
              We use cutting-edge technologies to build fast, secure, and
              scalable websites
            </p>
          </HomeReveal>
        </div>

        <div className="home-editorial-tech__marquee">
          <div className="home-editorial-tech__track">
            {[...technologies, ...technologies].map((tech, index) => (
              <article
                key={`${tech.name}-${index}`}
                className="home-editorial-tech-card"
              >
                <i
                  className={`${tech.isSolid ? "fas" : tech.brand ? "fab" : "fas"} ${tech.icon}`}
                  style={{ color: tech.color }}
                  aria-hidden="true"
                />

                <h3>{tech.name}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="home-wrap">
          <HomeReveal className="home-editorial-tech__security">
            <i className="fas fa-shield-alt" aria-hidden="true" />

            <div>
              <strong>Enterprise-Grade Security</strong>
              <span>SSL, GDPR compliance, and regular updates</span>
            </div>
          </HomeReveal>
        </div>
      </section>

      <section className="home-section home-projects">
        <div className="home-wrap">
          <HomeReveal className="home-heading home-heading--split">
            <div>
              <span className="home-kicker">Our Work</span>
              <h2 className="home-title">Featured <span>Projects</span></h2>
            </div>
            <p className="home-copy">See how we've helped businesses transform their digital presence</p>
          </HomeReveal>
          <div className="home-projects__grid">
            {portfolioProjects.slice(0, 6).map((project, index) => (
              <HomeReveal key={project.id} delay={index * 0.045}>
                <article className="home-project-card">
                  <PortfolioCarousel images={project.images || [project.image]} title={project.name} />
                  <div className="home-project-card__body">
                    <span className="home-project-card__tag">{project.industry}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project.websiteUrl && (
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="home-text-link">
                        View Website<i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </HomeReveal>
            ))}
          </div>
          <HomeReveal className="home-section__link">
            <Link href="/portfolio" className="paper-button paper-button--rust">View Full Portfolio<i className="fas fa-arrow-right text-xs" aria-hidden="true" /></Link>
          </HomeReveal>
        </div>
      </section>

      <section className="home-section home-process paper-grain">
        <div className="home-wrap">
          <HomeReveal className="home-heading">
            <span className="home-kicker">Our Process</span>
            <h2 className="home-title">How We <span>Work</span></h2>
            <p className="home-copy">A proven process that delivers exceptional results, every time</p>
          </HomeReveal>
          <div className="home-process__grid">
            {processSteps.map((process, index) => (
              <HomeReveal key={process.step} delay={index * 0.055}>
                <article className="home-process-card">
                  <div className="home-process-card__head"><span>{process.step}</span><i className={`fas ${process.icon}`} aria-hidden="true" /></div>
                  <h3>{process.title}</h3>
                  <p>{process.desc}</p>
                </article>
              </HomeReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials">
        <div className="home-wrap">
          <HomeReveal className="home-heading">
            <span className="home-kicker">Testimonials</span>
            <h2 className="home-title">What Our <span>Clients Say</span></h2>
            <p className="home-copy">Don't just take our word for it - hear from businesses we've helped succeed</p>
          </HomeReveal>
          <div className="home-testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <HomeReveal key={testimonial.name} delay={index * 0.055}>
                <article className="home-testimonial">
                  <div className="home-testimonial__stars">
                    {[...Array(testimonial.rating)].map((_, starIndex) => <i key={starIndex} className="fas fa-star" aria-hidden="true" />)}
                  </div>
                  <p>"{testimonial.text}"</p>
                  <footer>
                    <span className="home-testimonial__initial">{testimonial.name[0]}</span>
                    <div><strong>{testimonial.name}</strong><span>{testimonial.company}</span></div>
                  </footer>
                </article>
              </HomeReveal>
            ))}
          </div>
          <HomeReveal className="home-section__link">
            <Link href="/testimonials" className="home-text-link">View All Testimonials<i className="fas fa-arrow-right" aria-hidden="true" /></Link>
          </HomeReveal>
        </div>
      </section>

      <section className="home-section home-about paper-grain">
        <div className="home-wrap home-about__grid">
          <HomeReveal>
            <span className="home-kicker">About Us</span>
            <h2 className="home-title">About <span>Sydney Web Designer</span></h2>
          </HomeReveal>
          <HomeReveal delay={0.07} className="home-about__copy">
            <p>Founded in Sydney in 2013, <strong>Sydney Web Designer</strong> has grown from a boutique studio to a full-service digital agency trusted by <strong>500+ Australian businesses</strong>. Our team of designers, developers, and marketers work from our <strong>Parramatta office</strong>, close to our clients, invested in their outcomes.</p>
            <p>We specialise in creating custom websites, implementing SEO strategies, and building brands that resonate with Australian audiences. From local startups to established enterprises across Sydney's North Shore, Inner West, and greater metropolitan area, we deliver digital solutions that drive real business growth.</p>
          </HomeReveal>
        </div>
      </section>
      <section className="home-section home-methodology paper-grain">
        <div className="home-wrap">
          <HomeReveal className="home-heading">
            <span className="home-kicker">Our Methodology</span>
            <h2 className="home-title">More Than Code — <span>Complete Ecosystems</span></h2>
            <p className="home-copy home-copy--wide">A website isn't just HTML + CSS + JS. It's psychology, infrastructure, marketing, security engineering, and systems design wearing a friendly UI mask. We optimize the right pillars for your context.</p>
          </HomeReveal>
          <div className="home-methodology__grid">
            {methodology.map((pillar, index) => (
              <HomeReveal key={pillar.category} delay={(index % 3) * 0.04}>
                <article className="home-pillar">
                  <div className="home-pillar__head"><i className={`fas ${pillar.icon}`} aria-hidden="true" /><h3>{pillar.category}</h3></div>
                  <ul>{pillar.items.map((item) => <li key={item}><i className="fas fa-check" aria-hidden="true" /><span>{item}</span></li>)}</ul>
                </article>
              </HomeReveal>
            ))}
          </div>
          <HomeReveal className="home-methodology__statement">
            <h3>From Mid-Level to Senior: <span>Systems Thinking</span></h3>
            <p>Perfection isn't about maxing every pillar — it's about optimizing the right pillars for your context. A portfolio site doesn't need horizontal scaling architecture. A fintech platform absolutely does. This is where websites stop being projects and start being ecosystems.</p>
          </HomeReveal>
        </div>
      </section>

      <section className="home-section home-trust">
        <div className="home-wrap home-trust__grid">
          <div>
            <HomeReveal>
              <span className="home-kicker">Why Choose Us</span>
              <h2 className="home-title">Sydney's Most Trusted Web Design <span>Partner</span></h2>
              <p className="home-copy">We don't just build websites — we create digital experiences that drive real business growth for Sydney businesses.</p>
            </HomeReveal>
            <div className="home-benefits">
              {benefits.map((benefit, index) => (
                <HomeReveal key={benefit.title} delay={index * 0.045}>
                  <article className="home-benefit">
                    <i className={`fas ${benefit.icon}`} aria-hidden="true" />
                    <div><h3>{benefit.title}</h3><p>{benefit.desc}</p></div>
                  </article>
                </HomeReveal>
              ))}
            </div>
          </div>
          <HomeReveal delay={0.09} className="home-trust__poster">
            <i className="fas fa-laptop-code" aria-hidden="true" />
            <p>500+ Websites</p>
            <span>Trusted by Sydney businesses</span>
            <div className="home-trust__badge"><strong>100%</strong><span>Satisfaction</span></div>
          </HomeReveal>
        </div>
      </section>

<section className="home-editorial-industries">
        <div className="home-wrap">
          <HomeReveal className="home-editorial-industries__heading">
            <div>
              <span className="home-kicker">Industries We Serve</span>

              <h2 className="home-title">
                Expertise Across <span>All Industries</span>
              </h2>
            </div>

            <p className="home-copy">
              From startups to established enterprises, we deliver tailored
              solutions for every sector
            </p>
          </HomeReveal>

          <div className="home-editorial-industries__grid">
            {industries.map((industry, index) => (
              <HomeReveal key={industry.name} delay={(index % 4) * 0.035}>
                <article className="home-editorial-industry-card">
                  <div className="home-editorial-industry-card__top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <i
                      className={`fas ${industry.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3>{industry.name}</h3>
                </article>
              </HomeReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="home-cta">
        <div className="home-wrap">
          <HomeReveal className="home-cta__inner">
            <span className="home-kicker">Sydney Web Designer</span>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's create something amazing together. Get your free consultation and custom quote today.</p>
            <div className="home-cta__actions">
              <button type="button" data-popup="contact" className="paper-button paper-button--rust">Get Free Quote<i className="fas fa-arrow-right text-xs" aria-hidden="true" /></button>
              <a href={`tel:${contactInfo.phoneLink}`} className="paper-button home-cta__phone"><i className="fas fa-phone text-sm" aria-hidden="true" />(02) 8068 0688</a>
            </div>
          </HomeReveal>
        </div>
      </section>
    </>
  );
}
