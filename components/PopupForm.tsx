"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFormConfig, getFormRedirectUrl, type FormType, type FormField } from "@/lib/forms";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
}

export default function PopupForm({ isOpen, onClose, formType }: PopupFormProps) {
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
        const errorMessage = data?.error || data?.details || "Failed to submit form. Please try again.";
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
      const errorMessage = error instanceof Error ? error.message : "Network error. Please check your connection and try again.";
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        <select
          {...commonProps}
          className="form-select"
        >
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
      <input
        {...commonProps}
        type={field.type}
        className="form-input"
      />
    );
  };

  // Helper to get grid column class
  const getGridColumnClass = (gridColumn?: string) => {
    if (gridColumn === 'full') return 'md:col-span-2';
    return '';
  };

  if (!isOpen) return null;

  // Group fields by their grid rows for proper layout
  const fieldsInRows: FormField[][] = [];
  let currentRow: FormField[] = [];

  config.fields.forEach((field) => {
    if (field.gridColumn === 'full') {
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
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-[#f59e0b] transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">
            {config.title}
          </h2>
          <p className="text-gray-200">{config.description}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4"><i className="fas fa-comments"></i></div>
              <h3 className="text-2xl font-bold text-primary-navy mb-2">{config.successMessage.title}</h3>
              <p className="text-gray-600">{config.successMessage.description}</p>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded animate-slideDown">
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-0.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800">Submission Failed</h4>
                      <p className="text-red-700 text-sm mt-1">{error}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="text-red-500 hover:text-red-700 ml-2"
                      aria-label="Dismiss error"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {fieldsInRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${rowIndex < fieldsInRows.length - 1 ? 'mb-4' : 'mb-6'}`}
                >
                  {row.map((field) => (
                    <div
                      key={field.name}
                      className={`form-group ${getGridColumnClass(field.gridColumn)}`}
                    >
                      <label className="form-label">{field.label}</label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? config.submittingText : config.submitText}
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
