import { z } from "zod"

const authEnvSchema = z.object({
  AUTH_SECRET: z.string().min(32, "AUTH_SECRET must be at least 32 chars"),
  NEXT_PUBLIC_APP_URL: z.string().url("NEXT_PUBLIC_APP_URL must be a valid URL"),
})

const metaEnvSchema = z.object({
  META_APP_ID: z.string().min(1, "META_APP_ID is required"),
  META_APP_SECRET: z.string().min(1, "META_APP_SECRET is required"),
  META_REDIRECT_URI: z.string().url("META_REDIRECT_URI must be a valid URL"),
  META_GRAPH_VERSION: z.string().default("v23.0"),
  META_VERIFY_TOKEN: z.string().min(1, "META_VERIFY_TOKEN is required"),
})

const integrationCryptoEnvSchema = z.object({
  INTEGRATION_TOKEN_ENCRYPTION_KEY: z.string().min(32, "INTEGRATION_TOKEN_ENCRYPTION_KEY must be at least 32 chars"),
})

let authCache: z.infer<typeof authEnvSchema> | null = null
let metaCache: z.infer<typeof metaEnvSchema> | null = null
let integrationCryptoCache: z.infer<typeof integrationCryptoEnvSchema> | null = null

export function getAuthEnv() {
  if (authCache) return authCache
  authCache = authEnvSchema.parse(process.env)
  return authCache
}

export function getMetaEnv() {
  if (metaCache) return metaCache
  metaCache = metaEnvSchema.parse(process.env)
  return metaCache
}

export function getIntegrationCryptoEnv() {
  if (integrationCryptoCache) return integrationCryptoCache
  integrationCryptoCache = integrationCryptoEnvSchema.parse(process.env)
  return integrationCryptoCache
}
