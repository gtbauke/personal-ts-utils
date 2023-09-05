module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "import",
    "node",
    "eslint-plugin-import-helpers",
    "unicorn",
    "vitest",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",

    "unicorn/custom-error-definition": "warn",
    "unicorn/no-unused-properties": "error",

    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",

    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "/^node:/",
          "module",
          "/^~/",
          ["parent", "sibling", "index"]
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ],

    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",

    "block-scoped-var": "error",
    "camelcase": "error",
    "class-methods-use-this": "error",
    "consistent-return": "error",
    "default-case": "error",
    "default-case-last": "warn",
    "default-param-last": "warn",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "new-cap": "error",
    "no-caller": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-labels": "error",

    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
