import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const postsDir = path.join(process.cwd(), "content/posts")

export interface PostMeta {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const raw = fs.readFileSync(path.join(postsDir, fileName), "utf8")
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: data.category ?? "General",
        excerpt: data.excerpt ?? "",
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: data.category ?? "General",
    excerpt: data.excerpt ?? "",
    content: processed.toString(),
  }
}
