import Link from "next/link";
import { BrandLockup } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950/90">
      <div className="if-container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <BrandLockup />
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} ImportBoost. Hecho para importadores y
          revendedores Apple en Argentina.
        </p>
        <Link
          href="#"
          className="text-xs font-medium text-zinc-400 transition hover:text-white"
        >
          Volver arriba
        </Link>
      </div>
    </footer>
  );
}
