import Nav from "@/components/nav"
import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Products from "@/components/products"
import Press from "@/components/press"
import BlogPreview from "@/components/blog-preview"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Products />
        <Press />
        <BlogPreview />
      </main>
      <Footer />
    </>
  )
}
