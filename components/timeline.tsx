"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const entries = [
  {
    company: "Uber",
    role: "Director of Engineering & Seattle Site Lead",
    period: "2018 — Present",
    location: "Seattle, WA",
    description: "Leading Mobility Verticals Engineering — 230+ engineers across 5 global cities. Building Uber's mobility growth bets from products operating at massive scale to emerging 0-to-1 bets across intercity, air, trains, buses, and micromobility.",
    accent: "#FF4D00",
  },
  {
    company: "Amazon",
    role: "Software Development Manager",
    period: "2014 — 2018",
    location: "Seattle, WA",
    description: "Led engineering teams building AWS Silk, Amazon's consumer browser. Oversaw architecture, global delivery, and cross-functional alignment.",
    accent: "#FFB800",
  },
  {
    company: "BlackBerry",
    role: "Team Lead, Software Loading Infrastructure",
    period: "2010 — 2014",
    location: "Waterloo, ON",
    description: "Managed development teams responsible for core mobile computing services and software loading infrastructure across BlackBerry's device lineup.",
    accent: "#F5F0E8",
  },
  {
    company: "WorkPlayMobile",
    role: "Founder & President",
    period: "Earlier",
    location: "Toronto, ON",
    description: "Founded and ran a mobile technology startup. Led product, engineering, and business strategy from zero.",
    accent: "#FF4D00",
  },
  {
    company: "Compuscope Consulting",
    role: "Chief Developer",
    period: "Earlier",
    location: "Toronto, ON",
    description: "Delivered custom software consulting across industries.",
    accent: "#FFB800",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="work" ref={ref} className="py-28 md:py-40 px-6 md:px-12" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-24"
        >
          <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">02 — CAREER</p>
        </motion.div>

        <div className="space-y-0">
          {entries.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-12 border-b border-border hover:bg-bg3 transition-colors duration-300 px-0 md:px-4 -mx-0 md:-mx-4"
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: item.accent }}
              />

              {/* Period */}
              <div className="md:col-span-2">
                <p className="font-mono text-[0.58rem] tracking-[0.18em] text-muted/60">{item.period}</p>
                <p className="font-mono text-[0.55rem] tracking-[0.15em] text-muted/40 mt-1">{item.location}</p>
              </div>

              {/* Company + role */}
              <div className="md:col-span-4">
                <h3
                  className="font-display font-bold text-2xl md:text-3xl text-text mb-1 transition-colors duration-300"
                  style={{ color: "var(--text)" }}
                >
                  <span className="group-hover:text-accent transition-colors duration-300" style={{ "--hover": item.accent } as React.CSSProperties}>
                    {item.company}
                  </span>
                </h3>
                <p className="font-sans text-xs text-muted">{item.role}</p>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-sans text-sm text-muted/70 leading-relaxed">{item.description}</p>
              </div>

              {/* Index number */}
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-black text-6xl leading-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300 pointer-none select-none"
                style={{ color: item.accent }}
              >
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
