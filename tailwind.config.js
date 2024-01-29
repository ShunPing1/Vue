/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '520px',
      'md': '920px',
      'lg': '1280px',
    },
    colors: {
      'main-deep': '#800080',
      ...colors,
    },
    fontFamily: {
      'big':['Rubik+Doodle+Shadow'],
    },

    
  },
  plugins: [],
}

