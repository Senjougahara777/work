
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
   "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Playwrite+IE+Guides"'], // Add your custom font
      },
    },
  },
  safelist: [
    "data-twe-carousel-active",
    "data-twe-carousel-item",
    "opacity-0",
    "opacity-100",
  ],
  plugins: [
    require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

