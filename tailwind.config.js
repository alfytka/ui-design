/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
        space: ['Space Grotesk', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

