import type { ReactNode } from "react";
import FAQAccordion from "@/components/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface ServiceFAQSectionProps {
  title: ReactNode;
  description?: string;
  faqs: FAQItem[];
}

export default function ServiceFAQSection({
  title,
  description,
  faqs,
}: ServiceFAQSectionProps) {
  return (
    <section className="service-paper-section service-faq-section paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--center">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

