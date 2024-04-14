/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}

