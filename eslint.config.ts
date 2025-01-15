import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import {
  plugin as tsEslintPlugin,
  parser as tsEslintParser,
} from "typescript-eslint";
import type { Linter } from "eslint";

const includedFiles = ["api/src/**/*.ts", "api/src/**/*.js", ""];

export default [
  {
    plugins: {
      "ts-eslint": tsEslintPlugin,
    },
    languageOptions: {
      parser: tsEslintParser,
    },
  },
  // Recommended TS config
  tseslint.configs.eslintRecommended,
  // // Prettier Plugins
  eslintConfigPrettier,
  // Defined rules
  {
    files: includedFiles,
    languageOptions: {
      parser: tsEslintParser,
    },
    rules: {
      "ts-eslint/no-unused-vars": ["error", { caughtErrors: "none" }],
    },
  },
] satisfies Linter.Config[];
