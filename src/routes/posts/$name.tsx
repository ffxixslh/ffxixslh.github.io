import { createFileRoute } from '@tanstack/react-router'
import type { ComponentType } from 'react'
import { PageContainer } from '../../layouts/PageContainer'

type PostModule = {
  default: ComponentType
  frontmatter: {
    title?: string
    date?: string
    author?: string
    description?: string
    tags?: string[]
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
      <Module>(key: string): Module
    }
  }
).context('../../', true, /^\.\/contents\/[^/]+\.mdx$/)

const postPaths = new Set(postsContext.keys())

export const Route = createFileRoute('/posts/$name')({
  component: PostPage,
})

function PostPage() {
  const { name } = Route.useParams()
  const path = `./contents/${name}.mdx`

  if (!postPaths.has(path)) {
    return <p>文章不存在。</p>
  }

  const { default: Content, frontmatter } = postsContext(path) as PostModule

  return (
    <PageContainer width="reading" className="my-16 sm:my-24">
      <article>
      <header className="mb-10 border-b border-[#cfd6cf] pb-7">
        <h1 className="mb-4 font-serif text-page-title font-medium text-[#263b32] sm:text-page-title-lg">
          {frontmatter.title ?? name}
        </h1>
        {frontmatter.date && (
          <time
            className="font-sans text-caption tabular-nums text-[#788179]"
            dateTime={frontmatter.date}
          >
            {frontmatter.date}
          </time>
        )}
        {frontmatter.author && (
          <p className="mb-0 mt-3 font-sans text-small text-[#68736b]">
            {frontmatter.author}
          </p>
        )}
        {frontmatter.description && (
          <p className="mb-0 mt-4 font-sans text-body text-[#68736b]">
            {frontmatter.description}
          </p>
        )}
      </header>
      <div className="font-sans text-body text-[#38443c] [&_a]:text-[#a34d39] [&_a]:underline [&_a]:underline-offset-4 [&_h1]:mb-5 [&_h1]:mt-12 [&_h1]:font-serif [&_h1]:text-article-heading [&_h1]:font-medium [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-section-title [&_h2]:font-medium [&_p]:my-6 [&_strong]:font-semibold">
        <Content />
      </div>
      </article>
    </PageContainer>
  )
}