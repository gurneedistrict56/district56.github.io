/** @type { import('tailwindcss').Config } */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xs': '260px',
      'xs': '320px',
      ...defaultTheme.screens,
      'pointer': { 'raw': '(hover: hover)' },
    },
    extend: {
      fontFamily: {
        'brandon': ['BrandonGrotesqueWeb', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'd56-school-hero': 'url(\'/images/district-56-building-photo.jpg\')',
      },
      colors: {
        stone: { highlight: '#dbd9d5' },
        sky: { highlight: '#00aee9' },
        green: { highlight: '#5dea2f' },
        yellow: { highlight: '#eade2f' },
        orange: { highlight: '#faa41a' },
        fuchsia: { highlight: '#e42fea' },
        teal: { highlight: '#2feacb' },
        pink: { highlight: '#ea2f83' },
      },
    },
  },
  plugins: [],
};
