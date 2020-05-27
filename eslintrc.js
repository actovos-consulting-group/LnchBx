"use strict";

// By default eslint ignore it's own config files, so:
// If making changes, lint with
// npx eslint .eslintrc.js --ignore-pattern '!.eslintrc.js'
module.exports = {
  extends: "@actovos-consulting-group/eslint-config-acg",
  plugins: ["react-hooks"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: "2019",
  },
  rules: {
    "no-warning-comments": "warn",
    "no-use-before-define": ["error", { functions: true }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": ["warn", { skipUndeclared: true }],
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    camelcase: "off",
  },
};
