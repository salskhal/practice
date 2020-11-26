module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1ba1ad',
       }),
      backgroundImage: {
        "custom": "url('/public/images/bg-pattern-card.svg')",
        "up": "url('/public/images/bg-pattern-top.svg')",
        "down": "url('/public/images/bg-pattern-bottom')",
      },
      width:{
        "mi": "90%",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
