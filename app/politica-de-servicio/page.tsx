import type { Metadata } from "next"
import { legalIdentity } from "@/lib/legal"
import { siteName } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Servicio",
  description: "Política de servicio, soporte y alcance operativo de Import Boost.",
}

export default function ServicePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Política de Servicio</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última actualización: {legalIdentity.updatedAt}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Objetivo del servicio</h2>
            <p className="mt-2">
              {siteName} está diseñado para ayudar a revendedores/importadores a responder consultas comerciales con mayor velocidad y
              consistencia, integrando web y mensajería.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Qué incluye habitualmente</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Implementación inicial (según propuesta activa).</li>
              <li>Mantenimiento operativo mensual (según plan contratado).</li>
              <li>Soporte humano en canales acordados.</li>
              <li>Ajustes menores dentro del alcance del plan.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Qué no incluye por defecto</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Desarrollos a medida fuera de alcance sin aprobación comercial previa.</li>
              <li>Servicios de terceros pagos (dominios, plataformas, herramientas externas) no incluidos explícitamente.</li>
              <li>Gestión comercial integral del negocio del cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Soporte y tiempos</h2>
            <p className="mt-2">
              El soporte se brinda por canales definidos en la propuesta vigente. Los tiempos de respuesta pueden variar según volumen de
              consultas, criticidad del caso y ventana horaria.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Calidad y mejora continua</h2>
            <p className="mt-2">
              El servicio se optimiza de forma iterativa en función de desempeño real y feedback del cliente, priorizando impacto en
              conversión y estabilidad operativa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Contacto administrativo</h2>
            <p className="mt-2">
              Titular: <strong>{legalIdentity.legalName}</strong> ({legalIdentity.tradeName}), CUIT {legalIdentity.cuit}, domicilio
              {` `}{legalIdentity.address}.
            </p>
            <p className="mt-2">
              Soporte y consultas:{" "}
              <a className="text-primary underline underline-offset-4" href={`mailto:${legalIdentity.supportEmail}`}>
                {legalIdentity.supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
