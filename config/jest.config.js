export const collectCoverageFrom = [
  'src/**/*.{js,jsx}',
  '!src/**/*.test.{js,jsx}',
  '!src/*/RbGenerated*/*.{js,jsx}',
  '!src/index.js',
  '!src/*/*/Loadable.{js,jsx}'
];
export const coverageThreshold = {
  global: {
    statements: 98,
    branches: 91,
    functions: 98,
    lines: 98
  }
};
export const coverageReporters = ['json', 'lcov', 'text-summary'];
export const moduleDirectories = ['node_modules', 'src'];
export const transform = {
  '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
};
export const transformIgnorePatterns = ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'];
export const moduleNameMapper = {
  '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/jest-mocks/cssModule.js',
  '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest-mocks/image.js'
};
export const setupTestFrameworkScriptFile = '<rootDir>/config/test-setup.js';
export const testRegex = 'tests/.*\\.test\\.js$';
