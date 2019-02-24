module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
  },
}
