module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/html-indent': ['error', 2, {
      'attribute': 2,
      'baseIndent': 1
    }],

    'vue/script-indent': ['error', 4, {
      'baseIndent': 1,
    }],

    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],

    'vue/padding-line-between-blocks': 'error',

    'semi': 'error',
    'camelcase': 'error',
    'quotes': ['error', 'single'],

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
};