"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&"

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState(text.replace(/[^ ]/g, "·"))
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  useEffect(() => {
    if (!started) return
    const duration = 1200
    const start = Date.now()
    const iv = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const revealed = Math.floor(p * text.length)
      setDisplay(
        text.split("").map((c, i) => {
          if (c === " ") return " "
          if (i < revealed) return c
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join("")
      )
      if (p >= 1) { setDisplay(text); clearInterval(iv) }
    }, 35)
    return () => clearInterval(iv)
  }, [started, text])
  return <span>{display}</span>
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const springY = useSpring(y, { stiffness: 80, damping: 20 })

  useEffect(() => setMounted(true), [])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb1 absolute rounded-full opacity-30"
          style={{
            width: "60vw", height: "60vw",
            top: "-10%", left: "-15%",
            background: "radial-gradient(circle, rgba(124,109,250,0.4) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="orb2 absolute rounded-full opacity-20"
          style={{
            width: "50vw", height: "50vw",
            top: "10%", right: "-15%",
            background: "radial-gradient(circle, rgba(240,107,188,0.35) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="orb3 absolute rounded-full opacity-15"
          style={{
            width: "40vw", height: "40vw",
            bottom: "0%", left: "30%",
            background: "radial-gradient(circle, rgba(56,232,200,0.3) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,109,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,109,250,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-24 right-6 md:right-12 text-right"
      >
        <p className="font-mono text-[0.55rem] text-muted/40 tracking-[0.3em]">MMXXVI</p>
        <p className="font-mono text-[0.55rem] text-accent/60 tracking-[0.2em] mt-1">SEATTLE · WA</p>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute top-28 left-6 md:left-12 hidden md:flex items-center gap-2 border border-accent/20 bg-accent/5 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent3 animate-pulse" />
        <span className="font-mono text-[0.55rem] text-muted tracking-[0.15em]">UBER · MOBILITY VERTICALS</span>
      </motion.div>

      <motion.div style={{ y: springY, opacity }} className="relative max-w-7xl mx-auto w-full">

        {/* Rule with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left mb-10 md:mb-14 h-px"
          style={{ background: "linear-gradient(90deg, rgba(124,109,250,0.8), rgba(240,107,188,0.6), transparent)" }}
        />

        {/* Name */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-light leading-[0.85] tracking-tight"
              style={{
                fontSize: "clamp(72px, 14vw, 210px)",
                background: "linear-gradient(135deg, #f0eeff 40%, rgba(124,109,250,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {mounted ? <ScrambleText text="ADIB" delay={400} /> : "ADIB"}
            </h1>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.52, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-light leading-[0.85] tracking-tight"
              style={{
                fontSize: "clamp(72px, 14vw, 210px)",
                background: "linear-gradient(135deg, #f0eeff 20%, rgba(240,107,188,0.75) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {mounted ? <ScrambleText text="ROUMANI" delay={520} /> : "ROUMANI"}
            </h1>
          </motion.div>
        </div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-accent to-accent2" />
              <p className="font-mono text-[0.6rem] tracking-[0.25em] grad-text">
                DIRECTOR OF ENGINEERING
              </p>
            </div>
            <p className="font-sans text-sm text-muted font-light">
              Uber Mobility · 230+ Engineers · Seattle, San Francisco, New York, Toronto, Bangalore
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-display font-light italic text-text/50 leading-snug md:text-right"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)" }}
          >
            Building the technology
            <br />
            behind how the world moves.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-12 md:mt-16 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(124,109,250,0.8))" }}
          />
          <span className="font-mono text-[0.55rem] tracking-[0.3em] text-muted/40">SCROLL</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
