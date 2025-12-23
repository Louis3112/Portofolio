/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-red': '#D30000',
        'neo-black': '#000000',
        'neo-white': '#EEEEEE',
        'neo-gray': '#D9D9D9',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        mono: ['"Consolas"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-hover': '2px 2px 0px 0px #000000',
      },
      fontSize: {
        'display-lg': ['clamp(2.5rem, 5vw + 1rem, 6rem)', { lineHeight: '1' }],
        'display-md': ['clamp(1.5rem, 3vw + 1rem, 3.5rem)', { lineHeight: '1.2' }],
        'body-fluid': ['clamp(1rem, 1vw + 0.5rem, 1.25rem)', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}