"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmittingOverlay from "@/components/SubmittingOverlay";
import {
    generateBreadcrumbSchema,
    generateLocalBusinessSchema,
} from "@/lib/schemas";

export default function ContactPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);

            const data = {
                firstName: String(formData.get("firstName") || "").trim(),
                lastName: String(formData.get("lastName") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                website: String(formData.get("website") || "").trim(),
                service: String(formData.get("service") || "").trim(),
                message: String(formData.get("message") || "").trim(),
                formOrigin: "contact-page",
                sourcePage: window.location.pathname,
                sourceUrl: window.location.href,
                id: Date.now().toString(),
                submittedAt: new Date().toISOString(),
                status: "new",
            };

            const response = await fetch("/api/submissions/contact/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || "Failed to submit form.");
            }

            router.push("/thank-you?type=contact");
        } catch (error) {
            console.error("Contact form submission failed:", error);

            setIsSubmitting(false);

            alert(
                error instanceof Error
                    ? error.message
                    : "Unable to submit your message. Please try again."
            );
        }
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
        { name: "Contact", url: "https://www.sydneywebdesigner.com.au/contact" },
    ]);

    return (
        <>
            <SubmittingOverlay
                isVisible={isSubmitting}
                title="Sending Your Message"
                description="We are securely submitting your enquiry. This will only take a moment."
            />
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

            <div className="contact-paper-page">
                {/* Page Hero */}
                <section className="contact-hero">
                    <div className="container contact-hero__inner">
                        <div className="contact-hero__content">
                            <div className="contact-hero__eyebrow">
                                <span aria-hidden="true" />
                                <h1>Contact Sydney Web Designer</h1>
                            </div>

                            <h2>
                                Get Your Free <span>Consultation</span> Today
                            </h2>

                            <p>Get in touch for your free consultation and quote!</p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="contact-main paper-grain">
                    <div className="container">
                        <header className="contact-heading">
                            <h2>
                                Get In <span>Touch</span>
                            </h2>

                            <p>Ready to grow your business online? Contact us today!</p>
                        </header>

                        {/* Contact Info Cards */}
                        <div className="contact-details">
                            <article className="contact-detail">
                                <div className="contact-detail__icon">
                                    <i className="fas fa-envelope" aria-hidden="true" />
                                </div>

                                <h3>Email</h3>

                                <p>
                                    <a href="mailto:hello@dsigns.com.au">
                                        hello@dsigns.com.au
                                    </a>
                                </p>

                                <span>24/7 Response</span>
                            </article>

                            <article className="contact-detail">
                                <div className="contact-detail__icon">
                                    <i className="fas fa-phone" aria-hidden="true" />
                                </div>

                                <h3>Phone</h3>

                                <p>
                                    <a href="tel:0291918049">02 9191 8049</a>
                                </p>

                                <span>Mon-Fri: 9AM-5PM</span>
                            </article>

                            <article className="contact-detail">
                                <div className="contact-detail__icon">
                                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                                </div>

                                <h3>Location</h3>

                                <p>
                                    Suite 611
                                    <br />
                                    150 George Street
                                </p>

                                <span>Parramatta NSW 2150</span>
                            </article>

                            <article className="contact-detail">
                                <div className="contact-detail__icon">
                                    <i className="fas fa-clock" aria-hidden="true" />
                                </div>

                                <h3>Business Hours</h3>

                                <p>
                                    Monday - Friday: 9AM - 5PM
                                    <br />
                                    <span>Saturday - Sunday: Closed</span>
                                </p>
                            </article>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-panel">
                            <header className="contact-form-panel__heading">
                                <h3>Send Us A Message</h3>

                                <p>
                                    Fill out the form below and we&apos;ll get back to you
                                    within 24 hours.
                                </p>
                            </header>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__grid">
                                    <div className="contact-field">
                                        <label htmlFor="firstName">First Name *</label>

                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="lastName">Last Name *</label>

                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                        />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="email">Email *</label>

                                        <input type="email" id="email" name="email" required />
                                    </div>

                                    <div className="contact-field">
                                        <label htmlFor="phone">Phone *</label>

                                        <input type="tel" id="phone" name="phone" required />
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="website">Website (if applicable)</label>

                                    <input type="url" id="website" name="website" />
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="service">Service Interested In</label>

                                    <select id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="web-design">Web Design</option>
                                        <option value="branding">Branding</option>
                                        <option value="digital-marketing">
                                            Digital Marketing
                                        </option>
                                        <option value="seo">SEO Services</option>
                                        <option value="google-ads">Google Ads</option>
                                        <option value="social-media">
                                            Social Media Marketing
                                        </option>
                                        <option value="growth-plan">Growth Plan</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="message">Tell us about your project *</label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                    />
                                </div>

                                <div className="contact-form__submit">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="paper-button paper-button--rust"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i
                                                    className="fas fa-spinner fa-spin"
                                                    aria-hidden="true"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Follow Us Section */}
                <section className="contact-social">
                    <div className="container contact-social__inner">
                        <header className="contact-heading contact-heading--dark">
                            <h2>
                                Follow <span>Us</span>
                            </h2>

                            <p>Stay connected on social media</p>
                        </header>

                        <div className="contact-social__links">
                            <a
                                href="https://www.facebook.com/dsignsaustralia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social__link"
                            >
                                <span className="contact-social__icon">
                                    <i className="fab fa-facebook-f" aria-hidden="true" />
                                </span>

                                <span className="contact-social__name">Facebook</span>

                                <i
                                    className="fas fa-arrow-up-right-from-square contact-social__arrow"
                                    aria-hidden="true"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/dsignsaustralia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social__link"
                            >
                                <span className="contact-social__icon">
                                    <i className="fab fa-instagram" aria-hidden="true" />
                                </span>

                                <span className="contact-social__name">Instagram</span>

                                <i
                                    className="fas fa-arrow-up-right-from-square contact-social__arrow"
                                    aria-hidden="true"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/dsigns-australia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social__link"
                            >
                                <span className="contact-social__icon">
                                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                                </span>

                                <span className="contact-social__name">LinkedIn</span>

                                <i
                                    className="fas fa-arrow-up-right-from-square contact-social__arrow"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>

                        <div className="contact-social__back">
                            <Link href="/" className="paper-button">
                                <i className="fas fa-arrow-left" aria-hidden="true" />
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}