"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
    setError(null); // Clear previous errors

    try {
      console.log("📋 [PopupForm] Preparing form data for submission");
      console.log("   - Form Type:", formType);
      console.log("   - Form Data:", formData);

      const submissionPayload = {
        type: formType,
        ...formData,
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
        status: "new",
      };

      console.log("📤 [PopupForm] Sending submission to /api/submissions/save");
      console.log("   - Payload:", submissionPayload);

      // Save submission to database
      const response = await fetch("/api/submissions/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });

      console.log("📥 [PopupForm] Received response from server");
      console.log("   - Status:", response.status);
      console.log("   - Status Text:", response.statusText);

      const data = await response.json();
      console.log("   - Response Data:", data);

      if (response.ok) {
        console.log("✓ [PopupForm] Form submitted successfully");
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({});
          setError(null);
          router.push(getFormRedirectUrl(formType));
        }, 2000);
      } else {
        // Handle error response
        const errorMessage =
          data?.error ||
          data?.details ||
          "Failed to submit form. Please try again.";
        console.error("❌ [PopupForm] Server returned error");
        console.error("   - Error Code:", data?.code);
        console.error("   - Error Message:", errorMessage);
        setError(errorMessage);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("❌ [PopupForm] Exception during form submission:", error);
      if (error instanceof Error) {
        console.error("   - Error Type:", error.constructor.name);
        console.error("   - Error Message:", error.message);
        console.error("   - Stack:", error.stack);
      }
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again.";
      setError(errorMessage);
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
    <div className="paper-popup" onClick={onClose}>
      <div
        className="paper-popup__panel paper-grain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="paper-popup__header">
          <span className="paper-popup__eyebrow">Sydney Web Designer</span>

          <button
            onClick={onClose}
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
  );
}