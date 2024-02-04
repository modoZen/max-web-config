const { getEslintConfig } = require('../eslint');

describe('Eslint tests', () => {
  it('Should return eslint config values', () => {
    expect(getEslintConfig()).toMatchSnapshot();
  });
});
