/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cd13cd',
        grey: {
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e'
        }
      },
      fontFamily: {
        custom: ['Space Grotesk', 'ui-sans-serif', 'sans-serif']
      }
    },
    debugScreens: {
      position: ['top', 'right']
    }
  },
  plugins: [require('tailwindcss-debug-screens')]
}
