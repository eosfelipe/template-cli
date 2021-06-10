module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
