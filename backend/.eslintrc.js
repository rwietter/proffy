module.exports = {
  env: {
    browser: true,
    // es2020: true,
    es6: true,
    // jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
    // 'airbnb',
    // 'airbnb/hooks',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'import',
    // 'react-hooks',
    // 'jest',
    // 'prettier',
  ],
  parserOptions: {
    ecmaVersion: 11,
    // emcaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^react/',
          `/^
          (assert
          |async_hooks
          |buffer
          |child_process
          |cluster
          |console
          |constants
          |crypto
          |dgram
          |dns
          |domain
          |events
          |fs
          |http
          |http2
          |https
          |inspector
          |module
          |net
          |os
          |path
          |perf_hooks
          |process
          |punycode
          |querystring
          |readline
          |repl
          |stream
          |string_decoder
          |timers
          |tls
          |trace_events
          |tty
          |url
          |util
          |v8
          |vm
          |zli
          )/`,
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
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
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    complexity: ['error', {
      max: 2,
    }],
    treatUndefinedAsUnspecified: 'off',
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'typescript-eslint/interface-name-prefix': 'off',
    'typescript-eslint/no-vars-requires': 'off',
    'typescript-eslint/camelcase': 'off',
    'typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/no-dynamic-require': 'off',
    'no-param-reassing': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    },
  },
};
