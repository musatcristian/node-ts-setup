module.exports = {
  bail: 1,
  collectCoverageFrom: [
    "<rootDir>/src/**",
    "!node_modules",
    "!**/node_modules/**",
    "!**/*.test*",
  ],
  coverageDirectory: "./__coverage__",
  displayName: "NodeJs Github OAuth",
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest",
  prettierPath: "./node_modules/prettier",
  rootDir: "./",
  roots: ["./tests"],
  testEnvironment: "node",
  testRegex: "^.*test\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
};
