"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  {
    quote: "We are thrilled to offer skiers and snowboarders alike a convenient and reliable way to get to the mountain this season.",
    outlet: "Parade / Yahoo Finance",
    year: "2025",
    context: "Uber Ski · Vail Resorts launch",
  },
  {
    quote: "Powered by Uber Reserve, we are able to unlock an incredible champagne experience exclusively in the Uber app — the first ever champagne tour bookable directly through Uber.",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Bubbles · Paris, France",
  },
  {
    quote: "Uber Reserve continues to power more and more amazing experiences around the world — from champagne tastings in France to yacht adventures in Ibiza to safari drives in Cape Town.",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Safari · Cape Town",
  },
  {
    quote: "Guest Lecture: Building Products at Scale — Engineering, Product & Leadership",
    outlet: "University of Toronto",
    year: "2023",
    context: "CS 301 · Department of Computer Science",
  },
]

export default function Press() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-12" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">04 — PRESS & SPEAKING</p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="group relative border border-border bg-bg hover:bg-bg3 transition-all duration-400 p-8 md:p-12 overflow-hidden"
            >
              {/* Accent bar left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom"
                style={{ background: "var(--accent)" }}
              />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-1">
                  <span
                    className="font-display font-black text-5xl leading-none"
                    style={{ color: "rgba(255,77,0,0.15)" }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="font-display font-semibold text-text leading-snug -mt-2 mb-4"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    {item.quote}
                  </p>
                  <p className="font-mono text-[0.58rem] text-muted/50 tracking-[0.15em]">{item.context}</p>
                </div>
                <div className="md:text-right md:min-w-[140px] shrink-0">
                  <p
                    className="font-mono text-[0.6rem] tracking-[0.18em] mb-1 transition-colors duration-300 group-hover:text-accent"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.outlet}
                  </p>
                  <p className="font-mono text-[0.58rem] text-muted/40">{item.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
