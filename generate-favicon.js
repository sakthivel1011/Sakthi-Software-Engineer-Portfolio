import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using Profile Image1.jpg because it's smaller (75KB vs 900KB) and likely clearer for a small icon
const imagePath = path.join(
  process.cwd(),
  "src",
  "assets",
  "Profile Image1.jpg",
);
const outputPath = path.join(process.cwd(), "public", "favicon.svg");

try {
  console.log("Reading image from:", imagePath);
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image file not found at ${imagePath}`);
  }

  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circleClip">
      <circle cx="50" cy="50" r="50" />
    </clipPath>
  </defs>
  <image width="100" height="100" href="data:image/jpeg;base64,${base64Image}" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

  fs.writeFileSync(outputPath, svgContent);
  console.log("Favicon generated successfully at " + outputPath);
  console.log("SVG size:", (svgContent.length / 1024).toFixed(2) + " KB");
} catch (error) {
  console.error("Error generating favicon:", error);
  process.exit(1);
}
