/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff003ba6', // Replace with your primary color
        },
        secondary: {
          DEFAULT: '#5CD595', // Replace with your secondary color
        },
        tertiary: {
          DEFAULT: '#5CDB95', // Replace with your tertiary color
        },
      },
    },
  },
  plugins: [],
}

