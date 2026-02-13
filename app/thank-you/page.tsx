import Link from "next/link";
import { Suspense } from "react";

interface ThankYouPageProps {
  searchParams: {
    type?: string;
  };
}

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const formType = searchParams.type || "contact";

  const getThankYouContent = (type: string) => {
    const contentMap: Record<string, { title: string; message: string; nextStep: string; icon: string }> = {
      contact: {
        title: "We've Got Your Message!",
        message: "Thanks for reaching out! Our team will review your inquiry and get back to you within 24 hours. We're excited to help you grow your business online.",
        nextStep: "Check your email for a confirmation message",
        icon: "fas fa-envelope-open-text",
      },
      seoAudit: {
        title: "SEO Audit Requested!",
        message: "Excellent choice! Our SEO experts will analyze your website and send you a comprehensive audit report within the next 48 hours with actionable recommendations.",
        nextStep: "Get ready to discover untapped SEO opportunities",
        icon: "fas fa-search",
      },
      adsAudit: {
        title: "Google Ads Audit Scheduled!",
        message: "Perfect! Our paid advertising specialists will review your Google Ads campaigns and provide detailed insights on how to improve your ROI and reduce wasted spend.",
        nextStep: "We'll share proven optimization strategies soon",
        icon: "fas fa-chart-line",
      },
      consultation: {
        title: "Consultation Booked!",
        message: "Great! We're looking forward to chatting with you. Our team will confirm your consultation slot shortly. This is your chance to discuss all your digital marketing goals.",
        nextStep: "Check your email for the meeting details and Zoom link",
        icon: "fas fa-video",
      },
      careerApplication: {
        title: "Application Received!",
        message: "Thank you for your interest in joining the Sydney Web Designer team! We've received your application and will review it carefully. We'll be in touch if your profile matches our needs.",
        nextStep: "Keep an eye on your inbox for updates",
        icon: "fas fa-briefcase",
      },
    };

    return contentMap[type] || contentMap.contact;
  };

  const content = getThankYouContent(formType);
  const creativeLines = [
    "While you wait, explore our portfolio to get inspired! 🚀",
    "Your success is our mission. We can&apos;t wait to help you! 🎯",
    "Great things are coming your way! ✨",
    "Let&apos;s build something amazing together! 💡",
    "Your digital transformation starts now! 🌟",
  ];

  const randomLine = creativeLines[Math.floor(Math.random() * creativeLines.length)];

  return (
    <>
      {/* Thank You Hero Section */}
      <section className="bg-[#1e293b] text-white py-24 md:py-40 min-h-screen flex items-center justify-center">
        <div className="container max-w-[900px] mx-auto px-6 md:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8 md:mb-12 animate-bounce">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#f59e0b] rounded-full flex items-center justify-center mx-auto mb-8 text-white text-5xl md:text-6xl shadow-xl">
              <i className={`${content.icon}`}></i>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            {content.title}
          </h1>

          {/* Horizontal Line */}
          <div className="h-1 w-24 md:w-32 bg-[#f59e0b] mx-auto mb-8 md:mb-12"></div>

          {/* Message */}
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-[700px] mx-auto leading-relaxed">
            {content.message}
          </p>

          {/* Next Step */}
          <p className="text-base md:text-lg mb-12 md:mb-16 text-[#f59e0b] font-semibold max-w-[700px] mx-auto">
            <i className="fas fa-arrow-right mr-2"></i>
            {content.nextStep}
          </p>

          {/* Creative Line */}
          <p className="text-xl md:text-2xl mb-16 md:mb-24 opacity-80 italic max-w-[700px] mx-auto">
            {randomLine}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center flex-wrap mb-16 md:mb-24">
            <Link
              href="/"
              className="bg-[#f59e0b] text-white hover:bg-[#d97706] border-2 border-[#f59e0b] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
            >
              <i className="fas fa-home"></i>
              <span>Back to Home</span>
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1e293b] px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
            >
              <i className="fas fa-briefcase"></i>
              <span>View Portfolio</span>
            </Link>
          </div>

          {/* Secondary Actions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 max-w-[700px] mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Explore More</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <Link
                href="/services"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-cog text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Services</span>
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-briefcase text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Portfolio</span>
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-newspaper text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Blog</span>
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-info-circle text-sm md:text-base"></i>
                <span className="text-sm md:text-base">About</span>
              </Link>
              <Link
                href="/testimonials"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-star text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Reviews</span>
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#f59e0b] transition-colors py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope text-sm md:text-base"></i>
                <span className="text-sm md:text-base">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4 text-center">Why Companies Choose Us</h2>
          <p className="text-lg md:text-xl text-[#64748b] max-w-[700px] mx-auto mb-16 text-center">
            Join the 500+ satisfied clients who have transformed their digital presence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border-t-4 border-[#f59e0b] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-3">13+</div>
              <h3 className="font-bold text-[#1e293b] mb-2 text-lg">Years Experience</h3>
              <p className="text-[#64748b]">Trusted by Sydney businesses</p>
            </div>

            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border-t-4 border-[#f59e0b] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-3">500+</div>
              <h3 className="font-bold text-[#1e293b] mb-2 text-lg">Websites Built</h3>
              <p className="text-[#64748b]">Across all industries</p>
            </div>

            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border-t-4 border-[#f59e0b] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-3">98%</div>
              <h3 className="font-bold text-[#1e293b] mb-2 text-lg">Satisfaction Rate</h3>
              <p className="text-[#64748b]">Client happiness guaranteed</p>
            </div>

            <div className="bg-[#f8fafc] p-8 md:p-10 rounded-2xl border-t-4 border-[#f59e0b] text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-3">24H</div>
              <h3 className="font-bold text-[#1e293b] mb-2 text-lg">Quick Response</h3>
              <p className="text-[#64748b]">We prioritize your needs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
