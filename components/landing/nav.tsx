import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BrandMark } from "@/components/landing/brand-mark"
import { whatsappUrl } from "@/lib/links"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
          <BrandMark />
          ImportBoost
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#como-funciona" className="transition-colors hover:text-foreground">Cómo funciona</a>
          <a href="#precio" className="transition-colors hover:text-foreground">Precio</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <Button asChild size="sm" className="rounded-full">
          <a href={whatsappUrl("nav")} target="_blank" rel="noopener">
            Ver demo
          </a>
        </Button>
      </div>
    </header>
  )
}
