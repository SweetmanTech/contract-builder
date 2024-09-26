// eslint-disable-next-line
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
        light: '#E0E0E0',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['RubikMonoOne', 'sans-serif'],
        share: ['ShareTechMono', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
