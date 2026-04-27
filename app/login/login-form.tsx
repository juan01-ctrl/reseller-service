"use client"

import { useActionState } from "react"
import { loginAction, type LoginActionState } from "@/app/login/actions"
import { Button } from "@/components/ui/button"

const initialState: LoginActionState = {
  error: null,
}

export function LoginForm({ nextPath }: { nextPath: string }) {
  const [state, formAction, isPending] = useActionState(loginAction, initialState)

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="next" value={nextPath} />

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground/90">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground ring-focus"
          placeholder="client@empresa.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-foreground/90">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="current-password"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground ring-focus"
          placeholder="Tu contraseña"
        />
      </div>

      {state.error ? (
        <p className="rounded-xl border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">{state.error}</p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "Ingresando..." : "Ingresar al dashboard"}
      </Button>
    </form>
  )
}
