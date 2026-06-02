import fs from "node:fs";
const target = "app/globals.css";
const source = "styles/web-design-services-editorial-batch7.css";
const marker = "Web Design Service Pages — Editorial Conversion Batch 7";
if (!fs.existsSync(target)) throw new Error("Cannot find app/globals.css. Run from project root.");
const globals = fs.readFileSync(target, "utf8");
const css = fs.readFileSync(source, "utf8");
if (globals.includes(marker)) console.log("Batch 7 CSS already applied.");
else { fs.writeFileSync(target, `${globals.trim()}\n\n${css.trim()}\n`, "utf8"); console.log("Batch 7 CSS appended to app/globals.css."); }
