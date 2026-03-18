"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState(text.replace(/./g, "·"))
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    const duration = 1100
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const revealed = Math.floor(progress * text.length)
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i < revealed) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )
      if (progress >= 1) {
        setDisplay(text)
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [started, text])

  return <span className="tabular-nums">{display}</span>
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(ellipse, rgba(200,130,42,0.055) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(ellipse, rgba(200,130,42,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Corner year */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute top-24 right-6 md:right-12 font-mono text-[0.6rem] text-muted/50 tracking-[0.3em]"
      >
        MMXXVI
      </motion.div>

      {/* Location top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute top-24 left-6 md:left-12 font-mono text-[0.6rem] text-muted/50 tracking-[0.25em]"
      >
        SEATTLE · WA
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-border mb-10 md:mb-14"
        />

        {/* Name block */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-light leading-[0.88] tracking-tight text-cream"
              style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
            >
              {mounted ? <ScrambleText text="ADIB" delay={450} /> : "ADIB"}
            </h1>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-light leading-[0.88] tracking-tight text-cream"
              style={{ fontSize: "clamp(72px, 14vw, 200px)" }}
            >
              {mounted ? <ScrambleText text="ROUMANI" delay={550} /> : "ROUMANI"}
            </h1>
          </motion.div>
        </div>

        {/* Bottom meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0"
        >
          <div>
            <p className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-2">
              Director of Engineering
            </p>
            <p className="font-sans text-sm text-muted font-light">
              Uber Mobility · Seattle · B.Sc. Computer Science, University of Toronto
            </p>
          </div>
          <div className="md:text-right">
            <p
              className="font-display font-light italic text-cream/60 leading-snug"
              style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
            >
              Building the technology
              <br />
              behind how the world moves.
            </p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 md:mt-16 flex items-center gap-3 text-muted/40"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-muted/40 to-muted/70"
          />
          <span className="font-mono text-[0.55rem] tracking-[0.3em]">SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}
