const sourceDirectory = 'src';
const extensions = ['js', 'ts', 'tsx'];
const invalidFiles = ['index', 'main', '*.test', '*.stub', '*.mock'];
const invalidDirectories = ['__mocks__', '__stubs__', '__tests__'];

const defaultConfiguration = {
  collectCoverageFrom: [
    ...extensions.map(
      (extension) => `**/${sourceDirectory}/**/!(${invalidFiles.join('|')}).${extension}`,
    ),
    ...invalidDirectories.map((invalidDirectory) => `!**/${invalidDirectory}/**`),
  ],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
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

/**
 * @returns {import("jest").Config}
 * */
const getJestConfig = (config = {}) => {
  const configuration = { ...defaultConfiguration, ...config };

  const {
    coverageThreshold,
    collectCoverageFrom,
    moduleNameMapper,
    setupFiles,
    setupFilesAfterEnv,
    transform,
    ...rest
  } = configuration;

  return {
    collectCoverageFrom,
    coverageThreshold,
    resetMocks: true,
    testEnvironment: 'jsdom',
    setupFiles,
    setupFilesAfterEnv,
    moduleNameMapper,
    transform,
    ...rest,
  };
};

module.exports = {
  getJestConfig,
};
