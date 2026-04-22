import type { Metadata } from "next"
import { legalIdentity } from "@/lib/legal"
import { siteName } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Import Boost para web, WhatsApp, Instagram y chatbot.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Política de Privacidad</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última actualización: {legalIdentity.updatedAt}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Responsable del tratamiento</h2>
            <p className="mt-2">
              Esta política aplica a los servicios de <strong>{siteName}</strong> (nombre comercial:{" "}
              <strong>{legalIdentity.tradeName}</strong>), titularidad de <strong>{legalIdentity.legalName}</strong>.
            </p>
            <p className="mt-2">
              Domicilio: {legalIdentity.address}. DNI: {legalIdentity.dni}. CUIT: {legalIdentity.cuit}. Condición fiscal:{" "}
              {legalIdentity.taxStatus}.
            </p>
            <p className="mt-2">
              Email de soporte y consultas legales:{" "}
              <a className="text-primary underline underline-offset-4" href={`mailto:${legalIdentity.supportEmail}`}>
                {legalIdentity.supportEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Datos que recopilamos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Datos de contacto que compartís voluntariamente (por ejemplo, nombre, teléfono o usuario de Instagram).</li>
              <li>Datos comerciales necesarios para brindar el servicio (catálogo, precios, stock, medios de pago y respuestas tipo).</li>
              <li>Mensajes y consultas enviadas por formularios, WhatsApp, Instagram o chatbot.</li>
              <li>Datos técnicos mínimos de uso del sitio para operación, seguridad y mejora de servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Finalidad del uso</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Responder consultas comerciales y gestionar potenciales ventas.</li>
              <li>Implementar y mantener la web y automatizaciones del cliente.</li>
              <li>Prestar soporte técnico y operativo.</li>
              <li>Mejorar calidad de respuestas, tiempos y experiencia de uso.</li>
              <li>Cumplir obligaciones legales y fiscales aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Base legal</h2>
            <p className="mt-2">
              Tratamos datos sobre base de consentimiento del titular, ejecución de medidas precontractuales/contractuales e interés
              legítimo para operar, asegurar y mejorar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Compartición de datos</h2>
            <p className="mt-2">
              No vendemos datos personales. Podemos compartir información con proveedores de infraestructura, analítica, mensajería o
              procesamiento tecnológico estrictamente necesarios para prestar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Conservación</h2>
            <p className="mt-2">
              Conservamos datos solo por el tiempo necesario para cumplir las finalidades indicadas o por plazos legales obligatorios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Derechos del titular</h2>
            <p className="mt-2">
              Podés solicitar acceso, rectificación, actualización, supresión o limitación del tratamiento de tus datos, y revocar
              consentimiento cuando corresponda.
            </p>
            <p className="mt-2">
              Para ejercer estos derechos, escribinos por los canales oficiales publicados en el sitio (WhatsApp e Instagram) indicando
              tu solicitud y un medio de contacto.
            </p>
            <p className="mt-2">
              También podés escribir a{" "}
              <a className="text-primary underline underline-offset-4" href={`mailto:${legalIdentity.supportEmail}`}>
                {legalIdentity.supportEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Seguridad</h2>
            <p className="mt-2">
              Aplicamos medidas técnicas y organizativas razonables para proteger la información contra accesos no autorizados,
              alteración o pérdida.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Integraciones con Meta</h2>
            <p className="mt-2">
              Si utilizás funciones vinculadas con plataformas de Meta (como WhatsApp o Instagram), el uso de esas plataformas también
              se rige por sus propios términos y políticas.
            </p>
            <p className="mt-2">
              Para solicitudes de eliminación de datos relacionadas con Meta, consultá{" "}
              <a className="text-primary underline underline-offset-4" href="/eliminacion-de-datos">
                Eliminación de Datos
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
