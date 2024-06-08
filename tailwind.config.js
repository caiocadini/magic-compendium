/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
        'logo': ['Berkshire Swash']
      },
      brightness: {
        40: '.40',
        175: '1.75',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

