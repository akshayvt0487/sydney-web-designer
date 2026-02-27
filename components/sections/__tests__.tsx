/**
 * Component Tests & Examples
 *
 * Quick verification file to test components with real data.
 * This file can be imported in any page to verify components work correctly.
 *
 * Usage:
 * import TestComponents from '@/components/sections/__tests__';
 * <TestComponents />
 */

import { HeroSection, FeaturesGrid, ProcessSteps, FAQSection } from './index';
import { heroes } from '@/lib/data/heroes';
import { featureGroups } from '@/lib/data/features';
import { processFlows } from '@/lib/data/processes';
import { faqGroups } from '@/lib/data/faqs';

export default function TestComponents() {
  return (
    <div className="min-h-screen">
      {/* Test HeroSection */}
      <section className="border-b-4 border-red-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-100">
          HeroSection Test
        </h2>
        <HeroSection data={heroes.webDesign} />
      </section>

      {/* Test HeroSection with Stats */}
      <section className="border-b-4 border-blue-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-blue-100">
          HeroSection with Stats Test
        </h2>
        <HeroSection
          data={heroes.homepage}
          stats={[
            { number: '13+', label: 'Years Experience' },
            { number: '500+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
          ]}
        />
      </section>

      {/* Test FeaturesGrid - 3 columns */}
      <section className="border-b-4 border-green-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-green-100">
          FeaturesGrid (3 columns) Test
        </h2>
        <FeaturesGrid
          data={featureGroups.homepageServices}
          columns={3}
          centerHeader={true}
        />
      </section>

      {/* Test FeaturesGrid - 4 columns */}
      <section className="border-b-4 border-yellow-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-yellow-100">
          FeaturesGrid (4 columns) Test
        </h2>
        <FeaturesGrid
          data={featureGroups.webDesignIncluded}
          columns={4}
          className="bg-secondary"
        />
      </section>

      {/* Test ProcessSteps - Numbered */}
      <section className="border-b-4 border-purple-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-purple-100">
          ProcessSteps (Numbered) Test
        </h2>
        <ProcessSteps
          data={processFlows.webDesign}
          variant="numbered"
          centerHeader={true}
        />
      </section>

      {/* Test ProcessSteps - Icon */}
      <section className="border-b-4 border-pink-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-pink-100">
          ProcessSteps (Icon) Test
        </h2>
        <ProcessSteps
          data={processFlows.seo}
          variant="icon"
          showConnectors={false}
          className="bg-secondary"
        />
      </section>

      {/* Test FAQSection */}
      <section className="border-b-4 border-orange-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-orange-100">
          FAQSection Test
        </h2>
        <FAQSection
          data={faqGroups.webDesign}
          centerHeader={true}
        />
      </section>

      {/* Test FAQSection - Limited */}
      <section className="border-b-4 border-teal-500">
        <h2 className="text-center text-2xl font-bold py-4 bg-teal-100">
          FAQSection (Limited to 3) Test
        </h2>
        <FAQSection
          data={faqGroups.seo}
          limit={3}
          className="bg-secondary"
        />
      </section>
    </div>
  );
}
