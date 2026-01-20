"use client";

import { createContext, useContext, useState, useEffect } from "react";
import PopupForm from "./PopupForm";

type FormType = "contact" | "seoAudit" | "adsAudit" | "consultation" | null;

interface PopupFormContextType {
  openForm: (type: FormType) => void;
  closeForm: () => void;
}

const PopupFormContext = createContext<PopupFormContextType | undefined>(undefined);

export function usePopupForm() {
  const context = useContext(PopupFormContext);
  if (!context) {
    throw new Error("usePopupForm must be used within PopupFormProvider");
  }
  return context;
}

export default function PopupFormProvider({ children }: { children: React.ReactNode }) {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  useEffect(() => {
    // Add click handlers to all elements with data-popup attribute
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("[data-popup]") as HTMLElement;

      if (button) {
        e.preventDefault();
        const formType = button.getAttribute("data-popup") as FormType;
        setActiveForm(formType);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const openForm = (type: FormType) => {
    setActiveForm(type);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <PopupFormContext.Provider value={{ openForm, closeForm }}>
      {children}
      {activeForm && activeForm !== null && (
        <PopupForm
          isOpen={true}
          onClose={closeForm}
          formType={activeForm}
        />
      )}
    </PopupFormContext.Provider>
  );
}
