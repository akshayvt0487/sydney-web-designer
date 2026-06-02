import type { Metadata } from "next";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schemas";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import CTASection from "@/components/CTASection";
import ServiceFeaturesSection from "@/components/service-page/ServiceFeaturesSection";
import ServiceProcessSection from "@/components/service-page/ServiceProcessSection";

export const metadata: Metadata = {
  title: "Vibe Code Website Development | Convert AI Designs to Real Websites",
  description:
    "Transform your Vibe-coded website designs into fully functional websites. We support WordPress, Next.js, PHP, and any tech stack. Expert conversion services in Sydney.",
  keywords:
    "vibe code website, ai website design, convert vibe to website, vibe code development, next.js development, wordpress development, sydney web developer",
};

export default function VibeCodeWebsitePage() {
  const serviceSchema = generateServiceSchema(
    "Vibe Code Website Development",
    "Transform your Vibe-coded website designs into fully functional, production-ready websites on any technology stack including WordPress, Next.js, PHP, and more.",
    "/services/vibe-code-website"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/web-design" },
    {
      name: "Vibe Code Website",
      url: "https://www.sydneywebdesigner.com.au/services/vibe-code-website",
    },
  ]);

  const techStacks = [
    {
      name: "Next.js",
      icon: "fa-react",
      iconFamily: "fab",
      description: "Modern React framework for production-ready applications",
      features: ["SEO Optimized", "Lightning Fast", "Server-Side Rendering"],
    },
    {
      name: "WordPress",
      icon: "fa-wordpress",
      iconFamily: "fab",
      description: "Powerful CMS for easy content management",
      features: ["User Friendly", "Plugin Ecosystem", "Easy Updates"],
    },
    {
      name: "PHP/Laravel",
      icon: "fa-php",
      iconFamily: "fab",
      description: "Custom backend solutions for complex requirements",
      features: ["Scalable", "Secure", "Flexible"],
    },
    {
      name: "Shopify",
      icon: "fa-shopping-cart",
      iconFamily: "fas",
      description: "E-commerce platform for online stores",
      features: ["Easy Setup", "Payment Ready", "Store Management"],
    },
    {
      name: "Custom Stack",
      icon: "fa-code",
      iconFamily: "fas",
      description: "Any technology stack tailored to your needs",
      features: ["Your Choice", "Fully Custom", "Optimized"],
    },
  ];

  const conversionProcess = [
    {
      step: "01",
      title: "Share Your Vibe Design",
      description:
        "Provide your Vibe-coded website design or let us create one for you",
      icon: "fa-file-code",
    },
    {
      step: "02",
      title: "Technology Selection",
      description:
        "We recommend the best tech stack based on your requirements and budget",
      icon: "fa-laptop-code",
    },
    {
      step: "03",
      title: "Professional Development",
      description:
        "Our expert developers convert your design into a fully functional website",
      icon: "fa-code",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing across devices, browsers, and performance optimization",
      icon: "fa-check-circle",
    },
    {
      step: "05",
      title: "Launch & Support",
      description:
        "Deploy your website and provide ongoing support and maintenance",
      icon: "fa-rocket",
    },
  ];

  const features = [
    {
      icon: "fa-bolt",
      title: "Lightning Fast",
      description: "Optimized code for blazing-fast load times",
    },
    {
      icon: "fa-mobile-alt",
      title: "Fully Responsive",
      description: "Perfect on all devices and screen sizes",
    },
    {
      icon: "fa-search",
      title: "SEO Optimized",
      description: "Built with search engine optimization in mind",
    },
    {
      icon: "fa-shield-alt",
      title: "Secure & Reliable",
      description: "Industry-standard security practices",
    },
    {
      icon: "fa-chart-line",
      title: "Scalable",
      description: "Grows with your business needs",
    },
    {
      icon: "fa-headset",
      title: "Ongoing Support",
      description: "Maintenance and updates included",
    },
  ];

  const vibeSteps = [
    {
      icon: "fa-wand-magic-sparkles",
      title: "AI Design Creation",
      text: "Generate beautiful designs with Vibe AI",
    },
    {
      icon: "fa-code",
      title: "Professional Development",
      text: "Expert developers bring it to life",
    },
    {
      icon: "fa-rocket",
      title: "Launch & Scale",
      text: "Production-ready website that grows with you",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="vibe-editorial-page">
        <ServiceHeroSection
          h1="Vibe Code Website Development"
          badge={{ icon: "fas fa-code", text: "AI-Powered Design to Reality" }}
          heading="Convert Your Vibe Code Design to a Real Website"
          description="Transform AI-generated designs into production-ready websites on any technology stack"
          buttons={{
            primary: { text: "Get Free Quote", dataPopup: "contact" },
            secondary: { text: "View Our Work", href: "/portfolio" },
          }}
        />

        {/* What is Vibe Code */}
        <section className="vibe-intro paper-grain">
          <div className="container">
            <div className="vibe-intro__grid">
              <div className="vibe-intro__copy">
                <div className="vibe-heading">
                  <h2>
                    What is Vibe <span>Code</span>?
                  </h2>
                </div>

                <p>
                  Vibe is an AI-powered design tool that allows you to create
                  stunning website designs through simple prompts and
                  iterations. While Vibe creates beautiful designs, converting
                  them into real, functional websites requires professional
                  development expertise.
                </p>

                <p>
                  That&apos;s where we come in. We take your Vibe-coded designs
                  and transform them into fully functional, production-ready
                  websites on any technology stack you prefer.
                </p>

                <div className="vibe-intro__note">
                  <strong>
                    <i className="fas fa-lightbulb" aria-hidden="true" />
                    Don&apos;t have a Vibe design yet?
                  </strong>

                  <p>
                    No worries! We can create a custom design for you or work
                    with your existing ideas.
                  </p>
                </div>
              </div>

              <div className="vibe-flow">
                {vibeSteps.map((item, index) => (
                  <article key={item.title} className="vibe-flow__card">
                    <span className="vibe-flow__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="vibe-flow__icon">
                      <i className={`fas ${item.icon}`} aria-hidden="true" />
                    </div>

                    <div className="vibe-flow__content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="vibe-stacks">
          <div className="container">
            <header className="vibe-heading vibe-heading--dark vibe-heading--center">
              <h2>
                Any Technology <span>Stack</span>
              </h2>

              <p>
                We convert your Vibe design into any platform or framework that
                suits your needs
              </p>
            </header>

            <div className="vibe-stacks__grid">
              {techStacks.map((stack, index) => (
                <article key={stack.name} className="vibe-stack-card">
                  <div className="vibe-stack-card__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <div className="vibe-stack-card__icon">
                      <i
                        className={`${stack.iconFamily} ${stack.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{stack.name}</h3>

                  <p>{stack.description}</p>

                  <ul>
                    {stack.features.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceProcessSection
          title={
            <>
              Our Conversion <span>Process</span>
            </>
          }
          description="From Vibe design to live website in 5 simple steps"
          steps={conversionProcess.map((item) => ({
            number: item.step,
            title: item.title,
            description: item.description,
          }))}
        />

        <ServiceFeaturesSection
          title={
            <>
              Why Choose Us for Vibe <span>Conversion</span>?
            </>
          }
          description="We deliver production-ready websites with all the features you need"
          features={features.map((item) => ({
            icon: `fas ${item.icon}`,
            title: item.title,
            description: item.description,
          }))}
        />

        <CTASection
          title="Ready to Bring Your Vibe Design to Life?"
          description="Let's transform your AI-generated design into a fully functional, production-ready website"
          primaryButtonText="Get Free Consultation"
          primaryButtonAction="contact"
          secondaryButtonText="Contact Us"
        />
      </div>
    </>
  );
}