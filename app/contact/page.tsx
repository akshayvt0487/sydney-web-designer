"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schemas";

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        service: formData.get("service"),
        message: formData.get("message"),
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
        status: "new",
      };

      // Save to database
      await fetch("/api/submissions/contact/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsSubmitting(false);
      router.push("/thank-you?type=contact");
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://sydneywebdesigner.com.au" },
    { name: "Contact", url: "https://sydneywebdesigner.com.au/contact" },
  ]);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Page Hero */}
      <section className="bg-[#1e293b] text-white py-24 text-center">
        <div className="container max-w-[900px] mx-auto px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contact Sydney Web Designer
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            Get in touch for your free consultation and quote!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Get In Touch</h2>
            <p className="text-xl text-[#64748b] max-w-[700px] mx-auto">
              Ready to grow your business online? Contact us today!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-18 h-18 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl p-5">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Email</h3>
              <p className="text-[#1e293b] text-lg mb-2">
                <a href="mailto:hello@dsigns.com.au" className="text-[#f59e0b] font-semibold hover:text-[#d97706]">hello@dsigns.com.au</a>
              </p>
              <span className="text-[#64748b] text-sm">24/7 Response</span>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-18 h-18 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl p-5">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Phone</h3>
              <p className="text-[#1e293b] text-lg mb-2">
                <a href="tel:0291918049" className="text-[#f59e0b] font-semibold hover:text-[#d97706]">02 9191 8049</a>
              </p>
              <span className="text-[#64748b] text-sm">Mon-Fri: 9AM-5PM</span>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-18 h-18 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl p-5">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Location</h3>
              <p className="text-[#1e293b] text-lg leading-relaxed mb-2">
                Suite 103 Level 1<br />22 Hunter Street
              </p>
              <span className="text-[#64748b] text-sm">Parramatta NSW 2150</span>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-2 text-center border-t-4 border-[#f59e0b]">
              <div className="w-18 h-18 bg-[#1e293b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl p-5">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#1e293b] mb-4">Business Hours</h3>
              <p className="text-[#1e293b] text-lg leading-relaxed">
                Monday - Friday: 9AM - 5PM<br />
                <span className="text-sm text-[#64748b]">Saturday - Sunday: Closed</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f8fafc] p-12 md:p-16 rounded-3xl max-w-[800px] mx-auto">
            <h3 className="text-3xl font-bold text-[#1e293b] mb-2 text-center">Send Us A Message</h3>
            <p className="text-center text-[#64748b] mb-10 text-lg">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-[#1e293b] font-semibold">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-[#1e293b] font-semibold">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-[#1e293b] font-semibold">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#1e293b] font-semibold">Phone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white" />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block mb-2 text-[#1e293b] font-semibold">Website (if applicable)</label>
                <input type="url" id="website" name="website" className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white" />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 text-[#1e293b] font-semibold">Service Interested In</label>
                <select id="service" name="service" className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors bg-white">
                  <option value="">Select a service</option>
                  <option value="web-design">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="growth-plan">Growth Plan</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#1e293b] font-semibold">Tell us about your project *</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border-2 border-[#e2e8f0] rounded-xl focus:border-[#f59e0b] focus:outline-none transition-colors resize-y bg-white"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] disabled:bg-[#cbd5e1] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(245,158,11,0.4)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] mb-4 text-center">Follow Us</h2>
          <p className="text-lg md:text-xl text-[#64748b] max-w-[700px] mx-auto mb-12 text-center">
            Stay connected on social media
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a 
              href="https://www.facebook.com/dsignsaustralia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#1877f2] text-white hover:bg-[#166fe5] px-6 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              <i className="fas fa-facebook mr-2"></i>
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/dsignsaustralia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#dc2743] text-white hover:opacity-90 px-6 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              <i className="fas fa-instagram mr-2"></i>
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/dsigns-australia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#0077b5] text-white hover:bg-[#006399] px-6 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              <i className="fas fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-block bg-transparent text-[#1e293b] border-2 border-[#1e293b] hover:bg-[#1e293b] hover:text-white px-6 md:px-12 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
