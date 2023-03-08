/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['General Sans', 'sans-serif']
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
