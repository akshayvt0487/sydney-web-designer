"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type ServiceValue =
  | "custom-web-design"
  | "wordpress-development"
  | "ecommerce-websites"
  | "google-ads"
  | "social-media-marketing";

interface ServiceInlineLeadFormProps {
  service: ServiceValue;
  buttonText: string;
  variant?: "service-detail" | "social-media";
}

export default function ServiceInlineLeadForm({
  service,
  buttonText,
  variant = "service-detail",
}: ServiceInlineLeadFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);

      const payload = {
        id: Date.now().toString(),
        type: "consultation",
        service,
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        company: String(formData.get("company") || ""),
        message: String(formData.get("message") || ""),
        sourcePage: window.location.pathname,
        sourceUrl: window.location.href,
        submittedAt: new Date().toISOString(),
        status: "new",
      };

      const response = await fetch("/api/submissions/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form.");
      }

      router.push("/thank-you?type=consultation");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your request. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  if (variant === "social-media") {
    return (
      <form className="smm-lead__form" onSubmit={handleSubmit}>
        <div className="smm-lead__grid">
          <div>
            <label htmlFor={`${service}-name`}>Full Name *</label>
            <input
              id={`${service}-name`}
              name="name"
              type="text"
              required
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor={`${service}-email`}>Email *</label>
            <input
              id={`${service}-email`}
              name="email"
              type="email"
              required
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor={`${service}-phone`}>Phone *</label>
            <input
              id={`${service}-phone`}
              name="phone"
              type="tel"
              required
              placeholder="04XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor={`${service}-company`}>Company</label>
            <input
              id={`${service}-company`}
              name="company"
              type="text"
              placeholder="Your company (optional)"
            />
          </div>
        </div>

        <div className="smm-lead__message">
          <label htmlFor={`${service}-message`}>
            Tell us about your project
          </label>

          <textarea
            id={`${service}-message`}
            name="message"
            placeholder="What are you looking to achieve?"
            rows={4}
          />
        </div>

        {error && (
          <p className="paper-popup__error" role="alert">
            {error}
          </p>
        )}

        <div className="smm-lead__submit">
          <button
            type="submit"
            disabled={isSubmitting}
            className="paper-button paper-button--rust"
          >
            {isSubmitting ? "Sending..." : buttonText}
          </button>

          <p>
            <i className="fas fa-comments" aria-hidden="true" />
            We&apos;ll respond within 24 hours
          </p>
        </div>
      </form>
    );
  }

  return (
    <form className="service-detail-lead__form" onSubmit={handleSubmit}>
      <div className="service-detail-lead__grid">
        <div>
          <label htmlFor={`${service}-name`}>Full Name *</label>
          <input
            id={`${service}-name`}
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor={`${service}-email`}>Email *</label>
          <input
            id={`${service}-email`}
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor={`${service}-phone`}>Phone *</label>
          <input
            id={`${service}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="04XX XXX XXX"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor={`${service}-company`}>Company</label>
          <input
            id={`${service}-company`}
            name="company"
            type="text"
            placeholder="Your company (optional)"
            className="form-input"
          />
        </div>
      </div>

      <div className="service-detail-lead__message">
        <label htmlFor={`${service}-message`}>
          Tell us about your project
        </label>

        <textarea
          id={`${service}-message`}
          name="message"
          placeholder="What are you looking to achieve?"
          rows={7}
          className="form-textarea"
        />
      </div>

      {error && (
        <p className="paper-popup__error" role="alert">
          {error}
        </p>
      )}

      <div className="service-detail-lead__submit">
        <button
          type="submit"
          disabled={isSubmitting}
          className="paper-button paper-button--rust"
        >
          {isSubmitting ? "Sending..." : buttonText}
        </button>

        <p>
          <i className="fas fa-comment-dots" aria-hidden="true" />
          We&apos;ll respond within 24 hours
        </p>
      </div>
    </form>
  );
}