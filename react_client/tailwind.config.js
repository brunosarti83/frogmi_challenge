/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'sonsie' : ['Sonsie One'],
        'vietnam': ['Be Vietnam Pro', 'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

