import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)
  if (posts.length === 0) return null

  const [featured, ...rest] = posts

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #FF4D00 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
              <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">05 — WRITING</p>
            </div>
            <h2
              className="font-display font-bold text-text"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Latest thoughts.
            </h2>
          </div>
          <Link
            href="/blog"
            data-hover
            className="hidden md:flex items-center gap-3 group font-mono text-[0.6rem] text-muted tracking-[0.2em] hover:text-text transition-colors duration-300"
          >
            All posts
            <span className="h-[1px] w-6 bg-current group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              data-hover
              className="md:col-span-2 group relative border border-border bg-bg2 p-8 md:p-10 block hover:bg-bg3 transition-colors duration-300 overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"
                style={{ background: "var(--accent)" }}
              />
              <p className="font-mono text-[0.55rem] tracking-[0.22em] text-muted/50 mb-4">{featured.category}</p>
              <h3
                className="font-display font-bold text-text group-hover:text-accent transition-colors duration-300 leading-tight mb-4"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                {featured.title}
              </h3>
              <p className="font-sans text-sm text-muted/70 leading-relaxed mb-8">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.55rem] text-muted/40">{featured.date}</p>
                <span className="font-mono text-[0.58rem] tracking-[0.15em] text-accent flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read <span className="h-[1px] w-4 bg-current" />
                </span>
              </div>
            </Link>
          )}

          {/* Secondary posts */}
          <div className="flex flex-col gap-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-hover
                className="group relative flex-1 border border-border bg-bg2 p-7 block hover:bg-bg3 transition-colors duration-300 overflow-hidden"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"
                  style={{ background: "var(--accent)" }}
                />
                <p className="font-mono text-[0.52rem] tracking-[0.2em] text-muted/40 mb-3">{post.category}</p>
                <h3 className="font-display font-semibold text-base text-text group-hover:text-accent transition-colors duration-300 leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="font-mono text-[0.52rem] text-muted/40 mt-4">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
