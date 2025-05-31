import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Ignore patterns
  {
    ignores: ["dist/**", "node_modules/**", "*.min.js", "build/**"],
  },
  
  // Base JavaScript configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  
  // TypeScript configuration - use the recommended config directly
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      ...config.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  })),
  
  // Custom rules and relaxed settings
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      quotes: [
        "error",
        "double",
        { avoidEscape: true },
      ],
      // Relax some strict rules for better development experience
      "no-useless-escape": "warn",
      
      // Keep these as errors for important issues
      "no-redeclare": "error",
      "no-undef": "error",
      "no-constant-binary-expression": "error",
      
    },
  },
  
  // TypeScript specific rules
  {
    files: ["**/*.{ts,mts,cts}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Change to warning instead of error
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-require-imports": "warn",
    },
  },
  
  // Test files - even more relaxed rules
  {
    files: ["test/**/*.{ts,js}", "**/*.test.{ts,js}", "**/*.spec.{ts,js}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-useless-escape": "off",
    },
  },
];
