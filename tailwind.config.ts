// eslint-disable-next-line
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      grey: {
        default: colors.grey,
        dark: '#0E0E0E',
      },
      white: {
        DEFAULT: '#ffffff',
        light: '#E0E0E0',
      },
      link: {
        DEFAULT: '#3167B4',
      },
      danger: {
        DEFAULT: '#E18583',
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
