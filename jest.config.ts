export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ]
};