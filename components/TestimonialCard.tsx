import { Review } from "@/lib/constants";

interface TestimonialCardProps {
  review: Review;
  compact?: boolean;
}

export default function TestimonialCard({
  review,
  compact = false,
}: TestimonialCardProps) {
  return (
    <article className={`paper-testimonial ${compact ? "paper-testimonial--compact" : ""}`}>
      <div className="paper-testimonial__stars" aria-label={`${review.rating} star review`}>
        {[...Array(review.rating)].map((_, index) => (
          <i key={index} className="fas fa-star" aria-hidden="true" />
        ))}
      </div>

      <p className="paper-testimonial__quote">&quot;{review.text}&quot;</p>

      <footer className="paper-testimonial__author">
        <strong>{review.name}</strong>
        {review.company && <span>{review.company}</span>}
        <small>Via Google</small>
      </footer>
    </article>
  );
}
