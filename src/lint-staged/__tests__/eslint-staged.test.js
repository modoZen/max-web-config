const { getLintStagedConfig } = require('../eslint-staged');

describe('Lint Staged tests', () => {
  it('Should return lint staged config values', () => {
    expect(getLintStagedConfig()).toMatchSnapshot();
  });
});
