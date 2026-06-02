import fs from "node:fs";

const files = [
  // Web Design batch
  "app/services/ecommerce-websites/page.tsx",
  "app/services/ui-ux-design/page.tsx",
  "app/services/website-redesign/page.tsx",
  "app/services/responsive-design/page.tsx",
  "app/services/high-performance-landing-pages/page.tsx",
  "app/services/landing-pages/page.tsx",
  "app/services/vibe-code-website/page.tsx",
  "app/web-design/page.tsx",

  // SEO batch
  "app/services/local-seo/page.tsx",
  "app/services/mobile-seo/page.tsx",
  "app/services/ecommerce-seo/page.tsx",
  "app/services/seo-copywriting/page.tsx",
  "app/services/link-building/page.tsx",
  "app/services/digital-pr/page.tsx",
  "app/services/pay-on-performance-seo/page.tsx",

  // Growth / Advertising batch
  "app/services/meta-ads/page.tsx",
  "app/services/social-media-marketing/page.tsx",
  "app/services/content-marketing/page.tsx",
  "app/services/email-marketing/page.tsx",
  "app/services/conversion-optimization/page.tsx",
  "app/growth-marketing/page.tsx",

  // Branding / index batch
  "app/services/brand-identity/page.tsx",
  "app/services/logo-design/page.tsx",
  "app/services/page.tsx",

  // Current design system files
  "components/service-page/ServiceTrustStrip.tsx",
  "components/service-page/ServiceStatsSection.tsx",
  "components/service-page/ServiceFeaturesSection.tsx",
  "components/service-page/ServiceProcessSection.tsx",
  "components/service-page/ServiceResultsSection.tsx",
  "components/service-page/ServiceTestimonialsSection.tsx",
  "components/service-page/ServiceFAQSection.tsx",
  "components/service-page/ServiceLeadPanel.tsx",
  "components/ServiceHeroSection.tsx",
  "components/RelatedServices.tsx",
  "components/CTASection.tsx",
  "components/FAQAccordion.tsx",

  // Styling
  "app/globals.css",
];

let output = "";

for (const file of files) {
  output += `\n\n============================================================\n`;
  output += `FILE: ${file}\n`;
  output += `============================================================\n\n`;

  if (!fs.existsSync(file)) {
    output += "MISSING FILE\n";
    continue;
  }

  output += fs.readFileSync(file, "utf8");
}

fs.writeFileSync("remaining-service-pages-current-code.txt", output, "utf8");

console.log("Created remaining-service-pages-current-code.txt");