import { IntegrationStatus } from "@prisma/client"
import { cn } from "@/lib/utils"

const labels: Record<IntegrationStatus, string> = {
  connected: "Conectado",
  needs_reconnect: "Requiere reconexión",
  missing_permissions: "Permisos incompletos",
  disconnected: "Desconectado",
}

const styles: Record<IntegrationStatus, string> = {
  connected: "border-emerald-200 bg-emerald-100/70 text-emerald-800",
  needs_reconnect: "border-amber-200 bg-amber-100/80 text-amber-800",
  missing_permissions: "border-orange-200 bg-orange-100/80 text-orange-800",
  disconnected: "border-border bg-muted text-muted-foreground",
}

export function StatusPill({ status }: { status: IntegrationStatus }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", styles[status])}>
      {labels[status]}
    </span>
  )
}
