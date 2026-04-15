import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
            IF
          </span>
          <span className="text-sm font-semibold text-white">ImportaFlow</span>
        </div>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} ImportaFlow. Hecho para importadores y
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
