/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: 'var(--font-quicksand)',
      },

      colors: {
        'malachite': {
          '50': '#effef2',
          '100': '#dbfde3',
          '200': '#b9f9c7',
          '300': '#82f39e',
          '400': '#44e46b',
          '500': '#1bcc47',
          '600': '#11b039',
          '700': '#11842f',
          '800': '#136829',
          '900': '#115624',
          '950': '#033011',
        },
      },
      
    },
  },
  plugins: [],
}
