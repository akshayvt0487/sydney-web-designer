const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", ".next", "server", "app", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const heroStart = html.indexOf('<section class="paper-hero paper-grain">');
const heroEnd = html.indexOf('<section class="home-intro', heroStart);

if (heroStart === -1 || heroEnd === -1) {
  throw new Error("Could not find the homepage hero in built HTML.");
}

const heroHtml = html.slice(heroStart, heroEnd);

if (!heroHtml.includes("Sydney Web Designer")) {
  throw new Error("Homepage hero headline is missing from built HTML.");
}

if (/style="[^"]*opacity:0;transform:translateY/.test(heroHtml)) {
  throw new Error(
    "Homepage hero is hidden on first paint by reveal inline styles."
  );
}

const revealHiddenCount = (html.match(/style="[^"]*opacity:0;transform:translateY/g) || [])
  .length;

if (revealHiddenCount > 0) {
  throw new Error(
    `Homepage has ${revealHiddenCount} first-paint reveal wrappers hidden by inline styles.`
  );
}

if (!html.includes("home-editorial-tech__track")) {
  throw new Error("Technology marquee markup is missing from built HTML.");
}

console.log("Homepage first-paint HTML is visible and marquee markup is present.");
