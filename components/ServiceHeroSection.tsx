import Image from "next/image";
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
  /**
   * Kept for compatibility with existing service pages.
   * It is intentionally not rendered because it duplicates the badge text.
   */
  h1?: string;
  heroImage?: string;
  heroImageAlt?: string;
}

export default function ServiceHeroSection({
  badge,
  heading,
  description,
  buttons,
  heroImage,
  heroImageAlt = "",
}: ServiceHeroSectionProps) {
  const hasHeroImage = Boolean(heroImage);

  return (
    <section className="relative isolate overflow-hidden bg-[#0f172a] !py-0 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_14%,rgba(245,158,11,0.16),transparent_25%),radial-gradient(circle_at_10%_90%,rgba(245,158,11,0.075),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.027)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.027)_1px,transparent_1px)] bg-[size:70px_70px] opacity-45" />
      </div>

      <div className="container relative z-10">
        <div
          className={`grid items-center gap-10 py-12 sm:py-14 lg:py-[68px] ${
            hasHeroImage
              ? "lg:grid-cols-[minmax(0,0.94fr)_minmax(400px,0.8fr)] lg:gap-14"
              : ""
          }`}
        >
          {/* Content */}
          <div className={hasHeroImage ? "max-w-[700px]" : "max-w-[900px]"}>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary-orange/35 bg-primary-orange/10 px-4 py-2 text-sm font-semibold text-primary-orange">
              <i className={badge.icon} aria-hidden="true" />
              <span>{badge.text}</span>
            </div>

            {/* Main Visible Heading */}
            <h1
              className={`font-bold leading-[1.08] tracking-[-0.055em] text-white ${
                hasHeroImage
                  ? "max-w-[680px] text-[clamp(2.2rem,4.1vw,3.8rem)]"
                  : "max-w-[900px] text-[clamp(2.25rem,4.6vw,4.2rem)]"
              }`}
            >
              {heading}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[660px] text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {buttons.primary.dataPopup ? (
                <button
                  type="button"
                  data-popup={buttons.primary.dataPopup}
                  className="btn btn-primary !min-h-[46px] !px-5 !py-3 !text-sm sm:!min-h-[52px] sm:!px-7 sm:!text-base"
                >
                  {buttons.primary.text}
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={buttons.primary.onClick}
                  className="btn btn-primary !min-h-[46px] !px-5 !py-3 !text-sm sm:!min-h-[52px] sm:!px-7 sm:!text-base"
                >
                  {buttons.primary.text}
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                </button>
              )}

              <Link
                href={buttons.secondary.href}
                className="btn btn-white !min-h-[46px] !px-5 !py-3 !text-sm sm:!min-h-[52px] sm:!px-7 sm:!text-base"
              >
                {buttons.secondary.text}
              </Link>
            </div>
          </div>

          {/* Real Project Preview — appears only when a page provides an image */}
          {hasHeroImage && heroImage && (
            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="absolute -inset-5 -z-10 rounded-[32px] bg-primary-orange/[0.08] blur-2xl" />

              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.055] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-4">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-orange" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="ml-3 h-7 flex-1 rounded-full border border-white/[0.05] bg-white/[0.055]" />
                </div>

                <div className="relative aspect-[1.42/1] overflow-hidden rounded-[15px] bg-white">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1023px) 100vw, 48vw"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 right-5 hidden h-[58px] w-[138px] rounded-xl border border-white/10 bg-[#172337] p-3 shadow-xl sm:block">
                <div className="mb-2 h-2 w-16 rounded-full bg-primary-orange/60" />
                <div className="mb-2 h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-4/6 rounded-full bg-white/10" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}