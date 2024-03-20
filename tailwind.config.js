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
        'body-orange': '#A35709',
        'body-gray': '#1F1E1B',
        'dark-gray': '#1B1A17'
      }
    },
  },
  plugins: [],
}