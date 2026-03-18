"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"

const socials = [
  {
    label: "LinkedIn",
    sub: "/in/adib-roumani-47a28330",
    href: "https://www.linkedin.com/in/adib-roumani-47a28330",
  },
  {
    label: "Instagram",
    sub: "@adib.roumani",
    href: "https://www.instagram.com/adib.roumani/",
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n---\nFrom: ${form.name}\nReply to: ${form.email}`
    )
    // Replace with your actual email address
    window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${sub}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-36 pb-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <p className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-5">
              Get in touch
            </p>
            <h1
              className="font-display font-light text-cream mb-5"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Let&rsquo;s talk.
            </h1>
            <p className="font-sans text-base text-muted font-light max-w-md">
              Engineering, leadership, Uber products, or anything else — I&rsquo;d
              love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {sent ? (
                <div className="border border-accent/25 bg-accent/5 p-10">
                  <p className="font-display text-3xl font-light text-cream mb-3">
                    Thank you.
                  </p>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    Your message has been queued. I&rsquo;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { id: "name", label: "NAME", type: "text", placeholder: "Your name" },
                    { id: "email", label: "EMAIL", type: "email", placeholder: "you@example.com" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block font-mono text-[0.55rem] text-muted/60 tracking-[0.25em] mb-3">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id as "name" | "email"]}
                        onChange={(e) =>
                          setForm({ ...form, [field.id]: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 font-sans text-sm text-cream placeholder:text-muted/30 transition-colors duration-300"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono text-[0.55rem] text-muted/60 tracking-[0.25em] mb-3">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="What's on your mind?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 font-sans text-sm text-cream placeholder:text-muted/30 transition-colors duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-4 font-mono text-[0.6rem] tracking-[0.25em] text-cream hover:text-accent transition-colors duration-300"
                  >
                    <span className="h-px w-8 bg-current group-hover:w-16 transition-all duration-300" />
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div>
                <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.25em] mb-6">
                  FIND ME ON
                </p>
                <div className="space-y-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <span className="h-px w-4 bg-border group-hover:w-10 group-hover:bg-accent transition-all duration-300" />
                      <div>
                        <p className="font-sans text-sm text-muted group-hover:text-cream transition-colors duration-300">
                          {s.label}
                        </p>
                        <p className="font-mono text-[0.55rem] text-muted/40 tracking-[0.1em]">
                          {s.sub}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.25em] mb-4">
                  BASED IN
                </p>
                <p className="font-display text-3xl font-light text-cream">Seattle, WA</p>
                <p className="font-sans text-sm text-muted mt-1">Pacific Time · GMT−8</p>
              </div>

              <div>
                <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.25em] mb-4">
                  TOPICS
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Engineering Leadership",
                    "Mobility Tech",
                    "Product Strategy",
                    "Team Building",
                    "Startups",
                  ].map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.55rem] tracking-[0.1em] border border-border text-muted/60 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
