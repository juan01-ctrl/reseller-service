type BrandMarkProps = {
  className?: string;
};

/** Misma marca que `app/icon.svg` (favicon y manifest). */
export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-[13px] ring-1 ring-white/15 shadow-[0_12px_34px_-16px_rgba(59,130,246,0.55)] ${className}`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- mismo asset que favicon (`/icon.svg`) */}
      <img
        src="/icon.svg"
        width={40}
        height={40}
        alt=""
        className="block h-full w-full"
        decoding="async"
      />
    </span>
  );
}

type BrandLockupProps = {
  className?: string;
  textClassName?: string;
};

export function BrandLockup({ className = "", textClassName = "" }: BrandLockupProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark />
      <span className={`text-[0.97rem] font-semibold tracking-[-0.017em] text-white ${textClassName}`}>
        ImportBoost
      </span>
    </span>
  );
}
