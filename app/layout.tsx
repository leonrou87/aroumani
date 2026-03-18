import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Adib Roumani",
    template: "%s — Adib Roumani",
  },
  description:
    "Director of Engineering & Seattle Site Lead at Uber. Building the technology behind how the world moves.",
  openGraph: {
    title: "Adib Roumani",
    description:
      "Director of Engineering & Seattle Site Lead at Uber. Building the technology behind how the world moves.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adib Roumani",
    description: "Director of Engineering & Seattle Site Lead at Uber.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
