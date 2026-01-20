import { Review } from "@/lib/constants";

interface TestimonialCardProps {
  review: Review;
  compact?: boolean;
}

export default function TestimonialCard({ review, compact = false }: TestimonialCardProps) {
  return (
    <div className={`card h-full ${compact ? 'p-4' : ''}`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className={`text-gray-700 mb-4 ${compact ? 'text-sm line-clamp-4' : ''}`}>
        &quot;{review.text}&quot;
      </p>

      {/* Author Info */}
      <div className="mt-auto">
        <p className="font-semibold text-primary-navy">{review.name}</p>
        {review.company && (
          <p className="text-sm text-text-light">{review.company}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">Via Google</p>
      </div>
    </div>
  );
}
