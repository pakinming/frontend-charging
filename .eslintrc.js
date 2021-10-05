module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    "vetur"
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
