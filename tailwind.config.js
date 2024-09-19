
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '10xl':'10rem',
        '12xl': '14rem'
      },

      screens:{
        'sm':'100px',
        'md':'300px'
      },
    },
  },

  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
          '.text-stroke': {
              '-webkit-text-stroke': '7px black',
          },
          '.text-stroke-white': {
              '-webkit-text-stroke': '7px white',
          },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
  }

  ],
}