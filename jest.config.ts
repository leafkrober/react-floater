module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/types/*.*'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  setupFilesAfterEnv: ['<rootDir>/test/__setup__/setupTests.ts'],
  snapshotSerializers: ['jest-serializer-html'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  testMatch: null,
  testRegex: '/test/.*?\\.(test|spec)\\.tsx?$',
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'test/tsconfig.json',
        diagnostics: {
          ignoreCodes: ['TS151001'],
        },
      },
    ],
  },
  verbose: false,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
