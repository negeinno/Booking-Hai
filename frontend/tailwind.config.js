/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'brand-yellow': '#FFD500',
        'brand-blue': '#2563EB',
        'brand-pink': '#EC4899',
        'brand-green': '#22C55E',
      }
    },
  },
  plugins: [],
}
