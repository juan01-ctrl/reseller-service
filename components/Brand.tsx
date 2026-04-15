type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <span
      className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-[13px] ring-1 ring-white/15 shadow-[0_12px_34px_-16px_rgba(59,130,246,0.55)] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 40 40"
        className="block h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="12" fill="url(#resellix-bg)" />
        <rect width="40" height="40" rx="12" fill="url(#resellix-soft-light)" />
        <rect x="0.5" y="0.5" width="39" height="39" rx="11.5" stroke="url(#resellix-stroke)" />

        <path
          d="M11.8 28V12H18.1C20.8 12 22.3 13.5 22.3 15.8C22.3 17.7 21.2 18.9 19.2 19.2L23.3 28H20.6L16.7 19.7H14.2V28H11.8Z"
          fill="url(#resellix-r)"
        />
        <path
          d="M23.7 13.6L20.6 19.5L23.9 26.4H26.3L23.1 19.5L26.2 13.6H23.7Z"
          fill="url(#resellix-x)"
        />
        <circle cx="28.6" cy="12.2" r="1.1" fill="#8AB7FF" fillOpacity="0.45" />

        <defs>
          <linearGradient id="resellix-bg" x1="6" y1="4" x2="34" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14326E" />
            <stop offset="0.45" stopColor="#0A1631" />
            <stop offset="1" stopColor="#070B16" />
          </linearGradient>
          <radialGradient id="resellix-soft-light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 8) rotate(34) scale(30 26)">
            <stop stopColor="#8AB7FF" stopOpacity="0.18" />
            <stop offset="1" stopColor="#8AB7FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="resellix-stroke" x1="4" y1="2" x2="36" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(154,190,255,0.55)" />
            <stop offset="1" stopColor="rgba(77,113,188,0.18)" />
          </linearGradient>
          <linearGradient id="resellix-r" x1="10.5" y1="10.5" x2="23.5" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#C9D8FF" />
          </linearGradient>
          <linearGradient id="resellix-x" x1="20" y1="13" x2="27.6" y2="26.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#73B7FF" />
            <stop offset="1" stopColor="#4C7DFF" />
          </linearGradient>
        </defs>
      </svg>
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
        Resellix
      </span>
    </span>
  );
}
