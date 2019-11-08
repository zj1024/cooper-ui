module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/libs/config/CSSStub.js',
    '^.+\\.svg$': '<rootDir>/libs/config/SVGStub.js',
  },
  collectCoverage: true,
  collectCoverageFrom: ['./libs/**/*.{js,jsx,ts,tsx}'],
}
