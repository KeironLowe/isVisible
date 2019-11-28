module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      "plugin:@typescript-eslint/eslint-recommended",
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      sourceType: 'module',
    },
    ignorePatterns: [
      "webpack.mix.js",
      "webpack.config.js",
      "tailwind.config.js"
    ],
    rules: {
      curly: 1,
      eqeqeq: 2,
      'dot-notation': 1,
      'default-param-last': 1,
      'max-classes-per-file': ['error', 1],
      'no-constructor-return': 2,
      'no-eval': 2,
      'no-floating-decimal': 1,
      'no-invalid-this': 1,
      'no-useless-concat': 1,
      'no-useless-return': 1,
      'wrap-iife': 1,
    }
}
