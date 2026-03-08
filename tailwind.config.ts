import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "itb-navy": "#003366",
        "itb-navy-light": "#004a99",
        "itb-navy-dark": "#002244",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        glass: "12px",
        "glass-xl": "24px",
      },
      backgroundColor: {
        "glass-white": "rgba(255, 255, 255, 0.40)",
        "glass-white-hover": "rgba(255, 255, 255, 0.15)",
      },
      borderColor: {
        "glass-border": "rgba(255, 255, 255, 0.20)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 51, 102, 0.08)",
        "glass-lg": "0 16px 48px rgba(0, 51, 102, 0.12)",
        "glass-refract":
          "0 8px 32px rgba(0, 51, 102, 0.08), inset 0 1px 0 rgba(255,255,255,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float-slow": "floatSlow 20s ease-in-out infinite",
        "float-medium": "floatMedium 15s ease-in-out infinite",
        "float-reverse": "floatReverse 18s ease-in-out infinite",
        "float-diagonal": "floatDiagonal 22s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -50px) scale(1.06)" },
          "66%": { transform: "translate(-30px, 25px) scale(0.94)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-50px, -40px) scale(1.08)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, 40px) scale(1.04)" },
          "75%": { transform: "translate(-40px, -25px) scale(0.96)" },
        },
        floatDiagonal: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%": { transform: "translate(35px, -35px) scale(1.05)" },
          "80%": { transform: "translate(-25px, 20px) scale(0.97)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
