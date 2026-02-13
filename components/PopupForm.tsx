"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "contact" | "seoAudit" | "adsAudit" | "consultation";
}

export default function PopupForm({ isOpen, onClose, formType }: PopupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save submission to database
      const response = await fetch("/api/submissions/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: formType,
          ...formData,
          id: Date.now().toString(),
          submittedAt: new Date().toISOString(),
          status: "new",
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({});
          // Map formType to thank you page type
          const typeMap: Record<string, string> = {
            "contact": "contact",
            "seoAudit": "seoAudit",
            "adsAudit": "adsAudit",
            "consultation": "consultation",
          };
          router.push(`/thank-you?type=${typeMap[formType]}`);
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const getFormTitle = () => {
    switch (formType) {
      case "contact":
        return "Get Your Free Quote";
      case "seoAudit":
        return "Get Your Free SEO Audit";
      case "adsAudit":
        return "Get Your Free Google Ads Audit";
      case "consultation":
        return "Book Your Free Consultation";
      default:
        return "Contact Us";
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case "contact":
        return "Fill out the form below and we'll get back to you within 24 hours with a custom quote for your project.";
      case "seoAudit":
        return "Get a comprehensive SEO audit of your website and discover opportunities to improve your rankings.";
      case "adsAudit":
        return "Let us review your Google Ads campaigns and show you how to improve your ROI.";
      case "consultation":
        return "Schedule a free 30-minute consultation with our experts to discuss your digital marketing goals.";
      default:
        return "";
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e293b] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">{getFormTitle()}</h2>
          <p className="text-gray-100">{getFormDescription()}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4"><i className="fas fa-comments"></i></div>
              <h3 className="text-2xl font-bold text-primary-navy mb-2">Thank You!</h3>
              <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input"
                    value={formData.name || ""}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-input"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="form-input"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                  />
                </div>
                {formType === "contact" && (
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      name="website"
                      className="form-input"
                      value={formData.website || ""}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com.au"
                    />
                  </div>
                )}
                {(formType === "seoAudit" || formType === "adsAudit") && (
                  <div className="form-group">
                    <label className="form-label">Website URL *</label>
                    <input
                      type="url"
                      name="website"
                      required
                      className="form-input"
                      value={formData.website || ""}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com.au"
                    />
                  </div>
                )}
              </div>

              {formType === "contact" && (
                <div className="form-group mb-4">
                  <label className="form-label">Project Type</label>
                  <select
                    name="projectType"
                    className="form-select"
                    value={formData.projectType || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO Services</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="branding">Branding</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {formType === "seoAudit" && (
                <div className="form-group mb-4">
                  <label className="form-label">Main SEO Goal</label>
                  <select
                    name="seoGoal"
                    className="form-select"
                    value={formData.seoGoal || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select your goal</option>
                    <option value="more-traffic">Increase Website Traffic</option>
                    <option value="rankings">Improve Search Rankings</option>
                    <option value="local-seo">Local SEO / Google Maps</option>
                    <option value="conversions">Increase Leads/Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              {formType === "adsAudit" && (
                <div className="form-group mb-4">
                  <label className="form-label">Current Monthly Ad Spend</label>
                  <select
                    name="adSpend"
                    className="form-select"
                    value={formData.adSpend || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="none">Not running ads yet</option>
                    <option value="0-1000">$0 - $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              )}

              {formType === "consultation" && (
                <div className="form-group mb-4">
                  <label className="form-label">Service Interested In</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service || ""}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO Services</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="branding">Branding</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="growth-plan">Monthly Growth Plan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}

              <div className="form-group mb-6">
                <label className="form-label">
                  {formType === "seoAudit" ? "Current SEO Challenges" : formType === "adsAudit" ? "Main Ad Goals" : "Message"}
                </label>
                <textarea
                  name="message"
                  className="form-textarea"
                  value={formData.message || ""}
                  onChange={handleChange}
                  placeholder={formType === "seoAudit" ? "Describe your current SEO challenges..." : "Tell us about your project..."}
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
            </>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
