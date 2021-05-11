module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  // Use full depth (<div>, <span> etc)for vuetify components (not v-dialog level)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'vuetify/lib(.*)': '<rootDir>/node_modules/vuetify/es5$1'
  },
  modulePaths: [
    '<rootDir>/src'
  ],
  transformIgnorePatterns: [
    // Include vuetify
    '<rootDir>/node_modules/(?!(vuetify)/)'
  ],
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/tests/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  coverageReporters: ['text'],
  reporters: [
    'default',
    ['jest-junit', {
      suiteName: 'Jest Unit tests',
      outputName: 'tests/results/unit.test.xml'
    }
    ]
  ],
  testMatch: [
    '**/tests/unit/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ]
}
