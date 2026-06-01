import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#1e293b",
        "primary-blue": "#2563eb",
        "primary-orange": "#f59e0b",
        "primary-orange-hover": "#d97706",
        "dark-navy": "#0f172a",
        "mid-navy": "#334155",
        "text-dark": "#1e293b",
        "text-body": "#475569",
        "text-light": "#64748b",
        "text-muted": "#64748b",
        "bg-light": "#f8fafc",
        "bg-soft": "#f1f5f9",
        border: "#e5e7eb",
        "border-strong": "#cbd5e1",
        navy: "#1e293b",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
        "card-lg": "1.25rem",
        "card-xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        soft: "0 10px 35px rgba(15, 23, 42, 0.05)",
        menu: "0 10px 40px rgba(15, 23, 42, 0.08)",
        modal: "0 25px 50px -12px rgba(15, 23, 42, 0.15)",
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(to bottom right, #0f172a, #1e293b)",
        "gradient-navy-soft": "linear-gradient(to bottom right, #1e293b, #334155)",
      },
      animation: {
        "fade-in": "fadeIn 400ms ease-out both",
        "fade-in-up": "fadeInUp 500ms ease-out both",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;