import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  link,
  features,
}: ServiceCardProps) {
  return (
    <div className="card group hover:border-primary-orange hover:border-2 transition-all h-full flex flex-col">
      {/* Icon */}
      <div className="mb-4 bg-gradient-orange rounded-full w-20 h-20 flex items-center justify-center">
        <i className={`fas ${icon} text-4xl text-white`}></i>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-orange transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      <Link
        href={link}
        className="text-primary-orange font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
      >
        Learn More
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
