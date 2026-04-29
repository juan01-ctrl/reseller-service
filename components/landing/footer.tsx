import { legalIdentity, legalSiteOperatorNotice } from "@/lib/legal"
import { WHATSAPP_NUMBER, whatsappUrl } from "@/lib/links"
import { BrandMark } from "@/components/landing/brand-mark"

function formatPhone(number: string) {
  if (!number.startsWith("549")) return `+${number}`
  const local = number.slice(3)
  if (local.length === 10) {
    return `+54 9 ${local.slice(0, 2)} ${local.slice(2, 6)}-${local.slice(6)}`
  }
  return `+${number}`
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
              <BrandMark />
              ImportBoost
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Sistema de ventas para importadores de electrónica en Argentina. Respondé WhatsApp,
              Instagram y web con tu catálogo, tu criterio y control total.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Producto
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href="#como-funciona" className="text-foreground hover:text-primary">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#precio" className="text-foreground hover:text-primary">
                  Precio
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={whatsappUrl("nav")}
                  target="_blank"
                  rel="noopener"
                  className="text-foreground hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/import.boost/"
                  target="_blank"
                  rel="noopener"
                  className="text-foreground hover:text-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:support@importboost.online" className="text-foreground hover:text-primary">
                  support@importboost.online
                </a>
              </li>
              <li>
                <a href={whatsappUrl("nav")} target="_blank" rel="noopener" className="text-foreground hover:text-primary">
                  {formatPhone(WHATSAPP_NUMBER)}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href="/politica-de-privacidad" className="text-foreground hover:text-primary">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos-y-condiciones" className="text-foreground hover:text-primary">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/politica-de-servicio" className="text-foreground hover:text-primary">
                  Política de servicio
                </a>
              </li>
              <li>
                <a href="/eliminacion-de-datos" className="text-foreground hover:text-primary">
                  Eliminación de datos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-6 border-t border-border pt-6">
          <div className="rounded-xl border border-border/70 bg-card/70 p-4 text-xs leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground/90">Datos legales y fiscales del operador</p>
            <p className="mt-2">{legalSiteOperatorNotice}</p>
            <ul className="mt-2 space-y-1">
              <li>
                Titular responsable: {legalIdentity.legalName} (DNI {legalIdentity.dni})
              </li>
              <li>Nombre comercial: {legalIdentity.tradeName}</li>
              <li>CUIT: {legalIdentity.cuit}</li>
              <li>Condición fiscal: {legalIdentity.taxStatus} (ARCA/AFIP)</li>
              <li>Domicilio fiscal: {legalIdentity.address}</li>
              <li>
                Canal de contacto y soporte: {legalIdentity.supportEmail} · {formatPhone(WHATSAPP_NUMBER)}
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
            <p>© 2026 ImportBoost. Todos los derechos reservados.</p>
            <p>Hecho para el vendedor argentino que no quiere perder consultas por demora.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
