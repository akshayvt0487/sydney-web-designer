"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubmittingOverlay from "@/components/SubmittingOverlay";
import { generateBreadcrumbSchema } from "@/lib/schemas";

const POSITION_LABELS: Record<string, string> = {
  "web-designer": "Web Designer",
  "seo-specialist": "SEO Specialist",
  "google-ads-specialist": "Google Ads Specialist",
  "meta-ads-specialist": "Meta Ads Specialist",
  "performance-marketer": "Performance Marketer",
  "project-manager": "Project Manager",
  "content-writer": "Content Writer",
  "general-application": "General Application",
};

const MAX_TOTAL_UPLOAD_BYTES = 3 * 1024 * 1024;
const ALLOWED_FILE_EXTENSIONS = [".pdf", ".doc", ".docx"];

export default function CareerApplicationPage() {
  const router = useRouter();

  const [positionSlug, setPositionSlug] = useState("general-application");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    currentPosition: "",
    currentCompany: "",
    whyJoin: "",
    keyStrengths: "",
    workLocation: "",
    employmentType: "",
    daysAvailable: "",
    hoursAvailable: "",
    startAvailability: "",
    preferredHours: "",
    howHeard: "",
    additionalComments: "",
    consent: false,
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedPosition = params.get("position") || "general-application";

    setPositionSlug(
      POSITION_LABELS[requestedPosition]
        ? requestedPosition
        : "general-application"
    );
  }, []);

  const positionLabel =
    POSITION_LABELS[positionSlug] || POSITION_LABELS["general-application"];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.sydneywebdesigner.com.au" },
    { name: "Careers", url: "https://www.sydneywebdesigner.com.au/careers" },
    {
      name: "Career Application",
      url: "https://www.sydneywebdesigner.com.au/career-application",
    },
  ]);

  const isAllowedDocument = (file: File) => {
    const lowerName = file.name.toLowerCase();

    return ALLOWED_FILE_EXTENSIONS.some((extension) =>
      lowerName.endsWith(extension)
    );
  };

  const handleResumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");

    const file = event.target.files?.[0] || null;

    if (file && !isAllowedDocument(file)) {
      setResumeFile(null);
      event.target.value = "";
      setError("Resume must be a PDF, DOC, or DOCX file.");
      return;
    }

    setResumeFile(file);
  };

  const handleCoverLetterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");

    const file = event.target.files?.[0] || null;

    if (file && !isAllowedDocument(file)) {
      setCoverLetterFile(null);
      event.target.value = "";
      setError("Cover letter must be a PDF, DOC, or DOCX file.");
      return;
    }

    setCoverLetterFile(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!resumeFile) {
      setError("Please upload your resume before submitting.");
      return;
    }

    const totalUploadSize =
      resumeFile.size + (coverLetterFile?.size || 0);

    if (totalUploadSize > MAX_TOTAL_UPLOAD_BYTES) {
      setError("Resume and cover letter must be 3MB or less in total.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("linkedin", formData.linkedin);
      payload.append("portfolio", formData.portfolio);
      payload.append("experience", formData.experience);
      payload.append("currentPosition", formData.currentPosition);
      payload.append("currentCompany", formData.currentCompany);
      payload.append("whyJoin", formData.whyJoin);
      payload.append("keyStrengths", formData.keyStrengths);
      payload.append("workLocation", formData.workLocation);
      payload.append("employmentType", formData.employmentType);
      payload.append("daysAvailable", formData.daysAvailable);
      payload.append("hoursAvailable", formData.hoursAvailable);
      payload.append("startAvailability", formData.startAvailability);
      payload.append("preferredHours", formData.preferredHours);
      payload.append("howHeard", formData.howHeard);
      payload.append("additionalComments", formData.additionalComments);
      payload.append("consent", String(formData.consent));

      /*
       * Important:
       * The API route reads the key "position", not "positionSlug".
       */
      payload.append("position", positionSlug);
      payload.append("positionLabel", positionLabel);

      payload.append("sourcePage", window.location.pathname);
      payload.append("sourceUrl", window.location.href);
      payload.append("resume", resumeFile);

      if (coverLetterFile) {
        payload.append("coverLetter", coverLetterFile);
      }

      const response = await fetch("/api/career-application", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to submit your application."
        );
      }

      router.push("/thank-you?type=career-application");
    } catch (submitError) {
      console.error("Career application failed:", submitError);

      setIsSubmitting(false);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your application. Please try again."
      );
    }
  };

  return (
    <>
      <SubmittingOverlay
        isVisible={isSubmitting}
        title="Submitting Application"
        description="We are securely uploading your documents and sending your application."
      />

      <div className="application-paper-page">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Hero Section */}
        <section className="application-hero">
          <div className="container application-hero__inner">
            <h1>Job Application</h1>

            <p>Join our team of digital marketing experts in Sydney</p>
          </div>
        </section>

        {/* Application Container */}
        <section className="application-main paper-grain">
          <div className="container">
            <div className="application-panel">
              {/* Position Info */}
              <div className="application-position">
                <h2>Position: {positionLabel}</h2>

                <p>Complete the form below to apply for this position</p>
              </div>

              <form className="application-form" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="application-form__section">
                  <h3>Personal Information</h3>

                  <div className="application-form__grid">
                    <div className="application-field">
                      <label>
                        First Name <span>*</span>
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            firstName: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="application-field">
                      <label>
                        Last Name <span>*</span>
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            lastName: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="application-field">
                      <label>
                        Email <span>*</span>
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="john.smith@email.com"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            email: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="application-field">
                      <label>
                        Phone <span>*</span>
                      </label>

                      <input
                        type="tel"
                        required
                        placeholder="04XX XXX XXX"
                        value={formData.phone}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            phone: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="application-field">
                      <label>LinkedIn Profile</label>

                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedin}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            linkedin: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="application-field">
                      <label>Portfolio/Website</label>

                      <input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        value={formData.portfolio}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            portfolio: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Background */}
                <div className="application-form__section">
                  <h3>Professional Background</h3>

                  <div className="application-field">
                    <label>
                      Years of Experience <span>*</span>
                    </label>

                    <select
                      required
                      value={formData.experience}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          experience: event.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>Current/Most Recent Position</label>

                    <input
                      type="text"
                      placeholder="e.g., Senior Web Developer"
                      value={formData.currentPosition}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          currentPosition: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>Current/Most Recent Company</label>

                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.currentCompany}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          currentCompany: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>
                      Why do you want to work with us? <span>*</span>
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what excites you about this opportunity..."
                      value={formData.whyJoin}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          whyJoin: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="application-field">
                    <label>
                      What are your key strengths and skills? <span>*</span>
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your main skills, expertise areas, and what makes you stand out..."
                      value={formData.keyStrengths}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          keyStrengths: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Availability & Preferences */}
                <div className="application-form__section">
                  <h3>Availability &amp; Work Preferences</h3>

                  <div className="application-form__grid">
                    <div className="application-field">
                      <label>
                        Preferred Work Location <span>*</span>
                      </label>

                      <select
                        required
                        value={formData.workLocation}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            workLocation: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="onsite">Onsite (Sydney Office)</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">
                          Hybrid (Mix of office and remote)
                        </option>
                        <option value="flexible">
                          Flexible/Open to discussion
                        </option>
                      </select>
                    </div>

                    <div className="application-field">
                      <label>
                        Employment Type Preference <span>*</span>
                      </label>

                      <select
                        required
                        value={formData.employmentType}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            employmentType: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="fulltime">Full-Time</option>
                        <option value="parttime">Part-Time</option>
                        <option value="casual">Casual</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                        <option value="flexible">
                          Flexible/Open to discussion
                        </option>
                      </select>
                    </div>

                    <div className="application-field">
                      <label>
                        Days Available Per Week <span>*</span>
                      </label>

                      <select
                        required
                        value={formData.daysAvailable}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            daysAvailable: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="1">1 day per week</option>
                        <option value="2">2 days per week</option>
                        <option value="3">3 days per week</option>
                        <option value="4">4 days per week</option>
                        <option value="5">5 days per week (Full-time)</option>
                        <option value="flexible">Flexible availability</option>
                      </select>
                    </div>

                    <div className="application-field">
                      <label>
                        Hours Available Per Week <span>*</span>
                      </label>

                      <select
                        required
                        value={formData.hoursAvailable}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            hoursAvailable: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="10-15">10-15 hours per week</option>
                        <option value="16-24">16-24 hours per week</option>
                        <option value="25-32">25-32 hours per week</option>
                        <option value="33-38">
                          33-38 hours per week (Full-time)
                        </option>
                        <option value="38+">38+ hours per week</option>
                        <option value="flexible">Flexible hours</option>
                      </select>
                    </div>

                    <div className="application-field">
                      <label>
                        Start Date Availability <span>*</span>
                      </label>

                      <select
                        required
                        value={formData.startAvailability}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            startAvailability: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="immediate">Immediate</option>
                        <option value="1-week">1 week notice</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month notice</option>
                        <option value="flexible">Flexible/Negotiable</option>
                      </select>
                    </div>

                    <div className="application-field">
                      <label>Preferred Working Hours</label>

                      <select
                        value={formData.preferredHours}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            preferredHours: event.target.value,
                          })
                        }
                      >
                        <option value="">Select...</option>
                        <option value="standard">
                          Standard hours (9am - 5pm)
                        </option>
                        <option value="early">Early hours (7am - 3pm)</option>
                        <option value="late">Late hours (11am - 7pm)</option>
                        <option value="flexible">Flexible hours</option>
                        <option value="shifts">Open to shift work</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="application-form__section">
                  <h3>Required Documents</h3>

                  <div className="application-field">
                    <label>
                      Resume/CV <span>*</span>
                    </label>

                    <div className="application-upload">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        id="resume-upload"
                        onChange={handleResumeChange}
                      />

                      <label htmlFor="resume-upload">
                        <i className="fas fa-file-alt" aria-hidden="true" />

                        <span>
                          <strong>Click to upload your resume</strong>
                          <small>
                            PDF, DOC, or DOCX (combined max 3MB)
                          </small>
                        </span>

                        {resumeFile && (
                          <span className="application-upload__selected">
                            <i
                              className="fas fa-check-circle"
                              aria-hidden="true"
                            />
                            {resumeFile.name}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="application-field">
                    <label>Cover Letter (Optional)</label>

                    <div className="application-upload">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        id="cover-letter-upload"
                        onChange={handleCoverLetterChange}
                      />

                      <label htmlFor="cover-letter-upload">
                        <i className="fas fa-file-alt" aria-hidden="true" />

                        <span>
                          <strong>Click to upload cover letter</strong>
                          <small>
                            PDF, DOC, or DOCX (combined max 3MB)
                          </small>
                        </span>

                        {coverLetterFile && (
                          <span className="application-upload__selected">
                            <i
                              className="fas fa-check-circle"
                              aria-hidden="true"
                            />
                            {coverLetterFile.name}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Questions */}
                <div className="application-form__section">
                  <h3>Additional Questions</h3>

                  <div className="application-field">
                    <label>How did you hear about this position?</label>

                    <select
                      value={formData.howHeard}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          howHeard: event.target.value,
                        })
                      }
                    >
                      <option value="">Select...</option>
                      <option value="website">Company Website</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="seek">SEEK</option>
                      <option value="indeed">Indeed</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="application-field">
                    <label>Any additional comments or questions?</label>

                    <textarea
                      rows={4}
                      placeholder="Anything else you'd like us to know..."
                      value={formData.additionalComments}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          additionalComments: event.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Consent */}
                <div className="application-consent">
                  <input
                    type="checkbox"
                    required
                    id="consent"
                    checked={formData.consent}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        consent: event.target.checked,
                      })
                    }
                  />

                  <label htmlFor="consent">
                    I consent to Sydney Web Designer storing and processing my
                    personal information for recruitment purposes. I understand
                    my data will be kept confidential and used only for this
                    application. <span>*</span>
                  </label>
                </div>

                {error && (
                  <div className="application-form__error" role="alert">
                    <i
                      className="fas fa-exclamation-circle"
                      aria-hidden="true"
                    />

                    <p>{error}</p>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="application-actions">
                  <div className="application-actions__buttons">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="paper-button paper-button--rust"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>

                    <Link href="/careers" className="paper-button">
                      Cancel
                    </Link>
                  </div>

                  <p>
                    <i className="fas fa-comment-dots" aria-hidden="true" />
                    We review all applications carefully and will respond within
                    5-7 business days
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}