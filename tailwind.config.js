module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '64px 1fr 56px',
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
