/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/public/**/*.{html,js}",
    "./**/src/**/*.{vue,js,ts,jsx,tsx}",
    "./**/src/components/**/*.vue",
  ],
  theme: {
    extend: {
      width: {
        '30p': '30%',
      },
      boxShadow: {
        'proj-18': '0 6px 12px -2px rgb(0 0 0 / 0.05), 0 10px 10px -14px rgb(0 0 0 / 0.05)',
      },
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
        'proj-17-red': 'hsl(14, 86%, 42%)',
        'proj-17-green': 'hsl(159, 69%, 38%)',
        'proj-17-rose-50': 'hsl(20, 50%, 98%)',
        'proj-17-rose-100': 'hsl(13, 31%, 94%)',
        'proj-17-rose-300': 'hsl(14, 25%, 72%)',
        'proj-17-rose-400': 'hsl(7, 20%, 60%)',
        'proj-17-rose-500': 'hsl(12, 20%, 44%)',
        'proj-17-rose-900': 'hsl(14, 65%, 9%)',
        'proj-18-desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
        'proj-18-light-grayish-cyan-bg': 'hsl(180, 52%, 96%)',
        'proj-18-light-grayish-cyan-filter': 'hsl(180, 31%, 95%)',
        'proj-18-dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'proj-18-very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
        'proj-19-neutral-0': 'hsl(0, 0%, 100%)',
        'proj-19-neutral-300': 'hsl(252, 6%, 83%)',
        'proj-19-neutral-500': 'hsl(245, 15%, 58%)',
        'proj-19-neutral-700': 'hsl(245, 19%, 35%)',
        'proj-19-neutral-900': 'hsl(248, 70%, 10%)',
        'proj-19-orange-500': 'hsl(7, 88%, 67%)',
        'proj-19-orange-700': 'hsl(7, 71%, 60%)',
        'proj-19-gradient-red': 'hsl(7, 86%, 67%)',
        'proj-19-gradient-white': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
  safelist: [
    "bg-[url('../18-static-job-listings-vue/public/images/bg-header-mobile.svg')]",
    "bg-[url('../18-static-job-listings-vue/public/images/bg-header-desktop.svg')]", 
  ],
}
