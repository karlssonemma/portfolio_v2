/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

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
      sans: ['Dm Sans', 'sans-serif'],
      mono: ['DM Mono', 'monospace'],
      serif: ['Newsreader', 'serif']
    },
    extend: {
      spacing: {
        'mobile': '2rem'
      },
      colors: {
        white: '#F8F8F8',
        black: '#161616',
        teal: '#008080',
        blue: '#103900',
        transparent: 'transparent',
        'bgLanding': '#7AA183',
        'bgAbout': '#EAB97B',
        'bgContact': '#E9DA9E',
        'bgProjects': '#9DBE8B',
      },
    },
  },
  plugins: [],
}
