import Link from "next/link"
import { IntegrationStatus, IntegrationType } from "@prisma/client"
import { requireAuth } from "@/lib/auth/server"
import { db } from "@/lib/db"
import { StatusPill } from "@/components/dashboard/status-pill"
import { Button } from "@/components/ui/button"

function isTokenValid(tokenExpiresAt: Date | null) {
  if (!tokenExpiresAt) return false
  return tokenExpiresAt.getTime() > Date.now()
}

function getConnectHref(type: IntegrationType) {
  return `/api/meta/oauth/start?type=${type}`
}

function resolveDisplayStatus(status: IntegrationStatus, expiresAt: Date | null): IntegrationStatus {
  if (status === "connected" && !isTokenValid(expiresAt)) return "needs_reconnect"
  return status
}

function formatEventDetails(metadata: unknown) {
  if (!metadata || typeof metadata !== "object") return null
  const object = metadata as Record<string, unknown>
  const granted = Array.isArray(object.grantedScopes) ? object.grantedScopes.filter((scope): scope is string => typeof scope === "string") : []
  const missing = Array.isArray(object.missingRequiredScopes)
    ? object.missingRequiredScopes.filter((scope): scope is string => typeof scope === "string")
    : []

  if (granted.length === 0 && missing.length === 0) return null

  return {
    granted,
    missing,
  }
}

function hasActiveIntegration(integration: { status: IntegrationStatus; accessTokenEncrypted: string | null } | null) {
  if (!integration) return false
  return integration.status !== "disconnected" && Boolean(integration.accessTokenEncrypted)
}

export default async function DashboardPage() {
  const session = await requireAuth()

  const [whatsapp, instagram, recentEvents] = await Promise.all([
    db.metaIntegration.findUnique({
      where: {
        userId_integrationType: {
          userId: session.userId,
          integrationType: "whatsapp",
        },
      },
    }),
    db.metaIntegration.findUnique({
      where: {
        userId_integrationType: {
          userId: session.userId,
          integrationType: "instagram",
        },
      },
    }),
    db.integrationEvent.findMany({
      where: { userId: session.userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ])

  const whatsappConnected = whatsapp?.status === "connected" && isTokenValid(whatsapp.tokenExpiresAt)
  const instagramConnected = instagram?.status === "connected" && isTokenValid(instagram.tokenExpiresAt)
  const whatsappActive = hasActiveIntegration(whatsapp)
  const instagramActive = hasActiveIntegration(instagram)
  const automationReady = whatsappConnected && instagramConnected

  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_70px_-45px_rgba(13,44,7,0.45)]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Client dashboard</p>
        <h1 className="text-2xl font-semibold tracking-tight">Hola, {session.user.name}.</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Conecta tus cuentas de negocio para que ImportBoost pueda responder los primeros mensajes, calificar leads y mantener
          actualizado el contexto de tu catálogo.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-medium">WhatsApp Business</h2>
            <StatusPill status={resolveDisplayStatus(whatsapp?.status ?? "disconnected", whatsapp?.tokenExpiresAt ?? null)} />
          </div>
          <p className="text-sm text-muted-foreground">Conecta tu WABA y número de atención para activar automatizaciones de primer contacto.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <a href={getConnectHref("whatsapp")}>{whatsappActive ? "Reconectar" : "Connect WhatsApp Business"}</a>
            </Button>
            {whatsappActive ? (
              <form action="/api/meta/disconnect?type=whatsapp" method="post">
                <Button type="submit" variant="outline" size="sm">
                  Disconnect
                </Button>
              </form>
            ) : null}
          </div>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-medium">Instagram Business</h2>
            <StatusPill status={resolveDisplayStatus(instagram?.status ?? "disconnected", instagram?.tokenExpiresAt ?? null)} />
          </div>
          <p className="text-sm text-muted-foreground">Conecta tu Página e Instagram Business para responder DMs con contexto comercial.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <a href={getConnectHref("instagram")}>{instagramActive ? "Reconnect" : "Connect Instagram"}</a>
            </Button>
            {instagramActive ? (
              <form action="/api/meta/disconnect?type=instagram" method="post">
                <Button type="submit" variant="outline" size="sm">
                  Disconnect
                </Button>
              </form>
            ) : null}
          </div>
        </article>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-5">
          <h2 className="mb-3 font-medium">Automation status</h2>
          <p className="text-sm text-muted-foreground">
            {automationReady
              ? "Listo para revisión final y activación. El equipo de ImportBoost validará permisos y webhook."
              : "La automatización de mensajes empieza solo después de que tu cuenta esté conectada y revisada."}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Nunca publicamos contenido sin tu permiso.</p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-medium">Recent integration events</h2>
            <Link href="/dashboard/integrations" className="text-xs font-medium text-primary hover:underline">
              Ver detalle
            </Link>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {recentEvents.length === 0 ? (
              <li>No hay eventos todavía.</li>
            ) : (
              recentEvents.map((event) => {
                const details = formatEventDetails(event.metadataJson)
                return (
                  <li key={event.id} className="rounded-xl border border-border/70 bg-background px-3 py-2">
                    <p className="font-medium text-foreground/90">{event.message}</p>
                    {details ? (
                      <div className="mt-1 text-xs">
                        {details.granted.length ? <p>Scopes concedidos: {details.granted.join(", ")}</p> : null}
                        {details.missing.length ? <p className="text-amber-700">Scopes faltantes: {details.missing.join(", ")}</p> : null}
                      </div>
                    ) : null}
                    <p className="text-xs">{event.createdAt.toLocaleString("es-AR")}</p>
                  </li>
                )
              })
            )}
          </ul>
        </article>
      </div>
    </section>
  )
}
