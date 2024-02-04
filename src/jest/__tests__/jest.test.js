const { getJestConfig } = require('../jest');

describe('Jest tests', () => {
  it('Should return prettier config values', () => {
    expect(getJestConfig()).toMatchSnapshot();
  });
});
