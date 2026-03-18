import { getPost, getAllPosts } from "@/lib/blog"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-36 pb-28 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 font-mono text-[0.6rem] text-muted hover:text-cream transition-colors duration-300 tracking-[0.2em] mb-14 group"
          >
            <span className="h-px w-6 bg-current group-hover:w-10 transition-all duration-300" />
            ALL POSTS
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-4">
              {post.category}
            </p>
            <h1
              className="font-display font-light text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {post.title}
            </h1>
            <p className="font-mono text-[0.6rem] text-muted/60 tracking-[0.2em]">
              {post.date}
            </p>
          </div>

          {/* Rule */}
          <div className="h-px bg-border mb-12" />

          {/* Content */}
          <div
            className="prose-ar"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
