import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
  head: () => ({
    meta: [{ title: "简历 | ffxixslh's Blog" }],
  }),
})

function ResumePage() {
  return (
      <iframe
        className="block min-h-[calc(100vh-4rem)] w-full border-0"
        src="/resume/"
        title="ffxixslh 的个人简历"
      />
  )
}
