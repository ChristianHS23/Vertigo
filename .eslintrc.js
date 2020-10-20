module.exports = {
  env: {
    'react-native/react-native': true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react-native/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 8,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'eslint-plugin-prettier', 'react-native'],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'react/forbid-prop-types': 0,
    'react/style-prop-object': 0,
    'max-depth': [
      'warn',
      {
        max: 4,
      },
    ],
    'max-len': [1, 120],
    'react/prefer-stateless-function': 0,
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'all',
      },
    ],
    'no-shadow': [
      'off',
      {
        allow: ['props'],
      },
    ],
    'no-use-before-define': 0,
    'no-param-reassign': [
      'warn',
      {
        props: false,
      },
    ],
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_isMounted'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        tabWidth: 2,
        semi: true,
        arrowParens: 'always',
        bracketSpacing: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'no-undef': ['error'],
    'no-console': ['off'],
    'react/prop-types': ['warn'],
    'react-native/no-unused-styles': ['warn'],
    'react-native/split-platform-components': ['warn'],
    'react-native/no-single-element-style-arrays': 0,
    'react-native/no-inline-styles': ['warn'],
    'react-native/no-color-literals': ['off'],
  },
};
