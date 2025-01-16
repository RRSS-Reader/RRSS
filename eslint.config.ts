import eslintConfigPrettier from "eslint-config-prettier";
import tsEslint from "typescript-eslint";
import { parser as tsEslintParser } from "typescript-eslint";
import type { Linter } from "eslint";
import { includeIgnoreFile } from "@eslint/compat";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const includedFiles = ["api/src/**/*.ts", "shared/**/*.ts"];

export default [
  // Global ignores
  // Check out https://eslint.org/docs/latest/use/configure/ignore#ignoring-files for more info
  { ignores: ["api/dist/"] },

  // Include .gitignore file
  includeIgnoreFile(gitignorePath),

  // Plugin settings
  {
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
    },
    languageOptions: {
      parser: tsEslintParser,
      // parserOptions: {
      //   projectService: true,
      //   tsconfigRootDir: import.meta.dirname,
      // },
    },
  },

  // Recommended TS config
  ...tsEslint.configs.recommended,
  // // Prettier Plugins
  eslintConfigPrettier,
  // Defined rules
  {
    files: includedFiles,
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "none" }],
      // "@typescript-eslint/consistent-type-exports": "error",
      // "@typescript-eslint/consistent-type-imports": "error",
    },
  },
] satisfies Linter.Config[];
