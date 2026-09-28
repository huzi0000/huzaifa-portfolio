import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'header' | 'footer'
}

/** Fade + short rise on enter. Disabled automatically under reduced motion. */
export default function Reveal({ children, className = '', delay = 0, y = 18, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (reduce) return <Comp className={className}>{children}</Comp>

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 0.61, 0.24, 1] }}
    >
      {children}
    </Comp>
  )
}
