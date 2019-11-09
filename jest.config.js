module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|scss|svg)$': '<rootDir>/tests/jest/stub.js',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/libs/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest/config.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: '<rootDir>/test-results/jest',
        outputName: 'results.xml',
      },
    ],
  ],
}
