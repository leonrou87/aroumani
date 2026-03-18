import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-black text-xl tracking-wide text-text mb-1">
            Adib Roumani
          </p>
          <p className="font-mono text-[0.55rem] text-muted/50 tracking-[0.25em]">SEATTLE · WASHINGTON</p>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-8">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/adib-roumani-47a28330", ext: true },
            { label: "Instagram", href: "https://www.instagram.com/adib.roumani/", ext: true },
            { label: "Writing", href: "/blog", ext: false },
            { label: "Contact", href: "/contact", ext: false },
          ].map((s) =>
            s.ext ? (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-hover
                className="font-mono text-[0.58rem] text-muted hover:text-text transition-colors duration-300 tracking-[0.15em]">
                {s.label}
              </a>
            ) : (
              <Link key={s.label} href={s.href} data-hover
                className="font-mono text-[0.58rem] text-muted hover:text-text transition-colors duration-300 tracking-[0.15em]">
                {s.label}
              </Link>
            )
          )}
        </nav>

        <p className="font-mono text-[0.52rem] text-muted/25 tracking-[0.15em]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
