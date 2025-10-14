/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#1a2a6c',     // deep blue
        secondary: '#162447',   // dark background
        accent: '#e43f5a',      // pink-red
      },
    },
  },
  plugins: [],
}
