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
      spacing: {
        4.5: '18px',
        9.5: '38px',
        10.5: '42px',
        16.5: '68px',
        18: '74px',
        19: '78px',

      },
      fontSize: {
        15: '15px'
      },
      maxWidth: {
        258: '258px',
        285: '285px',
        395: '395px',
        543: '543px'
      },
      height: {
        90: '90vh'
      }
    }

  },
  variants: {},
  plugins: [],
}