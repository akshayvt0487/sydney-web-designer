"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import SubmittingOverlay from "@/components/SubmittingOverlay";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/lib/schemas";

type ContactErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type CountryOption = {
  country: CountryCode;
  name: string;
  dialCode: string;
};

const DEFAULT_COUNTRY: CountryCode = "AU";

function getCountryName(country: CountryCode): string {
  try {
    const displayNames = new Intl.DisplayNames(["en"], {
      type: "region",
    });

    return displayNames.of(country) || country;
  } catch {
    return country;
  }
}

function getCountryFlag(country: CountryCode): string {
  return country
    .toUpperCase()
    .split("")
    .map((character) =>
      String.fromCodePoint(127397 + character.charCodeAt(0))
    )
    .join("");
}

const COUNTRY_OPTIONS: CountryOption[] = getCountries()
  .map((country) => ({
    country,
    name: getCountryName(country),
    dialCode: `+${getCountryCallingCode(country)}`,
  }))
  .sort((first, second) => first.name.localeCompare(second.name));

function isValidEmail(value: string): boolean {
  const email = value.trim();

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanPhoneInput(value: string): string {
  return value.replace(/[^\d\s()+-]/g, "");
}

export default function ContactPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(DEFAULT_COUNTRY);
  const [phoneValue, setPhoneValue] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});

  const activeCountry = useMemo(() => {
    return (
      COUNTRY_OPTIONS.find((option) => option.country === selectedCountry) ||
      COUNTRY_OPTIONS.find((option) => option.country === DEFAULT_COUNTRY) ||
      COUNTRY_OPTIONS[0]
    );
  }, [selectedCountry]);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) {
      return COUNTRY_OPTIONS;
    }

    return COUNTRY_OPTIONS.filter((option) =>
      `${option.name} ${option.country} ${option.dialCode}`
        .toLowerCase()
        .includes(query)
    );
  }, [countrySearch]);

  const validateForm = (formData: FormData): boolean => {
    const nextErrors: ContactErrors = {};

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const phone = phoneValue.trim();

    if (!firstName) {
      nextErrors.firstName = "First name is required.";
    }

    if (!lastName) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!isValidPhoneNumber(phone, selectedCountry)) {
      nextErrors.phone = `Please enter a valid ${activeCountry.name} phone number.`;
    }

    if (!message) {
      nextErrors.message = "Project message is required.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    setShowCountrySelector(false);

    try {
      const parsedPhone = parsePhoneNumberFromString(
        phoneValue,
        selectedCountry
      );

      const formattedPhone =
        parsedPhone?.number ||
        `${activeCountry.dialCode} ${phoneValue.trim()}`;

      const data = {
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: formattedPhone,
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

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Failed to submit form.");
      }

      router.push("/thank-you?type=contact");
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setIsSubmitting(false);

      setErrors({
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit your message. Please try again.",
      });
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

        <section className="contact-main paper-grain">
          <div className="container">
            <header className="contact-heading">
              <h2>
                Get In <span>Touch</span>
              </h2>

              <p>Ready to grow your business online? Contact us today!</p>
            </header>

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

            <div className="contact-form-panel">
              <header className="contact-form-panel__heading">
                <h3>Send Us A Message</h3>

                <p>
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
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
                      onChange={() =>
                        setErrors((current) => ({
                          ...current,
                          firstName: undefined,
                        }))
                      }
                    />

                    {errors.firstName && (
                      <p className="contact-field__error">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="lastName">Last Name *</label>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={() =>
                        setErrors((current) => ({
                          ...current,
                          lastName: undefined,
                        }))
                      }
                    />

                    {errors.lastName && (
                      <p className="contact-field__error">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">Email *</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={() =>
                        setErrors((current) => ({
                          ...current,
                          email: undefined,
                        }))
                      }
                    />

                    {errors.email && (
                      <p className="contact-field__error">{errors.email}</p>
                    )}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">Phone *</label>

                    <div className="contact-phone">
                      <div className="contact-phone__country">
                        <button
                          type="button"
                          className="contact-phone__country-button"
                          onClick={() =>
                            setShowCountrySelector((current) => !current)
                          }
                        >
                          <span>
                            {getCountryFlag(activeCountry.country)}{" "}
                            {activeCountry.dialCode}
                          </span>

                          <i
                            className="fas fa-chevron-down"
                            aria-hidden="true"
                          />
                        </button>

                        {showCountrySelector && (
                          <div className="contact-phone__country-list">
                            <div className="contact-phone__country-search">
                              <i
                                className="fas fa-search"
                                aria-hidden="true"
                              />

                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(event) =>
                                  setCountrySearch(event.target.value)
                                }
                                placeholder="Search country or code..."
                              />
                            </div>

                            <div className="contact-phone__country-results">
                              {filteredCountries.map((option) => (
                                <button
                                  key={option.country}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(option.country);
                                    setCountrySearch("");
                                    setShowCountrySelector(false);
                                    setErrors((current) => ({
                                      ...current,
                                      phone: undefined,
                                    }));
                                  }}
                                >
                                  <span>
                                    {getCountryFlag(option.country)}{" "}
                                    {option.name}
                                  </span>

                                  <small>{option.dialCode}</small>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneValue}
                        onChange={(event) => {
                          setPhoneValue(cleanPhoneInput(event.target.value));
                          setErrors((current) => ({
                            ...current,
                            phone: undefined,
                          }));
                        }}
                        placeholder="Phone number"
                      />
                    </div>

                    {errors.phone && (
                      <p className="contact-field__error">{errors.phone}</p>
                    )}
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
                    rows={5}
                    onChange={() =>
                      setErrors((current) => ({
                        ...current,
                        message: undefined,
                      }))
                    }
                  />

                  {errors.message && (
                    <p className="contact-field__error">{errors.message}</p>
                  )}
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