module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|scss|svg)$': '<rootDir>/tests/jest/stub.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest/config.js'],
}
