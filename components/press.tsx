"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  {
    quote:
      "We are thrilled to offer skiers and snowboarders alike a convenient and reliable way to get to the mountain this season.",
    attribution: "Adib Roumani, Director of Engineering, Uber",
    outlet: "Parade / Yahoo Finance",
    year: "2025",
    context: "Uber Ski launch with Vail Resorts",
  },
  {
    quote:
      "Powered by Uber Reserve, we are able to unlock an incredible champagne experience exclusively in the Uber app — the first ever champagne tour bookable directly through Uber.",
    attribution: "Adib Roumani",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Bubbles — Paris, France",
  },
  {
    quote:
      "Uber Reserve continues to power more and more amazing experiences around the world — from champagne tastings in France to yacht adventures in Ibiza to safari drives in Cape Town.",
    attribution: "Adib Roumani",
    outlet: "LinkedIn",
    year: "2024",
    context: "Uber Safari — Cape Town",
  },
  {
    quote: "Guest Lecture: Building Products at Scale — Engineering, Product & Leadership",
    attribution: "CS 301 Guest Lecture Series",
    outlet: "University of Toronto",
    year: "2023",
    context: "Invited speaker, Department of Computer Science",
  },
]

export default function Press() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-14 md:mb-20"
        >
          04 — Press & Speaking
        </motion.p>

        <div className="space-y-px bg-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="bg-surface hover:bg-bg transition-colors duration-300 group p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-16">
                <div className="flex-1">
                  <p
                    className="font-display font-light italic text-cream leading-relaxed mb-4"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="font-sans text-xs text-muted/70">{item.context}</p>
                </div>
                <div className="md:text-right shrink-0 md:min-w-[160px]">
                  <p className="font-mono text-[0.6rem] text-accent tracking-[0.18em] mb-1">
                    {item.outlet}
                  </p>
                  <p className="font-mono text-[0.6rem] text-muted/50 tracking-[0.15em]">
                    {item.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
