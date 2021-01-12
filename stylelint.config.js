module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-prettier/recommended', 'stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
  },
}
