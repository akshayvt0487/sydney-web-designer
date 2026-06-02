import type { ReactNode } from "react";

interface ServiceTestimonial {
  text: string;
  name: string;
  detail?: string;
  rating?: number;
}

interface ServiceTestimonialsSectionProps {
  title: ReactNode;
  description?: string;
  testimonials: ServiceTestimonial[];
}

export default function ServiceTestimonialsSection({
  title,
  description,
  testimonials,
}: ServiceTestimonialsSectionProps) {
  return (
    <section className="service-paper-section service-detail-testimonials paper-grain">
      <div className="container">
        <div className="service-paper-heading service-paper-heading--center">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="service-detail-testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="service-detail-testimonial"
            >
              <div className="service-detail-testimonial__top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div aria-label={`${testimonial.rating ?? 5} stars`}>
                  {Array.from({ length: testimonial.rating ?? 5 }, (_, star) => (
                    <i key={star} className="fas fa-star" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p>&quot;{testimonial.text}&quot;</p>

              <footer>
                <strong>{testimonial.name}</strong>
                {testimonial.detail && <span>{testimonial.detail}</span>}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

