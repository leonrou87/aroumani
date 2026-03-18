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
        bg: "#07070A",
        surface: "#0F0F14",
        border: "#1C1C24",
        cream: "#E8E2D9",
        muted: "#6B6560",
        accent: "#C8822A",
        "accent-light": "#E8A53A",
      },
    },
  },
  plugins: [],
}

export default config
