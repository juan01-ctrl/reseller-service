import Image from "next/image";

/** Catálogo demo — reemplazá `/public/images/iphone-16-pro-catalog.jpg` por fotos propias del negocio. */
const CATALOG_SRC = "/images/iphone-16-pro-catalog.webp";

type ProductDeviceImageProps = {
  alt?: string;
  className?: string;
};

export function ProductDeviceImage({
  alt = "iPhone 16 Pro",
  className,
}: ProductDeviceImageProps) {
  return (
    <div
      className={`relative aspect-square shrink-0 overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/10 ${className ?? ""}`}
    >
      <Image
        src={CATALOG_SRC}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 96px, 128px"
      />
    </div>
  );
}
