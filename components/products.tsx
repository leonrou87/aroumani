"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const products = [
  {
    name: "Uber Reserve",
    description:
      "Book rides up to 90 days in advance. The flexible backbone powering Uber's most ambitious travel experiences — from Champagne tours in Paris to safari drives in Cape Town.",
    category: "Core Platform",
    featured: true,
  },
  {
    name: "Uber Travel & Airports",
    description:
      "End-to-end travel integration: airports, coach, and train tickets within a single app. Partnered with Omio to give riders access to all transportation modes in a market.",
    category: "Travel",
    featured: false,
  },
  {
    name: "Uber Safari",
    description:
      "Game drives in Cape Town's wilderness, bookable directly through Uber. Powered by Reserve's configuration-driven architecture — a new use case shipped to global scale.",
    category: "Experiences",
    featured: false,
  },
  {
    name: "Uber Bubbles",
    description:
      "The world's first Champagne tour bookable exclusively via an app. Full-day experiences through Épernay and Reims, with morning Tesla pickup from Paris.",
    category: "Experiences",
    featured: false,
  },
  {
    name: "Uber Ski",
    description:
      "On-demand and advance-scheduled rides to ski resorts, in partnership with Vail Resorts. Epic Pass purchases directly within the app. Launched winter 2025.",
    category: "Travel",
    featured: false,
  },
  {
    name: "Uber Park",
    description:
      "In-app parking reservations powered by Metropolis — seamless end-to-end journeys from your driveway to your destination without leaving the Uber app.",
    category: "Platform",
    featured: false,
  },
  {
    name: "Uber Connect",
    description:
      "Same-day package and item delivery between trusted contacts, leveraging Uber's existing driver network without dedicated fleet investment.",
    category: "Platform",
    featured: false,
  },
  {
    name: "Uber Hourly",
    description:
      "Book a driver by the hour for multiple stops — whether for business errands, city touring, or personal appointments — all on a single ride.",
    category: "Core Platform",
    featured: false,
  },
  {
    name: "Web Platform",
    description:
      "Browser-based ride booking expanding access to riders who prefer not to use a mobile app — extending Uber's reach without requiring an install.",
    category: "Platform",
    featured: false,
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="products" ref={ref} className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-5"
        >
          03 — Products
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <h2
            className="font-display font-light text-cream max-w-lg"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Launched at Uber.{" "}
            <em className="text-muted not-italic">Used by millions.</em>
          </h2>
          <p className="font-sans text-sm text-muted/60 max-w-xs text-right hidden md:block">
            Nine flagship products shipped under my engineering leadership since 2018.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.05 }}
              className={`group p-8 cursor-default transition-colors duration-300 hover:bg-surface ${
                p.featured ? "bg-surface" : "bg-bg"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.2em]">
                  {p.category}
                </p>
                {p.featured && (
                  <span className="font-mono text-[0.5rem] text-accent tracking-[0.15em] border border-accent/30 px-2 py-0.5">
                    FLAGSHIP
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-medium text-cream mb-3 group-hover:text-accent transition-colors duration-300">
                {p.name}
              </h3>
              <p className="font-sans text-sm text-muted/80 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
