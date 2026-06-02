/**
 * FAQSection Component
 *
 * Visual presentation is now an accordion. Data, title, description,
 * question wording, answer wording and limit behaviour remain unchanged.
 */

import FAQAccordion from "@/components/FAQAccordion";
import type { FAQGroup } from "@/lib/data/faqs";

export interface FAQSectionProps {
  /** FAQ group data containing title, description, and FAQs */
  data: FAQGroup;
  /** Additional CSS classes for the section */
  className?: string;
  /** Show title and description */
  showHeader?: boolean;
  /** Center align the header text */
  centerHeader?: boolean;
  /** Maximum number of FAQs to display (0 = show all) */
  limit?: number;
}

export default function FAQSection({
  data,
  className = "",
  showHeader = true,
  centerHeader = false,
  limit = 0,
}: FAQSectionProps) {
  const displayFaqs = limit > 0 ? data.faqs.slice(0, limit) : data.faqs;

  return (
    <section className={`service-paper-section service-faq-section paper-grain ${className}`}>
      <div className="container">
        {showHeader && (data.title || data.description) && (
          <div
            className={`service-paper-heading ${
              centerHeader ? "service-paper-heading--center" : ""
            }`}
          >
            {data.title && <h2>{data.title}</h2>}
            {data.description && <p>{data.description}</p>}
          </div>
        )}

        <FAQAccordion faqs={displayFaqs} />

        {limit > 0 && data.faqs.length > limit && (
          <div className="service-faq-section__limit">
            <p>
              Showing {limit} of {data.faqs.length} questions
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
