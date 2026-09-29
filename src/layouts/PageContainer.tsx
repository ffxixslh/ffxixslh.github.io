import clsx from 'clsx'
import type { ReactNode } from 'react'

export type PageWidth = 'wide' | 'listing' | 'reading'

type PageContainerProps = {
  children: ReactNode
  className?: string
  width?: PageWidth
}

export const pageWidthClasses: Record<PageWidth, string> = {
  wide: 'max-w-5xl',
  listing: 'max-w-3xl',
  reading: 'max-w-176',
}

export function PageContainer({
  children,
  className = '',
  width = 'reading',
}: PageContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)]',
        pageWidthClasses[width],
        className,
      )}
    >
      {children}
    </div>
  )
}