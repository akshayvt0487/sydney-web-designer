"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SubmittingOverlay from "./SubmittingOverlay";
import {
  getFormConfig,
  getFormRedirectUrl,
  type FormType,
  type FormField,
} from "@/lib/forms";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
}

export default function PopupForm({
  isOpen,
  onClose,
  formType,
}: PopupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get form configuration
  const config = getFormConfig(formType);

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
    setError(null);

    try {
      const submissionPayload = {
        type: formType,
        ...formData,
        formOrigin: "popup-form",
        sourcePage: window.location.pathname,
        sourceUrl: window.location.href,
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
        status: "new",
      };

      const response = await fetch("/api/submissions/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.error ||
          data?.details ||
          "Failed to submit form. Please try again."
        );
      }

      router.push(getFormRedirectUrl(formType));
    } catch (error) {
      console.error("Popup form submission failed:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again."
      );

      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Helper function to render individual fields based on configuration
  const renderField = (field: FormField) => {
    const commonProps = {
      name: field.name,
      required: field.required,
      value: formData[field.name] || "",
      onChange: handleChange,
      placeholder: field.placeholder,
    };

    if (field.type === "textarea") {
      return (
        <textarea
          {...commonProps}
          className="form-textarea"
          rows={field.rows || 4}
        />
      );
    }

    if (field.type === "select" && field.options) {
      return (
        <select {...commonProps} className="form-select">
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }

    // Default to input field for text, email, tel, url
    return (
      <input {...commonProps} type={field.type} className="form-input" />
    );
  };

  // Helper to get grid column class
  const getGridColumnClass = (gridColumn?: string) => {
    if (gridColumn === "full") return "paper-popup__field--full";
    return "";
  };

  if (!isOpen) return null;

  // Group fields by their grid rows for proper layout
  const fieldsInRows: FormField[][] = [];
  let currentRow: FormField[] = [];

  config.fields.forEach((field) => {
    if (field.gridColumn === "full") {
      if (currentRow.length > 0) {
        fieldsInRows.push(currentRow);
        currentRow = [];
      }
      fieldsInRows.push([field]);
    } else {
      currentRow.push(field);
      if (currentRow.length === 2) {
        fieldsInRows.push(currentRow);
        currentRow = [];
      }
    }
  });

  if (currentRow.length > 0) {
    fieldsInRows.push(currentRow);
  }

  return (
    <>
      <SubmittingOverlay
        isVisible={isSubmitting}
        title="Sending Your Request"
        description="We are securely submitting your details and preparing the next step."
      />

      <div className="paper-popup" onClick={isSubmitting ? undefined : onClose}>
        <div
          className="paper-popup__panel paper-grain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="paper-popup__header">
            <span className="paper-popup__eyebrow">Sydney Web Designer</span>

            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="paper-popup__close"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2>{config.title}</h2>
            <p>{config.description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="paper-popup__form">
            {isSuccess ? (
              <div className="paper-popup__success">
                <div className="paper-popup__success-icon">
                  <i className="fas fa-comments" aria-hidden="true" />
                </div>

                <h3>{config.successMessage.title}</h3>
                <p>{config.successMessage.description}</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="paper-popup__error">
                    <div className="paper-popup__error-icon">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="paper-popup__error-copy">
                      <h4>Submission Failed</h4>
                      <p>{error}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="paper-popup__error-close"
                      aria-label="Dismiss error"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="paper-popup__fields">
                  {fieldsInRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="paper-popup__row">
                      {row.map((field) => (
                        <div
                          key={field.name}
                          className={`form-group ${getGridColumnClass(
                            field.gridColumn
                          )}`}
                        >
                          <label className="form-label">{field.label}</label>
                          {renderField(field)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="paper-popup__submit paper-button paper-button--rust"
                >
                  {isSubmitting ? config.submittingText : config.submitText}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}