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
        // Greig brand palette — derived from logo
        greig: {
          green:       "#3a9e3f",   // logo primary green
          "green-mid": "#2d7d31",   // darker green for hover/accents
          "green-dim": "#4caf50",   // lighter green for glows
          "green-pale":"#e8f5e9",   // very light green tint
        },
        // Neutral greys — professional, clean
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
          50:      "#f4f7f4",
          100:     "#e8ede9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow":  "spin 20s linear infinite",
        "drift":      "drift 8s ease-in-out infinite",
        "globe-spin": "spin 30s linear infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-dark": "linear-gradient(rgba(58,158,63,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,158,63,0.04) 1px, transparent 1px)",
        "radial-green": "radial-gradient(ellipse at center, rgba(58,158,63,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
