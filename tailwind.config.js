/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': {'max':'484px'},
        'custom2':{'max':'625px'}
      },
    },
  },
  plugins: [],
}