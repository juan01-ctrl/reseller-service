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

function formatEventDetails(metadata: unknown) {
  if (!metadata || typeof metadata !== "object") return null
  const object = metadata as Record<string, unknown>
  const granted = Array.isArray(object.grantedScopes) ? object.grantedScopes.filter((scope): scope is string => typeof scope === "string") : []
  const missing = Array.isArray(object.missingRequiredScopes)
    ? object.missingRequiredScopes.filter((scope): scope is string => typeof scope === "string")
    : []

  if (granted.length === 0 && missing.length === 0) return null
  return { granted, missing }
}

type IntegrationsPageProps = {
  searchParams: Promise<{
    status?: string
    type?: string
    messageId?: string
  }>
}

function getStatusLabel(status: string, messageId?: string) {
  switch (status) {
    case "missing_permissions":
      return "Faltan permisos en Meta (business_management)."
    case "whatsapp_test_sent":
      return messageId ? `Mensaje de prueba enviado (id: ${messageId}).` : "Mensaje de prueba enviado."
    case "whatsapp_test_failed":
      return "No se pudo enviar el mensaje de prueba de WhatsApp."
    case "whatsapp_test_invalid":
      return "Datos inválidos para envío de prueba."
    case "whatsapp_connection_disconnected":
      return "Conexión de WhatsApp desconectada correctamente."
    default:
      return status
  }
}

export default async function IntegrationsPage({ searchParams }: IntegrationsPageProps) {
  const session = await requireAuth()
  const params = await searchParams

  const [whatsappIntegration, instagramIntegration, whatsappConnections, instagramConnections, recentEvents] = await Promise.all([
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
    db.integrationEvent.findMany({
      where: { userId: session.userId },
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
  ])
  const whatsappActive = hasActiveIntegration(whatsappIntegration)
  const instagramActive = hasActiveIntegration(instagramIntegration)
  const whatsappConnectionsWithPhoneNumberId = whatsappConnections.filter((connection) => Boolean(connection.phoneNumberId))

  return (
    <section className="space-y-6">
      {params.status ? (
        <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          Estado de integración actualizado:{" "}
          <span className="font-medium text-foreground">{getStatusLabel(params.status, params.messageId)}</span>
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
                  {connection.displayPhoneNumber ? `Número ${connection.displayPhoneNumber}` : "Número no disponible"}
                </p>
                <p className="text-muted-foreground">
                  WABA: {connection.wabaId} · phoneNumberId: {connection.phoneNumberId || "n/a"} · webhook:{" "}
                  {connection.webhookSubscribed ? "activo" : "pendiente"} · last sync:{" "}
                  {connection.lastSyncAt ? connection.lastSyncAt.toLocaleString("es-AR") : "n/a"}
                </p>
                <div className="mt-2">
                  <form action="/api/meta/whatsapp/connections/disconnect" method="post">
                    <input type="hidden" name="connectionId" value={connection.id} />
                    <Button type="submit" variant="outline" size="sm">
                      {connection.phoneNumberId ? "Desconectar este número" : "Desconectar este WABA"}
                    </Button>
                  </form>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-5 rounded-xl border border-border/70 bg-background p-4">
          <h3 className="text-sm font-semibold">Enviar mensaje de prueba</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Usa esta acción para validar envío saliente desde un `phoneNumberId` conectado.
          </p>
          {whatsappConnectionsWithPhoneNumberId.length === 0 ? (
            <p className="mt-2 text-xs text-amber-700">
              No hay `phoneNumberId` disponibles en las conexiones actuales. Corré `Test connection` y verificá que Meta devuelva los números.
            </p>
          ) : (
            <form action="/api/meta/whatsapp/send-test" method="post" className="mt-3 grid gap-2 md:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="connectionId" className="text-xs font-medium">
                  Número origen
                </label>
                <select
                  id="connectionId"
                  name="connectionId"
                  required
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus"
                >
                  {whatsappConnectionsWithPhoneNumberId.map((connection) => (
                    <option key={connection.id} value={connection.id}>
                      {(connection.displayPhoneNumber || "Sin display number") + ` · ${connection.phoneNumberId}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="to" className="text-xs font-medium">
                  Destino (formato internacional)
                </label>
                <input
                  id="to"
                  name="to"
                  required
                  placeholder="5491123456789"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="mode" className="text-xs font-medium">
                  Modo
                </label>
                <select id="mode" name="mode" className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus">
                  <option value="text">Texto (solo ventana 24h)</option>
                  <option value="template">Template</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="templateName" className="text-xs font-medium">
                  Nombre template (si modo=template)
                </label>
                <input
                  id="templateName"
                  name="templateName"
                  placeholder="hello_world"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label htmlFor="textBody" className="text-xs font-medium">
                  Mensaje texto (si modo=text)
                </label>
                <textarea
                  id="textBody"
                  name="textBody"
                  rows={3}
                  placeholder="Hola, este es un mensaje de prueba de ImportBoost."
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="templateLanguageCode" className="text-xs font-medium">
                  Idioma template
                </label>
                <input
                  id="templateLanguageCode"
                  name="templateLanguageCode"
                  defaultValue="es_AR"
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm ring-focus"
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" size="sm">
                  Enviar mensaje de prueba
                </Button>
              </div>
            </form>
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

      <article className="rounded-2xl border border-border bg-card p-5">
        <h2 className="text-lg font-semibold">Eventos de permisos y conexión</h2>
        <p className="mt-2 text-sm text-muted-foreground">Vista de auditoría segura: mostramos scopes y estado, nunca tokens.</p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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
    </section>
  )
}
