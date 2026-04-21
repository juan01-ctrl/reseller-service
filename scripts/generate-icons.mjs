/**
 * Genera PNG desde public/icon.svg (favicon, PWA, Apple).
 * Ejecutar: node scripts/generate-icons.mjs
 */
import sharp from "sharp"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const svgPath = join(root, "public", "icon.svg")
const svg = readFileSync(svgPath)

const targets = [
  ["icon.png", 512],
  ["icon-192.png", 192],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
]

for (const [name, size] of targets) {
  const out = join(root, "public", name)
  await sharp(svg)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(out)
  console.log("OK", name, `${size}×${size}`)
}
