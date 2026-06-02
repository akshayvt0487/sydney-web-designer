"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="editorial-faq">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={`${faq.question}-${index}`}
            className="editorial-faq__item"
            data-open={isOpen}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="editorial-faq__button"
              aria-expanded={isOpen}
            >
              <span className="editorial-faq__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="editorial-faq__question">{faq.question}</span>

              <span className="editorial-faq__symbol" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="editorial-faq__panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="editorial-faq__answer">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
