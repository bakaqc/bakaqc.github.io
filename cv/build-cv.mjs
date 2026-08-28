// Render every CV source (*.html in this folder) to a print-ready A4 PDF.
//
//   yarn cv:build              render all
//   yarn cv:build FullStack    render only files matching "FullStack"
//
// Uses headless Chrome directly — no extra dependency to install.
// Set CHROME_PATH if your Chrome lives somewhere unusual.

import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const CV_DIR = dirname(fileURLToPath(import.meta.url));

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));

if (!chrome) {
  console.error(
    "Could not find Chrome. Set CHROME_PATH to the executable, e.g.\n" +
      '  CHROME_PATH="/path/to/chrome" yarn cv:build',
  );
  process.exit(1);
}

const filter = process.argv[2];
const sources = readdirSync(CV_DIR)
  .filter((f) => f.endsWith(".html"))
  .filter((f) => !filter || f.toLowerCase().includes(filter.toLowerCase()));

if (sources.length === 0) {
  console.error(`No .html source matched${filter ? ` "${filter}"` : ""}.`);
  process.exit(1);
}

for (const source of sources) {
  const htmlPath = resolve(CV_DIR, source);
  const pdfPath = join(CV_DIR, source.replace(/\.html$/, ".pdf"));

  execFileSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "ignore" },
  );

  console.log(`${source}  ->  ${source.replace(/\.html$/, ".pdf")}`);
}

console.log(
  "\nDone. Check that each PDF is still a single page and nothing is clipped\n" +
    "at the bottom of either column before sending it anywhere.",
);
