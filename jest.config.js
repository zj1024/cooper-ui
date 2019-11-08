module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/libs/config/CSSStub.js',
  },
}
