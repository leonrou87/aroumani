"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "230+", label: "Engineers across 5 cities", color: "#7c6dfa" },
  { value: "15+", label: "Years in engineering", color: "#f06bbc" },
  { value: "3", label: "Industry-leading companies", color: "#38e8c8" },
  { value: "100M+", label: "Riders & drivers reached", color: "#f0b429" },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-10" style={{ background: "radial-gradient(circle, rgba(240,107,188,0.6) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14 md:mb-20"
        >
          <div className="h-px w-8 bg-gradient-to-r from-accent to-accent2" />
          <p className="font-mono text-[0.6rem] tracking-[0.25em] grad-text">01 — ABOUT</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <h2
              className="font-display font-light leading-tight mb-6"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "#f0eeff",
              }}
            >
              Engineering leader building the{" "}
              <span className="grad-text">future of how the world moves.</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left mt-8 h-px w-24"
              style={{ background: "linear-gradient(90deg, #7c6dfa, #f06bbc, transparent)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="space-y-5 text-muted font-light leading-relaxed text-sm md:text-[0.95rem]"
          >
            <p>
              I&apos;m Adib Roumani — Director of Engineering and Seattle Site Lead at Uber,
              where I lead the Mobility Verticals Engineering team: a global organization
              of 230+ engineers building and scaling Uber&apos;s mobility growth bets across
              both established and emerging businesses.
            </p>
            <p>
              Our teams span Seattle, San Francisco, New York, Toronto, and Bangalore,
              with deep expertise across backend systems, mobile and web, and machine
              learning. We work across the full stack — from rider and driver experiences
              to the core systems powering matching, pricing, and trip fulfillment.
            </p>
            <p>
              On the scaled side, we power Airports, Reserve, and Shared Rides at massive
              global scale. In parallel, we incubate early-stage bets across intercity,
              trains and buses, flights, high-capacity vehicles, car rentals, micromobility,
              and emerging modalities — extending Uber into a broader travel platform.
            </p>
            <p>
              Before Uber, I led engineering at Amazon on AWS Silk and at BlackBerry.
              Earlier I founded WorkPlayMobile and consulted through Compuscope. I hold
              a B.Sc. in Computer Science from the University of Toronto.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 md:mt-28 pt-10 md:pt-14 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              className="group"
            >
              <p
                className="font-display font-light leading-none mb-2 transition-transform duration-300 group-hover:scale-105"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  color: s.color,
                  textShadow: `0 0 30px ${s.color}40`,
                }}
              >
                {s.value}
              </p>
              <p className="font-mono text-[0.58rem] text-muted tracking-[0.12em]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
