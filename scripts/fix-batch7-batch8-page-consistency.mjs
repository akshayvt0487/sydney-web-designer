import fs from "node:fs";

const pagesWithExistingBreadcrumbData = [
  // Web Design service batch
  "app/services/high-performance-landing-pages/page.tsx",
  "app/services/landing-pages/page.tsx",
  "app/services/responsive-design/page.tsx",
  "app/services/ui-ux-design/page.tsx",
  "app/services/website-redesign/page.tsx",

  // SEO service batch
  "app/services/ecommerce-seo/page.tsx",
  "app/services/seo-copywriting/page.tsx",
  "app/services/digital-pr/page.tsx",
  "app/services/pay-on-performance-seo/page.tsx",
];

const seoBatchPages = [
  "app/services/local-seo/page.tsx",
  "app/services/mobile-seo/page.tsx",
  "app/services/ecommerce-seo/page.tsx",
  "app/services/seo-copywriting/page.tsx",
  "app/services/link-building/page.tsx",
  "app/services/digital-pr/page.tsx",
  "app/services/pay-on-performance-seo/page.tsx",
];

function exists(path) {
  return fs.existsSync(path);
}

function save(path, value) {
  fs.writeFileSync(path, value, "utf8");
}

function addBreadcrumbsComponent(source, path) {
  if (!source.includes("const breadcrumbs")) {
    console.log(`Skipped breadcrumb UI: ${path} has no existing breadcrumbs data.`);
    return source;
  }

  if (!source.includes('import Breadcrumbs from "@/components/Breadcrumbs";')) {
    source = `import Breadcrumbs from "@/components/Breadcrumbs";\n${source}`;
  }

  if (source.includes("<Breadcrumbs items={breadcrumbs} />")) {
    console.log(`Breadcrumb UI already exists: ${path}`);
    return source;
  }

  const heroComment = "      {/* Hero Section */}";
  if (source.includes(heroComment)) {
    source = source.replace(
      heroComment,
      `      <Breadcrumbs items={breadcrumbs} />\n\n${heroComment}`,
    );
    console.log(`Added visible breadcrumb UI: ${path}`);
    return source;
  }

  const heroComponent = "      <ServiceHeroSection";
  if (source.includes(heroComponent)) {
    source = source.replace(
      heroComponent,
      `      <Breadcrumbs items={breadcrumbs} />\n\n${heroComponent}`,
    );
    console.log(`Added visible breadcrumb UI: ${path}`);
    return source;
  }

  console.log(`Could not insert breadcrumb UI automatically: ${path}`);
  return source;
}

/* Fix visible "\n" generated between the wrapper and schema script in Batch 8. */
for (const path of seoBatchPages) {
  if (!exists(path)) {
    console.log(`Missing file, skipped: ${path}`);
    continue;
  }

  let source = fs.readFileSync(path, "utf8");
  const before = source;

  source = source.replace(
    /(className="seo-paper-route[^"]*paper-grain">)\\n(\s*<script)/g,
    "$1\n$2",
  );

  if (source !== before) {
    save(path, source);
    console.log(`Removed visible \\\\n text: ${path}`);
  } else {
    console.log(`No visible \\\\n text found: ${path}`);
  }
}

/* Render existing breadcrumb data visibly. No breadcrumb wording is invented. */
for (const path of pagesWithExistingBreadcrumbData) {
  if (!exists(path)) {
    console.log(`Missing file, skipped: ${path}`);
    continue;
  }

  const original = fs.readFileSync(path, "utf8");
  const updated = addBreadcrumbsComponent(original, path);

  if (updated !== original) {
    save(path, updated);
  }
}

console.log("Page repair complete. Existing visible page wording, links, button labels and logic were not rewritten.");
