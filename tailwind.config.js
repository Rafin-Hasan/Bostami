/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center:true,
      padding:'61px'
    },
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif'],
      'slab'   : ["Roboto Slab",' serif']

    }
  },
  plugins: [],
  darkMode: "class", 
}