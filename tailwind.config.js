// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      glaston: ["Glaston", "serif"],
      minion: ["Minion", "sans-serif"],
      vremena: ["Vremena", "sans-serif"],
    },
    extend: {
      colors: {
        electricBlue: '#00B9F2',
        yellow: '#FFD800',
        brown: '#4E3524',
        lightPink: '#E3A8CE',
        mutedBlue: '#658CBB',
        hotPink: '#FFACFF',
        red: '#FF3A19',

      },
    }
  },
  variants: {},
  plugins: [],
}