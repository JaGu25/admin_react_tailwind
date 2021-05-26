module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Boogaloo'],
        roboto: ['Roboto']
      },
      colors :{
        rose: {
          DEFAULT: "#E00391"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
//