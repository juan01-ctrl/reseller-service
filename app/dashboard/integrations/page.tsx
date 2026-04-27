import { requireAuth } from "@/lib/auth/server"
import { db } from "@/lib/db"
import { StatusPill } from "@/components/dashboard/status-pill"
import { Button } from "@/components/ui/button"
import { INSTAGRAM_REQUIRED_SCOPES, WHATSAPP_REQUIRED_SCOPES } from "@/lib/meta/constants"
import { IntegrationStatus } from "@prisma/client"

function renderTokenHealth(expiresAt: Date | null) {
  if (!expiresAt) return "No token activo"
  if (expiresAt.getTime() < Date.now()) return "Expirado"
  return `Válido hasta ${expiresAt.toLocaleString("es-AR")}`
}

function resolveDisplayStatus(status: IntegrationStatus, expiresAt: Date | null): IntegrationStatus {
  if (status === "connected" && expiresAt && expiresAt.getTime() < Date.now()) return "needs_reconnect"
  return status
}

function hasActiveIntegration(integration: { status: IntegrationStatus; accessTokenEncrypted: string | null } | null) {
  if (!integration) return false
  return integration.status !== "disconnected" && Boolean(integration.accessTokenEncrypted)
}

type IntegrationsPageProps = {
  searchParams: Promise<{
    status?: string
    type?: string
  }>
}

export default async function IntegrationsPage({ searchParams }: IntegrationsPageProps) {
  const session = await requireAuth()
  const params = await searchParams

  const [whatsappIntegration, instagramIntegration, whatsappConnections, instagramConnections] = await Promise.all([
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
    db.whatsAppConnection.findMany({
      where: { userId: session.userId },
      orderBy: { updatedAt: "desc" },
      take: 10,
    }),
    db.instagramConnection.findMany({
      where: { userId: session.userId },
      orderBy: { updatedAt: "desc" },
      take: 10,
    }),
  ])
  const whatsappActive = hasActiveIntegration(whatsappIntegration)
  const instagramActive = hasActiveIntegration(instagramIntegration)

  return (
    <section className="space-y-6">
      {params.status ? (
        <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          Estado de integración actualizado:{" "}
          <span className="font-medium text-foreground">
            {params.status === "missing_permissions"
              ? "Faltan permisos en Meta (business_management)."
              : params.status}
          </span>
        </div>
      ) : null}
      <div className="rounded-3xl border border-border bg-card p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Integraciones de Meta</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Conecta tus activos para que ImportBoost gestione primer contacto, clasificación y continuidad comercial. You can disconnect
          access at any time.
        </p>
      </div>

      <article className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">WhatsApp Business</h2>
          <StatusPill status={resolveDisplayStatus(whatsappIntegration?.status ?? "disconnected", whatsappIntegration?.tokenExpiresAt ?? null)} />
        </div>
        <p className="text-sm text-muted-foreground">
          Permite responder primeras consultas, calificar leads y usar contexto de catálogo sin intervención manual inicial.
        </p>
        <p className="mt-3 text-sm">
          <span className="font-medium">Token:</span> {renderTokenHealth(whatsappIntegration?.tokenExpiresAt ?? null)}
        </p>
        <div className="mt-3">
          <p className="text-sm font-medium">Permisos requeridos</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {WHATSAPP_REQUIRED_SCOPES.map((scope) => (
              <li key={scope} className="rounded-full border border-border px-2.5 py-1 text-xs">
                {scope}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a href="/api/meta/oauth/start?type=whatsapp">{whatsappActive ? "Reconnect" : "Connect WhatsApp Business"}</a>
          </Button>
          {whatsappActive ? (
            <form action="/api/meta/disconnect?type=whatsapp" method="post">
              <Button type="submit" variant="outline" size="sm">
                Disconnect
              </Button>
            </form>
          ) : null}
          <form action="/api/meta/whatsapp/sync" method="post">
            <Button type="submit" variant="outline" size="sm">
              Test connection
            </Button>
          </form>
        </div>
        <div className="mt-4 space-y-2">
          {whatsappConnections.length === 0 ? (
            <p className="text-sm text-muted-foreground">Todavía no hay WABA/números sincronizados.</p>
          ) : (
            whatsappConnections.map((connection) => (
              <div key={connection.id} className="rounded-xl border border-border/70 bg-background px-3 py-2 text-sm">
                <p className="font-medium text-foreground/90">
                  WABA {connection.wabaId} {connection.displayPhoneNumber ? `· ${connection.displayPhoneNumber}` : ""}
                </p>
                <p className="text-muted-foreground">
                  phoneNumberId: {connection.phoneNumberId || "n/a"} · webhook: {connection.webhookSubscribed ? "activo" : "pendiente"} ·
                  last sync: {connection.lastSyncAt ? connection.lastSyncAt.toLocaleString("es-AR") : "n/a"}
                </p>
              </div>
            ))
          )}
        </div>
      </article>

      <article className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Instagram Business</h2>
          <StatusPill status={resolveDisplayStatus(instagramIntegration?.status ?? "disconnected", instagramIntegration?.tokenExpiresAt ?? null)} />
        </div>
        <p className="text-sm text-muted-foreground">
          Permite responder DMs y conservar continuidad en conversaciones de venta desde tus activos oficiales.
        </p>
        <p className="mt-3 text-sm">
          <span className="font-medium">Token:</span> {renderTokenHealth(instagramIntegration?.tokenExpiresAt ?? null)}
        </p>
        <div className="mt-3">
          <p className="text-sm font-medium">Permisos requeridos</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {INSTAGRAM_REQUIRED_SCOPES.map((scope) => (
              <li key={scope} className="rounded-full border border-border px-2.5 py-1 text-xs">
                {scope}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a href="/api/meta/oauth/start?type=instagram">{instagramActive ? "Reconnect" : "Connect Instagram"}</a>
          </Button>
          {instagramActive ? (
            <form action="/api/meta/disconnect?type=instagram" method="post">
              <Button type="submit" variant="outline" size="sm">
                Disconnect
              </Button>
            </form>
          ) : null}
          <form action="/api/meta/instagram/sync" method="post">
            <Button type="submit" variant="outline" size="sm">
              Test connection
            </Button>
          </form>
        </div>
        <div className="mt-4 space-y-2">
          {instagramConnections.length === 0 ? (
            <p className="text-sm text-muted-foreground">Todavía no hay cuentas de Instagram Business sincronizadas.</p>
          ) : (
            instagramConnections.map((connection) => (
              <div key={connection.id} className="rounded-xl border border-border/70 bg-background px-3 py-2 text-sm">
                <p className="font-medium text-foreground/90">
                  {connection.pageName ?? "Página"} · @{connection.username ?? "sin usuario"}
                </p>
                <p className="text-muted-foreground">
                  pageId: {connection.pageId} · igBusinessId: {connection.instagramBusinessAccountId} · webhook:{" "}
                  {connection.webhookSubscribed ? "activo" : "pendiente"} · last sync:{" "}
                  {connection.lastSyncAt ? connection.lastSyncAt.toLocaleString("es-AR") : "n/a"}
                </p>
              </div>
            ))
          )}
        </div>
      </article>
    </section>
  )
}
