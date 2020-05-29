module.exports = {
  bail: true,
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-fifteen',
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.svg$': '<rootDir>/config/jest.svg-loader.js',
  },
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '!<rootDir>/layouts/**/*.vue',
    '!<rootDir>/pages/**/*.vue',
    '!<rootDir>/store/**/*.js',
    '!<rootDir>/helpers/*.js',
    '!**/*.mock.js',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@babel/runtime)',
  ],
  coverageReporters: [
    'html',
  ],
};
