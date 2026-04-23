import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Evita que Next infiera el root por un lockfile en un directorio padre (ej. ~/package-lock.json).
    root: __dirname,
  },
}

export default nextConfig
