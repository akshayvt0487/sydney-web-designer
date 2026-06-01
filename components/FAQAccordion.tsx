"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-primary-orange/30 bg-orange-50/50" : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
            >
              <span
                className={`font-heading text-lg font-bold transition-colors ${
                  isOpen ? "text-primary-orange" : "text-slate-900"
                }`}
              >
                {faq.question}
              </span>
              <div
                className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-primary-orange bg-primary-orange text-white"
                    : "border-slate-200 bg-slate-50 text-slate-400"
                }`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}