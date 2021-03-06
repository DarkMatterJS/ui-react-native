module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  env: { es6: true, mocha: true, jest: true },
  parser: 'babel-eslint',
  plugins: ['standard', 'react', 'react-native', 'flowtype', 'prettier', 'import'],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'import/no-named-as-default-member': [0],
    'react/prop-types': [0],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'flow',
        semi: false,
        printWidth: 100
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },

  globals: {
    __DEV__: true
  }
}
