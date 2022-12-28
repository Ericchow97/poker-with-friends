/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '1/8': '12.5%',
      },
      aspectRatio: {
        'poker': '16 / 7',
      },
    },
  },
  plugins: [],
}
