import { services } from "@/lib/constants";
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
  title: "E-commerce Website Design Sydney | Online Store Development",
  description: "Professional e-commerce website design in Sydney. Build profitable online stores with WooCommerce and custom solutions. Secure payment gateways, inventory management, and more.",
  keywords: "ecommerce website sydney, online store design sydney, woocommerce sydney, ecommerce development, online shop design, shopping cart website sydney",
  canonicalUrl: "https://www.sydneywebdesigner.com.au/services/ecommerce-websites",
  ogImage: "/images/og/services.svg",
});

export default function EcommerceWebsitesPage() {
  const service = services.find((s) => s.slug === "ecommerce-websites")!;

  const breadcrumbs = [
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Services", url: "https://www.sydneywebdesigner.com.au/services" },
    { name: "E-commerce Websites", url: "https://www.sydneywebdesigner.com.au/services/ecommerce-websites" }
  ];

  const faqs = [
    {
      question: "Which e-commerce platform do you recommend?",
      answer: "We primarily build on WooCommerce (WordPress) and Shopify, choosing based on your specific needs. WooCommerce offers maximum flexibility and customization for complex requirements, while Shopify provides ease of use and quick setup. We will recommend the best platform after understanding your products, volume, and business goals."
    },
    {
      question: "How much does an e-commerce website cost?",
      answer: "E-commerce websites typically range from $5,000 to $30,000+ depending on the number of products, custom features, integrations, and design complexity. We provide detailed quotes after understanding your requirements. Ongoing costs include hosting, payment gateway fees, and optional maintenance."
    },
    {
      question: "Can you migrate my existing online store to a new platform?",
      answer: "Yes! We specialize in e-commerce migrations. We can transfer your products, categories, customer data, and order history from your current platform to a new one. We ensure zero downtime and preserve your SEO rankings during the migration process."
    },
    {
      question: "What payment gateways can you integrate?",
      answer: "We integrate all major payment gateways including Stripe, PayPal, Square, Afterpay, Zip Pay, and Australian bank gateways like CommBank, Westpac, and NAB. We will recommend the best options based on your target market and transaction volumes."
    },
    {
      question: "Will my e-commerce site be secure for customer payments?",
      answer: "Absolutely! We implement SSL certificates, PCI-compliant payment processing, secure checkout flows, and regular security updates. Payment information is processed directly through certified payment gateways, never stored on your website, ensuring maximum security for your customers."
    },
    {
      question: "Can you help with product photography and descriptions?",
      answer: "Yes! We offer product photography services and professional copywriting for product descriptions. Quality images and compelling descriptions are crucial for e-commerce success. We can handle everything from product styling and photography to SEO-optimized descriptions that convert."
    }
  ];

  const relatedServices = [
    {
      title: "Custom Web Design",
      description: "Bespoke website design that perfectly showcases your brand and products.",
      href: "/services/custom-web-design",
      icon: "fas fa-desktop"
    },
    {
      title: "SEO Services",
      description: "Product and category optimization to drive organic traffic and sales.",
      href: "/services/seo-sydney",
      icon: "fas fa-search"
    },
    {
      title: "Google Ads",
      description: "PPC campaigns to drive immediate traffic and sales to your online store.",
      href: "/services/google-ads",
      icon: "fab fa-google"
    }
  ];

  const trustBadges = [
    { icon: "fa-trophy", text: "13+ Years Experience" },
    { icon: "fa-star", text: "50+ 5-Star Reviews" },
    { icon: "fa-check", text: "Professional Service" },
    { icon: "fa-chart-line", text: "Proven Results" },
  ];

  const stats = [
    { value: "100+", text: "Stores Launched" },
    { value: "$5M+", text: "Revenue Generated" },
    { value: "3.2%", text: "Avg Conversion" },
    { value: "50+", text: "Integrations" },
  ];

  const features = [
    { icon: "fas fa-shopping-cart", title: "Store Setup", description: "Complete store build", points: ["Product catalogs", "Categories", "Filters", "Search"] },
    { icon: "fas fa-credit-card", title: "Payments", description: "Secure payment processing", points: ["Multiple gateways", "Secure checkout", "Currency support", "Subscriptions"] },
    { icon: "fas fa-box", title: "Shipping", description: "Shipping integration", points: ["Shipping zones", "Rate calculation", "Tracking", "Fulfillment"] },
    { icon: "fas fa-chart-bar", title: "Inventory", description: "Stock management", points: ["Inventory tracking", "Low stock alerts", "SKU management", "Variants"] },
    { icon: "fas fa-mobile-alt", title: "Mobile Commerce", description: "Mobile shopping", points: ["Mobile optimized", "App-like UX", "Fast checkout", "Touch-friendly"] },
    { icon: "fas fa-search", title: "E-commerce SEO", description: "Product visibility", points: ["Product optimization", "Schema markup", "Site speed", "Content strategy"] },
  ];

  const process = [
    { number: "1", title: "Discovery", description: "Deep dive into your business, goals, and requirements" },
    { number: "2", title: "Strategy", description: "Develop custom strategy based on research and analysis" },
    { number: "3", title: "Planning", description: "Create detailed roadmap and project timeline" },
    { number: "4", title: "Execution", description: "Implement solution with attention to detail" },
    { number: "5", title: "Testing", description: "Thorough quality assurance and optimization" },
    { number: "6", title: "Launch & Support", description: "Deploy and provide ongoing support" },
  ];

  const caseStudies = [
    { name: "Castor Master", industry: "Industrial Equipment", description: "E-commerce store with complex product configurations and wholesale ordering" },
    { name: "Online Retailer", industry: "Fashion & Apparel", description: "Multi-category store with 500+ products and seamless checkout experience" },
  ];

  const testimonials = [
    { text: "Professional, responsive, and delivered exactly what we needed. The results have been fantastic and we've seen significant improvements.", name: "Sydney Business Owner", detail: "Professional Services" },
    { text: "The team at Sydney Web Designer took the time to understand our business. Their expertise and transparent approach made the entire process smooth.", name: "Local Business", detail: "Parramatta, NSW" },
    { text: "Highly recommend Sydney Web Designer for their professionalism and quality of work. They exceeded our expectations in every way.", name: "Sydney Client", detail: "Service Provider" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceHeroSection
        h1="Ecommerce Website Development"
        badge={{ icon: `fas ${service.icon}`, text: service.name }}
        heading="E-commerce Websites Sydney"
        description="Build a profitable online store with expert e-commerce solutions. From products to payments, we handle everything."
        buttons={{
          primary: { text: "Start Your Store", dataPopup: "contact" },
          secondary: { text: "Our Process", href: "#process" },
        }}
      />

      <ServiceTrustStrip badges={trustBadges} />

      <ServiceStatsSection title={<>Why Choose E-commerce Websites <span>Sydney</span>?</>} stats={stats} />

      <ServiceFeaturesSection
        title={<>Our E-commerce Websites Sydney <span>Services</span></>}
        description="Comprehensive solutions designed to help your business succeed"
        features={features}
      />

      <ServiceProcessSection
        title={<>Our Proven <span>Process</span></>}
        description="A systematic approach to deliver outstanding results"
        steps={process}
      />

      <ServiceResultsSection title={<>Real Results for Sydney <span>Businesses</span></>} projects={caseStudies} />

      <ServiceTestimonialsSection title={<>What Our Clients <span>Say</span></>} testimonials={testimonials} />

      <ServiceFAQSection
        title={<>Frequently Asked <span>Questions</span></>}
        description="Everything you need to know about e-commerce websites"
        faqs={faqs}
      />

      <RelatedServices services={relatedServices} />

      <ServiceLeadPanel
        id="lead-form"
        title="Get Your Free Consultation"
        description="Tell us about your project and we'll provide expert advice and a custom quote"
      >
        <ServiceInlineLeadForm
          service="ecommerce-websites"
          buttonText="Start Your Store"
        />
      </ServiceLeadPanel>
    </>
  );
}
