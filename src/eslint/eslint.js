const eslintConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    'import/prefer-default-export': 0,
    curly: 2,
    'no-console': 2,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-empty-function': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': [2, { allowTernary: true }],
    'dot-notation': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        classes: false,
        variables: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [2, { allowExpressions: true }],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'default-case': 0,
    camelcase: [2, { ignoreDestructuring: true, properties: 'never' }],
  },
  overrides: [
    {
      files: ['*.stub.ts', '*.mock.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0,
        'no-underscore-dangle': 0,
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  env: { browser: true, es2021: true, jest: true },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['src'],
      },
    },
  },
};

const getEslintConfig = () => {
  return eslintConfig;
};

module.exports = {
  getEslintConfig,
};
