const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    'no-extra-semi': 'error',
    'no-console': isProd ? ['error', { allow: ['warn', 'error'] }] : 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-explicit-any': ['error', {
      ignoreRestArgs: true
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    curly: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'space-in-parens': ['error', 'never'],
  },
  ignorePatterns: ['.eslintrc.js'],
}
