import { createHmac, randomBytes } from "crypto"
import { cookies } from "next/headers"
import { db } from "@/lib/db"
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "@/lib/auth/constants"
import { getAuthEnv } from "@/lib/env"

function hashSessionToken(token: string) {
  const { AUTH_SECRET } = getAuthEnv()
  return createHmac("sha256", AUTH_SECRET).update(token).digest("hex")
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("base64url")
  const sessionTokenHash = hashSessionToken(token)
  const expiresAt = new Date(Date.now() + SESSION_MAX_AGE_SECONDS * 1000)

  await db.session.create({
    data: {
      userId,
      sessionTokenHash,
      expiresAt,
    },
  })

  return {
    token,
    expiresAt,
  }
}

export async function setSessionCookie(token: string, expiresAt: Date) {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  })
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(0),
  })
}

export async function getCurrentSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value
  if (!token) return null

  const sessionTokenHash = hashSessionToken(token)
  const session = await db.session.findUnique({
    where: { sessionTokenHash },
    include: { user: true },
  })

  if (!session) return null
  if (session.expiresAt <= new Date()) {
    await db.session.delete({ where: { id: session.id } }).catch(() => null)
    await clearSessionCookie()
    return null
  }

  await db.session.update({
    where: { id: session.id },
    data: { lastSeenAt: new Date() },
  }).catch(() => null)

  return session
}

export async function destroyCurrentSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value

  if (token) {
    const sessionTokenHash = hashSessionToken(token)
    await db.session.deleteMany({
      where: { sessionTokenHash },
    })
  }

  await clearSessionCookie()
}
