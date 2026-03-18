"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#products", label: "Focus" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-[4.5rem] flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span
              className="font-display text-xl font-medium tracking-widest"
              style={{
                background: "linear-gradient(135deg, #7c6dfa, #f06bbc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AR
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[0.62rem] text-muted hover:text-text transition-colors duration-300 tracking-[0.18em] uppercase relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent2 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} transition={{ duration: 0.3 }} className="block h-px w-6 bg-text origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.2 }} className="block h-px w-4 bg-text" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} transition={{ duration: 0.3 }} className="block h-px w-6 bg-text origin-center" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background: "rgba(6,6,15,0.97)", backdropFilter: "blur(24px)" }}
          >
            {/* Orb in mobile menu */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(124,109,250,0.5) 0%, transparent 70%)", filter: "blur(40px)" }} />
            </div>

            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl font-light hover:grad-text transition-all duration-300"
                  style={{ color: "#f0eeff" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
