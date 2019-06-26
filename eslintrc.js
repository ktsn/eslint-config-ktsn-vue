module.exports = {
  extends: ['ktsn-typescript', 'plugin:vue/recommended', 'prettier/vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          // vue core
          'keep-alive',
          'transition',
          'transition-group',
          'component',
          'slot',

          // vue-router
          'router-link',
          'router-view'
        ]
      }
    ]
  }
}
