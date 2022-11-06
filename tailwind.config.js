const HEADER_HEIGHT = 64
const FOOTER_HEIGHT = 64

module.exports = {
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.tsx',
    './src/features/**/*.tsx',
  ],
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
      padding: {
        'mv-aspect-ratio': '66.7%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
