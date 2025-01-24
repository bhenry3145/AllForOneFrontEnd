/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'Inknut': ['InknutAntiqua-Regular']
      // },
      fontFamily: {
        'Mogra': ['../fonts/Mogra-Regular.ttf']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

