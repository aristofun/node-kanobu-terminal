module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'quote-props': 0,
    'no-console': 0,
    "comma-dangle": ["error", "only-multiline"],
    'consistent-return': [0, {"treatUndefinedAsUnspecified": true }],
    
  },
};
