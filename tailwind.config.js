const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        "./src/**/*.js"
    ],
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
                'ch-blue-light': '#179EFF',
                'ch-brands-grey': '#F3F5F7',
                'ch-black': '#25292D',
                'ch-bedtime': '#06292F',
                'ch-grey-4': '#CACCCF',
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
                'hero-small': '37.5rem',
                '192': '48rem',
                'hero-large': '54.5rem',
                '256': '64rem',
                '384': '96rem',
                '512': '128rem',
            },
        },
    },
    variants: {},
    plugins: [],
}
