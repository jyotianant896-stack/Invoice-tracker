/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#101C29",
          800: "#182838",
          700: "#22384D",
        },
        paper: "#FAF6EE",
        parchment: "#F1EADA",
        rust: {
          600: "#B4472D",
          500: "#C4572F",
        },
        forest: {
          700: "#2F4B3C",
          600: "#3D6350",
        },
        amber: {
          600: "#B4832E",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}

