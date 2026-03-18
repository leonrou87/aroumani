"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&"

function ScrambleLetter({ char, delay }: { char: string; delay: number }) {
  const [display, setDisplay] = useState(CHARS[Math.floor(Math.random() * CHARS.length)])
  useEffect(() => {
    const duration = 900
    const start = Date.now() + delay
    const iv = setInterval(() => {
      const now = Date.now()
      if (now < start) { setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)]); return }
      const p = Math.min((now - start) / duration, 1)
      if (p < 1) { setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)]) }
      else { setDisplay(char); clearInterval(iv) }
    }, 40)
    return () => clearInterval(iv)
  }, [char, delay])
  return <span>{display}</span>
}

function AnimatedWord({ word, startDelay }: { word: string; startDelay: number }) {
  return (
    <>
      {word.split("").map((char, i) => (
        <ScrambleLetter key={i} char={char} delay={startDelay + i * 60} />
      ))}
    </>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 600], [0, 60])
  const textY = useTransform(scrollY, [0, 600], [0, -40])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Spotlight that follows — ambient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 65% 40%, rgba(255,77,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* TOP NAV SPACER */}
      <div className="h-[4.5rem]" />

      {/* MAIN HERO CONTENT */}
      <div className="flex-1 flex flex-col md:flex-row items-stretch relative">

        {/* LEFT — TEXT */}
        <motion.div
          style={{ y: textY }}
          className="flex-1 flex flex-col justify-between px-6 md:px-12 pt-12 pb-12 md:pt-20 md:pb-20 relative z-10"
        >
          {/* Orange line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left h-[2px] w-16 mb-10"
            style={{ background: "var(--accent)" }}
          />

          {/* Name */}
          <div>
            <div className="overflow-hidden mb-1">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.25, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1
                  className="font-display font-extrabold leading-[0.88] tracking-tight text-text"
                  style={{ fontSize: "clamp(80px, 13vw, 200px)" }}
                >
                  {mounted ? <AnimatedWord word="ADIB" startDelay={300} /> : "ADIB"}
                </h1>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 0.38, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1
                  className="font-display font-extrabold leading-[0.88] tracking-tight"
                  style={{
                    fontSize: "clamp(80px, 13vw, 200px)",
                    WebkitTextStroke: "2px rgba(245,240,232,0.15)",
                    color: "var(--text)",
                  }}
                >
                  {mounted ? <AnimatedWord word="ROUMANI" startDelay={450} /> : "ROUMANI"}
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Bottom meta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-auto pt-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
              <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">DIRECTOR OF ENGINEERING</p>
            </div>
            <p className="font-mono text-[0.58rem] tracking-[0.18em] text-muted/60 mb-6">
              Uber · Mobility Verticals · 230+ Engineers · 5 Cities
            </p>
            <motion.a
              href="#about"
              data-hover
              className="inline-flex items-center gap-4 group"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <span
                className="text-sm font-display font-semibold tracking-wide text-text group-hover:text-accent transition-colors duration-300"
              >
                Explore
              </span>
              <motion.span
                className="h-[2px] bg-accent"
                initial={{ width: 24 }}
                whileHover={{ width: 48 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT — PHOTO */}
        <motion.div
          style={{ y: photoY, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[42%] h-[60vw] md:h-auto flex-shrink-0 overflow-hidden"
        >
          {/* Photo */}
          <Image
            src="/adib.jpg"
            alt="Adib Roumani"
            fill
            className="object-cover object-top transition-all duration-700"
            style={{
              filter: "grayscale(30%) contrast(1.05)",
            }}
            priority
          />

          {/* Gradient fade to left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg) 0%, transparent 25%, transparent 80%, var(--bg) 100%)",
            }}
          />
          {/* Gradient fade bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--bg) 0%, transparent 40%)",
            }}
          />
          {/* Orange tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{ background: "linear-gradient(135deg, var(--accent) 0%, transparent 60%)" }}
          />

          {/* Floating stat badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-10 right-6 md:right-10 border border-border bg-bg/80 backdrop-blur-md p-4"
            style={{ animation: "floatY 4s ease-in-out infinite" }}
          >
            <p className="font-display font-bold text-2xl text-accent leading-none mb-1">230+</p>
            <p className="font-mono text-[0.52rem] text-muted tracking-[0.15em]">ENGINEERS GLOBALLY</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-8"
          style={{ background: "linear-gradient(to bottom, transparent, var(--accent))" }}
        />
        <span className="font-mono text-[0.5rem] tracking-[0.35em] text-muted/40">SCROLL</span>
      </motion.div>
    </section>
  )
}
