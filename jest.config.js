module.exports = {
  preset: "react-native",
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|@react-native/js-polyfills)",
  ],
};
