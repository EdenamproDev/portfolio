import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0F",
        surface: "#12121A",
        surface2: "#161622",
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          deep: "#6D28D9",
        },
        ink: {
          DEFAULT: "#F5F5F7",
          muted: "#A1A1AA",
          dim: "#6B6B76",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "radial-accent":
          "radial-gradient(ellipse at top right, rgba(139,92,246,0.18), transparent 60%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(139,92,246,0.35)",
        "glow-sm": "0 0 30px -8px rgba(139,92,246,0.25)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        breathe: "breathe 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        breathe: {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
