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
        'primary-navy': '#1e293b',
        'primary-orange': '#f59e0b',
        'dark-navy': '#0f172a',
        'mid-navy': '#334155',
        'text-light': '#64748b',
        'text-dark': '#1e293b',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '15px',
        'card-lg': '20px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-navy-orange': 'linear-gradient(135deg, #1e293b 0%, #f59e0b 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-orange': 'linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
