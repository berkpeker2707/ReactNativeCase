module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|@react-native/js-polyfills)",
  ],
};
