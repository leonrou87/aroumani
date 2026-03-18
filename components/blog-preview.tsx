import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <p className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-4">
              05 — Writing
            </p>
            <h2
              className="font-display font-light text-cream"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Latest thoughts.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-3 group font-mono text-[0.6rem] text-muted tracking-[0.2em] hover:text-cream transition-colors duration-300"
          >
            All posts
            <span className="h-px w-6 bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-bg hover:bg-surface transition-colors duration-300 p-8 group block"
            >
              <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.2em] mb-4">
                {post.category}
              </p>
              <h3 className="font-display text-xl font-light text-cream group-hover:text-accent transition-colors duration-300 mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="font-sans text-sm text-muted/75 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.15em]">
                {post.date}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="flex items-center gap-3 group font-mono text-[0.6rem] text-muted tracking-[0.2em] hover:text-cream transition-colors duration-300"
          >
            All posts
            <span className="h-px w-6 bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
