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
        'Mogra': ['Mogra-Regular']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

