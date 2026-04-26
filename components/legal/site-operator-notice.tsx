import { legalSiteOperatorNotice } from "@/lib/legal"

type SiteOperatorNoticeProps = {
  className?: string
}

export function SiteOperatorNotice({ className = "" }: SiteOperatorNoticeProps) {
  return (
    <p
      className={`rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm leading-relaxed text-muted-foreground ${className}`}
    >
      {legalSiteOperatorNotice}
    </p>
  )
}
