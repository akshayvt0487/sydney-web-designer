import fs from "node:fs";

const globalsPath = "app/globals.css";
const cssPath = "styles/batch7-batch8-consistency-repair.css";
const marker = "Batch 7 + Batch 8 Consistency Repair";

if (!fs.existsSync(globalsPath)) {
  throw new Error("Cannot find app/globals.css. Run this command from the project root.");
}

if (!fs.existsSync(cssPath)) {
  throw new Error(`Cannot find ${cssPath}. Extract the ZIP into the project root first.`);
}

const globals = fs.readFileSync(globalsPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

if (globals.includes(marker)) {
  console.log("Consistency repair CSS already exists in app/globals.css. No duplicate block appended.");
} else {
  fs.writeFileSync(globalsPath, `${globals.trim()}\n\n${css.trim()}\n`, "utf8");
  console.log("Consistency repair CSS appended to app/globals.css.");
}
