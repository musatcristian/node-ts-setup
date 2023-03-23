module.exports = {
  bail: 1,
  cacheDirectory: "/tmp/jest_rt",
  collectCoverageFrom: [
    "<rootDir>/src/**",
    "!node_modules",
    "!**/node_modules/**",
    "!**/*.test*",
  ],
  coverageDirectory: "./__coverage__",
  displayName: "GraphQL server with local dev env",
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest",
  prettierPath: "./node_modules/prettier",
  rootDir: "./",
  roots: ["./tests"],
  testEnvironment: "node",
  testRegex: "^.*test\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
};
