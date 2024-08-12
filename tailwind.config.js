/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      xl: { max: "1280px" },
      sm: { max: "600px" },
      lg: { max: "1024px" },
      navsm: { max: "900px" },
    },
    extend: {},
  },
  plugins: [],
}

