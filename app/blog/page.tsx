import { getAllPosts } from "@/lib/blog"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on engineering, leadership, and technology from Adib Roumani.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-36 pb-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 md:mb-24">
            <p className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-5">
              Writing
            </p>
            <h1
              className="font-display font-light text-cream"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Thoughts on engineering,
              <br />
              <em className="text-muted">leadership &amp; technology.</em>
            </h1>
          </div>

          {posts.length === 0 ? (
            <div className="border border-border p-12">
              <p className="font-display text-2xl font-light text-cream mb-2">
                Coming soon.
              </p>
              <p className="font-sans text-sm text-muted">
                Posts will appear here. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-px bg-border">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg hover:bg-surface transition-colors duration-300 p-8 md:p-10 group"
                >
                  <div className="flex-1">
                    <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.2em] mb-2">
                      {post.category}
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl font-light text-cream group-hover:text-accent transition-colors duration-300 mb-2">
                      {post.title}
                    </h2>
                    <p className="font-sans text-sm text-muted/75 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="font-mono text-[0.6rem] text-muted/60 tracking-[0.15em]">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
