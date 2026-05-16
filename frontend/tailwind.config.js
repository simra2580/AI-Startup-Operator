/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          900: "#4c1d95",
        },
        neon: {
          purple: "#a78bfa",
          blue: "#60a5fa",
          cyan: "#06b6d4",
          gradient: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)",
        },
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glow": "0 0 20px rgba(139, 92, 246, 0.4)",
        "neon": "0 0 30px rgba(139, 92, 246, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" },
          "100%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      fontFamily: {
        "sans": ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};