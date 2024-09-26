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
        dark: '#AC4444',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['RubikMonoOne', 'sans-serif'],
        share: ['ShareTechMono', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        roboto_medium: ['Roboto Medium', 'sans-serif'],
        roboto_bold: ['Roboto Bold', 'sans-serif'],
        roboto_light: ['Roboto Light', 'sans-serif'],
        roboto_thin: ['Roboto Thin', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
