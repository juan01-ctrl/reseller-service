import { getMetaEnv } from "@/lib/env"

type MetaErrorBody = {
  error?: {
    message?: string
    code?: number
    type?: string
  }
}

export class MetaApiError extends Error {
  readonly code?: number
  readonly errorType?: string

  constructor(message: string, code?: number, errorType?: string) {
    super(message)
    this.name = "MetaApiError"
    this.code = code
    this.errorType = errorType
  }
}

export async function metaFetch<T>(path: string, accessToken: string, init?: RequestInit): Promise<T> {
  const { META_GRAPH_VERSION } = getMetaEnv()
  const url = new URL(`https://graph.facebook.com/${META_GRAPH_VERSION}${path}`)
  url.searchParams.set("access_token", accessToken)

  const response = await fetch(url.toString(), {
    ...init,
    cache: "no-store",
    headers: {
      ...(init?.headers ?? {}),
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as MetaErrorBody
    const message = body.error?.message || `Meta request failed (${response.status})`
    throw new MetaApiError(message, body.error?.code, body.error?.type)
  }

  return response.json() as Promise<T>
}
