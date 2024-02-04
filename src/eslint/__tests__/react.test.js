const { getEslintReactConfig } = require('../react');

describe('Eslint tests', () => {
  it('Should return eslint config values', () => {
    expect(getEslintReactConfig()).toMatchSnapshot();
  });
});
