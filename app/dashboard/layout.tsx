import Link from "next/link"
import { requireAuth } from "@/lib/auth/server"
import { logoutAction } from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAuth()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <img src="/icon.png" alt="ImportBoost" width={28} height={28} className="rounded-lg" />
              ImportBoost
            </Link>
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/dashboard" className="rounded-md px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                Overview
              </Link>
              <Link href="/dashboard/integrations" className="rounded-md px-3 py-1.5 text-muted-foreground hover:bg-muted hover:text-foreground">
                Integraciones
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden text-sm text-muted-foreground sm:block">{session.user.email}</p>
            <form action={logoutAction}>
              <Button type="submit" size="sm" variant="outline">
                Cerrar sesión
              </Button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
    </div>
  )
}
