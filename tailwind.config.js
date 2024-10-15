/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/public/**/*.{html,js}",
    "./**/src/**/*.{vue,js,ts,jsx,tsx}",
    "./**/src/components/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'proj-15-green-600': 'hsl(169, 82%, 27%)',
      }
    },
  },
  plugins: [],
}

