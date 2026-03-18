"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const areas = [
  {
    label: "Scaled Businesses",
    title: "Airports, Reserve & Shared Rides",
    description: "Core offerings operating at massive global scale, deeply integrated into Uber's marketplace. Products like Airports, Reserve, and UberX Share set the reliability bar for everything we build.",
    tags: ["Global Scale", "Marketplace", "Reliability"],
    color: "#7c6dfa",
    featured: true,
  },
  {
    label: "High-Capacity & B2B",
    title: "Shuttles, Events & Enterprise",
    description: "Incubating 0-to-1 bets in high-capacity vehicles, airport shuttles, events transportation, and B2B — moving beyond individual rides toward group and organizational mobility.",
    tags: ["0→1 Bets", "B2B", "Events"],
    color: "#f06bbc",
    featured: false,
  },
  {
    label: "Intercity & Long-Distance",
    title: "Intercity, Trains, Buses & Flights",
    description: "Extending Uber beyond the city through deep third-party integrations — intercity routes, trains, buses, and flights — positioning Uber as a full-spectrum travel platform.",
    tags: ["Intercity", "Trains & Buses", "Flights"],
    color: "#38e8c8",
    featured: false,
  },
  {
    label: "Emerging Modalities",
    title: "Air, Rentals & Micromobility",
    description: "Early-stage bets on the future of movement: Uber Air, car rentals, and micromobility including bikes and scooters — incubated alongside scaled businesses on shared infrastructure.",
    tags: ["Uber Air", "Car Rentals", "Micromobility"],
    color: "#f0b429",
    featured: false,
  },
  {
    label: "Platform & Infrastructure",
    title: "Matching, Pricing & Fulfillment",
    description: "The systems powering every trip — from matching and dynamic pricing to trip fulfillment and platform reliability. Our teams build across backend, mobile, web, and machine learning.",
    tags: ["Backend Systems", "ML", "Mobile & Web"],
    color: "#7c6dfa",
    featured: false,
  },
  {
    label: "AI-Accelerated Development",
    title: "Velocity at Global Scale",
    description: "We leverage the latest advances in AI across the entire product development lifecycle — accelerating innovation, improving quality, and compressing the time from idea to global launch.",
    tags: ["AI/ML", "Developer Velocity", "Innovation"],
    color: "#f06bbc",
    featured: false,
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="products" ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[50vw] h-[50vw] pointer-events-none opacity-[0.05]" style={{ background: "radial-gradient(circle, rgba(56,232,200,1) 0%, transparent 60%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-8 bg-gradient-to-r from-accent3 to-accent" />
          <p className="font-mono text-[0.6rem] tracking-[0.25em]" style={{ background: "linear-gradient(90deg, #38e8c8, #7c6dfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>03 — WHAT WE BUILD</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-14 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end"
        >
          <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#f0eeff" }}>
            Mobility Verticals Engineering.{" "}
            <em className="not-italic" style={{ background: "linear-gradient(135deg, #7c6dfa, #f06bbc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              230+ engineers. Five cities.
            </em>
          </h2>
          <p className="font-sans text-sm text-muted/80 leading-relaxed">
            A global organization building and scaling Uber&apos;s mobility growth bets — from
            core products serving hundreds of millions of trips to early-stage bets on
            the future of how people and goods move through the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.06 }}
              className="group relative p-7 cursor-default rounded-xl border transition-all duration-500 hover:-translate-y-1"
              style={{
                background: area.featured ? `${area.color}08` : "var(--surface)",
                borderColor: area.featured ? `${area.color}30` : "var(--border)",
              }}
              whileHover={{
                borderColor: `${area.color}50`,
                background: `${area.color}0c`,
              }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${area.color}10` }} />

              <div className="flex items-start justify-between mb-4">
                <p className="font-mono text-[0.55rem] tracking-[0.2em]" style={{ color: `${area.color}80` }}>
                  {area.label}
                </p>
                {area.featured && (
                  <span className="font-mono text-[0.5rem] tracking-[0.12em] px-2 py-0.5 rounded-sm" style={{ color: area.color, border: `1px solid ${area.color}40`, background: `${area.color}10` }}>
                    SCALED
                  </span>
                )}
              </div>

              <h3
                className="font-display text-xl font-medium mb-3 transition-colors duration-300"
                style={{ color: "#f0eeff" }}
              >
                <span className="group-hover:text-[var(--c)] transition-colors duration-300" style={{ "--c": area.color } as React.CSSProperties}>
                  {area.title}
                </span>
              </h3>

              <p className="font-sans text-sm text-muted/80 leading-relaxed mb-5">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[0.5rem] tracking-[0.1em] px-2 py-1 rounded-sm" style={{ color: `${area.color}70`, border: `1px solid ${area.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
