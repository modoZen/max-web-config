/* eslint-disable global-require */
module.exports = {
  ...require('./prettier'),
  ...require('./eslint'),
  ...require('./jest'),
  ...require('./lint-staged'),
};
