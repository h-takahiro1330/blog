const HEADER_HEIGHT = 64
const FOOTER_HEIGHT = 64

module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        layout: `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`,
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      height: {
        header: `${HEADER_HEIGHT}px`,
        footer: `${FOOTER_HEIGHT}px`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
