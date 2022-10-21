/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      garamond: ["'EB Garamond', serif"],
      openSans: ["'Open Sans', sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          main: '#A9B001',
        },
        secondary: {
          main: '#F0D54E',
          dark: '#D6B409',
          light: '#FBF3CE',
        },
        tertiary: {
          main: '#333333',
        },
        'deus-dark-gray': '#C7C7C7',
        'deus-light-gray': '#E6E6E6',
      },
    },
  },
  plugins: [],
};
