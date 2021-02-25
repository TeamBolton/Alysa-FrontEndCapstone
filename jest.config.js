module.exports = {
  setupFiles: ["./enzyme.config.js"],
  setupFilesAfterEnv: ['jest-enzyme','@testing-library/jest-dom'],
  snapShotSerializers: ["enzyme-to-json/serializer"],
  moduleFileExtensions: ["js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"],
  transform: {"\\.[jt]sx?$": "babel-jest"},
}