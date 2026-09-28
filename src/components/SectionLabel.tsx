import type { ReactNode } from 'react'

type Props = {
  /** "02" */
  number: string
  /** ABOUT ME */
  children: ReactNode
  className?: string
  tone?: 'default' | 'signal'
}

/** `02 ———— ABOUT ME` structural label used at the top of every section. */
export default function SectionLabel({ number, children, className = '', tone = 'default' }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="t-label-sm text-[#9a9d97]">{number}</span>
      <span
        aria-hidden="true"
        className="h-px w-10 sm:w-12"
        style={{ background: tone === 'signal' ? 'var(--c-signal)' : 'var(--l-soft)' }}
      />
      <span className="t-label-sm text-[#8f938d]">{children}</span>
    </div>
  )
}
