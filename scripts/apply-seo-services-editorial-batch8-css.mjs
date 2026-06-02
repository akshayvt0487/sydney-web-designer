import fs from "node:fs";

const globalsPath = "app/globals.css";
const stylePath = "styles/seo-services-editorial-batch8.css";
const marker = "SEO Service Routes — Editorial Theme Batch 8";

if (!fs.existsSync(globalsPath)) {
  throw new Error("Cannot find app/globals.css. Run this script from the project root.");
}

if (!fs.existsSync(stylePath)) {
  throw new Error(`Cannot find ${stylePath}. Extract the Batch 8 ZIP into the project root first.`);
}

const globals = fs.readFileSync(globalsPath, "utf8");
const css = fs.readFileSync(stylePath, "utf8");

if (globals.includes(marker)) {
  console.log("Batch 8 CSS already exists in app/globals.css. No duplicate styles added.");
} else {
  fs.writeFileSync(globalsPath, `${globals.trim()}\n\n${css.trim()}\n`, "utf8");
  console.log("Batch 8 SEO editorial CSS appended to app/globals.css.");
}
