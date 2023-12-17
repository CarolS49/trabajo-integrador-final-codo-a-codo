module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.vue"],
      extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
      },
    },
  ],
};
