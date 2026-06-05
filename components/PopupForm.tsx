"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import SubmittingOverlay from "./SubmittingOverlay";
import { getFormRedirectUrl } from "@/lib/forms";
import {
  getInitialService,
  getServiceName,
  getServiceOptionsForContext,
  getServiceQuestions,
  type PopupLaunchContext,
  type ServiceOption,
  type ServiceQuestion,
} from "@/lib/forms/service-popup-config";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  launchContext: PopupLaunchContext;
}

type WizardStep = "service" | "questions" | "contact";

interface ContactDetails {
  name: string;
  email: string;
  country: CountryCode;
  phone: string;
  businessName: string;
  website: string;
  message: string;
}

interface CountryOption {
  country: CountryCode;
  name: string;
  dialCode: string;
}

interface ContactErrors {
  name?: string;
  email?: string;
  phone?: string;
}

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

export default function PopupForm({
  isOpen,
  onClose,
  launchContext,
}: PopupFormProps) {
  const router = useRouter();

  const initialService = useMemo(
    () => getInitialService(launchContext),
    [launchContext]
  );

  const serviceOptions = useMemo(
    () => getServiceOptionsForContext(launchContext),
    [launchContext]
  );

  const shouldStartWithServiceSelection = !launchContext.planName;

  const [step, setStep] = useState<WizardStep>(
    shouldStartWithServiceSelection ? "service" : "questions"
  );

  const [selectedService, setSelectedService] =
    useState<ServiceOption | null>(initialService);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [serviceSearch, setServiceSearch] = useState("");

  const [contact, setContact] = useState<ContactDetails>({
    name: "",
    email: "",
    country: DEFAULT_COUNTRY,
    phone: "",
    businessName: "",
    website: "",
    message: "",
  });

  const [countrySearch, setCountrySearch] = useState("");
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeQuestions = useMemo(() => {
    if (!selectedService) return [];

    return getServiceQuestions(selectedService.slug, launchContext.planName);
  }, [selectedService, launchContext.planName]);

  const currentQuestion = activeQuestions[questionIndex];

  const selectedCountry = useMemo(() => {
    return (
      COUNTRY_OPTIONS.find((option) => option.country === contact.country) ||
      COUNTRY_OPTIONS.find((option) => option.country === DEFAULT_COUNTRY) ||
      COUNTRY_OPTIONS[0]
    );
  }, [contact.country]);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();

    if (!query) return COUNTRY_OPTIONS;

    return COUNTRY_OPTIONS.filter((option) =>
      `${option.name} ${option.country} ${option.dialCode}`
        .toLowerCase()
        .includes(query)
    );
  }, [countrySearch]);

  const filteredServices = useMemo(() => {
    const query = serviceSearch.trim().toLowerCase();

    if (!query) return serviceOptions;

    return serviceOptions.filter((service) =>
      `${service.name} ${service.slug}`.toLowerCase().includes(query)
    );
  }, [serviceOptions, serviceSearch]);

  const totalSteps =
    activeQuestions.length + 1 + (shouldStartWithServiceSelection ? 1 : 0);

  const visibleStep =
    step === "service"
      ? 1
      : step === "questions"
      ? questionIndex + (shouldStartWithServiceSelection ? 2 : 1)
      : totalSteps;

  const progressPercentage = Math.round(
    (visibleStep / Math.max(totalSteps, 1)) * 100
  );

  useEffect(() => {
    if (!isOpen) return;

    const nextInitialService = getInitialService(launchContext);

    setSelectedService(nextInitialService);
    setStep(launchContext.planName ? "questions" : "service");
    setQuestionIndex(0);
    setAnswers({});
    setServiceSearch("");
    setCountrySearch("");
    setShowCountrySelector(false);
    setContact({
      name: "",
      email: "",
      country: DEFAULT_COUNTRY,
      phone: "",
      businessName: "",
      website: "",
      message: "",
    });
    setContactErrors({});
    setFormError("");
    setIsSubmitting(false);
  }, [isOpen, launchContext]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const selectedServiceName =
    selectedService?.name || getServiceName(selectedService?.slug, "Your Project");

  const selectService = (service: ServiceOption) => {
    setSelectedService(service);
    setAnswers({});
    setQuestionIndex(0);
    setFormError("");

    window.setTimeout(() => {
      setStep("questions");
    }, 120);
  };

  const goToNextQuestion = () => {
    setFormError("");

    if (questionIndex < activeQuestions.length - 1) {
      setQuestionIndex((current) => current + 1);
      return;
    }

    setStep("contact");
  };

  const answerSelectQuestion = (question: ServiceQuestion, value: string) => {
    setAnswers((current) => ({
      ...current,
      [question.name]: value,
    }));

    setFormError("");

    window.setTimeout(() => {
      goToNextQuestion();
    }, 140);
  };

  const continueTextQuestion = () => {
    if (!currentQuestion) {
      setStep("contact");
      return;
    }

    const answer = String(answers[currentQuestion.name] || "").trim();

    if (currentQuestion.required && !answer) {
      setFormError(`${currentQuestion.label} is required.`);
      return;
    }

    goToNextQuestion();
  };

  const goBack = () => {
    setFormError("");
    setContactErrors({});

    if (step === "contact") {
      if (activeQuestions.length > 0) {
        setStep("questions");
        setQuestionIndex(activeQuestions.length - 1);
      } else if (shouldStartWithServiceSelection) {
        setStep("service");
      }

      return;
    }

    if (step === "questions") {
      if (questionIndex > 0) {
        setQuestionIndex((current) => current - 1);
      } else if (shouldStartWithServiceSelection) {
        setStep("service");
      }
    }
  };

  const validateQuestions = (): boolean => {
    for (let index = 0; index < activeQuestions.length; index += 1) {
      const question = activeQuestions[index];
      const answer = String(answers[question.name] || "").trim();

      if (question.required && !answer) {
        setStep("questions");
        setQuestionIndex(index);
        setFormError(`${question.label} is required.`);
        return false;
      }
    }

    return true;
  };

  const validateContactDetails = (): boolean => {
    const errors: ContactErrors = {};

    if (!contact.name.trim()) {
      errors.name = "Full name is required.";
    }

    if (!contact.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!isValidEmail(contact.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!contact.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!isValidPhoneNumber(contact.phone, contact.country)) {
      errors.phone = `Please enter a valid ${selectedCountry.name} phone number.`;
    }

    setContactErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const buildSubmissionMessage = (): string => {
    const lines: string[] = [];

    lines.push(`Selected Service: ${selectedServiceName}`);

    if (launchContext.planName) {
      lines.push(`Selected Plan: ${launchContext.planName}`);
    }

    if (launchContext.planDescription) {
      lines.push(`Plan For: ${launchContext.planDescription}`);
    }

    if (launchContext.planFeatures && launchContext.planFeatures.length > 0) {
      lines.push("");
      lines.push("Selected Plan Includes:");

      launchContext.planFeatures.forEach((feature) => {
        lines.push(`- ${feature}`);
      });
    }

    if (activeQuestions.length > 0) {
      lines.push("");
      lines.push("Project Answers:");

      activeQuestions.forEach((question) => {
        const answer = String(answers[question.name] || "").trim();

        if (answer) {
          lines.push(`${question.label}: ${answer}`);
        }
      });
    }

    if (contact.message.trim()) {
      lines.push("");
      lines.push("Additional Message:");
      lines.push(contact.message.trim());
    }

    return lines.join("\n");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormError("");

    if (!selectedService) {
      setStep("service");
      setFormError("Please select a service.");
      return;
    }

    if (!validateQuestions()) return;
    if (!validateContactDetails()) return;

    setIsSubmitting(true);
    setShowCountrySelector(false);

    const parsedPhone = parsePhoneNumberFromString(
      contact.phone,
      contact.country
    );

    const formattedPhone =
      parsedPhone?.number || `${selectedCountry.dialCode} ${contact.phone.trim()}`;

    const submissionPayload = {
      type: launchContext.formType,
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: formattedPhone,
      website: contact.website.trim(),
      company: contact.businessName.trim(),
      projectType: selectedService.slug,
      service: selectedService.slug,
      message: buildSubmissionMessage(),
      formOrigin: launchContext.planName
        ? "plan-popup-form"
        : "service-multistep-popup-form",
      sourcePage: window.location.pathname,
      sourceUrl: window.location.href,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    try {
      const response = await fetch("/api/submissions/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionPayload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
        details?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ||
            result?.details ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      router.push(getFormRedirectUrl(launchContext.formType));
    } catch (error) {
      console.error("Popup form submission failed:", error);

      setIsSubmitting(false);
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again."
      );
    }
  };

  return (
    <>
      <SubmittingOverlay
        isVisible={isSubmitting}
        title="Sending Your Request"
        description="We are securely submitting your details and preparing the next step."
      />

      <div
        className="paper-popup paper-popup--wizard"
        onClick={isSubmitting ? undefined : onClose}
      >
        <div
          className="paper-popup__panel paper-popup__panel--wizard paper-grain"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="paper-popup__close paper-popup__close--wizard"
            aria-label="Close form"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="paper-popup__header paper-popup__header--wizard">
            <span className="paper-popup__eyebrow">Sydney Web Designer</span>

            <h2>
              {launchContext.planName
                ? launchContext.planName
                : selectedService
                ? selectedServiceName
                : "Tell Us About Your Project"}
            </h2>

            <p>
              {launchContext.planDescription ||
                "Answer a few quick questions and we will recommend the right next step for your project."}
            </p>

            {launchContext.planName && (
              <div className="paper-popup__selected-plan">
                <span>Selected Plan</span>
                <strong>{launchContext.planName}</strong>
              </div>
            )}
          </div>

          <div className="paper-popup__progress-meta">
            <strong>
              Step {visibleStep} of {totalSteps}
            </strong>

            <span>{progressPercentage}% complete</span>
          </div>

          <div className="paper-popup__progress-track" aria-hidden="true">
            <span style={{ width: `${progressPercentage}%` }} />
          </div>

          <div className="paper-popup__wizard-body">
            {step === "service" && (
              <div className="paper-popup__wizard-step">
                <h3>Which service do you need?</h3>

                <p>
                  Select the service that best matches your project. The service
                  you clicked is highlighted.
                </p>

                <div className="paper-popup__search">
                  <i className="fas fa-search" aria-hidden="true" />

                  <input
                    type="text"
                    value={serviceSearch}
                    onChange={(event) => setServiceSearch(event.target.value)}
                    placeholder="Search service..."
                  />
                </div>

                <div className="paper-popup__option-grid">
                  {filteredServices.map((service) => {
                    const isSelected =
                      selectedService?.slug === service.slug ||
                      launchContext.serviceSlug === service.slug;

                    return (
                      <button
                        key={service.slug}
                        type="button"
                        className={`paper-popup__option ${
                          isSelected ? "paper-popup__option--selected" : ""
                        }`}
                        onClick={() => selectService(service)}
                      >
                        {service.name}
                      </button>
                    );
                  })}
                </div>

                {filteredServices.length === 0 && (
                  <p className="paper-popup__empty">No matching service found.</p>
                )}
              </div>
            )}

            {step === "questions" && currentQuestion && (
              <div className="paper-popup__wizard-step">
                <h3>
                  {currentQuestion.label}
                  {currentQuestion.required && <span> *</span>}
                </h3>

                {currentQuestion.type === "select" ? (
                  <div className="paper-popup__question-options">
                    {(currentQuestion.options || []).map((option) => {
                      const selected = answers[currentQuestion.name] === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            answerSelectQuestion(currentQuestion, option)
                          }
                          className={`paper-popup__answer-option ${
                            selected
                              ? "paper-popup__answer-option--selected"
                              : ""
                          }`}
                        >
                          <span className="paper-popup__answer-radio" />
                          <strong>{option}</strong>
                        </button>
                      );
                    })}
                  </div>
                ) : currentQuestion.type === "textarea" ? (
                  <textarea
                    value={answers[currentQuestion.name] || ""}
                    onChange={(event) =>
                      setAnswers((current) => ({
                        ...current,
                        [currentQuestion.name]: event.target.value,
                      }))
                    }
                    rows={6}
                    className="paper-popup__wizard-textarea"
                    placeholder={currentQuestion.placeholder || "Write here..."}
                  />
                ) : (
                  <input
                    type="text"
                    value={answers[currentQuestion.name] || ""}
                    onChange={(event) =>
                      setAnswers((current) => ({
                        ...current,
                        [currentQuestion.name]: event.target.value,
                      }))
                    }
                    className="paper-popup__wizard-input"
                    placeholder={currentQuestion.placeholder || "Write here..."}
                  />
                )}

                {formError && (
                  <div className="paper-popup__wizard-error" role="alert">
                    <i
                      className="fas fa-exclamation-circle"
                      aria-hidden="true"
                    />
                    <p>{formError}</p>
                  </div>
                )}

                <div className="paper-popup__wizard-actions">
                  <button type="button" onClick={goBack} className="paper-button">
                    Back
                  </button>

                  {currentQuestion.type !== "select" && (
                    <button
                      type="button"
                      onClick={continueTextQuestion}
                      className="paper-button paper-button--rust"
                    >
                      Continue
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {step === "contact" && (
              <form className="paper-popup__wizard-step" onSubmit={handleSubmit}>
                <h3>Almost done — who should we contact?</h3>

                <p>
                  We will use these details to respond about your{" "}
                  {launchContext.planName || selectedServiceName} enquiry.
                </p>

                <div className="paper-popup__contact-grid">
                  <div className="form-group">
                    <label className="form-label">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      className={`form-input ${
                        contactErrors.name ? "form-input--error" : ""
                      }`}
                      value={contact.name}
                      onChange={(event) => {
                        setContact((current) => ({
                          ...current,
                          name: event.target.value,
                        }));

                        setContactErrors((current) => ({
                          ...current,
                          name: undefined,
                        }));
                      }}
                      placeholder="Your full name"
                    />

                    {contactErrors.name && (
                      <p className="paper-popup__field-error">
                        {contactErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      className={`form-input ${
                        contactErrors.email ? "form-input--error" : ""
                      }`}
                      value={contact.email}
                      onChange={(event) => {
                        setContact((current) => ({
                          ...current,
                          email: event.target.value,
                        }));

                        setContactErrors((current) => ({
                          ...current,
                          email: undefined,
                        }));
                      }}
                      placeholder="your@email.com"
                    />

                    {contactErrors.email && (
                      <p className="paper-popup__field-error">
                        {contactErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="form-group paper-popup__phone-group">
                    <label className="form-label">
                      Phone <span>*</span>
                    </label>

                    <div className="paper-popup__phone-layout">
                      <div className="paper-popup__country">
                        <button
                          type="button"
                          className={`paper-popup__country-button ${
                            contactErrors.phone
                              ? "paper-popup__country-button--error"
                              : ""
                          }`}
                          onClick={() =>
                            setShowCountrySelector((current) => !current)
                          }
                        >
                          <span>
                            {getCountryFlag(selectedCountry.country)}{" "}
                            {selectedCountry.dialCode}
                          </span>

                          <i
                            className="fas fa-chevron-down"
                            aria-hidden="true"
                          />
                        </button>

                        {showCountrySelector && (
                          <div className="paper-popup__country-list">
                            <div className="paper-popup__country-search">
                              <i className="fas fa-search" aria-hidden="true" />

                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(event) =>
                                  setCountrySearch(event.target.value)
                                }
                                placeholder="Search country or code..."
                              />
                            </div>

                            <div className="paper-popup__country-results">
                              {filteredCountries.map((option) => (
                                <button
                                  key={option.country}
                                  type="button"
                                  onClick={() => {
                                    setContact((current) => ({
                                      ...current,
                                      country: option.country,
                                    }));
                                    setShowCountrySelector(false);
                                    setCountrySearch("");
                                    setContactErrors((current) => ({
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
                        className={`form-input ${
                          contactErrors.phone ? "form-input--error" : ""
                        }`}
                        value={contact.phone}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                          setContact((current) => ({
                            ...current,
                            phone: cleanPhoneInput(event.target.value),
                          }));

                          setContactErrors((current) => ({
                            ...current,
                            phone: undefined,
                          }));
                        }}
                        placeholder="Phone number"
                      />
                    </div>

                    {contactErrors.phone && (
                      <p className="paper-popup__field-error">
                        {contactErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Business Name</label>

                    <input
                      type="text"
                      className="form-input"
                      value={contact.businessName}
                      onChange={(event) =>
                        setContact((current) => ({
                          ...current,
                          businessName: event.target.value,
                        }))
                      }
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Website</label>

                    <input
                      type="url"
                      className="form-input"
                      value={contact.website}
                      onChange={(event) =>
                        setContact((current) => ({
                          ...current,
                          website: event.target.value,
                        }))
                      }
                      placeholder="https://yourwebsite.com.au"
                    />
                  </div>

                  <div className="form-group paper-popup__field--full">
                    <label className="form-label">Anything Else?</label>

                    <textarea
                      className="form-textarea"
                      rows={4}
                      value={contact.message}
                      onChange={(event) =>
                        setContact((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      placeholder="Add anything useful about your project, timeline, budget or goals."
                    />
                  </div>
                </div>

                {formError && (
                  <div className="paper-popup__wizard-error" role="alert">
                    <i
                      className="fas fa-exclamation-circle"
                      aria-hidden="true"
                    />
                    <p>{formError}</p>
                  </div>
                )}

                <div className="paper-popup__wizard-actions">
                  <button type="button" onClick={goBack} className="paper-button">
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="paper-button paper-button--rust"
                  >
                    {isSubmitting ? "Sending..." : "Send Request"}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}