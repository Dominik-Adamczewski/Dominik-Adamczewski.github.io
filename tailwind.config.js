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
        'proj-15-green-700': 'hsl(169, 83%, 16%);',
        'proj-15-green-600': 'hsl(169, 82%, 27%)',
        'proj-15-green-400': 'hsla(169, 82%, 40%, 0.7)',
        'error': '#ff0000',
        'proj-16-strong-cyan': 'hsl(172, 67%, 45%)',
        'proj-16-very-dark-cyan': 'hsl(183, 100%, 15%)',
        'proj-16-grayish-cyan': 'hsl(184, 14%, 56%)',
        'proj-16-light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'proj-16-very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
      }
    },
  },
  plugins: [],
}
