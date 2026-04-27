#!/usr/bin/env node
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

function parseArgs(argv) {
  const result = {}
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (!arg.startsWith("--")) continue
    const key = arg.slice(2)
    const value = argv[i + 1]
    if (!value || value.startsWith("--")) continue
    result[key] = value
    i += 1
  }
  return result
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const email = String(args.email || "").trim().toLowerCase()
  const password = String(args.password || "")
  const name = String(args.name || "").trim()
  const role = args.role === "admin" ? "admin" : "client"

  if (!email || !isValidEmail(email)) {
    throw new Error("Invalid --email. Example: --email client@example.com")
  }
  if (!name) {
    throw new Error("Missing --name. Example: --name \"Client Name\"")
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.")
  }

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    throw new Error(`A user with email ${email} already exists.`)
  }

  const passwordHash = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      role,
    },
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true,
    },
  })

  console.log(`User created successfully: ${user.email} (${user.role}) id=${user.id} createdAt=${user.createdAt.toISOString()}`)
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : "Unknown error creating user")
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
