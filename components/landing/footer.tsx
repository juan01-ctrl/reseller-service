import { whatsappUrl } from "@/lib/links"
import { BrandMark } from "@/components/landing/brand-mark"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
              <BrandMark />
              ImportBoost
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              IA de ventas para importadores de electrónica premium en Argentina. Respondé
              WhatsApp, Instagram y tu web en menos de un minuto — con tu catálogo y tu tono.
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
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 ImportBoost. Todos los derechos reservados.</p>
          <p>Hecho para el importador argentino que vende por Instagram y WhatsApp.</p>
        </div>
      </div>
    </footer>
  )
}
