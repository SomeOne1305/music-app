/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        first: "linear-gradient(to right,#0ea5e9,#6366f1)",
        // second: "linear-gradient(to right, #673ab7, #512da8)",
        second: "linear-gradient(to top,#000328,#00458e )",
        instagram:"linear-gradient(-45deg,#feda75,#fa7e1e ,#d62976,#962fbf,#4f5bd5)"
      },
      boxShadow: {
        h: "0 0 3px #ffffff",
        l: "0 0 3px rgba(0,0,0,0.75)",
      },
    },
    colors: {
      inDark: "rgb(9, 18, 39)",
      light: "#fefefe",
      white: "#ffffff",
      black: "#000000",
      primary: "#013672",
      prim: "#0ea5e9",
      secondary: "#6366f1",
      pinkWarning: "#db2777",
      transparent: "transparent",
      currentColor: "currentColor",
      gray: "#343333",
      "gray-400": "#94a3b8",
      "gray-300": "#cbd5e1",
      "gray-200": "#e2e8f0",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        "3xl": "1400px",
        "2xl": "1200px",
        xl: "1200px",
      },
    },
    screens: {
      "3xl": "1920px",
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "400px",
    },
  },
  darkMode:"class",
  plugins: [],
}

