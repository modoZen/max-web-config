const { getEslintConfig } = require('./eslint');

const eslintConfig = getEslintConfig();

const eslintReactConfig = {
  ...eslintConfig,
  plugins: [...eslintConfig.plugins, 'react', 'react-hooks'],
  rules: {
    ...eslintConfig.rules,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      1,
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 0,
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
};

const getEslintReactConfig = () => {
  return eslintReactConfig;
};

module.exports = {
  getEslintReactConfig,
};
