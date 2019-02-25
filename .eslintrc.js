module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'standard'
  ],
  // add your custom rules here
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-before-function-paren": "error",
    "space-before-blocks": "error",
    "spaced-comment": ["error", "always"],
    "no-var": "error",
    "vue/require-default-prop": "off",
    "vue/attributes-order": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "space-before-function-paren": ["error", "always"],
    "no-console": 1,
    "import/default": "off",
    "vue/html-self-closing": "off"
  }
}
