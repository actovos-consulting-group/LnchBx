

const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  extends: "@actovos-consulting-group/eslint-config-acg",
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "script",
  },
  rules: {
    "func-names": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
      },
      {
        name: "isFinite",
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
      },
    ].concat(confusingBrowserGlobals),
    "prefer-destructuring": "off",
    strict: ["error", "global"],
  },
};
