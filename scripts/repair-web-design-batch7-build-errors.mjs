import fs from "node:fs";

const ecommercePath = "app/services/ecommerce-websites/page.tsx";
const syntaxPaths = [
  "app/services/ui-ux-design/page.tsx",
  "app/services/website-redesign/page.tsx",
  "app/services/responsive-design/page.tsx",
  "app/services/landing-pages/page.tsx",
];

function requireFile(path) {
  if (!fs.existsSync(path)) {
    throw new Error(`Cannot find ${path}. Run this from the project root.`);
  }
}

requireFile(ecommercePath);

let ecommerce = fs.readFileSync(ecommercePath, "utf8");

if (
  ecommerce.includes('const service = services.find((s) => s.slug === "ecommerce-websites")') &&
  !ecommerce.includes('from "@/lib/constants"')
) {
  ecommerce = `import { services } from "@/lib/constants";\n${ecommerce}`;
  fs.writeFileSync(ecommercePath, ecommerce, "utf8");
  console.log(`Fixed missing services import: ${ecommercePath}`);
} else {
  console.log(`No missing services import fix needed: ${ecommercePath}`);
}

for (const path of syntaxPaths) {
  requireFile(path);
  let source = fs.readFileSync(path, "utf8");
  const original = source;

  source = source
    .replace(/primary:\s*\{\{\s*/g, "primary: { ")
    .replace(/secondary:\s*\{\{\s*/g, "secondary: { ")
    .replace(/^(\s*primary:\s*\{.*)\s+\}\},\s*$/gm, "$1 },")
    .replace(/^(\s*secondary:\s*\{.*)\s+\}\},\s*$/gm, "$1 },")
    .replace(/\(\{\{/g, "({")
    .replace(/\}\}\)\)/g, "}))");

  if (source !== original) {
    fs.writeFileSync(path, source, "utf8");
    console.log(`Fixed malformed JSX object syntax: ${path}`);
  } else {
    console.log(`No malformed JSX object syntax found: ${path}`);
  }
}

console.log("Repair complete. No visible content, button text, URLs, form logic or CSS was changed.");
