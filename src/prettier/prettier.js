/**@type {import("prettier").Config} */
const prettierConfig = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'auto',
};

const getPrettierConfig = () => {
  return prettierConfig;
};

module.exports = {
  getPrettierConfig,
};
