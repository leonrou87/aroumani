"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const entries = [
  {
    company: "Uber",
    role: "Director of Engineering & Seattle Site Lead",
    period: "2018 — Present",
    location: "Seattle, WA",
    description:
      "Leading Uber's Mobility Verticals Group — the teams responsible for Rider and Driver experiences globally. Launched Uber Reserve, Travel & Airports, Connect, Hourly, Park, Safari, Ski, Bubbles, and the Web platform.",
    accent: true,
  },
  {
    company: "Amazon",
    role: "Software Development Manager",
    period: "2014 — 2018",
    location: "Seattle, WA",
    description:
      "Led engineering teams building AWS Silk, Amazon's consumer browser. Oversaw architecture decisions, delivery, and cross-functional alignment across a global org.",
    accent: false,
  },
  {
    company: "BlackBerry",
    role: "Team Lead, Software Loading Infrastructure",
    period: "2010 — 2014",
    location: "Waterloo, ON",
    description:
      "Managed a development team responsible for core mobile computing services and software loading infrastructure across BlackBerry's device lineup.",
    accent: false,
  },
  {
    company: "WorkPlayMobile",
    role: "Founder & President",
    period: "Earlier",
    location: "Toronto, ON",
    description:
      "Founded and ran a mobile technology startup. Led product direction, engineering, and business strategy end-to-end.",
    accent: false,
  },
  {
    company: "Compuscope Consulting",
    role: "Chief Developer",
    period: "Earlier",
    location: "Toronto, ON",
    description:
      "Delivered software consulting engagements across industries, building custom solutions from first principles.",
    accent: false,
  },
]

function Entry({
  item,
  index,
  inView,
}: {
  item: (typeof entries)[0]
  index: number
  inView: boolean
}) {
  const isRight = index % 2 !== 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.15 + index * 0.11,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative grid md:grid-cols-2 gap-0"
    >
      {/* Left side (even) */}
      <div
        className={`py-8 md:py-10 ${
          isRight
            ? "md:col-start-2 md:pl-14"
            : "md:col-start-1 md:pr-14 md:text-right"
        } pl-10 md:pl-0`}
      >
        <p className="font-mono text-[0.6rem] text-muted/60 tracking-[0.2em] mb-2">
          {item.period} · {item.location}
        </p>
        <h3
          className={`font-display text-2xl md:text-3xl font-light mb-1 ${
            item.accent ? "text-accent" : "text-cream"
          }`}
        >
          {item.company}
        </h3>
        <p className="font-sans text-xs text-muted mb-4 tracking-wide">
          {item.role}
        </p>
        <p className="font-sans text-sm text-muted/70 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Center line + dot (desktop) */}
      <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            delay: 0.2 + index * 0.11,
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
          className={`absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10 ${
            item.accent
              ? "border-accent bg-accent shadow-[0_0_16px_rgba(200,130,42,0.4)]"
              : "border-border bg-surface"
          }`}
        />
      </div>

      {/* Mobile dot */}
      <div className="absolute left-0 top-10 md:hidden">
        <div
          className={`w-2.5 h-2.5 rounded-full border-2 ${
            item.accent ? "border-accent bg-accent" : "border-border bg-surface"
          }`}
        />
      </div>

      {/* Empty half for alternating */}
      {!isRight && <div className="hidden md:block md:col-start-2" />}
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="work" ref={ref} className="py-28 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-14 md:mb-20"
        >
          02 — Career
        </motion.p>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border origin-top"
          />

          {/* Mobile spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute md:hidden left-0 top-0 bottom-0 w-px bg-border origin-top"
          />

          <div>
            {entries.map((item, i) => (
              <Entry key={item.company} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
