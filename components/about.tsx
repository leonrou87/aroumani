"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "15+", label: "Years building software" },
  { value: "9", label: "Major products launched" },
  { value: "3", label: "Industry-leading companies" },
  { value: "100M+", label: "Riders & drivers reached" },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[0.6rem] text-accent tracking-[0.25em] uppercase mb-14 md:mb-20"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-start">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <h2
              className="font-display font-light text-cream leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Engineering leader building the future of{" "}
              <em className="text-accent not-italic">urban mobility.</em>
            </h2>

            {/* Decorative rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left mt-10 h-px w-24 bg-accent/40"
            />
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="space-y-5 text-muted font-light leading-relaxed text-sm md:text-[0.95rem]"
          >
            <p>
              I&apos;m Adib Roumani — Director of Engineering and Seattle Site Lead at
              Uber&apos;s Mobility Verticals Group, where I lead the teams shaping how
              people move through cities.
            </p>
            <p>
              Over seven years at Uber, my teams have shipped Uber Reserve, Uber
              Travel &amp; Airports, Uber Connect, Uber Hourly, Uber Park, Uber Safari,
              Uber Ski, and the Web platform — reaching hundreds of millions of riders
              and drivers worldwide.
            </p>
            <p>
              Before Uber, I led engineering at Amazon on AWS Silk (Amazon&apos;s consumer
              browser), and at BlackBerry running Software Loading Infrastructure.
              Earlier in my career I founded WorkPlayMobile and built software as Chief
              Developer at Compuscope Consulting.
            </p>
            <p>
              I hold a B.Sc. in Computer Science from the University of Toronto, where
              I later returned as a guest lecturer in the CS 301 series on building
              products at scale.
            </p>
            <p>
              I believe that thoughtful, flexible, configuration-driven architecture
              is what separates teams that ship one product from those that ship nine.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 md:mt-28 pt-10 md:pt-14 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
            >
              <p className="font-display text-[2.8rem] md:text-[3.5rem] font-light text-cream leading-none mb-2">
                {s.value}
              </p>
              <p className="font-mono text-[0.6rem] text-muted tracking-[0.15em]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
