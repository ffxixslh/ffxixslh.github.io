import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

type PageSectionProps = ComponentPropsWithoutRef<'section'>

export function PageSection({
  children,
  className,
  ...props
}: PageSectionProps) {
  return (
    <section {...props} className={clsx('min-w-0', className)}>
      {children}
    </section>
  )
}