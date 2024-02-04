const { getPrettierConfig } = require('../prettier');

describe('Prettier test', () => {
  it('Should return prettier config values', () => {
    expect(getPrettierConfig()).toMatchSnapshot();
  });
});
