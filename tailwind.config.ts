import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greig: {
          green:       "#3a9e3f",
          "green-mid": "#2d7d31",
          "green-dim": "#4caf50",
        },
        // Lighter theme — dark slate instead of near-black
        slate: {
          950: "#1a1f1a",
          900: "#222722",
          800: "#2c332c",
          700: "#363d36",
          600: "#424842",
        },
        silver: {
          DEFAULT: "#9eaaa0",
          light:   "#c8d4ca",
          dark:    "#6a7870",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "grid-dark": "linear-gradient(rgba(58,158,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(58,158,63,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
