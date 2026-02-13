import type { Metadata } from "next";
import Link from "next/link";
import { services, portfolioProjects, googleReviews } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schemas";
import StatsGrid from "@/components/StatsGrid";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Responsive Web Design Sydney | Mobile-Friendly Websites",
  description: "Professional responsive web design in Sydney. Ensure your website delivers a flawless experience across smartphones, tablets, and desktops. Mobile-first approach.",
};

export default function ResponsiveDesignPage() {
  const service = services.find((s) => s.slug === "responsive-design")!;
  const webProjects = portfolioProjects.filter((p) => p.services.includes("Web Design"));
  const webReviews = googleReviews.slice(0, 3);

  const stats = [
    { label: "Mobile Traffic", number: "65%" },
    { label: "Responsive Sites Built", number: "200+" },
    { label: "Devices Tested", number: "50+" },
    { label: "Mobile Conversion Lift", number: "180%" },
  ];

  const features = [
    {
      title: "Mobile-First Design",
      description: "Prioritize mobile experience with designs that work beautifully on smartphones first.",
      icon: "📱",
    },
    {
      title: "Flexible Layouts",
      description: "Fluid grids that automatically adapt to any screen size for perfect display.",
      icon: "🎨",
    },
    {
      title: "Touch Optimized",
      description: "Buttons and navigation optimized for touch interaction on mobile devices.",
      icon: "👆",
    },
    {
      title: "Fast Loading",
      description: "Optimized images and code for quick loading on mobile networks.",
      icon: "⚡",
    },
    {
      title: "Cross-Browser",
      description: "Consistent experience across all major browsers and operating systems.",
      icon: "🌐",
    },
    {
      title: "Future-Proof",
      description: "Designs that adapt to new devices and screen sizes as they emerge.",
      icon: "🚀",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Mobile Analysis",
      description: "Analyze your current mobile traffic and identify user behavior patterns.",
    },
    {
      step: 2,
      title: "Responsive Strategy",
      description: "Plan breakpoints, layouts, and interactions for different device sizes.",
    },
    {
      step: 3,
      title: "Design & Develop",
      description: "Create mobile-first designs and build with responsive frameworks.",
    },
    {
      step: 4,
      title: "Test & Optimize",
      description: "Test on real devices and optimize for performance across all screen sizes.",
    },
  ];

  const faqs = [
    {
      question: "Why is responsive design important?",
      answer: "Over 65% of web traffic now comes from mobile devices. Google also prioritizes mobile-friendly sites in search rankings. A responsive website ensures all visitors have a great experience regardless of their device.",
    },
    {
      question: "What&apos;s the difference between responsive and mobile site?",
      answer: "A responsive website adapts to any screen size using one codebase, while a separate mobile site requires maintaining two different websites. Responsive design is more cost-effective and recommended by Google.",
    },
    {
      question: "Will my existing website content work on mobile?",
      answer: "Most content will work, but we may recommend adjustments to headlines, paragraph length, and image sizing for better mobile readability. We'll guide you through any necessary content optimizations.",
    },
    {
      question: "How do you test responsive designs?",
      answer: "We test on real devices including iPhones, iPads, Android phones and tablets, as well as desktop browsers. We also use browser developer tools and responsive testing platforms to ensure perfect display across all screen sizes.",
    },
    {
      question: "Can you make my existing website responsive?",
      answer: "Yes! We can retrofit existing websites with responsive design. Depending on your current site's structure, this may involve redesigning certain elements or rebuilding the site with a responsive framework.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service.name, service.heroDescription)),
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary-orange/20 text-primary-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {service.icon} {service.name}
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              Responsive Design That Works Perfectly On Every Device
            </h1>
            <p className="text-xl text-white mb-8">
              Ensure your website delivers a flawless experience across smartphones, tablets, and desktops. Mobile-first approach that captures all your visitors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button data-popup="contact" className="btn btn-primary">
                Get Mobile-Friendly Website
              </button>
              <Link href="/portfolio" className="btn btn-white">
                View Responsive Designs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Complete Responsive Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Every element optimized for perfect display on any screen size.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Responsive Design Process</h2>
            <p className="text-xl text-gray-600">
              Mobile-first methodology for maximum reach and engagement.
            </p>
          </div>

          <div className="grid-2 max-w-4xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {webProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Responsive Design Portfolio</h2>
              <p className="text-xl text-gray-600">
                Websites that look perfect on every device and screen size.
              </p>
            </div>

            <div className="grid-3">
              {webProjects.slice(0, 6).map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio" className="btn btn-primary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Businesses reaching more customers with responsive websites.
            </p>
          </div>

          <div className="grid-3">
            {webReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn btn-primary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Responsive Design Pricing</h2>
            <p className="text-xl text-gray-600">
              Affordable mobile-friendly websites for every business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card border-2 border-primary-orange">
              <div className="text-center mb-8">
                <div className="text-primary-orange font-bold mb-2">Complete Package</div>
                <h3 className="text-3xl font-bold mb-2">Responsive Website</h3>
                <div className="text-5xl font-bold text-primary-orange mb-4">$4,500<span className="text-xl text-gray-600">+</span></div>
                <p className="text-gray-600">Mobile-first design for all devices</p>
              </div>

              <div className="grid-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Mobile-first design approach</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Tablet & desktop optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Touch-optimized interface</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Cross-browser testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Performance optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Google mobile-friendly certified</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Real device testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">30 days post-launch support</span>
                </div>
              </div>

              <div className="text-center">
                <button data-popup="contact" className="btn btn-primary w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              Need to make existing website responsive?{" "}
              <button data-popup="contact" className="text-primary-orange font-semibold hover:underline">
                Contact us for retrofit pricing
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about responsive web design.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready for a Mobile-Friendly Website?"
        description="Reach more customers with a responsive website that works perfectly on every device."
        primaryButtonText="Get Responsive Design"
        primaryButtonAction="contact"
      />
    </>
  );
}
