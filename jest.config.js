/* eslint-disable global-require */
const jestConfig = require('./src').getJestConfig();

module.exports = {
  ...jestConfig,
  setupFiles: undefined,
  setupFilesAfterEnv: undefined,
};
