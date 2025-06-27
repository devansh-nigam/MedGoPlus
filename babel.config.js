module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from', // Updated plugin name
    'react-native-reanimated/plugin', // Make sure this is last
  ],
};
