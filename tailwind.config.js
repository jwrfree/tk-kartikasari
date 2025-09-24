/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff3ec",
          100: "#ffe0d2",
          200: "#ffc1ac",
          400: "#ff9471",
          500: "#ff7b54",
          600: "#ff6236",
          700: "#ff4e1c",
          DEFAULT: "#ff7b54"
        },
        secondary: {
          50: "#f6f5ff",
          100: "#e4e2ff",
          200: "#c6c4ff",
          500: "#605dff",
          600: "#514bf5",
          DEFAULT: "#605dff"
        },
        accent: {
          DEFAULT: "#ffc857"
        },
        text: {
          DEFAULT: "#1b1c1f",
          muted: "#5b616e"
        },
        surface: "#ffffff",
        surfaceAlt: "#f5f7fb",
        border: "#e6e8f4"
      },
      fontFamily: {
        sans: ["Satoshi Variable", "system-ui", "sans-serif"]
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.5rem"
      },
      boxShadow: {
        card: "0 10px 40px rgba(96,93,255,0.07)",
        floating: "0 12px 50px rgba(255,123,84,0.2)",
        soft: "0 8px 30px rgba(15,23,42,0.05)"
      },
      backgroundImage: {
        "grid-dots": "radial-gradient(circle at 1px 1px, rgba(96,93,255,0.15) 1px, transparent 0)",
        "hero-gradient": "linear-gradient(135deg, rgba(255,123,84,0.16) 0%, rgba(96,93,255,0.14) 40%, rgba(255,200,87,0.2) 100%)"
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
