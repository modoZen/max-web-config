const lintStagedConfig = {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'src/**/*.+(css|scss|sass)': ['prettier --write'],
};

const getLintStagedConfig = () => {
  return lintStagedConfig;
};

module.exports = {
  getLintStagedConfig,
};
