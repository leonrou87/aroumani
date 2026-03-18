"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const entries = [
  {
    company: "Uber",
    role: "Director of Engineering & Seattle Site Lead",
    period: "2018 — Present",
    location: "Seattle, WA",
    description: "Leading Mobility Verticals Engineering — a global org of 230+ engineers across 5 cities. Building and scaling Uber's mobility growth bets from core products at massive scale to emerging 0-to-1 bets.",
    color: "#7c6dfa",
    dot: "accent",
  },
  {
    company: "Amazon",
    role: "Software Development Manager",
    period: "2014 — 2018",
    location: "Seattle, WA",
    description: "Led engineering teams building AWS Silk, Amazon's consumer browser. Oversaw architecture, delivery, and cross-functional alignment at global scale.",
    color: "#f06bbc",
    dot: "pink",
  },
  {
    company: "BlackBerry",
    role: "Team Lead, Software Loading Infrastructure",
    period: "2010 — 2014",
    location: "Waterloo, ON",
    description: "Managed teams responsible for core mobile computing services and software loading infrastructure across BlackBerry's device lineup.",
    color: "#38e8c8",
    dot: "teal",
  },
  {
    company: "WorkPlayMobile",
    role: "Founder & President",
    period: "Earlier",
    location: "Toronto, ON",
    description: "Founded and ran a mobile technology startup. Led product direction, engineering, and business strategy end-to-end.",
    color: "#f0b429",
    dot: "gold",
  },
  {
    company: "Compuscope Consulting",
    role: "Chief Developer",
    period: "Earlier",
    location: "Toronto, ON",
    description: "Delivered software consulting engagements across industries, building custom solutions from first principles.",
    color: "#7c6dfa",
    dot: "accent",
  },
]

function Entry({ item, index, inView }: { item: typeof entries[0]; index: number; inView: boolean }) {
  const isRight = index % 2 !== 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid md:grid-cols-2 gap-0 group"
    >
      <div className={`py-8 md:py-10 ${isRight ? "md:col-start-2 md:pl-14" : "md:col-start-1 md:pr-14 md:text-right"} pl-10 md:pl-0`}>
        <p className="font-mono text-[0.58rem] text-muted/50 tracking-[0.2em] mb-2">
          {item.period} · {item.location}
        </p>
        <h3
          className="font-display text-2xl md:text-3xl font-light mb-1 transition-colors duration-300"
          style={{ color: item.color }}
        >
          {item.company}
        </h3>
        <p className="font-sans text-xs text-muted mb-4 tracking-wide">{item.role}</p>
        <p className="font-sans text-sm text-muted/70 leading-relaxed">{item.description}</p>
      </div>

      {/* Center dot — desktop */}
      <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 400, damping: 20 }}
          className="w-4 h-4 rounded-full z-10 relative"
          style={{
            background: item.color,
            boxShadow: `0 0 20px ${item.color}80, 0 0 40px ${item.color}30`,
          }}
        />
      </div>

      {/* Mobile dot */}
      <div className="absolute left-0 top-10 md:hidden">
        <div className="w-3 h-3 rounded-full" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}80` }} />
      </div>

      {!isRight && <div className="hidden md:block md:col-start-2" />}
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="work" ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] pointer-events-none opacity-[0.06]" style={{ background: "radial-gradient(circle, rgba(124,109,250,1) 0%, transparent 60%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-14 md:mb-20"
        >
          <div className="h-px w-8 bg-gradient-to-r from-accent2 to-accent3" />
          <p className="font-mono text-[0.6rem] tracking-[0.25em]" style={{ background: "linear-gradient(90deg, #f06bbc, #38e8c8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>02 — CAREER</p>
        </motion.div>

        <div className="relative">
          {/* Spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, rgba(124,109,250,0.6), rgba(240,107,188,0.4), rgba(56,232,200,0.3))" }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute md:hidden left-0 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, rgba(124,109,250,0.6), rgba(240,107,188,0.4))" }}
          />

          {entries.map((item, i) => (
            <Entry key={item.company} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
