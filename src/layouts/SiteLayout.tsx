import { Link } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type { ReactNode } from 'react'
import { PageContainer } from './PageContainer'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <header className="border-b border-[#dce1da]">
        <PageContainer width="wide">
          <nav
            className="flex min-h-16 items-center justify-between"
            aria-label="主导航"
          >
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="font-serif text-lg font-bold text-[#263b32] no-underline"
              activeProps={{ className: 'text-[#a34d39]' }}
              aria-label="首页"
            >
              ffxixslh
            </Link>
            <div className="flex items-center gap-5 font-sans text-sm sm:gap-8">
              <Link
                to="/"
                activeOptions={{ exact: true }}
                className="py-2 text-[#606a63] no-underline transition-colors hover:text-[#a34d39]"
                activeProps={{
                  className:
                    'text-[#a34d39] underline decoration-[#a34d39] underline-offset-8',
                }}
              >
                首页
              </Link>
              <Link
                to="/posts"
                className="py-2 text-[#606a63] no-underline transition-colors hover:text-[#a34d39]"
                activeProps={{
                  className:
                    'text-[#a34d39] underline decoration-[#a34d39] underline-offset-8',
                }}
              >
                文章
              </Link>
              <Link
                to="/about"
                className="py-2 text-[#606a63] no-underline transition-colors hover:text-[#a34d39]"
                activeProps={{
                  className:
                    'text-[#a34d39] underline decoration-[#a34d39] underline-offset-8',
                }}
              >
                关于
              </Link>
              <Link
                to="/resume"
                target="_blank"
                activeOptions={{ exact: true }}
                className="py-2 text-[#606a63] no-underline transition-colors hover:text-[#a34d39]"
                activeProps={{
                  className:
                    'text-[#a34d39] underline decoration-[#a34d39] underline-offset-8',
                }}
              >
                简历
              </Link>
            </div>
          </nav>
        </PageContainer>
      </header>
      {children}
      <TanStackRouterDevtools />
    </>
  )
}
