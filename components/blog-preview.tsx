import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] pointer-events-none opacity-[0.05]" style={{ background: "radial-gradient(circle, rgba(124,109,250,1) 0%, transparent 60%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-accent to-accent2" />
              <p className="font-mono text-[0.6rem] tracking-[0.25em] grad-text">05 — WRITING</p>
            </div>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#f0eeff" }}>
              Latest thoughts.
            </h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-3 group font-mono text-[0.6rem] text-muted tracking-[0.2em] hover:text-text transition-colors duration-300">
            All posts
            <span className="h-px w-6 bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => {
            const colors = ["#7c6dfa", "#f06bbc", "#38e8c8"]
            const c = colors[i % colors.length]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative p-8 rounded-xl border transition-all duration-500 hover:-translate-y-1 block"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `${c}08`, borderColor: `${c}30` }} />

                <p className="font-mono text-[0.55rem] tracking-[0.2em] mb-4" style={{ color: `${c}80` }}>
                  {post.category}
                </p>
                <h3 className="font-display text-xl font-light mb-3 leading-snug transition-colors duration-300 group-hover:opacity-80" style={{ color: "#f0eeff" }}>
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-muted/75 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[0.55rem] text-muted/40 tracking-[0.15em]">{post.date}</p>
                  <span className="font-mono text-[0.55rem] tracking-[0.15em] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: c }}>
                    Read <span className="h-px w-4 bg-current inline-block" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
