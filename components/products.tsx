"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const areas = [
  {
    label: "Scaled Businesses",
    title: "Airports, Reserve & Shared Rides",
    description: "Core offerings at massive global scale, deeply integrated into Uber's marketplace. Products operating at hundreds of millions of trips — setting the reliability bar for everything we build.",
    tags: ["Global Scale", "Marketplace", "UberX Share"],
    span: "md:col-span-2",
    accent: "#FF4D00",
  },
  {
    label: "High-Capacity & B2B",
    title: "Shuttles, Events & Enterprise",
    description: "0-to-1 bets across high-capacity vehicles, airport shuttles, events, and B2B — moving beyond individual rides.",
    tags: ["B2B", "Events", "Shuttles"],
    span: "md:col-span-1",
    accent: "#FFB800",
  },
  {
    label: "Intercity & Long-Distance",
    title: "Intercity, Trains, Buses & Flights",
    description: "Extending Uber beyond the city through deep third-party integrations — positioning Uber as a full travel platform.",
    tags: ["Intercity", "Trains & Buses", "Flights"],
    span: "md:col-span-1",
    accent: "#F5F0E8",
  },
  {
    label: "Platform & Infrastructure",
    title: "Matching, Pricing & Fulfillment",
    description: "The systems powering every trip. Backend, mobile, web, and ML across the full stack from rider and driver to core marketplace.",
    tags: ["Backend", "ML", "Mobile & Web"],
    span: "md:col-span-2",
    accent: "#FF4D00",
  },
  {
    label: "Emerging Modalities",
    title: "Air, Rentals & Micromobility",
    description: "Early bets on the future: Uber Air, car rentals, bikes and scooters — on shared infrastructure.",
    tags: ["Uber Air", "Rentals", "Bikes & Scooters"],
    span: "md:col-span-1",
    accent: "#FFB800",
  },
  {
    label: "AI-Accelerated Development",
    title: "Velocity at Global Scale",
    description: "AI across the entire development lifecycle — from idea to global launch faster than ever before.",
    tags: ["AI/ML", "Velocity", "Innovation"],
    span: "md:col-span-2",
    accent: "#F5F0E8",
  },
]

function TiltCard({ children, className, accent }: { children: React.ReactNode; className?: string; accent: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (y - 0.5) * -10, y: (x - 0.5) * 10 })
    setGlare({ x: x * 100, y: y * 100 })
  }

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={onMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      onMouseEnter={() => setHovered(true)}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.08s ease" : "transform 0.5s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glare */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
        style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)` }}
      />
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `0 0 30px ${accent}20, inset 0 0 30px ${accent}05` }}
      />
      {children}
    </div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="focus" ref={ref} className="py-28 md:py-40 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[2px]" style={{ background: "var(--accent)" }} />
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted">03 — WHAT WE BUILD</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2
            className="font-display font-bold text-text"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Mobility Verticals Engineering.
            <br />
            <span className="text-muted font-normal" style={{ fontSize: "0.65em" }}>
              230+ engineers. Five cities. One mission.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className={area.span}
            >
              <TiltCard
                accent={area.accent}
                className="h-full border border-border bg-bg2 p-7 md:p-8 rounded-none"
              >
                <div className="flex items-start justify-between mb-5">
                  <p
                    className="font-mono text-[0.55rem] tracking-[0.22em]"
                    style={{ color: `${area.accent}90` }}
                  >
                    {area.label}
                  </p>
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-60"
                    style={{ background: area.accent }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-lg md:text-xl text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300"
                >
                  {area.title}
                </h3>
                <p className="font-sans text-sm text-muted/75 leading-relaxed mb-5">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.5rem] tracking-[0.1em] px-2.5 py-1 border"
                      style={{ color: `${area.accent}60`, borderColor: `${area.accent}20` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
