import type { Metadata } from "next"
import { SiteOperatorNotice } from "@/components/legal/site-operator-notice"
import { legalIdentity } from "@/lib/legal"
import { siteName } from "@/lib/site"

export const metadata: Metadata = {
  title: "Eliminación de Datos",
  description: "Instrucciones para solicitar eliminación de datos personales en Import Boost y servicios conectados con Meta.",
}

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <SiteOperatorNotice className="mb-8" />
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Eliminación de Datos</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última actualización: {legalIdentity.updatedAt}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Cómo solicitar la eliminación</h2>
            <p className="mt-2">
              Si querés que eliminemos tus datos personales asociados a {siteName}, podés solicitarlo por los canales oficiales del
              sitio (WhatsApp o Instagram), indicando:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nombre y canal desde el que interactuaste.</li>
              <li>Motivo: “Solicitud de eliminación de datos”.</li>
              <li>Un medio de contacto para confirmar el proceso.</li>
            </ul>
            <p className="mt-2">
              También podés iniciar la solicitud por email en{" "}
              <a className="text-primary underline underline-offset-4" href={`mailto:${legalIdentity.supportEmail}`}>
                {legalIdentity.supportEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Qué datos se eliminan</h2>
            <p className="mt-2">
              Eliminamos o anonimizamos los datos personales que no deban conservarse por obligación legal, incluyendo historiales de
              consulta y datos operativos vinculados a la cuenta solicitante.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Plazos</h2>
            <p className="mt-2">
              Procesamos solicitudes en plazos razonables desde la validación del titular. En casos donde exista obligación legal de
              conservación, se limitará el tratamiento de esos datos al cumplimiento normativo.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Integraciones con Meta</h2>
            <p className="mt-2">
              Si la interacción se realizó mediante plataformas de Meta (por ejemplo, Instagram o WhatsApp), también podés gestionar
              permisos y eliminación desde la configuración de tu cuenta en dichas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Responsable</h2>
            <p className="mt-2">
              Responsable: <strong>{legalIdentity.legalName}</strong> ({legalIdentity.tradeName}), CUIT {legalIdentity.cuit}, domicilio{" "}
              {legalIdentity.address}.
            </p>
            <p className="mt-2">
              Email de contacto:{" "}
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
