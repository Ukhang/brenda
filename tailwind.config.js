/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '100%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        'waving-astronut': 'wave 7s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
