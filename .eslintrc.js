module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'vue/no-multiple-template-root': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
  },
};
