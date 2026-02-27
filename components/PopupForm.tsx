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
          router.push(getFormRedirectUrl(formType));
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
