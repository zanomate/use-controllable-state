module.exports = {
  verbose: true,
  // testURL: 'http://localhost/tracking/',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/testsAfterEnv.setup.js'],
  setupFiles: ['<rootDir>/tests/tests.setup.js'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  snapshotSerializers: [],
  timers: 'fake'
}
