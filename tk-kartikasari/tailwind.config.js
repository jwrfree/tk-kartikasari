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
          DEFAULT: "#10b981",
          600: "#059669"
        },
        secondary: {
          DEFAULT: "#facc15"
        },
        text: {
          DEFAULT: "#1f2937",
          muted: "#4b5563"
        },
        surface: "#ffffff",
        border: "#e5e7eb"
      },
      borderRadius: {
        xl: "16px"
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
