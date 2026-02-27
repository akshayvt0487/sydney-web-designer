import Link from "next/link";

interface ServiceHeroSectionProps {
  badge: {
    icon: string;
    text: string;
  };
  heading: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      onClick?: () => void;
      dataPopup?: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export default function ServiceHeroSection({
  badge,
  heading,
  description,
  buttons,
}: ServiceHeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1e293b] via-[#2d3b4f] to-[#1e293b] text-white py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-orange rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-orange/10 border border-primary-orange/30 text-primary-orange px-5 py-2.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            <i className={badge.icon}></i>
            <span>{badge.text}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {buttons.primary.dataPopup ? (
              <button
                data-popup={buttons.primary.dataPopup}
                className="btn btn-primary btn-lg"
              >
                {buttons.primary.text}
              </button>
            ) : (
              <button
                onClick={buttons.primary.onClick}
                className="btn btn-primary btn-lg"
              >
                {buttons.primary.text}
              </button>
            )}
            <Link href={buttons.secondary.href} className="btn btn-white btn-lg">
              {buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
