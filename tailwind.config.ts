import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#06060f",
        surface: "#0d0d1f",
        surface2: "#111128",
        border: "#1e1e40",
        text: "#f0eeff",
        muted: "#7a789a",
        accent: "#7c6dfa",
        accent2: "#f06bbc",
        accent3: "#38e8c8",
        gold: "#f0b429",
      },
      backgroundImage: {
        "grad-main": "linear-gradient(135deg, #7c6dfa 0%, #f06bbc 50%, #38e8c8 100%)",
        "grad-warm": "linear-gradient(135deg, #f0b429 0%, #f06bbc 100%)",
      },
    },
  },
  plugins: [],
}

export default config
