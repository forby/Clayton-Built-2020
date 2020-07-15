const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'acumin-pro',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'ch-blue': '#0075C9',
        'ch-brands-grey': '#F3F5F7',
        'ch-black': '#25292D',
      },
    },
  },
  variants: {},
  plugins: [],
}
