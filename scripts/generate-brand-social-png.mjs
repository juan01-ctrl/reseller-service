/**
 * Genera `public/brand-icon-social.png` desde `public/brand-icon-circle.svg`.
 * Salida 2048×2048, PNG optimizado (redes / avatares).
 * Ejecutar: node scripts/generate-brand-social-png.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public", "brand-icon-circle.svg");
const outPath = join(root, "public", "brand-icon-social.png");

const SIZE = 2048;

const svg = readFileSync(svgPath, "utf8").replace(
  "<svg ",
  `<svg width="${SIZE}" height="${SIZE}" `,
);

const png = await sharp(Buffer.from(svg))
  .png({
    compressionLevel: 9,
    adaptiveFiltering: true,
    effort: 10,
  })
  .toBuffer();

writeFileSync(outPath, png);
console.log("OK:", outPath, `${SIZE}×${SIZE}`, `(${png.length} bytes)`);
