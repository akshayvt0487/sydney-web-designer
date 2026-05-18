import Link from "next/link";

interface RelatedService {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
          Related Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary-orange/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-amber-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary-orange font-semibold group-hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
