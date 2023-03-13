/** @type {import('tailwindcss').Config} */

const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './app/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}')
 
    // Or if using `src` directory:
    // './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['General Sans', 'sans-serif'],
      mono: ['DM Mono', 'monospace']
    },
    colors: {
      white: '#F8F8F8',
      black: '#161616',
      teal: '#008080',
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}
