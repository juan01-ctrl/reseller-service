import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto"
import { getIntegrationCryptoEnv } from "@/lib/env"

const ALGO = "aes-256-gcm"

function getKey() {
  const { INTEGRATION_TOKEN_ENCRYPTION_KEY } = getIntegrationCryptoEnv()
  // Derive a stable 32-byte key from env material.
  return createHash("sha256").update(INTEGRATION_TOKEN_ENCRYPTION_KEY).digest()
}

export function encryptSecret(plainText: string) {
  const iv = randomBytes(12)
  const key = getKey()
  const cipher = createCipheriv(ALGO, key, iv)
  const encrypted = Buffer.concat([cipher.update(plainText, "utf8"), cipher.final()])
  const tag = cipher.getAuthTag()

  return `v1.${iv.toString("base64url")}.${tag.toString("base64url")}.${encrypted.toString("base64url")}`
}

export function decryptSecret(payload: string) {
  const [version, ivBase64, tagBase64, encryptedBase64] = payload.split(".")
  if (version !== "v1" || !ivBase64 || !tagBase64 || !encryptedBase64) {
    throw new Error("Invalid encrypted payload")
  }

  const key = getKey()
  const iv = Buffer.from(ivBase64, "base64url")
  const tag = Buffer.from(tagBase64, "base64url")
  const encrypted = Buffer.from(encryptedBase64, "base64url")

  const decipher = createDecipheriv(ALGO, key, iv)
  decipher.setAuthTag(tag)
  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()])
  return decrypted.toString("utf8")
}
