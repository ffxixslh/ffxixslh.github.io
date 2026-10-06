import { createFileRoute, Link } from '@tanstack/react-router'
import { PageMain } from '../layouts/PageMain'
import { PageSection } from '../layouts/PageSection'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "关于 | ffxixslh's Blog" }],
  }),
})

function RouteComponent() {
  return (
    <PageMain>
      <header className="border-b border-[#cfd6cf] pb-8">
        <p className="mb-4 font-sans text-label font-semibold text-[#a34d39]">
          ABOUT THIS SPACE
        </p>
        <h1 className="m-0 font-serif text-page-title font-medium text-[#263b32] sm:text-page-title-lg">
          关于这里
        </h1>
        <p className="mb-0 mt-6 font-sans text-body text-[#68736b]">
          这里是我的个人站点，用来整理文章、记录想法，也留下一些值得回看的内容。
        </p>
      </header>

      <PageSection className="grid gap-4 border-b border-[#e0e4df] py-7 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8">
        <h2 className="m-0 font-serif text-section-title-sm font-medium text-[#263b32]">
          文章
        </h2>
        <p className="m-0 font-sans text-small text-[#68736b]">
          文章页收录站内发布的 MDX 内容。新文章会按照发布日期列在文章目录中。
        </p>
      </PageSection>

      <Link
        to="/posts"
        className="group mt-8 inline-flex items-center gap-3 border-b border-[#a34d39] pb-2 font-sans text-small font-medium text-[#a34d39] no-underline transition-colors hover:border-[#263b32] hover:text-[#263b32]"
      >
        浏览文章
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </PageMain>
  )
}
