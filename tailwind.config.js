/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        appGreen: '#239D6B',
        appRed: '#EF2845',
        appYellow: '#FFD012',
        appBlack: '#000000',
        appSubtitle: '#666666',
        appSubtitle2: '#999999'
      }
    },
  },
  plugins: [],
};
