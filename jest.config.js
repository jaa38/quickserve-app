module.exports = {
  preset: 'jest-expo',

  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|expo|@expo|expo-modules-core|@react-navigation)',
  ],
};