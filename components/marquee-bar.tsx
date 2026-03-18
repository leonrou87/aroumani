const ITEMS = [
  "Uber", "230+ Engineers", "Seattle", "San Francisco",
  "New York", "Toronto", "Bangalore", "Director of Engineering",
  "Mobility Verticals", "Moving the World", "Airports", "Reserve",
  "Intercity", "Trains & Buses", "Emerging Modalities",
]

export default function MarqueeBar() {
  const text = ITEMS.join("  ·  ") + "  ·  "
  const doubled = text + text

  return (
    <div
      className="overflow-hidden py-3 border-y border-border"
      style={{ background: "var(--accent)" }}
    >
      <div className="marquee-track">
        <span className="font-mono text-[0.6rem] tracking-[0.25em] text-white/90 pr-0">
          {doubled}
        </span>
      </div>
    </div>
  )
}
