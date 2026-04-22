import type { Metadata } from "next"
import { legalIdentity } from "@/lib/legal"
import { siteName } from "@/lib/site"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de contratación y uso de Import Boost.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Términos y Condiciones</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última actualización: {legalIdentity.updatedAt}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Identificación del prestador</h2>
            <p className="mt-2">
              Servicio brindado por <strong>{legalIdentity.legalName}</strong> ({legalIdentity.tradeName}), CUIT {legalIdentity.cuit},
              {` `}con domicilio en {legalIdentity.address}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Alcance del servicio</h2>
            <p className="mt-2">
              {siteName} ofrece implementación y mantenimiento de soluciones orientadas a conversión comercial (web, automatizaciones e IA
              asistida) para revendedores/importadores.
            </p>
            <p className="mt-2">
              El detalle específico del alcance se define en la propuesta comercial aceptada por cada cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Condiciones económicas</h2>
            <p className="mt-2">
              Los precios, promociones y vigencias informadas en el sitio son de referencia comercial y pueden actualizarse. Las
              condiciones aplicables a cada contratación serán las confirmadas al momento de la activación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Obligaciones del cliente</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Proveer información real y actualizada de su negocio (catálogo, precios, stock, políticas y medios de pago).</li>
              <li>Contar con derechos de uso del contenido e imágenes que facilita.</li>
              <li>Revisar y aprobar contenidos operativos cuando corresponda.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Garantías y limitaciones</h2>
            <p className="mt-2">
              Se brindan garantías comerciales según lo informado en el sitio o propuesta activa. En todos los casos, resultados de venta
              dependen también de variables externas (demanda, precios, stock, contexto competitivo y gestión comercial del cliente).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Propiedad intelectual</h2>
            <p className="mt-2">
              Cada parte conserva la titularidad de sus marcas, activos y contenidos. El cliente declara contar con permisos sobre los
              materiales que entrega para implementación.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Protección de datos</h2>
            <p className="mt-2">
              El tratamiento de datos personales se rige por la{" "}
              <a className="text-primary underline underline-offset-4" href="/politica-de-privacidad">
                Política de Privacidad
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Suspensión o finalización</h2>
            <p className="mt-2">
              Cualquiera de las partes puede finalizar la relación comercial conforme lo pactado en la propuesta activa, respetando
              obligaciones pendientes y plazos administrativos necesarios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Jurisdicción</h2>
            <p className="mt-2">
              Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de
              Buenos Aires, Argentina, salvo norma imperativa en contrario.
            </p>
            <p className="mt-2">
              Contacto administrativo y legal:{" "}
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
