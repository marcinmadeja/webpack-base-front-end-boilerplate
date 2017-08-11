module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    "no-console": 0,
    "no-unused-vars": 1,
    "no-plusplus": 0,
    "prefer-const": 1,
    "arrow-parens": 0,
    "no-self-compare": 1,
    "prefer-arrow-callback": 0,
    "no-cond-assign" : 1,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "no-trailing-spaces": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": 1,
    "no-restricted-syntax" : 0,
    "max-len": 1,
    "no-continue": 0,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    'codeFrame': false
  },
  globals: {
    '$': true,
    'jQuery': true,
  },
};