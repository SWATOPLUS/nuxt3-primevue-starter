module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    // Pages and layouts are required to have a single root element
    'vue/no-multiple-template-root': 'error',
    semi: 'off',
    '@typescript-eslint/semi': 'warn',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/no-unused-vars': ['off'],
  },
};
