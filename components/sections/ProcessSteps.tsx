/**
 * ProcessSteps Component
 *
 * A reusable component for displaying process workflows with numbered steps.
 * Supports vertical layout with optional connecting lines between steps.
 *
 * @example
 * ```tsx
 * import { processFlows } from '@/lib/data/processes';
 * import ProcessSteps from '@/components/sections/ProcessSteps';
 *
 * <ProcessSteps
 *   data={processFlows.webDesign}
 *   variant="numbered"
 *   showConnectors={true}
 * />
 * ```
 */

import type { ProcessFlow } from '@/lib/data/processes';

export interface ProcessStepsProps {
  /** Process flow data containing title, description, and steps */
  data: ProcessFlow;
  /** Visual variant - numbered steps or icon-based */
  variant?: 'numbered' | 'icon';
  /** Show connecting lines between steps */
  showConnectors?: boolean;
  /** Additional CSS classes for the section */
  className?: string;
  /** Show title and description */
  showHeader?: boolean;
  /** Center align the header text */
  centerHeader?: boolean;
}

/**
 * Displays a vertical list of process steps with numbers or icons.
 * Each step includes a title and description with optional visual connectors.
 */
export default function ProcessSteps({
  data,
  variant = 'numbered',
  showConnectors = true,
  className = '',
  showHeader = true,
  centerHeader = false,
}: ProcessStepsProps) {
  const headerAlign = centerHeader ? 'text-center mx-auto' : '';

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
          {data.steps.map((step, index) => {
            const isLast = index === data.steps.length - 1;

            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {showConnectors && !isLast && (
                  <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-orange/40 to-primary-orange/10 hidden md:block"></div>
                )}

                <div className="flex gap-6 mb-8 md:mb-12 group">
                  {/* Step Number/Icon */}
                  <div className="flex-shrink-0">
                    {variant === 'numbered' ? (
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-orange to-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-primary-orange/10 flex items-center justify-center text-primary-orange text-2xl group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
                        <i className={`fas ${step.icon}`}></i>
                      </div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-navy mb-3 group-hover:text-primary-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-light leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
