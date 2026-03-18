"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  {
    quote: "We are thrilled to offer skiers and snowboarders alike a convenient and reliable way to get to the mountain this season.",
    attribution: "Adib Roumani, Director of Engineering, Uber",
    outlet: "Parade / Yahoo Finance",
    year: "2025",
    context: "Uber Ski launch with Vail Resorts",
    color: "#38e8c8",
  },
  {
    quote: "Powered by Uber Reserve, we are able to unlock an incredible champagne experience exclusively in the Uber app — the first ever champagne tour bookable directly through Uber.",
    attribution: "Adib Roumani",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Bubbles — Paris, France",
    color: "#f06bbc",
  },
  {
    quote: "Uber Reserve continues to power more and more amazing experiences around the world — from champagne tastings in France to yacht adventures in Ibiza to safari drives in Cape Town.",
    attribution: "Adib Roumani",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Safari — Cape Town",
    color: "#7c6dfa",
  },
  {
    quote: "Guest Lecture: Building Products at Scale — Engineering, Product & Leadership",
    attribution: "CS 301 Guest Lecture Series",
    outlet: "University of Toronto",
    year: "2023",
    context: "Invited speaker, Department of Computer Science",
    color: "#f0b429",
  },
]

export default function Press() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] pointer-events-none opacity-[0.06]" style={{ background: "radial-gradient(circle, rgba(240,107,188,1) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14 md:mb-20"
        >
          <div className="h-px w-8 bg-gradient-to-r from-gold to-accent2" />
          <p className="font-mono text-[0.6rem] tracking-[0.25em]" style={{ background: "linear-gradient(90deg, #f0b429, #f06bbc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>04 — PRESS & SPEAKING</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="group relative p-8 md:p-10 rounded-xl border transition-all duration-500 hover:-translate-y-1"
              style={{
                background: `${item.color}06`,
                borderColor: `${item.color}20`,
              }}
              whileHover={{ borderColor: `${item.color}45`, background: `${item.color}0e` }}
            >
              {/* Quote mark */}
              <div
                className="font-display text-6xl font-light leading-none mb-4 opacity-30"
                style={{ color: item.color }}
              >
                &ldquo;
              </div>

              <p className="font-display font-light italic leading-relaxed mb-5" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", color: "#f0eeff" }}>
                {item.quote}
              </p>
              <p className="font-sans text-xs text-muted/60 mb-6">{item.context}</p>

              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: `${item.color}20` }}>
                <p className="font-mono text-[0.58rem] tracking-[0.15em]" style={{ color: item.color }}>
                  {item.outlet}
                </p>
                <p className="font-mono text-[0.58rem] text-muted/40 tracking-[0.15em]">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
