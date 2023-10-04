/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gray: '#C4C4C4',
        green: '#A6F09A'
      }
    },
  },
  plugins: [],
}