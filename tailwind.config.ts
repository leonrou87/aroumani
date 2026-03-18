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
        display: ["Bricolage Grotesque", "sans-serif"],
        sans: ["Instrument Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#080808",
        bg2: "#111111",
        bg3: "#161616",
        border: "#222222",
        text: "#F5F0E8",
        muted: "#999999",
        accent: "#FF4D00",
        gold: "#FFB800",
      },
    },
  },
  plugins: [],
}
export default config
