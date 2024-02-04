const sourceDirectory = 'src';
const extensions = ['js', 'ts', 'tsx'];
const invalidFiles = ['index', 'main', '*.test', '*.stub', '*.mock'];
const invalidDirectories = ['__mocks__', '__stubs__', '__tests__'];

/** @returns {import("jest").Config} */
const getJestConfig = () => {
  return {
    collectCoverageFrom: [
      ...extensions.map(
        (extension) => `**/${sourceDirectory}/**/!(${invalidFiles.join('|')}).${extension}`,
      ),
      ...invalidDirectories.map((invalidDirectory) => `!**/${invalidDirectory}/**`),
    ],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    resetMocks: true,
    testEnvironment: 'jsdom',
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
      '^.+\\.(js|ts|tsx)$': [
        '@swc/jest',
        {
          jsc: {
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      ],
    },
  };
};

module.exports = {
  getJestConfig,
};
