import Link from "next/link"
import { redirect } from "next/navigation"
import { LoginForm } from "@/app/login/login-form"
import { getCurrentUser } from "@/lib/auth/server"

type LoginPageProps = {
  searchParams: Promise<{
    next?: string
  }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const user = await getCurrentUser()
  if (user) {
    redirect("/dashboard")
  }

  const params = await searchParams
  const nextPath = params.next && params.next.startsWith("/") ? params.next : "/dashboard"

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(54,174,30,0.14),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(54,174,30,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_70%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
        <section className="grid w-full max-w-5xl gap-6 rounded-3xl border border-border/80 bg-card/85 p-6 shadow-[0_30px_80px_-45px_rgba(13,44,7,0.4)] backdrop-blur md:grid-cols-2 md:p-10">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Dashboard privado de clientes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Conectá WhatsApp e Instagram para activar tu automatización.
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conecta tus cuentas de negocio para que ImportBoost pueda responder los primeros mensajes, calificar leads y mantener
              actualizado el contexto de tu catálogo.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Puedes desconectar el acceso en cualquier momento.</li>
              <li>Nunca publicamos contenido sin tu permiso.</li>
              <li>La automatización de mensajes empieza solo después de que tu cuenta esté conectada y revisada.</li>
            </ul>
            <Link href="/" className="inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline">
              Volver a importboost.online
            </Link>
          </div>

          <div className="rounded-2xl border border-border/80 bg-background/90 p-5 md:p-6">
            <h2 className="mb-5 text-xl font-semibold">Iniciar sesión</h2>
            <LoginForm nextPath={nextPath} />
          </div>
        </section>
      </div>
    </main>
  )
}
