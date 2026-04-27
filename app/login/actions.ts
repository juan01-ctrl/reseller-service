"use server"

import { redirect } from "next/navigation"
import { z } from "zod"
import { db } from "@/lib/db"
import { verifyPassword } from "@/lib/auth/password"
import { createSession, setSessionCookie } from "@/lib/auth/session"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginActionState = {
  error: string | null
}

export async function loginAction(_prevState: LoginActionState, formData: FormData): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")
  const nextPath = String(formData.get("next") ?? "/dashboard")

  const parsed = loginSchema.safeParse({ email, password })
  if (!parsed.success) {
    return { error: "Revisá tu email y contraseña." }
  }

  const user = await db.user.findUnique({
    where: { email: parsed.data.email },
  })

  if (!user) {
    return { error: "Credenciales inválidas." }
  }

  const isValidPassword = await verifyPassword(parsed.data.password, user.passwordHash)
  if (!isValidPassword) {
    return { error: "Credenciales inválidas." }
  }

  const session = await createSession(user.id)
  await setSessionCookie(session.token, session.expiresAt)

  const safeNext = nextPath.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/dashboard"
  redirect(safeNext)
}
