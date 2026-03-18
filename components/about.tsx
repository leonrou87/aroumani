"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

function Counter({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const iv = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p >= 1) { setCount(target); clearInterval(iv) }
    }, 16)
    return () => clearInterval(iv)
  }, [target, inView])
  return <>{count}{suffix}</>
}

const stats = [
  { value: 230, suffix: "+", label: "Engineers" },
  { value: 5, suffix: "", label: "Global Cities" },
  { value: 15, suffix: "+", label: "Years Leading" },
  { value: 100, suffix: "M+", label: "Riders Reached" },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">

      {/* Big background number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none overflow-hidden"
        style={{
          fontSize: "clamp(200px, 30vw, 450px)",
          color: "rgba(255,77,0,0.03)",
          right: "-2%",
        }}
      >
        230
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-24"
        >
          <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">01 — ABOUT</p>
        </motion.div>

        {/* Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-7"
          >
            <h2
              className="font-display font-bold text-text leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              Engineering leader building the future of{" "}
              <span style={{ color: "var(--accent)" }}>how the world moves.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-5 space-y-4 text-muted text-sm leading-relaxed"
          >
            <p>
              I lead Uber&apos;s Mobility Verticals Engineering team — a global organization
              of 230+ engineers building and scaling mobility growth bets across established
              and emerging businesses.
            </p>
            <p>
              Our teams span Seattle, San Francisco, New York, Toronto, and Bangalore,
              with deep expertise across backend systems, mobile, web, and machine learning.
              We build across the full stack — from rider and driver experiences to core
              matching, pricing, and fulfillment systems.
            </p>
            <p>
              Before Uber, I led engineering at Amazon (AWS Silk) and BlackBerry. Earlier I
              founded WorkPlayMobile and consulted at Compuscope. B.Sc. Computer Science,
              University of Toronto.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="p-8 md:p-10 group border-r border-b border-border last:border-r-0 hover:bg-bg2 transition-colors duration-300"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="font-display font-black leading-none mb-3 transition-colors duration-300 group-hover:text-accent"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text)" }}
              >
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </p>
              <p className="font-mono text-[0.58rem] text-muted tracking-[0.18em]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
