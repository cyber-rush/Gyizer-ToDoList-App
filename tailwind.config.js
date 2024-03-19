/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#FF8303',
        'body-gray': '#1F1E1B'
      }
    },
  },
  plugins: [],
}