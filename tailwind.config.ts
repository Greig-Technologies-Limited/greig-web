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
          green:        "#3a9e3f",
          "green-mid":  "#2d7d31",
          "green-dim":  "#4caf50",
          "green-pale": "#e8f5e9",
        },
        charcoal: {
          950: "#0d0f0d",
          900: "#141614",
          800: "#1e211e",
          700: "#2a2e2a",
          600: "#3a3f3a",
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
        "grid-dark":    "linear-gradient(rgba(58,158,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,158,63,0.04) 1px, transparent 1px)",
        "radial-green": "radial-gradient(ellipse at center, rgba(58,158,63,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
