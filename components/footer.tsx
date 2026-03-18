import Link from "next/link"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adib-roumani-47a28330", external: true },
  { label: "Instagram", href: "https://www.instagram.com/adib.roumani/", external: true },
  { label: "Contact", href: "/contact", external: false },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-12 md:py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ background: "linear-gradient(135deg, rgba(124,109,250,0.5), rgba(240,107,188,0.5))" }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
        <div>
          <p
            className="font-display text-2xl font-light mb-1 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #f0eeff 50%, rgba(124,109,250,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Adib Roumani
          </p>
          <p className="font-mono text-[0.58rem] text-muted/50 tracking-[0.2em]">SEATTLE, WASHINGTON</p>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-8">
          {socials.map((s) =>
            s.external ? (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.6rem] text-muted hover:text-text transition-colors duration-300 tracking-[0.15em]">
                {s.label}
              </a>
            ) : (
              <Link key={s.label} href={s.href}
                className="font-mono text-[0.6rem] text-muted hover:text-text transition-colors duration-300 tracking-[0.15em]">
                {s.label}
              </Link>
            )
          )}
        </nav>

        <p className="font-mono text-[0.55rem] text-muted/30 tracking-[0.15em]">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
