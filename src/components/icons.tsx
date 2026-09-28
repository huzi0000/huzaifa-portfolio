import { forwardRef } from 'react'
import type { LucideIcon, LucideProps } from 'lucide-react'

/** Lucide has no tooth glyph — drawn to match the reference silhouette. */
export const Tooth: LucideIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, strokeWidth = 1.6, ...rest }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 2.6c-1.6 0-2.3.5-3.5.5-2 0-3.7 1.3-3.7 4.2 0 2.2.6 3.4 1.1 4.9.5 1.4.7 2.7.8 4.1.1 1.6.3 3.3.9 4.3.4.7.9 1 1.5 1 .9 0 1.4-.8 1.7-2.3.3-1.4.5-2.8 1.2-2.8s.9 1.4 1.2 2.8c.3 1.5.8 2.3 1.7 2.3.6 0 1.1-.3 1.5-1 .6-1 .8-2.7.9-4.3.1-1.4.3-2.7.8-4.1.5-1.5 1.1-2.7 1.1-4.9 0-2.9-1.7-4.2-3.7-4.2-1.2 0-1.9-.5-3.5-.5Z" />
      <path d="M9.3 6.4c.9-.5 1.8-.7 2.7-.7" />
    </svg>
  ),
)
