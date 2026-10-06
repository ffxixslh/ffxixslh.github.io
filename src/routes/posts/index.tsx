import { createFileRoute, Link } from '@tanstack/react-router'
import type { ComponentType } from 'react'
import { PageMain } from '../../layouts/PageMain'

type PostModule = {
  default: ComponentType
  frontmatter: {
    title?: string
    date?: string
    description?: string
  }
}

const postsContext = (
  require as NodeJS.Require & {
    context: (
      directory: string,
      useSubdirectories: boolean,
      pattern: RegExp,
    ) => {
      keys: () => string[]
      (key: string): PostModule
    }
  }
).context('../../', true, /^\.\/contents\/[^/]+\.mdx$/)

const posts = postsContext
  .keys()
  .map((path) => {
    const name = path.replace(/^\.\/contents\//, '').replace(/\.mdx$/, '')
    const { frontmatter } = postsContext(path) as PostModule

    return {
      name,
      title: frontmatter.title ?? name,
      date: frontmatter.date,
      description: frontmatter.description,
    }
  })
  .sort((first, second) => (second.date ?? '').localeCompare(first.date ?? ''))

export const Route = createFileRoute('/posts/')({
  component: PostsIndex,
  head: () => ({
    meta: [{ title: "文章 | ffxixslh's Blog" }],
  }),
})

function PostsIndex() {
  return (
    <PageMain>
      <header className="flex items-end justify-between border-b border-[#cfd6cf] pb-6">
        <div>
          <p className="mb-3 font-sans text-label font-semibold text-[#a34d39]">
            NOTES &amp; IDEAS
          </p>
          <h1 className="m-0 font-serif text-page-title font-medium text-[#263b32] sm:text-page-title-lg">
            文章
          </h1>
        </div>
        <span className="pb-1 font-sans text-caption text-[#778078]">
          {String(posts.length).padStart(2, '0')} 篇
        </span>
      </header>
      {posts.length === 0 ? (
        <p className="border-b border-[#e0e4df] py-8 font-sans text-small text-[#68736b]">
          这里还没有文章。
        </p>
      ) : (
        <ul className="m-0 list-none p-0">
          {posts.map((post) => (
            <li key={post.name} className="border-b border-[#e0e4df]">
              <article className="grid grid-cols-[132px_minmax(0,1fr)] gap-7 py-7 max-sm:grid-cols-1 max-sm:gap-2">
                <div className="pt-2 font-sans text-caption tabular-nums text-[#788179] max-sm:pt-0">
                  {post.date && <time dateTime={post.date}>{post.date}</time>}
                </div>
                <div>
                  <h2 className="m-0 font-serif text-section-title font-medium text-[#263b32] max-sm:text-section-title-sm">
                  <Link to="/posts/$name" params={{ name: post.name }}>
                    {post.title}
                  </Link>
                  </h2>
                  {post.description && (
                    <p className="mb-0 mt-2 font-sans text-small text-[#68736b]">
                      {post.description}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </PageMain>
  )
}
