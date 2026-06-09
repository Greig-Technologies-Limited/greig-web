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
        // Greig Technologies palette
        navy: {
          950: "#020817",
          900: "#050f24",
          800: "#0a1f3d",
          700: "#0d2b54",
          600: "#103564",
        },
        signal: {
          DEFAULT: "#00b4d8",
          dim: "#0096c7",
          bright: "#48cae4",
        },
        gold: {
          DEFAULT: "#e8b84b",
          dim: "#c9a235",
        },
        steel: {
          DEFAULT: "#8fa3b8",
          light: "#c4d4e3",
          dark: "#4a6070",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "beacon": "beacon 2s ease-in-out infinite",
        "drift": "drift 8s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        beacon: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
      backgroundImage: {
        "grid-navy": "linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px)",
        "radial-signal": "radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
