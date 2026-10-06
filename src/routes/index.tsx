import { createFileRoute, Link } from '@tanstack/react-router'
import { PageMain } from '../layouts/PageMain'
import { PageSection } from '../layouts/PageSection'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [{ title: "首页 | ffxixslh's Blog" }],
  }),
})

function Index() {
  return (
    <PageMain>
      <PageSection className="max-w-2xl">
        <p className="mb-6 font-sans text-label font-semibold text-[#a34d39]">
          A SPACE TO WRITE
        </p>
        <h1 className="m-0 font-serif text-display font-medium text-[#263b32] sm:text-display-lg">
          你好，我是
          <span className="mt-2 block">ffxixslh.</span>
        </h1>
        <p className="mb-0 mt-8 max-w-xl font-sans text-body text-[#68736b] sm:text-body-lg">
          这里是我的个人空间，收录文章、想法，以及值得慢慢整理的日常记录。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-sans">
          <Link
            to="/posts"
            className="group inline-flex items-center gap-3 border-b border-[#a34d39] pb-2 text-small font-medium text-[#a34d39] no-underline transition-colors hover:border-[#263b32] hover:text-[#263b32]"
          >
            阅读文章
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/about"
            className="border-b border-[#cfd6cf] pb-2 text-small text-[#606a63] no-underline transition-colors hover:border-[#263b32] hover:text-[#263b32]"
          >
            关于这里
          </Link>
        </div>
      </PageSection>

      <aside className="max-w-xs border-l border-[#cfd6cf] py-2 pl-6 lg:justify-self-end">
        <p className="mb-3 font-sans text-label font-semibold text-[#778078]">
          这里有什么
        </p>
        <p className="m-0 font-serif text-section-title-sm text-[#263b32]">
          一些文章，
          <br />
          一些仍在生长的想法。
        </p>
        <div className="mt-6 h-px w-12 bg-[#a34d39]" />
      </aside>
    </PageMain>
  )
}
