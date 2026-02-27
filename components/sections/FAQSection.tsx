/**
 * FAQSection Component
 *
 * A reusable component for displaying FAQs in a simple, readable list format.
 * Accepts FAQ data from centralized data structures.
 *
 * @example
 * ```tsx
 * import { faqGroups } from '@/lib/data/faqs';
 * import FAQSection from '@/components/sections/FAQSection';
 *
 * <FAQSection
 *   data={faqGroups.webDesign}
 * />
 * ```
 */

import type { FAQGroup } from '@/lib/data/faqs';

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

/**
 * Displays a list of frequently asked questions with questions in bold
 * and answers below. Simple, scannable format without accordion functionality.
 */
export default function FAQSection({
  data,
  className = '',
  showHeader = true,
  centerHeader = false,
  limit = 0,
}: FAQSectionProps) {
  const headerAlign = centerHeader ? 'text-center mx-auto' : '';
  const displayFaqs = limit > 0 ? data.faqs.slice(0, limit) : data.faqs;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        {showHeader && (data.title || data.description) && (
          <div className={`section-title ${headerAlign}`}>
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className="text-lg text-text-light max-w-3xl">
                {data.description}
              </p>
            )}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {displayFaqs.map((faq, index) => (
              <div
                key={index}
                className="pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
              >
                {/* Question */}
                <h3 className="text-xl font-bold text-primary-navy mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-orange/10 text-primary-orange flex items-center justify-center text-sm font-semibold mt-0.5">
                    <i className="fas fa-question"></i>
                  </span>
                  <span>{faq.question}</span>
                </h3>

                {/* Answer */}
                <div className="pl-9">
                  <p className="text-text-light leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show more indicator if limited */}
          {limit > 0 && data.faqs.length > limit && (
            <div className="mt-8 text-center">
              <p className="text-text-light">
                Showing {limit} of {data.faqs.length} questions
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
